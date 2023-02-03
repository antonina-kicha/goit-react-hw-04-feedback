import {useState } from 'react';

import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import {Notification} from './Notification/Notification'

 export const App = () => {
  const options = ["Good", "Neutral", "Bad"];

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 
  const scoreСounter = (score) => {
        const scoreToLowerCase = score.toLowerCase();
        console.log(scoreToLowerCase);
        switch (scoreToLowerCase) {
          case "good":
            setGood (good => (good +1));
            break;
          case "neutral":
            setNeutral (neutral => (neutral +1));
            break;
         case "bad":
            setBad (bad => (bad +1));
            break;
          default:
            console.log("что-то пошло не так");
        }
  }

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad
    return (good > 0 ? Math.round((good / total)*100) : 0);
  }
  
  return (
        <>
      <Section title="Please leave feedback">
          <Feedback options={options} onLeaveFeedback={scoreСounter}/>
      </Section>
          <Section title="Statistics">
            {(good + neutral + bad) > 0
              ? <Statistics good={good} neutral={neutral} bad={bad} total={good + neutral + bad} positivePercentage={countPositiveFeedbackPercentage()} />
              : <Notification message="There is no feedback"/>
            }
            </Section>
    </> 
  )
}




