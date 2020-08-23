import * as React from 'react';
import { useSelector } from 'react-redux';
import { DashboardMenuItem, MenuItemLink } from 'react-admin';
import OpacityIcon from "@material-ui/icons/Opacity";


import Reservoirs from '../reservoirs'

const Menu = ({ onMenuClick, dense, logout }) => {

    const open = useSelector((state) => state.admin.ui.sidebarOpen);
    useSelector((state) => state.theme);

    return (
        <div>
            {' '}

            <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open} />

            <MenuItemLink
                to={`/reservoirs_select`}
                primaryText="Water Level"
                leftIcon={<OpacityIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />

            <MenuItemLink
                to={`/reservoirs`}
                primaryText="Reservoirs"
                leftIcon={<Reservoirs.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
        </div>
    )
};

export default Menu;