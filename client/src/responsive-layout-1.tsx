import { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  max-width: 62.5rem; // 1000px / 16px = 62.5rem
  margin: 2rem auto; // 20px / 16px = 1.25rem
  display: flex;

  @media screen and (max-width: 48rem) { // 768px / 16px = 48rem
    flex-direction: column-reverse;
  }
`;

const Panel = styled.div`
  flex: 1;
  padding: 1.25rem; // 20px / 16px = 1.25rem
`;

const ListPanel = styled(Panel)`
  background-color: #eee;
`;

const DetailsPanel = styled(Panel)`
  background-color: #f5f5f5;
`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
  height: 3.75rem; // 60px / 16px = 3.75rem
  position: relative;
`;

const Nav = styled.nav`
  max-width: 62.5rem; // 1000px / 16px = 62.5rem
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem; // 24px / 16px = 1.5rem
  cursor: pointer;

  @media screen and (max-width: 48rem) { // 768px / 16px = 48rem
    display: block;
  }
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;

  @media screen and (max-width: 48rem) { // 768px / 16px = 48rem
    display: none;

    ${({ showMenu }: { showMenu: boolean }) =>
    showMenu &&
    css`
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 3.75rem; // 60px / 16px = 3.75rem
        left: 0;
        width: 100%;
        background-color: #333;
      `}
  }
`;

const Li = styled.li`
  margin-right: 1.25rem; // 20px / 16px = 1.25rem

  @media screen and (max-width: 48rem) { // 768px / 16px = 48rem
    margin-right: 0;
    margin-bottom: 0.625rem; // 10px / 16px = 0.625rem
  }
`;

const A = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.625rem; // 10px / 16px = 0.625rem
  display: block;

  @media screen and (max-width: 48rem) { // 768px / 16px = 48rem
    padding: 0.625rem;
  }
`;

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Header>
      <Nav>
        <Ul showMenu={showMenu}>
          <Li>
            <A href="#">Dashboard</A>
          </Li>
          <Li>
            <A href="#">Activities</A>
          </Li>
          <Li>
            <A href="#">Feed</A>
          </Li>
        </Ul>
        <MenuIcon onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </MenuIcon>
      </Nav>
    </Header>
  );
};

const App = () => {
  return (
    <>
      <Menu />
      <Container>
        <ListPanel>Content goes here</ListPanel>
        <DetailsPanel>Content goes here</DetailsPanel>
      </Container>
    </>
  );
};

export default App;
