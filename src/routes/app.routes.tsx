import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Dashboard } from '../components/Dashboard';
import { FontAwesome } from '@expo/vector-icons';
import theme from '../global/styles/theme';
import { InformCards } from '../components/InformCards';


const {Navigator, Screen} = createBottomTabNavigator();


export function AppRoutes(){
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.shape,
                tabBarInactiveTintColor: theme.colors.secundary,
                tabBarActiveBackgroundColor:'#9152b6',
                
            }}
        >
            <Screen
                name="Home"
                component={Dashboard}
                options={{
                    tabBarIcon:(({size, color}) =>
                    <FontAwesome 
                        name="home"
                        size={size}
                        color={color}
                    />
                    )
                }}
             />

            <Screen
                name="Setting"
                component={InformCards}
                options={{
                    tabBarIcon:(({size, color}) =>
                    <FontAwesome 
                        name="gear"
                        size={size}
                        color={color}
                    />
                    
                    )
                }}
             />

            <Screen
                name="Config"
                component={InformCards}
                options={{
                    tabBarIcon:(({size, color}) =>
                    <FontAwesome 
                        name="user"
                        size={size}
                        color={color}
                    />
                    )
                }}
             />

            <Screen
                name="Email"
                component={Dashboard}
                options={{
                    tabBarIcon:(({size, color}) =>
                    <FontAwesome 
                        name="envelope"
                        size={size}
                        color={color}
                    />
                    )
                }}
             />
        </Navigator>
    )
}