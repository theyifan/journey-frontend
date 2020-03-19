import * as React from 'react';
import NavBar from '../NavBar/NavBar';
import { Container } from '@material-ui/core'
import MissionOverviewCard from '../Reusable Component/MissionOverviewCard'


import {
    AssessmentCategory,
    AssessmentStatuses,
    GradingStatuses,
    IAssessmentOverview
} from '../assessment/assessmentShape';


export interface IDispatchProps {
    handleAssessmentOverviewFetch: () => void;
    handleSubmitAssessment: (id: number) => void;
}

export interface IOwnProps {
    assessmentCategory: AssessmentCategory;
}

export interface IStateProps {
    assessmentOverviews?: IAssessmentOverview[];
    isStudent: boolean;
}

export interface IAssessmentWorkspaceParams {
    assessmentId?: string;
    questionId?: string;
  }

export interface IAssessmentProps
  extends IDispatchProps,
    IOwnProps,
    IStateProps {}

export type State = {
  betchaAssessment: IAssessmentOverview | null;
};

class Assessment extends React.Component<IAssessmentProps, State> {
    public constructor(props: IAssessmentProps) {
        super(props);
        this.state = {
          betchaAssessment: null,
        };
    }
    
    today = new Date().toLocaleString();

    public render(): JSX.Element {
        console.log(this.props.assessmentOverviews)
        return(
            <>
                <NavBar seed={1}/>
                <Container maxWidth="lg">
                {this.props.assessmentOverviews?.map(overview  => 
                    <MissionOverviewCard overview={overview} />
                )}
                </Container>
            </>
            

        );
    }


}

export default Assessment;

