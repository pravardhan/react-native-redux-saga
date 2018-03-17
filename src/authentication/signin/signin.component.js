import React, { Component } from 'react';

import {
	Text,
	View,
	TextInput,
    Button,

} from 'react-native';

import { connect } from 'react-redux';

import styles from './signin.styles';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }
    onChangeUserName = (username)=> {
        this.setState({
            username
        });
    }
    submit = ()=> {
        const { dispatch } = this.props;
        dispatch({
            type: 'GET_USER_INFO',
            username: this.state.username
        });
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>ENTER GITHUB USERNAME</Text>
                <TextInput value={this.state.username} onChangeText={this.onChangeUserName} />
                <Button onPress={this.submit} title={'Submit'} value={'Submit '}/>
            </View>
        )
    }
    componentWillReceiveProps(newProps) {
        if(newProps.userInfo) {
            this.props.navigation.navigate('Home');
        }
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.authentication.userInfo
});

export default connect(mapStateToProps)(Signin);