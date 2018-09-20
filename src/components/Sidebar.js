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
          zIndex: "99999",
          backgroundColor: "#50E3C2"
        }}
        width={350}
      >
        <div className="logo" style={{
          height: '32px',
          background: 'rgba(0,0,0,.2)',
          margin: '16px'
        }}>
        </div>
        <Search placeholder="Search..." style={{ width: 290, margin: '10px auto', display: 'block' }} />
        <Menu
          defaultSelectedKeys={['2']}
          mode='inline'
          theme='light'
        >
          <Menu.Item key="1">
            <Icon type="info" />
            INFO SKYDAS
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="area-chart" />
            APŽVALGA
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="shopping-cart" />
            UŽSAKYMAI
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }

}

export default Sidebar;