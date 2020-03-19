import React from 'react';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import {Typography, Button, IconButton, CardMedia, CardContent, Card, Grid} from '@material-ui/core/';
import { Link } from 'react-router-dom';
import {
  AssessmentStatuses,
  IAssessmentOverview
} from '../assessment/assessmentShape';

interface IOwnProps  {
  overview: IAssessmentOverview
} 

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      margin: '1em',
    },
    button: {
      textDecoration: 'none',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
      height: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }),
  );
  
  // export interface IAssessmentOverview {
  //   category: AssessmentCategory; //
  //   closeAt: string; //
  //   coverImage: string;  //
  //   fileName?: string; // For mission control
  //   grade: number;
  //   id: number;
  //   maxGrade: number;  //
  //   maxXp: number;  //
  //   number?: string; // For mission control
  //   openAt: string;  //
  //   title: string;  //
  //   reading?: string; // For mission control
  //   shortSummary: string;  //
  //   status: AssessmentStatus;
  //   story: string | null;
  //   xp: number;
  //   gradingStatus: GradingStatus;
  //   private?: boolean;
  // }

  export default function MissionOverviewCard(props: IOwnProps) {
    const classes = useStyles();
    const theme = useTheme();
    const overview = props.overview;
    const DEFAULT_QUESTION_ID = 0;

    const makeAssessmentInteractButton = (overview: IAssessmentOverview) => {
      let label: string;
  
      switch (overview.status) {
        case AssessmentStatuses.not_attempted:
          label = 'Attempt';
          break;
        case AssessmentStatuses.attempting:
          label = 'Continue';
          break;
        case AssessmentStatuses.attempted:
          label = 'Review';
          break;
        case AssessmentStatuses.submitted:
          label = 'Review';
          break;
        default:
          // If we reach this case, backend data did not fit IAssessmentOverview
          label = 'Review';
          break;
      }
      return (
          <Button variant="contained" color="primary" component={Link} to={`/${(
          overview.category)}/${overview.id.toString()}/${DEFAULT_QUESTION_ID}`}>
            {label}
          </Button>
      );
    }
    
    return (
    <Card className={classes.root}>
      <Grid container spacing={3} alignItems='center'>
        <Grid item xs={3}>
          <CardMedia
            className={classes.cover}
            image={overview.coverImage}
            title="sample background"
          />
        </Grid>
        <Grid item xs={9}>
        <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {overview.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Due {overview.closeAt}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Grade: {overview.grade} / {overview.maxGrade}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Max XP: {overview.maxXp}
          </Typography>
          <Typography variant="body1" gutterBottom>
              {overview.shortSummary}
          </Typography>
          <div className="listing-button">
              {makeAssessmentInteractButton(overview)}
          </div>
        </CardContent>
      </div>
          
        </Grid>
      </Grid>
    </Card>
    
  );
}