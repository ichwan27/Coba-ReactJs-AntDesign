import React ,{useState} from 'react';
import SubMenu from 'antd/lib/menu/SubMenu';
import { UserOutlined } from '@ant-design/icons';
import { DashboardOutlined } from '@ant-design/icons';
import {Layout,Menu} from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

function Sidebar (){
    const [selectedItem,setSelectedMenuItem] = useState("Dashboard");
    return(
        <Sider>
        <Menu
        defaultSelectedKeys={selectedItem}
        mode="inline"
        onClick={(e)=> setSelectedMenuItem(e.key)}
        >
          <Menu.Item key="Dashboard" icon={<DashboardOutlined />}>
            <Link to="/">
                Dashboard
            </Link>
          </Menu.Item>
          <SubMenu
            key="Submenu"
            icon={<UserOutlined/>}
            title="Kontent">
                <Menu.ItemGroup title="Isi-isinya">
                    <SubMenu title="Chart">
                        <Menu.ItemGroup title="Jenis Chart">
                            <Menu.Item key="XyChart"><Link to="/xychart">XYChart</Link></Menu.Item>
                            <Menu.Item key="Wordcloud"><Link to="/wordcloud">WordCloud</Link></Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="tablequality"><Link to="/tablequality">Table quality</Link></Menu.Item>
                    <Menu.Item key="Blogpost"><Link to="/blogpost">Blog post</Link></Menu.Item>
                    <Menu.Item key="Youtube"><Link to="/youtube">Youtube Component</Link></Menu.Item>
                </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Sider>
    )
}

export default Sidebar;