declare type Indexable = {
  [key: string]: any;
};

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

declare type TimeoutHandle = ReturnType<typeof setTimeout>;

declare type Nullable<T> = T | null;
