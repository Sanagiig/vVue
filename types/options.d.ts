declare type InternalComponentOptions = {
    _isComponent: true;
    parent: Component;
    _parentVnode: VNode;
    render?: Function;
    staticRenderFns?: Array<Function>
  };
  
  type InjectKey = string | Symbol;
  
declare type ComponentOptions = {
    componentId?: string;
  
    // data
    data: Obj | Function | void;
    props?: { [key: string]: PropOptions };
    propsData?: any;
    computed?: {
      [key: string]: Function | {
        get?: Function;
        set?: Function;
        cache?: boolean
      }
    };
    methods?: { [key: string]: Function };
    watch?: { [key: string]: Function | string };
  
    // DOM
    el?: string | Element;
    template?: string;
    render: (h: () => VNode) => VNode;
    renderError?: (h: () => VNode, err: Error) => VNode;
    staticRenderFns?: Array<() => VNode>;
  
    // lifecycle
    beforeCreate?: Function;
    created?: Function;
    beforeMount?: Function;
    mounted?: Function;
    beforeUpdate?: Function;
    updated?: Function;
    activated?: Function;
    deactivated?: Function;
    beforeDestroy?: Function;
    destroyed?: Function;
    errorCaptured?: () => boolean | void;
    ssrPrefetch?: Function;
  
    // assets
    directives?: { [key: string]: Object };
    components?: { [key: string]: ComponentCtor };
    transitions?: { [key: string]: Object };
    filters?: { [key: string]: Function };
  
    // context
    provide?: () => { [key: string ]: any } | { [key: string ]: any };
    inject?: { [key: string]: InjectKey | { from?: InjectKey, default?: any }} | Array<string>;
  
    // component v-model customization
    model?: {
      prop?: string;
      event?: string;
    };
  
    // misc
    parent?: Component;
    mixins?: Array<Object>;
    name?: string;
    extends?: ComponentCtor | Object;
    delimiters?: [string, string];
    comments?: boolean;
    inheritAttrs?: boolean;
  
    // private
    _isComponent?: true;
    _propKeys?: string[];
    _parentVnode?: VNode | void;
    _parentListeners?: Object;
    _renderChildren?: VNode[];
    _componentTag: string;
    _scopeId: string;
    _base: ComponentCtor;
  };
  
  declare type PropOptions = {
    type: Function | Array<Function> | null;
    default: any;
    required: boolean;
    validator: Function;
  }
  