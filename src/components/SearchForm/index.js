import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {increment} from '../../AC'
import TwitchUser from '../TwitchUser'

class SearchForm extends Component {

    state = {
        value: '',
        user: null
    }

    handleChange = ({ target: { value }}) => {this.setState({ value })}

    handleSubmit = e => {
        e.preventDefault()
        fetch(`https://api.twitch.tv/helix/users?login=${this.state.value}`, {
            headers: {
                'Client-ID': 'ah1lx2h6imljx7kz0i06hisosni2zw'
            }
        })
        .then(r => r.json())
        .then(result => this.setState({
            user: result.data[0]
        }))
    }

    render() {
        return (
            <Fragment>
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text'
                    placeholder='Ник стримера'
                    onChange={this.handleChange}
                    value={this.state.value}
                />
                <button>Инфы мне!</button>
            </form>
            <TwitchUser {...this.state.user} />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.counter
})

export default connect(mapStateToProps, {
    handleIncrement: increment
})(SearchForm)