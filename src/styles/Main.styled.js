import styled from 'styled-components';

export const StyledMain = styled.div`
    color:#fff;
    user-select: none;
    h1{
        text-align:center;
        font-size:2.5rem;
        padding: 1rem;
    }

    h3{
        margin-top:3rem;
        text-align:center;
        color:orange;
    }
`;

export const Total = styled.div`
    text-align:center;
    margin: 2rem 0;
    padding: 1rem 1rem;
    border-top:2px solid #fff;
    font-size:1.5rem;

    span{
        color:orangered;
    }
`;


export const Clear = styled.button`
    font-size: 1rem;
  padding-inline: .8rem;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  height: 2rem;
  display: block;
  margin: auto;
  background-color: rgb(189, 189, 249);
`;
