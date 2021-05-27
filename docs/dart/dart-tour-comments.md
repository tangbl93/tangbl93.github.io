---
sidebar_position: 2
---

# Dart tour: 2、注释

`Dart` 支持单行注释、多行注释以及文档注释。

## 单行注释

```dart
// Single-line comments
```

## 多行注释

> `Dart` 的多行注释支持嵌套

```dart
/**
 * Multi-line comments
 *
 * /**
 *  Multi-line comments can nest
 *  */
 */
```

## 文档注释

> 文档注释是以 `///` 或 `/**` 开头的多行或单行注释，可以在注释中使用方括号来引用类，方法，字段，顶级变量，函数和参数(这样在语法提示中会高亮显示)。

```dart
/// A domesticated South American camelid (Lama glama).
///
/// Andean cultures have used llamas as meat and pack
/// animals since pre-Hispanic times.
///
/// Just like any other animal, llamas need to eat,
/// so don't forget to [feed] them some [Food].
class Llama {
  String? name;

  /// Feeds your llama [food].
  ///
  /// The typical llama eats one bale of hay per week.
  void feed(Food food) {
  }

  /// Exercises your llama with an [activity] for
  /// [timeLimit] minutes.
  void exercise(Activity activity, int timeLimit) {
    // ...
  }
}
```

通过 `Dart` 的[文档生成工具](https://dart.dev/tools/dartdoc)生成文档， 在生成的文档中，`[feed]` 会成为一个链接，指向 `feed` 方法的文档， `[Food]` 会成为一个链接，指向 `Food` 类的 API 文档。
