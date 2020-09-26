import { useNavigation } from "@react-navigation/native";
import React from "react";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

import { Container, Text, Icons, Cart, Bars } from "./styles";

const NavBar: React.FC = () => {
  const { navigate } = useNavigation();

  function handleGoHome() {
    navigate("Home");
  }

  return (
    <Container>
      <LinearGradient
        colors={["#00bfff", "#87CEEB"]}
        style={{
          flex: 1,
        }}
      >
        <RectButton onPress={handleGoHome}>
          <Text>Laisahair apliques e acessórios</Text>
        </RectButton>
        <Icons>
          <BorderlessButton onPress={handleGoHome}>
            <Cart>
              <MaterialIcons name="shopping-cart" size={32} color="white" />
            </Cart>
          </BorderlessButton>
          <BorderlessButton onPress={handleGoHome}>
            <Bars>
              <FontAwesome name="bars" size={32} color="white" />
            </Bars>
          </BorderlessButton>
        </Icons>
      </LinearGradient>
    </Container>
  );
};

export default NavBar;
