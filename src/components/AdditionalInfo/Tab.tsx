import React from 'react';
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import { Paper, Tab, Tabs } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper        
    },
    tab: {
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '24px',
        textTransform: 'none'
    }
}));

interface StyledTabsProps {
    value: number;
    onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles({
    root: {
      borderBottom: '1px solid #C4C4C4',
      '& button': {
        maxWidth: 'max-content'
      }
    },
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      '& > div': {
        width: '100%',
        backgroundColor: '#27AE60',
      },
    },
  })((props: StyledTabsProps) => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);


interface SimpleTabsProps {
    menuTitle: Array<string>;
    pans: Array<React.ReactNode>;
    onHandleChanged: Function;
}

export default function SimpleTabs(props: SimpleTabsProps) {
  const classes = useStyles({});
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
    props.onHandleChanged(index);
  };

  return (
    <div className={classes.root}>
      <Paper elevation={0} square={true}>
        <StyledTabs value={value} onChange={handleChange}>
          {
            props.menuTitle.map((m, i) => 
            <Tab key={i} label={m} {...a11yProps(i)} className={classes.tab} />)
          }
        </StyledTabs>
      </Paper>
      
      <SwipeableViews
        axis={'x'}
        index={value}
        onChangeIndex={handleChangeIndex}>
        {props.pans.map((m, i)=> 
        <TabPanel key={i} value={value} index={i}>
            {m}
        </TabPanel>
        )}
      </SwipeableViews>
    </div>
  );
}
