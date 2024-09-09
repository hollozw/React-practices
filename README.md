### 仅仅用来进行练习
***
#### 配置react-ts-babel-webpack
1. 先将webpack的文件获取

```
npm run eject
```

2. 下载所需要的文件

```
# 下载babel相关的文件
npm install --save-dev @babel/core @babel/preset-env @babel/preset-typescript

# 下载ts相关文件
npm install typescript

```
3. 创建文件babel.config.json和tsconfig.json文件,并写相关配置

#### 项目在热更新以及打包的具体流程
> 该项目使用：webpack,typescript,babel等
- 保存代码：首先，你需要将你的代码更改保存下来。
编译TypeScript代码：Webpack使用TypeScript编译器将
- TypeScript代码编译为JavaScript代码。编译过程中，Webpack会解析TypeScript代码并生成一个JavaScript的AST（抽象语法树）。转换JavaScript代码：Babel使用其转换规则将生成的
- JavaScript AST转换为纯ES5的JavaScript代码。这个转换过程包括将ES6+的语法转换为ES5，以及将一些特定的代码风格或模式转换为其他形式。
- 打包JavaScript代码：Webpack将转换后的JavaScript代码打包成一个或多个bundle。这个过程包括将依赖关系图中的模块链接起来，并生成一个或多个bundle文件。
- 更新页面：当Webpack完成打包后，它会将生成的bundle文件输出到指定的输出目录（通常是dist目录）。然后，你可以通过浏览器访问该目录下的index.html文件来查看更新后的页面。


#### 配置@路由别名
- 该项目为webpack来打包，配置效果需要在webpack中配置
``` javaScript
resolve : {
  alias: {
    "@": 'src',
  }
}
```
- 但是，该项目使用到的项目为ts，所以需要在ts中也配置路由不然会存在标红报错(应该只是检查的效果，目前是这样认为的23-12-20)
``` typeScript
compilerOptions {
  baseUrl: ".",
  paths: {
    "@/*": ["src/*"]
  }
}
```

#### 配置prettier格式化和eslint格式检查
- 安装就行

``` shell
npm install prettier -D
npm install eslint -D
```

- 后配置相应的文件:
  - .prettierignore和.prettierrc.js文件
  - .eslintignore和.eslint.js

#### 在ts文件中使用.png等其他格式的文件
- 打包部分：webpack配置图片相关的loader
- 声明部分：需要先在全局中声明.png这个文件，防止ts报错提示


- 全局的.d.ts文件中都可以声明
``` typeScript
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
```