import React, { Component } from 'react';
import Doughnut from 'react-chartjs-2';
import { Row, Col, Icon } from 'antd';
import Title from './Title';
import CustomIcons from './CustomIcons';

const options = {
  legend: {
    display: false
  },
  cutoutPercentage: 75
}
class Live extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data1: {
        labels: [
          'Naudojama',
          'Parduodama',
          'Parduota',
          'Nepanaudota'
        ],
        datasets: [{
          data: [
            40+parseInt(Math.random()*20),
            40+parseInt(Math.random()*20),
            40+parseInt(Math.random()*20),
            40+parseInt(Math.random()*20)
          ],
          backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
          ]
        }]
      },
      data2: {
        labels: [
          'Naudojama',
          'Parduodama',
          'Parduota',
          'Nepanaudota'
        ],
        datasets: [{
          data: [
            40+parseInt(Math.random()*20),
            40+parseInt(Math.random()*20),
            40+parseInt(Math.random()*20),
            40+parseInt(Math.random()*20)
          ],
          backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
          ]
        }]
      }
    };

    this.interval = () => setInterval(() => {
      let { data1, data2 } = this.state;
      let newData1 = [], newData2 = [];
      data1.datasets[0].data.forEach((d, index) => {
        newData1.push(Math.max(data1.datasets[0].data[index] + (parseInt(Math.random()*5)-2), 0));
      });
      data2.datasets[0].data.forEach((d, index) => {
        newData2.push(Math.max(data2.datasets[0].data[index] + (parseInt(Math.random()*5)-2), 0));
      });
      data1.datasets[0].data = newData1;
      data2.datasets[0].data = newData2;
      this.setState({data1, data2});
    }, 1000);
    this.interval = this.interval.bind(this);
  }

  componentDidMount() {
    this.interval();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { data1, data2 } = this.state;

    return (
      <Row className="Live" gutter={8} style={{width: "100%"}}>
        <Title title={"LIVE"} classes="underlined"/>
        <Col className="gutter-row" span={12}>
          <Doughnut data={data1} options={options} />
          <Icon component={CustomIcons.Battery} style={{
            fontSize: "3vw",
            display: "block",
            margin: "5px auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#2C8693"
          }}/>
        </Col>
        <Col className="gutter-row" span={12}>
          <Doughnut data={data2} options={options} />
          <Icon component={CustomIcons.Bolt} style={{
            fontSize: "3vw",
            display: "block",
            margin: "5px auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#F5A623"
          }}/>
        </Col>
      </Row>
    );
  }
}

export default Live;
