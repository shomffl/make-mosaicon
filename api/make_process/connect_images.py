import cv2
import numpy as np

#画像を結合する
class ConnectImage():

    def __init__(self, size, length, base_path, min_numbers, course_name, save_name):
        self.size = size
        self.length = length
        self.base_path = base_path
        self.min_numbers = min_numbers
        self.course_name = course_name
        self.save_name = save_name

    def connect_image(self):
        #一行に何個の画像を結合するのか決める
        side = self.length
        img_num = int(side / self.size)

        #一行に結合する画像の個数分でリストを分割
        split_list = np.array_split(self.min_numbers, img_num)

        #モザイクアート作成用の画像を読み込む
        big_img_read = [[cv2.imread(f"{self.base_path}/{self.course_name}/big_material_files/canvas{i[j]}.png")  for j in range(img_num)] for i in split_list]

        #リストに格納されているファイル名の画像を結合していく
        cul = cv2.vconcat([cv2.hconcat(i) for i in big_img_read])

        #作成したモザイクアートを指定されたフォルダに保存する
        cv2.imwrite(f"{self.base_path}/download_images/{self.save_name}", cul)
