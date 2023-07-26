const arrayReduced: SuperArray<number> = [1, 2, 3];

interface SuperArray<T> {

	[N: number]: T;

	reduce<U>(fn: (accumulator: U, el: T, index?: number, arr?: SuperArray<T>) => U, init?: U): SuperArray<U>;

}





arrayReduced.reduce((f: number) => f + 1);
arrayReduced.reduce((f: string) => `f + ${f}`);