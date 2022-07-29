import React from 'react';

import Button from '../../components/mainbtn';

import './comments.scss';

const data = [
  {
    id: 1,
    comment:
      'Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet.',
    author: 'DAVID MARTIN',
    img: 'https://meipaly-nextjs.vercel.app/_next/static/images/9-abb37999b9b6ef6237873ee84ce05cad.jpg',
  },
  {
    id: 2,
    comment:
      'Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet.',
    author: 'DAVID MARTIN',
    img: 'https://meipaly-nextjs.vercel.app/_next/static/images/9-abb37999b9b6ef6237873ee84ce05cad.jpg',
  },
  {
    id: 3,
    comment:
      'Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet.',
    author: 'DAVID MARTIN',
    img: 'https://meipaly-nextjs.vercel.app/_next/static/images/9-abb37999b9b6ef6237873ee84ce05cad.jpg',
  },
];

const Comments = () => {
  return (
    <div className="comments__container">
      {data.map((item) => (
        <div className="comment">
          <>
            <div className="author__avatar">
              <img src={item.img} alt="" />
            </div>
            <div className="author__comment">
              <span className="author">{item.author}</span>
              <p className="text">{item.comment}</p>
            </div>
            <div className="comment__action">
              <Button
                text="REPLY"
                width="100px"
                height="40px"
              />
            </div>
          </>
        </div>
      ))}
    </div>
  );
};

export default Comments;
