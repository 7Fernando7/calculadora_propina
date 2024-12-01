import { MenuItem } from "../types";


export type OrderActions = 
    { type: 'add-item ', payload: {item : MenuItem} } |
    { type: 'remove-item', payload: { item : MenuItem['id'] } } |
    { type: 'place-order'} |
    { type: 'set-tip', payload: { value : number} }

    export type OrderState = { 
        order: MenuItem[],
        tip: number,

    }

    export const initialState : OrderState = {
        order: [],
        tip: 0,
    }

    export const OrderReducer = (
            state: OrderState = initialState,
            action: OrderActions
        ) => {
            if(action.type === 'add-item') {
                return { 
                    ...state,
                }
                return state
            }
    }