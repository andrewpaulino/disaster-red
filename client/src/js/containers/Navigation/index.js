import { connect } from 'react-redux';
import Navigation from './Navigation'

function mapStoreToProps(store) {
    return {
        Navigation: store.NavigationReducer,
        location: store.NavigationReducer.location,
        city: store.NavigationReducer.cityLocation,
        homePage: store.homePageReducer,
        guides: store.NavigationReducer.guides
    }
};

export default connect(mapStoreToProps)(Navigation);