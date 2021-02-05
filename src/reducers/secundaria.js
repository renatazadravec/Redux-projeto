const initialState = {
    data: [
        'O resultado da Mistura aparecerá'
    ],
};

export function secundaria(state = initialState, action){
    switch(action.type){
        case 'add_Secundaria':
            return { ...state, data: [action.title]};
        default:
            return state;
    }
}