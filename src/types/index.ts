export type MenuItem = {
    quantity: number
    id: number,
    name: string,
    price: number
}

export type OrderItem = MenuItem & {
    quantity: number
}