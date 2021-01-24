import React from 'react'
import PropTypes from 'prop-types'

// Can also be formatted with passing props like this: const Navbar = (props) => {
const Navbar = ({ title }) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>{title}</h1>
            {/* // this can also be written as <h1>{props.title}</h1> if you choose to pass props not destructured */}
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder'
};


Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Navbar