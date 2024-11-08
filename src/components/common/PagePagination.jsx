import React from 'react'
import {Pagination} from  '@mui/material'
const PagePagination = ({count}) => {
  return (
    <div className='page_pagination' >
        <Pagination color='primary' count={count} />
    </div>
  )
}

export default PagePagination