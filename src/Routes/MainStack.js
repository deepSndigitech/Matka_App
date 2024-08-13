import React from 'react';
import Home from '../pages/Home/Home';
import Sidebar from './Sidebar';
import Profile from '../pages/Profile/Profile';
import Support from '../pages/Support/Support';
import Term_Condition from '../pages/Term_Condition/Term_Condition';
import Privacy_Policy from '../pages/privacy_Policy/Privacy_Policy';

export default function (Stack) {
    return (
        <>


            <Stack.Screen
                name="Sidebar"
                component={Sidebar}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Support"
                component={Support}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Term_Condition"
                component={Term_Condition}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Privacy_Policy"
                component={Privacy_Policy}
                options={{ headerShown: false }}
            />
        </>
    )
}