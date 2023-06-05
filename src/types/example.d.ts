declare module 'library-name' {
    export class SomeClass {
        // class definition
    }

    export function someFunction(arg: SomeClass): void;
}
declare function getArrayLength(arr: any[]): number;

interface Person {
    name: string;
}

interface Person {
    age: number;
}


interface Employee {
    salary?: number,
    experience: number
}