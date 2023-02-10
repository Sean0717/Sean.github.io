#!/usr/bin/env sh

# 忽略错误
set -e  #有错误抛出错误

# 构建
pnpm run build  #然后执行打包命令

# 进入待发布的目录
cd docs/.vitepress/dist  #进到dist目录

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init  #执行这些git命令
git add -A
git commit -m 'deploy'

# git push -f git@github.com/codeBlog2023.git master:gh-pages  #提交到这个分支
# 如果部署到 https://<USERNAME>.github.io
git push -f git@github.com:Sean0717/Sean0717.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -

rm -rf docs/.vitepress/dist  #删除dist文件夹