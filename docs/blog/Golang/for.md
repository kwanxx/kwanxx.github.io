# for循环

## 标准格式

for循环的整体格式：

for  起始变量；判断条件；步长 {

}

计算1至100的总和：

```go
package main

import "fmt"

func main() {
	total := 0
    
	for i:=1;i<=100;i++ {
		total +=i
	}
    
	fmt.Println("total:",total)
}

```



## while循环

go语言没有while标志符，都是使用for标志符：

for  条件

```go
package main

import "fmt"

func main() {
	total := 0
	i := 0
	for i < 101 {
		total += i
		i++
	}
	fmt.Println(total)
}
```

