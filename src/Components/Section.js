import React from 'react'
import styled from 'styled-components'

function Section({title, description, leftBtnText, rightBtnText,backgroundImg}) {
    return (
        <Wrap bgImage = {backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                { rightBtnText && 
                    <RigthButton>
                    {rightBtnText}
                </RigthButton>

                }
                
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    ${'' /* background-image: url("./images/model-s.jpg"); */}
    background-size:cover;
    background-position: center;
    background-repeat:no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 35px;
    @media(max-width: 768px){
        flex-direction: column;
    }

`

const LeftButton = styled.div`
    background-color: rgba(27,26,32,0.8);
    height: 40px;
    width: 250px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    cursor: pointer;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    margin: 8px;
`

const RigthButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
    font-weight: 600;
`


const DownArrow = styled.img`
    height: 40px;
    margin-bottom: 2px;
    overflow-x : hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``