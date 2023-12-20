### mobx

> MobX 是一个经过战火洗礼的库，它通过透明的函数响应式编程(transparently applying functional reactive programming - TFRP)使得状态管理变得简单和可扩展。 (原文)

包括 UI，数据序列化，服务器通信。

- 和 React：
  - React 通过提供机制把应用状态转换为可渲染的组件并对其进行渲染(通过使用虚拟 DOM 来减少昂贵的 DOM 变化的数量)
  - 而 Mobx 提供机制用来存储和更新应用状态供 React 使用(优化应用状态与 React 组件的同步机制:使用响应式，只有在真正更新时才更新)

---

#### 核心概念

- Observable state(可观察的状态)
  - 通过使用 Mobx 中@observable 装饰器来给你的类属性添加注解

```javaScript
class Todo{
  id = 0;
  @observable title = '';
}
```

- Computed Values(计算值)
  - 可以在相关数据发生变化时自动更新的值，通过@computed 装饰器或(extend)Observable 时调用的 getter/setter 函数进行
  - 计算值是经过高度优化的，如果任何计算的值发生改变时，计算值也会根据状态自动进行衍生，大多树情况下会被 mobx 优化，因为它被认为是纯函数

```javaScript
class Todo{
  id = 0;
  @observable id = 0;
  @computed get unfinishedTodoCount() {
    return id * 2
  }
}
```
