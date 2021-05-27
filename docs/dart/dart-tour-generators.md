---
sidebar_position: 15
---

# Dart tour: 15、生成器

当需要延迟地生成一连串的值时，可以考虑使用生成器函数。`Dart` 内置支持两种形式的生成器函数。

1. 同步生成器函数：返回一个 `Iterable` 对象。
2. 异步生成器函数：返回一个 `Stream` 对象。

## 同步生成器函数

通过在函数上加 `sync*` 关键字并将返回值类型设置为 `Iterable` 来实现一个 同步 生成器函数，在函数中使用 `yield` 语句来传递值。

```dart
Iterable<int> naturalsTo(int n) sync* {
  int k = 0;
  while (k < n) yield k++;
}

// 使用同步生成器函数
var naturals = naturalsTo(5);
for (var n in naturals) {
  print(n);
}
```

## 异步生成器函数

实现异步生成器函数与同步类似，只不过关键字为 `async*` 并且返回值为 `Stream`。

```dart
Stream<int> asynchronousNaturalsTo(int n) async* {
  int k = 0;
  while (k < n) yield k++;
}

// 使用异步生成器函数
var stream = asyncNaturalsTo(5);
stream.listen((event) {
  print(event);
}, onError: (e) {
  print(e);
}, onDone: (){
  print("stream closed");
});
```

## 提升执行性能

如果生成器是递归调用的，可是使用 `yield*` 语句提升执行性能。

```dart
Iterable<int> naturalsDownFrom(int n) sync* {
  if (n > 0) {
    yield n;
    yield* naturalsDownFrom(n - 1);
  }
}
```
