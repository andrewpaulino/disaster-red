import { types } from './disasterPlanActions';

const initialState = {
    guide: ''
  }
  
  export default function disasterPlanReducer(state = initialState, action) {
  
      const { type, payload } = action;

      switch (type) {
        
           
            default: {
              return state;
            }
          }
          }