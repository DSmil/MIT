import React, { useEffect, useRef, useState } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import NotFound from 'assets/img/NotFound.svg';
import { useStateValue } from 'context/StateProvider';
import { actionType } from 'context/reducer';
import { PopUp } from 'components';
import {
	RowCont,
	GetItems,
	ItemCont,
	Motion,
	Image,
	CartSymbol,
	TextNotAvailable,
	ImageNotAvailable,
	ContNotAvailable,
	TextCont,
	Title,
	PriceSpan,
	Price,
	PriceCont,
	Calories,
	PopupTitle,
	PopupDescription,
	PopupPrice,
	PopupContent,
    PopupImage
} from './style';
import { Item } from 'components/CartItem/style';

function RowContainer({ flag, data, scrollValue }) {
	const [isOpen, setIsOpen] = useState(false);

	const rowContainer = useRef();

	const [items, setitems] = useState([]);

	const [openedItem, setOpenedItem] = useState();

	const [{ cartItems }, dispatch] = useStateValue();

	const OpenPopUp = (cardItems) => {
		setIsOpen(true);
		setOpenedItem(cardItems);
	};

	const ClosePopUp = () => {
		setIsOpen(false);
	};

	const addToCart = () => {
		dispatch({
			type: actionType.SET_CARTITEMS,
			cartItems: items,
		});
		localStorage.setItem('cartItems', JSON.stringify(items));
	};

	useEffect(() => {
		rowContainer.current.scrollLeft += scrollValue;
	}, [scrollValue]);

	useEffect(() => {
		addToCart();
	}, [items]);
	return (
		<RowCont ref={rowContainer}>
			{data && data.length > 0 ? (
				data.map((item) => (
					<ItemCont key={item.id}>
						<GetItems>
							<Motion
								whileHover={{ scale: 1.2 }}
								onClick={() => OpenPopUp(item)}
							>
								<Image
									src={item?.imageURL}
									alt=''
								/>
							</Motion>
							<CartSymbol
								whileTap={{ scale: 0.75 }}
								onClick={() => setitems([...cartItems, item])}
							>
								<MdShoppingBasket className='text-white' />
							</CartSymbol>
						</GetItems>

						<TextCont>
							<Title>{item?.title}</Title>
							<PriceCont>
								<Price>
									{item?.price}
									<PriceSpan> €.</PriceSpan>
								</Price>
							</PriceCont>
						</TextCont>
					</ItemCont>
				))
			) : (
				<ContNotAvailable>
					<ImageNotAvailable src={NotFound} />
					<TextNotAvailable>Items Not Available</TextNotAvailable>
				</ContNotAvailable>
			)}
			<div>
				<PopUp
					isOpen={isOpen}
					onClose={ClosePopUp}
				>
					<PopupContent>
						<PopupImage src={openedItem?.imageURL} />
						<div>
							<PopupTitle>{openedItem?.title}</PopupTitle>
							<PopupDescription>{openedItem?.description}</PopupDescription>
							<PopupPrice>{openedItem?.price} €</PopupPrice>
						</div>
					</PopupContent>
				</PopUp>
			</div>
		</RowCont>
	);
}

export default RowContainer;
