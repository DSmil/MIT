import React, { useEffect } from 'react';
import {
	BigContainer,
	MainContainer,
	PriceDiv,
	Price,
	Accepts,
	Declines,
	DivWrapper,
	Div1,
	Div2,
	TitleDiv,
	Title,
	NameDiv,
	NameOfUser,
	DescrDiv,
	DescrOfRequest,
} from './style';
import { useStateValue } from 'context/StateProvider';
import { RequestedCardItems } from 'components';
import {
	getAllDeclinedData,
	getAllAcceptedData,
} from 'utils/firebaseFunctions';
import { actionType } from 'context/reducer';
import { fetchUser } from 'utils/fetchLocalStorageData';

const UserRequests = () => {
	const [{ declinedDevices, acceptedDevices }, dispatch] = useStateValue();
	const userInfo = fetchUser();
	const fetchData = async () => {
		await getAllDeclinedData(userInfo.uid).then((data) => {
			dispatch({
				type: actionType.SET_DECLINED_ITEMS,
				declinedDevices: data,
			});
		});

		await getAllAcceptedData(userInfo.uid).then((data) => {
			dispatch({
				type: actionType.SET_ACCEPTED_ITEMS,
				acceptedDevices: data,
			});
		});
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<BigContainer>
			<MainContainer>
				<TitleDiv>
					<Title>Results from requests</Title>
				</TitleDiv>

				<DivWrapper>
					<Accepts>
						<TitleDiv>
							<Title>Accepted</Title>
						</TitleDiv>
						{acceptedDevices && acceptedDevices.map((device) => {
							return <RequestedCardItems device={device} />;
						})}
					</Accepts>

					<Declines>
						<TitleDiv>
							<Title>Declined</Title>
						</TitleDiv>
						{declinedDevices && declinedDevices.map((device) => {
							return <RequestedCardItems device={device} />;
						})}
					</Declines>
				</DivWrapper>
			</MainContainer>
		</BigContainer>
	);
};

export default UserRequests;
