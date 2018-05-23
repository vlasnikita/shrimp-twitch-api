import React, { Component, Fragment } from 'react'

class TwitchUser extends Component {

    render() {

        const { display_name, profile_image_url, view_count } = this.props
        return (
            <Fragment>
                <img 
                    src={profile_image_url} 
                    alt={display_name} 
                    height='150'
                    width='150'
                />
                <p>Имя: {display_name}</p>
                <p>Просмотров: {view_count}</p>
            </Fragment>
        )
    }
}

export default TwitchUser