import React,{Component} from 'react'
import {Layout} from 'antd';
const { Content} = Layout;

class RightComponent extends Component{
    render(){
        return(
            <Content style={{ padding: '20px 24px', minHeight: 280,background:"#fff" }}>
                RightComponent
            </Content>
        )
    }
}
export default RightComponent