import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  state = {
    search: 'karol.ph.otography',
    instagramData: false,

  }

  loadDataFromInstagram = () => {
    let API_URL = 'https://www.instagram.com/' + this.state.search + '/?__a=1'
    axios({
      method: 'get',
      url: API_URL,
    }).then(response => {
      this.setState({
        instagramData: response.data
      })
    })
  }

  handleFormSubmit = (e) => {
    this.loadDataFromInstagram();
    e.preventDefault();
  }

  handleInputChange = (e) => {
    this.setState({
      search: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input onChange={this.handleInputChange} type='text' value={this.state.search} />
        </form>
        {this.state.instagramData && <div>
          <p>BIOGRAFIA:{this.state.instagramData.graphql.user.biography}</p>
          <p>Imie i Nazwisko:{this.state.instagramData.graphql.user.full_name}</p>
          <img src={this.state.instagramData.graphql.user.profile_pic_url_hd}></img>
          {this.state.instagramData.graphql.user.edge_owner_to_timeline_media.edges.map((item) => {
            return <img src={item.node.display_url}></img>
          })}

        </div>}

      </div>
    );
  }
}

export default App;