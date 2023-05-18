import React from 'react'
import {BigContainer, MainContainer, Div1, TitleDiv, Title, NameDiv, NameOfUser, DescrDiv, DescrOfRequest, ButtonContainer, ButtonAccept, ButtonReject} from "./style";

const AdminCheck = () => {
    return (
        <BigContainer>
            <MainContainer>
                <TitleDiv>
                    <Title>
                        Results from requests
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
                    <ButtonContainer>
                        <ButtonAccept>
                            Accept
                        </ButtonAccept>
                        <ButtonReject>
                            Reject
                        </ButtonReject>
                    </ButtonContainer>
                    
                </Div1>
            </MainContainer>
        </BigContainer>
    );
  }
  
  export default AdminCheck;