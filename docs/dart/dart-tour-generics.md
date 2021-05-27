---
sidebar_position: 12
---

# Dart tour: 12、泛型

> 泛型（或参数化类型）通常使用一个字母来代表类型参数，比如 E、T、S、K 和 V 等等。

## 为什么使用泛型

泛型常用于需要要求类型安全的情况，但是也会对代码运行有好处：

1. 正确指定泛型类型会产生更好的通用代码, 且可以更容易地发现并定位问题。
2. 可以使用泛型来减少代码重复。可以在多个不同类型实现之间共享同一个接口声明。

```dart
// 声明一个只能包含 `String` 类型的数组，可以将该数组声明为 `List<String>`
// 这样的话就可以很容易避免因为在该数组放入非 `String` 类变量而导致的诸多问题。
var names = <String>[];
names.addAll(['Seth', 'Kathy', 'Lars']);
names.add(42); // Error
```

## 如何定义泛型

```dart
// 声明了一个类用于缓存对象的接口
abstract class ObjectCache {
  Object getByKey(String key);
  void setByKey(String key, Object value);
}

// 不久后你可能又会想专门为 String 类对象做一个缓存，于是又有了专门为 String 做缓存的类
// 如果过段时间你又想为数字类型也创建一个类，那么就会有很多诸如此类的代码
abstract class StringCache {
  String getByKey(String key);
  void setByKey(String key, String value);
}

// 这时候可以考虑使用泛型来声明一个类，让不同类型的缓存实现该类做出不同的具体实现即可
// 在这段代码中，T 是一个替代类型。其相当于类型占位符，在开发者调用该接口的时候会指定具体类型
abstract class Cache<T> {
  T getByKey(String key);
  void setByKey(String key, T value);
}
```

## 使用集合字面量

`List`、`Set` 以及 `Map` 字面量也可以是参数化的。定义参数化的 `List` 只需在中括号前添加 `<type>`; 定义参数化的 `Map` 只需要在大括号前添加 `<keyType, valueType>`

```dart
var names = <String>['小芸', '小芳', '小民'];
var uniqueNames = <String>{'小芸', '小芳', '小民'};
var pages = <String, String>{
  'index.html': '主页',
  'robots.txt': '网页机器人提示',
  'humans.txt': '我们是人类，不是机器'
};
```

## 使用泛型构造函数

在调用构造方法时也可以使用泛型，只需在类名后用尖括号（`<...>`）将一个或多个类型包裹即可。

```dart
// 创建了一个值为 String 类型的 Set 对象
var nameSet = Set<String>.from(names);

// 创建了一个键为 Int 类型，值为 View 类型的 Map 对象
var views = Map<int, View>();
```

## 泛型集合以及其类型

`Dart` 的泛型类型是固化的，这意味着即便在运行时也会保持类型信息：

```dart
var names = <String>[];
names.addAll(['Seth', 'Kathy', 'Lars']);
print(names is List<String>); // true
```

> 与 `Java` 不同的是，`Java` 中的泛型是类型擦除的，这意味着泛型类型会在运行时被移除。在 `Java` 中你可以判断对象是否为 `List` 但不可以判断对象是否为 `List<String>`。

## 限制泛型的类型范围

有时使用泛型的时候可能会想限制泛型的类型范围，这时候可以使用 `extends` 关键字。

```dart
class Foo<T extends SomeBaseClass> {
  // 具体实现……
  String toString() => "'Foo<$T>' 的实例";
}

class Extender extends SomeBaseClass {...}

// 这时候就可以使用 SomeBaseClass 或者它的子类来作为泛型参数
var someBaseClassFoo = Foo<SomeBaseClass>();
var extenderFoo = Foo<Extender>();

// 这时候也可以指定无参数的泛型，这时无参数泛型的类型则为 Foo<SomeBaseClass>
var foo = Foo();
print(foo); // Instance of 'Foo<SomeBaseClass>'

// 将非 SomeBaseClass 的类型作为泛型参数则会导致编译错误：
var foo = Foo<Object>();
// Error: Type argument 'Object' doesn't conform to the bound 'SomeBaseClass' of the type variable 'T' on 'Foo'.
```

## 使用泛型方法

起初 `Dart` 只支持在类的声明时指定泛型，现在同样也可以在方法上使用泛型，称之为泛型方法。

```dart
T first<T>(List<T> ts) {
  // 处理一些初始化工作或错误检测
  T tmp = ts[0];
  // 处理一些额外的检查
  return tmp;
}
```

方法 `first<T>` 的泛型 `T `可以在如下地方使用:

1. 函数的返回值类型 (`T`)
2. 参数的类型 (`List<T>`)
3. 局部变量的类型 (`T tmp`)
