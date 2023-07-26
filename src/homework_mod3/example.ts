const str = 'string';
const num = 2;
const nan = NaN;
const obj = {};
const arr = [];
const nul = null;
const sym = Symbol();
const und = undefined;
const _void = void 0;
const bool = true;
const fn = () => { };

let tsStr: string = 'asd';

function sumTS(arr: number[]) {
	return arr.reduce((a: number, v: number) => a + v)
}

const tsNumber = 2;
const tsString = 'str';


const res = tsString + tsNumber;
const resTwo = parseInt(tsString) - tsNumber;

if (typeof tsString === 'number') {
	const resTwo = tsString - tsNumber;
}
// Union type
const strOrNumber: string | number = "2";

// Type alias
type StrOrNumber = string | number;

const strOrNumber1: StrOrNumber = "2";
const strOrNumber2: StrOrNumber = "3";

type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol;


// Array
// const tsArray: number[] = [1, 2, 3, 's'];
const tsArrayGeneric: Array<number> = [];

// union type

const unionArray: (string | number)[] = [1, 3, '4'];
const unionArray2: Array<string | number> = [1, 3, '4'];

// помимо массивов бесконечной длинны TS вводит ещё один тип Tuple - масств фиксированной длинны
// Tuple 
const myTuple: [number, string] = [1, '2'];

// ошибка фиксировааной длинны
// const val = myTuple[1000];

type StrangeTsTypes = any | unknown | never;

// Object	

type MyObjType = { a: number, b: string }
// const myObj: MyObjType = { a: 1, b: '2' };

interface MyFirstInterface {
	readonly a: number;
	readonly b: string;
	c?: number[];
	e: number | undefined;
}
// при такой записи е- надо обязательно задекларировать =undefined;
// optional type : c?: number[];
const myObj2: MyFirstInterface = {
	a: 2,
	b: '123',
	c: [1],
	e: undefined,
}

// const myObj.a = 4;
// const value = myObj.key;
// const value2 = myObj.b;

// api
const ApiAnswer: IndexInterface = { key: 'asd', key2: "asd" };
const val3 = ApiAnswer.randomkey;
interface IndexInterface {
	[N: string]: string;
}

// function

enum Methods {
	add = 'add',
	sub = 'sub',
}

// enum Methods {
// 	add = 1,
// 	sub = 2,
// 	div = 3,
//  N...4
// }


// пишем типы для арг. и для возвращаемого значения 
function calc(method: Methods, left: number, right: number): number {
	switch (method) {
		case Methods.add: return left + right;
		case Methods.sub: return left - right;
	}
}

// Удобство
// Methods.add -> 0
// 

// тип функции: 
// type alias

type TypeFn = () => number;
const ArrowFnAlias: TypeFn = () => {
	return 2;
}

const ArrowFnInter: FnInterface = (a) => {
	return 'str';
}


interface FnInterface {
	(a: string | number): void
}
