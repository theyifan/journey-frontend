import * as React from 'react';
import {mockAssessmentOverviews, mockAssessments} from '../mocks/assessmentAPI';
import Assessment from '../assessmentComponent';
import {IStateProps} from '../assessmentComponent'    
import {
    IAssessmentOverview,
    AssessmentCategories
} from './assessmentShape';


export type State = {    
    assessmentOverviews: Array<IAssessmentOverview>
    assessmentCategory: AssessmentCategories;
    isStudent: boolean
};
  
class AssessmentContainer extends React.Component<{}, State> {

    constructor(props:any) {
        super(props)
        this.state = {
            assessmentOverviews: mockAssessmentOverviews,
            assessmentCategory: AssessmentCategories.Contest,
            isStudent: false,
         };
    }

    private handleAssessmentOverviewFetch() {}
    private handleSubmitAssessment() {}
    
    private categoryFilter = (overview: IAssessmentOverview) =>
    overview.category === this.state.assessmentCategory;
   
    
    public render() {
      return (<Assessment 
        assessmentOverviews={this.state.assessmentOverviews} 
        handleAssessmentOverviewFetch={this.handleAssessmentOverviewFetch}
        handleSubmitAssessment={this.handleSubmitAssessment}
        assessmentCategory={this.state.assessmentCategory}
        isStudent={this.state.isStudent}
        />
        
    );
    }
  }

  export default AssessmentContainer;