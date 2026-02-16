import UsersDataAcess from "../dataAccess/users.js"
import {ok, serverError} from '../helpers/httpResponse.js' 

export default class UsersControllers { 
    constructor() {
        this.DataAcess = new UsersDataAcess()
    }   

    async getUsers() {
        try {
            const users = await this.DataAcess.getUsers()
            return ok(users)
        } catch (error) {
            return serverError(error)
        }
    }
    async deleteUser(userId) {
        try {
            const result = await this.DataAcess.deleteUser(userId)
            return ok(result) 
        } catch (error) {
            return serverError(error)
        }
    }
    async updateUser(userId, userData) {
        try {
            const result = await this.DataAcess.updateUser(userId, userData )
            return ok(result) 
        } catch (error) {
            return serverError(error)
        }
    }
 }