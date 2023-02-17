# Day13 作业布置

## 一. 完成课堂所有的代码





## 二. 说说你对防抖、节流的理解，他们的区别，应用场景(面试)

防抖: 将多次执行函数变成最后一次执行 等待固定时间还没有事件触发时执行的函数 

- 应用场景
  - 按钮的点击
  - 屏幕滚动时的复杂计算
  - 输入框输入时进行搜索
  - 用户缩放浏览器的resize事件

- 简单的防抖函数实现

- ```js
   function myDebounce(execFn, delay) {
        let timer = 0
        
        function _debounce(...args) {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            execFn.apply(this, args)
            timer = null
          }, delay)
        }
    
        return _debounce
   }
  ```

  



节流: 按照固定的时间频率(间隔)来执行对应的函数 

- 应用场景:  

  - 监听页面的滚动事件 通过节流来降低事件调用的频率
  - 鼠标移动
  - 用户频繁点击按钮的操作

- 简单实现

- ```js
    function myThrottle(execFn, interval) {
        let initTime = 0
    
        function throttle(...args) {
          let nowTime = Date.now()
          const waitTime = interval - (nowTime - initTime)
          if (waitTime <= 0) {
            execFn.apply(this, args)
            initTime = nowTime
          }
        }
        return throttle
      }
  ```

## 三. 说说对象的引用赋值、浅拷贝、深拷贝的区别

对象的引用赋值

- 把源对象指向自身所在堆内存空间的指针给了新对象 两个对象所指向的内存空间是一样的 修改其中一个的值 另一个也会发生改变

对象的浅拷贝

- 可以通过{...obj}的方式进行对象的浅拷贝 (Object.assign({},obj))
- 对于obj中的值是原始数据类型的 将对应的值赋值给了newObj中对应的属性
- 对于obj中是复杂数据类型的值 把对应在内存中的指针赋值给了newObj中对应的key 对于复杂数据类型的value修改其中一个另一个也发生改变

对象的深拷贝(真实开发中使用非常少)

- newObj与obj中的属性值一样 但是是一个全新的对象 与元对象没有任何关系

- 默认情况下 js没有提供对应的深拷贝的方式 因为深拷贝是非常消耗内存的

- 有对应的库实现了深拷贝

- 实现深拷贝

  - JSON.parse(JSON.stringfy(obj))

    - 缺点: 对于某些属性如 undefined,Symbol,function,Symbol 会自动忽略; 对于set map 会转成对象

  - 自己实现(不带循环引用)

    - ```js
       function isObject(obj) {
            return obj !== null && (typeof obj === "object" || typeof obj === "function")
          }
        
          function deepClone(originValue) {
            // Symbol类型
            if (typeof originValue === "symbol") {
              return Symbol(originValue.description)
            }
        
            // 判断是否是对象
            if (!isObject(originValue)) return originValue;
        
            // set类型
            if (originValue instanceof Set) {
              const newSet = new Set()
              for (const setItem of originValue) {
                newSet.add(deepClone(setItem))
              }
              return newSet
            }
        
            // 判断是函数
            if (typeof originValue === "function") {
              return originValue
            }
        
            // 判断返回值是数组还是对象
            const newObj = Array.isArray(originValue) ? [] : {}
            if (Reflect) {
              for (let key of Reflect.ownKeys(originValue)) {
                {
                  let value = originValue[key]
                  // 让 SymbolKey的值不同
                  if (typeof key === "symbol") {
                    const newSymbolKey = Symbol(key.description)
                    // 将原来的值赋值给新生成的Symbol key
                    value = originValue[key]
                    key = newSymbolKey
                  }
                  newObj[key] = deepClone(value)
                }
              }
            } else {
              for (const key in originValue) {
                const value = originValue[key]
                newObj[key] = deepClone(value)
              }
        
              // 对于Symbol类型的key forin 无法便利出来
              const symbolKeys = Object.getOwnPropertySymbols(originValue)
               for (const symbolKey in symbolKeys) {
               const originSymbolValue = symbolKeys[symbolKey]
               const newSymbol = Symbol(originSymbolValue.description)
               newObj[newSymbol] = deepClone(originValue[originSymbolValue])
             }
           }
               return newObj
               }
  
  - 循环引用
  
    - ```js
      
          function isObject(obj) {
            return obj !== null && (typeof obj === "object" || typeof obj === "function")
          }
      
          function deepClone(originValue, map = new WeakMap()) {
            // Symbol类型
            if (typeof originValue === "symbol") {
              return Symbol(originValue.description)
            }
      
            // 判断是否是对象
            if (!isObject(originValue)) return originValue;
      
            if (map.has(originValue)) {
              return map.get(originValue)
            }
            // set类型
            if (originValue instanceof Set) {
              const newSet = new Set()
              for (const setItem of originValue) {
                newSet.add(deepClone(setItem, map))
              }
              return newSet
            }
      
            // 判断是函数
            if (typeof originValue === "function") {
              return originValue
            }
      
            // 判断返回值是数组还是对象
            const newObj = Array.isArray(originValue) ? [] : {}
            map.set(originValue, newObj)
            if (Reflect) {
              for (let key of Reflect.ownKeys(originValue)) {
                {
                  let value = originValue[key]
                  // 让 SymbolKey的值不同
                  if (typeof key === "symbol") {
                    const newSymbolKey = Symbol(key.description)
                    // 将原来的值赋值给新生成的Symbol key
                    value = originValue[key]
                    key = newSymbolKey
                  }
                  newObj[key] = deepClone(value, map)
                }
              }
            } else {
              for (const key in originValue) {
                const value = originValue[key]
                newObj[key] = deepClone(value, map)
              }
      
              // 对于Symbol类型的key forin 无法便利出来
              const symbolKeys = Object.getOwnPropertySymbols(originValue)
      
      
              for (const symbolKey in symbolKeys) {
                const originSymbolValue = symbolKeys[symbolKey]
                const newSymbol = Symbol(originSymbolValue.description)
                newObj[newSymbol] = deepClone(originValue[originSymbolValue], map)
              }
            }
      
      
      
            return newObj
          }
      ```
  
    - 





## 四. 事件总线的基本实现和使用(重点)

```js
class myEventBus {
  constructor() {
    this.eventBus = {};
  }

  on(eventName, eventFn) {
    let eventSet = this.eventBus[eventName];
    if (!eventSet) {
      eventSet = new Set();
      this.eventBus[eventName] = eventSet;
    }
    this.eventBus[eventName].add(eventFn);
  }

  off(eventName, eventFn) {
    if (!this.eventBus[eventName]) {
      return;
    }
    const eventSet = this.eventBus[eventName];
    if (eventSet.has(eventFn)) this.eventBus[eventName].delete(eventFn);

    // 如果删除函数后 该事件对应的set为空 则删除该事件
    if (!this.eventBus[eventName].size) {
      delete this.eventBus[eventName];
    }
  }

  emit(eventName, ...payload) {
    if (!this.eventBus[eventName]) {
      return;
    }
    for (const item of this.eventBus[eventName]) {
      item(...payload);
    }
  }
}

const mitt = new myEventBus();
mitt.on("wmm", () => {
  console.log("123");
});
const fn = () => {
  console.log("456");
};
mitt.on("wmm", fn);
mitt.on("wmm", () => {
  console.log("789");
});

setTimeout(() => {
  // 移除事件
  mitt.off("wmm", fn);
}, 1000);
setTimeout(() => {
  mitt.emit("wmm");
}, 2000);
// 123
// 789

```

















































