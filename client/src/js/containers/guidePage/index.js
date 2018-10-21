import { connect } from 'react-redux';
import guidePage from './guidePage'

function mapStoreToProps(store) {
    return {
        homePage: store.homePageReducer,
        Navigation: store.NavigationReducer,
        selectedGuide: store.guidePageReducer.guide
    }
};

export default connect(mapStoreToProps)(guidePage);