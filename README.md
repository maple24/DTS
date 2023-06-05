## reference
[project configuration](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
[what is a .d.ts file](https://medium.com/@ohansemmanuel/what-is-a-d-ts-file-in-typescript-2e2d90d58eca)

## quick start
```sh
npm run execute
```

## create a simple typescript project
- npm init -y (init project)
- npm install typescript (install typescript)
- npm install @types/node (install DefinitelyTyped)
- tsc --init (Initializes a TypeScript project and creates a tsconfig.json file)

## type declaration files
> name of declaration does not have to be the same with module name
1. Bundled Types
In this case, the author of the library has already bundled the type declaration files as part of the package distribution.

You typically don't need to do anything.

2. DefinitelyTyped (@types)
These type definition files are automatically published to npm under the @types scope.

For example, if you wanted to install the types for the react npm package, you'd do this:
```javascript
npm install --save-dev @types/react
```

## @types/node
This package is used to load in all type definitions when using typescript in node. When you add other packages, you also have to add their typings if they do not include them by default.

As an example, imagine you want to use lodash in your typescript application, you will need to install the type definitions (@types/lodash) too.

## create .d.ts file from .ts
```javascript
tsc example.ts --declaration
```

## declaration files
example.d.ts files are declaration file which will be compiled with example.ts.

## declare vs export
exported types can be imported manually by .ts files, while declared types will be auto imported.