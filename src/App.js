import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button, Header, Form, Grid } from 'semantic-ui-react'

class App extends Component {
  render() {
    const timeOptions = [
      { text: 'horas', value: 'hours' },
      { text: 'minutos', value: 'minutes' },
    ];

    return (

      <div className="App">
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h1">
                Descubra o que dá pra ser feito com o tempo que você gasta na tarefa mais chata do mundo
              </Header>
              <Form size="massive">
                <Form.Input label='Que tarefa é essa?' type='text' />
                <Form.Group inline>
                  <Form.Input width={2} type='number' value="4" />
                  <Form.Select fluid options={timeOptions} value="hours" />
                  <Form.Input width={2} type='number' value="2" />
                  <Form.Field>
                    <p>vezes por mês</p>
                  </Form.Field>
                </Form.Group>
              </Form>
              <Button color="yellow">Calcular</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
