import React, { Component } from 'react';
import Logo from '../components/Logo/Logo';
import Title from '../components/Title/Title';
import Particles from 'react-particles-js';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Fireworks } from 'fireworks/lib/react'
import kings from './kings.png';
import './App.css';

let fxProps = {
    count: 3,
    interval: 200,
    colors: ['#cc3333', '#4CAF50', '#81C784'],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
    })
}

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
      route: 'default',
      day: 0,
      month: 0
    }
  }

  onDayChange = (event) => {
     this.setState({day: event.target.value})
  }

  onMonthChange = (event) => {
      this.setState({month: event.target.value})
  }

  check = () => {
    if (this.state.day === '23' && this.state.month === '9') {
      this.setState({route: 'correct'});
    } else {
      alert('الرجاء إدخال التاريخ الصحيح!');
    }
  }

  render() {
    let snd = new Date().getFullYear();
    const { route } = this.state;
    return (
      <div className="App">
        <Particles params={particlesOptions} className='particles' />
        { route === 'default'
          ?
          <div>
            <Logo />
            <Title />
              <div className="pt5">
                <input onChange={this.onMonthChange} placeholder="شهر" type="text" id="month"  className="input-reset pt3 pb3 b green"/>
                <strong className="f3 white"> / </strong>
                <input onChange={this.onDayChange} placeholder="يوم" type="text" id="day" className="input-reset pt3 pb3 b green"/>
              </div>
              <input onClick={this.check} type="submit" value="تحقّق" className="mt4 b ph5 pv2 input-reset greenButton grow pointer f5 dib"/>
            </div>
            :
        ( route === 'correct'
          ?
          <div className="white f2 pt3 fw6">
            <div className="pb3 fw6 mb5 ma2">
              <p className="w-100">
                <img src={kings} alt="kings" className="pb6" style={{ marginLeft: 'auto', marginRight: 'auto', width: "500px", height: "400px", display: 'block' }}/>
                <strong className="accent pa2 ba bw3">اليوم الوطني السعودي {parseInt(snd) - 1930}</strong>
              </p>
            </div>
            <div style={{visibility: 'hidden'}}>
              <AudioPlayer
                className="w-30 center"
                autoPlay="true"
                loop="true"
                showSkipControls
                src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Saudi_Arabian_national_anthem%2C_performed_by_the_United_States_Navy_Band.oga"
              />
            </div>
            <Fireworks {...fxProps} />
          </div>
          :
          <p className="white f2" style={{margin: 'auto', width: "50%", display: 'block'}}>خطاء</p>
        )
      }
      <footer className="pt5 pb6 b white f4 dib"><a className="grow dib" href="https://www.linkedin.com/feed/">By Younes</a> | <a className="grow dib" href="https://www.kau.edu.sa/Home.aspx">FCIT of KAU</a></footer>
      </div>
    );
  }
}

export default App;
