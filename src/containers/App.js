import React, { Component } from 'react';
import Logo from '../components/Logo/Logo';
import Title from '../components/Title/Title';
import Particles from 'react-particles-js';
import { Fireworks } from 'fireworks/lib/react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import kings from './kings.png';
import './App.css';

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

let fxProps = {
   count: 5,
   interval: 300,
   colors: ['#1FA437', '#FFCF01', '#E62A27'],
   calc: (props, i) => ({
     ...props,
     x: (i + 1) * (window.innerWidth / 5) - (i + 1) * 50,
     y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
   })
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
      alert('الرجاء إدخال تاريخ صحيح');
    }
  }

  render() {
    let snd = new Date().getFullYear();
    const { route } = this.state;
    return (
      <div className="App">
        <Particles params={particlesOptions} className='particles' />
        <Logo />
        { route === 'default'
          ?
          <div>
            <Title />
              <div className="pt6">
                <input onChange={this.onMonthChange} placeholder="الشهر الميلادي" type="text" id="month"  className="input-reset white f5 pa2 ba hover-bg-white b green"/>
                <strong className="f3 white">/</strong>
                <input onChange={this.onDayChange} placeholder="اليوم الميلادي" type="text" id="day" className="input-reset white f5 pa2 ba hover-bg-white b green"/>
              </div>
              <input onClick={this.check} type="submit" value="تحقق" className="mt4 b ph3 pv2 input-reset greenButton grow pointer f5 dib"/>
            </div>
            :
        ( route === 'correct'
          ?
          <div className="white f2 pb3 pt3 fw6">
            <Fireworks {...fxProps} />
            <div className="f2 pb3 pt4 fw6 mb5">
              <p style={{margin: 'auto', width: "50%", display: 'block'}}>
                <img src={kings} alt="kings" className="pb5" style={{ marginLeft: 'auto', marginRight: 'auto', width: "70%", display: 'block' }}/>
                اليوم الوطني السعودي <strong className="snd">{parseInt(snd) - 1930}</strong>
              </p>
            </div>
            <div style={{visibility: 'hidden'}}>
              <AudioPlayer
                className="w-30 center"
                preload
                autoPlay="true"
                loop="true"
                showSkipControls
                src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Saudi_Arabian_national_anthem%2C_performed_by_the_United_States_Navy_Band.oga"
              />
            </div>
          </div>
          :
          <p className="white f2" style={{margin: 'auto', width: "50%", display: 'block'}}>خطاء</p>
        )
      }
      <footer className="pt5 pb6 b white f4">By Younes | <a href="https://twitter.com/hashtag/%D8%A7%D9%84%D9%8A%D9%88%D9%85_%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A_%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A90?src=hashtag_click">🇸🇦 #اليوم_الوطني_السعودي90</a></footer>
      </div>
    );
  }
}

export default App;
