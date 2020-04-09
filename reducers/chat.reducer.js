
const initState = {
    user: "josé",
    room: null,
    messages: [
        {
            content: 'Mais que fait la police',
            author: 'josé',
            created_at: new Date()
        },{
            content: 'salustre',
            author: 'alex',
            created_at: new Date()
        },{
            content: 'saaaaaaluuuuuusssss',
            author: 'alex',
            created_at: new Date()
        }
    ]
}

export const chat = function(state = initState, action) {

    switch(action.type) {
        case 'JOIN_REQUEST':
            return{
                ...state,
                user: action.user,
                room: action.room,
                error: null
            };

        case 'JOIN_SUCCESS':
            return {
                ...state,
                messages: action.messages,
                error: null
            };  
            
        case 'FAILURE':
            return {
                ...state,
                error: action.error
            };
    }

    return state;
}