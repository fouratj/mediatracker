import React from  'react';

export default class Collection extends React.Component {
    render () {
        let items = this.props.items.map((item, index) => {
            return <li className="collection-item avatar" key={index}>
                        <img src={item.poster} alt={item.title} className="circle" />
                        <span className="title">{item.title}</span>
                        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
        });

        return (
            <div className="row">
                <div className="col s12">
                    <ul className="collection">
                        {items}
                    </ul>
                </div>
            </div>
        )
    }
}