import React, { useState, useEffect } from "react";
import HomeContainer from "components/HomeContainer/HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import { RowContainer, MenuContainer, CartContainer} from "components/index"
import { useStateValue } from "context/StateProvider";
import {BigDiv, Section, OutDiv, InDiv, DelitiousFood, MotionDiv} from "./style";

function MainContainer() {
  const [{ foodItems, cartShow }, dispatch] = useStateValue()
  const [scrollValue, setscrollValue] = useState(0)

  useEffect(() => { }, [scrollValue])

  return (
    <BigDiv>
      <HomeContainer />

      <Section>
        <OutDiv>
          <DelitiousFood>Our delitious food</DelitiousFood>
          
          <InDiv >
            <MotionDiv onClick={() => setscrollValue(-200)} whileTap={{ scale: 0.75 }}>
              <MdChevronLeft className="text-lg text-white"></MdChevronLeft>
            </MotionDiv>
            <MotionDiv onClick={() => setscrollValue(200)} whileTap={{ scale: 0.75 }}>
              <MdChevronRight className="text-lg text-white"></MdChevronRight>
            </MotionDiv>
          </InDiv>

        </OutDiv>

        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter(n => n.category === "chicken")} />
      </Section>

      <MenuContainer />
      {cartShow && (<CartContainer />)}

    </BigDiv>
  );
}

export default MainContainer;
