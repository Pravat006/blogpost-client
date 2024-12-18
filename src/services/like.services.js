import Axios from '../config/httpMethods.js'

class LikeService{
    async toggleLike(postId){
        return await Axios.patch(`/likes/l/${postId}`)
    }
}


export default new LikeService()










