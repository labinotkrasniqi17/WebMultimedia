import React from 'react';
import { ContactForm } from './body/ContactForm';
import { About } from './body/About';
import { ColorChanger } from './body/ColorChanger';
import { Testimonials } from './body/Testimonials';
export const Body = () => {
  return (
    <>
      <About />
      <ColorChanger />
      <Testimonials />
      <ContactForm />
    </>
  );
};
