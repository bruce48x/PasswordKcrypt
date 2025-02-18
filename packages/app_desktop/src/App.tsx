import React from 'react';
import { Button, Typography, ConfigProvider } from 'antd';

const theme = {
  token: {
    colorPrimary: '#1976d2', // 主色调
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <div>
        <Typography>Hello, Material-UI!</Typography>
        <Button color="primary">
          Click Me
        </Button>
      </div>
    </ConfigProvider>
  );
}

export default App;