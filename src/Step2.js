import React, { Component } from 'react';
import { Container, Button, Header, Form, Grid } from 'semantic-ui-react'
import sentences from './sentences';

class Step2 extends Component {
  constructor(props) {
    super(props);

    this.goToStep = this.goToStep.bind(this);
    this.totalTime = this.totalTime.bind(this);
    this.totalInHours = this.totalInHours.bind(this);
    this.renderSentence = this.renderSentence.bind(this);
  };

  goToStep(step) {
    this.props.changeStep(step);
  }

  totalInHours() {
    const { time, unit, repetitions } = this.props.task;
    const AN_YEAR_IN_MONTHS = 12;
    const timeInHours = unit === 'hours' ? time : (time / 60);
    return timeInHours * repetitions * AN_YEAR_IN_MONTHS;
  }

  totalTime() {
    let result;
    const hours = this.totalInHours();

    if (hours >= 1) {
      result = `${(hours).toFixed()} horas.`;
    } else {
      result = `${hours * 60} minutos.`
    }

    return result;
  }

  renderSentence() {
    let sentence;
    const totalInHours = this.totalInHours();

    return sentences.reduce((finalSentence, currentSentence) => {
      let sentence;

      if (finalSentence.hours <= totalInHours &&
        finalSentence.hours > currentSentence.hours ) {
        sentence = finalSentence;
      } else if (currentSentence.hours <= totalInHours) {
        sentence = currentSentence;
      } else {
        sentence = finalSentence;
      }

      return sentence;
    }).text;
  }

  render() {
    const timeOptions = [
      { text: 'horas', value: 'hours' },
      { text: 'minutos', value: 'minutes' },
    ];

    const AN_YEAR_IN_MONTHS = 12;

    return(
      <Grid.Column width={8} className="content" className="top-margin--md">
        <Header as="p" size="large">
          Em um ano, o tempo gasto com {this.props.task.text} totaliza
        </Header>
        <Header as="p" size="huge">
          <span className="score">
          {this.totalTime()}</span>
        </Header>

        <br/>

        <Header as="p" size="large">
          Isso é tempo o suficiente pra
        </Header>

        <Header as="p" size="huge">
          <span className="score">
            {this.renderSentence()}.
          </span>
        </Header>

        <br/>

        <Header as="p" size="large">
          Já pensou em automatizar esse trabalho?
        </Header>

        <Form.Group inline>
          <Button as="a" color="yellow" size="huge" onClick={() => this.goToStep(3)} className="top-margin--xs">
            Dá pra automatizar?
          </Button>
          <Button as="a" size="huge" onClick={() => this.goToStep(1)} className="top-margin--xs">
            Calcular outra tarefa
          </Button>
        </Form.Group>
      </Grid.Column>
    );
  }
}

export default Step2;
