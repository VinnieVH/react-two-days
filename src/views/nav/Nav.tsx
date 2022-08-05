const Nav = () => {
  const appBarStyle = {
    height: "60px",
    color: "white",
    backgroundColor: "#1976D2",
  };
  const appBarFlexStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  };
  const itemStyle = {
    width: "200px",
    display: "flex",
    justifyContent: "center",
    fontWeight: 500,
    fontSize: "15px",
    margin: "1rem",
  };
  return (
    <div style={appBarStyle}>
      <div style={appBarFlexStyle}>
        <div style={itemStyle}>
          <img
            alt="logo coinmarketcap"
            src="https://assets-global.website-files.com/5f15b50525745912903311ad/5f15b505dd58c115cd49d484_Logo-full-white.svg"
            width={150}
          />
        </div>
        <div style={itemStyle}>CRYPTOCURRENCIES</div>
        <div style={{ ...itemStyle, justifyContent: "flex-end" }}>WATCHLIST</div>
      </div>
    </div>
  );
};

export default Nav;
