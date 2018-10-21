import { connect } from 'react-redux';
import homePage from './homePage'

function mapStoreToProps(store) {
    return {
        homePage: store.homePageReducer,
        Navigation: store.NavigationReducer,
        guides: store.NavigationReducer.guides
    }
};

export default connect(mapStoreToProps)(homePage);