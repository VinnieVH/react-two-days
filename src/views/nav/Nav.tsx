import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div style={{ height: "60px", color: "white", backgroundColor: "#1976D2" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "100%" }}>
        <div style={{ width: "200px", margin: "1rem" }}>
          <img
            alt="logo coinmarketcap"
            src="https://assets-global.website-files.com/5f15b50525745912903311ad/5f15b505dd58c115cd49d484_Logo-full-white.svg"
            width={150}
            onClick={() => navigate("/")}
          />
        </div>
        <div
          style={{ width: "200px", display: "flex", justifyContent: "center", fontWeight: 500, fontSize: "15px", margin: "1rem" }}
          onClick={() => navigate("/")}>
          CRYPTOCURRENCIES
        </div>
        <div
          style={{ width: "200px", display: "flex", justifyContent: "flex-end", fontWeight: 500, fontSize: "15px", margin: "1rem" }}
          onClick={() => navigate("/")}>
          WATCHLIST
        </div>
      </div>
    </div>
  );
};

export default Nav;
