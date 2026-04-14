# Python基础



## ex1 猜数字

### 基本类型

Python 三个基本数字类型：**int、floor、complex**



### **random.choice()**

从列表中随机取一个元素

https://docs.python.org/3/library/random.html

```python
import random
num = ['apple','orange','cumberry']
print(random.choice(num))
```



### str.isdigit()

判断用户输入的数字是否都是数字且不为空

https://docs.python.org/3/library/stdtypes.html#str.isdigit



### **海象运算符**

我想在while表达式直接赋值，使用海象表达式（:=），将头左倾斜90度，看看像不像海象：

```python
while  user_num :=  input("请输入数字") 
```



### f-string

f"字符串：{变量}"

```python
import random
username = input("请输入你的名字")
print(f"your name:{username}")
print(username)
```



### 猜数字

```python
'''
对于这个练习
0 编写一个不带参数的函数()
0 当运行时，该函数选择一个0到 100(含)之间的随机整数，
0 然后要求用户猜出所选的数字。
练习 1猜数字游戏
0每次用户输入猜测时，程序会指示以下之一:-太高-太低- 刚好
0如果用户猜对了，程序将退出。否则，会要求用户再次尝试
0程序只有在用户猜对后才会退出:我们将使用模块中的(http://mng.bz/BEn)函数来生成一个随机数。因此，你可以这样写

'''
import random
def getRandNum():
    rand_num = random.randint(0,100)
    while True:
        user_num =  input("请输入数字")
        if not user_num.isdigit():
            print("请输入数字！！")
            continue
        user_num = int(user_num)
        if user_num>rand_num:
            print("太高")
        elif user_num <rand_num:
            print("太低")
        else:
            print("刚好")
            break
getRandNum()
```



改写一下ex1的代码：

```python
import random
def getRandNum():
    rand_num = random.randint(0,100)
    while (user_num := int(input("请输入数字"))) != rand_num:
        if user_num>rand_num:
            print("太高")
        elif user_num <rand_num:
            print("太低")
    print("刚好")
getRandNum()
```



