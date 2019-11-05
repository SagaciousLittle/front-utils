# 前端工程化工具（适用于不能连接公网的同学）
## 功能
- 转义高版本JS语法
- 统一JS文件语法格式
- 编译sass为css
- 为css添加兼容性前缀
- more...
## 使用步骤
- 确保环境以安装node，可在命令行环境执行`node -v`或者`npm -v`确认
- 确保在根目录下（`src` 同级目录）执行命令
- 命令： `npm start` ，启动监听服务，自动将 `src` 下文件编译到 `dist` 目录下
- 命令： `npm run clear` ，手动清空 `dist` 文件夹
- 命令： `npm run fix` ，手动修复 `src` 目录下 `js` 文件样式
- more...
## 注意事项
### 本服务基于以下开源库
- gulp
- babel
- eslint
- sass
- autoprefixer
- more...
### gulpfile.js为任务配置文件，可酌情更改
### src文件夹为源代码路径，现存代码为样例代码，可删除
### dist文件夹为编译后代码路径，现存代码为样例代码，可删除
### 为方便用户，跟路径下保留node-windows安装包一个，未做特殊更改，可去官网下载
