import shutil
import os

class MakeSimpleFolder:

    def __init__(self, path):
        self.path = path

    def make_folder(self):
        shutil.rmtree(f"{self.path}/split_original_files/")
        os.mkdir(f"{self.path}/split_original_files/")
        shutil.rmtree(f"{self.path}/download_images/")
        os.mkdir(f"{self.path}/download_images/")


class MakeFullScaleFolder:

    def __init__(self, path):
        self.path = path

    def make_folder(self):
        shutil.rmtree(f"{self.path}/fullscale_images/big_material_files/")
        os.mkdir(f"{self.path}/fullscale_images/big_material_files/")
        shutil.rmtree(f"{self.path}/fullscale_images/small_material_files/")
        os.mkdir(f"{self.path}/fullscale_images/small_material_files/")
        shutil.rmtree(f"{self.path}/fullscale_images/download_material_files/")
        os.mkdir(f"{self.path}/fullscale_images/download_material_files/")
