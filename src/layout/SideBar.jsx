import * as React from "react";

import { Sidebar } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useSidebarStyles = makeStyles({
    drawerPaper: {
        backgroundColor: '#eeeeee',
    },
});

const SideBar = props => {
    const classes = useSidebarStyles();
    return (
        <Sidebar classes={classes} {...props} />
    );
};

export default SideBar;



