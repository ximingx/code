    // 定义函数

    function foo(name) {
      console.log("foo函数:", this)
    }

    foo() // globalThis

    foo.call("x",11) // [String: 'x']


