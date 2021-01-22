import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }
    render() {
        
        return (
            <Auxiliary>
                    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                    <SideDrawer closed={this.SideDrawerClosedHandler} 
                    open={this.state.showSideDrawer}/>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}

export default Layout;