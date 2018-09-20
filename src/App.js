import React, { Component } from 'react';
import './App.css';

// Components import
import Sidebar from './components/Sidebar';
import Live from './components/Live';
import Stats from './components/Stats';
import List from './components/List';

import { Layout, Row, Col } from 'antd';
// import moment from 'moment';

const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parduotaNupirkta: [{
        info: 'Energijos saugojimas. Isigyta 2018-07-29',
        kiekis: '8kWh',
        icon: 'Battery'
      },
      {
        info: 'Energija. Isigyta 2018-08-01',
        kiekis: '4kWh',
        icon: 'Bolt'
      },
      {
        info: 'Energija. Isigyta 2018-08-03',
        kiekis: '2kWh',
        icon: 'Bolt'
      },
      {
        info: 'Energijos saugojimas. Isigyta 2018-08-08',
        kiekis: '12kWh',
        icon: 'Battery'
      }],
      perkaParduoda: [{
        info: 'Perku',
        kiekis: '8kWh',
        icon: 'Battery'
      },
      {
        info: 'Perku',
        kiekis: '4kWh',
        icon: 'Bolt'
      },
      {
        info: 'Parduodu',
        kiekis: '2kWh',
        icon: 'Bolt'
      },
      {
        info: 'Parduodu',
        kiekis: '12kWh',
        icon: 'Bolt'
      },
      {
        info: 'Perku',
        kiekis: '11kWh',
        icon: 'Battery'
      },
      {
        info: 'Perku',
        kiekis: '4kWh',
        icon: 'Battery'
      },
      {
        info: 'Parduodu',
        kiekis: '2kWh',
        icon: 'Bolt'
      },
      {
        info: 'Parduodu',
        kiekis: '4kWh',
        icon: 'Battery'
      },
      {
        info: 'Perku',
        kiekis: '8kWh',
        icon: 'Battery'
      },
      {
        info: 'Perku',
        kiekis: '4kWh',
        icon: 'Bolt'
      },
      {
        info: 'Perku',
        kiekis: '2kWh',
        icon: 'Bolt'
      },
      {
        info: 'Parduodu',
        kiekis: '12kWh',
        icon: 'Battery'
      }],
      data: {"rinka":{"2018/07/22":{"baterijos":{"nupirkta":76,"paklausa-pasiula":-12},"energija":{"sunaudota":450,"pagaminta":59,"parduota":184,"nupirkta":43}},"2018/07/23":{"baterijos":{"nupirkta":149,"paklausa-pasiula":-20},"energija":{"sunaudota":271,"pagaminta":304,"parduota":170,"nupirkta":163}},"2018/07/24":{"baterijos":{"nupirkta":112,"paklausa-pasiula":-6},"energija":{"sunaudota":221,"pagaminta":163,"parduota":145,"nupirkta":21}},"2018/07/25":{"baterijos":{"nupirkta":129,"paklausa-pasiula":53},"energija":{"sunaudota":418,"pagaminta":385,"parduota":58,"nupirkta":155}},"2018/07/26":{"baterijos":{"nupirkta":48,"paklausa-pasiula":-6},"energija":{"sunaudota":255,"pagaminta":205,"parduota":43,"nupirkta":148}},"2018/07/27":{"baterijos":{"nupirkta":113,"paklausa-pasiula":11},"energija":{"sunaudota":224,"pagaminta":40,"parduota":188,"nupirkta":145}},"2018/07/28":{"baterijos":{"nupirkta":167,"paklausa-pasiula":-15},"energija":{"sunaudota":362,"pagaminta":110,"parduota":36,"nupirkta":171}},"2018/07/29":{"baterijos":{"nupirkta":115,"paklausa-pasiula":43},"energija":{"sunaudota":477,"pagaminta":167,"parduota":100,"nupirkta":24}},"2018/07/30":{"baterijos":{"nupirkta":153,"paklausa-pasiula":54},"energija":{"sunaudota":349,"pagaminta":382,"parduota":68,"nupirkta":167}},"2018/07/31":{"baterijos":{"nupirkta":179,"paklausa-pasiula":38},"energija":{"sunaudota":318,"pagaminta":298,"parduota":62,"nupirkta":125}},"2018/08/01":{"baterijos":{"nupirkta":48,"paklausa-pasiula":-19},"energija":{"sunaudota":436,"pagaminta":182,"parduota":166,"nupirkta":99}},"2018/08/02":{"baterijos":{"nupirkta":162,"paklausa-pasiula":24},"energija":{"sunaudota":291,"pagaminta":132,"parduota":157,"nupirkta":194}},"2018/08/03":{"baterijos":{"nupirkta":152,"paklausa-pasiula":28},"energija":{"sunaudota":227,"pagaminta":324,"parduota":165,"nupirkta":119}},"2018/08/04":{"baterijos":{"nupirkta":69,"paklausa-pasiula":-4},"energija":{"sunaudota":313,"pagaminta":383,"parduota":68,"nupirkta":50}},"2018/08/05":{"baterijos":{"nupirkta":43,"paklausa-pasiula":23},"energija":{"sunaudota":325,"pagaminta":140,"parduota":59,"nupirkta":57}},"2018/08/06":{"baterijos":{"nupirkta":190,"paklausa-pasiula":32},"energija":{"sunaudota":412,"pagaminta":148,"parduota":81,"nupirkta":83}},"2018/08/07":{"baterijos":{"nupirkta":195,"paklausa-pasiula":-9},"energija":{"sunaudota":426,"pagaminta":120,"parduota":163,"nupirkta":124}},"2018/08/08":{"baterijos":{"nupirkta":81,"paklausa-pasiula":-30},"energija":{"sunaudota":230,"pagaminta":246,"parduota":124,"nupirkta":59}},"2018/08/09":{"baterijos":{"nupirkta":20,"paklausa-pasiula":4},"energija":{"sunaudota":435,"pagaminta":108,"parduota":189,"nupirkta":110}},"2018/08/10":{"baterijos":{"nupirkta":111,"paklausa-pasiula":12},"energija":{"sunaudota":411,"pagaminta":182,"parduota":52,"nupirkta":25}},"2018/08/11":{"baterijos":{"nupirkta":170,"paklausa-pasiula":7},"energija":{"sunaudota":383,"pagaminta":43,"parduota":35,"nupirkta":156}},"2018/08/12":{"baterijos":{"nupirkta":110,"paklausa-pasiula":50},"energija":{"sunaudota":296,"pagaminta":249,"parduota":126,"nupirkta":199}},"2018/08/13":{"baterijos":{"nupirkta":193,"paklausa-pasiula":23},"energija":{"sunaudota":275,"pagaminta":147,"parduota":40,"nupirkta":78}},"2018/08/14":{"baterijos":{"nupirkta":94,"paklausa-pasiula":-18},"energija":{"sunaudota":213,"pagaminta":204,"parduota":38,"nupirkta":195}},"2018/08/15":{"baterijos":{"nupirkta":70,"paklausa-pasiula":-39},"energija":{"sunaudota":245,"pagaminta":240,"parduota":188,"nupirkta":190}},"2018/08/16":{"baterijos":{"nupirkta":102,"paklausa-pasiula":4},"energija":{"sunaudota":232,"pagaminta":124,"parduota":162,"nupirkta":162}},"2018/08/17":{"baterijos":{"nupirkta":193,"paklausa-pasiula":9},"energija":{"sunaudota":314,"pagaminta":287,"parduota":71,"nupirkta":40}},"2018/08/18":{"baterijos":{"nupirkta":87,"paklausa-pasiula":40},"energija":{"sunaudota":470,"pagaminta":344,"parduota":57,"nupirkta":49}},"2018/08/19":{"baterijos":{"nupirkta":198,"paklausa-pasiula":54},"energija":{"sunaudota":341,"pagaminta":110,"parduota":177,"nupirkta":52}},"2018/08/20":{"baterijos":{"nupirkta":107,"paklausa-pasiula":34},"energija":{"sunaudota":326,"pagaminta":375,"parduota":106,"nupirkta":180}},"2018/08/21":{"baterijos":{"nupirkta":65,"paklausa-pasiula":-1},"energija":{"sunaudota":341,"pagaminta":191,"parduota":98,"nupirkta":143}},"2018/08/22":{"baterijos":{"nupirkta":73,"paklausa-pasiula":47},"energija":{"sunaudota":302,"pagaminta":52,"parduota":145,"nupirkta":165}},"2018/08/23":{"baterijos":{"nupirkta":12,"paklausa-pasiula":-32},"energija":{"sunaudota":414,"pagaminta":226,"parduota":68,"nupirkta":193}},"2018/08/24":{"baterijos":{"nupirkta":19,"paklausa-pasiula":-22},"energija":{"sunaudota":470,"pagaminta":223,"parduota":179,"nupirkta":45}},"2018/08/25":{"baterijos":{"nupirkta":12,"paklausa-pasiula":18},"energija":{"sunaudota":382,"pagaminta":256,"parduota":154,"nupirkta":198}},"2018/08/26":{"baterijos":{"nupirkta":52,"paklausa-pasiula":-27},"energija":{"sunaudota":440,"pagaminta":159,"parduota":101,"nupirkta":67}},"2018/08/27":{"baterijos":{"nupirkta":21,"paklausa-pasiula":42},"energija":{"sunaudota":417,"pagaminta":122,"parduota":195,"nupirkta":153}},"2018/08/28":{"baterijos":{"nupirkta":106,"paklausa-pasiula":0},"energija":{"sunaudota":466,"pagaminta":162,"parduota":47,"nupirkta":45}},"2018/08/29":{"baterijos":{"nupirkta":48,"paklausa-pasiula":-4},"energija":{"sunaudota":362,"pagaminta":79,"parduota":114,"nupirkta":173}},"2018/08/30":{"baterijos":{"nupirkta":167,"paklausa-pasiula":50},"energija":{"sunaudota":228,"pagaminta":125,"parduota":135,"nupirkta":86}},"2018/08/31":{"baterijos":{"nupirkta":104,"paklausa-pasiula":29},"energija":{"sunaudota":380,"pagaminta":78,"parduota":82,"nupirkta":169}},"2018/09/01":{"baterijos":{"nupirkta":16,"paklausa-pasiula":25},"energija":{"sunaudota":482,"pagaminta":381,"parduota":138,"nupirkta":23}},"2018/09/02":{"baterijos":{"nupirkta":6,"paklausa-pasiula":-29},"energija":{"sunaudota":262,"pagaminta":40,"parduota":186,"nupirkta":55}},"2018/09/03":{"baterijos":{"nupirkta":72,"paklausa-pasiula":-17},"energija":{"sunaudota":420,"pagaminta":217,"parduota":45,"nupirkta":70}},"2018/09/04":{"baterijos":{"nupirkta":111,"paklausa-pasiula":19},"energija":{"sunaudota":276,"pagaminta":163,"parduota":104,"nupirkta":126}},"2018/09/05":{"baterijos":{"nupirkta":158,"paklausa-pasiula":-12},"energija":{"sunaudota":325,"pagaminta":156,"parduota":118,"nupirkta":26}},"2018/09/06":{"baterijos":{"nupirkta":119,"paklausa-pasiula":17},"energija":{"sunaudota":383,"pagaminta":157,"parduota":58,"nupirkta":183}},"2018/09/07":{"baterijos":{"nupirkta":139,"paklausa-pasiula":59},"energija":{"sunaudota":262,"pagaminta":232,"parduota":122,"nupirkta":21}},"2018/09/08":{"baterijos":{"nupirkta":128,"paklausa-pasiula":-22},"energija":{"sunaudota":303,"pagaminta":330,"parduota":83,"nupirkta":113}},"2018/09/09":{"baterijos":{"nupirkta":176,"paklausa-pasiula":-38},"energija":{"sunaudota":413,"pagaminta":230,"parduota":65,"nupirkta":167}},"2018/09/10":{"baterijos":{"nupirkta":196,"paklausa-pasiula":13},"energija":{"sunaudota":298,"pagaminta":197,"parduota":187,"nupirkta":30}},"2018/09/11":{"baterijos":{"nupirkta":157,"paklausa-pasiula":-3},"energija":{"sunaudota":352,"pagaminta":103,"parduota":176,"nupirkta":89}},"2018/09/12":{"baterijos":{"nupirkta":99,"paklausa-pasiula":6},"energija":{"sunaudota":417,"pagaminta":344,"parduota":44,"nupirkta":49}},"2018/09/13":{"baterijos":{"nupirkta":151,"paklausa-pasiula":56},"energija":{"sunaudota":262,"pagaminta":278,"parduota":140,"nupirkta":21}},"2018/09/14":{"baterijos":{"nupirkta":6,"paklausa-pasiula":28},"energija":{"sunaudota":423,"pagaminta":235,"parduota":59,"nupirkta":32}},"2018/09/15":{"baterijos":{"nupirkta":182,"paklausa-pasiula":44},"energija":{"sunaudota":398,"pagaminta":110,"parduota":45,"nupirkta":162}},"2018/09/16":{"baterijos":{"nupirkta":4,"paklausa-pasiula":1},"energija":{"sunaudota":373,"pagaminta":49,"parduota":79,"nupirkta":165}},"2018/09/17":{"baterijos":{"nupirkta":66,"paklausa-pasiula":16},"energija":{"sunaudota":376,"pagaminta":358,"parduota":108,"nupirkta":66}},"2018/09/18":{"baterijos":{"nupirkta":81,"paklausa-pasiula":18},"energija":{"sunaudota":389,"pagaminta":347,"parduota":42,"nupirkta":105}},"2018/09/19":{"baterijos":{"nupirkta":126,"paklausa-pasiula":-2},"energija":{"sunaudota":497,"pagaminta":242,"parduota":163,"nupirkta":152}}},"asmeninis":{"2018/07/22":{"baterijos":{"parduota":10,"nupirkta":7,"nepanaudota":5},"energija":{"sunaudota":12,"pagaminta":9,"parduota":2,"nupirkta":2}},"2018/07/23":{"baterijos":{"parduota":8,"nupirkta":1,"nepanaudota":7},"energija":{"sunaudota":8,"pagaminta":4,"parduota":1,"nupirkta":0}},"2018/07/24":{"baterijos":{"parduota":4,"nupirkta":3,"nepanaudota":11},"energija":{"sunaudota":12,"pagaminta":1,"parduota":1,"nupirkta":1}},"2018/07/25":{"baterijos":{"parduota":13,"nupirkta":4,"nepanaudota":2},"energija":{"sunaudota":1,"pagaminta":13,"parduota":0,"nupirkta":2}},"2018/07/26":{"baterijos":{"parduota":4,"nupirkta":7,"nepanaudota":11},"energija":{"sunaudota":10,"pagaminta":8,"parduota":0,"nupirkta":4}},"2018/07/27":{"baterijos":{"parduota":10,"nupirkta":1,"nepanaudota":5},"energija":{"sunaudota":7,"pagaminta":1,"parduota":3,"nupirkta":1}},"2018/07/28":{"baterijos":{"parduota":14,"nupirkta":4,"nepanaudota":1},"energija":{"sunaudota":12,"pagaminta":5,"parduota":1,"nupirkta":4}},"2018/07/29":{"baterijos":{"parduota":8,"nupirkta":3,"nepanaudota":7},"energija":{"sunaudota":2,"pagaminta":2,"parduota":5,"nupirkta":5}},"2018/07/30":{"baterijos":{"parduota":0,"nupirkta":1,"nepanaudota":15},"energija":{"sunaudota":8,"pagaminta":0,"parduota":3,"nupirkta":5}},"2018/07/31":{"baterijos":{"parduota":5,"nupirkta":0,"nepanaudota":10},"energija":{"sunaudota":2,"pagaminta":13,"parduota":5,"nupirkta":2}},"2018/08/01":{"baterijos":{"parduota":12,"nupirkta":3,"nepanaudota":3},"energija":{"sunaudota":4,"pagaminta":13,"parduota":3,"nupirkta":1}},"2018/08/02":{"baterijos":{"parduota":11,"nupirkta":3,"nepanaudota":4},"energija":{"sunaudota":3,"pagaminta":13,"parduota":3,"nupirkta":4}},"2018/08/03":{"baterijos":{"parduota":4,"nupirkta":10,"nepanaudota":11},"energija":{"sunaudota":0,"pagaminta":0,"parduota":4,"nupirkta":2}},"2018/08/04":{"baterijos":{"parduota":8,"nupirkta":3,"nepanaudota":7},"energija":{"sunaudota":7,"pagaminta":7,"parduota":2,"nupirkta":3}},"2018/08/05":{"baterijos":{"parduota":4,"nupirkta":4,"nepanaudota":11},"energija":{"sunaudota":1,"pagaminta":12,"parduota":3,"nupirkta":2}},"2018/08/06":{"baterijos":{"parduota":0,"nupirkta":14,"nepanaudota":15},"energija":{"sunaudota":2,"pagaminta":11,"parduota":4,"nupirkta":1}},"2018/08/07":{"baterijos":{"parduota":3,"nupirkta":0,"nepanaudota":12},"energija":{"sunaudota":4,"pagaminta":5,"parduota":4,"nupirkta":5}},"2018/08/08":{"baterijos":{"parduota":13,"nupirkta":12,"nepanaudota":2},"energija":{"sunaudota":4,"pagaminta":9,"parduota":0,"nupirkta":5}},"2018/08/09":{"baterijos":{"parduota":13,"nupirkta":9,"nepanaudota":2},"energija":{"sunaudota":14,"pagaminta":3,"parduota":5,"nupirkta":4}},"2018/08/10":{"baterijos":{"parduota":6,"nupirkta":10,"nepanaudota":9},"energija":{"sunaudota":12,"pagaminta":14,"parduota":0,"nupirkta":0}},"2018/08/11":{"baterijos":{"parduota":6,"nupirkta":8,"nepanaudota":9},"energija":{"sunaudota":7,"pagaminta":10,"parduota":2,"nupirkta":2}},"2018/08/12":{"baterijos":{"parduota":3,"nupirkta":7,"nepanaudota":12},"energija":{"sunaudota":5,"pagaminta":6,"parduota":0,"nupirkta":3}},"2018/08/13":{"baterijos":{"parduota":11,"nupirkta":7,"nepanaudota":4},"energija":{"sunaudota":12,"pagaminta":6,"parduota":0,"nupirkta":4}},"2018/08/14":{"baterijos":{"parduota":11,"nupirkta":5,"nepanaudota":4},"energija":{"sunaudota":1,"pagaminta":13,"parduota":0,"nupirkta":2}},"2018/08/15":{"baterijos":{"parduota":6,"nupirkta":0,"nepanaudota":9},"energija":{"sunaudota":13,"pagaminta":3,"parduota":5,"nupirkta":1}},"2018/08/16":{"baterijos":{"parduota":12,"nupirkta":8,"nepanaudota":3},"energija":{"sunaudota":0,"pagaminta":12,"parduota":0,"nupirkta":4}},"2018/08/17":{"baterijos":{"parduota":4,"nupirkta":10,"nepanaudota":11},"energija":{"sunaudota":8,"pagaminta":14,"parduota":2,"nupirkta":3}},"2018/08/18":{"baterijos":{"parduota":5,"nupirkta":11,"nepanaudota":10},"energija":{"sunaudota":3,"pagaminta":14,"parduota":2,"nupirkta":3}},"2018/08/19":{"baterijos":{"parduota":8,"nupirkta":14,"nepanaudota":7},"energija":{"sunaudota":10,"pagaminta":3,"parduota":2,"nupirkta":3}},"2018/08/20":{"baterijos":{"parduota":11,"nupirkta":11,"nepanaudota":4},"energija":{"sunaudota":6,"pagaminta":12,"parduota":2,"nupirkta":2}},"2018/08/21":{"baterijos":{"parduota":4,"nupirkta":3,"nepanaudota":11},"energija":{"sunaudota":6,"pagaminta":0,"parduota":5,"nupirkta":3}},"2018/08/22":{"baterijos":{"parduota":7,"nupirkta":4,"nepanaudota":8},"energija":{"sunaudota":12,"pagaminta":11,"parduota":4,"nupirkta":2}},"2018/08/23":{"baterijos":{"parduota":6,"nupirkta":13,"nepanaudota":9},"energija":{"sunaudota":14,"pagaminta":2,"parduota":4,"nupirkta":4}},"2018/08/24":{"baterijos":{"parduota":8,"nupirkta":3,"nepanaudota":7},"energija":{"sunaudota":13,"pagaminta":12,"parduota":2,"nupirkta":1}},"2018/08/25":{"baterijos":{"parduota":9,"nupirkta":11,"nepanaudota":6},"energija":{"sunaudota":2,"pagaminta":5,"parduota":1,"nupirkta":5}},"2018/08/26":{"baterijos":{"parduota":3,"nupirkta":4,"nepanaudota":12},"energija":{"sunaudota":8,"pagaminta":7,"parduota":5,"nupirkta":0}},"2018/08/27":{"baterijos":{"parduota":13,"nupirkta":1,"nepanaudota":2},"energija":{"sunaudota":10,"pagaminta":13,"parduota":3,"nupirkta":5}},"2018/08/28":{"baterijos":{"parduota":4,"nupirkta":0,"nepanaudota":11},"energija":{"sunaudota":12,"pagaminta":13,"parduota":4,"nupirkta":1}},"2018/08/29":{"baterijos":{"parduota":11,"nupirkta":11,"nepanaudota":4},"energija":{"sunaudota":2,"pagaminta":6,"parduota":4,"nupirkta":2}},"2018/08/30":{"baterijos":{"parduota":8,"nupirkta":8,"nepanaudota":7},"energija":{"sunaudota":14,"pagaminta":0,"parduota":5,"nupirkta":1}},"2018/08/31":{"baterijos":{"parduota":9,"nupirkta":10,"nepanaudota":6},"energija":{"sunaudota":11,"pagaminta":3,"parduota":0,"nupirkta":1}},"2018/09/01":{"baterijos":{"parduota":9,"nupirkta":7,"nepanaudota":6},"energija":{"sunaudota":0,"pagaminta":13,"parduota":0,"nupirkta":1}},"2018/09/02":{"baterijos":{"parduota":13,"nupirkta":6,"nepanaudota":2},"energija":{"sunaudota":3,"pagaminta":3,"parduota":5,"nupirkta":4}},"2018/09/03":{"baterijos":{"parduota":4,"nupirkta":9,"nepanaudota":11},"energija":{"sunaudota":13,"pagaminta":11,"parduota":3,"nupirkta":5}},"2018/09/04":{"baterijos":{"parduota":1,"nupirkta":7,"nepanaudota":14},"energija":{"sunaudota":3,"pagaminta":12,"parduota":3,"nupirkta":3}},"2018/09/05":{"baterijos":{"parduota":1,"nupirkta":9,"nepanaudota":14},"energija":{"sunaudota":4,"pagaminta":6,"parduota":0,"nupirkta":5}},"2018/09/06":{"baterijos":{"parduota":7,"nupirkta":13,"nepanaudota":8},"energija":{"sunaudota":6,"pagaminta":7,"parduota":4,"nupirkta":0}},"2018/09/07":{"baterijos":{"parduota":5,"nupirkta":9,"nepanaudota":10},"energija":{"sunaudota":8,"pagaminta":4,"parduota":5,"nupirkta":2}},"2018/09/08":{"baterijos":{"parduota":4,"nupirkta":1,"nepanaudota":11},"energija":{"sunaudota":1,"pagaminta":9,"parduota":2,"nupirkta":0}},"2018/09/09":{"baterijos":{"parduota":8,"nupirkta":0,"nepanaudota":7},"energija":{"sunaudota":3,"pagaminta":5,"parduota":5,"nupirkta":1}},"2018/09/10":{"baterijos":{"parduota":4,"nupirkta":6,"nepanaudota":11},"energija":{"sunaudota":6,"pagaminta":1,"parduota":4,"nupirkta":3}},"2018/09/11":{"baterijos":{"parduota":0,"nupirkta":5,"nepanaudota":15},"energija":{"sunaudota":8,"pagaminta":13,"parduota":0,"nupirkta":4}},"2018/09/12":{"baterijos":{"parduota":7,"nupirkta":12,"nepanaudota":8},"energija":{"sunaudota":2,"pagaminta":7,"parduota":5,"nupirkta":2}},"2018/09/13":{"baterijos":{"parduota":2,"nupirkta":8,"nepanaudota":13},"energija":{"sunaudota":10,"pagaminta":2,"parduota":1,"nupirkta":5}},"2018/09/14":{"baterijos":{"parduota":14,"nupirkta":7,"nepanaudota":1},"energija":{"sunaudota":3,"pagaminta":1,"parduota":0,"nupirkta":2}},"2018/09/15":{"baterijos":{"parduota":2,"nupirkta":6,"nepanaudota":13},"energija":{"sunaudota":11,"pagaminta":14,"parduota":3,"nupirkta":0}},"2018/09/16":{"baterijos":{"parduota":4,"nupirkta":10,"nepanaudota":11},"energija":{"sunaudota":12,"pagaminta":12,"parduota":3,"nupirkta":3}},"2018/09/17":{"baterijos":{"parduota":9,"nupirkta":1,"nepanaudota":6},"energija":{"sunaudota":1,"pagaminta":8,"parduota":5,"nupirkta":3}},"2018/09/18":{"baterijos":{"parduota":1,"nupirkta":12,"nepanaudota":14},"energija":{"sunaudota":10,"pagaminta":2,"parduota":3,"nupirkta":3}},"2018/09/19":{"baterijos":{"parduota":0,"nupirkta":11,"nepanaudota":15},"energija":{"sunaudota":6,"pagaminta":6,"parduota":5,"nupirkta":2}}}}
    }
  }

  render() {
    const { perkaParduoda, parduotaNupirkta, data } = this.state;

    return (
      <Layout className="App" style={{backgroundColor: "white"}}>
        <Sidebar />
        <Content style={{backgroundColor: "white", padding: 10, maxWidth: "1920px", margin: "0 auto"}}>
          <Row gutter={40}>
            <Col span={8} xs={24} sm={24} md={24} lg={10} xl={10}>
              <Live />
              <List title={"Mano Pirkimai/Pardavimai"} data={parduotaNupirkta} />
              <List title={"Perka/Parduoda Biržoje"} data={perkaParduoda} />
            </Col>
            <Col span={16} xs={24} sm={24} md={24} lg={14} xl={14}>
              <Stats title="Asmeninė Statistika" data={data['asmeninis']}/>
              <Stats title="Rinkos Statistika" data={data['rinka']} />
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default App;
