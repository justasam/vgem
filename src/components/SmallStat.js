import React from 'react';
import { Row, Col, Icon } from 'antd';

const SmallStat = (props) => (
  <Row className="smallStat" gutter={16}>
    <Col span={16}>
      <h4>{props.title}</h4>
      <span>{props.change}</span>
    </Col>
    <Col span={8}>
      <Icon type={`${props.up ? 'rise': 'fall'}`} style={{fontSize: "28px", color: props.up ? 'rgb(40, 230, 40)' : 'rgb(230, 40, 40)'}} />
    </Col>
  </Row>
);

export default SmallStat;