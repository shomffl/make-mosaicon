import cv2

fname_1 = "../frontend/build/static/images/simple_images/big_material_files/canvas0.png" #1つ目の画像ファイル名
fname_2 = "../frontend/build/static/images/simple_images/big_material_files/canvas1.png" #2つ目の画像ファイル名

img_1 = cv2.imread(fname_1) #画つ目の像を読み出しオブジェクトimg_1に代入。画像サイズは400x267px
img_2 = cv2.imread(fname_2) #画つ目の像を読み出しオブジェクトimg_2に代入。画像サイズは400x267px

img_hconcat = cv2.hconcat([img_1, img_2])  #オブジェクトimg_1、img_2を縦に連結しオブジェクトimg_hconcatに代入

cv2.imshow("hconcat",img_hconcat) #別ウィンドウを開き(ウィンドウ名 "hconcat)オブジェクトimg_hconcatを表示

# cv2.waitKey(0) #キー入力待ち
# cv2.destroyAllWindows() #ウインドウを閉じる
