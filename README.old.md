# astro-practice

ReactはSPA（Single Page Application）であり、静的コンテンツの開発には向かないようなので、
MPAフレームワークであるAstroを採用してみる  

# 環境条件

- dockerが利用可能であること

# 初期化方法

nodejsコンテナからcreate astro@latestを実行
空ディレクトリかつウィザード形式
```
docker run --rm -v $PWD:/src -w /src -u `id -u`:`id -g` -it node:lts /bin/bash
npm create astro@latest
```

# 実行方法

```
docker run --rm -v $PWD:/src -w /src -u `id -u`:`id -g` -p 4321:4321 -it node:lts /bin/bash
npm run dev 
# または npm run astro dev --host
```
localhost:4321 へアクセスすると、ページを表示  
dockerから実行する場合は `astro dev` コマンドに `--host` フラグが必要


react routerの導入
```
yarn add react-router-dom
```

# 参考

https://astro.build/