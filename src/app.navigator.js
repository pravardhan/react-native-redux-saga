import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	Text,
	Image,
	View,
} from 'react-native';

import { addNavigationHelpers, StackNavigator, TabNavigator, SwitchNavigator, NavigationActions } from 'react-navigation';

import Signin from './authentication/signin/signin.component';
import Dashboard from './home/dashboard/dashboard.component';
import ProfileInfo from './profile/profileInfo/profileInfo.component';

const authenticationNavigatorConfig = {};
const homeNavigatorConfig = {};
const profileNavigatorConfig = {};


authenticationNavigatorConfig['SIGNIN'] = {
    screen: Signin
};

homeNavigatorConfig['DASHBOARD'] = {
    screen: Dashboard
};

profileNavigatorConfig['PROFILE_INFO'] = {
    screen: ProfileInfo
};

export const AuthenticationNavigator = StackNavigator(authenticationNavigatorConfig);

export const AppNavigator = TabNavigator({
    Home: {
        screen: StackNavigator(homeNavigatorConfig)
    },
    Profile: {
        screen: StackNavigator(profileNavigatorConfig)
    }
});

export const SwitchNavigatorState = SwitchNavigator({
    AuthenticationNavigator,
    AppNavigator
}, {
    initialRouteName: 'AuthenticationNavigator',
})

const AppWithNavigationState = ({ dispatch, nav }) => {
	return (<SwitchNavigatorState />);
};

const mapStateToProps = (state) => ({
	nav : state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);