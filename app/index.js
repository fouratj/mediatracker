var React = require('react');
var ReactDOM = require('react-dom');
import { store } from './store';

console.log(store);

class Container extends React.Component {
    render() {
        return (
            <div>Hello Worldsssss</div>
        )
    }
}

ReactDOM.render(
    <Container />,
    document.getElementById('app')
);