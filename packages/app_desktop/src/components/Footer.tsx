import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { addLoginEntry } from '../services/loginEntryService';
import { LoginEntry } from '../entities/LoginEntry';

const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleAddEntry = async (values: Omit<LoginEntry, 'id'>) => {
    await addLoginEntry(values);
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <div style={{ padding: 16, borderTop: '1px solid #ddd', textAlign: 'right' }}>
      <Button type="primary" onClick={() => setIsModalVisible(true)}>
        Add Entry
      </Button>
      <Modal
        title="Add Login Entry"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={() => form.submit()}
      >
        <Form form={form} onFinish={handleAddEntry}>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="username" label="Username" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item name="url" label="URL">
            <Input />
          </Form.Item>
          <Form.Item name="notes" label="Notes">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Footer;