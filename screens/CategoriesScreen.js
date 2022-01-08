import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { CATEGOIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { HeaderButtons, Item, OverflowMenuProvider } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGOIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};
CategoriesScreen.navigationOptions = (navData) => {
  return {
  headerTitle: "Meal Categories",
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoriesScreen;
