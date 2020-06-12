"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function sum(x, y) {
    return x + y;
}
function sumArray(array) {
    return array.reduce(function (a, b) { return a + b; }, 0);
}
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var person = {
    name: 'John',
    age: 20
};
var expert = {
    name: 'Smith',
    skills: ['Javascript', 'Typescript']
};
var person2 = {
    name: 'John',
};
var expert2 = {
    name: 'Smith',
    skills: ['Typescript']
};
var color = 'Red';
var colors = ['Red', 'Green', 'Blue'];
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
function warp(param) {
    return {
        param: param
    };
}
var items = {
    list: ['a', 'b', 'c']
};
var items2 = {
    list: ['a', 'b']
};
var Queue = /** @class */ (function () {
    function Queue(list) {
        if (list === void 0) { list = []; }
        this.list = list;
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var count = null;
count = count !== null && count !== void 0 ? count : 10;
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
var queue = new Queue();
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
