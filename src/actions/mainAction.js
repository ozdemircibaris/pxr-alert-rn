import axios from 'axios';
import { API_BASE } from '../components/config/env';
import { Actions } from 'react-native-router-flux';

export const DELETE_CLICK= "delete_clicked";
export const DELETE_CARD_SUCCESS = "DELETE_CARD_SUCCESS"
export const LIST_CARD = "LIST_CARD"
export const LIST_CARD_SUCCESS = "LIST_CARD_SUCCESS";
export const LIST_TASKS = "LIST_TASKS"
export const LIST_TASKS_SUCCESS = "LIST_TASKS_SUCCESS";
export const GET_TASKS = "GET_TASKS";
export const GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS";
export const TASKS_MAP = "TASKS_MAP";
export const DATE_MAP = "DATE_MAP"
export const DATE_SORT = "DATE_SORT"
export const GET_MIN_TASK = "GET_MIN_TASK"

export const listCard = (token, id,cards) => {
    return dispatch => {
      dispatch({
        type: LIST_CARD
      })
      axios({
        method: "GET",
        url: `${API_BASE}/mytasks/${id}`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}` 
        },  
        }).then((res) => {
            
        
        dispatch({
          type: LIST_CARD_SUCCESS,
          payload: res.data.data
          
        })
        
    })
    .catch((error) => {
        console.log("errorcard :", error)
    })
    }
  }
  export const listTasks = (token, id) => {
    return dispatch => {
      dispatch({
        type: LIST_TASKS
      })
      axios({
        method: "GET",
        url: `${API_BASE}/tasks/${id}`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}` 
        },  
        }).then((res) => {
         //   console.log("gelen görev:" , res.data.data)
        
        dispatch({
          type: LIST_TASKS_SUCCESS,
          payload: res.data.data
        })
    })
    .catch((error) => {
        console.log("errorgörev :", error)
    })
    }
  }
export const deleteCard = (itemId, token, item) => {
    return dispatch => {
        dispatch({
            type: DELETE_CLICK
        })
        console.log("itemId:", item)
        axios({
            method: "DELETE",
            url: `${API_BASE}/mytasks/delete/${itemId}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },     
         }).then((result) => {
           dispatch({
             type: DELETE_CARD_SUCCESS,
             payload: item
           })
             console.log("resultttt" , result)
            
         }).catch((err) => {
             console.log('errorrrruurr', err.response)
             console.log("silme işlemi gerceklesmedi");
         })
    }
}
export const getTasks = ( dateArray, mission, id, token) => {
  return dispatch => {
      dispatch({
          type: GET_TASKS,
          payload: []
      })
      axios.get(`${API_BASE}/tasks/${id}`, {
          headers: {
            'Authorization': `Bearer ${token} `
          },
        }).then((result) => {
            dispatch({
                type: GET_TASKS_SUCCESS,
                payload: result.data.data
            })
          dispatch({
              type:TASKS_MAP
          })
          // mission.map((item) => {
          //   item.map((index) => {
          //     this.state.tasks.push(index)
          //     this.state.missionDate.push(index.jobDate)
          //   })
          dispatch({
              type: DATE_MAP
          })
            var sorted = dateArray.slice()
              .sort(function (a, b) {
                return new Date(a) < new Date(b);
              });
              var sortedMin = sorted[sorted.length - 1];
              dispatch({
                  type: DATE_SORT,
                  payload: {sorted: sorted, sortedMin: sortedMin}
              })
              dispatch({
                  type: GET_MIN_TASK
              })
        }).catch((err) => {
          console.log('errorcard', err)
          console.log("get işlemi gerceklesmedi");
        })
  }
}

