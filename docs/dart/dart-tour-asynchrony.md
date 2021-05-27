---
sidebar_position: 14
---

# Dart tour: 14、异步编程

在 `Dart` 中，类型 `Future` 或 `Stream` 表示异步执行的，它们会在耗时操作（比如 I/O）执行完毕前直接返回而不会等待耗时操作执行完毕。

`async` 和 `await` 关键字用于实现异步编程，并且让代码看起来就像是同步的一样。

## 声明异步函数

> 注意，函数体不需要使用 `Future API`。如有必要，`Dart` 会创建 `Future` 对象。

异步函数 是函数体由 `async` 关键字标记的函数。

将关键字 `async` 添加到函数并让其返回一个 `Future` 对象。

```dart
// 有如下返回 String 对象的方法
String lookUpVersion() => '1.0.0';

// 将其改为异步函数，返回值是 Future
Future<String> lookUpVersion() async => '1.0.0';
```

> 如果函数没有返回有效值，需要设置其返回类型为 `Future<void>`。有时也可以省略泛型。

## 处理 Future

可以通过下面两种方式，获得 Future 执行完成的结果。

1. 使用 `async` 和 `await`。
2. 使用 Future API 的链式异步编程。

### 使用 `async` 和 `await`

使用 async 和 await 的代码是异步的，但是看起来有点像同步代码。

```dart
// 必须在带有 await 关键字的 异步函数 中使用 async
Future<void> checkVersion() async {
  // 使用 await 等待异步函数的执行结果
  var version = await lookUpVersion();
  // 使用 version 继续处理逻辑
  print(version);
}
```

> 备忘: 尽管异步函数可以处理耗时操作，但是它并不会等待这些耗时操作完成，异步函数执行时会在其遇到第一个 `await` 表达式（代码行）时返回一个 `Future` 对象，然后等待 await 表达式执行完毕后继续执行。

使用 `try`、`catch` 以及 `finally` 来处理使用 `await` 导致的异常。

```dart
try {
  version = await lookUpVersion();
} catch (e) {
  // 无法找到版本时做出的反应
}
```

可以在异步函数中多次使用 `await` 关键字。例如，下面代码中等待了三次函数结果。

```dart
var entrypoint = await findEntrypoint();
var exitCode = await runExecutable(entrypoint, args);
await flushThenExit(exitCode);
```

`await` 表达式的返回值通常是一个 Future 对象。如果不是的话也会自动将其包裹在一个 `Future` 对象里。`Future` 对象代表一个 `承诺`，`await` 表达式会阻塞直到需要的对象返回。

如果在使用 `await` 时导致编译错误，请确保 `await` 所在的函数必须使用 `async` 关键字标识。

```dart
Future<void> main() async {
  checkVersion();
  print('在 Main 函数中执行：版本是 ${await lookUpVersion()}');
}
```

### Future API - 链式异步编程

> 在直接使用 `Future API` 前，首先应该考虑 `await` 来替代。代码中使用 `await` 表达式会比直接使用 Future API 更容易理解。

使用链式异步编程的代码是异步的，当 `Future` 执行完成后，`then()` 中的代码会被执行。

```dart
// 必须在带有 Future 关键字的 异步函数 中使用 async
Future<void> checkVersion() async {
  // 使用 Future API 等待异步函数的执行结果
  lookUpVersion().then((version) {
    print(version);
  });
}

// 延迟执行返回版本号
Future<String> lookUpVersion() async {
  return Future.delayed(Duration(seconds: 1)).then((value) {
    return "1.0.0";
  });
}
```

使用 `catchError()` 来处理一些 `Future` 对象可能抛出的错误或者异常。

```dart
Future<void> checkVersion() async {
  lookUpVersion().then((version) {
    print(version);
  }).catchError((error) {
    print(error);
  });
}

Future<String> lookUpVersion() async {
  throw "lookUpVersion Error.";
}
```

由于 `then()` 方法返回的也是 `Future` 对象，因此可以链式异步编程。

```dart
Future result = costlyQuery(url);
result
    .then((value) => expensiveWork(value))
    .then((_) => lengthyComputation())
    .then((_) => print('Done!'))
    .catchError((exception) {

    });
```

## 等待多个 Future

有时代码逻辑需要调用多个异步函数，并等待它们全部完成后再继续执行。使用 `Future.wait()` 静态方法管理多个 `Future` 以及等待它们完成。

```dart
Future deleteLotsOfFiles() async =>  ...
Future copyLotsOfFiles() async =>  ...
Future checksumLotsOfOtherFiles() async =>  ...

await Future.wait([
  deleteLotsOfFiles(),
  copyLotsOfFiles(),
  checksumLotsOfOtherFiles(),
]);
print('Done with all the long steps!');
```

## 处理 Stream

> 在 `Dart API` 中 `Stream` 对象随处可见，`Stream` 用来表示数据流, 同样也可以将文件作为数据流来读取。

如果想从 `Stream` 中获取值，可以有两种选择。

1. 使用 `async` 关键字和一个异步循环（使用 `await for` 关键字标识）。
2. 使用 `Stream API`。

### await for

> 在使用 `await for` 关键字前，确保其可以令代码逻辑更加清晰并且是真的需要等待所有的结果执行完毕。例如，通常不应该在 `UI` 事件监听器上使用 `await for` 关键字，因为 UI 框架发出的事件流是无穷尽的。

使用 `await for` 定义异步循环看起来是这样的：

```dart
await for (varOrType identifier in expression) {
  // 每当 Stream 发出一个值时会执行
}
```

表达式的类型必须是 `Stream`。执行流程如下。

1. 等待直到 `Stream` 返回一个数据。
2. 使用 `1` 中 `Stream` 返回的数据执行循环体。
3. 重复 `1`、`2` 过程直到 `Stream` 数据返回完毕。

使用 `break` 和 `return` 语句可以停止接收 `Stream` 数据，这样就跳出了循环并取消注册监听 `Stream`。

> 如果在实现异步循环时遇到编译时错误，请检查确保 `await for` 处于异步函数中, 函数体必须标记为 async。

### Stream API

如果使用的是 `Stream API`，那么。

1. 使用 `listen()` 方法监听 `Stream`，来获取每个到达的数据流值。
2. 通过注册 `onError` 监听来处理错误。
3. 注册的 `onDone`，会在 `Stream` 被关闭后执行。

在使用流数据前需要改变数据的格式。使用 `transform()` 方法生成具有不同类型数据的流。

下面的例子中使用了两个 `transformer`。

1. 第一个使用 `utf8.decoder` 将整型流转换为字符串流。
2. 接着，使用了 `LineSplitter` 将字符串流转换为多行字符串流。

> 这些 `transformer` 来自 `dart:convert` 库。

```dart
// 演示读取文件流
import 'dart:async';
import 'dart:io';
import 'dart:convert';
void main() async {
  var config = await File('config.txt');
  Stream<List<int>> inputStream = config.openRead();

  inputStream
      .transform(utf8.decoder)
      .transform(LineSplitter())
      .listen((String line) {
    // print characters from stream');
    print(line);
  }, onDone: () {
    print('file is now closed');
  }, onError: (e) {
    print(e);
  });
}
```
