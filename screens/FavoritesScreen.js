import React from 'react';
import MealList from "../components/MealList";
import {MEALS} from "../data/dummy-data";
import { HeaderButtons, Item, OverflowMenuProvider } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const FavoritesScreen = (props) => {
    const favMeal = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return (
       <MealList listData={favMeal} navigation={props.navigation}/>
    )
}
FavoritesScreen.navigationOptions = (navData) => {
    return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <OverflowMenuProvider>
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
    </OverflowMenuProvider>
  ),
      }
  };

export default FavoritesScreen
