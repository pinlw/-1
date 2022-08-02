import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
  } from '@ant-design/icons';
  import { Button, Menu } from 'antd';
  import React, { useState, forwardRef, useImperativeHandle } from 'react';
  import 'antd/dist/antd.css';
  import { Link } from 'react-router-dom';
  
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  
  
  const App = forwardRef((props, ref) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
    const [name,setName] = useState('菜单2-1');
    const changeName = (newName) => {
      setName(newName);
    }
    const items = [
      getItem('菜单', 'sub1', <MailOutlined />, [
        getItem(<Link to={'/'}>菜单1-1</Link>, '5'),
        getItem(<Link to={'/home2'}>菜单1-2</Link>, '6'),
      ]),
      getItem('菜单二', 'sub2', <AppstoreOutlined />, [
        getItem(<Link to={'/home3'}>菜单2-1</Link>, '9'),
        getItem(<Link to={'/home4'}>{name}</Link>, '10'),
      ]),
    ];
    useImperativeHandle(ref, () => ({
      changeName,
    }))
    
    return (
        <div className='homeLeft1'
          style={{
            width: 256,
            height: '100%',
            background: '#001529',
          }}
        >
          <div
            style={{
              width: '100%',
            }}
          >
            <Button
              type="primary"
              onClick={toggleCollapsed}
              style={{
                marginBottom: 16,
              }}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={collapsed}
              items={items}
            />
          </div>
        </div>
      
    );
  });
  
  export default App;
  