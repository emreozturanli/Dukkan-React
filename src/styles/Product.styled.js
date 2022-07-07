import styled from 'styled-components';

export const StyledProduct = styled.div`
    display:flex;
    align-items:center;
    margin: 2rem 0 0;
    gap:2rem;
    img{
        width:150px;
        height:150px;
        object-fit:contain;
    }

    h2{
        color:yellowgreen;
    }
`;


export const Info = styled.div`
    padding: .4rem 0;
    display: flex;
    flex-direction:column;
    gap:.5rem;
`;

export const Amount = styled.div`
    margin-left:auto;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    gap: 1rem;
    font-size:1.5rem;
    div{
        display:flex;
        gap:1rem;
    }

    span{
        display:flex;
        align-items:center;
        &:hover{
        cursor:pointer;
        }
    }

    button{
        border:none;
        outline:none;
        cursor:pointer;
        background-color:transparent;
        color:#fff;
        font-size:1rem;
        padding:0;
        text-align:left;
        &:hover{
            color:orangered;
        }
    }
    
    
`;
