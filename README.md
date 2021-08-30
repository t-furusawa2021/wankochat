## わんこチャット
ログイン機能とチャット機能のあるシングルページアプリケーションです。

![image](https://user-images.githubusercontent.com/65487142/131284802-96458883-e5e9-47d7-bf39-083d4cd47365.png)

![image](https://user-images.githubusercontent.com/65487142/131284912-ab440f90-fce4-42a8-854e-64e17b6995a7.png)

#### 使用言語
php 8.0.5

#### フレームワーク
laravel 8.4

#### フロントエンド
Vue.js 2.6
bootstrap-vue 2.21

### チャット機能を使うにあたって
laravel-echo-serverを使用して、broadcastingを行っています。

`./node_modules/.bin/laravel-echo-server start`を行ってサーバーを立ち上げてからアプリを使用してください。
