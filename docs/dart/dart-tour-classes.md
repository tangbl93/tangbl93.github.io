---
sidebar_position: 9
---

# Dart tour: 9、类

> `Dart` 是支持基于 `mixin` 继承机制的面向对象语言，所有对象都是一个类的实例，而除了 Null 以外的所有的类都继承自 Object 类。基于 `mixin` 的继承扩展是一种在不更改类或创建子类的情况下向类添加功能的方式。

## 类的成员

对象的成员由函数和数据（即方法和实例变量）组成。方法的调用要通过对象来完成，这种方式可以访问对象的函数和数据。

```dart
// 使用（.）来访问对象的实例变量或方法
var p = Point(2, 2);

assert(p.y == 2); // 获取 y 值
// 调用变量 p 的 distanceTo() 方法
double distance = p.distanceTo(Point(4, 4));

// 使用 ?. 代替 . 可以避免因为左边表达式为 null 而导致的问题
var a = p?.y;
print(a);
```

## 实例变量

未初始化的实例变量其值均为 null, 且实例变量也支持 `final`、`late` 等修饰符。

```dart
// 声明实例变量案例
class Point {
  double? x;            // null
  double? y;            // null
  final double z = 0;   // 0.0
}
```

## 构造函数

> 当且仅当命名冲突时使用 `this` 关键字才有意义，否则 `Dart` 会忽略 `this` 关键字。

> 可以使用构造函数来创建一个对象。从 `Dart 2` 开始，`new` 关键字是可选的。

构造函数是一个与类名一样的函数(对于命名式构造函数 还可以添加额外的标识符)，其用于创建一个类的实例。

```dart
// 还会有更好的方式来实现此逻辑，敬请期待。
class Point {
  double x = 0;
  double y = 0;

  Point(double x, double y) {
    // 在类中使用 this 关键字引用当前实例
    this.x = x;
    this.y = y;
  }
}

// 在构造函数中为实例变量赋值的过程大多数都是类似的，Dart 提供了语法糖来简化该步骤
class Point {
  // ...

  // 在构造函数体执行前用于设置 x 和 y 的语法糖
  Point(this.x, this.y);
}
```

### 默认构造函数

如果没有声明构造函数，那么 `Dart` 会自动生成一个`无参数的构造函数`并且该构造函数会`调用其父类的无参数构造方法`。

### 构造函数不被继承

子类不会继承父类的构造函数，如果子类没有声明构造函数，那么只会有一个默认无参数的构造函数。

### 命名式构造函数

可以为一个类声明多个命名式构造函数来表达更明确的意图：

```dart
class Point {
  // ...

  // 命名式构造函数
  Point.origin()
      : x = xOrigin,
        y = yOrigin;
}
```

### 调用父类非默认构造函数

> 传递给父类构造函数的参数不能使用 `this` 关键字，因为在参数传递的这一步骤，子类构造函数尚未执行，子类的实例对象也就还未初始化，因此所有的实例成员都不能被访问，但是类成员可以。

默认情况下，子类的构造函数会调用父类的匿名无参构造函数，并且该调用会在子类构造函数的函数体代码执行前，如果子类构造函数还有一个初始化列表，那么该初始化列表会在调用父类的该构造函数之前被执行，总的来说，这三者的调用顺序如下：

1. 初始化列表
2. 父类的无参构造函数
3. 当前类的构造函数

如果父类没有匿名无参构造函数，那么子类必须调用父类的其中一个构造函数，为子类的构造函数指定一个父类的构造函数需在构造函数体前使用（:）指定。

```dart

// Employee 类的构造函数调用了父类 Person 的命名构造函数
class Person {
  String? firstName;

  Person.fromJson(Map data) {
    print('in Person');
  }
}

class Employee extends Person {
  // Person 类没有匿名无参构造函数, 因此必需调用 Person.fromJson 构造函数
  Employee.fromJson(Map data) : super.fromJson(data) {
    print('in Employee');
  }
}

void main() {
  var employee = Employee.fromJson({});
  print(employee);
  // Prints: in Person ->  in Employee -> Instance of 'Employee'
}
```

因为参数会在子类构造函数被执行前传递给父类的构造函数，因此该参数也可以是一个表达式，比如一个函数。

```dart
class Employee extends Person {
  Employee() : super.fromJson(fetchDefaultData());
}
```

### 初始化列表

> 初始化列表表达式 `=` 右边的语句不能使用 `this` 关键字

除了调用父类构造函数之外，还可以在构造函数体执行之前初始化实例变量。每个实例变量之间使用逗号分隔。

```dart
// 使用初始化列表在构造函数体执行前设置实例变量。
Point.fromJson(Map<String, double> json)
    : x = json['x']!,
      y = json['y']! {
  print('In Point.fromJson(): ($x, $y)');
}

// 在开发模式下，可以在初始化列表中使用 assert 来验证输入数据
Point.withAssert(this.x, this.y) : assert(x >= 0) {
  print('In Point.withAssert(): ($x, $y)');
}

// 使用初始化列表设置 final 字段也非常方便
import 'dart:math';

class Point {
  final double x;
  final double y;
  final double distanceFromOrigin;

  Point(double x, double y)
      : x = x,
        y = y,
        distanceFromOrigin = sqrt(x * x + y * y);
}
```

### 重定向构造函数

有时候类中的构造函数仅用于调用类中其它的构造函数，此时该构造函数没有函数体，只需在函数签名后使用（`:`）指定需要重定向到的其它构造函数。

```dart
class Point {
  double x, y;

  // 该类的主构造函数
  Point(this.x, this.y);

  // 委托实现给主构造函数
  Point.alongXAxis(double x) : this(x, 0);
}
```

### 常量构造函数

如果类生成的对象都是不变的，可以在生成这些对象时就将其变为编译时常量。可以在类的构造函数前加上 `const` 关键字并确保所有实例变量均为 `final` 来实现该功能。

```dart
class ImmutablePoint {
  static const ImmutablePoint origin = ImmutablePoint(0, 0);

  // 未标记会报错: Error: Constructor is marked 'const' so all fields must be final.
  final double x, y;

  const ImmutablePoint(this.x, this.y);
}
```

使用常量构造函数，在构造函数名之前加 `const` 关键字，来创建编译时常量时, 两个使用相同构造函数相同参数值构造的编译时常量是同一个对象。

```dart
var a = const ImmutablePoint(1, 1);
var b = const ImmutablePoint(1, 1);

assert(identical(a, b)); // 二者是同一个实例
```

在常量上下文场景中，通常可以省略掉构造函数或字面量前的 `const` 关键字。

```dart
// 这里有很多 const 关键字
const pointAndLine = const {
  'point': const [const ImmutablePoint(0, 0)],
  'line': const [const ImmutablePoint(1, 10), const ImmutablePoint(-2, 11)],
};

// 只有从 Dart 2 开始才能根据上下文判断省略 const 关键字。
// 根据上下文，可以只保留第一个 const 关键字，其余的全部省略
// 只需要一个 const 关键字，其它的则会隐式地根据上下文进行关联。
const pointAndLine = {
  'point': [ImmutablePoint(0, 0)],
  'line': [ImmutablePoint(1, 10), ImmutablePoint(-2, 11)],
};

// 但是如果无法根据上下文判断是否可以省略 const，则不能省略掉 const 关键字，否则将会创建一个 非常量对象
var a = const ImmutablePoint(1, 1); // 创建一个常量
var b = ImmutablePoint(1, 1); // 不会创建一个常量

assert(!identical(a, b)); // 这两变量并不相同
```

### 工厂构造函数

> 在工厂构造函数中无法访问 `this`。

使用 `factory` 关键字标识类的构造函数将会令该构造函数变为工厂构造函数，这将意味着使用该构造函数构造类的实例时并非总是会返回新的实例对象。例如，工厂构造函数可能会从缓存中返回一个实例，或者返回一个子类型的实例。

```dart

// Logger 的工厂构造函数从缓存中返回对象，和 Logger.fromJson 工厂构造函数从 JSON 对象中初始化一个最终变量
class Logger {
  final String name;
  bool mute = false;

  // _cache 变量是库私有的，因为在其名字前面有下划线。
  static final Map<String, Logger> _cache =
      <String, Logger>{};

  factory Logger(String name) {
    return _cache.putIfAbsent(
        name, () => Logger._internal(name));
  }

  factory Logger.fromJson(Map<String, Object> json) {
    return Logger(json['name'].toString());
  }

  Logger._internal(this.name);

  void log(String msg) {
    if (!mute) print(msg);
  }
}
```

## 方法

方法是为对象提供行为的函数。

### 实例方法

对象的实例方法可以访问实例变量和 `this`。

```dart
import 'dart:math';

const double xOrigin = 0;
const double yOrigin = 0;

class Point {
  double x = 0;
  double y = 0;

  Point(this.x, this.y);

  //  distanceTo() 方法是实例方法
  double distanceTo(Point other) {
    var dx = x - other.x;
    var dy = y - other.y;
    return sqrt(dx * dx + dy * dy);
  }
}
```

### 操作符

运算符是有着特殊名称的实例方法。 `Dart` 允许使用以下名称定义运算符

- `<`
- `+`
- `|`
- `[]`
- `>`
- `/`
- `^`
- `[]=`
- `<=`
- `~/`
- `&`
- `~`
- `>=`
- `*`
- `<<`
- `==`
- `–`
- `%`
- `>>`

使用 `operator` 标识符表示重写操作符。

```dart
// 重写 + 和 - 操作符的例子
class Vector {
  final int x, y;

  Vector(this.x, this.y);

  Vector operator +(Vector v) => Vector(x + v.x, y + v.y);
  Vector operator -(Vector v) => Vector(x - v.x, y - v.y);

  @override bool operator ==(v) => v is Vector && (this.x == v.x && this.y == v.y);
  @override int get hashCode => this.x.hashCode + this.y.hashCode;
}

void main() {
  final v = Vector(2, 3);
  final w = Vector(2, 2);

  assert(v + w == Vector(4, 5));
  assert(v - w == Vector(0, 1));
}
```

### Getter 和 Setter

`Getter` 和 `Setter` 是一对用来读写对象属性的特殊方法，上面说过实例对象的每一个属性都有一个隐式的 `Getter` 方法，如果为非 `final` 属性的话还会有一个 `Setter` 方法，可以使用 `get` 和 `set` 关键字为额外的属性添加 `Getter` 和 `Setter` 方法。

使用 `Getter` 和 `Setter` 的好处是，可以先使用实例变量，过一段时间过再将它们包裹成方法且不需要改动任何代码，即先定义后更改且不影响原有逻辑。

```dart
class Rectangle {
  double left, top, width, height;

  Rectangle(this.left, this.top, this.width, this.height);

  // 定义两个计算产生的属性：right 和 bottom。
  double get right => left + width;
  set right(double value) => left = value - width;
  double get bottom => top + height;
  set bottom(double value) => top = value - height;
}

void main() {
  var rect = Rectangle(3, 4, 20, 15);
  assert(rect.left == 3);
  rect.right = 12;
  assert(rect.left == -8);
}
```

### 抽象方法

`实例方法`、`Getter` 方法以及 `Setter` 方法都可以是抽象的，定义一个接口方法而不去做具体的实现让实现它的类去实现该方法，抽象方法只能存在于抽象类中。直接使用分号（`;`）替代方法体即可声明一个抽象方法。

```dart
abstract class Doer {
  // 定义实例变量和方法等等
  void doSomething(); // 定义一个抽象方法
}

class EffectiveDoer extends Doer {
  void doSomething() {
    // 提供一个实现，所以在这里该方法不再是抽象的……
  }
}
```

## 抽象类

使用关键字 `abstract` 标识类可以让该类成为抽象类，抽象类将无法被实例化。抽象类常常会包含抽象方法。
抽象类常用于声明接口方法、有时也会有具体的方法实现。如果想让抽象类同时可被实例化，可以为其定义工厂构造函数。

```dart
// 该类被声明为抽象的，因此不能被实例化。
abstract class AbstractContainer {
  // 定义构造函数、字段、方法等
  void updateChildren(); // 抽象方法。
}
```

## 隐式接口

> 如果需要实现多个类接口，可以使用逗号分割每个接口类：`class Point implements Comparable, Location {...}`

每一个类都隐式地定义了一个接口并实现了该接口，这个接口包含所有这个类的实例成员以及这个类所实现的其它接口。
如果想要创建一个 `A` 类支持调用 `B` 类的 API 且不想继承 `B` 类，则可以实现 `B` 类的接口。

一个类可以通过关键字 `implements` 来实现一个或多个接口并实现每个接口定义的 API：

```dart
// Person 类的隐式接口中包含 greet() 方法。
class Person {
  // _name 变量同样包含在接口中，但它只是库内可见的。
  final _name;

  // 构造函数不在接口中。
  Person(this._name);

  // greet() 方法在接口中。
  String greet(String who) => '你好，$who。我是$_name。';
}

// Person 接口的一个实现。
class Impostor implements Person {
  get _name => '';

  String greet(String who) => '你好$who。你知道我是谁吗？';
}

String greetBob(Person person) => person.greet('小芳');

void main() {
  print(greetBob(Person('小芸')));  // 你好，小芳。我是小芸。
  print(greetBob(Impostor()));     // 你好小芳。你知道我是谁吗？

}
```

## 拓展类

使用 `extends` 关键字来创建一个子类，并可使用 `super` 关键字引用一个父类。

子类可以重写父类的实例方法（包括 操作符）、 `Getter` 以及 `Setter` 方法。可以使用 @override 注解来表示重写了一个成员。

> 如果重写 `==` 操作符，必须同时重写对象 `hashCode` 的 `Getter` 方法。

```dart
class Television {
  void turnOn() {
    print("turnOn Television");
  }
}

class SmartTelevision extends Television {
  @override void turnOn() {
    print("turnOn SmartTelevision");
  }
}

void main() {
  var smartTv = SmartTelevision();
  smartTv.turnOn();
}
```

### covariant 类型约束

在重写时，可以使用 [covariant](https://dart.cn/guides/language/sound-problems#the-covariant-keyword) 关键字来缩小代码中那些符合的方法参数或实例变量的类型。

```dart
class Animal {
  void chase(Animal x) { }
}

class Mouse extends Animal { }

class Cat extends Animal {
  @override
  void chase(covariant Mouse x) { }
}
```

### noSuchMethod 方法

如果调用了对象上不存在的方法或实例变量将会触发 `noSuchMethod` 方法，可以重写 noSuchMethod 方法来追踪和记录这一行为。声明的变量需要是 `dynamic` 类型的才可以触发。

```dart
class A {
  // 除非重写 noSuchMethod，否则调用一个不存在的成员会导致 NoSuchMethodError。
  @override
  void noSuchMethod(Invocation invocation) {
    print('你尝试使用一个不存在的成员：' + '${invocation.memberName}');
  }
}
```

## 扩展方法

扩展方法是向现有库添加功能的一种方式。扩展方法不仅可以定义方法，还可以定义其他成员，例如 `getter`，`setter` 和`operator`。

```dart
// 定义一个拓展名为: NumberParsing
// 该拓展在 String 类上进行拓展，增加了 parserInt 方法
extension NumberParsing on String {
  int parserInt() {
    return int.parse(this);
  }
}

void main() {
  var n = "233";
  var x = n.parserInt();  // int: 233
}
```

以下是使用对字符串进行操作的扩展（名为 NumberParsing）来实现扩展方法 parseInt（）的方法：

## 类变量和方法

### 静态变量

> 静态变量在其首次被使用的时候才被初始化。

使用关键字 `static` 可以声明类变量或类方法。静态变量（即类变量）常用于声明类范围内所属的状态变量和常量。

```dart
class Queue {
  static const initialCapacity = 16;
}

void main() {
  assert(Queue.initialCapacity == 16);
}
```

### 静态方法

> 可以将静态方法作为编译时常量。例如，可以将静态方法作为一个参数传递给一个常量构造函数。

静态方法（即类方法）不能对实例进行操作，因此不能使用 `this`。但是可以访问静态变量。

```dart
import 'dart:math';

class Point {
  double x, y;
  Point(this.x, this.y);

  static double distanceBetween(Point a, Point b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    return sqrt(dx * dx + dy * dy);
  }
}

void main() {
  var a = Point(2, 2);
  var b = Point(4, 4);
  var distance = Point.distanceBetween(a, b);
  assert(2.8 < distance && distance < 2.9);
  print(distance);
}
```

## 可调用类

通过实现类的 `call()` 方法，允许使用类似函数调用的方式来使用该类的实例。

在下面的示例中，`WannabeFunction` 类定义了一个 `call()` 函数，函数接受三个字符串参数，函数体将三个字符串拼接，字符串间用空格分割，并在结尾附加了一个感叹号。

```dart
class WannabeFunction {
  String call(String a, String b, String c) => '$a $b $c!';
}

var wf = WannabeFunction();
var out = wf('Hi', 'there,', 'gang');

main() => print(out);
```
