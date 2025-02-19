import styled from 'styled-components';
const StyledFooter = styled.footer`
  text-align: center;
  background: #060911;
  color: #ffffff;
  padding: 10px 20px;
`;
function Footer() {
  return (
    <StyledFooter>
      <p>&copy; 2025 Cordero Soccer. All rights reserved.</p>
    </StyledFooter>
  );
}

export default Footer;
