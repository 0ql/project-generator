declare module '*.yaml' {
  export default conf;
}

declare module '*.yml' {
  export interface Root {
    colmns: Colmn[];
  }

  export interface Colmn {
    name: string;
    values: Array<Projects | string>;
  }

  export interface Projects {
    name: string;
    link: string;
  }
  const value: Root;
  export default value;
}
