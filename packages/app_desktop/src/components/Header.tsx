import React from 'react';
import { Layout, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
    return (
        <Header style={{ backgroundColor: '#fff', padding: '0 16px', borderBottom: '1px solid #ddd' }}>
            <Title level={4} style={{ margin: 0 }}>
                PasswordKrypt
            </Title>
        </Header>
    );
};

export default AppHeader;