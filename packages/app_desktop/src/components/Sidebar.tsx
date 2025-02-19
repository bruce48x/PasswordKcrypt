import React from 'react';
import { Input, Menu } from 'antd';

const Sidebar = () => {
    return (
        <div style={{ padding: 16 }}>
            <Input placeholder="Search" style={{ marginBottom: 16 }} />
            <Menu mode="inline">
                <Menu.Item key="all">All Items</Menu.Item>
                <Menu.Item key="logins">Logins</Menu.Item>
            </Menu>
        </div>
    );
};

export default Sidebar;