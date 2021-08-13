//styling
import './App.css';
//react
import { Component,Fragment } from 'react';
//ant-design
import { Breadcrumb, Layout } from 'antd';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';

//template
import Header from './component/Headers.js';
import Footer from './component/Footers.js';
import Sidebar from './component/Sidebar.js';

//router
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//file support
import Piecharts from './content/charts/PieCharts.js';
import XyCharts from './content/charts/XyCharts.js';
import WordCloud from './content/charts/WordCloud.js';
import Isi from './content/Content.js';
import BlogPost from './blogpost/BlogPost.js';
import TableQuality from './content/TableQuality/TableQuality';

const { Content } = Layout;

class App extends Component {
  render(){
    return (
      <Fragment>
        <Router>
          <Layout>
            <Header/>
            <Layout>
            <Sidebar/>
            <Layout>
            <Content className="site-layout" style={{ padding: '0 50px'}}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Switch>
                  <Route exact path="/">
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                  </Route>
                  <Route path="/xychart">
                    <Breadcrumb.Item>Chart</Breadcrumb.Item>
                    <Breadcrumb.Item>Xychart</Breadcrumb.Item>
                  </Route>
                  <Route path="/wordcloud">
                    <Breadcrumb.Item>Chart</Breadcrumb.Item>
                    <Breadcrumb.Item>Word CLoud</Breadcrumb.Item>
                  </Route>
                  <Route path="/tablequality">
                    <BreadcrumbItem>Table Quality</BreadcrumbItem>
                  </Route>
                  <Route path="/youtube">
                    <BreadcrumbItem>Youtube Component</BreadcrumbItem>
                  </Route>
                  <Route path="/blogpost">
                    <BreadcrumbItem>Blog post</BreadcrumbItem>
                  </Route>
                </Switch>
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 10, minHeight:450, background:'#fff'}}>
                <Switch>
                  <Route exact path="/" component= {Piecharts}/>
                  <Route path="/wordcloud" component={WordCloud}/>
                  <Route  path="/xychart" component={XyCharts}/>
                  <Route path="/blogpost" component={BlogPost}/>
                  <Route path="/tablequality" component={TableQuality}/>
                  <Route path="/Youtube" component={Isi}/>
                </Switch>
              </div>
            </Content>
            <Footer/>
            </Layout>
            </Layout>
          </Layout>
       </Router>
    </Fragment>
    );
  }
}

export default App;
