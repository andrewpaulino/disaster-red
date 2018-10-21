import { types } from './guidePageActions';

const initialState = {
    guide: ''
  }
  
  export default function guidePageReducer(state = initialState, action) {
  
      const { type, payload } = action;

      switch (type) {
        
              case 'RETRIEVE_GUIDE':
              return {
                  ...state,
                  guide: payload[0]
              }
              case `${types.RETRIEVE_GUIDE_ONLINE}_FULFILLED`:
              return {
                  ...state,
                  guide:payload
              }
            
              case 'REMOVE_SELECTED_GUIDE':
              return {
                  ...state,
                  guide: payload
              }
            default: {
              return state;
            }
          }
          }