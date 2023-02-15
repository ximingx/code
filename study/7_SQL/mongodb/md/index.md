# 1. MongoDB

## 1. 数据库基础

### 1. 关系型数据库

**MongoDB是一种非关系型数据库,MySQL是一种关系型数据库**

**特点: 不需要设计表的结构,可以任意的存放数据,文档结构没有任何限制**

**在MongoDB中不需要显式创建数据库，如果正在使用的数据库不存在，MongoDB会自动创建。**

可以拥有多个数据库 local , admin , config ,app

每一个数据库可以有多个集合 user , products

每一个集合可以拥有多个文档(相当于MySQL的表记录)

| **术语**   | **解释说明**                                             |
| ---------- | -------------------------------------------------------- |
| database   | 数据库，mongoDB数据库软件中可以建立多个数据库            |
| collection | 集合，一组数据的集合，可以理解为JavaScript中的数组       |
| document   | 文档，一条具体的数据，可以理解为JavaScript中的对象       |
| field      | 字段，文档中的属性名称，可以理解为JavaScript中的对象属性 |

```json
{
    local: {
        
    },
    admin: {
        
    },
    config: {
        
    },
    app: {
        user: [
            {
                name: ''
            }
        ],
        products: [
            
        ]
    }
}
```



配置环境变量: path 直接添加安装地址的bin目录

安装成功标志

```bash
mongod --version
```

**手动添加地址地址** C:\data\db

开启服务

```bash
mongod 

sudo mongod --dbpath=/Users/ximingx/data (mac)
```

开启服务后 , 连接mongodb数据库,默认连接本地

```bash
mongo
//连接后可以通过exit退出连接
```

### 2. windows 安装





### 3. Linux 安装

#### 1. 环境准备

> CentOS 7
>
> MongoDB 3.4.9 

下载地址：https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.4.9.tgz

将下载的文件放到/opt目录下

#### 2. 解压

解压下载到的tgz文件,并给文件夹重命名为mongodb，然后创建db、logs目录分别用来存放数据和日志

```bash

```

#### 3. 配置

https://mp.weixin.qq.com/s?__biz=MzI1NDY0MTkzNQ==&mid=2247484233&idx=1&sn=bcdc1b207261f0203d6fee80fb60c2dc&chksm=e9c35129deb4d83f1564c24fc6ff12378d98462baa35f9465bdad2c474f83d09e176817c947b&scene=178&cur_album_id=1320464036546379777#rd





## 2. 数据库结构

### 1. 数据库

MongoDB 中多个文档组成集合，多个集合组成数据库。

一个MongoDB 实例可以承载多个数据库。它们之间可以看作相互独立，每个数据库都有独立的权限控制。在磁盘上，不同的数据库存放在不同的文件中。

MongoDB 中存在以下系统数据库。

Admin 数据库：一个权限数据库，如果创建用户的时候将该用户添加到admin 数据库中，那么该用户就自动继承了所有数据库的权限。
Local 数据库：这个数据库永远不会被复制，可以用来存储本地单台服务器的任意集合。
Config 数据库：当MongoDB 使用分片模式时，config 数据库在内部使用，用于保存分片的信息。





### 2.集合

MongoDB将文档存储在集合中。集合类似于关系数据库中的表

![img](assets/image/index/crud-annotated-collection.bakedsvg.svg)

### 3. 文档

MongoDB中的记录是一个文档，它是由字段和值对组成的数据结构，多个键及其关联的值有序地放在一起就构成了文档。

![img](assets/image/index/crud-annotated-document.bakedsvg.svg)

文档中的值不仅可以是双引号中的字符串，也可以是其他的数据类型，例如，整型、布尔型等，也可以是另外一个文档，即文档可以嵌套。

但是文档中的键类型只能是字符串。



### 4. 字段

一个Document包含一组field（字段），每一个字段都是一个`key/value pair`。





### 5. 视图





## 3. 数据库操作

### 1. 数据库操作

#### 1. 显示当前数据库

在 `shell` 中，`db`是指您当前的数据库。键入`db`以显示当前数据库。

```bash
$ db
```

该操作应返回的是默认数据库

#### 2. 切换数据库

要切换数据库，请键入 `use <db>`

如果没有, 会先切换, 在添加数据后新建 **use `数据库名称`**

```bash
$ use examples
```

切换之前您无需创建数据库。当您第一次在数据库中存储数据时（例如在数据库中创建第一个集合）

#### 3. 显示所有数据库 

```bash
$ show dbs

admin   0.000GB
config  0.000GB
local   0.000GB
```

### 2. 增删改查

#### 1. 插入

在MongoDB中，我们插入的每一条记录都是一个json字符串，这个json字符串我们称作**文档**，多个文档可以组成一个集合

我们每次插入一条数据系统都会自动帮我们插入一个`_id`键，这个键的值不可以重复，它可以是任何类型的，我们也可以手动的插入，默认情况下它的数据类型是ObjectId，由于MongoDB在设计之初就是用作分布式数据库，所以使用ObjectId可以避免不同数据库中`_id`的重复

> insert

插入一条或者多条数据,需要带有允许插入多条的参数，这个方法目前官方已经不推荐

```bash
$ db.user.insert({ id:1,name:"jack",age:73 })
```

> insertOne

```bash
$ db.user.insertOne({
             name: 'admin',
             password: '123456'
         })
```

> insertMany

```bash
db.user.insertMany([
    {
        name: 'admin',
        password: '123456',
        data: new Date()
    },
    {
        name: '123',
        password: '234dsfg',
        data: new Date()
    }
])
```

#### 2. 查找

> find

无条件查找:将该集合(Collection)中所有的数据一次性返回

```bash
$ db.user.find()
```

> findOne

条件查找一条数据,默认当前Collection中的第一条数据，只返回一条数据

```bash
$ db.user.findOne()
```

> 正则表达式

```bash
$ db.user.find({name: /admin/})
```

#### 3. 删

>  remove

无条件删除数据,这里要注意了,这是删除所有数据,清空整个集合数据Collection

>deleteOne 

传入要删除的那个字段查询条件，删除一条

> deleteMany

删除多条数据

#### 4.修改

> updateOne	

根据条件修改一条数据的内容,如出现多条,只修改最高前的数据

```bash
$ db.user.updateOne({name: 'admin'}, {$set: {name: '123'}})
```

> updateMany

根据条件修改所有数据的内容,多条修改

## 4. 安全

上面我们所做的所有的操作都没有涉及到用户，我们在用Oracle、MySQL或者MSSQL时都有用户名密码需要登录才可以操作，MongoDB中当然也有，但是需要我们手动添加。

> 需要注意

1. MongoDB中的账号是在某一个库里边进行设置的，我们在哪一个库里边进行设置，就要在哪一个库里边进行验证。

2. 创建用户时，我们需要指定用户名、用户密码和用户角色，用户角色表示了该用户的权限。

3. 启用访问控制时，确认你已经有一个具有`userAdmin`或者`userAdminAnyDatabase`角色的用户在admin数据库中。这个用户能管理用户和角色，例如：创建用户、授予或者撤销用户的角色、创建或者修改角色。

### 1. 启用访问控制

在MongoDB部署时启用访问控制可以加强身份验证，要求用户表明自己的身份。当访问一个在部署时开启了访问控制的MongoDB时，用户只能执行由其角色决定的操作。

#### 1. 启动mongod

没开启访问控制时启动独立的mongod实例

```bash
$ mongod --port 27017 --dbpath /var/lib/mongodb
```

#### 2. 连接 mongo 实例

打开一个新的终端并且使用mongo shell连接到mongod实例

```bash
$ mongo --port
```

#### 3. 创建用户管理员

通过mongo shell 在admin数据库中增加一个有`userAdminAnyDatabase` 角色的用户。包括此用户需要的其他角色。例如，下面在admin数据库中创建用户myUserAdmin，此用户有`userAdminAnyDatabase`和`readWriteAnyDatabase` 角色。

```bash
$ use admin
$ db.creatUser(
    {
        user: "myUserAdmin",
        pwd: passwordPrompt, // 或者输入明文密码
        roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
    }
)
```

尽管用户将向此数据库进行身份认证，但用户可以在其他数据库中具有角色；即用户的身份认证数据库不会限制用户的权限。

#### 4. 重启MongoDB实例

关闭mongod 实例

```bash
$ db.adminCommand({shutdown: 1})
```

退出mongo shell

```bash
$ mongod --auth --port 27017 --dbpath /var/lib/mongodb
```

#### 5. 连接后进行身份认证

```bash
$ mongo --port 27017
```

在这个mongo shell 中，切换到认证数据库，然后使用 `db.auth()`方法进行身份认证

```bash
$ use admin
$ db.auth("myUserAdmin",  "abc123")
```

#### 6. 创建其他用户

一旦身份验证为用户管理员，就能使用`db.createUser()`来创建其他用户。你可以将任务内置角色或用户自定义的角色分配给用户。

下面的操作将用户myTester添加到test数据库，该用户在test数据库具有readWrite角色，在reporting 数据库具有read角色。

```bash
$ use test
$ db.createUser(
  {
    user: "myTester",
    pwd: "xyz123",
    roles: [ { role: "readWrite", db: "test" },
             { role: "read", db: "reporting" } ]
  }
)
```

#### 7. 登陆

开启mongo shell时，使用选项：`-u 、-p 和 --authenticationDatabase` 命令行选项

```bash
$ mongo --port 27017 -u "myUserAdmin" --authenticationDatabase "admin" -p
```

### 2. 用户权限值

| 值                   | 含义                                                         |
| -------------------- | ------------------------------------------------------------ |
| read                 | 允许用户读取指定数据库                                       |
| readWrite            | 允许用户读写指定数据库                                       |
| dbAdmin              | 允许用户在指定数据库中执行管理函数，如索引创建、删除，查看统计或访问system.profile |
| userAdmin            | 允许用户向system.users集合写入，可以找指定数据库里创建、删除和管理用户 |
| clusterAdmin         | 只在admin数据库中可用，赋予用户所有分片和复制集相关函数的管理权限 |
| readAnyDatabase      | 只在admin数据库中可用，赋予用户所有数据库的读权限            |
| readWriteAnyDatabase | 只在admin数据库中可用，赋予用户所有数据库的读写权限          |
| userAdminAnyDatabase | 只在admin数据库中可用，赋予用户所有数据库的userAdmin权限     |
| dbAdminAnyDatabase   | 只在admin数据库中可用，赋予用户所有数据库的dbAdmin权限       |
| root                 | 只在admin数据库中可用。超级账号，超级权限                    |

## 5. 服务器设置 Mongodb

### 1.宝塔安装mongodb

软件商店搜索 mongodb 安装即可

![image-20220422192725423](assets/image/index/202204221927538.png)

### 2.修改mongodb配置

`bindIp` 由127.0.0.1改为0.0.0.0，放开ip限制

![image-20220422193002943](assets/image/index/202204221930055.png)

### 3.宝塔放开 27017 端口

![image-20220422192910259](assets/image/index/202204221929362.png)

### 4.服务器放开 27017 端口

![image-20220422193104327](assets/image/index/202204221931436.png)

### 5.验证

浏览器打开 http://公网ip:27017，出现下图表示安装成功了

![image-20220422193227642](assets/image/index/202204221932752.png)

### 6.无密码连接

新建远程连接，输入ip和端口即可

![image-20220422193322592](assets/image/index/202204221933647.png)

### 7.配置用户名密码

通过宝塔终端或shell执行如下步骤:

1.连接mongo

```bash
> cd /www/server/mongodb/bin/

> ./mongo

# 这里会显示很多, 但是不需要管

Implicit session: session { "id" : UUID("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~  ~") }
MongoDB server version: 4.4.6
Welcome to the MongoDB shell.
    For interactive help, type "help".
    For more comprehensive documentation, see
https://docs.mongodb.com/
    Questions? Try the MongoDB Developer Community Forums
https://community.mongodb.com
    ---
        The server generated these startup warnings when booting:
    2022-04-22T19:10:34.984+08:00: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine. See http://dochub.mongodb.org/core/prodnotes-filesystem
    2022-04-22T19:10:35.494+08:00: /sys/kernel/mm/transparent_hugepage/enabled is 'always'. We suggest setting it to 'never'
2022-04-22T19:10:35.494+08:00: /sys/kernel/mm/transparent_hugepage/defrag is 'always'. We suggest setting it to 'never'
---
    ---
        Enable MongoDB's free cloud-based monitoring service, which will then receive and display
metrics about your deployment (disk utilization, CPU, operation statistics, etc).

The monitoring data will be available on a MongoDB website with a unique URL accessible to you
and anyone you share the URL with. MongoDB may use this information to make product
improvements and to suggest MongoDB products and deployment options to you.

    To enable free monitoring, run the following command: db.enableFreeMonitoring()
To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---

# 然后输入
# 切换数据库
> use admin

switched to db admin

# <role> admin 库添加用户和读写权限 
# 1.数据库用户角色：read、readWrite;
# 2.数据库管理角色：dbAdmin、dbOwner、userAdmin；
# 3.集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManager；
# 4.备份恢复角色：backup、restore
# 5.所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase
# 6.超级用户角色：root
> db.createUser({user:"用户名",pwd:"密码",roles:["root"] })
Successfully added user: {
  "user" : "用户名",
      "roles" : [
    {
      "role" : "",
      "db" : ""
    }
  ]
}

# 验证
> db.auth("用户名","密码")

Error: Authentication failed.
0

> db.auth("用户名","密码")
1

> ^C
bye
```

### 8. 修改mongodb配置

修改mongodb配置文件中的`authorization` 为 enabled，并重启

![image-20220422193831919](assets/image/index/202204221938996.png)













## 6. 代码操作

```sql
// 1. MongoDB 的结构介绍
// MongoDB 是一个可拓展、开源、表结构自由、用 C++ 语言编写且面向文档的高性能分布式数据库。为 WEB 应用提供可扩展的高性能数据存储解决方案
// MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的
// MongoDB 将数据存储为一个文档，数据结构由键值(key=>value)对组成。MongoDB 文档类似于 JSON 对象。字段值可以包含其他文档，数组及文档数组
// mongo适合存储大量关联性不强的数据；大批量，高并发，不规则
// mongo存储结构: 库、集合、文档、字段
// mongo不需要预先定义表结构，数据的字段可以任意变动，并发写入的速度也远远超过关系型数据库
// 模式自由： 表结构可拓展，集合(表)中文档(一行记录)的字段(拥有的列)是可以变化的
// 支持完全索引： 可以在任意属性上建立索引，包含内部对象。MongoDB的索引和RDBMS 的索引基本一样，可以在指定属性、内部对象上创建索引以提高查询的速度。除此之外，MongoDB 还提供创建基于地理空间的索引的能力
// 使用高效的二进制数据存储： 包括大型对象（如视频）。使用二进制格式存储，可以保存任何类型的数据对象
// GridFS功能： GridFS是MongoDB中的一个内置功能，可以用于存放大量小文件
// 网站实时数据处理：它非常适合实时的插入、更新与查询，并具备网站实时数据存储所需的复制及高度伸缩性。
// 不适合复杂的跨文档（表）级联查询
// 不适合要求高度事务性的系统：例如，银行或会计系统。传统的关系型数据库目前还是更适用于需要大量原子性复杂事务的应用程序


// 集合，文档
// 集合就是 MongoDB 文档组，类似于 RDBMS （关系数据库管理系统：Relational Database Management System)中的表格
// 集合存在于数据库中，集合没有固定的结构，这意味着你在对集合可以插入不同格式和类型的数据，但通常情况下我们插入集合的数据都会有一定的关联性
// 文档是一组键值(key-value)对(即 BSON)。MongoDB 的文档不需要设置相同的字段，并且相同的字段不需要相同的数据类型，这与关系型数据库有很大的区别，也是 MongoDB 非常突出的特点
    // BSON 是一种类似 JSON 的二进制形式的存储格式，是 Binary JSON 的简称


// 可执行文件
// mongod：启动数据库实例的可执行文件，是整个MongoDB中最核心的文件，负责数据库的创建、删除等各项管理工作，运行在服务器端，监听客户端的连接请求。
// mongo进程：是一个与mongod进程进行交互的JavaScript Shell进程，它提供了一些交互的接口函数为系统管理员对数据库进行管理。mongo 可以直接进入mongo环境
// mongodump：将数据导为BSON格式的文件，备份数据库，同时可以利用这些dump文件重建数据库。使用mongodump -help可以查看支持的指令。
// mongorestore：恢复备份文件。
// mongoexport：将数据导出成json或csv格式的文件。
// mongoimport：将json或csv格式的文件导入到mongo。
// mongos：在分片中用到的进程文件，所有应用程序端的查询操作都会先用它分析，然后将查询定位到某一个分片上，它的监听作用与mongod的监听作用类似。
// mongofiles：mongofiles提供了一个操作MongoDB分布式文件存储GridFS系统的命令行接口。
// mongostat：展示当前正在运行的mongod或mongos实例的状态工具，相当于unix/linux的 vmstat, 但是它提供的数据只与运行的mongod或mongos的实例相关。
// mongotop：提供了一个分析MongoDB实例在读写数据上的时间跟踪方法。


// 标准 URI 连接数据库语法：
// mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
// 使用用户名密码连接: mongodb://admin:123456@localhost/test
// 以安全模式连接到replica set，并且等待至少两个复制服务器成功写入，超时时间设置为2秒: mongodb://host1,host2,host3/?safe=true;w=2;wtimeoutMS=2000
// 参数说明：:
// mongodb:// 这是固定的格式，必须要指定。
// username:password@ 可选项，如果设置，在连接数据库服务器之后，驱动都会尝试登录这个数据库
// host1 必须的指定至少一个host, host1 是这个URI唯一要填写的。它指定了要连接服务器的地址。如果要连接复制集，请指定多个主机地址。
// portX 可选的指定端口，如果不填，默认为27017
// /database 如果指定username:password@，连接并验证登录指定数据库。若不指定，默认打开 test 数据库。
// ?options 是连接选项。如果不使用/database，则前面需要加上/。所有连接选项都是键值对name=value，键值对之间通过&或;（分号）隔开


// 数据类型     	描述
// String     	字符串。存储数据常用的数据类型。在 MongoDB 中，UTF-8 编码的字符串才是合法的。
// Integer     	整型数值。用于存储数值。根据你所采用的服务器，可分为 32 位或 64 位。
// Boolean     	布尔值。用于存储布尔值（真/假）。
// Double     	双精度浮点值。用于存储浮点值。
// Min/Max keys	将一个值与 BSON（二进制的 JSON）元素的最低值和最高值相对比。
// Array     	用于将数组或列表或多个值存储为一个键。
// Timestamp    时间戳。记录文档修改或添加的具体时间。
// Object     	用于内嵌文档。
// Null     	用于创建空值。
// Symbol     	符号。该数据类型基本上等同于字符串类型，但不同的是，它一般用于采用特殊符号类型的语言。
// Date     	日期时间。用 UNIX 时间格式来存储当前日期或时间。你可以指定自己的日期时间：创建 Date 对象，传入年月日信息。
// ObjectId	    对象 ID。用于创建文档的 ID，可以很快的去生成和排序，包含 12 bytes
    // 前4个字节表示创建unix时间戳,格林尼治时间UTC时间，比北京时间晚了8小时
    // 接下来的 3 个字节是机器标识码
    // 紧接的两个字节由进程 id 组成 PID
    // 最后三个字节是随机数
// Binary       Data	二进制数据。用于存储二进制数据。
// Code     	代码类型。用于在文档中存储 JavaScript 代码。
// Regular      expression	正则表达式类型。用于存储正则表达式。


// MongoDB保留的数据库
// admin： 从权限的角度来看，这是"root"数据库。要是将一个用户添加到这个数据库，这个用户自动继承所有数据库的权限。一些特定的服务器端命令也只能从这个数据库运行，比如列出所有的数据库或者关闭服务器。
// local: 这个数据永远不会被复制，可以用来存储限于本地单台服务器的任意集合
// config: 当Mongo用于分片设置时，config数据库在内部使用，用于保存分片的相关信息。


// 看每个命令的详细用法，可以使用
db.listCommands()

// 数据库操作更详细的帮助命令
db.help()

// 对指定数据库的集合进行操作、管理和监控
db.mycoll.help()


// 数据库的基本操作
// 显示所有数据的列表
show dbs
// 数据库不存在，则创建数据库，否则切换到指定数据
use user
// 显示当前数据库
db
// 删除数据库
db.dropDatabase()
// 显示集合名
show collections
// 创建集合user
db.createCollection("user")
// 删除集合user
db.user.drop()


// 插入文档
// 注意: 在 MongoDB 中，直接插入内容会自动创建集合
// 使用insert()方法, 不推荐使用
db.user.insert({
    "name":"zhangsan",
    "age": 18
})
// insertOne()方法插入一条数据
db.user.insertOne({
    name: 'root',
    age: 100,
    permission: 1
})
// insertMany()方法向指定集合中插入多条文档数据, 可指定参数
db.user.insertMany([
    {
        "name":"zhangsan",
        "age": 18
    },
    {
        "name":"lisi",
        "age": 20
    }
])


// 删除文档
// deleteOne() 和 deleteMany()
db.user.deleteOne({
    name: 'ximingx'
})


// 更新文档
// 集合user中名称为zhangsan的用户的age更新成21
db.user.update({
    'name':'zhangsan'
},{
    $set:{
        'age': 21
    }
})
// 更新一条：db.collection.updateOne()
// 更新多条：db.collection.updateMany()


// bulk-write 操作
// MongoDB批量操作支持同时执行一批写操作，写操作包括：插入文档、更新文档、删除文档
db.user.bulkWrite(
  [
     {
        insertOne: {
            // 插入文档
           "document": {
              "_id" : 4, "char" : "Dithras", "class" : "barbarian", "lvl" : 4
           }
        }
     },
     {
        deleteOne: {
            // 删除条件
            filter: {
                "char": "Brisbane"
            }
        }
     },
     {
        updateOne: {
            // 更新条件
            "filter" : {
                "char" : "Eldon"
            },
            // 更新内容
            "update" : {
                $set : {
                    "status" : "Critical Injury"
                }
            }
        }
     }
  ]
 );


// 文档查询操作
// 查询user文档中的所有
db.user.find()
// 集合user中查询 name为ximingx
db.user.find({
    'name': 'ximingx'
})
// 集合user中查询 name为ximingx 且 指定指定返回哪些键
db.user.find({
    'name': 'ximingx'
}, {"permission": 1})
// 查询 name为ximingx 且 age为20 的数据
db.user.find({
    'name':'ximingx',
    'age': 18
})
// 集合user 中查询 name为ximingx 或 age为20 的数据
db.user.find({
    $or: [
    {
        'name':'ximingx'
    },
    {
        'age': 20
    }]
})
// 集合user 中查询 permission为1 且 (name为ximingx 或 age为20) 的数据
db.user.find({
    permission: 1,
    $or: [
    {
        'name':'ximingx'
    },
    {
        'age': {
            $gt: 20
        }
    }]
})
// 条件操作符
// (>) 大于 - $gt
// (<) 小于 - $lt
// (>=) 大于等于 - $gte
// (<=) 小于等于 - $lte
// (!==) 不等于 $ne
// user集合中 age小于30
db.user.find({
    age : {
        $lt : 30
    }
})
// user集合中 age小于30
db.user.find({
    age : {
        $lt: 30,
        $gte: 20
    }
})
// user集合中 age不等于20
db.user.find({
    age : {
        $ne: 20
    }
})
// user集合中 age等于20，99， 25
db.user.find({
    age: {
        "$in": [99, 20, 25]
    }
})
// regexp
db.user.find({
    age: /1/
})
// 使用limit()方法来读取指定数量的数据
// 使用skip()方法来跳过指定数量的数据
// 如显示查询文档中的两条记录
db.user.find({
    age : {
        $lt : 30
    }
}).limit(2)
// 以下实例只会显示第二条文档数据
db.user.find({

}).limit(1).skip(1)
// sort() 方法可以通过参数指定排序的字段，并使用 1 和 -1 来指定排序的方式
// 其中 1 为升序排列，而 -1 是用于降序排列。
// 执行的顺序是先 sort(), 然后是 skip()，最后是显示的 limit()。
db.user.find({

},{
    "age":1
}).sort({
    "likes": -1
})
// 返回匹配数据的长度
db.user.find().count()
// 格式化的方式显示所有文档
db.user.find().pretty()
// 如果存在字段love，就返回
db.user.find({"love": {"$exists": true}})
// 我们也可以判断不存在, 如果不存在字段love，就返回
db.user.find({"love": {"$exists": false}})


// 集合中列的各种操作
// 修改age为 31 的列的address列的名称修改为address2，只会修改一条记录
db.user.update(
    {
        age: 31
    },
    {
        $rename: {
            address: 'address2'
        }
    }
)
// name为张三的address列的名修改为address2，会修改所有满足条件的记录。
db.user.update(
    {
        age: 31
    },
    {
        $rename: {
            address: 'address2'
        }
    },{
        multi: true
    }
)
// 更新特定字段
db.user.update(
    {
        "_id": 123
    },
    {
        "$set": {
            "count": 10000
        }
    }
)
// 删除特定字段
db.user.update(
    {
        "_id": 123
    },
    {
        "$unset": {
            "count": 10000
        }
    }
)


// 索引通常能够极大的提高查询的效率，如果没有索引，MongoDB在读取数据时必须扫描集合中的每个文件并选取那些符合查询条件的记录
// 这种扫描全集合的查询效率是非常低的，特别在处理大量的数据时，查询可以要花费几十秒甚至几分钟，这对网站的性能是非常致命的
// 索引是特殊的数据结构，索引存储在一个易于遍历读取的数据集合中，索引是对数据库表中一列或多列的值进行排序的一种结构
// MongoDB使用 createIndex() 方法来创建索引
// 语法格式：db.collection.createIndex(keys, options)
// 语法中 Key 值为你要创建的索引字段，1 为指定按升序创建索引，如果你想按降序来创建索引指定为 -1 即可。
db.user.createIndex(
    {
        "title": 1,
        "description": -1
    }
)
// 查看集合索引
db.user.getIndexes()
// 查看集合索引大小
db.user.totalIndexSize()
// 删除集合所有索引
db.user.dropIndexes()
// 删除集合指定索引
db.user.dropIndex("索引名称")
// 例如数据记录中 createDate 为日期类型时：①设置时间180秒后自动清除；②设置在创建记录后，180 秒左右删除。
db.user.createIndex(
    {
        "createDate": 1
    },
    {
        expireAfterSeconds: 180
    }
)
// 使用索引是有代价的，对于添加的每一个索引，每次写操作（插入、更新、删除）都将耗费更多的时间
// 这是因为，当数据发生变动时，MongoDB不仅要更新文档，还要更新集合上所有的索引
// 所以，如果很少对集合进行读取操作，建议不使用索引


// MongoDB 中聚合(aggregate)主要用于处理数据(诸如统计平均值，求和等)，并返回计算后的数据结果
// aggregate() 方法
// 通过字段 by_user 字段对数据进行分组，并计算 by_user 字段相同值的总和
db.user.aggregate([
    {
        $group : {
            _id : "$name",
            num_tutorial : {
                $sum : 1
            }
        }
    }
])
// [
//  {
//    "_id": "ximingx",
//    "num_tutorial": 2
//  },
//  {
//    "_id": "zhangsan",
//    "num_tutorial": 1
//  },
//  {
//    "_id": "hsl",
//    "num_tutorial": 1
//  },
//  {
//    "_id": "admin",
//    "num_tutorial": 1
//  }
//]
// $sum 计算总和
db.user.aggregate([
    {
        $group: {
            _id: "$name",
            num_tutorial: {
                $sum : 1
            }
        }
    }
])
// $avg 计算平均值
db.user.aggregate([
    {
        $group: {
            _id : "$name",
            num_tutorial : {
                $avg : "$age"
            }
        }
    }
])
// $min 获取集合中所有文档对应值得最小值
db.user.aggregate([
    {
        $group: {
            _id : "$name",
            num_tutorial : {
                $min : "$age"
            }
        }
    }
])
// $max 获取集合中所有文档对应值得最大值
db.user.aggregate([
    {
        $group: {
            _id : "$name",
            num_tutorial : {
                $max : "$age"
            }
        }
    }
])


// 数据的导入导出
// Mongodb中的mongoexport工具可以把一个collection导出成JSON格式或CSV格式的文件。可以通过参数指定导出的数据项，也可以根据指定的条件导出数据
// mongoexport -d dbname -c collectionname -o file --type json/csv -f field
// -d 数据库名
// -c collection名
// -o 输出的文件名
// —type 输出的格式，默认为json
// -f 输出的字段，如果—type为csv，则需要加上 -f “字段名”
// mongoimport -d dbname -c collectionname --file filename --headerline --type json/csv -f field
// -d 数据库名
// -c collection名
// —type 导入的格式,默认json
// -f 导入的字段名
// —headerline 如果导入的格式是csv，则可以使用第一行的标题作为导入的字段
// —file 要导入的文件


// MongoDB数据备份
// 在Mongodb中使用mongodump命令来备份MongoDB数据。该命令可以导出所有数据到指定目录中
// mongodump -h dbhost -d dbname -o dbdirectory
// -h：MongDB所在服务器地址，例如：127.0.0.1，当然也可以指定端口号：127.0.0.1:27017
// -d：需要备份的数据库实例，例如：test
// -o：备份的数据存放位置，例如：/home/mongodump/，当然该目录需要提前建立，这个目录里面存放该数据库实例的备份数据。
// MongoDB数据恢复
// mongorestore -h dbhost -d dbname --dir dbdirectory
// -h：MongoDB所在服务器地址
// -d：需要恢复的数据库实例，例如：test，当然这个名称也可以和备份时候的不一样，比如test2
// —dir：备份数据所在位置，例如：/home/mongodump/itcast/
// —drop：恢复的时候，先删除当前数据，然后恢复备份的数据。就是说，恢复后，备份后添加修改的数据都会被删除，慎用！


// mongodb用户
// 要添加用户，可使用MongoDB提供的db.createUser()方法。 添加用户时，可以为用户分配角色以授予权限，还可以更新现有用户，例如更改密码并授予或撤销角色
// 注意：在数据库中创建的第一个用户应该是具有管理其他用户的权限的用户管理员
// 添加用户时，可以在特定数据库中创建用户。该数据库是用户的认证的数据库。
// 用户可以跨不同数据库拥有权限; 即用户的权限不限于认证数据库。 通过分配给其他数据库中的用户角色，在一个数据库中创建的用户可以拥有对其他数据库的操作权限。
// 用户名和认证数据库作为该用户的唯一标识符。 也就是说，如果两个用户具有相同的名称，但是在不同的数据库中创建，则它们是两个不同的用户。 如果您打算拥有具有多个数据库权限的单个用户，请在适用的数据库中创建具有角色的单个用户，而不是在不同数据库中多次创建用户。
// 要验证用户，也可以在连接到 mongod 或 mongos 实例时使用命令行身份验证选项(例如：-u，-p，–authenticationDatabase)先连接到 mongod 或 mongos 实例，然后针对身份验证数据库运行 authenticate 命令或db.auth()方法。
// MongoDB 默认安装完成以后，只允许本地连接，同时不需要使用任何账号密码就可以直接连接MongoDB，这样就容易被黑，让支付一些比特币，所以为了避免这些不必要的麻烦，所以我们需要给Mongo设置一个账号密码

// 创建管理员用户
use admin
// switched to db admin
db.createUser({user: "admin",pwd: "password",roles: ["root"]})
// Successfully added user: { "user" : "admin", "roles" : [ "root" ] }

// 认证登录
db.auth("admin", "password")

// roles 类型
// 数据库用户角色（Database User Roles）
// 　　　　read：授予User只读数据的权限
// 　　　　readWrite：授予User读写数据的权限
//
// 数据库管理角色（Database Administration Roles）：
// 　　　　dbAdmin：在当前dB中执行管理操作
// 　　　　dbOwner：在当前DB中执行任意操作
// 　　　　userAdmin：在当前DB中管理User
//
// 备份和还原角色（Backup and Restoration Roles）：
// 　　　　backup
// 　　　　restore
//
// 跨库角色（All-Database Roles）：
// 　　　　readAnyDatabase：授予在所有数据库上读取数据的权限
// 　　　　readWriteAnyDatabase：授予在所有数据库上读写数据的权限
// 　　　　userAdminAnyDatabase：授予在所有数据库上管理User的权限
// 　　　　dbAdminAnyDatabase：授予管理所有数据库的权限
//
// 集群管理角色（Cluster Administration Roles）：
// 　　　　clusterAdmin：授予管理集群的最高权限
// 　　　　clusterManager：授予管理和监控集群的权限，A user with this role can access the config and local databases, which are used in sharding and replication, respectively.
// 　　　　clusterMonitor：授予监控集群的权限，对监控工具具有readonly的权限
// 　　　　hostManager：管理Server

// 显示当前系统用户
db.system.users.find()

// 删除用户的时候需要切换到用户管理的数据库才可以删除；
db.dropUser("admin")
```



## 7. Node.js 连接 MongoDB

### 1. 安装驱动

```bash
$ cnpm install mongodb
```

### 2. 创建数据库

```js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/runoob";
 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("数据库已创建!");
  db.close();
});
```

### 3. 创建集合

```js
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/runoob';
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log('数据库已创建');
    var dbase = db.db("runoob");
    dbase.createCollection('site', function (err, res) {
        if (err) throw err;
        console.log("创建集合!");
        db.close();
    });
});
```

### 4.插入数据

```js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var myobj = { name: "菜鸟教程", url: "www.runoob" };
    dbo.collection("site").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
});
```



```js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var myobj =  [
        { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
        { name: 'Google', url: 'https://www.google.com', type: 'en'},
        { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
       ];
    dbo.collection("site").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("插入的文档数量为: " + res.insertedCount);
        db.close();
    });
});
```

### 5.查询数据

```js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    dbo.collection("site"). find({}).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
```



```js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var whereStr = {"name":'菜鸟教程'};  // 查询条件
    dbo.collection("site").find(whereStr).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
```



### 6.更新数据

```js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var whereStr = {"name":'菜鸟教程'};  // 查询条件
    var updateStr = {$set: { "url" : "https://www.runoob.com" }};
    dbo.collection("site").updateOne(whereStr, updateStr, function(err, res) {
        if (err) throw err;
        console.log("文档更新成功");
        db.close();
    });
});
```



```js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var whereStr = {"type":'en'};  // 查询条件
    var updateStr = {$set: { "url" : "https://www.runoob.com" }};
    dbo.collection("site").updateMany(whereStr, updateStr, function(err, res) {
        if (err) throw err;
         console.log(res.result.nModified + " 条文档被更新");
        db.close();
    });
});
```



### 7.删除数据

```js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var whereStr = {"name":'菜鸟教程'};  // 查询条件
    dbo.collection("site").deleteOne(whereStr, function(err, obj) {
        if (err) throw err;
        console.log("文档删除成功");
        db.close();
    });
});
```



```js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var whereStr = { type: "en" };  // 查询条件
    dbo.collection("site").deleteMany(whereStr, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " 条文档被删除");
        db.close();
    });
});
```

### 8. 排序 查询分页

```js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var mysort = { type: 1 };
    dbo.collection("site").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
```



```js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    dbo.collection("site").find().limit(2).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
  });
});
```



```js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    dbo.collection("site").find().skip(2).limit(2).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
  });
});
```

### 9. 删除集合

```js
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    // 删除 test 集合
    dbo.collection("test").drop(function(err, delOK) {  // 执行成功 delOK 返回 true，否则返回 false
        if (err) throw err;
        if (delOK) console.log("集合已删除");
        db.close();
    });
});
```

### 10.Promise 数据操作

```js
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost/";
MongoClient.connect(url).then((conn) => {
    console.log("数据库已连接");
    const test = conn.db("testdb").collection("test");
    // 增加
    test.insertOne({ "site": "runoob.com" }).then((res) => {
        // 查询
        return test.find().toArray().then((arr) => {
            console.log(arr);
        });
    }).then(() => {
        // 更改
        return test.updateMany({ "site": "runoob.com" },
            { $set: { "site": "example.com" } });
    }).then((res) => {
        // 查询
        return test.find().toArray().then((arr) => {
            console.log(arr);
        });
    }).then(() => {
        // 删除
        return test.deleteMany({ "site": "example.com" });
    }).then((res) => {
        // 查询
        return test.find().toArray().then((arr) => {
            console.log(arr);
        });
    }).catch((err) => {
        console.log("数据操作失败" + err.message);
    }).finally(() => {
        conn.close();
    });
}).catch((err) => {
    console.log("数据库连接失败");
});
```



```js
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost/";
 
async function dataOperate() {
    var conn = null;
    try {
        conn = await MongoClient.connect(url);
        console.log("数据库已连接");
        const test = conn.db("testdb").collection("test");
        // 增加
        await test.insertOne({ "site": "runoob.com" });
        // 查询
        var arr = await test.find().toArray();
        console.log(arr);
        // 更改
        await test.updateMany({ "site": "runoob.com" },
            { $set: { "site": "example.com" } });
        // 查询
        arr = await test.find().toArray();
        console.log(arr);
        // 删除
        await test.deleteMany({ "site": "example.com" });
        // 查询
        arr = await test.find().toArray();
        console.log(arr);
    } catch (err) {
        console.log("错误：" + err.message);
    } finally {
        if (conn != null) conn.close();
    }
}
 
dataOperate();
```





# 	MySQL

[MySQL这篇写的很烂,看他的,啊呜](https://blog.csdn.net/weixin_45851945/article/details/114287877)
[要不看这篇也行,也很不错](https://ximingx.blog.csdn.net/article/details/122157925)

## 2.1 mysql 操作

### 2.1.1 连接mysql

```sql
//连接数据库
mysql -u root -p

//修改用户密码
update mysql.user set authentication_string=password('n') where user='root' and Host = 'localhost';

//刷新权限
flush privileges

//退出连接
exit;
```

### 2.1.2 操作数据库

```sql
//创建数据库
create database [if not exists] 数据库名

//删除数据库
drop database [if not exists] 数据库名

//使用数据库
use 数据库名

//查看所有的数据库
show databases
```

### 2.1.3 操作表

```sql
//创建表
create table if not exists 表名(
	`id` int(4) not null auto_increment comment '学号',
    `name` varchar(30) not null default '匿名' comment '姓名',
    `pwd` varchar(20) not null default '123456' comment '密码',
    `sex` varchar(3) not null default '女' comment '性别',
    `birthday` datetime default null comment '出生日期',
    `address` varchar(100) default null comment '家庭住址',
    `email` varchar(50) default null comment '邮件',
    primary key (`id`)
)engine=innodb default charset=utf8
 //查看表中信息
 describe 表名;  //简写 desc 
 //显示表的结构
 DESC `表名`   
```

### 2.1.4 修改表的结构

```sql
//更改表名
ALTER TABLE `表名` RENAME `新表名`;
//添加字段名
ALTER TABLE `表名` ADD `字段名` `字段的列属性`;
//修改表的字段
ALTER TABLE `表名` MODIFY `字段名` `约束`   //修改约束
alter table user modify court_id char(16);
ALTER TABLE `表名` CHANGE `字段名` `新字段名` `类型` //重命名字段
alter table user change courtid court_id int;
//删除表的字段
ALTER TABLE `表名` DROP `字段名`;
//删除表
DROP TABLE IF EXISTS `表名`
```

### 2.1.5 索引的分类

* **主键索引(primary key)**

  唯一的表示,主键不可重复,只能有一个列作为主键

* **唯一索引(unique key)**

  避免重复列的出现,唯一索引可以重复,多个列都可以标识唯一索引

* **常规索引(key / index)**

  默认的,index,key关键字修饰

* **全文索引(fulltext)**

  特定的数据库引擎才有

  快速定位

```sql
//列名   索引名
alter table `数据库名`.`表名` add 索引分类 index `列名`(`索引名称`)

//全文索引
explain select * from `table` where match(studentName) against('aw');
```

### 2.1.6 外键

```sql
ALTER TABLE `表一` ADD CONSTRAINT `FK_引用列` FOREIGN KEY(`作为外键的 列`) REFERENCES `表二`(`那个字段`);
```

### 2.1.7 增删改查

```sql
INSERT INTO `表名`(`属性1`,`属性2`,`属性3`)VALUES(`值1`,`值2`,`值3`),(`值1`,`值2`,`值3`);

DELETE FROM `表名` WHERE 条件;

UPDATE `表名` SET `属性` = ' ' WHERE [条件]

SELECT DISTINCT <select_list>
FROM <left_table>
<join_type> JOIN <right_table>
ON <join_condition>
WHERE <where_condition>
GROUP BY <group_by_list>
HAVING <having_condition>
ORDER BY <order_by_condition>
LIMIT <limit_number>

// 发现重复数据,去重
select distinct `字段名` from `表名`
```

### 2.1.8 where 检索数据

>    逻辑运算符
>
>    and    or     not

搜索条件

```sql
select `字段名` from `表名` where 条件 
```

模糊查询

| 运算符      | 语法               | 描述                          |
| ----------- | ------------------ | ----------------------------- |
| is null     | a is null          | 如果操作符为null,结果为真     |
| is not null | a is not null      | 如果操作符不为null,结果为真   |
| between     | a between b and c  | 若a在 c 和 b之间.结果为真     |
| like        | a like b           | 如果a匹配到b,结果为真         |
| in          | a in (a1,a2,a3,a4) | 加入a在a1,a2,a3,a4中,结果为真 |

```sql
// like  %(代表0和任意字符)  _(代表一个字符)单条数据内查询

select `字段名` from `表名` 
where `字段名` like '查询的%'   

select `字段名` from `表名` 
where `字段名` like '查询的_'   

select `字段名` from `表名` 
where `字段名` like '%查%'    
```



```sql
// 多条范围内查询
select `字段名` from `表名` where `字段名` in('1','2') 
查询只在1,2范围内

select `字段名` from `表名` where `字段名` in('北京')    
查询只在北京的
```



```sql
select `字段名` from `表名` where `字段名` is null       
查询该数据为null的

select `字段名` from `表名` where `字段名` is null or `字段名` = '';  
查询该数据为null的或者空的
```

### 2.1.8 常用函数

>   abs    绝对值函数

```sql
select abs(-8)                     
//8
```

>ceiling  向上取整

```sql
select ceiling(6.6)                
//7 
```

>   floor   向下取整

```sql
select floor(6.6)                  
//6
```

>   rand 随机数

```sql
select  rand()                    
//返回一个随机数
```

>   sing  判断一个数的符号                                   
>
>   **-1,0,1**

```sql
select sing(0)
```

>   返回字符串长度

```sql
select char_length('啊呜')          
//2
```

>   concat   连接字符串

```sql
select concat('啊','呜')            
//啊呜
```

>   insert  替换字符串

```sql
select insert('啊呜',1,1,'嗯')       
//嗯呜 
```

>   lower   转化为小写
>
>   upper  转化为大写

```sql
select lower('AW')
```

>   current_date 获取当前日期

```sql
select current_date()
```

>   curdate  获取当前日期

```sql
select curdate()
```

>   now 获取当前时间

```sql
select now()
```

>   时间

```sql
select year(now())
select month(now())
select day(now())
select hour(now())
select minute(now())
select second(now())
```

>   系统

```sql
select system_user()    
//获取当前用户
select version()        
//版本
```



## 2.2 Node.js 操作

首先需要安装 

```bash
$ yarn add mysql
```

### 2.2.1 基础的使用

```js
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.end();
// 您在连接上调用的每个方法都会排队并按顺序执行。
// 关闭连接使用end(), 确保在向 mysql 服务器发送退出数据包之前执行所有剩余查询。
```



```js
// 关闭连接
connection.end(function(err) {
  // The connection is terminated now
});

connection.destroy();
// 这将导致底层套接字立即终止。另外destroy()保证不会为连接触发更多事件或回调。
```

### 2.2.2 直接连接数据库进行操作

```js
const express = require('express')
const app = express();
// 连接数据库
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'ximingx'
});
connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected');
});
// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Headers', 'mytoken');
  next();
});
// login
app.get('/login', function (req, res) {
  connection.query('SELECT name FROM `user`', function (error, results, fields) {
    let index = results.findIndex((item) => {
      return item.name === req.query.username;
    })
    if (index !== -1) {
      connection.query('SELECT password FROM `user` where `name` = ?',[req.query.username], function (error, results, fields) {
        if (results[0].password === req.query.password) {
          res.send("success")
        } else {
          res.send("error")
        }
      });
    } else {
      res.send("error")
    }
  });
});
// show
app.get('/show',function (req, res) {
  connection.query('SELECT * FROM `students`', function (error, results, fields) {
    res.send(results)
  });
})
// add
app.get('/add',function (req, res) {
  console.log(req.query)
  connection.query('INSERT INTO `students` (`id`,`name`,`sex`,`age`) VALUES(?,?,?,?)', [req.query.id,req.query.name,req.query.sex,req.query.age], function (error, results, fields) {
    if (error) {
      res.send(error)
    } else {
      res.send("success")
    }
  });
})
// cha
app.get('/cha',function (req, res) {
  console.log(req.query)
  connection.query('UPDATE `students` SET id=?,name=?,sex=?,age=? WHERE id=?', [req.query.id,req.query.name,req.query.sex,req.query.age,req.query.old], function (error, results, fields) {
    if (error) {
      res.send(error)
    } else {
      res.send("success")
    }
  });
})
// del
app.get('/del',function (req, res) {
  console.log(req.query)
  connection.query('DELETE FROM `students` where id = ?;', [req.query.id], function (error, results, fields) {
    if (error) {
      res.send(error)
    } else {
      res.send("success")
    }
  });
})
// que
app.get('/que',function (req, res) {
  console.log(req.query)
  connection.query('SELECT * FROM `students` where name = ?;', [req.query.name], function (error, results, fields) {
    if (error) {
      res.send(error)
    } else {
      console.log(results)
      res.send(results)
    }
  });
})

// 端口
app.listen(3000,function () {
  console.log("// -----------------------------------------------------------------------")
  console.log("port 3000 is listening")
});
```

### 2.2.3 池化链接

该模块不是一个接一个地创建和管理连接，而是使用`mysql.createPool(config)`

创建一个池并直接使用它：

```js
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'bob',
    password: 'secret',
    database: 'my_db'
});

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});
```







