import React from 'react';
import { Redirect } from "expo-router";

const Page = () => {
  // Directly redirect to the home page without any authentication check
  return <Redirect href="/(root)/(tabs)/home" />;
};

export default Page;