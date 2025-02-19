import styled from 'styled-components';
import Footer from '../Footer';
import Header from '../Header';

const Main = styled.main`
  margin: 2rem auto;
  text-align: center;
`;

function Error() {
  return (
    <>
      <Header />
      <Main>
        <h1> An ERROR has occurred!</h1>
        <p>Could not find this page...</p>
      </Main>
      <Footer />
    </>
  );
}

export default Error;
