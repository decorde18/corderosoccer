import pages from '../helpers/pages';
import styled from 'styled-components';

// Styled components

const Main = styled.main`
  padding: 20px;
`;
const Section = styled.section`
  background: #ebeff7;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  color: #060911;

  h2 {
    color: #3a5eab;
  }
`;

function LandingPage() {
  return (
    <Main>
      {pages
        .filter((page) => page.details)
        .map((page, idx) => (
          <Section key={`section-${idx}`}>
            <h2>{page.label}</h2>
            <p>{page.details}</p>
          </Section>
        ))}
    </Main>
  );
}

export default LandingPage;
