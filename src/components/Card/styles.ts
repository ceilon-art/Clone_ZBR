import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  flex-wrap: wrap;
`;

export const Posters = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: -30px 15px;
`;

export const CardInfo = styled.View`
  flex: 1;
  width: 90%;
  padding: 10px;
  margin-top: 50px;
  justify-content: center;
  border: 1px solid #ddd;
`;

export const CardImage = styled.Image`
  align-self: center;

  margin-bottom: 25px;
  width: 150px;
  height: 150px;
`;

export const Description = styled.Text`
  line-height: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #00bfff;
  align-self: center;
`;

export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
  align-self: center;
  margin-top: 10px;
`;

export const Button = styled(RectButton)`
  background: #00bfff;
  border-radius: 24px;
  width: 40%;
  align-self: center;
  margin-top: 15px;
  padding: 3px;
`;

export const TextButton = styled.Text`
  padding: 10px;
  color: #ffffff;
  align-self: center;

  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
`;
