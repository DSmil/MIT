import React, { useState } from 'react';
import { FaRegListAlt } from 'react-icons/fa';
import { categories } from 'utils/data';
import { RowContainer } from 'components/index';
import { useStateValue } from 'context/StateProvider';
import {
	StyledCategoryText,
	CategoryCircle,
	CategoryContainer,
	StyledCategoryTextContainer,
	ScrolliDiv,
	MakesP,
	OuterContainer,
	SectionWrapper,
  StyledIcon,
} from './style.js';

function MenuContainer() {
	const [filter, setfilter] = useState('television-home-theater');

	const [{ acceptedDevices }, dispatch] = useStateValue();
	const [isHovered, setIsHovered] = useState(null);

	return (
		<SectionWrapper id='menu'>
			<OuterContainer>
				<MakesP> Our Categories</MakesP>

				<ScrolliDiv>
					{categories &&
						categories.map((category) => (
							<CategoryContainer
								whileTap={{ scale: 0.75 }}
								key={category.id}
								active={filter === category.urlParamName}
								onMouseEnter={() => setIsHovered(category.urlParamName)}
								onMouseLeave={() => setIsHovered(null)}
								onClick={() => setfilter(category.urlParamName)}
							>
								<CategoryCircle active={filter === category.urlParamName} hovered={isHovered === category.urlParamName}>
									<StyledIcon active={filter === category.urlParamName}  hovered={isHovered === category.urlParamName}
									/>
								</CategoryCircle>
								<StyledCategoryTextContainer>
									<StyledCategoryText
										active={filter === category.urlParamName}
                    hovered={isHovered === category.urlParamName}
									>
										{category.name}
									</StyledCategoryText>
								</StyledCategoryTextContainer>
							</CategoryContainer>
						))}
				</ScrolliDiv>

				<div className='sectionn'>
					<RowContainer
						flag={false}
						data={acceptedDevices?.filter((n) => n.category === filter)}
					/>
				</div>
			</OuterContainer>
		</SectionWrapper>
	);
}

export default MenuContainer;
