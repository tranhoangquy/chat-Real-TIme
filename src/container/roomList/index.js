import { PlusSquareOutlined } from '@ant-design/icons';
import { Button, Collapse, Typography } from 'antd';
import React, { useContext,  } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../components/Context/AppProvider';
import ModalCreateRoom from './components/ModalCreateRoom';

const {Panel} = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header, p{
      color: white;
    }
    .ant-collapse-content-box{
      padding: 0 40px
    }
    .add-room{
      color: white;
      padding: 0;
    }
  }
`
const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`

const RoomList = () => {
  const {rooms,setIsAddRoomVisible,setIdRoom} = useContext(AppContext)
  
  return (
    <Collapse ghost defaultActiveKey={['1']}>
      <PanelStyled header="List Room" key='1'>
        {
          rooms?.map((room)=>
          <LinkStyled key={room?.id} onClick={()=>setIdRoom(room?.id)}>{room?.name}</LinkStyled>
          )
        }
        <Button type="text" className='add-room' icon={<PlusSquareOutlined/>} onClick={()=>setIsAddRoomVisible(true)}>Add Room</Button>
      </PanelStyled>
      <ModalCreateRoom  />
    </Collapse>
  );
};

export default RoomList;