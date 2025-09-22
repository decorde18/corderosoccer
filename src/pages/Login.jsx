import React from 'react';
import styled from 'styled-components';
import netlifyIdentity from '../auth';
import logo from '../../src/logo.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.primary}
  );
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.fonts.main};
`;

const Logo = styled.img`
  height: 80px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Login = () => {
  const handleLogin = () => {
    netlifyIdentity.open();
  };

  return (
    <Container>
      <Logo src={logo} alt="Cordero Soccer Logo" />
      <Title>Cordero Soccer Dashboard</Title>
      <Subtitle>Login to access your league tools</Subtitle>
      <Button onClick={handleLogin}>Login</Button>
    </Container>
  );
};

export default Login;
