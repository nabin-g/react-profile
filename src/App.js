import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from "./SocialProfiles";

import profile from './assets/profile.png';
// class RegularClass{}
//
// class ComponentClass extends Component{}
//
// const regularClassInstance = new RegularClass();
// const componentClassInstance = new ComponentClass();

// console.log('regularClassInstance', regularClassInstance);
// console.log('componentClassInstance', componentClassInstance);

class App extends Component {

  state = { displayBio: false};

  // constructor(){
  //   super();
  //   this.state = {displayBio: false};
  //   console.log('Component this', this);
  //
  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  //   //this.showLess = this.showLess.bind(this);
  //
  // }

  // readMore(){
  //   console.log('readMore this', this);
  //   this.setState({displayBio: true});
  // }
  // showLess(){
  //   //console.log('showLess this', this);
  //   this.setState({displayBio: false});
  // }

  toggleDisplayBio = () => {
    this.setState({displayBio: !this.state.displayBio});
  }

  render = () => {
    return (
      <div>
          <img src={profile} alt="profile" className='profile'/>
        <h1> Hello!</h1>
        <p> My name is nabin. I am a Electrical and Computer Engineer.</p>
        <p> I am always looking forward to working on meaningful projects. </p>
        {
          this.state.displayBio ? (
                     <div>
                       <p> I live in San Francisco, and code every day. </p>
                       <p> My favorite language is JavaScript, and I think React.js is awesome</p>
                       <p> Besides coding, I also love music and ramen! </p>
                       <button onClick ={this.toggleDisplayBio}> Show Less </button>
                     </div>
                   ): (
                     <div>
                        <button onClick= {this.toggleDisplayBio}> Read More </button>
                     </div>
                   )
        }
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    )
  }
}

export default App;
