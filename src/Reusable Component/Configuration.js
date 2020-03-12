import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Input, MenuItem, Select, Button, FormControl} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(0,1),
    // minWidth: 120,
    backgroundColor: '#333',
    borderRadius: '5px',
  },
  icon: {
    color: '#aaa',
  },
  links: {
    color: 'white',
    textDecoration: 'none'
  },
  select: {
    padding: theme.spacing(0.5),
    color: '#ddd',
    '&:before': {
      border: 'none',
    },
    '&:after': {
      border: 'none',
    },
    '&:hover:not(.Mui-disabled):before': {
      borderColor: '#aaa',
    }
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Configuration(props) {
  const classes = useStyles();
  
  //Change this when data from props is ready. 
  const [configList, setConfigList] = useState(props.seed || 0);
  let use;
  const sourceVersions = ['Source 1','Source 2', 'Source 3', 'Source 4'];
  const libraries = ['all', 'runes', 'curves', 'pix&flix', 'machine learning'];
  const languages = ['brainfuck', 'source', 'javascript', 'typescript', 'ruby', 'python'];
  const configurations = ['playground', 'mission', 'quest', 'missioneditor'];

  switch (props.config) {
    case 'version':
      use = sourceVersions;
      break;
    case 'lib':
      use = libraries;
      break;
    case 'language':
      use = languages;
      break;
    default:
      use = configurations;
  }

  const handleChange = event => {
    setConfigList(event.target.value);
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <Select
          className={classes.selectEmpty, classes.select}
          value={configList}
          onChange={handleChange}
          displayEmpty
          autoWidth
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
        >
          {
            props.config 
            ? use.map((el, index) => (
              <MenuItem key={index} value={index}>{el}</MenuItem>
            ))
            : use.map((el, index) => (
              <MenuItem key={index} value={index} component={Link} to={`${el}`}>{el}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </>
  );
}

export default Configuration;
