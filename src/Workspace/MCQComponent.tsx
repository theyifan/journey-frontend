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
 
}





