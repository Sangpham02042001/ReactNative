import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Menu from "./MenuComponent";
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import ContactUs from './ContactComponent';
import AboutUs from './AboutComponent'

const MenuNavigator = createStackNavigator();

function MenuNavigatorScreen() {
    return (
        <MenuNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                }
            }}
        >
            <MenuNavigator.Screen
                name="Menu"
                component={Menu}
            />

            <MenuNavigator.Screen
                name="Dishdetail"
                component={Dishdetail}
                options={{ headerTitle: "Dish Detail" }}
            />

        </MenuNavigator.Navigator>

    )
};

const HomeNavigator = createStackNavigator();

function HomeNavigatorScreen({ navigation }) {
    return (
        <HomeNavigator.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"
                }
            }}
        >
            <HomeNavigator.Screen
                name="Home"
                component={Home}
            />
        </HomeNavigator.Navigator>
    );
}

const ContactNavigator = createStackNavigator();

function ContactNavigatorScreen() {
    return (
        <ContactNavigator.Navigator
            initialRouteName='Contact Us'
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"
                }
            }}
        >
            <ContactNavigator.Screen
                name='Contact Us'
                component={ContactUs} />
        </ContactNavigator.Navigator>
    )
}

const AboutNavigator = createStackNavigator();

function AboutNavigatorScreen() {
    return (
        <AboutNavigator.Navigator
            initialRouteName='About Us'
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"
                }
            }}
        >
            <AboutNavigator.Screen
                name="About Us"
                component={AboutUs} />
        </AboutNavigator.Navigator>
    )
}

const Drawer = createDrawerNavigator();

function MainNavigator({ navigation }) {
    return (

        <Drawer.Navigator
            initialRouteName="Home"
            drawerStyle={{ backgroundColor: '#D1C4E9' }}>
            <Drawer.Screen name="Home" component={HomeNavigatorScreen} />
            <Drawer.Screen name="About Us" component={AboutNavigatorScreen} />
            <Drawer.Screen name="Menu" component={MenuNavigatorScreen} />
            <Drawer.Screen name="Contact Us" component={ContactNavigatorScreen} />
        </Drawer.Navigator>

    );
}

class Main extends Component {

    render() {

        return (
            <NavigationContainer>
                <MainNavigator />
            </NavigationContainer>
        );
    }
}

export default Main;