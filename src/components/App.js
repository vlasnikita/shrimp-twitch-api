import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route, Switch, NavLink, Redirect} from 'react-router-dom'
import SearchForm from './SearchForm'

class App extends Component {
    static childContextTypes = {
        username: PropTypes.string
    }

    getChildContext() {
        return {
            username: this.state.user
        }
    }

    state = {
        user: ''
    }

    handleUserChange = user => this.setState({ user })

    render() {
        return (
            <SearchForm />
        )
    }
}

export default App