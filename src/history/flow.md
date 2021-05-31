## history 解读

> 个人认为 history 主要使用了代理模式，自定义个一个自己\_history 代理 window 的 history，有自己维护的数据，如 listeners，blocks。
> 代理的主要体现于，操作的入口为\_history,那么在设计的时候，可以自定义自己的数据结构，如 Location 对象。代理的好处在于可以拦截
> 原生方法的操作，history 使用的模式如下，以 push 带 pushState 为例：
>
> >

```ts
function push(to: To, state?: State) {
  // 处理to和state， 获取Location对象的实例
  // 若有blocker,执行,执行后可以重新发起push
  // blocker执行完毕,执行pushState
  // 最后执行listener
}
```

> > \_history 的三个核心方法 hendlePop(代理 popstate), push(代理 pushState), replace(replaceState) 均采用了类似的机构
> > \_history,通过 block 和 listen 接口，分别设置 blockers 和 listeners
>
> #### createBrowserHistory
>
> #### createHashHistory
>
> > 多一个 hashchange 事件
>
> #### createMemoryHistory
>
> > 需要多维护一个变量 entries，用于维护 Location 栈
> > 需要多实现基于 entries 的 go 函数
