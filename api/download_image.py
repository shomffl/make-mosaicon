import os
import cv2
from werkzeug.utils import  secure_filename
from api.convert_filename import Kakashi
import glob

class DownloadOriginalImage:

    def __init__(self, filepath, random_str, filedata):
        self.filepath = filepath
        self.random_str = random_str
        self.filedata = filedata

    def save_file(self):
        ascii_filename = Kakashi.japanese_to_ascii(self.filedata.filename)
        save_filename = secure_filename(ascii_filename)
        self.filedata.save(os.path.join(self.filepath, save_filename))

        img = cv2.imread(f"{self.filepath}/{save_filename}")
        resize_img = cv2.resize(img, (400,400))
        cv2.imwrite(f"{self.filepath}/resize_image{self.random_str}.png", resize_img)



#fullscaleモードの素材に使う画像のダウンロードプログラム
class DownloadMaterialImage:

    def __init__(self, filepath, data):
        self.filepath = filepath
        self.data = data

    def save_files(self):
        list_num = len(glob.glob(f"{self.filepath}/small_material_files/*.png"))
        for id,name in enumerate(self.data):

            #ファイル名をアルファベットに変換
            ascii_filename = Kakashi.japanese_to_ascii(name.filename)

            #ファイル名に特殊文字などが含まれていた場合は変換する
            save_filename = secure_filename(ascii_filename)

            #画像を指定されたフォルダに保存する
            name.save(os.path.join(f"{self.filepath}/download_material_files/", save_filename))

            #保存された画像を40×40の大きさにサイズ変更して保存する
            img = cv2.imread(f"{self.filepath}/download_material_files/{save_filename}")
            big_material_img = cv2.resize(img, (40,40))
            cv2.imwrite(f"{self.filepath}/big_material_files/canvas{id + list_num}.png", big_material_img)

            #保存された画像を5×5の多き際にサイズ変更して保存する
            small_material_img = cv2.resize(big_material_img, (5, 5))
            cv2.imwrite(f"{self.filepath}/small_material_files/canvas{id + list_num}.png", small_material_img)
