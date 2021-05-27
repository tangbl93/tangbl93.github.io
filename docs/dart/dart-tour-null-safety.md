---
sidebar_position: 19
---

# Dart tour: 19、Sound null safety

> 健全的 [空安全](https://dart.dev/null-safety) 特性已在 `Dart 2.12` 和 `Flutter 2` 中可用。

## 空安全

当空安全机制启用时，代码中的类型将默认是非空的。这意味着除非声明为可空，否则它们的值都不能为空。

```dart
// 有了空安全，下面代码中所有的变量都是非空的
var i = 42;
String name = getFileName();
final b = Foo();
```

若您想让变量可以为空，只需要在类型声明后加上 `?`。

```dart
int? aNullableInt = null;
```

空安全支持基于以下三条核心原则:

> 非空是目前的 API 中最常见的选择，所以选择了非空作为默认值。

1. `默认不可空`。除非将变量显式声明为可空，否则它一定是非空的类型。
2. `渐进迁移`。可以自由地选择何时进行迁移，多少代码会进行迁移。您可以使用混合模式的空安全，在一个项目中同时使用空安全和非空安全的代码。
3. `完全可靠`。空安全是非常可靠的，这意味着编译期间包含了很多优化。如果类型系统推断出某个变量不为空，那么它永远不为空。

> 如果旧应用需要迁移至空安全的话，可以参考[这篇文档](https://dart.dev/null-safety/migration-guide)。

## 检查是否支持空安全

### Dart

在命令行中运行命令，查看打印的版本号是否大于等于 `2.12`。

```shell
dart --version
```

### Flutter

在应用的 `pubspec.yaml` 将 SDK 版本约束设定为一个支持空安全的 SDK 版本。

```yaml
environment:
  sdk: ">=2.12.0 <3.0.0"
```

## 非空和可空类型

在空安全机制不存在的时候，Null 类型被看作是所有类型的子类。当变量为 `null` 时，调用方法可能会导致 `NoSuchMethodError`。此时的 `Null` 类型是所有类型的子类。

![dart-null-hierarchy-before](/images/dart-null-hierarchy-before.png)

空安全通过修改了类型的层级结构，从根源上解决了这个问题。 `Null` 类型仍然存在，但它不再是所有类型的子类。现在的类型层级看起来是这样的。

![dart-null-hierarchy-after](/images/dart-null-hierarchy-after.png)

如果表达式可能返回空值，在调用的需要需要使用 `?.` 来访问对象的成员。只有访问同时在原有类型及 `Null` 类下同时定义的方法和属性时，可以直接使用`.` 来访问。如: `toString()`、`==` 和 `hashCode`。

```dart
bad(String? maybeString) {
  print(maybeString?.length);     // null

  print(maybeString.hashCode);
  print(maybeString.toString());  // null
}

main() {
  bad(null);
}
```

## 禁用空安全

想要测试或运行混合版本的代码，需要禁用空安全。有两种方式可以进行操作。

1. 在 `dart` 和 `flutter` 命令里，加入 `--no-sound-null-safety` 标记禁用。

```shell
$ dart --no-sound-null-safety run
$ flutter run --no-sound-null-safety
```

2. 或者，设定程序入口的语言版本 —— 包含 `main()` 函数的文件 —— 设定为 `2.9`

```dart
// @dart=2.9

main() {
  //...
}
```
