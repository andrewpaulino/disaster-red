import axios from 'axios';

export const types = {
    GET_GUIDES: 'GET_GUIDES',
};

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