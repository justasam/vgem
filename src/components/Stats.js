import React, { Component } from 'react';
import { Icon, Row, Col, Card } from 'antd';
import CustomIcons from './CustomIcons';
import Title from './Title';
import { Line } from 'react-chartjs-2';
import SmallStat from './SmallStat';

class Stats extends Component {
  constructor(props) {
    super(props);

    // let currentDisplay = 7;
    // let data = this.props.data;
    // let currentData = Object.keys(data).slice(currentDisplay*-1);
    // let 

    this.state = {
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Gaminimas',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'Naudojimas',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(25,80,192,0.4)',
            borderColor: 'rgba(25,80,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(25,80,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(25,80,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [80, 65, 20, 25, 12, 5, 24],
          }
        ],
        options: {
          cubicInterpolationMode: 'monotone'
        }
      },
    }
  }

  componentDidMount() {
    // let { data } = this.props;
    // let last7 = Object.keys(data).slice(-7);
  }

  render() {
    const { data, options } = this.state;
    const { title } = this.props;

    return (
      <Card className='Stats' style={{boxShadow: "0 3px 7px rgba(0,0,0,.15)", margin: "20px auto"}}>
        <Title width={"100%"} title={title} classes="underlined" />
        <Row className="StatsRow" gutter={40} style={{paddingBottom: 20, paddingTop: 20}}>
          <Col span={4} style={{
            textAlign: "center",
            boxShadow: "0 3px 6px rgba(0,0,0,.15)",
            height: "49px",
            lineHeight: "49px"
          }}><Icon component={CustomIcons['Battery']} color="#FFBBFF" style={{ color: '#2C8693', fontSize: "30px", display: "inline-block", verticalAlign: "middle"}} /></Col>
          <Col span={5}>
            <SmallStat title="Vart" change="USP: +23%" up={true}/>
          </Col>
          <Col span={5}>
            <SmallStat title="Gam" change="USP: -23%" up={false}/>
          </Col>
          <Col span={5}>
            <SmallStat title="Pir" change="USP: -23%" up={false}/>
          </Col>
          <Col span={5}>
            <SmallStat title="Pard" change="USP: +23%" up={true}/>
          </Col>
        </Row>
        <Row className="StatsRow" gutter={40} style={{paddingBottom: 20, paddingTop: 10}}>
          <Col span={4} style={{
            textAlign: "center",
            boxShadow: "0 3px 6px rgba(0,0,0,.15)",
            height: "49px",
            lineHeight: "49px"
          }}><Icon component={CustomIcons['Bolt']} color="#FFBBFF" style={{ color: '#F5A623', fontSize: "30px", display: "inline-block", verticalAlign: "middle"}} /></Col>
          <Col span={5}>
            <SmallStat title="Vart" change="USP: -23%" up={false}/>
          </Col>
          <Col span={5}>
            <SmallStat title="Gam" change="USP: -23%" up={false}/>
          </Col>
          <Col span={5}>
            <SmallStat title="Pir" change="USP: -23%" up={false}/>
          </Col>
          <Col span={5}>
            <SmallStat title="Pard" change="USP: +23%" up={true}/>
          </Col>
        </Row>
        <Line data={data} options={options} />
      </Card>
    );
  }
}
export default Stats;
