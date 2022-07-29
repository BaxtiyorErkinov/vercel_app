import React from 'react';

//components
import Address from '../../components/Address';
import PagesBanner from '../../components/PagesBanner';
import WriteMessage from '../../components/WriteMessage';

const Contact = () => {
  return (
    <div className="contact_page">
      <PagesBanner
        page="HOME - CONTACT"
        pagetitle="CONTACT US"
      />
      <WriteMessage />
      <Address />
    </div>
  );
};

export default Contact;
