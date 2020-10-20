import React from 'react';
import { withRouter } from 'react-router-dom';
import './Menu-item.style.scss';

const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => (
    <div onClick={() => history.push(`${match.url}${linkUrl}`)} className={`${size} menu-item`}>
      <div className='background-image'  style={{backgroundImage: `url(${imageUrl})` }}/>
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">shop now</span>
        </div>
      </div> 
)  

export default withRouter(MenuItem);