import React, { useState, useEffect } from "react";
import HomeContainer from "components/HomeContainer/HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import { RowContainer, MenuContainer, CartContainer} from "components/index"
import { useStateValue } from "context/StateProvider";
import {BigDiv, Section, OutDiv, InDiv, DelitiousFood, MotionDiv} from "./style";

const MainContainer = () => {
  const [{ acceptedDevices, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <HomeContainer />

      <MenuContainer />

      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;