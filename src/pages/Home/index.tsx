import React from "react";
import { ScrollView } from "react-native";

import Header from "../../components/Header";
import Informations from "../../components/Informations";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <Informations />
        <Main />
        <Footer />
      </ScrollView>
    </>
  );
};

export default Home;
