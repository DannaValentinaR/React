<<<<<<< HEAD
import { View, Text, Image } from 'react-native'
import {  Tabs, Redirect } from 'expo-router';

import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image 
            source ={icon}
            resizeMode="contain"
            tintColor={color}
            className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{color:color}}>
                {name}
            </Text>
        </View>
    )
}
const TabsLayout = () => {
  return (
    <>
      <Tabs
      screenOptions={{
        tabBarShowLabel :false,
        tabBarActiveTintColor:'#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
            backgroundColor:'#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 84,
        }
      }}
      >

        <Tabs.Screen
        name ="home"
        options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused}) =>(
                <TabIcon
=======
import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";
import { Image, Text, View } from "react-native";

import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
        style={{ width: 40, height: 24 }} 

      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 80,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
>>>>>>> 3d6169b81580d101b6d0cd6bab9ea1422f7b0c7b
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
<<<<<<< HEAD
                />
            )
        }}
        />
        <Tabs.Screen
        name ="bookmark"
        options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({ color, focused}) =>(
                <TabIcon
=======
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
>>>>>>> 3d6169b81580d101b6d0cd6bab9ea1422f7b0c7b
                icon={icons.bookmark}
                color={color}
                name="Bookmark"
                focused={focused}
<<<<<<< HEAD
                />
            )
        }}
        />
        <Tabs.Screen
        name ="create"
        options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused}) =>(
                <TabIcon
=======
              />
            ),
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
>>>>>>> 3d6169b81580d101b6d0cd6bab9ea1422f7b0c7b
                icon={icons.plus}
                color={color}
                name="Create"
                focused={focused}
<<<<<<< HEAD
                />
            )
        }}
        />
        <Tabs.Screen
        name ="profile"
        options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused}) =>(
                <TabIcon
=======

              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
>>>>>>> 3d6169b81580d101b6d0cd6bab9ea1422f7b0c7b
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
<<<<<<< HEAD
                />
            )
        }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout
=======
              />
            ),
          }}
        />
      </Tabs>

    
    </>
  );
};

export default TabLayout;
>>>>>>> 3d6169b81580d101b6d0cd6bab9ea1422f7b0c7b
