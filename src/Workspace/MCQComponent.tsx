import { Button, Card } from '@material-ui/core';
import * as React from 'react';
import { IMCQQuestion } from '../assessment/assessmentShape';

export interface IMCQChooserProps {
  mcq: IMCQQuestion;
  handleMCQSubmit: (choiceId: number) => void;
}

type State = {
  mcqOption: number | null;
};

class MCQComponent extends React.Component<IMCQChooserProps, State> {
  constructor(props: IMCQChooserProps) {
    super(props);
    this.state = {
      mcqOption: props.mcq.answer
    };
  }
  public render() {
    const options = this.props.mcq.choices.map((choice, i) => (
      <Button
        key={i}
        onClick={this.onMCQSelect(i)}
      >
        <div>{choice.content}</div>
      </Button>
    ));
    return (
      <div className="MCQChooser row">
        <Card>
          <div> {options}</div>
        </Card>
      </div>
    );
  }

  private onMCQSelect = (i: number) => (e: any) => {
    if (i !== this.state.mcqOption) {
      this.props.handleMCQSubmit(i);
      this.setState({
        mcqOption: i
      });
    }
    const shouldDisplayMessage = this.props.mcq.solution !== null && this.props.mcq.choices[i].hint;
    if (shouldDisplayMessage) {
      const hintElement = (
        <div>
          {this.props.mcq.choices[i].hint!} 
        </div>
      );
      // Todo: Display hint message 
    }
  };
}





