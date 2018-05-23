import React, {Component} from 'react'
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