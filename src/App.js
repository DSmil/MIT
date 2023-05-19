import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'App.css';
import { AnimatePresence } from 'framer-motion';
import { MainContainer, CreateContainer, Header, AdminCheck } from 'components';
import { useStateValue } from 'context/StateProvider';
import {
	getAllRequestedData,
	getAllAcceptedData,
	getAllDeclinedData,
} from 'utils/firebaseFunctions';
import { actionType } from 'context/reducer';

function App() {
	const [{ deviceItems }, dispatch] = useStateValue();

	const fetchData = async () => {
		await getAllRequestedData().then((data) => {
			dispatch({
				type: actionType.SET_REQUESTED_ITEMS,
				requestedDevices: data,
			});
		});

		await getAllAcceptedData().then((data) => {
			dispatch({
				type: actionType.SET_ACCEPTED_ITEMS,
				acceptedDevices: data,
			});
		});

		await getAllDeclinedData().then((data) => {
			dispatch({
				type: actionType.SET_DECLINED_ITEMS,
				declinedDevices: data,
			});
		});
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<AnimatePresence exitBeforeEnter>
			<div className='w-screen h-auto flex flex-col bg-primary'>
				<Header />

				<main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
					<Routes>
						<Route
							path='/*'
							element={<MainContainer />}
						/>
						<Route
							path='/createItem'
							element={<CreateContainer />}
						/>
						<Route
							path='/admin'
							element={<AdminCheck />}
						/>
					</Routes>
				</main>
			</div>
		</AnimatePresence>
	);
}

export default App;
