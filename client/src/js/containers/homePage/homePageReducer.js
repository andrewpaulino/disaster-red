import { types } from './homePageActions';

const initialState = {
    guides: []

  }
  
  export default function homePageReducer(state = initialState, action) {
  
      const { type, payload } = action;

      switch (type) {
              case `${types.GET_GUIDES}_FULFILLED`:
              return {
                  ...state,
                    guides: payload
              }

            default: {
              return state;
            }
          }
          }