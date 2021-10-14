#オリジナル画像と要素画像の画素値を比較し、最も近い色の要素タイルを選んでいく。
class CompareColors():

    def __init__(self, original, material):
        self.original = original
        self.material = material


    def compare(self):

        #オリジナル画像の分割数を取得する
        original_num = len(self.original)

        #素材画像が何枚あるか取得する
        material_num = len(self.material)

        difference_list = []
        #細かく分割したオリジナル画像一枚一枚に対して、素材画像全ての平均画素値を比較する。
        for j in range(original_num):
            one_image_difference_list = [((self.original[j][0] - self.material[i][0])**2)+((self.original[j][1] - self.material[i][1])**2)+\
                  ((self.original[j][2] - self.material[i][2])**2) for i in range(material_num)]

            #比較した数値の差が最も小さい値を求める
            min_num = min(one_image_difference_list)

            #最も平均画素値の差が小さい画像のファイル名を求める
            min_filename = one_image_difference_list.index(min_num)

            #最も平均画素値の差が小さい画像のファイル名をリストに格納していく
            difference_list.append(min_filename)

        return difference_list
