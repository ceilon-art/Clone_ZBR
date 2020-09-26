import React from "react";
import { Image } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import WhatsImage from "../../assets/images/whatsapp.png";
import ZBRImage from "../../assets/images/zbr.png";

import {
  Container,
  TopArea,
  Line,
  Text,
  TextNumber,
  BottomArea,
  Icons,
  WhatsIcon,
  TextIcon,
  TextFooter,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <TopArea>
        <Text>São Paulo / SP{"\n"}</Text>
        <TextNumber>11 99003-8834</TextNumber>
      </TopArea>
      <Line />

      <BottomArea>
        <Icons>
          <BorderlessButton>
            <WhatsIcon source={WhatsImage} />
          </BorderlessButton>
          <TextIcon>Compartilhar este catálogo no whatsapp</TextIcon>
        </Icons>

        <TextFooter>
          2020 Catálogo online por <Image source={ZBRImage} /> ZBR
        </TextFooter>
      </BottomArea>
    </Container>
  );
};

export default Footer;
