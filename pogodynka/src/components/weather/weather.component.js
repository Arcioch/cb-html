import React, { Component } from 'react';
import axios from 'axios';
import Loader from '../loader/loader.compoent';


class Weather extends Component {
    state = {
        isLoading: false,
        apiData: false,
        search: '',
        isError: false
    }
    handleInputChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    handleFormSubmit = (e) => {
        let API_URL = 'https://api.apixu.com/v1/forecast.json?key=3983b588d2f240aea4282620191004&days=7&q=' + this.state.search;
        //odpalamy wczytawanie naszych danych
        this.setState({
            isLoading: true,
            isError: false
        })
        axios({
            method: "GET",
            url: API_URL
        }).then((response) => {
            // console.log(response.data);
            this.setState({
                isLoading: false,
                apiData: response.data
            })
        }).catch((error) => {
            this.setState({
                isLoading: false,
                apiData: false,
                isError: true
            })
        })
        e.preventDefault();
    }
    render() {
        console.log('Metoda render')

        return (<div>
            <form onSubmit={this.handleFormSubmit}>
                <input onChange={this.handleInputChange} value={this.state.search} placeholder="Wpraowdz nazwę miasta i naciśnij enter" />
            </form>
            <Loader isLoading={this.state.isLoading} />
            {(!this.state.isLoading && this.state.isError) && <div>
                Coś poszło nie tak. Wpisz miasto jeszcze raz
            </div>}

            {(!this.state.isLoading && this.state.apiData) && <div>
                <p>Loklizajcaj {this.state.apiData.location.name}</p>
                <p>Temperatura {this.state.apiData.current.temp_c} stopnni C</p>
                <img src={this.state.apiData.current.condition.icon} alt="ikonka" />
                Pogoda na kolejne dni

                {this.state.apiData.forecast.forecastday.map((item, key) => {
                    return (
                        <div key={key}>
                            <p>Data: {item.date} </p>
                            <p>Temperatura maksymalna: {item.day.maxtemp_c} </p>
                            <p>Temperatura minimalna: {item.day.mintemp_c} </p>
                            <p>Jest: {item.day.condition.text} </p>
                            <p><img src={item.day.condition.icon} /> </p>
                        </div>
                    )
                })}

            </div>}
        </div>);
    }
}

export default Weather;