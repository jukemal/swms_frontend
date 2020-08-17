import * as React from 'react';
import { useSelector } from 'react-redux';
import { Layout } from 'react-admin';
import { lightTheme, darkTheme } from './themes'
import SideBar from './SideBar';

export default (props) => {
    const theme = useSelector((state) =>
        state.theme === 'dark' ? darkTheme : lightTheme
    );
    return (
        <Layout
            {...props}
            theme={theme}
            sidebar={SideBar}
        />
    );
};