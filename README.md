# electron

## 概要

- Mac/Linux/Windows で動作するデスクトップアプリケーションを作るためのフレームワーク
- JavaScript/HTML5
- AtomのエディタもElectronでできている

## 公式サイト

- https://electron.atom.io

## 知識

- HTML5/CSS3
- JavaScript
- Web Storage

## 環境

```
$ node -v
v6.11.1
$ npm -v
3.10.10
$ node_modules/.bin/electron -v
v1.6.11
```

## ビルド

```
$ node_modules/.bin/electron-packager ./ MyApp --platform=darwin --arch=x64 --electron-version=1.6.11
```
