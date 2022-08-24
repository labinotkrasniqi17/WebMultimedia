import React from 'react';
import { ContactForm } from './body/ContactForm';
import { About } from './body/About';
import { ColorChanger } from './body/ColorChanger';
import { Testimonials } from './body/Testimonials';
import { Features } from './body/Features';
import { Purchase } from './body/Purchase';
import { Download } from './body/Download';
import { Available } from './body/Available';
export const Body = () => {
  return (
    <>
      <About />
      <Testimonials />
      <Features />
      <Purchase />
      <ColorChanger />
      <Download />
      <Available />
      <ContactForm />
    </>
  );
};
