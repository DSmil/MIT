import React, { useState, useEffect } from "react";
import HomeContainer from "components/HomeContainer/HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import { RowContainer } from "components/index";
import { useStateValue } from "context/StateProvider";
import { MenuContainer } from "components/index";
import { CartContainer } from "components/index";
import { MainItemListContainer, MainItemsSection, LeftArrowContainer, LeftArrowIcon } from "./style";

function MainContainer() {
  const [{ foodItems, cartShow }, dispatch] = useStateValue()
  const [scrollValue, setscrollValue] = useState(0)

  useEffect(() => { }, [scrollValue])

  return (
    <MainItemListContainer>
      <HomeContainer />

      <MainItemsSection>
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg
          before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">Our delitious food</p>

          <div className="hidden md:flex gap-3 felx item-center">
            <LeftArrowContainer onClick={() => setscrollValue(-200)} whileTap={{ scale: 0.75 }}>
              <LeftArrowIcon className="text-lg text-white"></LeftArrowIcon>
            </LeftArrowContainer>
            <motion.div onClick={() => setscrollValue(200)} whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer flex items-center justify-center">
              <MdChevronRight className="text-lg text-white"></MdChevronRight>
            </motion.div>
          </div>

        </div>

        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter(n => n.category === "chicken")} />
      </MainItemsSection>

      <MenuContainer />
      {cartShow && (<CartContainer />)}

    </MainItemListContainer>
  );
}

export default MainContainer;
