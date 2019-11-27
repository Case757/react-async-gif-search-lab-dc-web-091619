import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    state = {
        gifs: []
    }


    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=cUvdVuNMVFzL588sMPEtgbSdOvKxAr1d&rating=g')
        .then(rsp => rsp.json())
        .then(rsp => {
            let newState = rsp['data'].slice(0, 3)
            this.setState({gifs: newState})
        })
    }

    submitHandler = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=cUvdVuNMVFzL588sMPEtgbSdOvKxAr1d&rating=g`)
        .then(rsp => rsp.json())
        .then(rsp => {
            let newState = rsp['data'].slice(0, 3)
            this.setState({gifs: newState})
        })
    }

    render() {
        return(
            <div>
                <GifSearch setSubmitState={this.submitHandler}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

}