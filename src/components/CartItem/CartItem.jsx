import React, { useState, useEffect } from 'react'
import { BiMinus, BiPlus } from "react-icons/bi"
import { motion } from "framer-motion"
import { useStateValue } from "context/StateProvider";
import { actionType } from 'context/reducer';
import {Item, Image, ItemNameDiv, ItemName, ItemPrice, ButtonDiv, NumberPlusMinus} from "./style";
let items = []

const CartItem = ({ item, setFlag, flag }) => {
    const [{ cartItems }, dispatch] = useStateValue();
    const [qty, setQty] = useState(item.qty);

    const cartDispatch = () => {
        localStorage.setItem("cartItems", JSON.stringify(items));
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: items,
        });
    };

    const updateQty = (action, id) => {
        if (action === "add") {
            setQty(qty + 1);
            cartItems.map((item) => {
                if (item.id === id) {
                    item.qty += 1;
                    setFlag(flag + 1);
                }
            });
            cartDispatch();
        } else {
            // initial state value is one so you need to check if 1 then remove it
            if (qty === 1) {
                items = cartItems.filter((item) => item.id !== id);
                setFlag(flag + 1);
                cartDispatch();
            } else {
                setQty(qty - 1);
                cartItems.map((item) => {
                    if (item.id === id) {
                        item.qty -= 1;
                        setFlag(flag + 1);
                    }
                });
                cartDispatch();
            }
        }
    };

    useEffect(() => {
        items = cartItems;
    }, [qty, items]);

    return (
        <Item>
            <Image
                src={item?.imageURL}
                alt=""
            />

            {/* name section */}
            <ItemNameDiv>
                <ItemName>{item?.title}</ItemName>
                <ItemPrice>
                    {parseFloat(item?.price) * qty} den.
                </ItemPrice>
            </ItemNameDiv>

            {/* button section */}
            <ButtonDiv>
                <motion.div
                    whileTap={{ scale: 0.75 }}
                    onClick={() => updateQty("remove", item?.id)}
                >
                    <BiMinus className="text-gray-50 " />
                </motion.div>

                <NumberPlusMinus>
                    {qty}
                </NumberPlusMinus>

                <motion.div
                    whileTap={{ scale: 0.75 }}
                    onClick={() => updateQty("add", item?.id)}
                >
                    <BiPlus className="text-gray-50 " />
                </motion.div>
            </ButtonDiv>
        </Item>
    );
};

export default CartItem;