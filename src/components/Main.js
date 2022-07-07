import { Container } from "../styles/Header.styled";
import { StyledMain, Total,Clear } from "../styles/Main.styled";
import { Product } from './Product';
import { useGlobalContext } from "../context";

export const Main = () => {
  const { list, totalPrice,clearCart} = useGlobalContext()

  return (
    <StyledMain>
      <Container>
        <h1>
          MY CART
        </h1>
        {list?.map((product, index) => { return <Product key={index} {...product} /> })}
        {
          !totalPrice ? <h3>Cart is empty</h3>
            : 
            <>
              <Total>
                <p><span>Total</span> : $ {totalPrice}</p>
              </Total>
              <Clear onClick={clearCart}>Clear Cart</Clear>
            </>
        }
      </Container>
    </StyledMain>
  )
}
