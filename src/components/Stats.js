import React, { Component } from 'react';
import { Icon, Row, Col, Card, Button } from 'antd';
import CustomIcons from './CustomIcons';
import Title from './Title';
import { Line } from 'react-chartjs-2';
import SmallStat from './SmallStat';

const randColor = () => {
  return `rgb(${parseInt(Math.random()*255)}, ${parseInt(Math.random()*255)}, ${parseInt(Math.random()*255)})`;
}

const getColor = [
  '#50E3C2',
  '#9FE060',
  '#2C8693',
  '#F5A623'
];

const genDataset = (data, label, index) => {
  let color = getColor[index];
  return {
    label,
    fill: false,
    lineTension: 0.3,
    backgroundColor: color,
    borderColor: color,
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: color,
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: color,
    pointHoverBorderColor: color,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data
  }
}

class Stats extends Component {
  constructor(props) {
    super(props);

    let currentDisplay = 7;
    let data = this.props.data;
    let dates = Object.keys(data).slice(currentDisplay*-1);
    let selected = 'baterijos';

    let smallOnes = {
      energija: Object.keys(data[dates[0]]['energija']).map((key) => ({
        key,
        data: parseInt((data[dates.slice(-1)]['energija'][key] - data[dates[0]]['energija'][key])/Math.max(data[dates.slice(-1)]['energija'][key], 1)*100)
      })),
      baterijos: Object.keys(data[dates[0]]['baterijos']).map((key) => ({
        key,
        data: parseInt((data[dates.slice(-1)]['baterijos'][key] - data[dates[0]]['baterijos'][key])/Math.max(data[dates.slice(-1)]['baterijos'][key], 1)*100)
      })),
    };
    let intialDatasets = [];
    Object.keys(data[dates[0]][selected]).forEach((label, index) => {
      let datas = [];
      dates.forEach((date) => {
        datas.push(data[date][selected][label]);
      });
      intialDatasets.push(genDataset(datas, label, index));
    });
    // labels.forEach((date) => {
    //   data[date][selected]
    // })

    // let 

    this.state = {
      data: {
        labels: dates.map((date) => date.split('/').slice(-2).join('/')),
        datasets: intialDatasets,
        options: {
          cubicInterpolationMode: 'monotone'
        },
      },
      smallOnes,
      selected,
      currentDisplay
    };

    this.handleDayChange = this.handleDayChange.bind(this);
  }

  handleDayChange(e, selected) {
    let currentDisplay;
    if (e) {
      e.preventDefault();
      currentDisplay = parseInt(e.target.innerText);  
    } else {
      currentDisplay = this.state.currentDisplay;
    }
    console.log(currentDisplay, selected);
    let data = this.props.data;
    let dates = Object.keys(data).slice(currentDisplay*-1);
    if (currentDisplay >= 30) dates = dates.filter((d, index) => index % 7 === 0);
    if (!selected) selected = this.state.selected;
    let intialDatasets = [];
    let smallOnes = {
      energija: Object.keys(data[dates[0]]['energija']).map((key) => ({
        key,
        data: parseInt((data[dates.slice(-1)]['energija'][key] - data[dates[0]]['energija'][key])/Math.max(data[dates.slice(-1)]['energija'][key], 1)*100) || 0
      })),
      baterijos: Object.keys(data[dates[0]]['baterijos']).map((key) => ({
        key,
        data: parseInt((data[dates.slice(-1)]['baterijos'][key] - data[dates[0]]['baterijos'][key])/Math.max(data[dates.slice(-1)]['baterijos'][key], 1)*100) || 0
      })),
    };
    Object.keys(data[dates[0]][selected]).forEach((label, index) => {
      let datas = [];
      dates.forEach((date, index) => {
        datas.push(data[date][selected][label]);
      });
      intialDatasets.push(genDataset(datas, label, index));
    });
    this.setState({ 
      data: {
        ...data,
        labels: dates.map((date) => date.split('/').slice(-2).join('/')),
        datasets: intialDatasets
      },
      smallOnes,
      currentDisplay,
      selected
    });
  }

  render() {
    const { data, options, smallOnes, selected, currentDisplay } = this.state;
    const { title } = this.props;

    return (
      <Card className='Stats' style={{boxShadow: "0 3px 7px rgba(0,0,0,.15)", margin: "0px auto 10px auto", paddingBottom: 10}}>
        <Title width={"100%"} title={title} classes="underlined" />
        <span>Days: </span>
        <Button type="primary" style={{marginLeft: 20, backgroundColor: currentDisplay === 7 ? '#39bda4' : '#50E3C2' }} onClick={this.handleDayChange}>7</Button>
        <Button type="primary" style={{marginLeft: 20, backgroundColor: currentDisplay === 30 ? '#39bda4' : '#50E3C2'}} onClick={this.handleDayChange}>30</Button>
        <Button type="primary" style={{marginLeft: 20, backgroundColor: currentDisplay === 60 ? '#39bda4' : '#50E3C2'}} onClick={this.handleDayChange}>60</Button>
        <Row className="StatsRow" gutter={40} style={{paddingBottom: 20, paddingTop: 20}}>
          <Col span={4} style={{
            textAlign: "center",
            boxShadow: "0 3px 6px rgba(0,0,0,.15)",
            height: "70px",
            lineHeight: "70px",
            backgroundColor: selected === 'baterijos' ? 'rgba(80, 227, 194, 0.5)' : 'white',
            cursor: "pointer"
          }} onClick={() => {
            this.handleDayChange(null, 'baterijos');
          }}><Icon component={CustomIcons['Battery']} color="#FFBBFF" style={{ color: '#2C8693', fontSize: "30px", display: "inline-block", verticalAlign: "middle"}} /></Col>
          {smallOnes['baterijos'].map((so, index) => (
            <Col span={5} key={index}>
              <SmallStat title={so.key.slice(0,3).toUpperCase()} change={so.data + "%"} up={so.data > 0}/>
            </Col>
          ))}
        </Row>
        <Row className="StatsRow" gutter={40} style={{paddingBottom: 20, paddingTop: 10}}>
          <Col span={4} style={{
            textAlign: "center",
            boxShadow: "0 3px 6px rgba(0,0,0,.15)",
            height: "70px",
            lineHeight: "70px",
            backgroundColor: selected === 'energija' ? 'rgba(80, 227, 194, 0.5)' : 'white',
            cursor: "pointer"
          }} onClick={() => {
            this.handleDayChange(null, 'energija');
          }}><Icon component={CustomIcons['Bolt']} color="#FFBBFF" style={{ color: '#F5A623', fontSize: "30px", display: "inline-block", verticalAlign: "middle"}} /></Col>
          {smallOnes['energija'].map((so, index) => (
            <Col span={5} key={index}>
              <SmallStat title={so.key.slice(0,3).toUpperCase()} change={so.data + "%"} up={so.data > 0}/>
            </Col>
          ))}
        </Row>
        <Line data={data} options={options} />
      </Card>
    );
  }
}
export default Stats;
