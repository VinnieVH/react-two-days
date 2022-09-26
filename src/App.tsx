import { List } from "./components";
import Nav from "./views/nav/Nav";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./views/404/PageNotFound";
import { DetailsView } from "./views/details-view/DetailsView";
import LastSelectedCoinHandler from "./contexts/LastSelectedCoinContext";

const App = () => {
  return (
    <>
      <LastSelectedCoinHandler>
        <Nav />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/:id" element={<DetailsView />} />
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </LastSelectedCoinHandler>
    </>
  );
};

export default App;
