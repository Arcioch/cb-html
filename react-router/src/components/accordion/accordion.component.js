import React, { Component } from 'react';
import './accordion.style.scss';

class Accordion extends Component {
    state = {
        toggle: false
    }
    changeToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    render() {
        return (
            <div className="accordion">
                <div onClick={this.changeToggle} className="title">{this.props.title}</div>
                {this.state.toggle &&
                    <div className="description">
                        {this.props.description}
                        {this.props.picture &&
                            <img src={this.props.picture} />
                        }
                    </div>
                }
            </div>);
    }
}

export default Accordion;

