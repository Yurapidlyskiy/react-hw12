import React, { Component } from 'react'

export default class FeedbackOptions extends Component {
    render() {
        const {handleGood, handleNeutral, handleBad} = this.props;
        return (
            <div>
                    <button onClick={handleGood}>Good</button>
                    <button onClick={handleNeutral}>Neutral</button>
                    <button onClick={handleBad}>Bad</button>
                </div>
        )
    }
}