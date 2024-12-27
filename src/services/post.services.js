import Axios from "../config/httpMethods";

class PostService {
  async publishPost() {
    return await Axios.post("/posts/publishPost", data);
  }
  async getAllPost(page,limit) {
    return await Axios.get(`/posts/?page=${page}&limit=${limit}`);
    //return await Axios.get(`/posts/`);
  }
  async getPostById(postId) {
    return await Axios.get(`/posts/getPost/:${postId}`);
  }
  async deletePost(postId) {
    return await Axios.delete(`/posts/${postId}`);
  }
  async updatePost(postId){
      return await Axios.patch(`/posts/updatePost/${postId}`, data)
  };
  async getLikedPosts() {
    return await Axios.get("/likes/");
  }
}

export default new PostService();
