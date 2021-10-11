from flask import Flask, request, render_template
from flask.helpers import send_from_directory
from flask_cors import CORS
from werkzeug.utils import  secure_filename
from api.get_rgb import GetRgb, CompareColors, ConnectImage
from api.split import SplitOriginal
import pykakasi
import shutil
import os
import cloudinary
import cloudinary.uploader
from PIL import Image
import glob
import cv2
import random
import string
import time


CLOUD_NAME = os.environ["CLOUD_NAME"]
API_KEY = os.environ["API_KEY"]
API_SECRET = os.environ["API_SECRET"]


cloudinary.config(
  cloud_name = CLOUD_NAME,
  api_key = API_KEY,
  api_secret = API_SECRET
)

make_course = ""

class Kakashi:
    kakashi = pykakasi.kakasi()
    kakashi.setMode("H", "a")
    kakashi.setMode("K", "a")
    kakashi.setMode("J", "a")
    conv = kakashi.getConverter()

    @classmethod
    def japanese_to_ascii(cls, japanese):
        return cls.conv.do(japanese)


app = Flask(__name__, static_folder='frontend/build', static_url_path='')
CORS(app)


#fullscaleモードの素材画像を保存する
@app.route("/download",methods=["GET", "POST"])
def download():
    if request.method == "GET":
        return render_template("index.html")
    elif request.method == "POST":
        download_material_path = "./frontend/build/static/images/fullscale_images"
        data = request.files.getlist("file")
        for id,name in enumerate(data):
            ascii_filename = Kakashi.japanese_to_ascii(name.filename)
            save_filename = secure_filename(ascii_filename)
            name.save(os.path.join(f"{download_material_path}/download_material_files/", save_filename))

            img = cv2.imread(f"{download_material_path}/download_material_files/{save_filename}")
            height = img.shape[0]
            width = img.shape[1]
            adjust_height = (41 / height)
            adjust_width = (41/ width)
            img1 = cv2.resize(img, (int(width * adjust_width), int(height * adjust_height)))
            img2 = img1[0: 40, 0: 40]
            cv2.imwrite(f"{download_material_path}/big_material_files/canvas{id}.png", img2)
            img3 = cv2.resize(img2, (5, 5))
            cv2.imwrite(f"{download_material_path}/small_material_files/canvas{id}.png", img3)

        return {"bool": "true"}


@app.route("/upload",methods=["POST"])
def upload():
    global make_course
    if request.method == "POST":
        time.sleep(1)
        download_file_path = "./frontend/build/static/images/download_images"
        randlst = [random.choice(string.ascii_letters + string.digits) for i in range(6)]
        randstr = ''.join(randlst)
        file = request.files["file"]
        ascii_filename = Kakashi.japanese_to_ascii(file.filename)
        save_filename = secure_filename(ascii_filename)
        file.save(os.path.join(download_file_path, save_filename))

        name = glob.glob(f"{download_file_path}/{save_filename}")
        img = Image.open(name[0])
        img_resize = img.resize((400, 400))
        img_resize.save(os.path.join(download_file_path,f"resize_image{randstr}.png"))
        split_filename = save_filename.split('.')
        send_filename = split_filename[0]



        filename = f"{download_file_path}/resize_image{randstr}.png"

        if make_course == True:
            time.sleep(1)
            split_image = SplitOriginal(8, filename,"./frontend/build/static/images/split_original_files")
            split_image.split_image()

            time.sleep(1)
            read_original = GetRgb("/split_original_files")
            read_material = GetRgb("simple_images/small_material_files")
            original_rgb = read_original.get_rgb()
            material_rgb = read_material.get_rgb()
            compare_rgb = CompareColors(original_rgb, material_rgb)
            culculate_difference = compare_rgb.compare()

            time.sleep(1)
            create_mosaic = ConnectImage(8, 400, culculate_difference,"simple_images", f"mosaic_image{randstr}.png")
            create_mosaic.connect_image()

        elif make_course == False:
            split_image = SplitOriginal(8, filename,"./frontend/build/static/images/split_original_files")
            split_image.split_image()

            read_original = GetRgb("/split_original_files")
            read_material = GetRgb("fullscale_images/small_material_files")
            original_rgb = read_original.get_rgb()
            material_rgb = read_material.get_rgb()
            compare_rgb = CompareColors(original_rgb, material_rgb)
            culculate_difference = compare_rgb.compare()

            create_mosaic = ConnectImage(8, 400, culculate_difference, "fullscale_images", f"mosaic_image{randstr}.png")
            create_mosaic.connect_image()


        cloudinary.uploader.upload(file=f"./frontend/build/static/images/download_images/mosaic_image{randstr}.png", public_id=f"download_images/{send_filename}{randstr}")
        # cloudinary.uploader.upload(file=f"./frontend/build/static/images/download_images/resize_image{randstr}.png", public_id=f"download_images/resize_image{randstr}")


        return {"image":f"https://res.cloudinary.com/shoimages/download_images/{send_filename}{randstr}.png"}


@app.route("/make",methods=["GET", "POST"])
def make_files():
    base_url ="./frontend/build/static/images"
    fullscale_exist = os.path.exists(f"{base_url}/fullscale_images")
    split_exist = os.path.exists(f"{base_url}/split_original_files")
    donwload_exist = os.path.exists(f"{base_url}/download_images")
    if fullscale_exist == False:
        os.mkdir(f"{base_url}/fullscale_images/")
        os.mkdir(f"{base_url}/fullscale_images/big_material_files")
        os.mkdir(f"{base_url}/fullscale_images/small_material_files")
        os.mkdir(f"{base_url}/fullscale_images/download_material_files")

    if split_exist == False:
        os.mkdir(f"{base_url}/split_original_files/")


    if donwload_exist == False:
        os.mkdir(f"{base_url}/download_images/")


    return {"name": "showatanabe"}



@app.route("/remake",methods=["GET", "POST"])
def remake_files():
    base_url ="./frontend/build/static/images"
    shutil.rmtree(f"{base_url}/download_images/")
    os.mkdir(f"{base_url}/download_images/")
    shutil.rmtree(f"{base_url}/split_original_files/")
    os.mkdir(f"{base_url}/split_original_files/")

    return {"name": "showatanabe"}


@app.route("/delete",methods=["GET","POST"])
def delete_files():
    global make_course
    course = request.json["course"]
    make_course = course
    base_url = "./frontend/build/static/images"
    if make_course == True:
        shutil.rmtree(f"{base_url}/download_images/")
        os.mkdir(f"{base_url}/download_images/")
        shutil.rmtree(f"{base_url}/split_original_files/")
        os.mkdir(f"{base_url}/split_original_files/")
    elif make_course == False:
        shutil.rmtree(f"{base_url}/download_images/")
        os.mkdir(f"{base_url}/download_images/")
        shutil.rmtree(f"{base_url}/split_original_files/")
        os.mkdir(f"{base_url}/split_original_files/")
        shutil.rmtree(f"{base_url}/fullscale_images/big_material_files/")
        os.mkdir(f"{base_url}/fullscale_images/big_material_files/")
        shutil.rmtree(f"{base_url}/fullscale_images/small_material_files/")
        os.mkdir(f"{base_url}/fullscale_images/small_material_files/")
        shutil.rmtree(f"{base_url}/fullscale_images/download_material_files/")
        os.mkdir(f"{base_url}/fullscale_images/download_material_files/")

    return {"name": "showatanabe"}


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run()
