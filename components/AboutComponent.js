import React, { Component } from 'react';
import { Card, ListItem, Avatar } from 'react-native-elements';
import { View, ScrollView, Text, FlatList } from 'react-native';
import { LEADERS } from '../shared/leaders';


class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leaders: LEADERS,
        }
    }

    static navigationOptions = {
        title: 'About Us'
    };

    render() {
        const renderAboutItem = ({ item, index }) => {
            return (
                <ListItem key={index}>
                    <Avatar rounded source={require('./images/alberto.png')} />
                    <ListItem.Content>
                        <ListItem.Title style={{ fontWeight: '600' }}>
                            {item.name}
                        </ListItem.Title>
                        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            )
        }

        return (
            <ScrollView>
                <History />
                <Card>
                    <Card.Title>Corporate Leadership</Card.Title>
                    <Card.Divider />
                    <FlatList
                        data={this.state.leaders}
                        renderItem={renderAboutItem}
                        keyExtractor={item => item.id}
                    />
                </Card>
            </ScrollView>
        )
    }
}

function History() {
    return (
        <View>
            <Card>
                <Card.Title>Our History</Card.Title>
                <Card.Divider />
                <Text style={{ marginBottom: 20 }}>Started in 2010, Ristorante con Fusion quickly established itself
                as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion
                cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.
                Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on
                your plate the next time you visit us.
            </Text>
                <Text>The restaurant traces its humble beginnings to The Frying Pan,
                a successful chain started by our CEO, Mr. Peter Pan, that featured
                for the first time the world's best cuisines in a pan.
            </Text>
            </Card>
        </View>
    )
}

export default AboutUs;