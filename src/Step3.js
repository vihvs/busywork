import React, { Component } from 'react';
import { Container, Button, Header, Form, Grid } from 'semantic-ui-react'

class Step2 extends Component {
  constructor(props) {
    super(props);

    this.goToStep = this.goToStep.bind(this);
  };

  goToStep(step) {
    this.props.changeStep(step);
  }

  render() {
    const timeOptions = [
      { text: 'horas', value: 'hours' },
      { text: 'minutos', value: 'minutes' },
    ];

    console.log(this.props);

    return(
      <Grid.Column width={8} className="content" className="top-margin--md">
        <Header size="huge" className="headline--md">
          Já pensou se {this.props.task.text} fosse feito por um robô?
        </Header>

        <Header size="large" className="text-grey">
          A <b>BusyWork</b> é uma empresa especializada em montar pequenos robôs
          virtuais que fazem os trabalhos chatos e repetivos por você!
        </Header>
        <Header size="large" className="text-grey">
          Quer saber se {this.props.task.text} pode ser feito por um robô?
        </Header>

        <Form.Field inline>
          <Button as="a" color="blue" size="huge" onClick={() => this.goToStep(3)}>
            Pergunte pra gente pelo messenger
          </Button>
        </Form.Field>
      </Grid.Column>
    );
  }
}

export default Step2;
