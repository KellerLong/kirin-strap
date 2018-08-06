import React from 'react';

export default React;

export declare function SSR(constructor: Function): void;

export declare function Component(constructor: Function): void;

export declare function ComponentLess(constructor: Function): void;
export declare function Model(modelPath: string): (a, b) => void;
export declare function Route(path: string): (constructor: Function) => void;

export declare  const Dva: any;
export declare  const Router: any;
export declare  const Dynamic: any;
