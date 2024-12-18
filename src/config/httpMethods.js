import axios from "axios"
import {  formdataConfig, jsonConfig, defaultConfig} from "./index.js"

const axio= axios.create(
    {
        baseURL: process.env.SERVER_BASE_URL
    }
)

class Axios{
    get= async (url)=>{
        try {
            const response = await axio.get(url, defaultConfig)
            return response?.data
        } catch (error) {
            error.response?.data
        }
    };
    post= async ( url, data={} )=>{
            try {
                const config= data instanceof FormData ? formdataConfig : jsonConfig;
                const response =await axio.post(url, data, config)
                return response?.data
            } catch (error) {
                error.response?.data
            }
    };
    delete= async (url)=>{
            try {
                const response =await axio.delete(url, defaultConfig)
                return response?.data
            } catch (error) {
                error.response?.data
            }
    };
    patch= async (url, data={})=>{
            try {
                const config= data instanceof FormData ? formdataConfig : jsonConfig
                const response=await axio.patch(url, data, config)
                return response?.data
            } catch (error) {
                error.response?.data
                
            }
    };
}

export default new Axios()