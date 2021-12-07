import { Modal,Form, Input } from 'antd';
import React, { useContext,  } from 'react';
import { AppContext } from '../../../../components/Context/AppProvider';
import { AuthContext } from '../../../../components/Context/AuthProvider';
import { addDocument } from '../../../../components/firebase/service';

const ModalCreateRoom = () => {
  const [form] = Form.useForm()
  const {isAddRoomVisible,setIsAddRoomVisible} =useContext(AppContext)
  const {user:{uid}} = useContext(AuthContext)

  const addRoom = ()=>{
    console.log(form.getFieldValue());
    addDocument('rooms',{...form.getFieldValue(),members:[uid]})
    setIsAddRoomVisible(false)
    form.resetFields()
  }
  
  return (
    <Modal
      title='Create Room'
      visible={isAddRoomVisible}
      onCancel={()=>setIsAddRoomVisible(false)}
      onOk={addRoom}
    >
        <Form form={form}>
          <Form.Item label="Name Room" name='name' required>
            <Input placeholder='Please input name room' />
          </Form.Item>
          <Form.Item label="Description" name='description' required>
            <Input.TextArea placeholder='Please input name room' />
          </Form.Item>
        </Form>
    </Modal>
  );
};

export default ModalCreateRoom;