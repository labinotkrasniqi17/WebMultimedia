import React from 'react';
import { ContactForm } from './body/ContactForm';
import { About } from './body/About';
import { ColorChanger } from './body/ColorChanger';
import { Testimonials } from './body/Testimonials';
import { Features } from './body/Features';
export const Body = () => {
  return (
    <>
      <About />
      <ColorChanger />
      <Features />
      <Testimonials />
      <ContactForm />
    </>
  );
};
