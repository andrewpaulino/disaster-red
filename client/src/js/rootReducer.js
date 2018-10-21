import { combineReducers } from 'redux';
import homePageReducer from './containers/homePage/homePageReducer';
import NavigationReducer from './containers/Navigation/NavigationReducer';
import guidePageReducer from './containers/guidePage/guidePageReducer';

const rootReducer = combineReducers({
   homePageReducer: homePageReducer,
   NavigationReducer: NavigationReducer,
   guidePageReducer: guidePageReducer
    
});
    
export default rootReducer;