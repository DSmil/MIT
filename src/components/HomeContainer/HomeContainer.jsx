import React from "react";
import Delivery from "assets/img/delivery.png";
import Herobg from "assets/img/heroBg.png"
import { heroData } from "utils/data";
import {WholeContainer, RightContainer, ButtonOrderNow, BackgroundImage, ImagesPrice, ImagesPriceSpan, TheImages, NoClue, ImagesDescription,ImagesName, ImagesContainer, Text, Title, TitleSpan, ImageDelivery, ImageDiv, LeftContainer, DeliveryText, DeliveryDiv} from "./style"

function HomeContainer() {
    return (
        <WholeContainer id="home">
            <LeftContainer>
                <DeliveryDiv>
                    <DeliveryText>Delivery</DeliveryText>
                    <ImageDiv>
                        <ImageDelivery
                            src={Delivery}
                            alt="Delivery"
                        ></ImageDelivery>
                    </ImageDiv>
                </DeliveryDiv>
                <Title>
                    The Fastest delivery in{" "}
                    <TitleSpan>
                        Shtip
                    </TitleSpan>
                </Title>

                <Text>
                    You can enojy in our delitious food at our restourant or get our food
                    delivered to your home. All orders for delivery must be made online or
                    over the phone!
                </Text>

                <ButtonOrderNow type="buttom">
                    Order Now
                </ButtonOrderNow>
            </LeftContainer>
            <RightContainer>

                <BackgroundImage src={Herobg}  alt="Herobg"></BackgroundImage>
                <ImagesContainer>
                    {heroData &&
                        heroData.map((n) => (
                            <NoClue
                                key={n.id} 
                            >
                                <TheImages
                                    src={n.imageSrc}
                                    alt="I1"
                                />
                                <ImagesName>
                                    {n.name}
                                </ImagesName>

                                <ImagesDescription>
                                    {n.decp}
                                </ImagesDescription>

                                <ImagesPrice>
                                    <ImagesPriceSpan>$</ImagesPriceSpan> {n.price}
                                </ImagesPrice>
                            </NoClue>
                        ))}
                </ImagesContainer>

            </RightContainer>
        </WholeContainer>
    );
}

export default HomeContainer;
