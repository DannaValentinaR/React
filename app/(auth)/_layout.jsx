import { View, Text } from 'react-native'
<<<<<<< HEAD
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const AuthLayout = () => {
  return (
    <>
        <Stack>
            <Stack.Screen
                name="sign-in"
                options={{
                 headerShown: false
                }}
            />
            <Stack.Screen
                name="sign-up"
                options={{
                headerShown: false
                }}
            />
        </Stack>
        <StatusBar backgroundColor="#161622" style="light" />
    </>
=======
import React from 'react'

const AuthLayout = () => {
  return (
    <View>
      <Text>AuthLayout</Text>
    </View>
>>>>>>> 3d6169b81580d101b6d0cd6bab9ea1422f7b0c7b
  )
}

export default AuthLayout