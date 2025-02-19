import React, { useEffect, useState } from 'react';
import { List, Typography } from 'antd';
import { getLoginEntries } from '../services/loginEntryService';

const { Text } = Typography;

const MainContent = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
      const fetchEntries = async () => {
        const data = await getLoginEntries();
        setEntries(data);
      };
      fetchEntries();
    }, []);
  
    return (
      <div>
        <List
          dataSource={entries}
          renderItem={(entry) => (
            <List.Item>
              <Text>{entry.title}</Text>
            </List.Item>
          )}
        />
      </div>
    );
};

export default MainContent;