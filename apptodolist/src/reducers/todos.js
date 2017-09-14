//specify how application 's state changes in response
// just calculate next state based on pre state and action

import{addTodo, setVisibilityFilter, toggleTodo} from "../actions/index";

const initState = {
    todos: []
};
function todoApp(state = initState, action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            });
        case TOGGLE_TODO:
            return Object.assign({}, state, {
               todos: state.todos.map((todo, index) => {
                   if (index === action.index){
                       return Object.assign({}, todo, {
                           completed: !todo.completed
                       })
                   }
                   return todo;
               })
            });
        default:
            return state;
    }
}

export default todoApp;