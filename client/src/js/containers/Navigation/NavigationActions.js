import axios from 'axios';

export const types = {
    GET_LOCATION: 'GET_LOCATION',
    SLIDE_APP: 'SLIDE_APP',
    REVERT_APP: 'REVERT_APP',
    GET_CITY: 'GET_CITY',
    GET_GUIDES: 'GET_GUIDES'
};

export const getLocation = () => {
    let cityLocation = {};
    const geolocation = navigator.geolocation,
        location = new Promise ((resolve, reject) =>{ 
             geolocation.getCurrentPosition((pos) => {
                try {
                    axios.get(`http://localhost:3000/api/location?lat=${pos.coords.latitude}&long=${pos.coords.longitude}`)
                    .then( response => {
                        cityLocation = {
                            city: response.data.city,
                            state: response.data.state,
                            lat: pos.coords.latitude,
                            long: pos.coords.longitude
                        }
                        console.log(response)
                        resolve(cityLocation);
                    })
                    .catch (err => {
                        console.log(err)
                    })  
                } catch (err) {
                    console.log(err)
                }
                
            
           
        })
    })
    
    return {
      type: 'GET_LOCATION',
      payload: location
          
    }

  };

export const slideApp = () => {
    return {
        type:'SLIDE_APP',
        payload: '250px'
    }
}

export const revertApp = () => {
    return {
        type:'REVERT_APP',
        payload: '0px'
    }
}

export const getGuides = () => {

    return {
        type:'GET_GUIDES',
        payload: axios.get("http://localhost:3000/api/Guides")
                    .then( response => {
                        return response.data;
                    })
                    .catch(err => {
                        throw err;
                    })
    }

}