import { types } from './NavigationActions';

const initialState = {
    location: {
        lat:0,
        long: 0
    },
    marginLeft: '0px',
    cityLocation: {
        city: '',
        state:''
    },
    guides: []

  }
  
  export default function NavigationReducer(state = initialState, action) {
  
      const { type, payload } = action;

      switch (type) {
              case `${types.GET_LOCATION}_FULFILLED`:
              return {
                  ...state,
                    location: {
                        lat: payload.lat,
                        long: payload.long
                    },
                    cityLocation: {
                        city: payload.city,
                        state: payload.state
                    }
              }

              case `${types.GET_GUIDES}_FULFILLED`:
              return {
                  ...state,
                    guides: payload
              }

              case 'SLIDE_APP':
              return {
                  ...state,
                  marginLeft: payload
              }

              case 'REVERT_APP':
              return {
                  ...state,
                  marginLeft: payload
              }
    
            default: {
              return state;
            }
          }
          }