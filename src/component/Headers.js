import React from 'react';
import Title from 'antd/lib/typography/Title';
import {Layout, Avatar} from 'antd';

const { Header } = Layout;

function Headers (){
    return(
        <Header style={{padding:10}}>
            <Avatar style={{float:"right",marginRight:10}} src="../images.png"/>
            <Title style={{color:"white"}} level={3}> Hello World!</Title>
        </Header>
    )
}

export default Headers;