import React from 'react';
import {getLocation, slideApp, revertApp, getGuides} from './NavigationActions';

// Fix for mobile friendly
export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sideNavButton: false
        }
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this)
    }
    componentDidMount(){ 
        const {dispatch} = this.props,
            PreviousState = sessionStorage.getItem('state');
            
        if (!PreviousState  ) {
            console.log('get location')
             dispatch(getLocation());
        }
        if (!PreviousState ||!PreviousState.guides) {
            dispatch(getGuides());
        }
       
    }
    closeNav(e){
        this.setState({sideNavButton: false})
        const {dispatch} = this.props;
        dispatch(revertApp())
    }
    openNav(e){
        this.setState({sideNavButton: true})
        const {dispatch} = this.props;
        dispatch(slideApp())
       
    }
    render() {
        const sideNavWidth = this.state.sideNavButton ? '250px' : '0px',
            {state, city} = this.props.Navigation.cityLocation;
        return( 
            <div className="navigation">
                    <nav className= "side-nav-margin" style={{'marginLeft': sideNavWidth}}>
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo center">Disaster<span className="main-red">RED</span></a>
                            <div className="container">
                                <ul id="nav-mobile" className="left hide-on-med-and-down">
                                    {this.state.sideNavButton ? '' : <span id="sideNavButton" onClick={this.openNav}><i className="scale fas fa-3x fa-bars"></i></span>}
                                </ul>
                                <ul id="nav-mobile-right" className="right  hide-on-med-and-down">
                                        <span id="location"> LOCATION,  </span>
                                        
                                        <span id='cityLocation'>  Pasadena, CA{city}, {state} </span> <i className="fas fa-1x fa-map-marker-alt"></i>
                                </ul>
                            </div>
                            
                        </div>
                    </nav>
                    <div className="side-nav" style={{'width': sideNavWidth}} id="side-nav">
                        <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                        <h4 id="menu">Menu</h4>
                        <a href="/">Home</a>
                        <a href="/about">About Us</a>
                        <a href="/">Guides</a>
                        <a href="/plan"> Create Disaster Plan</a>
                    </div>
            </div>
        )
    }
}