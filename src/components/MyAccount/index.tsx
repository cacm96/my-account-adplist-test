import React from "react";
import { ContentBox, Title } from "@cacm96/react-component-library";
import Logout from "../Logout";
import { InfoContainer, Label, Value, Img } from "./styles";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ContentBox>
      {isAuthenticated && (
        <div>
          <Title label="My Account" />

          <Img src={user?.picture} alt={user?.name} />

          <InfoContainer>
            <Label>Email:</Label>
            <Value>{user?.email}</Value>
          </InfoContainer>
          <InfoContainer>
            <Label>Name:</Label>
            <Value>{user?.name}</Value>
          </InfoContainer>

          <Logout />
        </div>
      )}
    </ContentBox>
  );
}
