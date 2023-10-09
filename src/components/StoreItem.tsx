import React from "react";
import styled from "styled-components";
import { formatCurrency } from "../utils/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCardContext";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #b9b9b9;
  border-radius: 5px;
  padding-bottom: 20px;
  background-color: #fff;
`;

const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 50px);
  margin: 20px;
`;

const Name = styled.h2``;
const Price = styled.h3`
  color: #656464;
`;

const Math = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`;

interface ButtonProps {
  add?: boolean;
}

const Button = styled.button<ButtonProps>`
  width: ${({ add }) => (add ? "90%" : "100px")};
  background-color: ${({ add }) => (add ? "blue" : "red")};
  color: #fff;
  border-radius: 5px;
  padding: 8px;
  border: 1px solid #fff;
  font-size: 16px;
  cursor: pointer;
  &:active {
    transform: scale(1.02);
    opacity: 0.8;
  }
`;

const Btn = styled.button`
  background-color: blue;
  color: #fff;
  border: none;
  width: 2rem;
  height: 2rem;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  &:active {
    transform: scale(1.02);
    opacity: 0.8;
  }
`;
const Desc = styled.div`
  display: flex;
  align-items: center;
`;
const Span = styled.div`
  font-size: 22px;
  color: black;
  padding-right: 8px;
`;

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <React.Fragment>
      <Card>
        <Img src={imgUrl} />
        <Center>
          <Name>{name}</Name>
          <Price>{formatCurrency(price)}</Price>
        </Center>
        {quantity === 0 ? (
          <Math>
            <Btn onClick={() => decreaseCartQuantity(id)}>-</Btn>
            <Desc>
              <Span>{quantity}</Span> in cart
            </Desc>
            <Btn onClick={() => increaseCartQuantity(id)}>+</Btn>
          </Math>
        ) : (
          <Button onClick={() => increaseCartQuantity(id)} add>
            +Add To Card
          </Button>
        )}
        <Button onClick={() => removeFromCart(id)}>Remove</Button>
      </Card>
    </React.Fragment>
  );
}

export default StoreItem;
