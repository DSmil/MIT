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
	PriceDiv,
	Price,
	TextDiv,
	ImageDiv,
	Image,
} from './style';

const RequestedCardItems = ({ device, acceptItem, declineItem }) => {
	return (
		<Div1>
			<ImageDiv>
				<Image
					src={device?.imageURL}
					alt=''
				/>
			</ImageDiv>
			<TextDiv>
				<NameDiv>
					<NameOfUser>{device.title}</NameOfUser>
				</NameDiv>
				<DescrDiv>
					<DescrOfRequest>{device.description}</DescrOfRequest>
				</DescrDiv>
				<PriceDiv>
					<Price>{device.price}</Price>
				</PriceDiv>
				{acceptItem && declineItem && (
					<ButtonContainer>
						<ButtonAccept onClick={() => acceptItem(device)}>
							Accept
						</ButtonAccept>
						<ButtonReject onClick={() => declineItem(device)}>
							Reject
						</ButtonReject>
					</ButtonContainer>
				)}
			</TextDiv>
		</Div1>
	);
};

export default RequestedCardItems;
