declare interface DepCtor{
    new():Dep;
    target: Watcher;
}

declare interface Dep {
    id: number;
    subs: Array<Watcher>;
    addSub: (sub: Watcher) => void;
    removeSub:(sub:Watcher)=> void;
    depend:()=> void;
    notify:() => void;
  }