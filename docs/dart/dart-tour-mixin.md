---
sidebar_position: 11
---

# Dart tour: 11、Mixin

> `mixin` 关键字在 `Dart 2.1` 中才被引用支持。早期版本中的代码通常使用 `abstract class` 代替。

`Mixin` 是一种在多重继承中复用某个类中代码的方法模式。
使用 `with` 关键字并在其后跟上 `Mixin` 类的名字来使用 `Mixin` 模式。

```dart
class Musician extends Performer with Musical {

}

class Maestro extends Person
    with Musical, Aggressive, Demented {
  Maestro(String maestroName) {
    name = maestroName;
    canConduct = true;
  }
}
```

想要创建一个 `Mixin`，需要创建继承自 `Object` 且不声明构造函数的类。除非你想让该类与普通的类一样可以被正常地使用，否则请使用关键字 `mixin` 替代 `class`。

```dart
mixin Musical {

  bool canPlayPiano = false;
  bool canCompose = false;
  bool canConduct = false;

  void entertainMe() {
    if (canPlayPiano) {
      print('Playing piano');
    } else if (canConduct) {
      print('Waving hands');
    } else {
      print('Humming to self');
    }
  }
}
```

可以使用关键字 `on` 来指定哪些类可以使用该 `Mixin` 类，比如有 `Mixin` 类 `A`，但是 `A` 只能被 `B` 类使用，则可以这样定义 `A`。

```dart
mixin Musical {

  bool canPlayPiano = false;
  bool canCompose = false;
  bool canConduct = false;

  void entertainMe() {
    if (canPlayPiano) {
      print('Playing piano');
    } else if (canConduct) {
      print('Waving hands');
    } else {
      print('Humming to self');
    }
  }
}

mixin Musical {

  bool canPlayPiano = false;
  bool canCompose = false;
  bool canConduct = false;

  void entertainMe() {
    if (canPlayPiano) {
      print('Playing piano');
    } else if (canConduct) {
      print('Waving hands');
    } else {
      print('Humming to self');
    }
  }
}

class Musician {

}
mixin MusicalPerformer on Musician {

  String get title {
    return "musician";
  }

  void playMusic() {
    print("play music");
  }
}
class SingerDancer extends Musician with MusicalPerformer {
  // ...
}

// Error: 'Object' doesn't implement 'Musician' so it can't be used with 'MusicalPerformer'.
class Dancer with MusicalPerformer {

}

void main() {
  var sd = SingerDancer();
  sd.playMusic();   // OK
  print(sd.title);  // musician

  var dancer = Dancer();
  dancer.playMusic(); // Error
}
```
