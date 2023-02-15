# JavaScript [ 1995  Brendan Eich ]

[Javascript诞生记 -阮一峰]:http://www.ruanyifeng.com/blog/2011/06/birth_of_javascript.html

- `JavaScript` 的定位
  - `JavaScript` 是脚本编程语言
  - `JavaScript` 是弱类型语言
  - `JavaScript` 是动态类型的
  - `JavaScript` 是单线程的
  - `JavaScript` 解释型语言
  - `JavaScript` 具有良好的跨平台性
- `JavaScript` 和 `ECMAScript` 的区别，以及和 `DOM` 、`BOM` 的关系, `JavaScript`包含
  - `DOM`（文档对象模型），提供了与网页内容交互的 `方法` 和 `接口`
  - `BOM`（浏览器对象模型），提供了与浏览器交互的 `方法` 和 `接口`
  - `ECMAScript` 描述了 `JavaScript` 的语法和基本对象 (核心)

最后还是引用 `JavaScript高级程序设计` 的那段话，” 要真正学好用好 `JavaScript`，理解其本质、历史及局限性是非常重要的 “

本章使用单独文件夹就行介绍，**一起共勉～**

> JS adds life to web page.













## dom

> dom 操作

getElementByClassName 

- 得到的是一个动态的集合

- 得到的是 HTMLCollection

querySelectorAll 

- 得到的是静态集合

- 得到的是 NodeList











## offset scroll client

### 一: offset

> 偏移，补偿，位移。

js中有一套方便的**获取元素尺寸**的办法就是offset家族。offset家族包括：

- offsetWidth

- offsetHight

- offsetLeft

- offsetTop

- offsetParent

#### 1、offsetWidth 和 offsetHight

`offsetWidth` 和 `offsetHight`：获取元素的**宽高 + padding + border**，不包括margin。如下：

- offsetWidth = width + padding + border

- offsetHeight = Height + padding + border

这两个属性，他们绑定在了所有的节点元素上。获取元素之后，只要调用这两个属性，我们就能够获取元素节点的宽和高。

#### 2、offsetParent

`offsetParent`：获取当前元素的**定位父元素**。

- 如果当前元素的父元素，**有CSS定位**（position为absolute、relative、fixed），那么 `offsetParent` 获取的是**最近的**那个父元素。

- 如果当前元素的父元素，**没有CSS定位**（position为absolute、relative、fixed），那么`offsetParent` 获取的是**body**。


#### 3、offsetLeft 和 offsetTop

`offsetLeft`：当前元素相对于其**定位父元素**的水平偏移量。

`offsetTop`：当前元素相对于其**定位父元素**的垂直偏移量。

**备注：从父亲的 padding 开始算起，父亲的 border 不算在内。这是只读属性**

#### 4. offsetLeft 和 style.left 区别

offsetLeft 可以返回无定位父元素的偏移量。如果父元素中都没有定位，则body为准。而style.left 只能获取行内样式，如果父元素中都没有设置定位，则返回""（意思是，返回空字符串）;

offsetTop 返回的是数字，而 style.top 返回的是字符串，而且还带有单位：px。

```js
div.offsetLeft = 100;
div.style.left = "100px";
```

（3）offsetLeft 和 offsetTop **只读**，而 style.left 和 style.top 可读写（只读是获取值，可写是修改值）


总结：我们一般的做法是：**用offsetLeft 和 offsetTop 获取值，用style.left 和 style.top 赋值**（比较方便）。理由如下：

- style.left：只能获取行内式，获取的值可能为空，容易出现NaN。

- offsetLeft：获取值特别方便，而且是现成的number，方便计算。它是只读的，不能赋值。


### 二: scroll

#### 1、ScrollWidth 和 scrollHeight

`ScrollWidth` 和 `scrollHeight`：获取元素**整个滚动区域**的宽、高。包括 width 和 padding，不包括 border和margin。


**注意**：

`scrollHeight` 的特点是：**如果内容超出了盒子，`scrollHeight`为内容的高**（包括超出的内容）；如果不超出，`scrollHeight`为盒子本身的高度。`ScrollWidth`同理。

#### 2、scrollTop 和 scrollLeft

- `scrollLeft`：获取水平滚动条滚动的距离。

- `scrollTop`：获取垂直滚动条滚动的距离。

**实战经验**：

当某个元素满足`scrollHeight - scrollTop == clientHeight`时，说明垂直滚动条滚动到底了。

当某个元素满足`scrollWidth - scrollLeft == clientWidth`时，说明水平滚动条滚动到底了。

这个实战经验非常有用，可以用来判断用户是否已经将内容滑动到底了。

### 三: client

#### 1. clientWidth 和 clientHeight

元素调用时：

- clientWidth：获取元素的可见宽度（width + padding）。

- clientHeight：获取元素的可见高度（height + padding）。


body/html 调用时：

- clientWidth：获取网页可视区域宽度。

- clientHeight：获取网页可视区域高度。

**声明**：

- `clientWidth` 和 `clientHeight` 属性是只读的，不可修改。

- `clientWidth` 和 `clientHeight` 的值都是不带 px 的，返回的都是一个数字，可以直接进行计算。

#### 2. clientX 和 clientY

event调用：

- clientX：鼠标距离可视区域左侧距离。

- clientY：鼠标距离可视区域上侧距离。


### 四: 三者区别

| 方法        | 所占宽度                  |
| ----------- | ------------------------- |
| offsetWidth | width  + padding + border |
| scrollWidth | width  + padding          |
| clientWidth | width  + padding          |













## bind

```js
// 手写 bind
Function.prototype.myBind = function (ctx) {
  let _this = this;
  return function () {
    return _this.apply(ctx, arguments)
  }
}

function fn(a, b) {
  console.log(this, a, b)
}

let newFn = fn.myBind({})
newFn(1, 2)
```





## array

数组中任何元素的索引都不会大于或等于数组的 length，为了维护这种不变式，数组有两个
特殊行为：
1．如果给一个索引为i的数组元素赋值，而1大于或等于数组当前的Length，则数组的
length属性会被设置为i+1。
2。如果将length属性设置为一个小于其当前值的非负整数n，则任何索引大于或等于n的数
组元素都会从数组中被删除



