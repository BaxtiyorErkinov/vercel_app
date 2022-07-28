import React, { useState } from 'react';

import Img1 from '../../assets/images/benefit1.jpg';
import Img2 from '../../assets/images/benefit2.jpg';
import Img3 from '../../assets/images/benefit3.jpg';
import { AiOutlineCheck } from 'react-icons/ai';

import './benefits.scss';

const benefits = [
  {
    id: 1,
    desc: "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    ben1: ' Self-contained, state-of-the-art time clock',
    ben2: 'Scalability of up to 500 employees per time clock',
    ben3: 'The ability to connect up to 32 time clocks',
    ben4: 'Employee self-enrollment',
    ben5: 'Payroll integration',
    ben6: 'Built-in backup camera to verify failed punches',
    img: Img1,
  },
  {
    id: 2,
    desc: "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    ben1: ' Self-contained, state-of-the-art time clock',
    ben2: 'Scalability of up to 500 employees per time clock',
    ben3: 'The ability to connect up to 32 time clocks',
    ben4: 'Employee self-enrollment',
    ben5: 'Payroll integration',
    ben6: 'Built-in backup camera to verify failed punches',
    img: Img2,
  },
  {
    id: 3,
    desc: "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    ben1: ' Self-contained, state-of-the-art time clock',
    ben2: 'Scalability of up to 500 employees per time clock',
    ben3: 'The ability to connect up to 32 time clocks',
    ben4: 'Employee self-enrollment',
    ben5: 'Payroll integration',
    ben6: 'Built-in backup camera to verify failed punches',
    img: Img3,
  },
];

const tabs = [
  {
    id: 1,
    title: 'Latest Technology',
  },
  {
    id: 2,
    title: 'Awesome Support',
  },
  {
    id: 3,
    title: '1 click demo install',
  },
];

const Benefits = () => {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div className="benefits">
      <div className="benefits__tabs">
        {tabs.map((el) => (
          <div
            className={`benefits__tab ${
              el.id === selectedId ? 'active-tab' : ''
            }`}
            key={el.id}
            onClick={() => setSelectedId(el.id)}>
            <span>{el.title}</span>
          </div>
        ))}
      </div>
      <div className="benefits__items">
        {benefits.map((item) => (
          <>
            {selectedId === item.id ? (
              <div className="benefit__item" key={item.id}>
                {item.id % 2 !== 0 ? (
                  <>
                    <div className="content__section">
                      <p className="desc">{item.desc}</p>
                      <div className="all__benefits">
                        <p className="benefit">
                          <span>
                            <AiOutlineCheck />
                          </span>
                          {item.ben1}
                        </p>
                        <p className="benefit">
                          <span>
                            <AiOutlineCheck />
                          </span>
                          {item.ben2}
                        </p>
                        <p className="benefit">
                          <span>
                            <AiOutlineCheck />
                          </span>
                          {item.ben3}
                        </p>
                        <p className="benefit">
                          <span>
                            <AiOutlineCheck />
                          </span>
                          {item.ben4}
                        </p>
                        <p className="benefit">
                          <span>
                            <AiOutlineCheck />
                          </span>
                          {item.ben5}
                        </p>
                        <p className="benefit">
                          <span>
                            <AiOutlineCheck />
                          </span>
                          {item.ben6}
                        </p>
                      </div>
                    </div>
                    <div className="img__section">
                      <img src={item.img} alt="" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="img__section">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="content__section">
                      <p className="desc">{item.desc}</p>
                      <div className="all__benefits">
                        <p className="benefit">
                          <span>
                            <AiOutlineCheck />
                          </span>
                          {item.ben1}
                        </p>
                        <p className="benefit">
                          <span>
                            <AiOutlineCheck />
                          </span>
                          {item.ben2}
                        </p>
                        <p className="benefit">
                          <span>
                            <AiOutlineCheck />
                          </span>
                          {item.ben3}
                        </p>
                        <p className="benefit">
                          <span>
                            <AiOutlineCheck />
                          </span>
                          {item.ben4}
                        </p>
                        <p className="benefit">
                          <span>
                            <AiOutlineCheck />
                          </span>
                          {item.ben5}
                        </p>
                        <p className="benefit">
                          <span>
                            <AiOutlineCheck />
                          </span>
                          {item.ben6}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <></>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
