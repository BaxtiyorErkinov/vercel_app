import React from 'react';

import './address.scss';

const data = [
  {
    id: 1,
    city: 'AUSTIN',
    street: '22 Texas West Hills',
    email: 'test@gmail.com',
    phone: '666 888 000',
  },
  {
    id: 2,
    city: 'BOSTON',
    street: '5 Federal Street Bosto',
    email: 'test@gmail.com',
    phone: '666 888 000',
  },
  {
    id: 3,
    city: 'NEW YORK',
    street: '8th Broklyn New York',
    email: 'test@gmail.com',
    phone: '666 888 000',
  },
  {
    id: 4,
    city: 'BALTIMORE',
    street: '3 Lombabr 50 baltimore',
    email: 'test@gmail.com',
    phone: '666 888 000',
  },
];

const Address = () => {
  return (
    <div className="address">
      <div className="address__section__title">
        <p className="title">OUR OFFICES</p>
        <h1 className="subtitle">OFFICES NEAR YOU</h1>
        <p className="desc">
          We are committed to providing our customers with
          exceptional service while offering our employees
          the best training.
        </p>
      </div>
      <div className="address__container">
        {data.map((item) => (
          <div className="address__item">
            <h3 className="city">{item.city}</h3>
            <span className="street">{item.street}</span>
            <span className="email">{item.email}</span>
            <span className="phone">{item.phone}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Address;
