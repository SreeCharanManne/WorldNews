import React from 'react';
import NavbarComponent from './components/navbar';
import { BrowserRouter } from 'react-router-dom';
import FooterComponent from './components/footer';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      news: []
    }
  }
  componentDidMount() {
    fetch('https://cryptic-ravine-96718.herokuapp.com/')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    this.setState({
      news: myJson.news
    })
  });
  }
  render() {
    console.log(this.state)
    return (
      <BrowserRouter>
        <div>
          <NavbarComponent />
          <div>
          {this.state.news.map((item, index) => {
            return (
              <div className="container">
              <div className="card z-depth-0 post-summary">
              <div className="card-content grey-text text-darken-3">
                <span className="card-title">{item.title}</span>
                <a href={item.link} rel="noopener noreferrer" target="_blank">Read More</a>
                <div className="card-action">
                <img src={item.img} alt="Loading...." height="50%" width="50%"/>
                </div>
              </div>
              </div>
              </div>
            )
          })}
          </div>
          <FooterComponent />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;