import React, { Component } from 'react';

export class Home extends Component {
    displayName = Home.name

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
        this.state = { stopds: [], loading: true };
        //this.state = { q: '0', loading: true  };
        //this.state = { v: '0', loading: true  };
        //this.handleChange = this.handleChange.bind(this);

        fetch('api/SampleData/Datatable')
            .then(response => response.json())
            .then(data => {
                this.setState({ forecasts: data, loading: false });
            });

        fetch('api/StopList/Stops')
            .then(response => response.json())
            .then(data => {
                this.setState({ stopds: data, loading: false });
            });
    }
    /*handleChange(event) {
        const { q, value } = event.target
        this.setState({ q: event.target.q });
        //this.setState({ v: event.target.v });
        alert('An essay was submitted: ' + this.state.q);
    }*/
    
        
    static renderForecastsTable(forecasts, stopds) {
        return (
            <div className="form">
                <div className="top">
                    <div>Согласование изменений параметров работы скважин на 12 августа</div>
                </div>
                <div className="centrmain">
                    <div className="textdep">41/Ичединское</div>
                    <fieldset>
                        <legend align="left">Причина отклонения</legend>
                        <div className="ob">
                            <select className="select" size="1">
                                {stopds.map(stop => {
                                    return (
                                        <option value={stop.id}>{stop.name}</option>
                                )})}                                                                           
                            </select>
                        </div>
                    </fieldset>

            <table className="tabl">
                <thead>
                            {forecasts && forecasts.map(forecast =>
                        <tr key={forecast.mesto}>
                            <th>Параметр</th>
                            <th>На согласование</th>
                            <th>{forecast.dateFormatted}</th>
                            <th>+/-</th>
                        </tr>
                    )}
                </thead>
                <tbody>
                            {forecasts && forecasts.map(forecast =>                              
                        <tr key={forecast.mesto} >
                            <td>Qж</td>
                            <td><input type="text" id="qst" name="qst" className="intext"></input></td>
                            <td>{forecast.qvalue}</td>
                        <td>Ячейка</td>
                        </tr>
                            )}
                            {forecasts && forecasts.map(forecast =>
                        <tr key={forecast.mesto} >
                            <td>% воды</td>
                            <td><input type="text" id="vst" name="vst" className="intext"></input></td>
                                <td>{forecast.vvalue}</td>
                        <td>Ячейка</td>
                            </tr>
                            )}

                            {forecasts && forecasts.map(forecast =>
                        <tr key={forecast.mesto} >
                            <td>Qн</td>
                            <td></td>
                            <td>{forecast.qnvalue}</td>
                        <td>Ячейка</td>
                        </tr>
                            )}
                    <tr>
                        <td>Hд</td>
                        <td>Ячейка</td>
                        <td>Ячейка</td>
                        <td>Ячейка</td>
                    </tr>
                    <tr>
                        <td>Рлин</td>
                        <td>Ячейка</td>
                        <td>Ячейка</td>
                        <td>Ячейка</td>
                    </tr>
                    <tr>
                        <td>Рбуф</td>
                        <td>Ячейка</td>
                        <td>Ячейка</td>
                        <td>Ячейка</td>
                    </tr>
                    <tr>
                        <td>Рзатр</td>
                        <td>Ячейка</td>
                        <td>Ячейка</td>
                        <td>Ячейка</td>
                    </tr>
                        
                </tbody>
            </table>

            <fieldset>
                <legend align="left">Мероприятия по возврату снижений</legend>
                <div className="ob">
                    <textarea className="multitext" readOnly>
                                Текст
                    </textarea>
                 </div>
            </fieldset>
                    <div className="bottext">

                    </div>
                    <input type="submit" value="На согласование"></input>
                </div>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Home.renderForecastsTable(this.state.forecasts, this.state.stopds)//, this.state.q, this.state.v);


        return (
            <div>
                {contents}
            </div>
        );
    }
}
