import React from "react";
import "./App.css";
import Login from "../src/components/Login";
import { Container, Title } from "@cacm96/react-component-library";
import MyAccount from "../src/components/MyAccount";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, getAccessTokenSilently, logout } = useAuth0();

  const checkSession = async () => {
    const token = await getAccessTokenSilently();
    if (!token) logout({ returnTo: window.location.origin });
  };

  const initInterval = () => {
    setInterval(() => {
      checkSession();
    }, 30000);
  };
  initInterval();

  return (
    <Container>
      <Title label="My account app" />
      {isAuthenticated ? <MyAccount /> : <Login />}
    </Container>
  );
}

export default App;
