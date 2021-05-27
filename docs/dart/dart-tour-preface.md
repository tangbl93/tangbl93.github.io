---
sidebar_position: 1
---

# Dart tour: 1、概览

> 本系列文章基于 [A tour of the Dart language](https://dart.dev/guides/language/language-tour)，以覆盖 `Dart` 语法为主。如果有参考其他资料，会在文章末尾列出。而文中代码片段可以在 [DartPad](https://dartpad.dev/) 中运行调试, 需要注意部分代码省略了 `main` 函数。

> 将文章中的链接 `dart.dev` 替换为 `dart.cn` 可以访问中文站点。反之亦然。

## 语法概览

> `main.dart` 是程序入口文件，`main` 函数是程序入口函数

```dart
// main.dart

// 定义一个函数
void printInteger(int aNumber) {
  print('The number is $aNumber.'); // 打印输出语句
}

// 程序入口
void main() {
  var number = 42;      // 定义变量
  printInteger(number); // 调用函数
}
```

## 语法特性

> 在 `sound null safety` 特性打开时，`null` 不再是对象(在 `Dart 2.12` 中引入)。

- 语句必须使用分号 `;` 结束。
- 在 `Dart` 中，万物皆对象，对象继承 `Object` 类。
- `Dart` 是强类型语言，支持类型推断，但类型标记是可选的。
- `Dart` 没有 `private` 等关键字。但是标识符以下划线 `_` 开头时表示私有。

## 语法查询

> 由于这部分内容与其他语言差不多，直接查询就完事。

- [关键字](https://dart.dev/guides/language/language-tour#keywords)
- [操作符](https://dart.dev/guides/language/language-tour#operators)
