import os
import cv2
from werkzeug.utils import  secure_filename
from api.convert_name import Kakashi

#fullscaleモードの素材に使う画像のダウンロードプログラム
class DownloadMaterialImage:

    def __init__(self, filepath, data):
        self.filepath = filepath
        self.data = data

    def save_files(self):
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
            cv2.imwrite(f"{self.filepath}/big_material_files/canvas{id}.png", big_material_img)

            #保存された画像を5×5の多き際にサイズ変更して保存する
            small_material_img = cv2.resize(big_material_img, (5, 5))
            cv2.imwrite(f"{self.filepath}/small_material_files/canvas{id}.png", small_material_img)
