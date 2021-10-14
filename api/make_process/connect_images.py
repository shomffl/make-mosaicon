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
        side = self.length
        img_num = int(side / self.size)

        list1 = np.array_split(self.min_numbers, img_num)

        big_img = [[cv2.imread(f"{self.base_path}/{self.course_name}/big_material_files/canvas{i[j]}.png")  for j in range(img_num)] for i in list1]


        cul = cv2.vconcat([cv2.hconcat(i) for i in big_img])


        cv2.imwrite(f"{self.base_path}/download_images/{self.save_name}", cul)
