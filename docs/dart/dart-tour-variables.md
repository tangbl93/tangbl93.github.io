---
sidebar_position: 3
---

# Dart tour: 3、变量

## 声明变量

> 在 `Dart` 中，字符串即可以使用双引号 `""`, 也可以使用单引号 `''` 包裹。

在 `Dart` 中由于有类型推断特性，因此也可以直接用 `var` 关键字声明变量; 通过 var 关键字声明变量，与通过标记类型来声明是等价的。

```dart
var name = 'Bob';
String name = 'Bob';
```

通过 `var` 关键字声明变量时，如果未赋初始值。则会声明为 `dynamic` 类型，表示任意类型。初始值为 null，通过 `${var.runtimeType}` 可以检查运行时的数据类型。

```dart
var value;  // null

value = 233;
print(value.runtimeType); // int

value = "hello world";
print(value.runtimeType); // String
```

## 默认值

> 在 `sound null safety` 特性未打开时(在 `Dart 2.12` 中引入)， 对象默认为可空类型(`nullable`)。已开启 `sound null safety` 特性的情况在单独开篇分析。

未赋初始值的变量，默认值都为 `null`；由于现在 `sound null safety` 特性默认被打开，需要在文件前加上 `// @dart=2.9`。

```dart
// @dart=2.9
// https://dart.dev/null-safety/unsound-null-safety#testing-or-running-mixed-version-programs
void main() {

  int x;
  print(x); // null

  String y;
  print(y); // null
}
```

## Late 变量

在 `Dart 2.12` 中引入了 `late` 修饰符, 有以下两种功能:

1. 声明一个延迟初始化的非空变量.
2. 延迟初始化变量(惰性初始化).

由于 `Dart` 流程分析的缺陷，当全局变量未初始化时(初始过的无问题)，无法判断在使用前是否已赋值。尝试运行会报错，这时候可以加 `late` 修饰符 解决这个问题。

```dart
late String description;

// 如果未使用 late 修饰符运行会报错。
// Error: Field 'description' should be initialized because its type 'String' doesn't allow null.

// 如果使用 late 修饰符， 但在使用前未赋值运行也会报错。
// LateInitializationError: Field 'description' has not been initialized.

void main() {
  description = 'Feijoada!';
  print(description);
}
```

当将变量标记为 `late` 但在声明时对其进行初始化时，则初始化代码将在首次使用该变量时运行。惰性初始化适用于在以下情况：

1. 有可能不需要该变量，且初始化的成本很高。
2. 在初始化变量过程中需要访问到 `this` 属性。

```dart
void main() {
  late String thermometer = readThermometer(); // Lazily initialized.

  /// 输出顺序: before -> thermometer -> after
  /// 如果注释打印语句，就不会再打印 thermometer
  print("before");
  print(thermometer);
  print("after");
}

String readThermometer() {
  return "thermometer";
}
```

## Final 和 Const

当变量不可以被修改时，可以使用关键字 `final` 或者 `const` 修饰变量。这两个关键字可以替代 `var` 关键字或者加在类型前。

二者的异同点如下：

1. `final` 变量只可以被赋值一次;
2. 实例变量 可以是 `final` 的但不可以是 `const` 的。
3. `const` 变量是一个编译时常量（ `const` 变量同时也是 `final` 的）
4. `final` 变量可以在声明的时候不初始化，而 `const` 必须在声明时赋值。
5. 如果使用 `const` 修饰类中的变量，则必须加上 `static` 关键字，即 `static const`（注：顺序不能颠倒）
6. 尽管 `final` 的对象不可以被修改, 但其对象的成员可以被修改；而 `const` 的对象的成员不可以被修改，是不可变的。
7. 也可以将构造函数声明为 `const` 的，这种类型的构造函数创建的对象是不可变的。

```dart
final name = 'Bob';
final String nickname = 'Bobby';

// 不能修改 `final` 变量的值
name = 'Alice'; // Error: a final variable can only be set once

// 在声明 `const` 变量时可以直接为其赋值，也可以使用其它的 `const` 变量为其赋值
const bar = 1000000; // 直接赋值 [Unit of pressure (dynes/cm2)]
const double atm = 1.01325 * bar; // 利用其它 const 变量赋值 (Standard atmosphere)
```

如果使用初始化表达式为常量赋值可以省略掉关键字 const，比如上面的常量 baz 的赋值就省略掉了 const。

```dart
var foo = const [];
final bar = const [];
const baz = []; // 相当于 `const []` (Equivalent to `const []`)

// 没有使用 final 或 const 修饰的变量的值是可以被更改的，即使这些变量之前引用过 const 的值。
foo = [1, 2, 3]; // foo 的值之前为 const [] (Was const [])
baz = [42];      // Error: Constant variables can't be assigned a value
```
