import React, { useState, useEffect } from "react";
import HomeContainer from "components/HomeContainer/HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import { RowContainer } from "components/index";
import { useStateValue } from "context/StateProvider";
import { MenuContainer } from "components/index";
import { CartContainer } from "components/index";
import { MainItemListContainer, MainItemsSection, LeftArrowContainer, LeftArrowIcon, WhiteText, CenterItem, OrderFood, ItemCenter, ClickChange, } from "./style";

function MainContainer() {
  const [{ foodItems, cartShow }, dispatch] = useStateValue()
  const [scrollValue, setscrollValue] = useState(0)

  useEffect(() => { }, [scrollValue])

  return (
    <MainItemListContainer>
      <HomeContainer />

      <MainItemsSection>
        <CenterItem>
          <OrderFood>Our delitious food</OrderFood>

          <ItemCenter>
            <LeftArrowContainer onClick={() => setscrollValue(-200)} whileTap={{ scale: 0.75 }}>
              <LeftArrowIcon><WhiteText></WhiteText></LeftArrowIcon>
            </LeftArrowContainer>
            <ClickChange onClick={() => setscrollValue(200)} whileTap={{ scale: 0.75 }}>
              <MdChevronRight><WhiteText></WhiteText></MdChevronRight>
            </ClickChange>
          </ItemCenter>

        </CenterItem>

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
