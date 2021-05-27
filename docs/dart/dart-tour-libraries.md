---
sidebar_position: 13
---

# Dart tour: 13、使用库

> 本篇代码无法直接运行，仅展示语法。

## 库和可见性

在 `Dart` 中与创建于依赖库的主要依赖于 `import` 和 `library` 这两个关键字。

每个 `Dart` 程序都是一个库，即便没有使用关键字 `library` 指定。以下划线（`_`）开头的成员仅在代码库中可见。
如果需要发布和部署库，可以参考 [这篇文档](https://dart.dev/guides/packages)。

> 为何 `Dart` 使用下划线而不使用 `public` 或 `private` 作为可访问性关键字的原因，可以查看 [SDK issue 33383](https://github.com/dart-lang/sdk/issues/33383)

> 根据回复来看，原因是当使用 `dynamic` 等动态类型时，检测其成员的可访问性会增加大量的开销。而通过这种下划线语法，可以很好的做到检测成员是否是私有的。

## 使用库

使用 `import` 来指定代码库的 URI, 以便可以访问其它库。

对于内置的库，使用 `dart:xxxxxx` 的形式。
而对于其它的库，可以使用一个文件系统路径或者以 `package:xxxxxx` 的形式。

```dart
// 比如导入代码库 dart:html 来使用 Dart Web 中相关 API
import 'dart:html';

// 导入 test 库, 通过 `package:xxxxxx` 的形式
import 'package:test/test.dart';
```

## 指定库前缀

如果导入的两个代码库有冲突的标识符，可以为其中一个指定前缀。

```dart
// 比如如果 library1 和 library2 都有 Element 类，那么可以这么处理：
import 'package:lib1/lib1.dart';
import 'package:lib2/lib2.dart' as lib2;

// 使用 lib1 的 Element 类。
Element element1 = Element();

// 使用 lib2 的 Element 类。
lib2.Element element2 = lib2.Element();
```

## 导入库的一部分

如果只想使用代码库中的一部分，可以有选择地导入代码库。

```dart
// 只导入 lib1 中的 foo
import 'package:lib1/lib1.dart' show foo;

// 导入 lib2 中除了 foo 外的所有
import 'package:lib2/lib2.dart' hide foo;
```

## 延迟加载库

> 目前只有 `dart2js` 支持延迟加载, `Flutter`、`Dart VM` 以及 `DartDevc` 目前都不支持延迟加载。可以查阅 [issue #33118](https://github.com/dart-lang/sdk/issues/33118) 和 [issue #27776](https://github.com/dart-lang/sdk/issues/27776) 获取更多的相关信息。

延迟加载（也常称为懒加载）允许应用在需要时再去加载代码库，下面是可能使用到延迟加载的场景：

1. 为了减少应用的初始化时间。
2. 处理 A/B 测试，比如测试各种算法的不同实现。
3. 加载很少会使用到的功能，比如可选的屏幕和对话框。

使用 `deferred as` 关键字来标识需要延时加载的代码库。当实际需要使用到库中 API 时先调用 `loadLibrary` 函数加载库。`loadLibrary` 函数可以调用多次也没关系，代码库只会被加载一次。

```dart
import 'package:greetings/hello.dart' deferred as hello;

Future greet() async {
  await hello.loadLibrary();
  // await 等待库加载完成继续执行
  hello.printGreeting();
}
```

在使用延迟加载的时候需要牢记以下几点：

1. 延迟加载的代码库中的常量需要在代码库被加载的时候才会导入，未加载时是不会导入的。
2. 不能在导入文件中使用延迟库中的类型, 需如要请考虑将接口类型迁移到正常导入的文件中。
3. Dart 会隐式地将 `loadLibrary()` 导入到使用了 `deferred as` 命名空间 的类中。
