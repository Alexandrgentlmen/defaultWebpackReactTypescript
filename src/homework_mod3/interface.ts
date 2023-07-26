const myHometask: IHomeTask = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

interface IHomeTask {
	howIDoIt: string;
	simeArray: (string | number)[];
	withData: { [N: string]: string | (string | number)[] }[];
}