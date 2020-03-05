import React from 'react';
import Button from '@iso/ui/Antd/Button/Button';
import AvatarCard from '@iso/components/AvatarCard/AvatarCard';
import Wrapper, { CompanyList, ListItem } from './Companies.styles';
import { Timeline } from 'antd';

const renderHtml = data => {
  return { __html: data };
};

const Companies = ({ data }) => {
  return (
    <Wrapper>
      <h3>
        {/* <strong>{data.length}</strong> Companies */}
        經歷
      </h3>
      {/* <CompanyList>
        {data.length > 0 &&
          data.map(follower => (
            <ListItem key={`company-key${follower.id}`}>
              <AvatarCard avatar={follower.avatar} name={follower.name} />
              <Button>Following</Button>
            </ListItem>
          ))}
      </CompanyList> */}
      <Timeline mode={`left`}>
      {data.length > 0 &&
          data.map(comapny => (
            <Timeline.Item label={comapny.time}>
              <span dangerouslySetInnerHTML={renderHtml(comapny.desc)}></span>
            </Timeline.Item>
          ))
      }
      </Timeline>
    </Wrapper>
  );
};

export default Companies;
