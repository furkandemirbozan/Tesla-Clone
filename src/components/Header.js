import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { selectCars } from '../features/carSlice/carSlice'
import { useSelector } from 'react-redux'

function Header() {
    const [burherStatus, setBurherStatus] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars);

    return (
        <Container>

            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {
                    cars && cars.map((car, index) => (
                        <p key={index}><a href='#'>{car}</a></p>
                    ))
                }

            </Menu>

            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Tesla Account</a>
                <CustomMenu onClick={() => setBurherStatus(true)} />
            </RightMenu>
            <BurgerNav show={burherStatus}>
                <CloseWrapper >
                    <CustomCloseIcon onClick={() => setBurherStatus(false)} />
                </CloseWrapper>
                {
                    cars && cars.map((car, index) => (
                        <li key={index}><a href='#'>{car}</a></li>
                    ))
                }
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-In</a></li>
                <li><a href='#'>Cybertruck</a></li>
                <li><a href='#'>Roadster</a></li>
                <li><a href='#'>Semi</a></li>
                <li><a href='#'>Charging</a></li>
                <li><a href='#'>Powerwall</a></li>

            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${(props) => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.5s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        a {
            font-weight: 600;
        }
    }
`;

const CustomCloseIcon = styled(CloseIcon)`
    cursor: pointer;
    margin-left: auto;
    margin-right: 20px;
`;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`;