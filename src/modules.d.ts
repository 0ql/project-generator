declare module '*.yaml' {
  export default conf;
}

declare module '*.yml' {
  export interface Root {
    colmns: Colmn[];
  }

  export interface Colmn {
    name: string;
    values: Array<string>;
  }

  const value: Root;
  export default value;
}
