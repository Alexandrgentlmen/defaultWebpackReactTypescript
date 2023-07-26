interface IHomeTask2 {
	data: string;
	numbericData: number;
	date: Date;
	externalData: {
		basis: number;
		value: string;
	}
};

type MyPartial<T> = {
	[N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

const homeTask2: MyPartial<IHomeTask2> = {
	externalData: {
		value: 'win'
	}
}