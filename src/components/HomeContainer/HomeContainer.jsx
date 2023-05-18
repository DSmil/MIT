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
                    Electronic device for the {" "}
                    <TitleSpan>
                        Best Price
                    </TitleSpan>
                </Title>

                <Text>
                    You can browse in our inventory for an economic device that meets your needs. 
                    Or you can Upload your device and we can give you some refund upon inspection.
                </Text>
                we dont need the button
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
