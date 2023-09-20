import styled from "styled-components/native";

export const Content = styled.View`
  width: 90%;
  height: 90%;
  justify-self: center;
  align-self: center;

  margin-top: 10px;
  background-color: #dadada;
`;

export const Title = styled.Text`
  font-size: 28;
  font-weight: bold;
  margin: 30px;
`;

export const Footer = styled.View`
  width: 100%;
  align-self: center;
`;

export const Press = styled.TouchableOpacity`
  align-items: center;
`;

export const PressPay = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 40%;
  width: 60%;
  height: 40px;

  background-color: #dadaff;
`;
