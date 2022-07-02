declare module '*.yaml' {
  interface Colmn {
    name: string;
    values: string[];
  }
  interface Root {
    colmns: Colmn[];
  }
  const conf: Root
  export default conf;
}
declare module '*.yml' {
  const value: Record<string, any>;
  export default value;
}
