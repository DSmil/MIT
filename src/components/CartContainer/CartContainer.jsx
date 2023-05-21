import React, { useState, useEffect } from 'react'
import { MdOutlineKeyboardBackspace } from "react-icons/md"
import { motion } from "framer-motion"
import { RiRefreshFill } from "react-icons/ri"
import { actionType } from "context/reducer";
import { useStateValue } from "context/StateProvider";
import EmptyCart from "assets/img/emptyCart.svg"
import { CartItem } from 'components/index';
import { CartContainerBox, BackspaceIcon, CardHeader, CartText, CartClear, BackgroundSection, CartItemSection, WhenEmptyDiv, WhenEmptyText, CartTotalDiv, TotalDiv, TotalPrice, TotalText, Border, MotionButton2, MotionButton1, DeliveryText, DeliveryPrice, Delivery, SubTotalDiv, SubTotalText, SubTotalPrice} from './style';

const CartContainer = () => {
    const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
    const [flag, setFlag] = useState(1);
    const [tot, setTot] = useState(0);

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    };

    useEffect(() => {
        let totalPrice = cartItems.reduce(function (accumulator, item) {
            return accumulator + item.qty * item.price;
        }, 0);
        setTot(totalPrice);
    }, [tot, flag]);

    const clearCart = () => {
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: [],
        });

        localStorage.setItem("cartItems", JSON.stringify([]));
    };

    return (
        <CartContainerBox
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
        >
            <CardHeader>
                <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
                    <BackspaceIcon />
                </motion.div>
                <CartText>Cart</CartText>

                <CartClear
                    whileTap={{ scale: 0.75 }}
                    onClick={clearCart}
                >
                    Clear <RiRefreshFill />
                </CartClear>
            </CardHeader>

            {/* bottom section */}
            {cartItems && cartItems.length > 0 ? (
                <BackgroundSection>
                    {/* cart Items section */}
                    <CartItemSection>
                        {/* cart Item */}
                        {cartItems &&
                            cartItems.length > 0 &&
                            cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    setFlag={setFlag}
                                    flag={flag}
                                />
                            ))}
                    </CartItemSection>

                    {/* cart total section */}
                    <CartTotalDiv>
                        <SubTotalDiv >
                            <SubTotalText>Sub Total</SubTotalText>
                            <SubTotalPrice>{tot} €.</SubTotalPrice>
                        </SubTotalDiv>
                        <Delivery>
                            <DeliveryText>Delivery</DeliveryText>
                            <DeliveryPrice>10 €.</DeliveryPrice>
                        </Delivery>

                        <Border></Border>

                        <TotalDiv>
                            <TotalText>Total</TotalText>
                            <TotalPrice>
                                {tot + 10} €.
                            </TotalPrice>
                        </TotalDiv>

                        {user ? (
                            <MotionButton1
                                whileTap={{ scale: 0.8 }}
                                type="button"
                            >
                                Check Out
                            </MotionButton1>
                        ) : (
                            <MotionButton2
                                whileTap={{ scale: 0.8 }}
                                type="button"
                            >
                                Login to check out
                            </MotionButton2>
                        )}
                    </CartTotalDiv>
                </BackgroundSection>
            ) : (
                <WhenEmptyDiv>
                    <img src={EmptyCart} className="w-300" alt="" />
                    <WhenEmptyText>
                        Add some items to your cart
                    </WhenEmptyText>
                </WhenEmptyDiv>
            )}
        </CartContainerBox>
    );
};

export default CartContainer;