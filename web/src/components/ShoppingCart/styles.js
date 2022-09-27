import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.div`
    display: block;
    margin: 0 5px;
    cursor: pointer;
    position: relative;
`
export const Icon = styled(FontAwesomeIcon)`
    padding: 5px;
    height: 30px;
    color: #fff;
    
    &:hover {
        transform: scale(1.1);
        transition: transform ease 0.5s;
    }
`

export const CartCount = styled.span`
    position: absolute;
    bottom: -5px;
    right: -5px;
    height: 10px;
    width: 10px;
    padding: 10px;
    border-radius: 50%;
    background: #C20A0A;
    color: #fff;
    font-family: 'Poppins';
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-family: 'Poppins';
    z-index: 10000;
    width: 300px;
    background: #fff;
    top: 0;
    right: 0;
    padding: 25px;
    position: relative;
    position: fixed;
    overflow: auto;
    height: 100%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    transition: all ease -in -out 0.3s;
    padding: 1rem;

    ::-webkit-scrollbar{
        background-color: white;
        width: 10px;
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: #5b5b5b;
        border-radius: 5px;
    }

    &.expand{
        transition: all ease -in -out 0.6s;
        right: 0;
    }

    &.shrink{
        transition: all ease -in -out 0.6s;
        right: -1000px;
    }

    @media screen and (max-width:1024px){
        width: 60%;
    }
`

export const EmptyCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-family: "Poppins";
    color: rgb(46, 46, 46);
`;

export const SideBarHeader = styled.div`
display: flex;
width: 100%;
border-bottom: 1px solid #000;
`

export const SideBarTitle = styled.h1`
    font-family: 'Frank Ruhl Libre';
    font-size: 22px;
    text-align: center;
    padding-bottom: 1rem;
`

export const SideBarTotal = styled.h1`
    width: 97%;
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 500;
    border-top: 1px solid #000;
    padding-top: 1rem;
    margin-bottom: 1rem;
`

export const CartBtn = styled.button`
    margin-top: 1rem;
    padding: 0.6rem;
    border: none;
    background: rgb(46, 46, 46);
    font-family: 'Poppins';
    color: #fff;

    &:hover{
        transform: scale(1.06);
        transition: transform ease-in-out 0.3s;
    }
`
export const ClearCartBtn = styled.button`
    margin-top: 1rem;
    padding: 0.6rem;
    border: none;
    background: #C20A0A;
    font-family: 'Poppins';
    color: #fff;

    &:hover{
        transform: scale(1.06);
        transition: transform ease-in-out 0.3s;
    }
`