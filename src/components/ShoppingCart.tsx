import styled from "styled-components";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import formatCurrency from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #00000073;
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 600px;
  height: 100vh;
  background-color: #ffffff;
  padding: 40px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 400;
  color: #4e4e4e;
`;

const Btn = styled.button`
  background: transparent;
  border: none;
  font-size: 30px;
  color: #4e4e4e;
  cursor: pointer;
`;

const TotalPrice = styled.div`
  float: right;
  font-size: 30px;
  font-weight: 600;
`;

const ShoppingCart = () => {
  const { closeCart, cartItem } = useShoppingCart();
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Cart</Title>
          <Btn onClick={closeCart}>X</Btn>
        </Header>
        {cartItem.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <TotalPrice>
          Total{" "}
          {formatCurrency(
            cartItem.reduce((total, cartitem) => {
              const item = storeItems.find((item) => item.id === cartitem.id);
              return total + (item?.price || 0) * cartitem?.quantity;
            }, 0)
          )}
        </TotalPrice>
      </Container>
    </Wrapper>
  );
};

export default ShoppingCart;
