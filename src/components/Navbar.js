import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
    // Defaults to this if no props are passed in
    static defaultProps = {
        title: 'Github Finder'
    };

    // Checks the type of your prop to ensure proper mounting
    static propTypes = {
        title: PropTypes.string.isRequired
    }

    render() {
        return (
            <nav className='navbar bg-primary'>
                <h1>{this.props.title}</h1>
            </nav>
        )
    }
}

export default Navbar
