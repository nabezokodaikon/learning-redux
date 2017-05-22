# Resux study
## Links
* [Offical](http://redux.js.org/)

## State shape
```
{
 visibilityFilter: "SHOW_ALL",
 todos: [
   {
     id: 0,
     text: "Consider using Redux",
     complete: true
   },
   {
     id: 1,
     text: "Keep all state in a single tree",
     complete: false
   }
 ]
}
```

## TODO
* 現在、`container`と`component`が相互に参照しているため、
どちらか一方向でのみ参照するようにできるか考える。
* 現在の`id`をReduxの`store`で管理せず、`index.js`内で保持しているため、`store`で管理するようにする。
* `reducers`内の関数は純粋関数であるため、テストコードを実装する。
