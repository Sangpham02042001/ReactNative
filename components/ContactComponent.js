import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { Text, View } from 'react-native';

class ContactUs extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Contact Us'
    };

    render() {
        return (
            <Card>
                <Card.Title style={{ fontSize: '18px' }}>Contact Information</Card.Title>
                <Card.Divider />
                <Text style={{
                    paddingTop: 10,
                    paddingBottom: 10
                }}
                >
                    121, Clear Water Bay Road
                        </Text>
                <Text style={{
                    paddingTop: 10,
                    paddingBottom: 10
                }}
                >Clear Water Bay, Kowloon</Text>
                <Text style={{
                    paddingTop: 10,
                    paddingBottom: 10
                }}
                >HONG KONG</Text>
                <Text style={{
                    paddingTop: 10,
                    paddingBottom: 10
                }}
                >Tel: +852 1234 5678</Text>
                <Text style={{
                    paddingTop: 10,
                    paddingBottom: 10
                }}
                >Fax: +852 8765 4321</Text>
                <Text style={{
                    paddingTop: 10,
                    paddingBottom: 10
                }}
                >Email: confusion@food.net</Text>
            </Card>
        );
    }
}

export default ContactUs;