import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import Login from './pages/Login';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

const Stack = createStackNavigator();

export class Route extends Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={Login} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        )
    }
}

export default Route

