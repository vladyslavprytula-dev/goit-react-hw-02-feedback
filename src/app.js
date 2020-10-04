import React, { Component } from "react";
import Statistics from "./Components/Statistics/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Section from "./Components/Section/Section";
import Notificaion from "./Components/Notification/Notification";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  currentFeedback = (e) => {
    const option = e.currentTarget.name;
    this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
  };
  countTotalFeedback = () => {
    const { neutral, bad, good } = this.state;
    return neutral + bad + good;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };
  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please live feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.currentFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notificaion message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
