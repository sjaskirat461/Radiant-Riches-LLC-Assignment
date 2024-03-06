// import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import VCards from './components/VCards';
import Footer from './components/Footer';
import HCards from './components/HCards';
import SignUp from './components/SignUp';
import { Fragment } from 'react';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <VCards />
      <HCards />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
