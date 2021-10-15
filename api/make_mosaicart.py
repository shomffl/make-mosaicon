from api.make_process.get_rgb import GetRgb
from api.make_process.compare_colors import  CompareColors
from api.make_process.connect_images import ConnectImage
from api.make_process.split_image import SplitImage


#モザイクアートを作成するための処理を一つにまとめたクラス
class MakeMosaicon:

    def __init__(self, create_course, base_path, reference_filename, mosaic_filename):
        self.create_course = create_course
        self.base_path = base_path
        self.reference_filename = reference_filename
        self.mosaic_filename = mosaic_filename

    def make_mosaic(self):
        #オリジナル画像を細かく分割する
        split_image = SplitImage(8, self.reference_filename,"./frontend/build/static/images/split_original_files")
        split_image.split_image()

        #細かく分割してオリジナル画像の画素値を読み込んでリストに格納する
        read_original = GetRgb(self.base_path, "split_original_files")
        original_rgb = read_original.get_rgb()

        #素材画像の画素値を読み込んでリストに格納する
        read_material = GetRgb(self.base_path, f"{self.create_course}/small_material_files")
        material_rgb = read_material.get_rgb()

        #取得した画素値同士を比較して、最も差の小さい素材画像を特定する
        compare_rgb = CompareColors(original_rgb, material_rgb)
        culculate_difference = compare_rgb.compare()

        #最も差の小さい素材画像同士を結合して、モザイクアートを作成する
        create_mosaic = ConnectImage(8, 400, self.base_path, culculate_difference, self.create_course, f"{self.mosaic_filename}.png")
        create_mosaic.connect_image()
