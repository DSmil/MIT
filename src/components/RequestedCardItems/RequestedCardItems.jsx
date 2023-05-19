import React from 'react';
import {
	Div1,
	NameDiv,
	NameOfUser,
	DescrDiv,
	DescrOfRequest,
	ButtonContainer,
	ButtonAccept,
	ButtonReject,
} from './style';

const RequestedCardItems = ({device, acceptItem, declineItem}) => {
	return (
		<Div1>
			<NameDiv>
				<NameOfUser>{device.title}</NameOfUser>
			</NameDiv>
			<DescrDiv>
				<DescrOfRequest>
					{device.description}
				</DescrOfRequest>
			</DescrDiv>
			<ButtonContainer>
				<ButtonAccept onClick={() => acceptItem(device)}>Accept</ButtonAccept>
				<ButtonReject onClick={() => declineItem(device)}>Reject</ButtonReject>
			</ButtonContainer>
		</Div1>
	);
};

export default RequestedCardItems;
