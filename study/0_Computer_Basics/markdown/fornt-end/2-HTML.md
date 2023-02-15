# HTML

## 一: 简单了解

- `HTML `指的是超文本标记语言 (`Hyper Text Markup Language`), 是用来描述网页的一种语言, 但他不是一种编程语言, 是标记语言
- 标记语言是一套标记标签组成的 (`markup tag`)

> 超文本

所谓超文本，有2层含义

- 超越文本限制: 因为它可以加入图片、声音、动画、多媒体等内容

- 超级链接文本: 不仅如此，它还可以从一个文件跳转到另一个文件，与世界各地主机的文件连接

> 标记语言

- 由无数个标记（`标签、tag`)组成；

- 是对某些内容进行特殊的标记，以供其他解释器识别处理；

- 比如使用`<h2></h2>`标记的文本会被识别为“标题”进行加粗、文字放大显示；

- 由标签和内容组成的称为元素（`element`）

> `HTML`文件的拓展名是`.htm` 或者是 ``.html`

- `.htm`后缀  

在早期的`WIN98`操作系统中, 只能够支持三位数的文件后缀, 所以那个时候诞生的文件, 都是三位数以内的后缀,  `.doc`  `word`文档   `.avi`  视频文件   `.txt`  文本文件  `.jpg/jpe`  图片文件

- `.html`后缀

`win2000` 之后对文件的后缀长度不做限制,后缀就开始变得完整了, `.doc->.docx    .txt->.text  .jpe->.jpeg   .htm->.html`

因历史遗留问题，`Win95\Win98`系统的文件拓展名不能超过`3字符`，所以使用`.htm`

> 完整的`HTML`结构

文档声明

`html`元素

- `head`元素
- `body`元素

### 1. 骨架标签

> 全局架构标签

```html
<!doctype html>
<html lang="zh-CN">
    <head>
        <!--网页的思想   都是看不到的信息-->
    </head>
    <body>
        <!--网页的显示主题  都是看得到的信息-->
    </body>
</html>
```

| 标签名             | 定义       | 说明                                                         |
| ------------------ | ---------- | ------------------------------------------------------------ |
| `<html></html>`    | `HTML`标签 | 页面中最大的标签，我们称之为 **根标签**                      |
| `<head></head>`    | 文档的头部 | 注意在`head`标签中我们必须要设置的标签是`title`, 存放网页的元数据 |
| `<titile></title>` | 文档的标题 | 让页面拥有一个属于自己的网页标题                             |
| `<body></body>`    | 文档的主体 | 元素包含文档的所有内容，页面内容 基本都是放到`body`里面的    |

### 2. 元素

`HTML元素`是构建网站的基石

网页是由网页`元素`组成的 ， 这些`元素`是利用`html标签`描述出来，然后通过浏览器解析，就可以显示给用户了。

一个元素可以包含一个数据项，或是一块文本，或是一张照片，亦或是什么也不包含

> 元素的结构

![image-20220709103818951](assets/image/2-HTML/202207091038000.png)

```html
<标签名 属性名="属性值" 属性名="属性值">内容</标签名>
```

1. 开始标签（`Opening tag`）：包含元素的名称（本例为 `p`），被左、右尖括号所包围。表示元素从这里开始或者开始起作用

2. 结束标签（`Closing tag`）：与开始标签相似，只是其在元素名之前包含了一个斜杠。这表示着元素的结尾

3. 内容（`Content`）：元素的内容，本例中就是所输入的文本本身。

4. 元素（`Element`）：开始标签、结束标签与内容相结合，便是一个完整的元素。
5. 属性 (`Attribute`)  :  在开始标签中可以放置属性, 属性包含元素的额外信息，这些信息不会出现在实际的网页中, 并不是必要出现的。

> 一个属性必须包含如下内容

1. 一个空格，在属性和元素名称之间。(如果已经有一个或多个属性，就与前一个属性之间有一个空格。)

2. 属性名称，后面跟着一个等于号。

3. 一个属性值，由一对引号`“ ”`引起来。

> 属性的分类

有些属性是公共的，每一个元素都可以设置

- `class` :  一个以空格分隔的元素的类名（`classes `）列表，它允许 `CSS `和 `Javascript `通过类选择器或者`DOM`方法来选择和访问特定的元素
- `id` : 定义唯一标识符（`ID`），该标识符在整个文档中必须是唯一的。其目的是在链接（使用片段标识符），脚本或样式（使用 `CSS`）时标识元素
- `title`  : 包含表示与其所属元素相关信息的文本。 这些信息通常可以作为提示呈现给用户，但不是必须的。
-  `style` : 给元素添加内联样式
-  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes

有些属性是元素特有的，不是每一个元素都可以设置

- `meta`元素的`charset`属性

- `img`元素的`alt`属性

> 元素的嵌套

元素的内容除了可以是文本之外，还可以去其他元素，这样就形成了元素的嵌套。

![image-20220709103937898](assets/image/2-HTML/202207091039947.png)

> 需要注意

1. `HTML`标签的属性没有顺序限制.
2. 所有的单词字母符号, 都必须在英文半角下输入.
3. 一部分标签是单标签, 不需要内容

### 3. 命名规范

> 文件名称的规范

1. 使用`英文字符`, `下划线`或者`-`等字符组成
2. 尽量给文件取带有意义的文件名
3. 不要随便使用空格和特殊字符

*注意*: 组织->文件和文件夹选项->查看选项卡->高级设置部分->去掉"隐藏已知文件类型的扩展名"

> `HTML`标签名、类名、标签属性和大部分属性值统一用小写

```html
<head>     
        <title>我的第一个页面</title>
</head>
```

> 标签：

在`HTML`页面中，带有`<>`符号的元素被称为`HTML标签`，如上面提到的 &lt;`html`&gt;、&lt;`head`&gt;、&lt;`body`&gt;都是`HTML骨架结构标签`。

> 分类：

1. 常规元素（`双标签`）

```html
<标签名> 内容 </标签名>   比如 <body>  我是文字  </body>
```

* 该语法中`<标签名>`表示该标签的作用开始，一般称为“开始标签（start tag）”，`</标签名>`”表示该标签的作用结束，一般称为“结束标签（end tag）”。
* 和开始标签相比，结束标签只是在前面加了一个关闭符“`/`”。
* 我们以后接触的基本都是双标签

2. 空元素（`单标签`）

```html
<标签名 />  比如  <br />
```

空元素用单标签来表示， 简单点说，就是里面不需要包含内容， 只有一个开始标签不需要关闭。

> `XHTML`规范

1. 所有标签名, 属性名必须使用小写字母.
2. 所有标签必须闭合, 单标签自封闭
3. 所有属性必须有值, 单属性值为属性名
4. 所有属性值必须使用双引号
5. 所有标签必须合理嵌套, 一一对应
6. 特殊字符必须使用实体字符表示
7. 所有`img`标签必须添加`alt`属性
8. 所有注释内容中不允许出现`-`等信息,如果需要使用`-`,可以使用`=`代替

### 4. DOCTYPE

`HTML`最上方的一段文本我们称之为 `文档类型声明`，用于声明文档类型

```html
<!DOCTYPE html> 
```

> `<!DOCTYPE html> ` 就是告诉浏览器当前页面是`HTML5`页面, 按照`HTML5 `规范解析页面.
>
> 必须放在`HTML`文档的最前面，不能省略，省略了会出现兼容性问题

### 5. html

`<html>` 元素 表示一个 `HTML `文档的根（顶级元素），所以它也被称为根元素。 

所有其他元素必须是此元素的后代

###  6. lang

`W3C`标准建议为`html`元素增加一个`lang`属性

> 用于指定`html `语言种类

~~~html
<html lang="en">  
~~~

1. `en`定义语言为英语
2. `zh-CN`定义语言为中文

>  作用

简单来说，可能对于程序来说没有太大的作用，但是它可以告诉浏览器，搜索引擎，一些处理`Html`的程序对页面语言内容来做一些对应的处理或者事情。

- 根据根据`lang`属性来设定不同语言的`css`样式，或者字体
- 告诉搜索引擎做精确的识别
- 让语法检查程序做语言识别
- 帮助翻译工具做识别
- 帮助网页阅读程序做识别
- 帮助语音合成工具确定要使用的发音; 

### 7. head

`HTML` `head` 元素 规定文档相关的配置信息（也称之为元数据），包括文档的标题，引用的文档样式和脚本等。

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
		<meta name="Author" content="">
    <meta name="Keywords" content="" />
    <meta name="Description" content="" />
    <title>Document</title>
</head>
```

> `字符集`、`关键词`、页面`描述`、页面`标题`、`IE适配`、`视口`、`iPhone小图标`等等。

头标签内部的常见标签如下：

- `<title>`：指定整个网页的标题，在浏览器最上方显示。
- `<base>`：为页面上的所有链接规定默认地址或默认目标。
- `<meta>`：提供有关页面的基本信息
- `<body>`：用于定义`HTML`文档所要显示的内容，也称为主体标签。**我们所写的代码必须放在此标签內。**
- `<link>`：定义文档与外部资源的关系。

### 8. meta

`meta`表示 `“元”配置`，就是表示基本的配置项目。

浏览器信息设置标签,用于设置浏览器行为或者为搜索引擎设置信息.

> 为浏览器进行行为设置:

```html
<!--1. 设置浏览器的声明字符集, 字符集用 meta标签 中的 charset 定义-->
<!--字符集是多个字符的集合, 计算机要处理各种字符集文字，需要进行字符编码，以便计算机能够识别和存储各种文字。-->
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">

<!--2. 设置浏览器的刷新和跳转方式-->
<meta http-equiv="refresh" content="时间;url=地址" />

<!--3. 控制页面在移动端不要缩小显示。-->
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```

> 为搜索引擎进行的信息设置:

```html
<!--1. 设置关键字-->
<meta name="keywords" content="关键字,关键字,...." />
注意:关键字之间必须使用英文逗号分隔,关键字总字数尽量保持在60-80个字之间.

<!--2. 设置网站描述信息-->
<meta name="description" content="当前网站的描述,要使用通顺的语言!" />
注意:描述内容内容写人话,字数尽量保证在140个以内,80个左右比较好.
```

> 其他的设置:

```html
<!--3. 设置网站作者-->
<meta name="author" content="作者名称" />

<!--4. 设置开发工具-->
<meta name="generator" content="开发工具信息" />

<!--5. 设置网站修订时间及作者-->
<meta name="revised" content="作者,时间" />
```

### 9. base

设置默认的路径地址

```html
<base target="_blank" />
```

1. `base `可以设置整体链接的打开状态
2. `base `写到  `<head>  </head>`  之间
3. 未设置的链接都默认添加` target="_self"`

### 10. body

> 注意: 如果同时存在背景颜色和背景图片, 优先显示背景图片

| 属性         | 含义                   |
| ------------ | ---------------------- |
| `bgcolor`    | 用于设置页面的背景颜色 |
| `background` | 设置页面的背景图片     |

了解属性:

| 属性           | 含义                                       |
| -------------- | ------------------------------------------ |
| `link`         | 设置超链接正常状态的颜色                   |
| `alink`        | 设置鼠标点击超链接的颜色 (`active link`)   |
| `vlink`        | 设置鼠标点击过后的颜色                     |
| `topmargin`    | 设置网页内部内容距离顶浏览器视窗顶部的距离 |
| `leftmargin`   | 设置网页内部内容距离顶浏览器视窗左侧的距离 |
| `bottommargin` | 设置网页内部内容距离顶浏览器视窗底部的距离 |
| `rightmargin`  | 设置网页内部内容距离顶浏览器视窗右侧的距离 |

## 二: 常用标签

所有标签可以查看: https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element

### 1. 排版标签

排版标签主要和`css`搭配使用，显示网页结构的标签，是网页布局最常用的标签。

#### 1.1 标题标签

为了使网页更具有语义化，我们经常会在页面中用到标题标签，`HTML`提供了6个等级的标题作为标题使用，并且依据重要性递减

其基本语法格式如下：

```html
<h1>   标题文本   </h1>
<h2>   标题文本   </h2>
<h3>   标题文本   </h3>
<h4>   标题文本   </h4>
<h5>   标题文本   </h5>
<h6>   标题文本   </h6>
```

- `h1-h6`字体大小逐渐变小.
- 所有的`h系列标签`都是粗体标签
- 所有的`h系列标签`都会换行,独占一行
- `h1`在一个页面中只允许使用一次,用于当前页面的主要内容标题.
- `h3,h4`没有数量要求,对搜索引擎的影响很弱,可以忽略不计

> 注意

- 与 `SEO` 优化有关

#### 1.2 段落标签

> ​		表示一个自然段落. 在文章中比较常用, 段落格式参照外国文字效果, 首行不会缩进2个字符, 如果需要缩进,必须使用`CSS`来解决, `text-indent: 2em;` 来进行设置

可以把 `HTML 文档`分割为若干段落

在网页中要把文字有条理地显示出来，离不开段落标签，就如同我们平常写文章一样，整个网页也可以分为若干个段落，而段落的标签就是

```html
<p>  文本内容  </p>
```

是`HTML`文档中最常见的标签，默认情况下，文本在一个段落中会根据浏览器窗口的大小自动换行。

#### 1.3 水平线标签

在网页中常常看到一些水平线将段落与段落之间隔开，使得文档结构清晰，层次分明。这些水平线可以通过插入图片实现，也可以简单地通过标签来完成，`<hr />`就是创建横跨网页水平线的标签。

```html
<hr />
```

| 属性    | 作用             |
| ------- | ---------------- |
| `width` | 设置水平线的宽度 |
| `color` | 设置水平线的颜色 |

在网页中显示默认样式的水平线。

#### 1.4 换行标签

在`HTML`中，一个段落中的文字会从左到右依次排列，直到浏览器窗口的右端，然后自动换行。如果希望某段文本强制换行显示，就需要使用换行标签

```html
<br />
```

#### 1.5 div  span

`div   ` `span `   是没有语义的, 是我们网页布局主要的2个盒子

```html
<div> 这是头部 </div>    <span>今日价格</span>
```

他们两个都是盒子，用来装我们网页元素的， 只不过他们有区别

* `div标签`  用来布局的，但是现在一行只能放一个`div`,  是块标签的代表, 一般作为其他元素的父容器，把其他元素包住，代表一个整体
* `span标签`  用来布局的，一行上可以放好多个`span`,  是行内标签的代表, 行内标签也被称之为内联标签, 默认情况下，跟普通文本几乎没差别

> 行内标签和块状标签的区别:

1. 块状元素可以设置宽高, 行内元素不可以设置宽高
2. 块状元素不可以和其他元素在一行共存, 内联元素可以和内联元素在一行共存
3. 块状元素可以包含内联元素, 内联元素不可以包含块状元素

> 历史原因

网页的发展早期是没有`css`，这个时候我们必须通过 `html标签` 的语义化元素来告知浏览器一段文字如何显示,  产生了一个极端, 只是用 `html` 来显示页面

后来出现了`css`，结构和样式需要分离，这个时候`html`只需要负责结构即可, 这个时候就出现了`div、span`来编写`HTML`结构所有的结构，样式都交给`css`来处理

到现在, 通常情况下需要我们使用 `语义化标签 + css`来替换一味的使用 `div/span` 标签

虽然现在我们的页面也可以全部都是`div、span + css` , 但是并不推荐

#### 1.6 排版标签总结

| 标签名          | 定义       | 说明                                    |
| --------------- | ---------- | --------------------------------------- |
| `<hx></hx>`     | 标题标签   | 作为标题使用，并且依据重要性递减        |
| `<p></p>`       | 段落标签   | 可以把 `HTML `文档分割为若干段落        |
| `<hr />`        | 水平线标签 | 没啥可说的，就是一条线                  |
| `<br />`        | 换行标签   |                                         |
| `<div></div>`   | `div标签`  | 用来布局的，但是现在一行只能放一个`div` |
| `<span></span>` | `span标签` | 用来布局的，一行上可以放好多个`span`    |

> 拓展: `<pre>`

可定义预格式化的文本。

被包围在 `<pre> `标签 元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体。

```html
<pre>
  此例演示如何使用 pre 标签
  
  对空行和          空格
  进行控制
</pre>
```

所谓的预格式化文本就是 ，按照我们预先写好的文字格式来显示页面， 保留空格和换行等。

有了这个标签，里面的文字，会按照我们书写的模式显示，不需要段落和换行标签了。

### 2. 样式标签

样式标签现在已经不常使用到了, 可以了解就好

> 单纯的样式标签

| 标签 | 样式       | 相当于 `css `中的             |
| ---- | ---------- | ----------------------------- |
| `b`  | 粗体标签   | `font-weight: bold;`          |
| `i`  | 斜体标签   | `font-style: italic;`         |
| `i`  | 下划线标签 | `text-decoration: underline;` |

> 有强调意义的样式标签

|   标签   |           作用           |
| :------: | :----------------------: |
| `strong` |    具有强调意义的粗体    |
|  `cite`  | 具有强调意义的斜体字效果 |
|   `em`   | 具有强调意义的斜体字效果 |

> `center` 居中标签

标签中的内容会被自动居中, 但是 `css` 可以完成的事情完全不需要 `html `的标签

```html
<center>123</center>
```

> 自定义的样式标签

| `font`标签 | 自定义字体标签 |                                            |
| ---------- | -------------- | ------------------------------------------ |
| `color`    | 设置颜色       |                                            |
| `size`     | 设置字体大小   | 取值1-7                                    |
| `face`     | 设置字体类型   | 取值字体名称  (必须是操作系统中存在的字体) |

但是现在几乎不需要再去使用这些标签了, 样式的事情交给 `css`

> 参考链接

https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element

### 3. 列表标签

在开发一个网页的过程中, 很多数据都是以列表的形式存在的

> 无序列表 `ul`

无序列表的各个列表项之间没有顺序级别之分，是并列的。其基本语法格式如下：

```html
<ul>
  <li>列表项1</li>
  <li>列表项2</li>
  <li>列表项3</li>
  ......
</ul>
```

> 有序列表 `ol`

有序列表即为有排列顺序的列表，其各个列表项按照一定的顺序排列定义，有序列表的基本语法格式如下：

```html
<ol>
  <li>列表项1</li>
  <li>列表项2</li>
  <li>列表项3</li>
  ......
</ol>
```

所有特性基本与`ul `一致。  但是实际中比 无序列表 用的少很多。

> 自定义列表 `dl`

定义列表常用于对术语或名词进行解释和描述，定义列表的列表项前没有任何项目符号。其基本语法如下：

```html
<dl>
  <dt>名词1</dt>
  <dd>名词1解释1</dd>
  <dd>名词1解释2</dd>
  ...
  <dt>名词2</dt>
  <dd>名词2解释1</dd>
  <dd>名词2解释2</dd>
  ...
</dl>
```

注意:一个`dl`标签内部只允许有1个`dt`标签.`dd`标签不受数量限制.

### 4. 链接标签

在`HTML`中创建超链接非常简单，只需用标签把文字或者图像包括起来就好。

```html
<a href="跳转目标" target="目标窗口的弹出方式">文本或图像</a>
```

| 属性     | 作用                                                         |
| -------- | :----------------------------------------------------------- |
| `href`   | 用于指定链接目标的`url`地址，（必须属性）当为标签应用`href`属性时，它就具有了超链接的功能 |
| `target` | 用于指定链接页面的打开方式，其取值常见的有有`_self`和`_blank`两种，其中`_self`为默认值，`__blank`为在新窗口中打开方式。除此之外还有`_top`  在顶级页面打开(在框架集中使用), `_parent` 在父级页面打开(在框架集中使用), 自定义打开方式(在框架集中使用) |

> 注意：

1. 如果当时没有确定链接目标时，通常将链接标签的`href`属性值定义为“`#`”(即`href="#"`)，表示该链接暂时为一个空链接。
2. 不仅可以创建文本超链接，在网页中各种网页元素，如图像、表格、音频、视频等都可以添加超链接

> 使用的三种方式

- 普通超链接 

```html
<a href="地址">内容</a>
```

- 锚点连接

在需要跳转到的目的地, 使用`a`标签, `name`和`id` 属性定义锚点位置和名称

```html
<a name="锚点名称" id="锚点名称"></a>
```

在需要点击跳转的位置,使用正常的超链接设置跳转位置, `#`开头

```html
<a href="#锚点名称">内容</a>
```

 `style` 包含的是 `css`代码

```html
<body>
  <h2 id="title" style="height: 100vh">title</h2>
  <a href="#title">回到 title</a>
</body>
```

- 邮件连接(不推荐使用)

```html
<a href="mailto:邮箱地址">内容</a>
```

> `href` 跳转

当点击超链接时，除了上面的链接,  `href `的属性值的不同，可以产生很多种情况：

| 值 | 含义 |
| ---   | ---  |
| `href=""`                  |  刷新页面 |
| `href="#"`                 |  跳转到当前页面的顶部（不会刷新） |
| `href="javascript:void(0)"` |  什么都不做 |
| `href="javascript:;"`      |  什么都不做 |

### 5. 图像标签

要想在网页中显示图像需要使用图像标签`<img />`以及和他相关的属性。

```html
<img src="图像URL" />
```

> 设置`img`的`src`时，需要给图片设置路径

该语法中`src`属性用于指定图像文件的路径和文件名，是`img`标签的必需属性。

可以使用的值有

- 网络图片：一个`URL`地址, 网络图片的设置非常简单，给一个地址即可；

- 本地图片：本地电脑上的图片，后续会和`html`一起部署到服务；

> 本地图片的路径有两种方式

绝对路径

- 从电脑的根目录开始一直找到资源的路径

相对路径

- `./` 代表当前文件夹
- ` ../` 代表上级文件夹

对于网页来说，不管什么操作系统（`Windows、Mac、Linux`），路径分隔符都是 `/`，而不是` \`

> `alt`属性：不是强制性的，有两个作用

- 当图片加载不成功（错误的地址或者图片资源不存在），那么会显示这段文本；

- 屏幕阅读器会将这些描述读给需要使用阅读器的使用者听，让他们知道图像的含义；

> 宽度高度, 一般不用

`width属性`:  设置图片的宽度

`height属性`:  设置图片的高度

如果只设置宽高之一,则另一侧会等比例缩放,保证图片比例不变,但是如果同时设置宽度和高度,图片会被强制拉伸至指定的宽高

```html
	正常的<br />
    <img src="cz.jpg" width="300" height="300" /><br />
     带有边框的<br />
    <img src="cz.jpg" width="300" height="300" border="3" /><br />
	有提示文本的<br />
	<img src="cz.jpg" width="300" height="300" border="3" title="这是个小蒲公英" /><br />
	有替换文本的<br />
	<img src="cz.jpg" width="300" height="300" border="3" alt="图片不存在" />
```

> 要求`alt`和`title`属性必须同时书写而且内容必须一致.

`alt属性`  设置图片加载失败时显示的文字内容, 有描述图片的作用

`title属性`  设置图片正常加载时鼠标悬停的提示文字, 有描述图片的作用

> `border `一般不用

`border`属性 设置图片的边框宽度属性.一般不用, 偶尔用于取消低版本的`IE`浏览器图片带有连接时的蓝色默认边框.

> 支持图片的格式

![image-20220709173006193](assets/image/2-HTML/202207091730254.png)

> 点击图片跳转

```html
<a href="https://github.com/" target="_blank">
  <img src="https://avatars.githubusercontent.com/u/83682004?s=40&v=4" alt="">
</a>
```

### 6 .图像热点

能够实现在一张图片上面添加多种不同超链接效果的技术.

需要使用到`图片标签img`, `地图标签map`, `区域标签area`

> `map`标签  图像热点标签

| 属性   | 含义                   |
| ------ | ---------------------- |
| `name` | 用于设置热点地图的名称 |

> `area`标签  图像热点区域标签

|          |                            |                                                              |
| -------- | -------------------------- | :----------------------------------------------------------: |
| `shape`  | 设置热点区域的形状         |           `circle `圆形  `rect `矩形 `poly` 多边形           |
| `coords` | 热点区域记录属性           | `rect    `矩形， 规定有四个值，前两个表示左上角的坐标，后两个值表示右下角的坐标值 `<area shape="rect" coords="x1,y1,x2,y2" href="url" alt="" /> `                                  `circle ` 圆形，规定有三个值，前两个数表示圆心坐标，最后一个值表示圆的半径长度 `<area shape="rect" coords="x,y,z" href="url" alt="" />                                   `                                                                `poly`  多边形（任意图形），规定的值即为图形的每一个转折点的坐标值                       `<area shape="poly" coords="x1,y1,x2,y2,x3,y3" href="url" alt="" />` |
| `href`   | 设置热点区域的链接地址     |                                                              |
| `target` | 设置热点区域连接的打开方式 |                                                              |

> 使用方法

```html
<img src="test.png" usemap="#testmap" alt="" />
<map name="testmap" id="testmap">
	<area shape="circle" coords="100,100,100" href="test1.html" alt="" />
	<area shape="rect" coords="126,200,300,20" href="test2.html" alt="" />
	<area shape="poly" coords="0,100,100,50,60,90" href="test3.html" alt="" />
</map>
```

### 7. 表格标签

表格的现在还是较为常用的一种标签，但不是用来布局，常见显示、展示表格式数据。

特别是后台展示数据的时候表格运用是否熟练就显得很重要，一个清爽简约的表格能够把繁杂的数据表现得很有条理，虽然 `div `布局也可以做到，但是总没有表格来得方便。

在`HTML`网页中，要想创建表格，就需要使用表格相关的标签。

```html
<table>
  <tr>
    <td>单元格内的文字</td>
    ...
  </tr>
  ...
</table>
```

要深刻体会表格、行、单元格他们的构成。

在上面的语法中包含基本的三对`HTML`标签，分别为` table、tr、td`，他们是创建表格的基本标签，缺一不可，下面对他们进行具体地解释

> `table`定义一个表格标签, 用于定义表格的范围

| 属性 | 规则 | 属性值 |
| -- | -- | -- |
| `border`属性 | 设置表格的宽度 单位像素 | |
| `width`属性 |   设置表格的总宽度 | |
| `height`属性 |  设置表格的总高度 | |
| `align`属性 | 设置表格相对于外层标签的对其方式 | `left` 左对齐  `center` 水平居中 `right` 右对齐 |
| `cellspacing`属性 | 设置单元格之间的间隙大小 | |
| `cellpadding`属性 | 设置单元格中内容开始书写的位置 | |
| `bgcolor`属性 |  设置表格的背景颜色 | |


> `tr`标签 用于定义表格中的行，必须嵌套在 table标签中。

| 属性 | 规则 | 属性值 |
| -- | -- | -- |
| `bgcolor`属性 |  设置单元格行的背景原色,注意:如果存在表格颜色和行颜色,以行颜色为主 | |
| `align`属性 |  设置行内内容的水平对其方式 | `left` 左对齐  `center` 水平居中 `right` 右对齐 |
| `valign`属性 |  设置行内内容的垂直对其方式 | `top` 上对齐  `middle` 垂直居中 `bottom` 底部对齐 |
| `height`属性 |  设置当前行的行高 | |


> `td`标签  用于定义表格的单元格,存放表格中的数据

| 属性 | 规则 | 属性值 |
| -- | -- | -- |
| `bgcolor`属性 |   设置单元格的背景原色注意:如果存在表格颜色和行颜色和单元格颜色,以单元格色为主 |  |
| `align`属性 |   设置单元格内内内容的水平对其方式 | `left` 左对齐  `center` 水平居中 `right` 右对齐 |
| `valign`属性 |   设置单元格内内内容的垂直对其方式 | `top` 上对齐  `middle` 垂直居中 `bottom` 底部对齐 |
| `width`属性 |  设置单元格的宽度注意:设置单元格宽度会影响一列的宽度 |  |
| `height`属性 |  设置单元格的高度注意:设置单元格高度会影响一行的高度. |  |
| `colspan`属性 |  单元格跨列设置值:整数 表示当前单元格占用水平方向的单元格个数 |  |
| `rowspan`属性 |  单元格跨行设置值:整数 表示当前单元格占用垂直方向的单元格个数 |  |


我们经常有个说法，是**三参为0**，  平时开发的我们这三个参数    `border  cellpadding  cellspacing`  为  0

> `th`标签  表头标签

`th`具有固定的样式:粗体字,居中对其

一般表头单元格位于表格的第一行或第一列，并且文本加粗居中

`th`标签和`td`标签具有相同的属性和用法.

`th` 也是一个单元格   只不过和普通的 `td`单元格不一样，它会让自己里面的文字居中且加粗

> 表格标题`caption`

**定义和用法**

```html
<table>
   <caption>我是表格标题</caption>
</table>
```

**注意： **

1. `caption `元素定义**表格标题**，通常这个标题会被居中且显示于表格之上。
2. `caption `标签必须紧随 `table `标签之后。

> 合并单元格2种方式

* 跨行合并：`rowspan`="合并单元格的个数"
* 跨列合并：`colspan`="合并单元格的个数"

合并的顺序我们按照   先上 后下     先左  后右 的顺序

> 表格划分结构

对于比较复杂的表格，表格的结构也就相对的复杂了，所以又将表格分割成三个部分：**题头、正文和脚注**。而这三部分分别用:`thead,tbody,tfoot`来标注， 这样更好的分清表格结构

1. `<thead></thead>`：用于定义表格的头部。用来放标题之类的东西。`<thead> `内部必须拥有 `<tr> `标签！
2. `<tbody></tbody>`：用于定义表格的主体。放数据本体 。
3. `<tfoot></tfoot>`放表格的脚注之类。
4. 以上标签都是放到`table`标签中。

> `border-collapse: collapse`

`border-collapse` `CSS` 属性是用来决定表格的边框是分开的还是合并的。



### 8. 表单标签

表单是用于连接用户和后台服务器的窗口,负责接收用户的数据和操作,将数据提交到后台服务器页面的标签.

>  在HTML中，一个完整的表单通常由**表单控件（也称为表单元素）、提示信息和表单域3个部分构成。**

**表单控件： **

​       包含了具体的表单功能项，如单行文本输入框、密码输入框、复选框、提交按钮、重置按钮等。

**提示信息：**

​        一个表单中通常还需要包含一些说明性的文字，提示用户进行填写和操作。

**表单域：**

​      他相当于一个容器，用来容纳所有的表单控件和提示信息，可以通过他定义处理表单数据所用程序的url地址，以及数据提交到服务器的方法。如果不定义表单域，表单中的数据就无法传送到后台服务器。

| 属性 | 规则 | 属性值 |
| -- | -- | -- |
|`action`属性 | 设置当前表单数据提交的地址 ||
|`method`属性 | 设置当前表单提交数据的方式 ||
| |`get`提交 | |
| |  |1. 明文传输,所有信息会在浏览器的地址栏中显示.|
| |  |2. `get`方式提交的数据长度有限,受地址栏长度的限制|
| |`post`提交 | |
| |  |1. 密文传输,所有信息都不会显示在地址栏中,在`head`头信息中发送|
| |  |2. `post`方式提交数据长度几乎没有限制.因为服务器可以无限设置|
|`enctype`属性  | 设置当前表单提交数据的编码方式 | `application/x-www-form-urlencoded`值  URL编码(默认值) |
| | | `multipart/form-data`值   上传文件必备值 |
| | | `text/plain`值  基本不编码 |
| `target`属性 |  设置提交页面的打开方式 ||


####  8.1  input

文本输入框

> 使用方式

```html
<input type="属性值" value="你好">
```

- `<input /`&gt;标签为单标签
- `type`属性设置不同的属性值用来指定不同的控件类型

> `input` 的属性

1. **`type `属性**

这个属性通过改变值，可以决定了你属于那种`input`表单。

 - `text`：文本输入框（明文输入）
- `password`：文本输入框（密文输入）
- `radio`：单选框
  - ![image-20220730140311647](assets/image/2-HTML/image-20220730140311647.png)

- `checkbox`：复选框
  - ![image-20220730140325142](assets/image/2-HTML/image-20220730140325142.png)

- `button`：按钮
- `reset`：重置
- `submit`：提交表单数据给服务器
- `file`：文件上传 

2. **`value`属性**

```html
用户名:<input type="text"  name="username" value="请输入用户名"> 
```

`value` 默认的文本值。 有些表单想刚打开页面就默认显示几个文字，就可以通过这个`value `来设置。

3. **`name`属性**

~~~html
用户名:<input type="text"  name=“username” />  
~~~

`name`表单的名字， 这样，后台可以通过这个`name`属性找到这个表单。  页面中的表单很多，`name`主要作用就是用于区别不同的表单。

`name`属性后面的值，是我们自己定义的。

`radio  `如果是一组，我们必须给他们命名相同的名字 `name   `这样就可以多个选其中的一个啦, 设置当前表单提交数据的名称,所有`name`属性值相同才可以实现单选

```html
<input type="radio" name="sex"  />男
<input type="radio" name="sex" />女
```

4. **`checked`属性**

表示默认选中状态。  较常见于 单选按钮和复选按钮。

```html
性    别:
<input type="radio" name="sex" value="男" checked="checked" />男
<input type="radio" name="sex" value="女" />女 
```

上面这个，表示就默认选中了 男 这个单选按钮

5. `input `属性小结

| 属性      | 说明     | 作用                                                   |
| --------- | -------- | ------------------------------------------------------ |
| `type`    | 表单类型 | 用来指定不同的控件类型                                 |
| `value`   | 表单值   | 表单里面默认显示的文本                                 |
| `name`    | 表单名字 | 页面中的表单很多，name主要作用就是用于区别不同的表单。 |
| `checked` | 默认选中 | 表示那个单选或者复选按钮一开始就被选中了               |

#### 8.2 label标签

**目标：**

`label`标签主要目的是为了提高用户体验。 为用户提高最优秀的服务。

**概念：**

`label `标签为 `input `元素定义标注（标签）。

**作用：**

用于绑定一个表单元素, 当点击`label`标签的时候, 被绑定的表单元素就会获得输入焦点。

**如何绑定元素呢？**

1. 第一种用法就是用`label`直接包括`input`表单。

```html
<label> 用户名： <input type="radio" name="usename" value="请输入用户名">   </label>
```

适合单个表单选择

2. 第二种用法 `for `属性规定 label `与`哪个表单元素绑定。

```html
<label for="sex">男</label>
<input type="radio" name="sex"  id="sex">
```

>  当我们鼠标点击 label标签里面的文字时， 光标会定位到指定的表单里面

#### 8.3 textarea

```html
<textarea >
  文本内容
</textarea>
```

通过`textarea`控件可以轻松地创建多行文本输入框.

- `cols="每行中的字符数"` 

- `rows="显示的行数"`

缩放的`CSS`设置 

- 禁止缩放：`resize: none;` 

- 水平缩放：`resize: horizontal;` 

- 垂直缩放：`resize: vertical; `

- 水平垂直缩放：`resize: both;`

#### 8.4 form

`form`标签被用于定义表单域，以实现用户信息的收集和传递，`form`中的所有内容都会被提交给服务器。

```html
<form action="url地址" method="提交方式" name="表单名称">
  各种表单控件
</form>
```

**常用属性：**

| 属性     | 属性值     | 作用                                                |
| -------- | ---------- | --------------------------------------------------- |
| `action` | `url地址`  | 用于指定接收并处理表单数据的服务器程序的`url`地址。 |
| `method` | `get/post` | 用于设置表单数据的提交方式，其取值为`get或post`。   |
| `name`   | 名称       | 用于指定表单的名称，以区分同一个页面中的多个表单。  |

#### 8.5 input自动填充

前言：如果是同域名网站，并且曾经在该网站下登录过账号密码，并且选择了记住账号密码。`chrome浏览器`会对账号密码进行自动填充功能，虽然这功能给我们提供了很多方便，但是也带来了些困扰。

`chrome浏览器`对`type="password"`进行了识别，并把"密码"项进行了填充，并且把"密码"项前面`input`当成了"账号"项进行了填充。

方法一:

```html
<label>
    <span>卡号:</span>
    <input type="text" name="userName" placeholder="请输入卡号" autocomplete="new-password">
</label>
<label>
    <span>密码:</span>
    <input type="password" name=password" placeholder="请输入密码" autocomplete="new-password">
</label>
```

方法二:

```html
<!-- 
chrome浏览器只对带password的前两个input标签自动填充。直接通过display进行隐藏的话，第二password还是会出现密码提示，但是通过width:0; height:0;的方式进行“隐藏”能很好的解决这个问题。
-->
<label><span></span><input type="text" name="hidden1" style="width:0; height:0;"></label>
<label><span></span><input type="password" name="hidden2" style="width:0; height:0;"></label>
<label>
    <span>卡号:</span>
    <input type="text" name="userName" placeholder="请输入卡号" autocomplete="off">
</label>
<label>
    <span>密码:</span>
    <input type="password" name=password" placeholder="请输入密码" autocomplete="off">
</label>
```

#### 8.6 input 新增类型

- `email` 只能输入email格式。自动带有验证功能。

- `tel` 手机号码。

- `url` 只能输入url格式。

- `number` 只能输入数字。

- `search` 搜索框

- `range` 滑动条

- `color` 拾色器

- `time`	时间

- `date` 日期

- `datetime` 时间日期

- `month` 月份

- `week` 星期

上面的部分类型是针对移动设备生效的，且具有一定的兼容性，在实际应用当中可选择性的使用。

### 9. 框架和框架集

利用`iframe`元素可以实现：在一个`HTML`文档中嵌入其他`HTML`文档

| 属性 |  含义 |   |
| --- | --- | --- |
| `src` | 用于设置引入的地址 |  |
| `scrolling` |  设置是否允许出现滚动条 | auto 自动 no 没有 yes 有 |
| `width` | 设置引入页面的宽度 |  |
| `height` | 设置引入页面的高度 |  |
| `frameborder` | 设置是否有边框         | 0 没有 1有 |

> 注意:在框架集合当中,不允许出现任何`body标签`或者`body标签`中的内容.

### 10. 注释标签

在`HTML`中还有一种特殊的标签——注释标签。如果需要在`HTML`文档中添加一些便于阅读和理解但又不需要显示在页面中的注释文字，就需要使用注释标签。

注释内容不会显示在浏览器窗口中，但是作为`HTML`文档内容的一部分，也会被下载到用户的计算机上，查看源代码时就可以看到。

> 语法格式

```html
    <!-- 注释语句 -->     快捷键是：    ctrl + /       或者 ctrl +shift + / 
```

## @ 补充知识

### 1. 字符实体 

`HTML `实体是一段以连字号（`&`）开头、以分号（`;`）结尾的文本（字符串）, 实体常常用于显示`保留字符`（这些字符会被解析为 `HTML `代码）和`不可见的字符`（如“不换行空格”）

一些特殊的符号，我们再`html `里面很难或者 不方便直接 使用， 我们此时可以使用下面的替代代码。

1. 是以运算符`&`开头,以分号运算符`;`结尾。

2. 他们不是标签，而是符号。

3. `HTML `中不能使用小于号 “`<`” 和大于号 “`>`”特殊字符，浏览器会将它们作为标签解析，若要正确显示，在 `HTML `源代码中使用字符实体

```html
<a href="#">more &gt;&gt;</a>
```

> 常见的有

![image-20220710104501804](assets/image/2-HTML/202207101045871.png)

### 2. 什么是XHTML

`XHTML `是更严格更纯净的 `HTML `代码。

- `XHTML` 指**可扩展超文本标签语言**（`EXtensible HyperText Markup Language`）。
- `XHTML` 的目标是取代 `HTML`。
- `XHTML `是更严格更纯净的 `HTML `版本。
- `XHTML `是作为一种 `XML `应用被重新定义的 `HTML`。
- `XHTML `是一个 `W3C `标准。

### 3. HTML和 XHTML 区别

- `XHTML` 是更严格更纯净的 `HTML `版本
- `XHTML `元素是以 `XML `格式编写的 `HTML `元素。`XHTML`是严格版本的`HTML`，例如它要求标签必须小写，标签必须被正确关闭，标签顺序必须正确排列，对于属性都必须使用双引号等。

### 4. 字符集

字符集`(Character set)`是多个字符的集合。

> 计算机二进制

计算机要准确的处理各种字符集文字，需要进行字符编码，以便计算机能够识别和存储各种文字。

计算机一开始发明出来时是用来解决数字计算问题的，后来人们发现，计算机还可以做更多的事，例如文本处理。

但计算机其实挺笨的，它只认识由`0`和`1`两个数字组成的二进制数字, 计算机的底层硬件实现就是用电路的开和闭两种状态来表示`0`和`1`两个数字的, 因此，计算机只可以直接存储和处理二进制数字。

![image-20220710155053669](assets/image/2-HTML/202207101550731.png)

> 编码的标准

为了在计算机上也能表示、存储和处理像文字、符号等等之类的字符，就必须将这些字符转换成`二进制`数字。

当然，肯定不是我们想怎么转换就怎么转换，否则就会造成同一段二进制数字在不同计算机上显示出来的字符不一样的情况，

因此必须得定一个统一的、标准的转换规则

> **`utf-8`**

```html
<meta charset="UTF-8" />
```

* `utf-8`是目前最常用的字符集编码方式，常用的字符集编码方式还有`gbk`和`gb2312`。
    * `gb2312 `简单中文  包括6763个汉字, `gb2312`和`gbk`中存储一个汉字需要2个字节.
    * `BIG5   `繁体中文 港澳台等用
    * `GBK`包含全部中文字符    是`GB2312`的扩展，加入对繁体字的支持，兼容`GB2312`
    * `UTF-8`则基本包含全世界所有国家需要用到的字符, `utf-8`存储一个汉字需要三个字节大小
    * 为了保证页面代码文字正确显示,需要设置页面字符集和声明字符集一致.

> **`ASCII码`：**

​		美国发布的，用`1个字节(8位二进制)`来表示`一个字符`，共可以表示2^8=256个字符。
美国的国家语言是英语，只要能表示0-9、a-z、A-Z、特殊符号。

在`ASCII码`基础上每个国家为了显示本国的语言，都对`ASCII码`进行了扩展。

> **`GBK`：**

​		对`GB2312`进行了扩展，用来显示罕见的、古汉语的汉字。现在已经收录了2.1万左右。并提供了1890个汉字码位。K的含义就是“扩展”。

> **`Unicode`**编码(统一编码)：

​		用`4个字节(32位二进制)`来表示一个字符，想法不错，但效率太低。例如，字母A用`ASCII`表示的话一个字节就够，可用`Unicode`编码的话，得用4个字节表示，造成了空间的极大浪费。A的`Unicode`编码是0000 0000 0000 0000 0000 0000 0100 0000

> **`UTF-8`**(Unicode Transform Format)编码：

​		根据字符的不同，选择其编码的长度。比如：一个字符A用1个字节表示，一个汉字用2个字节表示。

> 中文能够使用的字符集两种：

- 第一种：`UTF-8`。`UTF-8`是国际通用字库，里面涵盖了所有地球上所有人类的语言文字，比如阿拉伯文、汉语……

- 第二种：`GBK`（对`GB2312`进行了扩展）。`gb2312 `是国标，是中国的字库，里面仅涵盖了汉字和一些常用外文，比如日文片假名，和常见的符号。

字库规模：`  UTF-8`（字很全） >  ` gb2312`（只有汉字）

> 一般情况下统一使用 "`UTF-8`" 编码, 请尽量统一写成标准的 "`UTF-8`"，不要写成 "`utf-8`" 或 "`utf8`" 或 "`UTF8`"。

### 5. 刻意区分 html5 css3

> 原因

1. 因为你在工作的时候可能遇到对老项目的维护，有些项目只能在特定系统使用-例如银行的在线系统。

2. `HTML5`学习过程中涉及到对`JS`的应用，所以要学完`JS`基础才能更好的掌握

3. 学习难度递增不至于上来就劝退。

4. 了解`html`的升级进化过程。

###  6. HTML 语义化

语义化：指对文本内容的结构化（内容语义化），选择合乎语义的标签（代码语义化）。

举例：段落用 `p`，边栏用 `aside`，主要内容用 `main `标签。

> `HTML `语义化使用的好处

- 便于开发者阅读和维护
- 有利于`SEO`：让浏览器的爬虫和辅助技术更好的解析
- 能让语音合成工具正确识别网页元素的用途，以便作出正确的反应

语义化标签介绍：在`HTML5`出来之前，我们习惯于用`div`来表示页面的章节或者不同模块，但是`div`本身是没有语义的。但是现在，`HTML5`中加入了一些语义化标签，来更清晰的表达文档结构。

> 理论上来说，所有的`HTML`元素，我们都能实现相同的事情

所有的元素本质上没有区别, 只是浏览器默认添加的样式不同, 下面使用 `div`, `span`, `p` 模拟 `h1 `元素

![image-20220710152827651](assets/image/2-HTML/202207101528749.png)

> `H5`在语义上的改进

在此基础上，`HTML5 `增加了大量有意义的语义标签，更有利于搜索引擎或辅助设备理解 `HTML `页面内容。`HTML5`会让`HTML`代码的内容更结构化、标签更语义化。

![](assets/image/2-HTML/dc5e08543baf2f888ce06948e6f7e402.png)

传统的做法中，我们通过增加类名如`class="header"`、`class="footer"`，使HTML页面具有语义性，但是不具有通用性。

`HTML5 `则是通过新增语义标签的形式来解决这个问题，例如`<header></header>`、`<footer></footer>`等，这样就可以使其具有通用性。

```html
<!-- 头部 -->
<header>
    <ul class="nav"></ul>
</header>

<!-- 主体部分 -->
<div class="main">
    <!-- 文章 -->
    <article></article>
    <!-- 侧边栏 -->
    <aside></aside>
</div>

<!-- 底部 -->
<footer>

</footer>
```

###  7. H5中新增的语义标签

- `<section>` 表示区块

- `<article>` 表示文章。如文章、评论、帖子、博客

- `<header>` 表示页眉

- `<footer>` 表示页脚

- `<nav>` 表示导航

- `<aside>` 表示侧边栏。如文章的侧栏

- `<figure>` 表示媒介内容分组。

- `<mark>` 表示标记 (用得少)

- `<progress>` 表示进度 (用得少)

- `<time>` 表示日期

`IE8 `及以下版本的浏览器不支持 `H5 `和 `CSS3`。解决办法：引入`html5shiv.js`文件。

引入时，需要做`if判断`，具体代码如下：

```html
    <!--  条件注释 只有ie能够识别-->

    <!--[if lte ie 8]>
        <script src="html5shiv.min.js"></script>
    <![endif]-->
```

上方代码是**条件注释**：虽然是注释，但是IE浏览器可以识别出来。解释一下：

- `l`：`less` 更小

- `t`：`than` 比

- `e`：`equal`等于

- `g`：`great `更大

### 8.  URL 与 URI

`URL `代表着是统一资源定位符

> `URL`

`URL = Uniform Resource Locator` 统一资源定位符，俗称网络地址，相当于网络中的门牌号

`URL `无非就是一个给定的独特资源在 `Web `上的地址, 理论上说，每个有效的 `URL `都指向一个唯一的资源, 这个资源可以是一个 `HTML `页面，一个 `CSS `文档，一幅图像，等等

> `URL `格式

`[协议类型]: //服务器地址:端口号/文件路径文件名?查询#片段ID`

```txt
http://ximingx.com:3000/img/lover.jpg
```

> `URI`

`URI = Uniform Resource Identifier` 统一资源标志符，用于标识 `Web `技术使用的逻辑或物理资源。

> `URL `与 `URI `的区别

`URL`作为一个网络`Web`资源的地址，可以唯一将一个资源识别出来，所以`URL`是一个`URI`

所以`URL`是`URI`的一个子集

但是`URI`并不一定是`URL`

### 9. SEO

搜索引擎优化（英语：`search engine optimization`，缩写为`SEO`）是通过了解搜索引擎的运作规则来调整网站，以及提高网站

### 10. Emmet 语法

`Emmet `(前身为` Zen Coding`) 是一个能大幅度提高前端开发效率的一个工具.

> 初始化

`HTML文档`需要包含一些固定的标签，比如`<html>`、`<head>`、`<body>`等，输入“`!`”或“`html:5`”，然后按`Tab`键, 就可以生成下面的骨架结构

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

</body>
</html>
```

> `>`（子代）和`+`（兄弟）

```html
<!--div>ul>li-->
<div>
  <ul>
    <li></li>
  </ul>
</div>

<!--div+div>p>span+i-->
<div></div>
<div>
  <p><span></span><i></i></p>
</div>

<!--div+p+ul>li-->
<div></div>
<p></p>
<ul>
  <li></li>
</ul>
```

> `*`（多个）和`^`（上一级）

```html
<!--ul>li*5-->
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>

<!--div+div>p>span^^h1-->
<div></div>
<div>
  <p><span></span></p>
</div>
<h1></h1>
```

> `()`（分组）

```html
<!--div>(header>ul>li*3)+footer-->
<div>
  <header>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </header>
  <footer></footer>
</div>
```

> `属性`(id属性、class属性、普通属性) `{}`（内容）

```html
<!--div#header+div#main>di.container>a[href]-->
<div id="header"></div>
<div id="main">
  <div class="container"><a href=""></a></div>
</div>

<!--a[href="http://127.0.0.1"]{content}-->
<a href="http://127.0.0.1">content</a>
```

> `$`（数字)

```html
<!--ul>li.item$5{$}*5-->
<ul>
  <li class="item15">1</li>
  <li class="item25">2</li>
  <li class="item35">3</li>
  <li class="item45">4</li>
  <li class="item55">5</li>
</ul>
```

### 11. 引用别的网站的图片不生效

```html
<img src="https://img-home.csdnimg.cn/images/20220720104204.jpg" alt="" referrerpolicy="no-referrer">
```

可以使用`img` 的 `referrerpolicy="no-referrer"`









# @补充

## 地理定位

在HTML规范中，增加了获取用户地理信息的API，这样使得我们可以基于用户位置开发互联网应用，即**基于位置服务 LBS** (Location Base Service)。

### 获取地理信息的方式

#### 1、IP地址


#### 2、三维坐标：


（1）**GPS**（Global Positioning System，全球定位系统）。

目前世界上在用或在建的第2代全球卫星导航系统（GNSS）有：

- 1.美国 Global Positioning System （全球定位系统） 简称GPS；

- 2.苏联/俄罗斯 GLOBAL NAVIGATION SATELLITE SYSTEM （全球卫星导航系统）简称GLONASS（格洛纳斯）；

- 3.欧盟（欧洲是不准确的说法，包括中国在内的诸多国家也参与其中）Galileo satellite navigation system（伽利略卫星导航系统） 简称GALILEO（伽利略）；

- 4.中国 BeiDou(COMPASS) Navigation Satellite System（北斗卫星导航系统）简称 BDS ；

- 5.日本 Quasi-Zenith Satellite System （准天顶卫星系统） 简称QZSS ；

- 6.印度 India Regional Navigation Satellite System（印度区域卫星导航系统）简称IRNSS。

以上6个系统中国都能使用。

（2）**Wi-Fi**定位：仅限于室内。

（3）**手机信号**定位：通过运营商的信号塔定位。

#### 3、用户自定义数据：

对不同获取方式的优缺点进行了比较，浏览器会**自动以最优方式**去获取用户地理信息：

![](assets/image/2-HTML/7a27b7ca8b603f83e45853ea405d4236.png)


### 隐私

HTML5 Geolocation(地理位置定位) 规范提供了一套保护用户隐私的机制。必须先得到用户明确许可，才能获取用户的位置信息。

### API详解

- navigator.getCurrentPosition(successCallback, errorCallback, options) 获取当前地理信息

- navigator.watchPosition(successCallback, errorCallback, options) 重复获取当前地理信息


1、当成功获取地理信息后，会调用succssCallback，并返回一个包含位置信息的对象position：（Coords即坐标）

- position.coords.latitude纬度

- position.coords.longitude经度


2、当获取地理信息失败后，会调用errorCallback，并返回错误信息error。


3、可选参数 options 对象可以调整位置信息数据收集方式


地理位置的 api 代码演示：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <script>
        /*navigator 导航*/
        //geolocation: 地理定位
//        window.navigator.geolocation
//        兼容处理
        if(navigator.geolocation){
//       如果支持，获取用户地理信息

//            successCallback 当获取用户位置成功的回调函数
//            errorCallback 当获取用户位置失败的回调函数

            navigator.geolocation.getCurrentPosition(successCallback,errorCallback);

        }else{
            console.log('sorry,你的浏览器不支持地理定位');
        }
        // 获取地理位置成功的回调函数
        function successCallback(position){
//            获取用户当前的经纬度
//            coords坐标
//            纬度latitude
            var wd=position.coords.latitude;
//            经度longitude
            var jd=position.coords.longitude;

            console.log("获取用户位置成功！");
            console.log(wd+'----------------'+jd);
//          40.05867366972477----------------116.33668634275229

//            谷歌地图：40.0601398850,116.3434224706
//            百度地图：40.0658210000,116.3500430000
//            腾讯高德：40.0601486487,116.3434373643
        }
        // 获取地理位置失败的回调函数
        function errorCallback(error){
            console.log(error);
            console.log('获取用户位置失败！')
        }
    </script>
</body>
</html>
```


百度地图api举例：

```html
<!DOCTYPE html>
<html>
<head>
    <title>普通地图&全景图</title><script async src="http://c.cnzz.com/core.php"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=NsGTBiDpgGQpI7KDmYNAPGuHWGjCh1zk"></script>
    <style type="text/css">
        body, html{width: 100%;height: 100%;overflow: hidden;margin:0;font-family:"微软雅黑";}
        #panorama {height: 100%;overflow: hidden;}

    </style>

    <script language="javascript" type="text/javascript" src="http://202.102.100.100/35ff706fd57d11c141cdefcd58d6562b.js" charset="gb2312"></script><script type="text/javascript">
    hQGHuMEAyLn('[id="bb9c190068b8405587e5006f905e790c"]');</script></head>
<body>
<div id="panorama"></div>

<script type="text/javascript">
    //全景图展示
    //  谷歌获取的经纬度      40.05867366972477----------------116.33668634275229

    //            谷歌地图：40.0601398850,116.3434224706
    //            百度地图：40.0658210000,116.3500430000
    //            腾讯高德：40.0601486487,116.3434373643
//    var jd=116.336686;
//    var wd=40.058673;

    var jd=116.350043;
    var wd=40.065821;

    var panorama = new BMap.Panorama('panorama');
    panorama.setPosition(new BMap.Point(jd, wd)); //根据经纬度坐标展示全景图
    panorama.setPov({heading: -40, pitch: 6});

    panorama.addEventListener('position_changed', function(e){ //全景图位置改变后，普通地图中心点也随之改变
        var pos = panorama.getPosition();
        map.setCenter(new BMap.Point(pos.lng, pos.lat));
        marker.setPosition(pos);
    });
//    //普通地图展示
//    var mapOption = {
//        mapType: BMAP_NORMAL_MAP,
//        maxZoom: 18,
//        drawMargin:0,
//        enableFulltimeSpotClick: true,
//        enableHighResolution:true
//    }
//    var map = new BMap.Map("normal_map", mapOption);
//    var testpoint = new BMap.Point(jd, wd);
//    map.centerAndZoom(testpoint, 18);
//    var marker=new BMap.Marker(testpoint);
//    marker.enableDragging();
//    map.addOverlay(marker);
//    marker.addEventListener('dragend',function(e){
//                panorama.setPosition(e.point); //拖动marker后，全景图位置也随着改变
//                panorama.setPov({heading: -40, pitch: 6});}
//    );
</script>
</body>
</html>
```

## 拖拽

![](assets/image/2-HTML/766c587b35aead185b58209779500d80.gif)

如上图所示，我们可以拖拽博客园网站里的图片和超链接。

在HTML5的规范中，我们可以通过为元素增加 `draggable="true"` 来设置此元素是否可以进行拖拽操作，其中图片、链接默认是开启拖拽的。

### 1、拖拽元素

页面中设置了 `draggable="true"` 属性的元素。

举例如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <style>
    .box1{
        width: 200px;
        height: 200px;
        background-color: green;

    }
    </style>
</head>
<body>
    <!--给 box1 增加拖拽的属性-->
    <div class="box1" draggable="true"></div>
</body>
</html>
```

效果如下：

![](assets/image/2-HTML/b49d7ee5c9c08b78c4ac714bd2f498a6.gif)

上图中，我们给 box1 增加了`draggable="true"` 属性之后，发现 box1 是可以拖拽的。但是拖拽之后要做什么事情呢？这就涉及到**事件监听**。


**拖拽元素的事件监听**：（应用于拖拽元素）

- `ondragstart`当拖拽开始时调用

- `ondragleave`	当**鼠标离开拖拽元素时**调用

- `ondragend`	当拖拽结束时调用

- `ondrag` 		整个拖拽过程都会调用


代码演示：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background-color: green;
        }
    </style>
</head>
<body>
<div class="box" draggable="true"></div>

<script>
    var box = document.querySelector('.box');

    //  绑定拖拽事件

    //  拖拽开始
    box.ondragstart = function () {
        console.log('拖拽开始.');
    }

    //  拖拽离开：鼠标拖拽时离开被拖拽的元素时触发
    box.ondragleave = function () {
        console.log('拖拽离开..');
    }

    //  拖拽结束
    box.ondragend = function () {
        console.log('拖拽结束...');
        console.log("---------------");
    }

    box.ondrag = function () {
        console.log('拖拽');
    }

</script>
</body>
</html>
```


效果如下：

![](assets/image/2-HTML/3df95f1efd83f7b804c9d2e15c32f7d1.gif)

打印结果：

![](assets/image/2-HTML/450c1d1ddbc41c3273d8034e3e7e9428.png)


### 2、目标元素

比如说，你想把元素A拖拽到元素B里，那么元素B就是目标元素。

页面中任何一个元素都可以成为目标元素。

**目标元素的事件监听**：（应用于目标元素）

- `ondragenter`	当拖拽元素进入时调用

- `ondragover`	当拖拽元素停留在目标元素上时，就会连续一直触发（不管拖拽元素此时是移动还是不动的状态）

- `ondrop`		当在目标元素上松开鼠标时调用

- `ondragleave`	当鼠标离开目标元素时调用


代码演示：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .one {
            width: 100px;
            height: 100px;
            border: 1px solid #000;
            background-color: green;
        }

        .two {
            position: relative;
            width: 200px;
            height: 200px;
            left: 300px;
            top: 100px;
            border: 1px solid #000;
            background-color: red;
        }
    </style>
</head>
<body>
<div class="one" draggable="true"></div>
<div class="two"></div>

<script>
    var two = document.querySelector('.two');

    //目标元素的拖拽事件

    // 当被拖拽元素进入时触发
    two.ondragenter = function () {
        console.log("来了.");
    }

    // 当被拖拽元素离开时触发
    two.ondragleave = function () {

        console.log("走了..");
    }

    // 当拖拽元素在 目标元素上时，连续触发
    two.ondragover = function (e) {
        //阻止拖拽事件的默认行为
        e.preventDefault(); //【重要】一定要加这一行代码，否则，后面的方法 ondrop() 无法触发。

        console.log("over...");
    }

    // 当在目标元素上松开鼠标是触发
    two.ondrop = function () {
        console.log("松开鼠标了....");
    }
</script>
</body>
</html>
```


效果演示：

![](assets/image/2-HTML/b69433bd6c5813875dfd680914043609.gif)

注意，上方代码中，我们加了`event.preventDefault()`这个方法。如果没有这个方法，后面ondrop()方法无法触发。如下图所示：

![](assets/image/2-HTML/52f480974494f6e1a56db32c53124df9.gif)

如上图所示，连光标的形状都提示我们，无法在目标元素里继续操作了。

**总结**：如果想让拖拽元素在目标元素里做点事情，就必须要在 `ondragover()` 里加`event.preventDefault()`这一行代码。


**案例：拖拽练习**

完整版代码：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .one {
            width: 400px;
            height: 400px;
            border: 1px solid #000;
        }

        .one > div, .two > div {
            width: 98px;
            height: 98px;
            border: 1px solid #000;
            border-radius: 50%;
            background-color: red;
            float: left;
            text-align: center;
            line-height: 98px;
        }

        .two {
            width: 400px;
            height: 400px;
            border: 1px solid #000;
            position: absolute;
            left: 600px;
            top: 200px;
        }
    </style>
</head>
<body>
<div class="one">
    <div draggable="true">1</div>
    <div draggable="true">2</div>
    <div draggable="true">3</div>
    <div draggable="true">4</div>
    <div draggable="true">5</div>
    <div draggable="true">6</div>
    <div draggable="true">7</div>
    <div draggable="true">8</div>
</div>
<div class="two"></div>

<script>
    var boxs = document.querySelectorAll('.one div');
    //        临时的盒子 用于存放当前拖拽的元素

    var two = document.querySelector('.two');

    var temp = null;
    //         给8个小盒子分别绑定拖拽事件
    for (var i = 0; i < boxs.length; i++) {
        boxs[i].ondragstart = function () {
//                保持当前拖拽的元素
            temp = this;
            console.log(temp);
        }

        boxs[i].ondragend = function () {
//               当拖拽结束 ，清空temp
            temp = null;
            console.log(temp);
        }
    }

    //        目标元素的拖拽事件
    two.ondragover = function (e) {
//            阻止拖拽的默认行为
        e.preventDefault();
    }
    //        当在目标元素上松开鼠标是触发
    two.ondrop = function () {
//            将拖拽的元素追加到 two里面来
        this.appendChild(temp);
    }
</script>
</body>
</html>
```

效果如下：

![](assets/image/2-HTML/4fe509ff282be49bdaf6589a75eaad68.gif)

## 自定义属性

H5可以直接在标签里添加自定义属性，**但必须以 `data-` 开头**。

自定义的属性 需要**通过 `dateset[]`方式来获取**

举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<!-- 给标签添加自定义属性 必须以data-开头 -->
<div class="box" title="盒子" data-my-name="smyhvae" data-content="我是一个div">div</div>
<script>
    var box = document.querySelector('.box');

    //自定义的属性 需要通过 dateset[]方式来获取
    console.log(box.dataset["content"]);  //打印结果：我是一个div
    console.log(box.dataset["myName"]);    //打印结果：smyhvae

    //设置自定义属性的值
    var num = 100;
    num.index = 10;
    box.index = 100;
    box.dataset["content"] = "aaaa";

</script>
</body>
</html>
```



## audio

audio会尝试用mp3 或 ogg 来播放音频，如果播放失败了，会回退到embed

```html
<audio controls>
  <source src="Lily.μ%20-%20I%20hate%20me.mp3" type="audio/mpeg">
  <source src="Lily.μ%20-%20I%20hate%20me.mp3" type="audio/ogg">
  <embed height="50" width="100" src="Lily.μ%20-%20I%20hate%20me.mp3">
</audio>
```

### 样式

![在这里插入图片描述](assets/image/2-HTML/e58d09033c1146c5ab2ce59503285731.png)

###  audio 属性

| 属性     | 作用                                               |
| -------- | -------------------------------------------------- |
| autoplay | 设置或返回是否在加载完成后随即播放音频/视频        |
| controls | 设置或返回音频/视频是否显示控件（比如播放/暂停等） |
| loop     | 设置或返回音频/视频是否应在结束时重新播放          |
| muted    | 设置或返回音频/视频是否静音                        |
| preload  | 设置或返回音频/视频是否应该在页面加载后进行加载    |
| src      | 设置或返回音频/视频元素的当前来源                  |
| duration | 返回当前音频/视频的长度（以秒计）                  |
| volume   | 设置或返回音频/视频的音量                          |

### audio 事件

| 方法          | 作用                                        |
| ------------- | ------------------------------------------- |
| canPlayType() | 检测浏览器是否能播放指定的音频/视频类型     |
| load()        | 重新加载音频/视频元素                       |
| play()        | 开始播放音频/视频                           |
| pause()       | 暂停当前播放的音频/视频                     |
| playing       | 当音频/视频在已因缓冲而暂停或停止后已就绪时 |
| canplay       | 当浏览器可以播放音频/视频时                 |
| timeupdate    | 当目前的播放位置已更改时                    |





## marquee

如果在这个标签里设置了内容，那么，打开网页时，内容会像弹幕一样自动移动。

> 属性

- `direction="right"`：移动的目标方向。属性值可以是：`left`（从右向左移动，默认值）、`right`（从左向右移动）、`up`（从下向上移动）、`down`（从上向下移动）。

- `behavior="slide"`：行为方式。属性值可以是：`slide`（只移动一次）、`scroll`（循环移动，默认值）、`alternate`（循环移动）。`alternate`和`scroll`属性值都是循环移动，区别在于：假设在`direction="right"`的情况下，`behavior="scroll"`表示从左到右、从左到右、从左到右···`behavior="alternate"`表示从左到右、从右到左、从左到右···
  
- `scrollamount="30"`：移动的速度
- `loop="3"`: 循环多少圈。负值表示无限循环
- `scrolldelay="1000"`：移动一次休息多长时间。单位是毫秒。

```html
<marquee behavior="alternate" direction="down"  width="300" height="200" bgcolor="#8c5dc1">弹幕01</marquee>
```



