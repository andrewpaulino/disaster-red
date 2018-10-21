import { combineReducers } from 'redux';
import homePageReducer from './containers/homePage/homePageReducer';
import NavigationReducer from './containers/Navigation/NavigationReducer';
import guidePageReducer from './containers/guidePage/guidePageReducer';
import disasterPlanReducer from './containers/disasterPlan/disasterPlanReducer';

const rootReducer = combineReducers({
   homePageReducer: homePageReducer,
   NavigationReducer: NavigationReducer,
   guidePageReducer: guidePageReducer,
   disasterPlanReducer: disasterPlanReducer
    
});
    
export default rootReducer;