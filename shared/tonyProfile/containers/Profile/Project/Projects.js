import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import {
  FiHeart,
  FiShare,
  FiBookmark,
  FiMessageCircle,
  FiMoreHorizontal,
} from 'react-icons/fi';
import { Tag } from 'antd';
import GlideCarousel, { GlideSlide } from '@iso/ui/GlideCarousel/GlideCarousel';
import Modal from '@iso/ui/Antd/Modal/Modal';
import PostCard from '@iso/components/PostCard';
import AvatarCard from '@iso/components/AvatarCard/AvatarCard';
import Comments from './Comments';
import ProjectsWrapper, { Button, ContentWrapper } from './Projects.styles';

const galleryOptions = {
  gap: 0,
};

const Projects = ({ data, avatar, username }) => {
  const [currentPost, setCurrentPost] = useState(1);
  const [visible, setVisible] = useState(false);

  const showSelectedPost = data => {
    setCurrentPost(data.id);
    setVisible(true);
  };

  const renderHtml = data => {
    return { __html: data };
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handlePrevPost = () => {
    setCurrentPost(currentPost - 1);
  };

  const handleNextPost = () => {
    setCurrentPost(currentPost + 1);
  };

  let newData = {};

  data.forEach(item => {
    if (item.id === currentPost) {
      newData = item;
    }
  });

  return (
    <ProjectsWrapper>
      {data.map(item => (
        <PostCard
          key={item.id}
          variant="instagram"
          type={item.type}
          image={item.thumb_url}
          title={item.title}
          desc={item.desc}
          company={item.company}
          skill={item.skill}
          teamRole={item.teamRole}
          numberOflike={item.numberOflike && item.numberOflike}
          numberOfView={item.numberOfView && item.numberOfView}
          numberOfcomment={item.numberOfcomment}
          onClick={() => showSelectedPost(item)}
        />
      ))}

      <Modal
        wrapClassName="instagram-modal"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        {currentPost > 1 && (
          <Button className="prev" onClick={handlePrevPost}>
            <IoIosArrowBack />
          </Button>
        )}
        {currentPost < data.length && (
          <Button className="next" onClick={handleNextPost}>
            <IoIosArrowForward />
          </Button>
        )}

        <ContentWrapper>
          <div className="media">
            {newData.type === 'image' && (
              <img src={newData.thumb_url} alt={'post'} />
            )}

            {newData.type === 'gallery' && (
              <GlideCarousel
                options={galleryOptions}
                bullets={true}
                prevButton={<IoIosArrowDropleftCircle />}
                nextButton={<IoIosArrowDroprightCircle />}
                numberOfBullets={newData.gallery.length}
                carouselSelector={`post-gallery--${newData.id}`}
              >
                <Fragment>
                  {newData.gallery.map((item, index) => (
                    <GlideSlide key={`gallery-key${index}`}>
                      <img src={item} alt={'post'} />
                    </GlideSlide>
                  ))}
                </Fragment>
              </GlideCarousel>
            )}

            {newData.type === 'video' && (
              <div
                className="video-container"
                dangerouslySetInnerHTML={renderHtml(newData.video)}
              ></div>
            )}
          </div>

          <div className="content">
            {/* <header className="header">
              <div className="avatar-wrapper">
                <AvatarCard avatar={avatar} username={username} />
                <span>•</span>
                <Link to="/dashboard/my-profile" rel="nofollow">
                  Follow
                </Link>
              </div>
              <button type="button">
                <FiMoreHorizontal />
              </button>
            </header> */}

            <div className="body">
              <div className="comments">
                <div><span className="title">專案簡介：</span>
                  {
                    newData.desc.length > 20?
                      <span className="desc">{newData.desc}</span>
                      :newData.desc
                  }
                </div>
                <div><span className="title">公司：</span>{newData.company}</div>
                <div><span className="title">技能：</span>{newData.skill.map(element => <Tag className="tag" color={`${element.color}`}>{`${element.name}`}</Tag>)}</div>
                {/* {newData.comments !== undefined && newData.comments.length > 0
                  ? newData.comments.map(item => (
                      <Comments
                        key={`comment-key${item.id}`}
                        role={item.role}
                        avatar={item.avatar}
                        name={item.username}
                        content={item.comment}
                        time={item.time}
                        handleLike={() =>
                          console.log(
                            'Write like function for post.',
                            newData.id
                          )
                        }
                        handleReply={() =>
                          console.log(
                            'Write reply function for post.',
                            newData.id
                          )
                        }
                      />
                    ))
                  : ''} */}
              </div>
            </div>

            {/* <footer className="footer">
              <div className="top-bar">
                <button className="like" type="button">
                  <FiHeart />
                </button>
                <button className="comment" type="button">
                  <FiMessageCircle />
                </button>
                <button className="share" type="button">
                  <FiShare />
                </button>
                <button className="bookmark" type="button">
                  <FiBookmark />
                </button>
              </div>
              <div className="activity-info">
                <h5>{newData.numberOflike} likes</h5>
                <time>AUGUST 31</time>
              </div>
            </footer> */}
          </div>
        </ContentWrapper>
      </Modal>
    </ProjectsWrapper>
  );
};

export default Projects;
