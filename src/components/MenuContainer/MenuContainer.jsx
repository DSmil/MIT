import React, { useState } from 'react';
import { IoFastFood } from 'react-icons/io5';
import { categories } from 'utils/data';
import { motion } from "framer-motion";
import { RowContainer } from "components/index";
import { useStateValue } from 'context/StateProvider';
import {Outersection, Outerdiv, HotDish, PositioningItems, WhenClicked, HoverText, Categorys, DivofRowContainer} from './style';

function MenuContainer() {

    const [filter, setfilter] = useState("chicken")

    const [{ foodItems }, dispatch] = useStateValue()

    return (
        <Outersection id="Menu">
            <Outerdiv>
                <HotDish>Our Hot Dishes</HotDish>

                <PositioningItems>
                    {categories && categories.map((category) => (
                        <WhenClicked whileTap={{ scale: 0.75 }} key={category.id} filter={filter === category.urlParamName} onClick={() => setfilter(category.urlParamName)}>
                            <HoverText filter={filter === category.urlParamName}>
                                <IoFastFood
                                    className={`${filter === category.urlParamName ? 'text-textColor' : 'text-white'} group-hover:text-textColor text-lg`}
                                />
                            </HoverText>
                            <Categorys className={`text-sm ${filter === category.urlParamName ? 'text-white' : 'text-textColor'}`}>{category.name}</Categorys>
                        </WhenClicked>
                    ))}
                </PositioningItems>

                <DivofRowContainer>
                    {/*react comment*/}
                    <RowContainer flag={false} data={foodItems?.filter(n => n.category === filter)} />
                </DivofRowContainer>
            </Outerdiv>
        </Outersection >
    )
}

export default MenuContainer