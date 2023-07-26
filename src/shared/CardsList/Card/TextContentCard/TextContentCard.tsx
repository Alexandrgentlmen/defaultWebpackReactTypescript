import React from 'react';
import styles from './textcontentcard.css';

function TextContentCard() {
	return (
		<>
			<div className={styles.textContent}>
				<div className={styles.metaData}>
					<div className={styles.userLink}>
						<img src="https://cdn.dribbble.com/users/2069174/avatars/normal/data?1515493544" alt="ava" className={styles.avatar} />
						<a href="#user-url" className={styles.username}>Maria Gerasimova</a>
					</div>
					<span className={styles.createdAt}>
						<span className={styles.publishedLabel}>опубликовано </span>
						4 часа назад
					</span>
				</div>
				<h2 className={styles.title}>
					<a href="#post-url" className={styles.postLinks}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, unde!
					</a>
				</h2>
			</div>
			<div className={styles.preview}>
				<img
					className={styles.previewImg}
					src="https://cdn.dribbble.com/users/2069174/screenshots/15302392/media/298b37c492f5d42e960c22e06f9c0b8e.jpg?compress=1&resize=1600x1200&vertical=top" />
			</div>
		</>
	);
}

export default TextContentCard;