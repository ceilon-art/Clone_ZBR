import React from "react";

import Card from "../Card/index";

import { Container, MainText, Content } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <MainText>Novidades</MainText>
      <Content>
        <Card />
      </Content>
    </Container>
  );
};

export default Main;
