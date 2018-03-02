import React,{Component} from 'react'
import {Layout} from 'antd';
const { Content} = Layout;


class LeftComponent extends Component{
    render(){
        return(
            <Content style={{ padding: '20px 24px', minHeight: 280,background:"#fff" }}>
               LeftComponent
            </Content>
        )
    }
}
export default LeftComponent