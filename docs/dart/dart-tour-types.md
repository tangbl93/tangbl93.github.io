---
sidebar_position: 4
---

# Dart tour: 4、数据类型

在 `Dart` 中有以下常用的内置类型:

1. Numbers (`int`, `double`)
2. Strings (`String`)
3. Booleans (`bool`)
4. Lists (`List`)
5. Sets (`Set`)
6. Maps (`Map`)
7. Runes (常用于在 Characters API 中进行字符替换)
8. Symbols (`Symbol`)
9. The value null (`Null`)

此外还有些不常用的数据类型，但是也比较重要的：

1. `Object`: 在 `Dart` 中除了 `Null` 之外的其他类型的父类。
2. `Future`、`Stream`: 在异步中经常使用的类型。
3. `Iterable`: 迭代生成器，一般在循环中使用。
4. `Never`: 表示表达式永远不会成功运行结束，通常用于必定抛出异常的函数中。
5. `dynamic`: 表示这个变量不使用静态检查，可以使用任意类型，一般可以用 `Object` 代替。
6. `void`: 表示这个值不存在，通常用于返回值。

## 获取对象的类型

在运行时，通过对象的 `runtimeType` 属性获取到对象的类型。

```dart
var a = 233;
print('The type of a is ${a.runtimeType}'); // int
```

## Numbers

`Dart` 支持两种 `Number` 类型，都是 `num` 的子类：

- `int`: 整数值；长度不超过 64 位，具体取值范围 依赖于不同的平台。
- `double`: 64 位的双精度浮点数字，且符合 `IEEE 754` 标准。

```dart
// 整数值字面量
var x = 1;
var hex = 0xDEADBEEF;
int exponent = 8e5;

// 浮点数字面量
var y = 1.1;
var exponents = 1.42e5;


// 数值类型, 值可以是整数值或者浮点数
num x = 1; // x can have both int and double values
x += 2.5;

// 整型字面量将会在必要的时候自动转换成浮点数字面量
// 在 Dart 2.1 之前，在浮点数上下文中使用整数字面量是错误的
double z = 1; // double z = 1.0
```

此外，字符串和数字之间转换也可以相互转换。

```dart
// String -> int
var one = int.parse('1');
assert(one == 1);

// String -> double
var onePointOne = double.parse('1.1');
assert(onePointOne == 1.1);

// int -> String
String oneAsString = 1.toString();
assert(oneAsString == '1');

// double -> String
String piAsString = 3.14159.toStringAsFixed(2);
assert(piAsString == '3.14');
```

## Strings

字符串（`String` 对象）包含了 `UTF-16` 编码的字符序列。可以使用单引号或者双引号来创建字符串。

```dart
var s1 = 'Single quotes work well for string literals.';
var s2 = "Double quotes work just as well.";
var s3 = 'It\'s easy to escape the string delimiter.';
var s4 = "It's even easier to use the other delimiter.";

var s5 = '使用单引号创建字符串字面量。';
var s6 = "双引号也可以用于创建字符串字面量。";
var s7 = '使用单引号创建字符串时可以使用斜杠来转义那些与单引号冲突的字符串：\'。';
var s8 = "而在双引号中则不需要使用转义与单引号冲突的字符串：'";
```

在字符串中，请以 `${表达式}` 的形式使用表达式，如果表达式是一个标识符，可以省略掉 `{}`。如果表达式的结果为一个对象，则 `Dart` 会调用该对象的 `toString` 方法来获取一个字符串。可以使用 `+` 运算符或并列放置多个字符串来连接字符串。

```dart
var s = 'string interpolation';

assert('Dart has $s, which is very handy.' ==
    'Dart has string interpolation, ' +
        'which is very handy.');
assert('That deserves all caps. ' +
        '${s.toUpperCase()} is very handy!' ==
'That deserves all caps. ' +
'STRING INTERPOLATION is very handy!');

var s1 = 'String '
'concatenation'
" works even over line breaks.";
assert(s1 ==
'String concatenation works even over '
'line breaks.');

var s2 = 'The + operator ' + 'works, as well.';
assert(s2 == 'The + operator works, as well.');
```

使用三个单引号或者三个双引号也能创建多行字符串，在字符串前加上 `r` 作为前缀创建原始字符串（即不会被做任何处理（比如转义）的字符串）。

```dart
var s1 = '''
你可以像这样创建多行字符串。
''';
var s2 = """这也是一个多行字符串。""";
var s3 = r'In a raw string, not even \n gets special treatment.';
```

## Booleans

> `Dart` 使用 `bool` 关键字表示布尔类型，布尔类型只有两个对象 `true` 和 `false`，两者都是编译时常量。

`Dart` 的类型安全不允许使用类似如 `if (nonbooleanValue)` 或者 `assert (nonbooleanValue)` 这样的代码检查布尔值。相反应该总是显式地检查布尔值，比如下面的代码这样：

```dart
// 检查是否为空字符串
var fullName = '';
assert(fullName.isEmpty);

// 检查是否小于等于零
var hitPoints = 0;
assert(hitPoints <= 0);

// 检查是否为 null
var unicorn;
assert(unicorn == null);

// 检查是否为 NaN
var iMeantToDoThis = 0 / 0;
assert(iMeantToDoThis.isNaN);
```

## Lists

`List` 表示数组对象，在集合中仅可存在指定类型的元素。
可以在 `Dart` 的集合类型的最后添加尾随逗号,这个尾随逗号并不会影响集合，但它能有效避免「复制粘贴」的错误。

```dart
var list = [1, 2, 3]; // List<int>

var strlist = [  // List<String>
'Car',
'Boat',
'Plane',
];

// CRUD
// 获取List的长度
assert(list.length == 3);

// 获取特定下标的元素
assert(list[1] == 2);

// 修改特定下标的元素
list[1] = 1;
assert(list[1] == 1);

// 在 List 字面量前添加 const 关键字会创建一个编译时常量
var constantList = const [1, 2, 3];
// constantList[1] = 1; // This line will cause an error
```

`Dart 2.3` 中引入了 扩展操作符（`...`）和 空感知扩展操作符（`...?`），提供了一种将多个元素插入集合的简洁方法。

```dart
// 使用扩展操作符（...）将一个 List 中的所有元素插入到另一个 List 中
var list = [1, 2, 3];
var list2 = [0, ...list];
assert(list2.length == 4);

// 如果扩展操作符右边可能为 null，则使用 null-aware 扩展操作符（...?）来避免产生异常
var list;
var list2 = [0, ...?list];
assert(list2.length == 1);
```

此外，`Dart` 还同时引入了集合中的 `if` 和 集合中的 `for` 操作，在构建集合时，可以使用条件判断(`if`) 和循环 (`for`)。

下面示例是 的示例，它可能包含 3 个或 4 个元素：

```dart
// 使用 集合中的 if 来创建一个 List
var promoActive = true;
var nav = [
'Home',
'Furniture',
'Plants',
if (promoActive) 'Outlet'
];
assert(nav.length == 4);

// 使用 集合中的 for 将列表中的元素修改后添加到另一个列表中
var listOfInts = [1, 2, 3];
var listOfStrings = [
'#0',
for (var i in listOfInts) '#$i'
];
assert(listOfStrings[1] == '#1');
```

## Sets

> `Map` 字面量语法相似于 `Set` 字面量语法。因为先有的 `Map` 字面量语法，所以 `{}` 默认是 `Map` 类型。

`Set` 是一组特定元素的无序集合。 `Set` 字面量(literals) 是在 Dart 2.2 中才加入的。

```dart
// 使用 Set 字面量来创建一个 Set 集合
var halogens = {'fluorine', 'chlorine', 'bromine', 'iodine', 'astatine'}; // Set<String>

// 可以使用在 `{}` 前加上类型参数的方式创建一个空的 Set，或者将 `{}` 赋值给一个 Set 类型的变量：
var names = <String>{}; // 类型+{}的形式创建 Set。
// Set<String> names = {}; // 声明类型变量的形式创建 Set
// var names = {}; // 这样的形式将创建一个 Map 而不是 Set

// 使用 add() 方法或 addAll() 方法向已存在的 Set 中添加项目
var elements = <String>{};
elements.add('fluorine');
elements.addAll(halogens);

// 使用 .length 可以获取 Set 中元素的数量
assert(elements.length == 5);

// 可以在 Set 字面量前添加 const 关键字创建一个 Set 编译时常量：
final constantSet = const {
'fluorine',
'chlorine',
'bromine',
'iodine',
'astatine',
};
// constantSet.add('helium'); // This line will cause an error.
```

从 `Dart 2.3` 开始，`Set` 可以像 `List` 一样支持使用 `扩展操作符` 和 `空感知扩展操作符` 以及 `if` 和 `for` 操作。

```dart
// 扩展操作符
var list1 = {1, 2, 3};
var list2 = {0, ...list1};
assert(list2.length == 4);

// 空感知扩展操作符
var list3 = {0, ...?null};
assert(list3.length == 1);

// if 操作
var promoActive = true;
var nav = {
'Home',
'Furniture',
'Plants',
if (promoActive) 'Outlet'
};
assert(nav.length == 4);

// for 操作
var listOfInts = [1, 2, 3];
var listOfStrings = {
'#0',
for (var i in listOfInts) '#$i'
};
assert(listOfStrings.length == 4);
```

## Maps

> `Map` 是用来关联键(`keys`)和值(`values`)的对象。其中键和值都可以是任何类型的对象。

> `Map` 也可以像 `List` 一样支持使用扩展操作符（`...` 和 `...?`）以及集合的 `if` 和 `for` 操作。

创建 `Map` 对象的方式:

```dart
// 使用 Map 字面量创建 Map

// Map<String, String>
var gifts = {
'first': 'partridge',
'second': 'turtledoves',
'fifth': 'golden rings'
};

// Map<int, String>
var nobleGases = {
2: 'helium',
10: 'neon',
18: 'argon',
};

// 使用 Map 的构造器创建 Map
// 备注: 在 Dart 中，new 关键词是可选的，且不被建议使用
var gifts = Map<String, String>();
gifts['first'] = 'partridge';
gifts['second'] = 'turtledoves';
gifts['fifth'] = 'golden rings';

var nobleGases = Map<int, String>();
nobleGases[2] = 'helium';
nobleGases[10] = 'neon';
nobleGases[18] = 'argon';

// 在一个 Map 字面量前添加 const 关键字可以创建一个 Map 编译时常量
final constantMap = const {
2: 'helium',
10: 'neon',
18: 'argon',
};
// constantMap[2] = 'Helium'; // This line will cause an error.
```

操作 `Map` 对象的方法(每段代码独立存在):

```dart
// 向现有的 Map 中添加键值对
var gifts = {'first': 'partridge'};
gifts['fourth'] = 'calling birds';

// 从一个 Map 中获取一个值的操作
var gifts = {'first': 'partridge'};
assert(gifts['first'] == 'partridge');

// 如果检索的 Key 不存在于 Map 中则会返回一个 null
var gifts = {'first': 'partridge'};
assert(gifts['fifth'] == null);

// 使用 .length 可以获取 Map 中键值对的数量
var gifts = {'first': 'partridge'};
gifts['fourth'] = 'calling birds';
assert(gifts.length == 2);
```

## Runes 与 grapheme clusters

在 `Dart` 中，`runes` 封装了字符串的 `Unicode` 码位。使用 `characters` 包来访问或者操作字符(characters，也被称为 Unicode (extended) grapheme clusters)。

`Unicode` 编码为每一个字母、数字和符号都定义了一个唯一的数值。因为 `Dart` 中的字符串是一个 UTF-16 的字符序列，所以如果想要表示 32 位的 `Unicode` 数值则需要一种特殊的语法。

表示 `Unicode` 字符的常见方式是使用 `\uXXXX`，其中 `XXXX` 是一个四位数的 16 进制数字。例如心形字符`（♥）`的 `Unicode` 为 `\u2665`。对于不是四位数的 16 进制数字，需要使用大括号将其括起来。例如大笑的 `emoji` 表情`（😆）`的 `Unicode` 为 `\u{1f600}`。

```dart
void main() {
  var heart = "\u2665";
  print(heart);     // ♥

  var laughing = "\u{1f600}";
  print(laughing);  // 😀
}
```

如果需要读写单个 Unicode 字符，可以使用 [characters](https://pub.dev/packages/characters) 包中定义的 `characters getter`。它将返回 `Characters` 对象作为一系列 `grapheme clusters` 的字符串。下面是使用 `characters` API 的样例：

```dart
import 'package:characters/characters.dart';

void main() {
  var hi = 'Hi 🇩🇰';
  print(hi);

  print('The end of the string: ${hi.substring(hi.length - 1)}'); // �
  print('The last character: ${hi.characters.last}\n');           // 🇩🇰
}
```

`String` 类与 `runes` 可以通过某些方法相互转换。

```dart
var hi = '♥  😅  😎  👻  🖖  👍';
print(hi.runes);

Runes input = new Runes('\u2665  \u{1f605}  \u{1f60e}  \u{1f47b}  \u{1f596}  \u{1f44d}');
print(new String.fromCharCodes(input));
```

## Symbols

<!-- TODO: 用途未知，待以后处理 -->

> `Symbol` 表示 `Dart` 中声明的操作符或者标识符。通常基本用不到。

> `Symbol` 对于那些通过名称引用标识符的 API 很有用，因为代码压缩后，尽管标识符的名称会改变，但是它们的 `Symbol` 会保持不变。

> 可以使用在标识符前加 # 前缀来获取 `Symbol` , `Symbol` 字面量是编译时常量。

```dart
#radix;
#bar;

print(#radix);  // Symbol("radix")
```
