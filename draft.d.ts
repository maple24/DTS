// interface GenericIdentityFn {
//     <Type>(arg: Type): Type;
// }

declare function getArrayLength(arr: any[]): number;


// type DescribableFunction = {
//     description: string;
//     (someArg: number): boolean;
//     isAcceptable(s: string): boolean;
// };

interface Person {
    name: string;
}

interface Person {
    age: number;
}
