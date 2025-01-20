import styled from 'styled-components';

// Styled components
const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f4f4f4;
  color: #333;
  min-height: 100vh;
`;

const Header = styled.header`
  background: #e92228;
  color: #ffffff;
  padding: 20px;
  text-align: center;

  h1 {
    margin: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;

  a {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

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

const Footer = styled.footer`
  text-align: center;
  background: #060911;
  color: #ffffff;
  padding: 10px 20px;
`;
const pages = [
  {
    label: 'Standings',
    link: '/standings',
  },
  {
    label: 'IHS',
    link: '/ihs',
  },
  {
    label: 'Youth Coaching',
    link: '#youth-coaching',
    details: 'Details about coaching programs, schedules, and sign-ups.',
  },
  {
    label: 'Adult League',
    link: '#adult-league',
    details: 'Information about league rules, standings, and registration.',
  },
  {
    label: 'High School Team',
    link: '#high-school-team',
    details: 'Game schedules, team roster, and player profiles.',
  },
  {
    label: 'Self-Improvement',
    link: '#self-improvement',
    details: 'Links and resources for personal growth and development.',
  },
  {
    label: 'Contact',
    link: '#contact',
  },
];
function LandingPage() {
  return (
    <Wrapper>
      <Header>
        <h1>Cordero Soccer</h1>
        <Nav>
          {pages.map((page, idx) => (
            <a key={`nav-${idx}`} href={page.link}>
              {page.label}
            </a>
          ))}
        </Nav>
      </Header>
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
      <Footer>
        <p>&copy; 2025 Cordero Soccer. All rights reserved.</p>
      </Footer>
    </Wrapper>
  );
}

export default LandingPage;
