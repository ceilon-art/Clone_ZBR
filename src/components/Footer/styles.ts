import styled from "styled-components/native";

export const Container = styled.View`
  background: #666;
  flex: 1;
`;

export const TopArea = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;

  padding: 10px 20px;
`;

export const Text = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
`;

export const TextNumber = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;

  margin-top: -20px;
`;

export const Line = styled.View`
  border: 1px solid #87cefa;
`;

export const BottomArea = styled.View`
  align-items: flex-start;
  justify-content: center;

  padding: 10px 20px;
`;

export const Icons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const WhatsIcon = styled.Image``;

export const TextIcon = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;

  margin-left: 10px;
`;

export const TextFooter = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 10px;
  align-self: center;
`;
