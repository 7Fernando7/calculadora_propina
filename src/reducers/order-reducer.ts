import { MenuItem, OrderItem } from "../types";


export type OrderActions = 
    { type: 'add-item', payload: {item : MenuItem} } |
    { type: 'remove-item', payload: {
        id: number; item : MenuItem['id'] 
} } |
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

                const intemExists = state.order.find(orderItem => orderItem.id === action.payload.item.id )
                let order: OrderItem[] = []
                if(intemExists){
                    order = state.order.map( orderItem => orderItem.id === action.payload.item.id ?
                        {...orderItem, quantity: orderItem.quantity + 1 } : 
                        orderItem
                    )
                } else {
                    const newItem : OrderItem = {...action.payload.item, quantity: 1}
                    order = [...state.order, newItem]
                } 
                
                return { 
                    ...state,
                    order,
                }
            }

            if(action.type === 'remove-item') {

                const order = state.order.filter( item => item.id !== action.payload.id)
                return { 
                    ...state,
                    order
                }
            }

            if(action.type === 'place-order') {
                return { 
                    ...state,
                }
            }

            if(action.type === 'set-tip') {

                const tip = action.payload.value
                return { 
                    ...state,
                    tip,
                }
            }
            return state
    }