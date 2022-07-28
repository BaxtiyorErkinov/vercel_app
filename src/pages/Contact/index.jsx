import React from 'react';

//components
import PagesBanner from '../../components/PagesBanner';
import WriteMessage from '../../components/WriteMessage';

const Contact = () => {
  return (
    <div>
      <PagesBanner
        page="HOME - CONTACT"
        pagetitle="CONTACT US"
      />
      <WriteMessage />
    </div>
  );
};

export default Contact;
