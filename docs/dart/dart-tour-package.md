---
sidebar_position: 20
---

# Dart tour: 20、Package

> 查询 Package 的网站 [pub.dev](https://pub.dev/) 以及 [国内镜像](https://pub.flutter-io.cn/)

`Dart` 生态系统使用包(`Package`)来管理共享软件，比如：库和工具。使用 `Pub` (包管理工具)来获取包。

`Pub` 支持从本地文件系统或其他的位置，比如 `Git` 仓库，来加载可用的包，并对其进行版本依赖管理，从而帮助我们获得版本兼容的软件包以及 SDK。

包目录中至少包含一个 `pubspec`(`pubspec.yaml`) 文件。 `pubspec` 文件记录一些关于包的元数据。此外，包还包含其他依赖项（在 `pubspec` 中列出）， `Dart` 库，应用，资源，测试，图片，以及示例。

## 使用 Package

通过以下步骤，引用使用包:

1. 创建一个 `pubspec`(`pubspec.yaml`)。

```yaml
name: test

environment:
  sdk: ">=2.10.0 <3.0.0"

dependencies:
  english_words: ^4.0.0 # 依赖 english_words
```

2. 使用 `Pub` 获取当前所依赖的包。

```shell
# 在终端运行命令行
# 运行后会生成 pubspec.lock 文件，锁定依赖版本
dart pub get
```

3. 如果当前代码依赖包中的某个库，导入(import)该库。

```dart
import 'package:english_words/english_words.dart';

main() {
  generateWordPairs().forEach(print);
}
```

4. 如果需要升级包的版本，需要升级依赖。

> 升级依赖命令并非总是可以将所有的包更新到最新版本，原因是 `pubspec` 文件中的一些包之间有版本限制的冲突。想要确定 已经过时且需要编辑的包，请使用 `dart pub outdated` 命令。

```shell
# 准备更新依赖到最新版本
$ dart pub upgrade

```

## 创建 Package

本篇将通过最常见的 `Library Package` 来介绍如何创建一个 `Package`。

```yaml
# Library Package 的文件结构
mylib
  - lib/
    - mylib.dart        # 头文件, 该文件导出所有的公开的 API
    - mylib_mini.dart   # Mini Library 的头文件，一般小项目用不到
    - src/              # 源文件，通常使用者不应该导入src目录下的文件
      - mylib_imp1.dart # 具体实现
      - mylib_imp2.dart
      - ...
  - test/               # 测试用例
  - pubspec.yaml        # 声明文件
```

> 在文件的头部使用 `part` 命令，能够将一个 `Library` 分割成多个 `Dart` 文件。这里，我们建议应该创建 `Mini Library` ，而避免使用 `part` 命令。

### Logger

> 演示库 [yxlogger](https://pub.dev/packages/yxlogger)

```yaml
├── CHANGELOG.md                # CHANGELOG
├── LICENSE                     # LICENSE
├── README.md                   # README
├── lib
│   ├── yxlogger.dart           # 头文件
│   └── src
│       ├── error_logger.dart   # ErrorLogger 实现
│       ├── logger.dart         # Logger 抽象类/接口
│       └── stdin_logger.dart   # StdinLogger 实现
├── pubspec.lock                # Pub 自动生成文件
├── pubspec.yaml                # Pub 描述文件
└── test
    ├── error_logger_test.dart  # ErrorLogger 单元测试
    └── stdin_logger_test.dart  # StdinLogger 单元测试
```

创建 `yxlogger` 的实践流程:

1. 按照目录新建好文件。
2. 编辑 `pubspec.yaml`, 然后运行 `dart pub get` 获取依赖。

```yaml
name: yxlogger # 名称
description: yxloggers # 描述
version: 1.0.0 # 版本号
homepage: https://github.com/tangbl93/yxlogger

environment: # Dart 版本依赖
  sdk: ">=2.12.0 <3.0.0"

dev_dependencies: # 单元的测试依赖
  test: ^1.16.8
```

3. 编写 `Logger` 抽象类/接口以及对应的实现。

```dart
// Logger
abstract class Logger {
  String log(String msg);
}

// StdinLogger / ErrorLogger
import 'package:yxlogger/src/logger.dart';

class StdinLogger implements Logger {
  @override
  String log(String msg) {
    return "StdinLogger: $msg"; // ErrorLogger: return "ErrorLogger: $msg";

  }
}
```

4. 编写头文件。

```dart
library yxlogger;

export 'src/stdin_logger.dart';
export 'src/error_logger.dart';
```

5. 编写单元测试

```dart
// 依赖test进行单元测试
import 'package:yxlogger/yxlogger.dart';
import 'package:test/test.dart';

void main() {
  var logger = StdinLogger();
  group('StdinLogger', () {
    test('hi', () {
      expect(logger.log("hi"), "StdinLogger: hi");
    });
    test('hey', () {
      expect(logger.log("hey"), "StdinLogger: hey");
    });
  });
}

```

## 发布 Package

> `Publish` 命令是 `Pub` 中的一个命令。该命令用于将 `Package` 发布到 `pub.dev` 上以供其他人下载和依赖。

在发布前，可以通过检查流程查看当前还有哪些地方没准备好。

```shell
# 该选项可以让你运行上传 Package 的整个流程但不会真正地上传任何文件到 pub.dev 网站。
# 此操作可以让你在真正上传到 pub.dev 网站前检查你的上传等相关配置是否有误。
$ dart pub publish --dry-run  # --dry-run 选项或 -n 选项
```

如果检查流程没问题，或者出现的是警告，可以通过这个命令上传。

> 在上传的时候，可能需要登录你的谷歌账号。请注意控制台输出的信息。

> 在上传时，无法正常上传遇到错误，可以尝试加上 `sudo` 运行。 [SDK issues#16658](https://github.com/flutter/flutter/issues/16658)

```shell
$ dart pub publish --verbose
```

如果 `Package` 存在错误，`Pub` 则会退出且不继续进行上传。此时如果想继续上传，可以这样做。

```shell
# 该选项让 Pub 在上传时不再向你进行确认。正常情况下，它会在你上传时向你显示 Package 的内容以及向你进行确认。
$ dart pub publish --force # --force 选项或 -f 选项
```

## 参考链接

- [Packages](https://dart.dev/guides/packages)
