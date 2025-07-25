import React from 'react';
import FormSection from './FormSection.jsx';
import Services from '../components/contact/Services.jsx';
import ContactBreadcrumbLinks from '../components/contact/ContactBreadcrumbLinks.jsx';
import IntroParagraphs from '../components/contact/IntroParagraphs.jsx';
import AboutUsSection from '../components/contact/AboutUsSection.jsx';
import ContactCardsSection from '../components/contact/ContactCardsSection.jsx';

import '../styles/contact.css'; 

function ContactPage() {
  return (
    <>
        <div className="container">
          <div className="row my-5 mb-0">
            <ContactBreadcrumbLinks />
          </div>
          <div className="row mb-5">
            <IntroParagraphs />
          </div>
        </div>

        <AboutUsSection />
        <ContactCardsSection />
        <FormSection />
        <Services />
    </>
  );
}

export default ContactPage;