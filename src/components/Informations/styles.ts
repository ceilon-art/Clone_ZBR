import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;

  max-height: 95%;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-left: -45px;
  padding: 20px 0;
`;

export const PhoneImage = styled.Image`
  height: 224px;
  width: 224px;
`;

export const Data = styled.View`
  margin-left: -35px;
  width: 50%;
`;

export const TextMain = styled.Text`
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
  font-weight: bold;
`;

export const TextBold = styled.Text`
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #ffffff;
`;
