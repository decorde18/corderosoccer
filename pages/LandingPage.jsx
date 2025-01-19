import { useState } from "react";
import styled from "styled-components";

// Styled components
const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f4f4f4;
  color: #333;
  min-height: 100vh;
`;

const Header = styled.header`
  background: #004d00;
  color: #fff;
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
    color: #fff;
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
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;

  h2 {
    color: #004d00;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th,
  td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #004d00;
    color: #fff;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Footer = styled.footer`
  text-align: center;
  background: #222;
  color: #fff;
  padding: 10px 20px;
`;

function LandingPage() {
  return (
    <Wrapper>
      <Header>
        <h1>Cordero Soccer</h1>
        <Nav>
          <a href='#youth-coaching'>Youth Coaching</a>
          <a href='#adult-league'>Adult League</a>
          <a href='#high-school-team'>High School Team</a>
          <a href='#standings'>Standings</a>
          <a href='#self-improvement'>Self-Improvement</a>
          <a href='#contact'>Contact</a>
        </Nav>
      </Header>
      <Main>
        <Section id='youth-coaching'>
          <h2>Youth Coaching</h2>
          <p>Details about coaching programs, schedules, and sign-ups.</p>
        </Section>
        <Section id='adult-league'>
          <h2>Adult League</h2>
          <p>Information about league rules, standings, and registration.</p>
        </Section>
        <Section id='high-school-team'>
          <h2>High School Team</h2>
          <p>Game schedules, team roster, and player profiles.</p>
        </Section>
        <Section id='standings'>
          <h2>Standings</h2>
          <Table>
            <thead>
              <tr>
                <th>Team</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((team, index) => (
                <tr key={index}>
                  <td>{team.team}</td>
                  <td>{team.points}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Section>
        <Section id='self-improvement'>
          <h2>Self-Improvement</h2>
          <p>Links and resources for personal growth and development.</p>
        </Section>
      </Main>
      <Footer>
        <p>&copy; 2025 Cordero Soccer. All rights reserved.</p>
      </Footer>
    </Wrapper>
  );
}

export default LandingPage;
