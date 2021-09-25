import React from 'react'
import styled from 'styled-components'
// import { AiOutlineMenu } from "react-icons/bs";

function Header() {
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="teslalogo"/>
            </a>
            <Menu>
                    <a href="#">ModelS</a>
                    <a href="#">Model3</a>
                    <a href="#">ModelX</a>
                    <a href="#">ModelY</a>
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                {/* <CustomMenu /> */}
            </RightMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
        min-height: 60px;
        position: fixed;
        display: flex;
        align-items: center;
        padding: 0 20px;
        top:0;
        left: 0;
        right: 0;

`

const Menu = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        a{
            font-weight: 600;
            text-transform: uppercase;
            padding: 0 10px;
            flex-wrap: no-wrap;
        }
`

const RightMenu = styled.div`
display:flex;
    a{
            font-weight: 600;
            text-transform: uppercase;
            margin-right: 10px;
            flex-wrap: no-wrap;
        }
`

// const CustomMenu = styled(MenuIcon)`
//     cursor: pointer;
// `