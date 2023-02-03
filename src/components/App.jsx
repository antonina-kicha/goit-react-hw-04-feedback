import { Component } from 'react';

import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import {Notification} from './Notification/Notification'

export class App extends Component {
  options = ["Good", "Neutral", "Bad"];
 
  state =  {
      good: 0,
      neutral: 0,
      bad: 0
  }

  scoreСounter = (score) => {
    this.setState(prevState => {
      const scoreToLowerCase = score.toLowerCase();
      return {[scoreToLowerCase]: prevState[scoreToLowerCase] + 1};
    });
  }

  countTotalFeedback() {
    const feedbackArr = Object.values(this.state);
    const totalFeedback = feedbackArr.reduce((previousValue, number) => {
      return previousValue + number;
    }, 0)
    return totalFeedback;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback()
    const good = this.state.good;
    return (good > 0 ? Math.round((good / total)*100) : 0);
  }
  
  render() {
      return (
        <>
      <Section title="Please leave feedback">
          <Feedback options={this.options} onLeaveFeedback={this.scoreСounter}/>
      </Section>
          <Section title="Statistics">
            {this.countTotalFeedback() > 0
              ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
              : <Notification message="There is no feedback"/>
            }
            </Section>
    </> 
  )
    
  }
}




