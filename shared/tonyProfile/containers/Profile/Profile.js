import React, { useState, useEffect, useCallback } from 'react';
import Spin from '@iso/ui/Antd/Spin/Spin';
import Modal from '@iso/ui/Antd/Modal/Modal';
import Container from '@iso/ui/UI/Container/Container';
import AvatarCard from '@iso/components/AvatarCard/AvatarCard';
import Projects from './Project/Projects';
import Companies from './Companies/Companies';
import Following from './Following/Following';
import Wrapper, { Banner, Navigation, ContentWrapper } from './Profile.styles';
import { useSelector, useDispatch } from 'react-redux';
import profileActions from '@iso/redux/profile/actions';
import SearchInput from '@iso/containers/Profile/SearchInput';

const { fetchProfileDataStart, setProjectSearch, getProjectData } = profileActions;

const MyProfile = () => {
  const { searchInput, loading, data } = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const getProfile = useCallback(
    () => dispatch(fetchProfileDataStart()),
    [dispatch]
  );

  const [active, setActive] = useState('post');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  // 當查詢條件有變動時, 呼叫查詢 api 
  // useEffect(()=> {
  //   dispatch({type: "GET_PROJECT_SAGA"});
  // },[searchInput]);

  /**
   * 設定查詢條件文字
   * @param {*} e input 物件
   */
  const setSearchInput = async (e) => {
    await dispatch(setProjectSearch(e.target.value));
  }
    
  const handleMenu = type => {
    if (type === 'post') {
      setActive(type);
    }
    if (type === 'companies') {
      setActive(type);
      setVisible(true);
    }
    if (type === 'following') {
      setActive(type);
      setVisible(true);
    }
  };

  const handleCancel = () => {
    setVisible(false);
    setActive('post');
  };
  
  return (
    <Wrapper>
      {loading !== true ? (
        <>
          <Banner
            className="profile-banner"
            style={{ backgroundImage: `url(${data.profile_bg})` }}
          >
            <Container className="container">
              <AvatarCard
                avatar={data.avatar}
                name={data.name}
                username={data.username}
              />
            </Container>
          </Banner>

          <Navigation className="navigation">
            <Container className="container">
              <ul className="menu">
                <li
                  className={active === 'post' ? 'active' : ''}
                  onClick={() => handleMenu('post')}
                >
                  <strong>{data.post.length}</strong> 專案/產品
                </li>
                <li
                  className={active === 'companies' ? 'active' : ''}
                  onClick={() => handleMenu('companies')}
                >
                  <strong>{data.companies.length-1}</strong> 經歷
                </li>
              </ul>
            </Container>
          </Navigation>

          <ContentWrapper>
            <Container className="container">
              {/* <SearchInput 
                setSearchInput={setSearchInput} 
                searchInput={searchInput} 
              /> */}
              {
                active === 'post' && <Projects
                  avatar={data.avatar}
                  username={data.username}
                  data={data.post}
                /> 
              }
              {/* {active === 'siteIntroduce' && <SiteIntroduce/>} */}
              
              <Modal
                wrapClassName="follow-modal"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
              >
                {active === 'companies' && <Companies data={data.companies} />}
                {/* {active === 'following' && <Following data={data.following} />} */}
              </Modal>
            </Container>
          </ContentWrapper>
        </>
      ) : (
        <div
          style={{
            minHeight: '150px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Spin />
        </div>
      )}
    </Wrapper>
  );
};

export default MyProfile;
