const initialState = {
    data: [
        'Escolha sua Cor'
    ],
};

export function cor(state = initialState, action){
    switch(action.type){
        case 'add_Cor':
            return { ...state, data: [action.title]};
        default:
            return state;
    }
}