import { Button, Col, Row, } from 'antd';
import React from 'react';
// import { useHistory } from 'react-router-dom';
import firebase ,{auth} from "../../../components/firebase/config"
import { FacebookOutlined,GooglePlusOutlined } from '@ant-design/icons';
import { addDocument } from '../../../components/firebase/service';

const fbProvider = new firebase.auth.FacebookAuthProvider()

const Login = () => {

  // const history = useHistory()

  const handleLogin = async() =>{
   const {additionalUserInfo,user} = await auth.signInWithPopup(fbProvider)
    additionalUserInfo?.isNewUser && addDocument('user',{
      displayName:user.displayName,
      email:user.email,
      photoURL:user.photoURL,
      providerId:additionalUserInfo.providerId
    })

  }
 
  return (
    <div>
      <Row justify="center"  >
        <Col>
        <h1 style={{textAlign:'center'}} level={3}>Chat</h1>
        <Button style={{width:'100%', marginBottom:5 ,background:'#2483C6',color:'#ffff',display:"flex",padding:"3px 40px"}} onClick={handleLogin}><FacebookOutlined style={{fontSize:"25px"}} /> Login with Facebook</Button>
        <Button style={{width:'100%',background:'#dd4b39',color:'#ffff',display:"flex",padding:"3px 40px"}}><GooglePlusOutlined style={{fontSize:"25px"}} />Login with Google</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Login;