import React from 'react';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

interface IMissionOverviewCardProps {
  imageURL: string,
  dueDate: string,
  to: string,
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
  
  export default function MissionOverviewCard(props:IMissionOverviewCardProps) {
    const classes = useStyles();
    const theme = useTheme();
    const {imageURL, dueDate, to } = props;
    
    return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={require("../assets/sample.jpg")}
        title="sample background"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Due {dueDate}
          </Typography>
          <Button variant="contained" color="primary" component={Link} to={to}>
            Attempt
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}