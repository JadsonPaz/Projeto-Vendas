import OrdersDataAcess from '../dataAccess/orders.js'
import {ok, serverError} from '../helpers/httpResponse.js' 

export default class OrdersControllers { 
    constructor() {
        this.DataAccess = new OrdersDataAcess()
    }   

    async getOrders() {
        try {
            const orders = await this.DataAccess.getOrders()
            return ok(orders)
        } catch (error) {
            return serverError(error)
        }
    }

    
    async getOrdersByUserId(userId) {
        try {
            const orders = await this.DataAccess.getOrdersByUserId(userId)
            return ok(orders)
        } catch (error) {
            return serverError(error)
        }
    }

    async addOrder(orderData) {
        try {
            const result = await this.DataAccess.addOrder(orderData)
            return ok(result) 
        } catch (error) {
            return serverError(error)
        }
    }
    
    async deleteOrder(orderId) {
        try {
            const result = await this.DataAccess.deleteOrder(orderId)
            return ok(result) 
        } catch (error) {
            return serverError(error)
        }
    }
    async updateOrder(orderId, orderData) {
        try {
            const result = await this.DataAccess.updateOrder(orderId, orderData   )
            return ok(result) 
        } catch (error) {
            return serverError(error)
        }
    }
 }