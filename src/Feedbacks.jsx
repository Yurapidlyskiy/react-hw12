import React, { Component } from 'react';
import FeedbacksOptions from './FeedbacksOptions';
import Statistics from './Statistics';
import styles from './Feedbacks.module.css';

export default class Section extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePercentage: 0,
    }

    handleGoodFeedback = () => {
        this.setState((prevState) => ({
            good: prevState.good + 1,
        }));
        this.countTotalFeedback()
    };

    handleNeutralFeedback = () => {
        this.setState((prevState) => ({
            neutral: prevState.neutral + 1,
        }));
        this.countTotalFeedback()
    };

    handleBadFeedback = () => {
        this.setState((prevState) => ({
            bad: prevState.bad + 1,
        }));
        this.countTotalFeedback()
    };

    countTotalFeedback = () => {
        this.setState((prevState) => ({
            total: prevState.total + 1,
        }));
        this.countPositiveFeedbackPercentage()
    };

    countPositiveFeedbackPercentage = () => {
        this.setState({
            positivePercentage: Math.round(this.state.good * 100/ this.state.total)
        });
    };

    render() {
        
        return (
            <div>
              <div className={styles.text}>
              <h1>Please leave feedback</h1>
                <FeedbacksOptions 
                handleGood={this.handleGoodFeedback} 
                handleNeutral={this.handleNeutralFeedback} 
                handleBad={this.handleBadFeedback}/>

                <Statistics 
                good={this.state.good} 
                neutral={this.state.neutral} 
                bad={this.state.bad} 
                total={this.state.total} 
                positivePercentage={this.state.positivePercentage} />
              </div>
          
            </div>
        )
    }
}