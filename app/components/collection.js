import React from  'react';

export default class Collection extends React.Component {
    render () {

        var items = this.props.items.map((item, index) => {
            return <li className="collection-item avatar">
                        <img src={item.poster} alt={item.title} className="circle" />
                        <span className="title">{item.title}</span>
                        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
        });

        return (
            <div className="row">
                <ul className="collection">
                    {items}
                </ul>
            </div>
        )
    }
}