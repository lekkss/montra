import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="signup"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="forgotPassword"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sent"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
