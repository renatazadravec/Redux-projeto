const initialState = {
    data: [
        'Cor Aleatoria'
    ],
};

export function corOp(state = initialState, action){
    switch(action.type){
        case 'add_CorOp':
            return { ...state, data: [action.title]};
        default:
            return state;
    }
}