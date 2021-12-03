import { Col, Row } from 'antd';
import React from 'react';
import ChatWindow from '../chatWindow';
import SideBar from '../sidebar';

const ChatRoom = () => {
  return (
    <Row>
      <Col span={6}><SideBar/></Col>
      <Col span={18}><ChatWindow/></Col>
    </Row>
  );
};

export default ChatRoom;