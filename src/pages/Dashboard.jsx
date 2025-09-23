import styled from 'styled-components';
import netlifyIdentity from '../auth';
import sites from '../sites.json';

import logo from '../../src/logo.png';
import SiteCard from './SiteCard';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.fonts.main};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Logo = styled.img`
  height: 60px;
`;

const LogoutButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.accent};
  border: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
`;

const SiteList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const Dashboard = ({ user }) => (
  <Container>
    <Header>
      <Logo src={logo} alt="Cordero Soccer Logo" />
      <LogoutButton onClick={() => netlifyIdentity.logout()}>
        Logout
      </LogoutButton>
    </Header>
    <h2>Welcome, {user.user_metadata.full_name}</h2>
    <SiteList>
      {sites.map((site) => (
        <SiteCard key={site.id} site={site} />
      ))}
    </SiteList>
  </Container>
);

export default Dashboard;
