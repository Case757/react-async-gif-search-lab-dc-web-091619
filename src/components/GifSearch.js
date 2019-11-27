import React from 'react'

export default class GifSearch extends React.Component {
    state = {
        query: ""
    }
    
    render() {
        return(
            <div>
                <p>Enter a Search Term:</p>
                <form onSubmit={(event) => {
                            event.preventDefault()
                            this.props.setSubmitState(this.state.query)}
                        }>
                    <input
                        type="text"
                        name="search"
                        className="form-check-input"
                        onChange={event => this.setState({query: event.target.value})}
                    />
                    <button className="btn btn-primary" value="Find Gifs"/>
                </form>
            </div>
        )
    }


}