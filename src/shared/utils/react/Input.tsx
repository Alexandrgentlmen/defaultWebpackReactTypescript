import { getValue } from "./pickFromSyntheticEvent";
import React from "react";
import { preventDefault, stopPropagation } from "./nonStandartLink";

interface InputProps {
	onChange: (value: string) => void;
	value: string;
}

function Input({ value, onChange }: InputProps) {
	return (
		<input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />
	)
}

export default Input;