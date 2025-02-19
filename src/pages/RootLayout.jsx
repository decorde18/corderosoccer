import { Outlet } from 'react-router-dom';

import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Styled components
const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f4f4f4;
  color: #333;
  min-height: 100vh;
`;
const Main = styled.main`
  margin: 2rem auto;
  text-align: center;
`;

function RootLayout() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default RootLayout;
