# Day12 作业布置

## 一. 完成课堂所有的代码





## 二. 正则表达式常见的规则练习

正则: 字符串匹配利器

创建正则

- new RegExp()
- //

使用方法

- 正则实例的方法
  - test 匹配则返回true否则返回false
  - exec 返回一个数组 未找到返回null
- 字符串方法
  - match 返回一个数组 未找到返回null
  - matchAll 返回迭代器 必须有修饰符g
  - search 返回匹配到的位置索引 失败时返回-1
  - replace/replaceAll 替换掉匹配掉的字符串
  - split 使用正则表达式(或固定字符串)分割一个字符串将分割后的字符串存到数组中返回

修饰符

- g (global)
- i (ignore 不分大小写)
- m(多行匹配)

规则

- 字符类
  - /d /D
    - /d => [0-9]
    - /D => [\^0-9]
  - /s /S
    - /s 空格符号 [ ]
    - /S 除/s匹配的值之外 [\^ ]
  - /w /W
    - /w => [a-zA-Z_0-9]
    - /W => [\^a-zA-Z_0-9]
  - .
    - 与除换行符之外的任意字符匹配

- 锚点
  - ^ 开头
  - $ 结尾
  - \b 词边界
- 转义字符串
  - \ 对特殊字符转义(如[] \ ^ $ . ? * + ())
- 集合(Sets) 范围(Ranges)
  - []
  - [2,] 
  - [2,6]
- 量词(Quantifiers)
  - 数量{n}
- 贪婪模式/ 惰性模式
  - 贪婪模式 默认匹配规则会匹配到符合条件的最后一个内容
  - 惰性模式 ? 匹配到第一个符合规则的正则就返回
- 捕获组
  - ()
  - (?:) 希望该)()中的内容去匹配但是不希望括号中的内容出现在结果中时
  - 起别名
    - (?^(别名))
  - | 或
    - (23|45)
- (?)



## 三. LocalStorage和SessionStorage的区别

- LocalStorage提供一种永久性存储的方法 在网页关闭打开时 依然保留
- SessionStorage: 会话存储 再关闭该网页时 存储的内容被清除
- 区别: 
  - localStorage永久性存储 SessionStorage在关闭当前页面时存储的内容就会失效
  - SessionStorage只能被同一个窗口的同源页面共享 localStorage除非手动删除 否则一直存在







































