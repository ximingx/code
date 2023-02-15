# 1. Mac

## 1. HomeBrew

### 1. 安装

使用 [科大源](https://mirrors.ustc.edu.cn/help/) 进行安装

```bash
$ /bin/bash -c "$(curl -fsSL https://gitee.com/ineo6/homebrew-install/raw/master/install.sh)"
```

卸载方式

```bash
$ /bin/bash -c "$(curl -fsSL https://gitee.com/ineo6/homebrew-install/raw/master/uninstall.sh)"
```

### 2. 常用命令：

```shell
# 安装软件
$ brew install node
# 卸载软件
$ brew uninstall node
# 搜索软件
$ brew search node
# 更新软件
$ brew upgrade node
# 查看任意包信息
$ brew info node
# 列出已安装软件node的文件目录
$ brew list node
# 查看安装列表
$ brew list           
# 更新Homebrew
$ brew update   
```

### 3. 安装位置

`mac`上面有些隐藏文件夹是看不见的，例如`/usr/local/`,如果想查看该文件夹下的文件，可以使用命令`cd /usr/local/` , 然后输入命令`ls`你就可以看到该文件夹下的目录，其中`Cellar`下存放的都是通过`HomeBrew`安装的软件。

`/usr/local/Cellar/git/2.37.2/bin`







## 2. 终端命令

### 1、目录操作

```bash
# mkdir	创建一个目录  
$ mkdir dirname
# rmdir	删除一个目录	
$ rmdir dirname
# mvdir	移动或重命名一个目录	
$ mvdir dir1 dir2 
# cd		改变当前目录	
$ cd dirname
# pwd		显示当前目录的路径名	
$ pwd
# ls		显示当前目录的内容		
$ ls -la
# dircmp	比较两个目录的内容		
$ dircmp dir1 dir2 
```

### 2、文件操作

```bash
# cat 	显示或连接文件
$ cat filename
# pg		分页格式化显示文件内容	
$ pg filename
# more	分屏显示文件内容	
$ more filename 
# od		显示非文本文件的内容	
$ od -c filename
# cp		复制文件或目录	
$ cp file1 file2 
# rm 		删除文件或目录
$ rm filename
# mv		改变文件名或所在目录
$ mv file1 file2
# ln		联结文件			
$ ln -s file1 file2 
# find	使用匹配表达式查找文件
$ find . - name "*.c" -print
# file	显示文件类型		
$ file filename
# open	使用默认的程序打开文件	
$ open filename (open . 打开当前目录)
```

### 3、进程操作

```bash
# ps 		显示进程当前状态	
$ ps u
# kill 	终止进程		
$ kill -9 30142
```





## 3. 快捷键

command q 退出应用

command h 隐藏应用



control < 

control >





# 2. win10

## 1. 磁盘分区

### 1. 在进行磁盘分区的时候， 删除状态良好（恢复分区）的磁盘


```bash
$ C:\Windows\system32>diskpart

Microsoft DiskPart 版本 10.0.22000.653

Copyright (C) Microsoft Corporation.
在计算机上: XIMINGX-WIN
```


```bash
$ DISKPART> list disk

  磁盘 ###  状态           大小     可用     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  磁盘 0    联机              953 GB   787 GB        *
```


```bash
$ DISKPART> select disk 0

磁盘 0 现在是所选磁盘。
```


```bash
$ DISKPART> list partition

  分区 ###       类型              大小     偏移量
  -------------  ----------------  -------  -------
  分区      1    系统                 260 MB  1024 KB
  分区      2    已保留                 16 MB   261 MB
  分区      3    主要                 163 GB   277 MB
  分区      4    恢复                1072 MB   163 GB
  分区      5    恢复                 914 MB   164 GB
  分区      7    恢复                 569 MB   201 GB
```


```bash
$ DISKPART> select partition 4

分区 4 现在是所选分区。
```


```bash
$ DISKPART> delete partition override

$ DiskPart 成功地删除了所选分区。
```

