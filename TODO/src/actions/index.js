// Action creator

export const createTodo = (items) => {

    // Returns an action
    
    return {
        type: 'ITEM_CREATED',
        payload: items
    };
};