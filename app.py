from flask import Flask, request, render_template
from flask.helpers import send_from_directory
from werkzeug.utils import  secure_filename
from api.download_image import DownloadOriginalImage, DownloadMaterialImage
from api.make_mosaicart import MakeMosaicon
from api.make_folder import MakeSimpleFolder, MakeFullScaleFolder
import os
import random
import string


#simpleモードとfullscaleモードを判別
make_course = ""

app = Flask(__name__, static_folder='frontend/build', static_url_path='')


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
    else:
        pass

    if split_exist == False:
        os.mkdir(f"{base_url}/split_original_files/")
    else:
        pass

    if donwload_exist == False:
        os.mkdir(f"{base_url}/download_images/")
    else:
        pass

    return {"message": "file was maked"}


@app.route("/delete",methods=["GET","POST"])
def delete_files():
    global make_course
    course = request.json["course"]
    make_course = course
    base_url = "./frontend/build/static/images"

    if make_course == True:
        make_simple_folder = MakeSimpleFolder(base_url)
        make_simple_folder.make_folder()

    elif make_course == False:
        make_simple_folder = MakeSimpleFolder(base_url)
        make_simple_folder.make_folder()
        make_fullscale_folder = MakeFullScaleFolder(base_url)
        make_fullscale_folder.make_folder()

    return {"message": "file was remaked"}


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run()
