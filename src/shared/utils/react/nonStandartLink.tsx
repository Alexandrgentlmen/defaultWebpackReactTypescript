import React from "react";


function NotStandartLink(props: any) {
	// const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// 	props.onClick();
	// }
	return (
		<a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
	)
}

export function preventDefault<T extends (e: any) => void>(fn: T) {
	return <E extends React.SyntheticEvent<any>>(e: E) => {
		e.preventDefault();
		fn(e);
	}
}

export function stopPropagation<T extends (e: any) => void>(fn: T) {
	return <E extends React.SyntheticEvent<any>>(e: E) => {
		e.stopPropagation();
		fn(e);
	}
}

export default NotStandartLink;

