import React from "react";
import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px auto;
  background-color: transparent;
  border-radius: 5px;
  padding: 40px;
  width: 80%;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: black;
  margin: 15px 0;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

export default function Store() {
  return (
    <React.Fragment>
      <Container>
        <Title>Store</Title>
        <Cards>
          {storeItems.map((items) => (
            <div key={items.id}>
              <StoreItem {...items} />
            </div>
          ))}
        </Cards>
      </Container>
    </React.Fragment>
  );
}
