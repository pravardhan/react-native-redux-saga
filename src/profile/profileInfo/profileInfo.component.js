import React, { Component } from 'react';

import {
	Text,
	View,

} from 'react-native';

import { connect } from 'react-redux';

import styles from './profileInfo.styles';

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>Profile</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(Profile);