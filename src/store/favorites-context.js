import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {

    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup){
        // React automatically receives the previous state snapshot when calling the state updating function, 
        // in this case prevUserFavorites and setUserFavorites 
        setUserFavorites((prevUserFavorites) => {
            // prevUserFavorites = old set of favorites (previous state snapshot), 
            // favoriteMeetup = new meetup that has been passed as a parameter to addFavouriteHandler()
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    // meetupId identifies the meetup to be removed
    function removeFavoriteHandler(meetupId){
        setUserFavorites(prevUserFavorites => {
            // .filter() returns a new array which has a value taken out of an old array, it takes a function as an argument which 
            // executes for each item in that array and we get that item (meetup) as a parameter, return true if we want to keep that item
            // and false if we want to get rid of it
            // if meetup.id is equal to meetupId, then the function returns false and the item is removed
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId );
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        // you can add a function to change the Favorites values from different components, you add in a POINTER in the context object 
        // which 'points' to the functions which add or remove etc a new component to the object
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };


  return (
    <FavoritesContext.Provider value= {context}>{props.children}</FavoritesContext.Provider>
  );
}

export default FavoritesContext;