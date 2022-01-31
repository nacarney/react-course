import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";

import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
   const favoritesCtx = useContext(FavoritesContext);
   
   // declaring a js variable
   let content;

   if(favoritesCtx.totalFavorites === 0 ){
       // storing JSX code in variables is allowed, as below 
       content = <p> You haven't got any Favorites yet. Start adding some?</p>
   } else{
       content =  <MeetupList meetups = {favoritesCtx.favorites} />
   }

    return <section><h1>My Favorites</h1>
    {content}
    </section>;
    }
    
    export default FavoritesPage;