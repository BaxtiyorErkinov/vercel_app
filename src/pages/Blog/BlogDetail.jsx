import { Grid } from '@mui/material';
import React from 'react';
import BlogBoxes from '../../components/BlogBoxes';
import Comments from '../../components/Comments';
import CustomeInput from '../../components/CustomeInput';
import Button from '../../components/mainbtn';

//components
import PageBanner from '../../components/PagesBanner/';

import './blogdetail.scss';
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
const BlogDetail = () => {
  return (
    <div className="blogdetail__page">
      <PageBanner
        page="HOME - BLOG"
        pagetitle="BLOG DETAILS"
      />
      <div className="detailed__blog__container">
        <Grid container columnSpacing={5}>
          <Grid item md={8} sm={12} xs={12}>
            <div className="detailed__blog">
              <div className="banner">
                <img
                  src="https://meipaly-nextjs.vercel.app/_next/static/images/7-a85cc517c03a29c5a5f8cf578805ab18.jpg"
                  alt=""
                />
              </div>
              <div className="content">
                <div className="date">
                  <span>20 NOV</span>
                </div>
                <h2 className="title">
                  BECOME THE BEST SALE MARKETER
                </h2>
                <div className="blog__info">
                  <span className="author">
                    BY LAYERDROPS -{' '}
                  </span>
                  <span className="likes__count">
                    30 likes -{' '}
                  </span>
                  <span className="comments__count">
                    2 comments
                  </span>
                </div>
                <div className="blog__desc">
                  <p className="desc1">
                    There are many variations of passages of
                    Lorem Ipsum available, but the majority
                    have suffered alteration in some form,
                    by injected humour, or randomised words
                    which don't look even slightly
                    believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be
                    sure there isn't anything embarrassing
                    hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet
                    tend to repeat predefined chunks as
                    necessary, making this the first true
                    generator on the Internet. It uses a
                    dictionary of over 200 Latin words,
                    combined with a handful of model
                    sentence structures, to generate Lorem
                    Ipsum which looks reasonable. The
                    generated Lorem Ipsum is therefore
                    always free from repetition, injected
                    humour, or non-characteristic words etc.
                  </p>
                  <p className="desc2">
                    It is a long established fact that a
                    reader will be distracted by the
                    readable content of a page when looking
                    at its layout. The point of using Lorem
                    Ipsum is that it has a more-or-less
                    normal distribution of letters, as
                    opposed to using 'Content here, content
                    here', making it look like readable
                    English. Many desktop publishing
                    packages and web page editors now use
                    Lorem Ipsum as their default model text,
                    and a search for 'lorem ipsum' will
                    uncover many web sites still in their
                    infancy. Various versions have evolved
                    over the years, sometimes by accident,
                    sometimes on purpose injected humour and
                    the like.
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="tags">
              <span className="tags">TAGS: </span>
              <ul>
                <li>
                  Business, Agency, Digital, Technology
                </li>
              </ul>
            </div>
            <div className="comments__wrapper">
              <h2 className="comments__title">
                2 COMMENTS
              </h2>
              <Comments />
            </div>
            <div className="leaveComment">
              <h2 className="leaveComment__title">
                LEAVE A COMMENT
              </h2>
              <Grid
                container
                rowSpacing={3}
                columnSpacing={3}>
                <Grid item md={6} sm={6} xs={12}>
                  <CustomeInput
                    placeholder="Firts Name"
                    height={70}
                    type="text"
                  />
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <CustomeInput
                    placeholder="Last Name"
                    height={70}
                    type="text"
                  />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <CustomeInput
                    placeholder="Write Message"
                    height={140}
                    mb={30}
                    type="text"
                  />
                </Grid>
              </Grid>
              <Button text="send message" />
            </div>
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <div className="blogdetail__rightSection">
              <div className="blogdetail__searchbar">
                <label>
                  <input
                    type="text"
                    placeholder="SEARCH HERE..."
                  />
                </label>
              </div>
              <Grid container columnSpacing={5}>
                <Grid item md={12} sm={6} xs={12}>
                  <BlogBoxes title="LATEST POSTS">
                    {data.map((item) => (
                      <div className="latest__posts">
                        <div className="latestpost">
                          <div className="img">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="content">
                            <p>
                              BASIC RULES OF RUNNING WEB
                              AGENCY
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </BlogBoxes>
                </Grid>
                <Grid item md={12} sm={6} xs={12}>
                  <BlogBoxes title="CATEGORIES">
                    <div className="blogs__categories">
                      <ul>
                        <li>Business</li>
                        <li>Introductions</li>
                        <li>One Page Template</li>
                        <li>Parallax Effects</li>
                        <li>New Technologies</li>
                        <li>Video Backgrounds</li>
                      </ul>
                    </div>
                  </BlogBoxes>
                </Grid>
                <Grid item md={12} sm={6} xs={12}>
                  <BlogBoxes title="CATEGORIES">
                    <div className="blogs__tags">
                      <ul>
                        <li>Business</li>
                        <li>Introductions</li>
                        <li>One Page Template</li>
                        <li>Parallax Effects</li>
                        <li>New Technologies</li>
                        <li>Video Backgrounds</li>
                      </ul>
                    </div>
                  </BlogBoxes>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default BlogDetail;
