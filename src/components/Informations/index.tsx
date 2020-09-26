import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import {
  Container,
  Content,
  PhoneImage,
  Data,
  TextMain,
  TextBold,
  Text,
} from "./styles";

import Phone from "../../assets/images/phone.png";

const Informations: React.FC = () => {
  return (
    <Container>
      <LinearGradient
        colors={["#1E90FF", "#87cefa"]}
        style={{
          flex: 1,
        }}
      >
        <Content>
          <PhoneImage source={Phone} resizeMode="contain" />
          <Data>
            <TextMain>Faça seu pedido pelo WhatsApp {"\n"}</TextMain>
            <Text>
              1 - Veja os produtos e selecione os que te interessar.{"\n"}
            </Text>
            <Text>
              2 - Quando terminar, vá no carrinho de compras e clique em{" "}
              <TextBold>"solicitar"</TextBold>
              {"\n"}
            </Text>
            <Text>
              3 - Pronto, no seu Whatsapp mande a lista de seu interesse e bons
              negócios! =D
            </Text>
          </Data>
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default Informations;

// {
//   ("\n");
// }

// <Text>
//   2 - Quando terminar, vá no carrinho de compras e clique em
//   <strong>"solicitar"</strong>
// </Text>
//
