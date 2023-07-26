class Constructor {
	public field: number = 123;
	private privateField: number = 123;

	public constructor(arg: number) {
		this.field = arg;
	}

	public publicMethod(): number {
		return this.field
	}

	protected protectedMethod(): number {
		return this.field + 10;
	}

	private privateMethod(): number {
		return this.field + 30;
	}
}

const instance = new Constructor(123);

class Child extends Constructor {
	public childMethod() {
	}

	public protectedMethod(): number {
		return super.protectedMethod();
	}

	public publicMethod(): number {
		return super.publicMethod();
	}
}

abstract class AbstractClass {

	public abstract abstractField: number;

	public abstract abstractMethod(): number;

	protected protectedMethod() {
		return this.abstractField;
	}
}

class NewChild extends AbstractClass {

	public abstractField: number = 123;

	public abstractMethod(): number {
		return this.protectedMethod();
	}
}

interface MyInterface {
	field: string;
	method(): string;
}

class NewClass implements MyInterface {

	public field: string = '1234';

	public method(): string {
		return '';
	}
}