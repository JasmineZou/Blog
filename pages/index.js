import stylesheet from '../styles/index.less'
import fetch from 'isomorphic-unfetch'

import { Layout,Row,Col} from 'antd';
import server from '../config/requestUrl'
// const { SubMenu,MenuItemGroup } = Menu;
const { Header, Footer,Content} = Layout;


//引入component
import BreadCrumb from '../components/HomePage/breadCrumb'
import MenuComponent from '../components/menu'
import LeftContent from '../components/leftContent'
import RightContent from '../components/rightContent'

const Index= (props) => (
  <Layout>
    <Header className="header">
      <div className="logo" >風的博客</div>
      <MenuComponent list={props.shows}/>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <BreadCrumb/>
      <Row >
        <Col span={16} >
           <LeftContent/>
        </Col>
        <Col span={7} offset={1}>
          <RightContent/>
        </Col>
        
      </Row>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>

    <style jsx>{`

    `}</style>

    <style jsx global>{ stylesheet }</style>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch(`${server}/getMenu`)
  const data = await res.json()

  // console.log(`Show data fetched. Count: `,data )

  return {
    shows: data
  }
}

export default Index