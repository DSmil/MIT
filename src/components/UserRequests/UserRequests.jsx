import React from 'react'
import {BigContainer, MainContainer, PriceDiv, Price, Accepts, Declines, DivWrapper, Div1, Div2, TitleDiv, Title, NameDiv, NameOfUser, DescrDiv, DescrOfRequest} from "./style";

const UserRequests = () => {
    return (
        <BigContainer>
            <MainContainer>

                <TitleDiv>
                    <Title>
                        Results from requests
                    </Title>
                </TitleDiv>

                <DivWrapper>
                
                    <Accepts>
                        <TitleDiv>
                            <Title>
                                Accepted
                            </Title>
                        </TitleDiv>
                        <Div1>
                            <NameDiv>
                                <NameOfUser>
                                    name of user
                                </NameOfUser>
                            </NameDiv>
                            <DescrDiv>
                                <DescrOfRequest>
                                    Descr goes here Descr goes here Descr goes here Descr goes here Descr goes here 
                                    Descr goes here Descr goes here Descr goes here Descr goes here 
                                </DescrOfRequest>
                            </DescrDiv>
                            <PriceDiv>
                                <Price>
                                    Price: 100 euros
                                </Price>
                            </PriceDiv>
                        </Div1>
                    </Accepts>

                    <Declines>
                        <TitleDiv>
                            <Title>
                                Declined
                            </Title>
                        </TitleDiv>
                        <Div2>
                            <NameDiv>
                                <NameOfUser>
                                    name of user
                                </NameOfUser>
                            </NameDiv>
                            <DescrDiv>
                                <DescrOfRequest>
                                    Descr goes here Descr goes here Descr goes here Descr goes here Descr goes here 
                                    Descr goes here Descr goes here Descr goes here Descr goes here 
                                </DescrOfRequest>
                            </DescrDiv>
                            <PriceDiv>
                                <Price>
                                    Price: 200 euros
                                </Price>
                            </PriceDiv>
                        </Div2>
                    </Declines>
                        
                </DivWrapper>
                
            </MainContainer>
        </BigContainer>
    );
  }
  
  export default UserRequests;