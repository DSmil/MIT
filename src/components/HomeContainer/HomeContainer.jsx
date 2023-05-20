import React from "react";
import Herobg from "assets/img/heroBg.png"
import { heroData } from "utils/data";
import {WholeContainer, RightContainer, BackgroundImage, ImagesPrice, ImagesPriceSpan, TheImages, NoClue, ImagesDescription,ImagesName, ImagesContainer, Text, Title, TitleSpan, LeftContainer } from "./style"

function HomeContainer() {
    return (
        <WholeContainer id="home">
            <LeftContainer>
                
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
                                    {n.price}<ImagesPriceSpan>€</ImagesPriceSpan> 
                                </ImagesPrice>
                            </NoClue>
                        ))}
                </ImagesContainer>

            </RightContainer>
        </WholeContainer>
    );
}

export default HomeContainer;
