import axios from 'axios';
import { API_BASE } from '../components/config/env';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';

export const GET_CATEGORIES = "get_categories";
export const GET_CATEGORIES_SUCCESS = "get_categories_success";
export const GET_TASKS = "get_tasks";
export const GET_TASKS_SUCCESS = "get_tasks_success";
export const TASKS_MAP = "tasks_map";
export const DATE_MAP = "date_map";
export const DATE_SORT = "date_sort";
export const GET_TASK_MIN_DATE = "get_task_min_date";
export const DELETE_TASK = "delete_task";
export const DELETE_TASK_SUCCESS = "delete_task_success";
export const CREATE_TASK = "create_task";
export const FETCH_TASKS_FINALLY = "fetch_tasks_finally";

export const getCategories = (token) => {
    console.log("umutttt",token);
    return dispatch => {
       
        axios.get(`${API_BASE}/task-categories`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
         }).then((result) => {
             dispatch({
                 type: GET_CATEGORIES_SUCCESS,
                 payload: result.data.data
             })
         }).catch((err) => {
             console.log("get işlemi gerceklesmedi");
             console.log(err);
         })
    }
}

export const getTasks = ( dateArray, id, token) => {
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
                    type: GET_TASK_MIN_DATE
                })
          }).catch((err) => {
            console.log("get işlemi gerceklesmedi");
          })
    }
  }

  export const deleteTask = (item, token) => {
    return dispatch => {
        dispatch({
            type: DELETE_TASK
        })
        axios({
            method: "DELETE",
            url: `${API_BASE}/tasks/${item.item.id}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },      
         }).then((result) => {
             if(result.status == 200){
                 dispatch({
                type: DELETE_TASK_SUCCESS,
                payload: item
            })
             }
         }).catch((err) => {
             console.log("silme işlemi gercekleşmedi");
         })
    }
}

export const createTask =(title, body, date, cat_id , user_id, token) => {
    return dispatch => {
      console.log("id", user_id)
      dispatch({
        type: CREATE_TASK
      })
       axios({
           method: "POST",
           url: `${API_BASE}/tasks`,
           headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json',
               'Authorization': `Bearer ${token} ` 
           },
               data: {cat_id: cat_id, title: title, subTitle: body, jobDate: date, user_id: user_id}     
           }).then((result) => {
               if(result.data.status == "success"){
               console.log("Başarılı")
               Actions.Main();
               }
           }).catch((err) => {
               console.log('errorrrruurr', err.response)
               Alert.alert("Uyarı","Kitleme başarısız.")
           }).finally(() => {
            dispatch({
              type: FETCH_TASKS_FINALLY
            })
          })
          }
   }
  