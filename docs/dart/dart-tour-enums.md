---
sidebar_position: 10
---

# Dart tour: 10、枚举

使用关键字 enum 来定义枚举类型。

```dart
// 可以在声明枚举类型时使用 尾随逗号
enum Color { red, green, blue, }
```

每一个枚举值都有一个名为 `index` 成员变量的 `Getter` 方法，该方法将会返回以 `0` 为基准索引的位置值。

```dart
assert(Color.red.index == 0);
assert(Color.green.index == 1);
assert(Color.blue.index == 2);
```

想要获得全部的枚举值，使用枚举类的 `values` 方法获取包含它们的列表。

```
List<Color> colors = Color.values;
assert(colors[2] == Color.blue);
```

可以在 `Switch` 语句中使用枚举，但是需要注意的是必须处理枚举值的每一种情况，即每一个枚举值都必须成为一个 `case` 子句，不然会出现警告。

```dart
var aColor = Color.blue;

switch (aColor) {
  case Color.red:
    print('红如玫瑰！');
    break;
  case Color.green:
    print('绿如草原！');
    break;
  default: // 没有该语句会出现警告。
    print(aColor); // 'Color.blue'
}
```

枚举类型有如下两个限制：

1. 不能子类化(`subclass`)，混合(`mixin`)或实现(`implement`)枚举。
2. 不能显式地实例化一个枚举类。
