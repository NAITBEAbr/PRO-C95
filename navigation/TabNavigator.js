import React from 'react';
import { createBottonTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";

const Tab = createBottonTabNavigator();

const BottonTabNavigator = () => {
 return (
  <Tab.Navigator
  ScreenOptions={({ route }) => ({
   tabBarIcon: ({ focused, color, size }) => {
    let iconName;
     if (route.name === 'Feed') {
      iconName = focused
      ? 'book'
      : 'book-outline';
} else if (route.name === 'CriarPost') {
    iconName = focused ? 'create' : 'create-outline';
}

return <Ionicons name={iconName} size={size} color={color} />;
},
})}
TabBarOptions={{ 
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
}}
>

<Tab.Screen name="Feed" component={Feed} />
<Tab.Screen name="criarPost" component={createPost} />
 </Tab.Navigator>
 );
}

export default BottomTabNavigator
