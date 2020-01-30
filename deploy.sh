#!/usr/bin/env sh
# 當發生錯誤時終止腳本運行
set -e
# 打包
npm run build:prod
# 移動至到打包後的dist目錄 
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/artminda/artminda.github.io.git master:gh-pages
cd -