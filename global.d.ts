declare module '*.css' {
    const exports: { [exportName: string]: string };
    export = exports;
}

declare module '*.scss' {
    const exports: { [exportName: string]: string };
    export = exports;
}