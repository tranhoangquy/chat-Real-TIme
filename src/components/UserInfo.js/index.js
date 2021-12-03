import { LogoutOutlined } from '@ant-design/icons';
import { Avatar, Button, Image, Typography } from 'antd';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../Context/AuthProvider';
import { auth } from '../firebase/config';

const WrappedStyle = styled.div`
display:flex;
justify-content: space-between;
padding:  12px 16px;
border-bottom: 1px solid rgba(82,38,83);
.username{
  color: white;
  margin-left: 5px;
}
`

const UserInfo = () => {

  const data = useContext(AuthContext)
  
  return (
    <WrappedStyle>
      <div>
      <Avatar src={<Image src={data?.user?.photoURL} style={{ width: 32 }} />} />
        <Typography.Text className='username'>{data?.user?.displayName}</Typography.Text>
      </div>
      <Button onClick={()=>auth.signOut()}><LogoutOutlined />Logout</Button>
    </WrappedStyle>
  );
};

export default UserInfo;