import styled from "styled-components";

export const StyledHeader = styled.header`
    h1{
        color: orangered;
    }
` ;


export const CartIcon = styled.div`
    position:relative;

&:after{
        content:'${({cartTotal})=> cartTotal}';
        /* content:'emre'; */
        color: #fff;
        position:absolute;
        right:-10px;
        top:-15px;
        font-size:1.3rem;
        background-color: orange;
        border-radius:50%;
        width:25px;
        height:25px;
        text-align:center;
    }
`;

export const Container = styled.div`
  max-width: 1000px;
  width:100%;
  margin: auto;
  padding:1.5rem
`;


