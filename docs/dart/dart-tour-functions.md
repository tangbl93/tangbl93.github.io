---
sidebar_position: 5
---

# Dart tour: 5、函数

> 在 `Dart` 中，函数也是对象并且类型为 `Function`，可以被赋值给变量或者作为其它函数的参数。

## 定义函数

```dart
// 定义一个函数
bool isOdd(int data) {
  return data % 2 == 0;
}

// 在定义函数时，可以不指定返回类型(不推荐)。
isOdd(int data) {
  return data % 2 == 0;
}

// 如果函数体内只包含一个表达式，可以使用简写语法
// 语法 => 表达式 是 { return 表达式; } 的简写， => 有时也称之为 箭头 函数。
bool isOdd(int data) => data % 2 == 0;
```

## 参数

> 将参数传递给函数或定义函数参数时，可以使用尾部逗号。

函数可以有任意数量的`必需位置参数`，这些参数后面可以跟有`命名参数`或`可选的位置参数`(但不能两者都选)。

可以用 `=` 为函数的命名参数和位置参数定义默认值，默认值必须为编译时常量，没有指定默认值的情况下默认值为 `null`。

### 命名参数

命名参数默认为可选参数，除非他们被特别标记为 `required`。

定义函数时，使用 `{param1, param2, …}` 来指定命名参数；当调用函数时，可以使用 `参数名: 参数值` 的形式来指定命名参数。

```dart
/// Sets the [bold] and [hidden] flags ...
void enableFlags({bool bold, bool hidden = false}) {
  // ...
}

// bold will be true; hidden will be false.
enableFlags(bold: true, hidden: false);
```

尽管命名参数是可选参数，但是仍然可以使用 `required` 来标识这个命名参数是必须的参数，此时调用者必须为该参数提供一个值。

```dart
// 如果调用者想要通过这个构造函数构造一个 Scrollbar 对象而不提供 child 参数，则会导致编译错误
const Scrollbar({Key key, required Widget child})
```

### 可选的位置参数

使用 `[]` 将一系列参数包裹起来作为可选的位置参数。

```dart
String say(String from, String msg, [String device]) {
  var result = '$from says $msg';
  if (device != null) {
    result = '$result with a $device';
  }
  return result;
}

assert(say('Bob', 'Howdy') == 'Bob says Howdy');
assert(say('Bob', 'Howdy', "smoke signal") == 'Bob says Howdy with a smoke signal');
```

## `main()` 函数

每个 `Dart` 程序都必须有一个 `main()` 顶级函数作为程序的入口，`main()` 函数返回值为 `void` 并且有一个 `List<String>` 类型的可选参数。

```dart

// 简单的 main() 函数示例
void main() {
print('Hello, World!');
}

// 使用命令行访问带参数的 main() 函数示例
// 使用命令 dart args.dart 1 test 运行该应用
// Run the app like this: dart args.dart 1 test
void main(List<String> arguments) {
  print(arguments);

  assert(arguments.length == 2);
  assert(int.parse(arguments[0]) == 1);
  assert(arguments[1] == 'test');
}
```

## 函数是一级对象

可以将函数作为参数传递给另一个函数：

```dart
void printElement(int element) {
  print(element);
}

var list = [1, 2, 3];

// 将 printElement 函数作为参数传递。
list.forEach(printElement);
```

也可以将函数赋值给一个变量：

```dart
var loudify = (msg) => '!!! ${msg.toUpperCase()} !!!';
assert(loudify('hello') == '!!! HELLO !!!');
```

## 匿名函数

大多数方法都是有名字的，而没有名字的方法叫做 `匿名函数`、 `Lambda 表达式` 或 `Closure 闭包`。

匿名方法看起来与命名方法类似，在括号之间可以定义参数，参数之间用逗号分割。后面大括号中的内容则为函数体：

```dart
// 定义匿名函数语法
([[Type] param1[, …]]) {
  codeBlock;
};

// 定义了只有一个参数 item 且没有参数类型的匿名方法
var list = ['apples', 'bananas', 'oranges'];
list.forEach((item) {
  print('${list.indexOf(item)}: $item');
});

// 如果函数体内只有一行返回语句，可以使用箭头缩写法
list.forEach((item) => print('${list.indexOf(item)}: $item'));
```

## 词法作用域

`Dart` 是词法有作用域语言，变量的作用域在写代码的时候就确定了，大括号内定义的变量只能在大括号内访问，与 Java 类似。

这是一个嵌套函数中变量在多个作用域中的案例, 注意 `nestedFunction()` 函数可以访问包括顶层变量在内的所有的变量。

```dart
bool topLevel = true;

void main() {
  var insideMain = true;

  void myFunction() {
    var insideFunction = true;

    void nestedFunction() {
      var insideNestedFunction = true;

      assert(topLevel);
      assert(insideMain);
      assert(insideFunction);
      assert(insideNestedFunction);
    }
  }
}
```

## 词法闭包

闭包即函数对象，即函数对象的调用在它原始作用域之外，依然能够访问在它词法作用域内的变量。

函数可以封闭定义到作用域内的变量。接下来的示例中，函数 `makeAdder()` 捕获了变量 `addBy`。无论函数在什么时候返回，它都可以使用捕获的 `addBy` 变量。

```dart
/// 返回一个将 [addBy] 添加到该函数参数的函数。
/// Returns a function that adds [addBy] to the
/// function's argument.
Function makeAdder(int addBy) {
  return (int i) => addBy + i;
}

void main() {
  // 生成加 2 的函数。
  var add2 = makeAdder(2);

  // 生成加 4 的函数。
  var add4 = makeAdder(4);

  assert(add2(3) == 5);
  assert(add4(3) == 7);
}
```

## 返回值

所有的函数都有返回值。没有显示返回语句的函数最后一行默认为执行 `return null;`。

```dart
foo() {}

assert(foo() == null);
```
