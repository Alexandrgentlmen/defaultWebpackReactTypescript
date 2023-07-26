import { assoc } from "../js/assoc";

export const generateRandomString = (): string => {
	return Math.random().toString(36).substring(2, 15);
}

// export const assignId = assoc('id', generateRandomString());

export const generateId = <O extends object>(obj: O): O & { id: string } => {
	return assoc('id', generateRandomString())(obj) as O & { id: string };
}

