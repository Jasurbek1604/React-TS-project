import styled from "styled-components";
import formatCurrency from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const Img = styled.img`
  width: 200px;
  height: 150px;
`;
const Box = styled.div``;
const Name = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 5px;
`;

interface PriceProps {
  price?: boolean;
}

const Price = styled.div<PriceProps>`
  font-size: ${({ price }) => (price ? "20px" : "18px")};
  color: ${({ price }) => (price ? "black" : "#6c6c6c")};
  font-weight: 400;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid red;
  padding: 10px 13px;
  border-radius: 5px;
  color: red;
  font-size: 15px;
`;

const Span = styled.span`
  color: #676767;
  font-size: 18px;
  font-weight: 400;
`;

type CartItemProps = {
  id: number;
  quantity: number;
};

function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;
  return (
    <>
      <Body>
        <Left>
          <Img src={item.imgUrl}></Img>
          <Box>
            <Name>
              {" "}
              <Span>x{quantity}</Span> {item.name}
            </Name>
            <Price>{formatCurrency(item.price)}</Price>
          </Box>
        </Left>
        <Right>
          <Price price>{formatCurrency(item.price)}</Price>
          <Button onClick={() => removeFromCart(item.id)}>X</Button>
        </Right>
      </Body>
    </>
  );
}

export default CartItem;
