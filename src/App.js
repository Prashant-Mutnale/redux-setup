import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store'
import Posts from './components/Posts'
let datalisted = ""
class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        posts : []
      }
    }

 
  render() {
    // console.log(this.state.posts)
    // console.log(this.state.posts)
    // if(this.state.posts){
    //    let datalisted = this.state.posts
    //   //  console.log(datalisted)
    // }
  
    // const datalisted = this.state.posts.map(items =>{
    //   return(
    //     <div>
    //         {items.body}
    //         <div>
    //           {items.title}
    //        </div>
    //     </div>
    //   )
    // })
 
    return (
      // <div>
      //       {/* {datalisted} */}{
      //       this.state.posts.map((items, i) => {
      //           return(
      //             <div key = {items.id}>
      //               <div>
      //               {items.body}
      //                {items.title}  
      //             </div>
      //             {/* <div>
      //               {items.title}
      //            </div> */}
      //            </div>
      //           )
      //       })
      //     }
      // </div>
      <Provider store = {store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Posts/>
      </div>
      </Provider>
    );
  }
}


export default App;
