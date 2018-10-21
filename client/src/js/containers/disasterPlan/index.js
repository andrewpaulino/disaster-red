import { connect } from 'react-redux';
import disasterPlan from './disasterPlan'

function mapStoreToProps(store) {
    return {
        homePage: store.homePageReducer,
        Navigation: store.NavigationReducer,
        selectedGuide: store.guidePageReducer.guide
    }
};

export default connect(mapStoreToProps)(disasterPlan);