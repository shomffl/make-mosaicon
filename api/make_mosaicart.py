from api.make_process.get_rgb import GetRgb
from api.make_process.compare_colors import  CompareColors
from api.make_process.connect_images import ConnectImage
from api.make_process.split_image import SplitImage

class MakeMosaicon:

    def __init__(self, create_course, base_path, reference_filename, mosaic_filename):
        self.create_course = create_course
        self.base_path = base_path
        self.reference_filename = reference_filename
        self.mosaic_filename = mosaic_filename

    def make_mosaic(self):
        split_image = SplitImage(8, self.reference_filename,"./frontend/build/static/images/split_original_files")
        split_image.split_image()

        read_original = GetRgb(self.base_path, "split_original_files")
        read_material = GetRgb(self.base_path, f"{self.create_course}/small_material_files")
        original_rgb = read_original.get_rgb()
        material_rgb = read_material.get_rgb()
        compare_rgb = CompareColors(original_rgb, material_rgb)
        culculate_difference = compare_rgb.compare()

        create_mosaic = ConnectImage(8, 400, self.base_path, culculate_difference, self.create_course, f"{self.mosaic_filename}.png")
        create_mosaic.connect_image()
