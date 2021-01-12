import React, { Component } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';

import Menu from "./MenuComponent";
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import ContactUs from './ContactComponent';
import AboutUs from './AboutComponent';
import Reservation from './ReservationComponent';
import Favorite from './FavoriteComponent';

import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetLeaders: () => dispatch(fetchLeaders()),
});

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
                options={
                    ({ navigation }) => ({
                        headerLeft: () => (
                            <Icon
                                name='menu'
                                size={24}
                                color='white'
                                onPress={() =>
                                    navigation.toggleDrawer()}
                            />
                        )

                    })
                }
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
                options={
                    ({ navigation }) => ({
                        headerLeft: () => (
                            <Icon
                                name='menu'
                                size={24}
                                color='white'
                                onPress={() =>
                                    navigation.toggleDrawer()}
                            />
                        )

                    })
                }
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
                name="Contact Us"
                component={ContactUs}
                options={
                    ({ navigation }) => ({
                        headerLeft: () => (
                            <Icon
                                name='menu'
                                size={24}
                                color='white'
                                onPress={() =>
                                    navigation.toggleDrawer()}
                            />
                        )

                    })
                }
            />
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
                component={AboutUs}
                options={
                    ({ navigation }) => ({
                        headerLeft: () => (
                            <Icon
                                name='menu'
                                size={24}
                                color='white'
                                onPress={() =>
                                    navigation.toggleDrawer()}
                            />
                        )

                    })
                } />
        </AboutNavigator.Navigator>
    )
}

const CustomDrawerContentComponent = (props) => {
    return (
        <ScrollView>
            <View style={styles.drawerHeader}>
                <View style={{ flex: 1 }}>
                    <Image source={require('./images/logo.png')}
                        style={styles.drawerImage}
                    />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.drawerHeaderText}>
                        Ristorante Con Fusion
                    </Text>
                </View>
            </View>
            <DrawerItemList {...props} />
        </ScrollView>
    )
};

const ReservationNavigator = createStackNavigator();

function ReservationNavigatorScreen() {
    return (
        <ReservationNavigator.Navigator
            initialRouteName='Reservation'
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
            <ReservationNavigator.Screen
                name="Reservation"
                component={Reservation}
                options={
                    ({ navigation }) => ({
                        headerLeft: () => (
                            <Icon
                                name='menu'
                                size={24}
                                color='white'
                                onPress={() =>
                                    navigation.toggleDrawer()}
                            />
                        )

                    })
                }
            />
        </ReservationNavigator.Navigator>
    )
}

const FavoriteNavigator = createStackNavigator();

function FavoriteNavigatorScreen() {
    return (
        <FavoriteNavigator.Navigator
            initialRouteName='My Favorite'
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
            <FavoriteNavigator.Screen
                name="My Favorite"
                component={Favorite}
                options={
                    ({ navigation }) => ({
                        headerLeft: () => (
                            <Icon
                                name='menu'
                                size={24}
                                color='white'
                                onPress={() =>
                                    navigation.toggleDrawer()}
                            />
                        )

                    })
                }
            />
        </FavoriteNavigator.Navigator>
    )
}

const Drawer = createDrawerNavigator();

function MainNavigator({ navigation }) {
    return (

        <Drawer.Navigator
            initialRouteName="Home"
            drawerStyle={{ backgroundColor: '#D1C4E9' }}
            drawerContent={props => <CustomDrawerContentComponent {...props} />}
        >
            <Drawer.Screen
                name="Home"
                component={HomeNavigatorScreen}
                options={{
                    drawerIcon: ({ tinrColor }) => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            size={24}
                            color={tinrColor}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="About Us"
                component={AboutNavigatorScreen}
                options={{
                    drawerIcon: ({ tinrColor }) => (
                        <Icon
                            name='address-card'
                            type='font-awesome'
                            size={24}
                            color={tinrColor}
                        />
                    )
                }} />
            <Drawer.Screen
                name="Menu"
                component={MenuNavigatorScreen}
                options={{
                    drawerIcon: ({ tinrColor }) => (
                        <Icon
                            name='list'
                            type='font-awesome'
                            size={24}
                            color={tinrColor}
                        />
                    )
                }} />
            <Drawer.Screen
                name="Contact Us"
                component={ContactNavigatorScreen}
                options={{
                    drawerIcon: ({ tinrColor }) => (
                        <Icon
                            name='info-circle'
                            type='font-awesome'
                            size={24}
                            color={tinrColor}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Reservation"
                component={ReservationNavigatorScreen}
                options={{
                    drawerIcon: ({ tinrColor }) => (
                        <Icon
                            name='cutlery'
                            type='font-awesome'
                            size={24}
                            color={tinrColor}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="My Favorite"
                component={FavoriteNavigatorScreen}
                options={{
                    drawerIcon: ({ tinrColor }) => (
                        <Icon
                            name='heart'
                            type='font-awesome'
                            size={24}
                            color={tinrColor}
                        />
                    )
                }}
            />
        </Drawer.Navigator>

    );
}

class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetLeaders();
    }

    render() {

        return (
            <NavigationContainer>
                <MainNavigator />
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);