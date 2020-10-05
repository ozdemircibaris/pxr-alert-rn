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
         }).catch((err) => {
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

