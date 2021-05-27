---
sidebar_position: 7
---

# Dart tour: 7、控制流程语句

> 本篇代码可能无法直接运行，仅展示语法。

在 `Dart` 中，总共有以下几种语句来控制代码的执行流程：

1. `if` 和 `else`
2. `for` 循环
3. `while` 和 `do-while` 循环
4. `break` 和 `continue`
5. `switch` 和 `case`
6. `assert`

## `if` 和 `else`

```dart
if (isRaining()) {
  you.bringRainCoat();
} else if (isSnowing()) {
  you.wearJacket();
} else {
  car.putTopDown();
}
```

## `for` 循环

```dart
// for
var message = StringBuffer('Dart is fun');
for (var i = 0; i < 5; i++) {
  message.write('!');
}

// forEach
var callbacks = [];
for (var i = 0; i < 2; i++) {
  callbacks.add(() => print(i));
}
callbacks.forEach((c) => c());

// for-in
for (var candidate in candidates) {
  candidate.interview();
}
```

## `while` 和 `do-while` 循环

```dart
// while
while (!isDone()) {
  doSomething();
}

// do-while
do {
  printLine();
} while (!atEndOfPage());
```

## `break` 和 `continue`

```dart

// Use break to stop looping
while (true) {
  if (shutDownRequested()) break;
  processIncomingRequests();
}

// Use continue to skip to the next loop iteration:
for (int i = 0; i < candidates.length; i++) {
  var candidate = candidates[i];
  if (candidate.yearsExperience < 5) {
    continue;
  }
  candidate.interview();
}
```

## `switch` 和 `case`

`Switch` 语句在 `Dart` 中使用 == 来比较整数、字符串或编译时常量，比较的两个对象必须是同一个类型且不能是子类并且没有重写 == 操作符。 枚举类型非常适合在 `Switch` 语句中使用。

每一个非空的 `case` 子句都必须有一个 `break` 语句，也可以通过 `continue`、`throw` 或者 `return` 来结束非空 `case` 语句。不匹配任何 `case` 语句的情况下，会执行 `default` 子句中的代码：

```dart

// 常规使用模板
var command = 'OPEN';
switch (command) {
  case 'CLOSED':
    executeClosed();
    break;
  case 'PENDING':
    executePending();
    break;
  case 'APPROVED':
    executeApproved();
    break;
  case 'DENIED':
    executeDenied();
    break;
  case 'OPEN':
    executeOpen();
    break;
  default:
    executeUnknown();
}

// 省略 break 语句时，会报错提示。
var command = 'OPEN';
switch (command) {
  case 'OPEN':
    executeOpen();
    // ERROR: Missing break

  case 'CLOSED':
    executeClosed();
    break;
}

// 支持空的 case 语句，允许其以 fall-through 的形式执行
var command = 'CLOSED';
switch (command) {
  case 'CLOSED': // Empty case falls through.
  case 'NOW_CLOSED':
    // Runs for both CLOSED and NOW_CLOSED.
    executeNowClosed();
    break;
}

// 在非空 case 语句中想要实现 fall-through 的形式，可以使用 continue 语句配合 label 的方式实现
var command = 'CLOSED';
switch (command) {
  case 'CLOSED':
    executeClosed();
    continue nowClosed;
  // Continues executing at the nowClosed label.

  nowClosed:
  case 'NOW_CLOSED':
    // Runs for both CLOSED and NOW_CLOSED.
    executeNowClosed();
    break;
}
```

## 断言(Assert)

> 在生产环境代码中，断言会被忽略，与此同时传入的参数不被判断。

在开发过程中，可以在条件表达式为 `false` 时使用断言语句来打断代码的执行。

如果断言表达式的值为 `true`，则断言成功，继续执行。如果表达式的值为 `false`，则断言失败，抛出一个 `AssertionError` 异常。

```dart
// 确保变量值不为 null (Make sure the variable has a non-null value)
assert(text != null);

// 确保变量值小于 100。
assert(number < 100);

// 确保这是一个 https 地址。
assert(urlString.startsWith('https'));

// 第二个参数可以为其添加一个字符串消息
assert(urlString.startsWith('https'),
    'URL ($urlString) should start with "https".');
```
