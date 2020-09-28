import React, {Component} from 'react';
import { Button } from 'reactstrap';
import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ]
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            
            const activeClass = filter === name ? 'btn-info' : 'btn-outline-secondary';

            return (
                <button 
                    key={name} 
                    type="button" 
                    className={`btn ${activeClass}`}
                    onClick={() => onFilterSelect(name)}
                >{label}</button>
            )
        });

        return (
            <div className="btn-group">
               {buttons}
            </div>
        )
    }
};