import React from 'react';

//components
import { Grid } from '@mui/material';

import './clients.scss';

const data = [
  { id: 1, title: 'PROJECTS COMPLETED', count: 705 },
  { id: 2, title: 'ACTIVE CLIENTS', count: 480 },
  { id: 3, title: 'CUPS OF COFFEE', count: 626 },
  { id: 4, title: 'HAPPY CLIENTS', count: 774 },
];

const Clients = () => {
  return (
    <div className="clients__container">
      <Grid container>
        {data.map((item) => (
          <Grid item md={3} sm={6} xs={12} key={item.id}>
            <div className="clients__status__item">
              <p className="count">{item.count}</p>
              <p className="title">{item.title}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Clients;
