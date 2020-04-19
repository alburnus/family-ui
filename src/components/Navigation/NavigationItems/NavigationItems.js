import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Dashboard</NavigationItem>
        <NavigationItem link="/Members">Family members</NavigationItem>
    </ul>
);

export default navigationItems;