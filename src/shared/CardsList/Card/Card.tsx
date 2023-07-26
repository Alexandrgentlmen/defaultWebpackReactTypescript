import React from 'react';
import styles from './card.css';
import ControlsCard from './ControlsCard/ControlsCard';
import MenuMiniButton from './MenuMiniButton/MenuMiniButton';
import TextContentCard from './TextContentCard/TextContentCard';



function Card({ keyId }: { keyId: string }) {
	return (
		<li className={styles.card} key={keyId}>
			<TextContentCard />
			<MenuMiniButton />
			<ControlsCard />
		</li >
	);
}
export default Card;