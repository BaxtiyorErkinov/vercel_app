import React from 'react';
import Pagination from '@mui/material/Pagination';

import "./pagination.scss"

const CustomePagination = ({
  activePageIndex = 1,
  pagesCount = 0,
  onChange = () => {},
}) => {
  return (
    <Pagination
      count={5}
      variant="outlined"
      // page={activePageIndex}
      // onChange={(e) => onChange(Number(e.target.innerText))}
     />
  );
};
export default CustomePagination;
