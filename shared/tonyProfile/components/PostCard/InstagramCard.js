import React from 'react';
import {
  IoIosImages,
  IoIosVideocam,
  IoIosPlay,
  IoIosHeart,
  IoIosChatbubbles,
} from 'react-icons/io';
import { Tag } from 'antd';
import CardWrapper from './InstagramCard.style';

const InstagramCard = ({
  key,
  type,
  image,
  title,
  desc,
  company,
  skill,
  teamRole,
  numberOfView,
  numberOfcomment,
  numberOflike,
  onClick,
  className,
}) => {
  return (
    <CardWrapper
      className={`post-card instagram ${className ? className : ''}`}
      key={key}
      onClick={onClick}
    >
      <img src={image} alt="instagram post" />
      {type === 'gallery' && <IoIosImages />}
      {type === 'video' && <IoIosVideocam />}
      {/* 以下為 havor */}
      <figcaption>
        <div id="projectDesc">
          <div id="title"><b>{`${title}`}</b></div>
          <div>{company}</div>
          <div>{teamRole == `developer`? '開發人員': '維運人員'}</div>
        </div>
      </figcaption>
    </CardWrapper>
  );
};

export default InstagramCard;
