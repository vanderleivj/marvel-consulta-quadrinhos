import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setValue } from '../../../features/Dashboard/redux/dashboardActions'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export function Menu() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const value = useSelector(state => state.DashboardReducer.menuValue);

  return (
    <BottomNavigation
      value={value??0}
      onChange={(event, newValue) => {
        dispatch(setValue(newValue));
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} onClick={() => history.push('/')}/>
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} onClick={() => history.push('/favorites')} />
    </BottomNavigation>
  );
}
