import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import pages from '../helpers/pages';

// Styled components
const StyledHeader = styled.header`
  background: #e92228;
  color: #ffffff;
  padding: 20px;
  text-align: center;

  h1 {
    margin: 0;
  }

  img {
    width: 100px; /* Adjust size as needed */
    height: auto;
    margin-top: 10px;
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

    &:hover,
    &.active {
      text-decoration: underline;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <div>
        <h1>Cordero Soccer</h1>
        <img src="/logo.png" alt="logo" />
        <img src="/mockLogo.jpg" alt="logo" />
      </div>
      <Nav>
        {pages
          .filter((page) => page.display !== false)
          .map((page, idx) => (
            <NavLink
              key={`nav-${idx}`}
              to={page.link}
              className={({ isActive }) => (isActive ? 'active' : '')}
              end
            >
              {page.label}
            </NavLink>
          ))}
      </Nav>
    </StyledHeader>
  );
}

export default Header;
