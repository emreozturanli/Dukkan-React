import { StyledProduct, Info, Amount} from "../styles/Product.styled";
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import { useGlobalContext } from "../context";


export const Product = ({id,title,category,price,img,desc,amount}) => {
   const {removeProduct,decreaseAmount,increaseAmount} = useGlobalContext();
   
  return (
    <StyledProduct>
        <div><img src={img} alt={title} /></div>
        <Info>
            <h2>{title}</h2>
            <p>${price}</p>
            <p><i>{desc.slice(0,desc.indexOf('.')+1)}</i></p>
        </Info>
        <Amount>
          <div>
            <span onClick={()=>decreaseAmount(id)}><FaArrowLeft/></span>
            <p>{amount}</p>
            <span onClick={()=>increaseAmount(id)}><FaArrowRight/></span>
          </div>
            <button onClick={()=>removeProduct(id)}>Remove</button>
        </Amount>
    </StyledProduct>
  )
}
