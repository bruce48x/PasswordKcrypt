import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import AppHeader from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';

const { Content, Sider } = Layout;

const theme = {
  token: {
    colorPrimary: '#1976d2', // 主色调
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Layout className="app-layout">
        <AppHeader />
        <Layout>
          <Sider width={200} style={{ backgroundColor: '#fff', borderRight: '1px solid #ddd' }}>
            <Sidebar />
          </Sider>
          <Layout>
            <Content className="app-content">
              <MainContent />
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default App;