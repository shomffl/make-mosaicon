# MAKE MOSAICON

MAKE MOSAICON は SNS で使うアイコンをモザイクアートに変換することができるアプリです。  
モザイクアートとは小さな画像を大量に使って 1 枚の写真を作り上げるアートです。

# Description

モザイクアートを作成するには、モザイクアートに変換したい画像が1枚（以下、オリジナル画像）、モザイクアートの素材となる画像（以下、素材画像）が 100 枚以上必要となります。  
そして、このアプリでは **simple モード**と **fullscalse モード**の二つがあります。  
**simple モード**ではモザイクアートの作成に必要となる大量の素材画像を用意する必要がありません。簡単にモザイクアートを楽しみたい人には simple モードがおススメです。  
**fullscale モード**は素材画像を準備する必要がありますが、その分よりオリジナリティのあるモザイクアートを作成できます。家族や友人との思い出の写真を、一枚のアートに閉じ込めたい人には fullscale モードがおススメです。

# DEMO

<img src="https://user-images.githubusercontent.com/89062440/137499765-3d0ee275-0b0c-456d-a807-c8912356cf96.gif" height="400vmax">
<img src="https://user-images.githubusercontent.com/89062440/137502253-7f0cb8f1-fb19-47cc-8580-5eeefccbbda4.gif" width="400vmax">

# Link
デプロイ先はherokuです。  
https://make-mosaicon.herokuapp.com/


# Features

このアプリを作るうえで最も工夫した点は、出来る限り処理時間を短くしつつ尚且つ綺麗なモザイクアートを作成するということです。今回のプログラムではモザイクアートを作成するにあたって、最初にオリジナル画像は細かく分割し、素材画像は縮小しています。  

次に、細かく分割されたオリジナル画像の一部と、縮小した素材画像の平均画素値を、1枚1枚比較することで、最も似ている画像を選択・結合しています。  

この時、素材画像を縮小すればするほど、読み取る必要のある画素値の数が減るため処理時間は短くなります。しかし、素材画像を縮小しすぎるとその画像が何の画像か判別が難しくなり、写真を拡大した際に小さな写真が大量に並んでいるというモザイクアートの醍醐味が失われてしまいます。  

そこで私は、素材画像を画素値読み込み用と画像結合用に縮小サイズを変えて 2 パターン用意しました。画素値の読み込みには、小さいサイズの素材画像を使って結合する順番だけ決定し、その順番に基づいて大きいサイズの素材画像を結合することで、処理時間を短縮しつつモザイクアートの完成度を高めることができました。

# Coding languages
バックエンド
- Python -- Flask

フロントエンド
- JavaScript -- React

# Requirement

- Flask 2.0.1
- numpy 1.21.2
- opencv-python 4.5.3.56
- pykakasi 2.2.1
- gunicorn 20.1.0


# Installation

```bash
pip install Flask
pip install numpy
pip install opencv-python
pip install pykakasi

#デプロイする場合
pip install gunicorn
```

# Usage

```bash
git clone https://github.com/shomffl/make-mosaicon.git

#ルートディレクトリで
flask run
```

# Note
稀に作成したモザイクアートが表示されないエラーがあります。現在、原因を調査中です。


# Author

- 渡邊頌
- 青山学院大学社会情報学部社会情報学科
- a8119224@aoyama.jp

# License

"MAKE MOSAICON" is under [MIT license]
