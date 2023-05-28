export const actionType = {
	SET_USER: 'SET_USER',
	SET_DEVICE_ITEMS: 'SET_DEVICE_ITEMS',
	SET_CART_SHOW: 'SET_CART_SHOW',
	SET_CARTITEMS: 'CARTITEMS',
	SET_REQUESTED_ITEMS: 'SET_REQUESTED_ITEMS',
	SET_ACCEPTED_ITEMS: 'SET_ACCEPTED_ITEMS',
	SET_DECLINED_ITEMS: 'SET_DECLINED_ITEMS',
	SET_ALL_ACCEPTED_ITEMS: 'SET_ALL_ACCEPTED_ITEMS',
};

const reducer = (state, action) => {
	switch (action.type) {
		case actionType.SET_USER:
			return {
				...state,
				user: action.user,
			};

		case actionType.SET_DEVICE_ITEMS:
			return {
				...state,
				deviceItems: action.deviceItems,
			};
		case actionType.SET_CART_SHOW:
			return {
				...state,
				cartShow: action.cartShow,
			};
		case actionType.SET_CARTITEMS:
			return {
				...state,
				cartItems: action.cartItems,
			};
		case actionType.SET_REQUESTED_ITEMS:
			return {
				...state,
				requestedDevices: action.requestedDevices,
			};
		case actionType.SET_ACCEPTED_ITEMS:
			return {
				...state,
				acceptedDevices: action.acceptedDevices,
			};
		case actionType.SET_DECLINED_ITEMS:
			return {
				...state,
				declinedDevices: action.declinedDevices,
			};
		case actionType.SET_ALL_ACCEPTED_ITEMS:
			return {
				...state,
				allAcceptedDevices: action.allAcceptedDevices,
			};
		default:
			return state;
	}
};

export default reducer;
