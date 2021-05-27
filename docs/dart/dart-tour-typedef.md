---
sidebar_position: 17
---

# Dart tour: 17、Typedefs

在 `Dart` 中，函数与 `String` 和 `Number` 一样都是对象，可以使用类型定义（或者叫方法类型别名）来为函数的类型命名。使用函数命名将该函数类型的函数赋值给一个变量时，类型定义将会保留相关的类型信息。

```dart
class SortedCollection {
  Function compare;

  SortedCollection(int f(Object a, Object b)) : compare = f;
}

// 简单的不完整实现。
int sort(Object a, Object b) => 0;

void main() {
  SortedCollection coll = SortedCollection(sort);

  // compare 是一个函数类型的变量，但是具体是什么样的函数却不得而知。
  assert(coll.compare is Function);

  // 当然，只要函数的返回值和参数类型都匹配上，就是相等的。
  // 类型定义 Compare 的声明在下面可以找到。
  assert(coll.compare is Compare);  // true
}
```

上述代码中没有使用类型定义，当将参数 `f` 赋值给 `compare` 时，函数的类型信息丢失了，这里 `f` 这个函数的类型为 `(Object, Object) → int`（`→` 代表返回），当然该类型也是一个 `Function` 的子类，但是将 `f` 赋值给 `compare` 后， `f` 的类型 `(Object, Object) → int` 就会丢失。这时可以使用 `typedef` 显式地保留类型信息。

```dart
typedef Compare = int Function(Object a, Object b);

class SortedCollection {
  Compare compare;

  SortedCollection(this.compare);
}

// 简单的不完整实现。
int sort(Object a, Object b) => 0;

void main() {
  SortedCollection coll = SortedCollection(sort);
  assert(coll.compare is Function);
  assert(coll.compare is Compare);
}
```

由于类型定义只是别名，因此可以使用它判断任意函数类型的方法。

```dart
typedef Compare<T> = int Function(T a, T b);

int sort(int a, int b) => a - b;

void main() {
  assert(sort is Compare<int>); // True!
}
```
