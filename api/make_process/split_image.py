import cv2
import os


#オリジナル画像を指定したサイズで分割する。
class SplitImage:

    def __init__(self, size, filename, output_path):
        self.size = size
        self.filename = filename
        self.output_path = output_path

    def split_image(self):
        #画像を読み込んで画像の幅を取得する
        img = cv2.imread(self.filename)
        side = img.shape[0]

        #画像を一行何分割するか決定する
        img_num = int(side / self.size)

        #分割する画像の座標を指定してオリジナルの画像を切り分けていく
        original_list = [img[(i * self.size) : ((i+1)*self.size), (j * self.size) : ((j+1) * self.size)]
                         for i in range(img_num) for j in range(img_num)]

        #分割した画像をフォルダに保存する
        for num, list_num in enumerate(original_list):
            cv2.imwrite(os.path.join("{}/canvas{}.png".format(self.output_path,num)),list_num)
