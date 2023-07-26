

interface MyInterface {
	field: string;
	method(): string;
}

class INewClass implements MyInterface {

	public field: string = '1234';

	public method(): string {
		return '';
	}
}