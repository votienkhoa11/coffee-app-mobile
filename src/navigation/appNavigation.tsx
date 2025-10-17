import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
//screens
import LoginScreen from '../screens/login'
//users data
import store from '../app/store'
import configurations from '../configurations'

const Stack = createNativeStackNavigator()

const {
    LOGIN,
} = configurations.screenPath

const stackScreen = {
    [LOGIN]: LoginScreen,
}

function AppNavigation() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    {
                        Object.keys(stackScreen).map((screen, index) => (
                            <Stack.Screen
                                key={index}
                                name={screen}
                                component={stackScreen[screen]}
                            />
                        ))
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
           
    )
}

export default AppNavigation