// importing Routes as Switch component is outdated, as per YT comment under video
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  // domain eg is localhost:3000 or my-page.com
  // path eg is localhost:3000/products or my-page.com/products
  // to use nested components (every change of page just adds a new component), format is: 
  // <Route path = '/'> <AllMeetupsPage /> <Route>
  // <Route path = '/favorites'> <FavoritesPage /> <Route>

  return (
    <Layout>
       <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
