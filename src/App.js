import React, {useState} from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import {SliderData} from './data/SliderData';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Navbar toggle={toggle} ></Navbar>
      <Dropdown isOpen={isOpen} toggle={toggle} ></Dropdown>
      <Hero slides={SliderData}></Hero>
      <InfoSection {...InfoData} />
    </>
  );
}

export default App;
