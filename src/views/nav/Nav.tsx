import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { colors } from "../../utils";
import { AiFillStar } from "react-icons/ai";
import { Icon } from "../../utils/Icon";
import { CoinMarketCapLogo } from "../../assets";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <AppBar>
      <AppBarFlex>
        <AppBarItem>
          <div onClick={() => navigate("/")}>
            <Icon title="coinmarketcap" icon={CoinMarketCapLogo} size={"150px"} fill="pink" />
          </div>
          {/* <img
            alt="logo coinmarketcap"
            src="https://assets-global.website-files.com/5f15b50525745912903311ad/5f15b505dd58c115cd49d484_Logo-full-white.svg"
            width={150}
            onClick={() => navigate("/")}
          /> */}
        </AppBarItem>
        <AppBarItem onClick={() => navigate("/")}>CRYPTOCURRENCIES</AppBarItem>
        <AppBarItem style={{ justifyContent: "flex-end" }} onClick={() => navigate("/")}>
          <AnimatedStar>
            <AiFillStar size={25} color="yellow" />
          </AnimatedStar>
        </AppBarItem>
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const AnimatedStar = styled.div`
  :hover  {
    animation: ${rotate} 2s linear infinite;
  }
`;
