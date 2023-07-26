import React from 'react';
import Card from './Card/Card';

import styles from './cardslist.css';

interface IItem {
	value: string;
	id: string;
}

interface IMyListProps {
	list: IItem[];
}

function CardsList({ list }: IMyListProps) {
	return (
		<ul className={styles.cardsList}>
			{list.map((item) => (
				<Card keyId={item.id} />
			))}

		</ul>
	);
}
export default CardsList;