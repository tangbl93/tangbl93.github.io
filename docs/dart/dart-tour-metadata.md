---
sidebar_position: 18
---

# Dart tour: 18、Metadata

使用元数据可以为代码增加一些额外的信息。元数据注解以 `@` 开头，其后紧跟一个编译时常量（比如 `deprecated`）或者调用一个常量构造函数。

`Dart` 中有两个注解是所有代码都可以使用的：`@deprecated` 和 `@override`。

```dart
// 使用 @deprecated 的示例
class Television {
  /// _弃用: 使用 [turnOn] 替代_
  @deprecated
  void activate() {
    turnOn();
  }

  /// 打开 TV 的电源。
  void turnOn() {...}
}
```

可以自定义元数据注解。

```dart
// 定义了带有两个参数的 @Todo 注解
library todo;

class Todo {
  final String who;
  final String what;

  const Todo(this.who, this.what);
}

// 使用 @Todo 注解的示例
import 'todo.dart';

@Todo('seth', 'make this do something')
void doSomething() {
  print('do something');
}
```

元数据可以在 `library`、`class`、`typedef`、`type parameter`、 `constructor`、`factory`、`function`、`field`、`parameter` 或者 `variable` 声明之前使用，也可以在 `import` 或 `export` 之前使用。可使用反射在运行时获取元数据信息。
