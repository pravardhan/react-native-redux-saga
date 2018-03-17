import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from './app.navigator';

import authentication from './authentication/authentication.reducer';
import home from './home/home.reducer';
import profile from './profile/profile.reducer';

function nav(state = AppNavigator.router.getStateForAction(NavigationActions.init()), action) {
	return state;
}

const appReducer = combineReducers({
    nav,
	authentication,
    home,
    profile
});
export default appReducer;