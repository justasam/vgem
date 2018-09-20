import React, { Component } from 'react';
import { Menu, Icon, Input } from 'antd';
import Sider from 'antd/lib/layout/Sider';

const Search = Input.Search;

class Sidebar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => { console.log(broken); }}
        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        theme='light'
        style={{
          boxShadow: "0 3px 6px rgba(0,0,0,.15)",
          zIndex: "99999"
        }}
      >
        <div className="logo" style={{
          height: '32px',
          background: 'rgba(0,0,0,.2)',
          margin: '16px'
        }}>
        </div>
        <Search placeholder="Search..." style={{ width: 180, margin: '10px auto', display: 'block' }} />
        <Menu
          defaultSelectedKeys={['2']}
          mode='inline'
          theme='light'
        >
          <Menu.Item key="1">
            <Icon type="info" />
            Info Skydas
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="area-chart" />
            Apzvalga
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="shopping-cart" />
            Uzsakymai
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }

}

export default Sidebar;