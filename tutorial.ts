function sum(x: number, y: number): number {
    return x + y;
}

function sumArray(array: number[]): number {
    return array.reduce((a: number, b: number) => a + b, 0);
}

interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    constructor(public radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

interface Person {
    name: string;
    age?: number;
}

interface Developer extends Person {
    skills: string[];
}

const person: Person = {
    name: 'John',
    age: 20
};

const expert: Developer = {
    name: 'Smith',
    skills: [ 'Javascript', 'Typescript' ]
};

type Person2 = {
    name: string,
    age?: number
};

type Developer2 = Person & {
    skills: string[];
};

type People = Person[];
type Color = 'Red' | 'Green' | 'Blue';
type Colors = Color[];

const person2: Person = {
    name: 'John',
};

const expert2: Developer2 = {
    name: 'Smith',
    skills: [ 'Typescript' ]
};

const color: Color = 'Red';
const colors: Colors = [ 'Red', 'Green', 'Blue' ];

function merge<A, B>(a: A, b: B): A & B {
    return {
        ...a,
        ...b
    }
}

function warp<T>(param: T) {
    return {
        param
    }
}

interface Items<T> {
    list: T[]
}

type Items2<T> = {
    list: T[]
}

const items: Items<string> = {
    list: ['a', 'b', 'c']
}

const items2: Items2<string> = {
    list: ['a', 'b']
}

class Queue<T> {
    constructor(private list: T[] = []) {}

    get length(): number {
        return this.list.length;
    }

    enqueue(item: T) {
        this.list.push(item);
    }

    dequeue(): T | undefined {
        return this.list.shift();
    }
}

let count: number | null = null;

count = count ?? 10;
console.log(count);

console.log(person);
console.log(expert);

console.log(person2);
console.log(expert2);

console.log(color);
console.log(colors);

console.log(merge({ foo: 1 }, { bar: 1 }));
console.log(warp(3));

console.log(items);
console.log(items2);

console.log(new Circle(5).getArea());
console.log(new Rectangle(5, 10).getArea());

console.log(sum(1, 5));
console.log(sumArray([1, 2, 3, 4, 5]));

const queue: Queue<number> = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.length);