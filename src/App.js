import './App.css';
import { Breadcrumb, Layout, Menu } from 'antd';
import Title from 'antd/lib/typography/Title';
import {Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { DashboardOutlined } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{padding:10}}>
          <Avatar style={{float:"right"}} src="../images.png"/>
          <Title style={{color:"white"}} level={3}>Title</Title>
        </Header>
        <Layout>
          <Sider>
            <Menu
            defaultSelectedKeys={'Dashboard'}
            mode="inline">
              <Menu.Item key="Dashboard" icon={<DashboardOutlined />}>Dashboard</Menu.Item>
              <SubMenu key="Submenu"icon={<UserOutlined/>} title="Ortunya">
               <Menu.ItemGroup title="Anak-Anaknya">
                  <SubMenu title="Anak 1">
                    <Menu.ItemGroup title="Cucu-cucunya">  
                    <SubMenu title="Cucunya 1">
                      <Menu.ItemGroup title="Cicit-cicitnya">
                        <Menu.Item>Cicit 1</Menu.Item>
                        <Menu.Item>Cicit 2</Menu.Item>
                      </Menu.ItemGroup>
                    </SubMenu>
                    </Menu.ItemGroup>
                    <Menu.Item key="1">Cucunya 2</Menu.Item>
                    <Menu.Item key="2">Cucunya 3</Menu.Item>
                  </SubMenu>
                  <Menu.Item key="3">Anak 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
          <Content className="site-layout" style={{ padding: '0 50px'}}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 10, minHeight:450, background:'#fff'}}>
            Content
            </div>
          </Content>
          <Footer style={{textAlign:"center"}}>Mohammad Ichwan 04 AGUSTUS 2021</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
