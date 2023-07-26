import React from 'react';
import './main.global.css'
import { hot } from 'react-hot-loader/root';
import Layout from './shared/Layout/Layout';
import Header from './shared/Header/Header';
import Content from './shared/Content/Content';
import CardsList from './shared/CardsList/CardsList';
import { generateId } from './shared/utils/react/generateRandomIndex';

// import generateRandomString from '../src/shared/utils/react/generateRandomIndex'

const LIST = [
	{ value: 'some 1' },
	{ value: 'some 2' },
	{ value: 'some 3' },
].map(generateId)

function AppComponent() {
	return (
		<Layout>
			<Header />
			<Content>
				<CardsList list={LIST} />
			</Content>
		</Layout>
	)
}
export const App = hot(AppComponent);