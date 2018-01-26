import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { Container, Button, Header, Form, Grid } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      task: {
        text: '',
        unit: 'hours',
        time: 4,
        repetitions: 2,
      },
      formSubmited: false,
    }

    this.renderCurrentStep = this.renderCurrentStep.bind(this);
    this.changeCurrentStep = this.changeCurrentStep.bind(this);
    this.changeTask = this.changeTask.bind(this);
    this.validate = this.validate.bind(this);
  };

  changeTask(property) {
    this.setState({ task: Object.assign({}, this.state.task, property) });
  }

  renderCurrentStep() {
    const stepById = {
      1: <Step1 task={this.state.task} formSubmited={this.state.formSubmited} validate={this.validate} changeTask={this.changeTask} changeStep={this.changeCurrentStep} />,
      2: <Step2 task={this.state.task} changeStep={this.changeCurrentStep} />,
      3: <Step3 task={this.state.task} />,
    }

    return stepById[this.state.currentStep];
  }

  changeCurrentStep(step) {
    this.setState({ currentStep: step, formSubmited: false });
  }

  validate() {
    const textError = !this.state.task.text.length;
    let newState = { formSubmited: true };

    this.setState(newState)

    return !textError;
  }

  render() {
    return (

      <div className='App'>
        <div className={`bg bg${this.state.currentStep}`} />
        <Container>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={8} className='top-margin--sm'>
                <Header className='logo'>
                  busywork
                </Header>
              </Grid.Column>

              {this.renderCurrentStep()}

            </Grid.Row>

          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
