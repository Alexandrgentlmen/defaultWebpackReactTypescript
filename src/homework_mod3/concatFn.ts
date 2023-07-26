type concatFnType = (a: string, b: string) => string;

export const concatFn: concatFnType = (wordOne, wordTwo) => {
	return wordOne + wordTwo;
}
