import { React, useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout, MdHome, MdAdminPanelSettings, MdRequestPage } from "react-icons/md";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "firebase.config";
import Logo from "assets/img/logo.png";
import Avatar from "assets/img/avatar.png";
import { Link } from "react-router-dom";
import { useStateValue } from "context/StateProvider";
import { actionType } from "context/reducer";
import { StyledHeader, DesktopContainer, LogoLink, LogoImage, LogoText, BigDiv, List, ListItems, MotionDivCart, DivInsideCart, ParInsideDiv, MotionDivNewItemLogout, NewItemLink, NewItem, AvatarImg, AvatarDiv} from "./style";

function Header() {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

    const [isMenu, setItemMenu] = useState(false);

    const login = async () => {
        if (!user) {
            const {
                user: { refreshToken, providerData },
            } = await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });
            localStorage.setItem("user", JSON.stringify(providerData[0]));
        } else {
            setItemMenu(!isMenu);
        }
    };

    const logout = () => {
        setItemMenu(false);
        localStorage.clear();
        dispatch({
            type: actionType.SET_USER,
            user: null,
        });
    };

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    }
    return (
        <StyledHeader>
            {/* desktop & tablet */}
            <DesktopContainer>
                <LogoLink
                    to={"/"}
                    whileTap={{ scale: 0.6 }}
                >
                    <LogoImage
                        src={Logo}
                        alt="Logo"
                    />
                    <LogoText>Tech Deal</LogoText>
                </LogoLink>

                <BigDiv>
                    

                    <MotionDivCart
                        whileTap={{ scale: 0.6 }}
                        onClick={showCart}
                    >
                        <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer" />
                        {cartItems && cartItems.length > 0 && (
                            <DivInsideCart>
                                <ParInsideDiv>{cartItems.length}</ParInsideDiv>
                            </DivInsideCart>
                        )}
                    </MotionDivCart>

                    <AvatarDiv>
                        <AvatarImg
                            whileTap={{ scale: 0.6 }}
                            src={user ? user?.photoURL : Avatar}
                            alt="userprofile"
                            onClick={login}
                        />
                        {isMenu && (
                            <MotionDivNewItemLogout
                                initial={{
                                    opacity: 0,
                                    scale: 0.6,
                                }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                            >
                                {user && user.email === "mitproject77@gmail.com" && (
                                    <NewItemLink to="/*">
                                        <NewItem
                                            onClick={() => setItemMenu(false)}
                                        >
                                            Home <MdHome />
                                        </NewItem>
                                    </NewItemLink>
                                )}
                                {user && user.email === "mitproject77@gmail.com" && (
                                    <NewItemLink to="/createItem">
                                        <NewItem
                                            onClick={() => setItemMenu(false)}
                                        >
                                            Upload Item <MdAdd />
                                        </NewItem>
                                    </NewItemLink>
                                )}
                                {user && user.email === "mitproject77@gmail.com" && (
                                    <NewItemLink to="/admin">
                                        <NewItem
                                            onClick={() => setItemMenu(false)}
                                        >
                                            Admin Page <MdAdminPanelSettings />
                                        </NewItem>
                                    </NewItemLink>
                                    
                                )}{user && user.email === "mitproject77@gmail.com" && (
                                    <NewItemLink to="/userRequests">
                                        <NewItem
                                            onClick={() => setItemMenu(false)}
                                        >
                                            My Requests <MdRequestPage />
                                        </NewItem>
                                    </NewItemLink>
                                    
                                )}
                                <NewItem
                                    onClick={logout}
                                >
                                    Logout <MdLogout></MdLogout>
                                </NewItem>
                            </MotionDivNewItemLogout>
                        )}
                    </AvatarDiv>
                </BigDiv>
            </DesktopContainer>

            {/* mobile 
            <div className="flex item-center justify-between md:hidden w-full h-full ">
                <motion.div
                    whileTap={{ scale: 0.6 }}
                    className="relative flex items-center justify-center right-6"
                    onClick={showCart}
                >
                    <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer" />
                    {cartItems && cartItems.length > 0 && (
                        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs text-white font-semibold">{cartItems.length}</p>
                        </div>
                    )}
                </motion.div>

                <Link
                    to={"/"}
                    whileTap={{ scale: 0.6 }}
                    className="flex items-center gap-2"
                >
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-8 object-cover"
                    />
                    <p className="text-headingColor text-xl font-bold">Gostilnica Cuna</p>
                </Link>

                <div className="relative ">
                    <motion.img
                        whileTap={{ scale: 0.6 }}
                        src={user ? user.photoURL : Avatar}
                        className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full"
                        alt="userprofile"
                        onClick={login}
                    />
                    {isMenu && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 "
                        >
                            {user && user.email === "restoranaplikacija@gmail.com" && (
                                <Link to="/createItem">
                                    <p
                                        className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all 
                                        duration-100 ease-in-out text-textColor text-base"
                                        onClick={() => setItemMenu(false)}
                                    >
                                        New Item <MdAdd />
                                    </p>
                                </Link>
                            )}
                            <ul className="flex flex-col ">
                                <li
                                    className="text-base text-headingColor hover:text-headingColor duration-100 
                                    transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                                    onClick={() => setItemMenu(false)}
                                >
                                    Home
                                </li>
                                <li
                                    className="text-base text-headingColor hover:text-headingColor duration-100 
                                    transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                                    onClick={() => setItemMenu(false)}
                                >
                                    Menu
                                </li>
                                <li
                                    className="text-base text-headingColor hover:text-headingColor duration-100 
                                    transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                                    onClick={() => setItemMenu(false)}
                                >
                                    About Us
                                </li>
                                <li
                                    className="text-base text-headingColor hover:text-headingColor duration-100 
                                    transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                                    onClick={() => setItemMenu(false)}
                                >
                                    Service
                                </li>
                            </ul>
                            <p
                                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200  
                                gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor 
                                text-base "
                                onClick={logout}
                            >
                                Logout <MdLogout></MdLogout>
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>*/}
        </StyledHeader>
    );
}

export default Header;
