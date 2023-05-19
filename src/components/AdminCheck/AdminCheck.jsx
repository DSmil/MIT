import React, { useState } from 'react';
import { useStateValue } from 'context/StateProvider';
import { BigContainer, MainContainer, TitleDiv, Title } from './style';
import { RequestedCardItems } from 'components';
import {
	acceptItem,
	declineItem,
	getAllRequestedData,
} from 'utils/firebaseFunctions';
import { MotionP } from 'components/CreateContainer/style';
import { actionType } from 'context/reducer';

const AdminCheck = () => {
	const [{ requestedDevices }, dispatch] = useStateValue();
	const [banner, setBanner] = useState(false);
	const [alertStatus, setAlertStatus] = useState('danger');
	const [msg, setMsg] = useState(null);

    const acceptItemFunc = async (device) => {
        try {
            const data = {
                id: device?.id,
                title: device?.title,
                imageURL: device?.imageURL,
                category: device?.category,
                description: device?.description,
                qty: 1,
                price: device?.price,
                userId: device?.userId,
            };
            await acceptItem(data);  
            setBanner(true);
            setMsg('Item accepted');
            setAlertStatus('success');
            fetchData()
            setTimeout(() => {
                setBanner(false);
            }, 4000);
            dispatch({type: 'UPDATE_REQUESTED_DEVICES'});
        } catch (error) {}
    };

    const declineItemFunc = async (device) => {
        try {
            const data = {
                id: device?.id,
                title: device?.title,
                imageURL: device?.imageURL,
                category: device?.category,
                description: device?.description,
                qty: 1,
                price: device?.price,
                userId: device?.userId,
            };
            await declineItem(data);  
            setBanner(true);
            setMsg('Item declined');
            setAlertStatus('danger');
            fetchData()
            setTimeout(() => {
                setBanner(false);
            }, 4000);
            dispatch({type: 'UPDATE_REQUESTED_DEVICES'});
        } catch (error) {}
    };

	const fetchData = async () => {
		await getAllRequestedData().then((data) => {
			dispatch({
				type: actionType.SET_REQUESTED_ITEMS,
				requestedDevices: data,
			});
		});
	};

	return (
		<BigContainer>
			<MainContainer>
				{banner && (
					<MotionP
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						{msg}
					</MotionP>
				)}
				<TitleDiv>
					<Title>Results from requests</Title>
				</TitleDiv>
				{requestedDevices.map((device) => {
					return (
						<RequestedCardItems
							device={device}
                            acceptItem={acceptItemFunc}
                            declineItem={declineItemFunc}
						/>
					);
				})}
			</MainContainer>
		</BigContainer>
	);
};

export default AdminCheck;
