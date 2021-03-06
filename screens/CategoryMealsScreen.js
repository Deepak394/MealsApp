import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  FlatList,
} from "react-native";
import MealList from "../components/MealList";

import { CATEGOIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  
  const catId = props.navigation.getParam("categoryId");
  // const selectedCategory = CATEGOIES.find((cat) => cat.id === catId);
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  return (
    <MealList listData={displayedMeals} navigation={props.navigation}/>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGOIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};
const styles = StyleSheet.create({

});
export default CategoryMealsScreen;
