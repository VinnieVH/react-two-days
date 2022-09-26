import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useMediaQuerySize from "../../hooks/useMediaQuerySize";
import { Breakpoints } from "../../models/breakpoints-enum";
import { colors } from "../../utils";

const Nav = () => {
  const navigate = useNavigate();
  const { breakpoint, breakpointGreaterOrEqualThan } = useMediaQuerySize();

  return (
    <AppBar>
      <AppBarFlex>
        <AppBarItem>
          <img
            alt="logo coinmarketcap"
            src="https://assets-global.website-files.com/5f15b50525745912903311ad/5f15b505dd58c115cd49d484_Logo-full-white.svg"
            width={150}
            onClick={() => navigate("/")}
          />
        </AppBarItem>
        <AppBarItem onClick={() => navigate("/")}>CRYPTOCURRENCIES</AppBarItem>
        {breakpointGreaterOrEqualThan(breakpoint, Breakpoints.m) && (
          <AppBarItem style={{ justifyContent: "flex-end" }} onClick={() => navigate("/")}>
            WATCHLIST
          </AppBarItem>
        )}
      </AppBarFlex>
    </AppBar>
  );
};

export default Nav;

const AppBar = styled.div`
  height: 60px;
  color: white;
  background-color: ${colors.blue};
`;

const AppBarFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const AppBarItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 15px;
  margin: 1rem;
`;
