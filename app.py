from flask import Flask, request, render_template
from flask.helpers import send_from_directory
from flask_cors import CORS
from werkzeug.utils import  secure_filename
from api.download_image import DownloadOriginalImage, DownloadMaterialImage
from api.make_mosaicart import MakeMosaicon
from api.convert_name import Kakashi
import shutil
import os
import cv2
from PIL import Image
import glob
import random
import string



#simpleモードとfullscaleモードを判別
make_course = ""

app = Flask(__name__, static_folder='frontend/build', static_url_path='')
CORS(app)


#fullscaleモードの素材画像を保存する
@app.route("/download",methods=["POST"])
def download():
    if request.method == "POST":
        download_material_path = "./frontend/build/static/images/fullscale_images"
        data = request.files.getlist("file")

        download_images = DownloadMaterialImage(download_material_path, data)
        download_images.save_files()

        return {"bool": "true"}

    else:
        return render_template("index.html")



@app.route("/upload",methods=["POST"])
def upload():
    global make_course
    if request.method == "POST":
        download_filepath = "./frontend/build/static/images/download_images"
        randlst = [random.choice(string.ascii_letters + string.digits) for i in range(8)]
        randstr = ''.join(randlst)
        file = request.files["file"]

        download_image = DownloadOriginalImage(download_filepath, randstr, file)
        download_image.save_file()

        reference_filename = f"{download_filepath}/resize_image{randstr}.png"

        if make_course == True:
            make_mosaicon = MakeMosaicon("simple_images", "./frontend/build/static/images", reference_filename, randstr)
            make_mosaicon.make_mosaic()

        elif make_course == False:
            make_mosaicon = MakeMosaicon("fullscale_images", "./frontend/build/static/images", reference_filename, randstr)
            make_mosaicon.make_mosaic()

        return {"image" : f"{randstr}.png"}

    else:
        return render_template("index.html")





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
    shutil.rmtree(f"{base_url}/split_original_files/")
    os.mkdir(f"{base_url}/split_original_files/")
    shutil.rmtree(f"{base_url}/download_images/")
    os.mkdir(f"{base_url}/download_images/")

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
