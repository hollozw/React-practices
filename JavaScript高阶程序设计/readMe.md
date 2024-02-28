### JavaScript高阶程序设计

#### JavaScript结构
> JavaScript的实现：主要包含核心(ECMAScript)，文档对象模型(DOM)，浏览器对象模型(BOM)

- ECMAScript(语法):
  - 只是实现中共规范描述的所有方面的一门语言的称呼(JavaScript实现了ECMAScript)
  - 在基础层面，描述该语言的部分：语法、类型、语句、关键字、保留字、操作符、全局对象
- DOM:
  - 一个应用编程接口(API)HTML 或XML 页面的每个组成部分都是一种节点，包含不同的数据。
  - DOM提供与网页内容交互的方法和接口。DOM 通过创建表示文档的树，让开发者可以随心所欲地控制网页的内容和结构。使用DOM API，可以轻松地删除、添加、替换、修改节点,比如下面的HTML 页面

```javaScript
<html> 
    <head> 
        <title>Sample Page</title> 
    </head> 
    <body> 
        <p> Hello World!</p> 
    </body> 
</html> 
```
- 这些代码通过DOM 可以表示为一组分层节点：

[图1](图1.png)

- BOM
  - 浏览器对象模型(BOM)，用于支持访问和操作浏览器的窗口，主要针对浏览器窗口和子窗口
  - 不过人们通常会把任何特定于浏览器的扩展都归在BOM 的范畴内
    - 弹出新浏览器窗口的能力
    - 移动、缩放和关闭浏览器窗口的能力
    - navigator 对象，提供关于浏览器的详尽信息
    - location 对象，提供浏览器加载页面的详尽信息
    - screen 对象，提供关于用户屏幕分辨率的详尽信息
    - performance 对象，提供浏览器内存占用、导航行为和时间统计的详尽信息
    - 对cookie 的支持
    - 其他自定义对象，如XMLHttpRequest 和IE 的ActiveXObject
---
#### Script标签
> JS插入HTML的主要方法是使用<script>元素

- 注意：**外部 JavaScript 文件的扩展名是.js。这不是必需的，因为浏览器不会检查所包含 JavaScript 文件的扩展名。这就为使用服务器端脚本语言动态生成 JavaScript 代码，或者在浏览器中将JavaScript 扩展语言（如TypeScript，或React 的JSX）转译为JavaScript提供了可能性，不过要注意，服务器经常会根据文件扩展来确定响应的正确MIME 类型。如果不打算使用.js 扩展名，一定要确保服务器能返回正确的MIME 类型**

- 其中<script>标签中有8个属性：async、charset、crossorigin、defer、integrity、language（废弃）、src、type
  - async:表示应该立即开始下载脚本，但不能阻止其他页面动作,比如下载资源或等待其他脚本加载，**只对外部脚本文件有效**。
  - crossorigin:配置相关请求的CORS（跨源资源共享）设置。默认不使用CORS
    - 参数: anonymous（配置文件侵权不必设置凭据标志）、use-credentials（设置凭据标志，意味着出站请求会包含凭据）。
  - defer:表示脚本可以延迟到文档完全被解析和显示之后再执行**只对外部脚本文件有效**。
  - src：表示包含要执行的代码的外部文件
  - type:代替language,始终都是"text/javascript",JavaScript 文件的 MIME 类型通常是"application/x-javascript"，不过给type 属性这个值有可能导致脚本被忽略，在非 IE 的浏览器中有效的其他值还有"application/javascript"和"application/ecmascript"。这个值是module，则代码会被当成ES6 模块，而且只有这时候代码中才能出现import 和export 关键字