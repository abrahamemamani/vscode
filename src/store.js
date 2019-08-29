import { createStore } from 'redux';
import { ADD_FRONTEND, ADD_BACKEND, DELETE_FRONTEND, DELETE_BACKEND } from './actions/types';

const initialState = {
    techs   : [
        {
          "id" : 1,
          "name": "Php",
          "image" : "https://images.vexels.com/media/users/3/166470/isolated/preview/73835fa38fba6d35aff9de603dc5044a-icono-de-lenguaje-de-programaci--n-php-by-vexels.png"
        },
        {
          "id" : 2,
          "name": "React",
          "image" : "https://gitlab.com/uploads/-/system/project/avatar/7223705/Microsoft.VisualStudio.Services.Icons.png"
        },
        {
          "id" : 3,
          "name": "Laravel",
          "image" : "https://danielcastanera.com/wp-content/uploads/2015/08/laravel.png"
        },
        {
          "id" : 4,
          "name": "jQuery",
          "image" : "https://i.dlpng.com/static/png/427165_preview.png"
        },
        {
          "id" : 5,
          "name": "C#",
          "image" : "https://4.bp.blogspot.com/-X7heCx-jjhM/VOLETjgMNII/AAAAAAAAAK8/T-pngP5yMeQ/s1600/csharp.png"
        },
        {
          "id" : 6,
          "name": "Angular",
          "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/600px-Angular_full_color_logo.svg.png"
        },
        {
          "id" : 7,
          "name": "Python",
          "image" : "https://seeklogo.net/wp-content/uploads/2012/10/python-logo-vector.png"
        },
        {
          "id" : 8,
          "name": "Bootstrap",
          "image" : "http://pluspng.com/img-png/bootstrap-png-bootstrap-512.png"
        }
    ],
    frontend: [],
    backend : []
};

const reducer = (state = initialState, action) => {
    
    switch(action.type){
        case ADD_FRONTEND:
            return{
                ...state,
                frontend: [...state.frontend, action.tech],
                techs: state.techs.filter(t => (t.id !== action.tech.id))
            }
        case ADD_BACKEND:
            return{
                ...state,
                backend: [...state.backend, action.tech],
                techs: state.techs.filter(t => (t.id !== action.tech.id))
            }
        case DELETE_FRONTEND:
            return{
                ...state,
                frontend: state.frontend.filter(f => (f.id !== action.tech.id)),
                techs: [...state.techs, action.tech]
            }
        case DELETE_BACKEND:
            return{
                ...state,
                backend: state.backend.filter(b => (b.id !== action.tech.id)),
                techs: [...state.techs, action.tech]
            }
        default:
            return state;
    }
}

export default createStore(reducer);