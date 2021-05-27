---
sidebar_position: 6
---

# Dart tour: 6、操作符

> 本篇仅介绍些独特的操作符，常规的可以查[操作符文档](https://dart.dev/guides/language/language-tour#operators)。

## 类型判断运算符

- `as`: 类型转换（也用作指定类前缀)）
- `is`: 如果对象是指定类型则返回 true
- `is!`: 如果对象是指定类型则返回 false

> 当且仅当 `obj` 实现了 `T` 的接口，`obj is T` 才是 `true`。例如 `obj is Object` 总为 `true`，因为所有类都是 `Object` 的子类。

```dart
// 仅当确定这个对象是该类型的时候，才可以使用 as 操作符可以把对象转换为特定的类型
(employee as Person).firstName = 'Bob';

// 如果不确定这个对象类型是不是 T，请在转型前使用 is T 检查类型
if (employee is Person) {
  // Type check
  employee.firstName = 'Bob';
}

// 上述两种方式是有区别的：如果 employee 为 null 或者不为 Person 类型，则第一种方式将会抛出异常，而第二种不会。
```

## 赋值运算符

- `??=`: 仅当被赋值的变量为 `null` 时，才可以成功赋值。

```dart
void main() {
  var b = null;
  var value = 21;

  // Assign value to b if b is null; otherwise, b stays the same
  b ??= value;
  print(b);
}
```

## 条件运算符

- `condition ? expr1 : expr2`: 三元表达式
- `expr1 ?? expr2`: 如果表达式 1 为非 `null` 则返回其值，否则执行表达式 2 并返回其值。

```dart
var isPublic = true;
var visibility = isPublic ? 'public' : 'private';
assert(visibility == 'public');


```

## 级联运算符

> `?..` 语法是在 `Dart 2.12` 中引入的。

级联运算符 (`..`, `?..`) 可以在同一个对象上连续调用多个对象的变量或方法。

```dart
// 这部分的代码无法直接运行，仅做展示语法用途。
// 在同一个对象上连续调用多个对象的变量或方法
var paint = Paint()
  ..color = Colors.black
  ..strokeCap = StrokeCap.round
  ..strokeWidth = 5.0;

// 等价于
var paint = Paint();
paint.color = Colors.black;
paint.strokeCap = StrokeCap.round;
paint.strokeWidth = 5.0;

// 如果操作级联运算符的对象可能为空(null), 就在开始使用 `?..` 来操作，这样保证不会在空对象上操作。
querySelector('#confirm') // Get an object.
  ?..text = 'Confirm' // Use its members.
  ..classes.add('important')
  ..onClick.listen((e) => window.alert('Confirmed!'));

// 级联操作符可以嵌套使用
final addressBook = (AddressBookBuilder()
  ..name = 'jenny'
  ..email = 'jenny@example.com'
  ..phone = (PhoneNumberBuilder()
        ..number = '415-555-0100'
        ..label = 'home')
      .build())
.build();
```

## 访问成员

- `.`: 访问成员。
- `?.`: 条件访问成员, 与上述成员访问符类似，但是左边的操作对象不能为 `null`，例如 `foo?.bar`，如果 `foo` 为 `null` 则返回 `null` ，否则返回 `bar`。
