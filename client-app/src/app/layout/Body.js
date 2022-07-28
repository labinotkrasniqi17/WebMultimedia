import React from 'react';
import { ContactForm } from './body/ContactForm';
import { About } from './body/About';
import { ColorChanger } from './body/ColorChanger';
export const Body = () => {
  return (
    <>
      <About />
      <ColorChanger />
      <ContactForm />
    </>
  );
};
