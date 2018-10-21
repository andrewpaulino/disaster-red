import  React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './containers/Navigation';
import homePage from './containers/homePage';
import { connect } from 'react-redux';
import guidePage from './containers/guidePage';
import disasterPlan from './containers/disasterPlan';
 class App extends Component {
    constructor(props){
        super(props)

    }
    
    render() {
        const margin = this.props.Navigation.marginLeft
        return (
            <Router>
                <div>
                    <Navigation />
                    <div className="side-nav-margin" style={{'marginLeft': margin}}>
                        <Switch>
                            <Route exact path="/" component={ homePage } />
                            <Route path = "/guide/:id" component={guidePage} />
                            <Route path="/plan" component={disasterPlan} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

function mapStoreToProps(store) {
    return {
        Navigation: store.NavigationReducer,
    }
};

export default connect(mapStoreToProps)(App);