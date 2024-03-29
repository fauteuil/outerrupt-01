import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-weight: bold;
  text-align: center;
  > * {
    padding: 10px;
    flex: 1 100%;
  }
`;

// .wrapper > * {
//   padding: 10px;
//   flex: 1 100%;
// }

export const HeaderWrapper = styled.div`
  background: tomato;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  /* This aligns items to the end line on main-axis */
  justify-content: flex-end;

  list-style: none;
  margin: 0;
  background: deepskyblue;

  a {
    text-decoration: none;
    display: block;
    padding: 1em;
    color: white;
  }

  a:hover {
    background: #1565c0;
  }
`;

export const FooterWrapper = styled.div`
  background: lightgreen;
  position: relative;
  bottom: 0;
`;

// .main {
//   text-align: left;
//   background: deepskyblue;
// }

// .aside-1 {
//   background: gold;
// }

// .aside-2 {
//   background: hotpink;
// }

// @media all and (min-width: 500px) {
//   .aside { flex: 1 0 0; }
// }

// @media all and (max-width: 500px){
//     .navigation {
//     /* On small screens, we are no longer using row direction but column */
//     flex-direction: column;
//   }
// }

// @media all and (min-width: 800px) {
//   .main    { flex: 3 0px; }
//   .aside-1 { order: 1; }
//   .main    { order: 2; }
//   .aside-2 { order: 3; }
//   .footer  { order: 4; }
// }

// @media all and (max-width: 800px) {
//   .navigation {
//     /* When on medium sized screens, we center it by evenly distributing empty space around items */
//     justify-content: space-around;
//   }
// }

// body {
//   padding: 2em;
// }
