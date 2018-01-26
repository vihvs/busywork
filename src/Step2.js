import React, { Component } from 'react';
import { Container, Button, Header, Form, Grid } from 'semantic-ui-react'

class Step2 extends Component {
  constructor(props) {
    super(props);

    this.goToStep = this.goToStep.bind(this);
    this.totalTime = this.totalTime.bind(this);
  };

  goToStep(step) {
    this.props.changeStep(step);
  }

  totalTime() {
    const { time, unit, repetitions } = this.props.task;
    const AN_YEAR_IN_MONTHS = 12;

    const timeInHours = unit === 'hours' ? time : (time / 60).toFixed();
    return timeInHours * repetitions * AN_YEAR_IN_MONTHS;
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
          {this.totalTime()} horas.</span>
        </Header>

        <br/>

        <Header as="p" size="large">
          Isso é tempo o suficiente pra
        </Header>

        <Header as="p" size="huge">
          <span className="score">
            ler todos os livros do Game of Thrones.
          </span>
        </Header>

        <br/>

        <Header as="p" size="large">
          Já pensou em automatizar esse trabalho?
        </Header>

        <Form.Field inline>
          <Button as="a" size="huge" onClick={() => this.goToStep(1)}>
            Calcular outra tarefa
          </Button>
          <Button as="a" color="yellow" size="huge" onClick={() => this.goToStep(3)}>
            Dá pra automatizar?
          </Button>
        </Form.Field>
      </Grid.Column>
    );
  }
}

export default Step2;
