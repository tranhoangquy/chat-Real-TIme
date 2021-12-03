import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import UserInfo from '../../components/UserInfo.js';
import RoomList from '../roomList/index.js';



const SidebarStyle= styled.div`
  background: #3f0e40;
  color: white;
  height: 100vh;
`;

const SideBar = () => {
  return (
    <SidebarStyle>
      <Row>
        <Col span={24}><UserInfo/></Col>
        <Col span={24}><RoomList/></Col>
      </Row>
    </SidebarStyle>
  );
};

export default SideBar;