import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Legend } from 'recharts';

export default class Chart extends React.Component {
    constructor (props) {
        super(props);
        this.state = { data: [] };
    }

    componentWillMount () {
        let type = this.props.route.path, rawData = [];
        let years = [];

        if (type.includes("movie")) {
             rawData = this.props.movies;
        } else if (type.includes("tvshow")) {
            rawData = this.props.tvshows;
        } else if (type.includes("book")) {
            rawData = this.props.books;
        }

        years = rawData.map(item => item.released)
                        .filter( (value, index, array) => ( index == array.indexOf(value)))
                        .sort()
                        .map(item => {
                            let curr = {
                                year: item, "per Year": 0
                            }

                            rawData.forEach( elem => {
                                if (elem.released === item) curr["per Year"]++;
                            });

                            return curr;
                        });

        this.setState({
            data: years
        });
        
    }

    render () {


        return (
            <div className="row">
                <div className="col s12">
                    <ResponsiveContainer minHeight={400}>
                        <LineChart  data={this.state.data}>
                            <Line type="monotone" dataKey="per Year" stroke="#8884d8" />
                            <XAxis dataKey="year"/>
                            <YAxis/>
                            <Legend verticalAlign="top" height={36}/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            
        )
    }

}