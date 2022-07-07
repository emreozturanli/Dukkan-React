import { StyledHeader, Container, CartIcon } from "../styles/Header.styled";
import { Flex } from "../styles/Flex.styled";
import {FaShoppingCart} from 'react-icons/fa';
import { useGlobalContext } from "../context";

export const Header = () => {
  const {totalAmount} = useGlobalContext();
  return (
    <StyledHeader>
        <Container>
            <Flex>
                <h1>Dükkan</h1>
                <CartIcon cartTotal={totalAmount}>
                    <FaShoppingCart size={30}style={{color:'#fff'}}/>
                </CartIcon>
            </Flex>
        </Container>

    </StyledHeader>
  )
}
