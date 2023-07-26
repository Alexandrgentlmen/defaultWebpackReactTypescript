
import styles from '../Layout/layout.css';
import React from 'react';

interface ILayoutProps {
	children?: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
	return (
		<div className={styles.layout}>
			{children}
		</div>
	);
}

export default Layout;