import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, Modal, Button } from 'react-native';
import { Card, Icon, Rating, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postComment, postFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => ({
    postFavorite: (dishId) => dispatch(postFavorite(dishId)),
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
})

function RenderDish(props) {

    const dish = props.dish;

    if (dish != null) {
        return (
            <Card>
                <Card.Image
                    source={{ uri: baseUrl + dish.image }}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Card.FeaturedTitle>{dish.name}</Card.FeaturedTitle>
                </Card.Image>
                <Text style={{ margin: 10 }}>
                    {dish.description}
                </Text>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                    <Icon
                        raised
                        reverse
                        name={props.favorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color="#f50"
                        onPress={() => props.favorite ? console.log("Already favorite") : props.onPress()}
                    />
                    <Icon
                        raised
                        reverse
                        name='pencil'
                        type='font-awesome'
                        color='#512DA8'
                        onPress={() => props.onAddComment()}
                    />
                </View>
            </Card>
        );
    }
    else {
        return (<View></View>);
    }
}

function RenderComments(props) {
    const comments = props.comments;

    const renderCommentItem = ({ item, index }) => {
        return (
            <View
                key={index}
                style={{ margin: 10 }}
            >
                <Text style={{ fontSize: 14 }}>
                    {item.comment}
                </Text>
                <Rating
                    style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}
                    imageSize={20}
                    readonly
                    startingValue={item.rating} />
                <Text style={{ fontSize: 12 }}>
                    {'-- ' + item.author + ', ' + item.date}
                </Text>
            </View>
        )
    }

    return (
        <Card>
            <Card.Title>Comments</Card.Title>
            <Card.Divider />
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()} />
        </Card>
    );
}

class Dishdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author: '',
            comment: '',
            rating: 0,
            showModal: false,
        }
    }

    handleComment(dishId, rating, author, comment) {
        console.log(JSON.stringify(this.state));
        this.toggleModal();
        this.props.postComment(dishId, rating, author, comment)
    }

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    resetForm() {
        this.setState({
            author: '',
            comment: '',
            rating: 0,
        })
    }

    markFavorite(dishId) {
        this.props.postFavorite(dishId);
    }

    render() {
        const dishId = this.props.route.params.dishId;

        return (
            <ScrollView>
                <RenderDish
                    dish={this.props.dishes.dishes[+dishId]}
                    favorite={this.props.favorites.some(el => el === dishId)}
                    onAddComment={() => this.toggleModal()}
                    onPress={() => this.markFavorite(dishId)}
                />
                <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId === dishId)} />
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onDismiss={() => { this.toggleModal(); this.resetForm() }}
                    onRequestClose={() => { this.toggleModal(); this.resetForm() }}
                >
                    <Rating
                        style={{ marginTop: 20 }}
                        showRating
                        fractions={1}
                        onFinishRating={(rating) => this.setState({ rating: rating })}
                        startingValue={this.state.rating} />
                    <Input
                        onChangeText={(value) => this.setState({ author: value })}
                        placeholder='Author'
                        leftIcon={
                            <Icon
                                name='user'
                                type='font-awesome'
                                size={24}
                                color='black'
                            />
                        }
                    />
                    <Input
                        onChangeText={(value) => this.setState({ comment: value })}
                        placeholder='Comment'
                        leftIcon={
                            <Icon
                                name='comment'
                                type='font-awesome'
                                size={24}
                                color='black'
                            />
                        }
                    />
                    <View style={{ backgroundColor: "#512DA8", margin: 20 }}>
                        <Button
                            title="Submit"
                            color="white"
                            onPress={() => this.handleComment(dishId, this.state.rating, this.state.author, this.state.comment)}
                        />
                    </View>
                    <View style={{ backgroundColor: "gray", margin: 20, marginTop: 0 }}>
                        <Button
                            title="Cancel"
                            color="white"
                            onPress={() => this.toggleModal()}
                        />
                    </View>
                </Modal>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dishdetail);