import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import {
  HeaderButtons,
  Item,
  OverflowMenuProvider,
} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FiltersSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.accentColor, false: "rgb(200, 202, 204)" }}
        thumbColor={Colors.accentColor}
        value={props.value}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilter = useCallback(() => {
    const appliedfilter = {
      GlutenFree: isGlutenFree,
      LactoseFree: isLactoseFree,
      Vegan: isVegan,
      Vegetarian: isVegetarian,
    };
    console.log(appliedfilter);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.getParam({
      save: saveFilter,
    });
  }, [saveFilter]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FiltersSwitch
        label="Gluten-free"
        value={isGlutenFree}
        onChange={(newVal) => setIsGlutenFree(newVal)}
      />
      <FiltersSwitch
        label="Lactose-free"
        value={isLactoseFree}
        onChange={(newVal) => setIsLactoseFree(newVal)}
      />
      <FiltersSwitch
        label="Vegan-free"
        value={isVegan}
        onChange={(newVal) => setIsVegan(newVal)}
      />
      <FiltersSwitch
        label="Vegetarian-free"
        value={isVegetarian}
        onChange={(newVal) => setIsVegetarian(newVal)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Meals",
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
    headerRight: () => (
      <OverflowMenuProvider>
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Save"
            iconName="ios-save"
            onPress={navData.navigation.getParam("save")}
          />
        </HeaderButtons>
      </OverflowMenuProvider>
    ),
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },

  title: {
    fontFamily: "openSans-bold",
    fontSize: 22,
    margin: 16,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
});
export default FiltersScreen;
