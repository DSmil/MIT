import React, { useState, useEffect } from 'react';
import HomeContainer from 'components/HomeContainer/HomeContainer';
import { MenuContainer, CartContainer } from 'components/index';
import { useStateValue } from 'context/StateProvider';
import { MainComponent, Footer } from './style';

const MainContainer = () => {
	const [{ acceptedDevices, cartShow }, dispatch] = useStateValue();
	const [scrollValue, setScrollValue] = useState(0);

	useEffect(() => {}, [scrollValue, cartShow]);

	return (
		<MainComponent>
			<HomeContainer />
			<MenuContainer />

			{cartShow && <CartContainer />}
      <Footer/>
		</MainComponent>
	);
};

export default MainContainer;
