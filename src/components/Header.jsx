import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import pages from '../helpers/pages';
import styled from 'styled-components';

// Styled components

const StyledHeader = styled.header`
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
    &.active {
      text-decoration: underline;
    }
  }
`;
function Header() {
  return (
    <StyledHeader>
      <h1>Cordero Soccer</h1>
      <Nav>
        {pages.map((page, idx) =>
          page.layout ? (
            <NavLink
              key={`nav-${idx}`}
              to={page.link}
              activeClassName={({ isActive }) =>
                isActive ? 'active' : undefined
              }
              end
            >
              {page.label}
            </NavLink>
          ) : (
            <Link
              key={`nav-${idx}`}
              to={page.link}
              activeClassName={({ isActive }) =>
                isActive ? 'active' : undefined
              }
              relative="path"
              // relative="path" will only remove one segment on the url /products/123 would only remove 123 not products as well if they are siblings
              // default is route
              end
            >
              {page.label}
            </Link>
          )
        )}
      </Nav>
    </StyledHeader>
  );
}

export default Header;
