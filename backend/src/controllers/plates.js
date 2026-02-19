import PlatesDataAcess from '../dataAccess/plates.js'
import {ok, serverError} from '../helpers/httpResponse.js' 

export default class PlatesControllers { 
    constructor() {
        this.DataAccess = new PlatesDataAcess()
    }   

    async getPlates() {
        try {
            const plates = await this.DataAccess.getPlates()
            return ok(plates)
        } catch (error) {
            return serverError(error)
        }
    }

    async addPlate(plateData) {
        try {
            const result = await this.DataAccess.addPlate(plateData)
            return ok(result) 
        } catch (error) {
            return serverError(error)
        }
    }
    
    async getAvailablePlates() {
        try {
            const plates = await this.DataAccess.getAvailablePlates()
        return ok(plates)
    }
         catch (error) {
            return serverError(error)
         }}

    async deletePlate(plateId) {
        try {
            const result = await this.DataAccess.deletePlate(plateId)
            return ok(result) 
        } catch (error) {
            return serverError(error)
        }
    }
    async updatePlate(plateId, plateData) {
        try {
            const result = await this.DataAccess.updatePlate(plateId, plateData   )
            return ok(result) 
        } catch (error) {
            return serverError(error)
        }
    }
 }