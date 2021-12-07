import { SendOutlined, UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button, Tooltip,Form, Input } from 'antd';
import React, { useContext,  } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../components/Context/AppProvider';
import Message from '../chatRoom/components/Message';


const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height:  56px;
  padding: 0 16px;
  align-items: center;
  border-bottom:  1px solid rgb(230,230,230);

  .header{
    &_info{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &_title {
      margin:0;
      font-weight: bold;
    }
    &_description{
      font-size: 12px;
    }
  }
`
const ButtonGroupStyle =styled.div`
  display: flex;
  align-items: center;
`

const WrapperStyled = styled.div`
  height: 100vh;
`

const ContentStyled = styled.div`
  height:-webkit-calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border :1px solid rgb(230,230,230);
  border-radius:2px;
  .antd-form-item{
    flex:1;
    margin-bottom: 0;
  }
`

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`

const ChatWindow = () => {
  const {rooms,idRoom} = useContext(AppContext)

  const room = rooms.find((r1)=> r1?.id === idRoom)
  
  return (
    <WrapperStyled>
      <HeaderStyled>
      <div className="header_info">
        <p className="header_title">{room?.name}</p>
        <span className="header_description">{room?.description}</span>
      </div>
      <ButtonGroupStyle>
        <Button type='text'><UserAddOutlined />Add</Button>
        <Avatar.Group size='small' maxCount={2}>
          <Tooltip title='A'>
            <Avatar>A</Avatar>
          </Tooltip>
          <Tooltip title='B'>
            <Avatar>B</Avatar>
          </Tooltip>
          <Tooltip title='C'>
            <Avatar>C</Avatar>
          </Tooltip>
          <Tooltip title='D'>
            <Avatar>D</Avatar>
          </Tooltip>
        </Avatar.Group>
      </ButtonGroupStyle>
      </HeaderStyled>
    <ContentStyled>
      <MessageListStyled>
        <Message text='Hello' photoURL={null} displayName="Quy" createdAt={1231} />
        <Message text='Hello1' photoURL={null} displayName="Quy" createdAt={1231} />
        <Message text='Hello2' photoURL={null} displayName="Quy" createdAt={1231} />
        <Message text='Hello3' photoURL={null} displayName="Quy" createdAt={1231} />
      </MessageListStyled>
      <FormStyled>
        <Form.Item>
          <Input  bordered={false} autoComplete='off' placeholder="Input message..." style={{width:'100vh'}}/>
        </Form.Item>
        <Button style={{color:"white",marginRight:'11px'}} type='primary'>Send<SendOutlined  style={{  color: 'white' }}/></Button>
      </FormStyled>
    </ContentStyled>
    </WrapperStyled>
  );
};

export default ChatWindow;