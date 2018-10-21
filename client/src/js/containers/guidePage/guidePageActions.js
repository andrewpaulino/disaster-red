
import axios from 'axios';

export const types = {
    RETRIEVE_GUIDE: 'RETRIEVE_GUIDE',
    RETRIEVE_GUIDE_ONLINE: 'RETRIEVE_GUIDE_ONLINE',
    REMOVE_SELECTED_GUIDE: 'REMOVE_SELECTED_GUIDE'
};

export const getGuide = (id, list) => {
console.log(id)
    return {
        type:'RETRIEVE_GUIDE',
        payload: list.filter( el => el.Name === id)
    }
}

export const getOnlineGuide = (id) => {
    console.log('online', id)
    return {
        type:'RETRIEVE_GUIDE_ONLINE',
        payload: axios.get(`http://localhost:3000/api/Guides/findOne?filter[where][Name]=${id}`)
                .then( response => {
                   return response.data;
                })
                .catch( err => {
                    throw err;
                })

    }
}


export const removeSelectedGuide = () => {

    return {
        type:'REMOVE_SELECTED_GUIDE',
        payload: ''
    }
}