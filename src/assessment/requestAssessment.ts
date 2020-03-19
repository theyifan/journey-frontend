import axios from 'axios';
import {
  AssessmentCategory,
  ExternalLibraryName,
  IAssessment,
  IAssessmentOverview,
  IProgrammingQuestion,
  QuestionType,
  QuestionTypes
} from './assessmentShape';

type Tokens = {
    accessToken: string;
    refreshToken: string;
};


/**
 * GET /assessments
 */
export async function getAssessmentOverviews(
    tokens: Tokens
  ): Promise<IAssessmentOverview[] | null> {
    
    const resp = await axios.get('assessments', {
      headers: {
      'Authorization': {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      shouldRefresh: true
      }}});
    if (!resp || resp.status != 200 ) {
      return null; // invalid accessToken _and_ refreshToken
    }
    const assessmentOverviews = await resp.data;
    return assessmentOverviews.map((overview: any) => {
      /**
       * backend has property ->     type: 'mission' | 'sidequest' | 'path' | 'contest'
       *              we have -> category: 'Mission' | 'Sidequest' | 'Path' | 'Contest'
       */
      overview.category = capitalise(overview.type);
      delete overview.type;
  
      return overview as IAssessmentOverview;
    });
  }
  
  /**
   * GET /assessments/${assessmentId}
   */
  export async function getAssessment(id: number, tokens: Tokens): Promise<IAssessment | null> {
    let resp = await axios.post(`assessments/${id}`, {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      shouldAutoLogout: false,
      shouldRefresh: true
    });
  
    // Attempt to load password-protected assessment
    while (resp && resp.status === 403) {
      const input = window.prompt('Please enter password.', '');
      if (!input) {
        // resp = ;
        history.back();
        return null;
      }
  
      
      resp = await axios.post(`assessments/${id}`, {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
        body: {
          password: input
        },
        shouldAutoLogout: false,
        shouldRefresh: true
      });
    }
  
    if (!resp) { // OR ERROR REPONSE
      return null;
    }
  
    const assessment = (await resp.data) as IAssessment;
    // backend has property ->     type: 'mission' | 'sidequest' | 'path' | 'contest'
    //              we have -> category: 'Mission' | 'Sidequest' | 'Path' | 'Contest'
    assessment.category = capitalise((assessment as any).type) as AssessmentCategory;
    delete (assessment as any).type;
    assessment.questions = assessment.questions.map(q => {
      if (q.type === QuestionTypes.programming) {
        const question = q as IProgrammingQuestion;
        question.autogradingResults = question.autogradingResults || [];
        question.prepend = question.prepend || '';
        question.postpend = question.postpend || '';
        question.testcases = question.testcases || [];
        q = question;
      }
  
      // If the backend returns :nil (null) for grader, then the question is not graded
      // Delete the grader and gradedAt attributes
      if (q.grader === null) {
        delete q.grader;
        delete q.gradedAt;
      }
  
      // Make library.external.name uppercase
      q.library.external.name = q.library.external.name.toUpperCase() as ExternalLibraryName;
      // Make globals into an Array of (string, value)
      q.library.globals = Object.entries(q.library.globals as object).map(entry => {
        try {
          entry[1] = (window as any).eval(entry[1]);
        } catch (e) {}
        return entry;
      });
      return q;
    });
    return assessment;
  }



  const capitalise = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);
