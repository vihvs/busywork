import React, { Component } from 'react';
import { Responsive, Container, Button, Header, Form, Grid } from 'semantic-ui-react'

class Step1 extends Component {
  constructor(props) {
    super(props);

    this.goToNextStep = this.goToNextStep.bind(this);
    this.handleChangeTask = this.handleChangeTask.bind(this);
    this.handleChangeTaskUnit = this.handleChangeTaskUnit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  goToNextStep() {
    this.props.changeStep(2);
  }

  handleChangeTask(event) {
    this.props.changeTask({ [`${event.target.name}`]: event.target.value })
  }

  handleChangeTaskUnit(event, data) {
    this.props.changeTask({ unit: data.value })
  }

  handleSubmit() {
    this.props.validate() && this.goToNextStep();
  }

  render() {
    const timeOptions = [
      { text: 'horas', value: 'hours' },
      { text: 'minutos', value: 'minutes' },
    ];

    return(
      <Grid.Column width={8} className='content' className='top-margin--lg'>
        <Header as='h1' className='headline'>
          Pense numa <Responsive as='br' minWidth={992} /> tarefa chata.
        </Header>
        <Form size='massive' className='top-margin--sm'>
          <Form.Field>
            <label className='bottom-margin--xs text-grey'>Que tarefa é essa?</label>
            <Form.Input type='text'
              value={this.props.task.text}
              name='text'
              error={this.props.formSubmited && !this.props.task.text.length}
              placeholder='Ex: copiar e colar dados no excel'
              onChange={this.handleChangeTask} />
          </Form.Field>
          <Form.Field className='bottom-margin--xs'>
            <label className='text-grey'>Quanto tempo você gasta?</label>
          </Form.Field>
          <Form.Group inline unstackable>
            <Form.Input
              width='5'
              type='number'
              name='time'
              onChange={this.handleChangeTask}
              value={this.props.task.time}
            />
            <Form.Select
              fluid
              options={timeOptions}
              value={this.props.task.unit}
              onChange={this.handleChangeTaskUnit}
            />
          </Form.Group>
          <Form.Field className='bottom-margin--xs'>
            <label className='text-grey'>
              Quantas vezes você repete?
            </label>
          </Form.Field>
          <Form.Group inline unstackable>
            <Form.Input
              width='5'
              type='number'
              name='repetitions'
              min='1'
              value={this.props.task.repetitions}
              onChange={this.handleChangeTask}
            />
            <Form.Field>
              <p>
                {this.props.task.repetitions === '1' ? 'vez' : 'vezes'} por mês
              </p>
            </Form.Field>
          </Form.Group>
        </Form>
        <Button as='a' color='yellow' size='huge' onClick={this.handleSubmit}>
          Calcular o que dá pra fazer nesse tempo
        </Button>
      </Grid.Column>
    );
  }
}

export default Step1;
