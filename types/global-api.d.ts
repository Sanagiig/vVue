declare interface GlobalAPI {
    cid: number;
    options: any;
    config: Config;
    util: any;
  
    extend: (options: any) => Function;
    set: <T>(target: any | Array<T>, key: string | number, value: T) => T;
    delete: <T>(target: any| Array<T>, key: string | number) => void;
    nextTick: (fn: Function, context?: any) => void | Promise<any>;
    use: (plugin: Function | any) => GlobalAPI;
    mixin: (mixin: any) => GlobalAPI;
    compile: (template: string) => { render: Function, staticRenderFns: Array<Function> };
  
    directive: (id: string, def?: Function | any) => Function | any | void;
    component: (id: string, def?: ComponentCtor | any) => ComponentCtor;
    filter: (id: string, def?: Function) => Function | void;
  
    observable: <T>(value: T) => T;
  
    // allow dynamic method registration
    [key: string]: any
  }