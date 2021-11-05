# npm 发布指南

## 注意事项

-   发布人需要熟悉 npm 文档，能够预计当前 npm 发布计划可能对即将要发布的代码可能产生的影响
-   处于 npm 版本资源有限和保持 npm 代码库版本可用的目的，请谨慎发布 npm 版本，不随意发布当前还处于开发状态的代码

## 官方文档

-   [How to Publish & Update a Package](https://docs.npmjs.com/getting-started/publishing-npm-packages)
-   [How to Label Packages with Dist-tags](https://docs.npmjs.com/getting-started/using-tags)

## 简易发布指南

1. 发布前，确认当前代码开发状态，确认当前版本号的 tag 是 beta 版本还是 latest 版本（正式版）
2. 发布前查看已有 versions 及 tags，我们使用了以下 tag：

-   latest 最新稳定版本，用户默认安装的版本就是 latest
-   beta 测试版本
-   alpha 试验版本

3. 使用 npm version 命令管理版本号，而不是手动修改版本号。
   当然如果你非常清楚[semantic version](https://docs.npmjs.com/misc/semver)，使用类似`1.3.2-alpha.1`也 OK
4. 根据当前要发布的版本状态，使用 npm publish 或 npm publish --tag beta 发布正式版或 beta 版本
5. cnpm 每隔 10 分钟同步一次，着急使用可以移步[TAONPM](https://npm.taobao.org/package/ppfish)点击 SNYC 链接手动同步。

```bash****
# 查看tags
npm view stbui dist-tags

# 查看versions
npm show stbui versions

# 预发布
git add -A && git commit -m "c"
npm version prerelease
npm publish --tag beta 指定tag为beta并发布

# 发布
git add -A && git commit -m "c"
npm version major/minor/patch
npm publish 默认以latest发布

#为Github项目打tag
git push origin master --tags

# 当前版本1.3.2出现了BUG，需要切回之前的版本或者指定的1.3.1版本
npm dist-tags ls
npm dist-tags rm stbui@1.3.2 latest
npm dist-tags add stbui@1.3.1 latest
```

## 实际发布流程举例

对于大型项目来说，发布一个大版本，大致会经过以下的流程，即预发一些预备版本。

v1.3.2-alpha.1
v1.3.2-beta.1
v1.3.2-beta.2
v1.3.2-rc.1
v1.3.2-rc.2
v1.3.2
操作步骤如下。

```bash
# 更新版本号
$ npm version 1.3.2-alpha.1

# 打包dist（可选，提供umd规范的包）
$ npm run build:dist

# 编译 es 和 lib
$ npm run build:others

# 在本地测试打包，检查打包后的文件是否完整，测试该包
$ npm pack

# 使用alpha标签发布该版本 (可选，默认使用latest发布)
$ npm publish --tag alpha

# 安装使用该版本
npm i stbui@alpha
```
