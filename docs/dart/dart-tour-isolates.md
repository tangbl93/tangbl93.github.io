---
sidebar_position: 16
---

# Dart tour: 16、隔离区(Isolates)

## Isolates

大多数计算机中，甚至在移动平台上，都在使用多核 CPU。为了有效利用多核性能，开发者一般使用共享内存的方式让线程并发地运行。然而，多线程共享数据通常会导致很多潜在的问题，并导致代码运行出错。

为了解决多线程带来的并发问题，`Dart` 使用 `isolate` 替代线程，所有的 `Dart` 代码均运行在一个 `isolate` 中。每一个 `isolate` 有独立的事件循环和内存以确保其状态不被其它 `isolate` 访问。

## 创建隔离区

可以使用 `Isolate.spawn()` 或 `Flutter`的 `compute()` 函数创建单独的隔离区来进行消耗性能的计算。
新创建的隔离区拥有自己的事件循环和内存，即使原始隔离区是该新隔离区的父级，也不允许其访问。

`Isolate.spawn` 必须传入一个有且仅有一个参数的函数，不可以不传。

```dart
import 'dart:isolate';

void main() async {
  Isolate.spawn(isolate, "true");
  Isolate.spawn(isolate, "false");
}

void isolate(String data) {
  print("isolate ${data}");
}
```

## 主隔离区

默认的隔离区是主隔离区。

```dart
print(Isolate.current.debugName); // main
```

## 隔离区通信

在创建隔离区的时候，传入 `ReceivePort` 可以在外部接收隔离区回传的消息。

```dart
import 'dart:io';
import 'dart:async';
import 'dart:isolate';

// 隔离区
late Isolate? isolate;

// 定义隔离区运行的函数
void processLink(SendPort sendPort) {
  int counter = 0;
  Timer.periodic(new Duration(seconds: 1), (Timer t) {
    counter++;
    String msg = 'notification ' + counter.toString();

    // 向 ReceivePort 发送消息
    sendPort.send(msg);
  });
}

// 创建隔离区并监听回传的值
Future<void> start() async {
  ReceivePort receivePort= ReceivePort();
  isolate = await Isolate.spawn(processLink, receivePort.sendPort);
  receivePort.listen((data) {
    stdout.writeln('Receiving: ' + data);
  });
}

void main() async {
  stdout.writeln('Starting Isolate...');
  await start();
}
```

## 销毁隔离区

> 这段代码在 `VSCode` 中有问题: `Global evaluation requires a thread to have been loaded`。
> 可以通过命令行运行，这样就不会遇到这个问题。`dart xxx.dart`。

通过 `Isolate` 对象的 `kill` 方法中断运行中的隔离区。

```dart
// 销毁隔离区
void stop() {
  if (isolate != null) {
    stdout.writeln('Stopping Isolate...');
    isolate?.kill(priority: Isolate.immediate);
    isolate = null;
  }
}

void main() async {
  stdout.writeln('Starting Isolate...');
  await start();

  // 在此时接收任意输入，就会中断运行(执行stop方法)
  stdout.writeln('Press enter key to quit');
  await stdin.first;
  stop();
  stdout.writeln('Bye!');
  exit(0);
}
```

## 参考链接

- [dart:isolate library](https://api.dart.dev/stable/2.13.0/dart-isolate/dart-isolate-library.html)
- [Dart Isolates](https://www.w3adda.com/dart-tutorial/dart-isolates)
- [在后台处理 JSON 数据解析](https://flutter.cn/docs/cookbook/networking/background-parsing)
- [Dart asynchronous programming: Isolates and event loops](https://medium.com/dartlang/dart-asynchronous-programming-isolates-and-event-loops-bffc3e296a6a)
- [Isolates and Event Loops - Flutter in Focus](https://www.youtube.com/watch?v=vl_AaCgudcY)
- [Flutter 92: 图解 Dart 单线程实现异步处理之 Isolate (一)](https://developer.aliyun.com/article/766174)
