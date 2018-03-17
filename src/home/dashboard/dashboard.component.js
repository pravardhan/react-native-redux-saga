import React, { Component } from 'react';

import {
	Text,
	View,
	TextInput,

} from 'react-native';

import { connect } from 'react-redux';

import styles from './dashboard.styles';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>Dashboard</Text>
                <TextInput />
                <TextInput />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(Dashboard);