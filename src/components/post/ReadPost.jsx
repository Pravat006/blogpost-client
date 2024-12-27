import React from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../../services/post.services.js'

function ReadPost() {

    const {postId} = useParams()
    const[postData, setPostData]= React.useState()
    const[error, setError]= React.useState()
  console.log(postId)
        React.useEffect(()=>{try {
            console.log(postId)
            PostService.getPostById(postId).then((res)=>{
                    if(res){
                        setPostData(res?.data)
                        console.log(res?.data)
                    }
            })
        } catch (error) {
            setError(error.message)
            alert(error.message)
        }},[postId])

  return (
    <div className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
         <img src={`${postData.image}`}  alt={postData.title}  className="w-full h-48 rounded-t-md" />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div className="flex-none w-10 h-10 rounded-full">
                                        <img src={postData.author.avatar} className="w-full h-full rounded-full" alt={postData.author.fullname} />
                                    </div>
                                    <div className="ml-3">
                                        <span className="block text-gray-900">{postData.author.fullname}</span>
                                        <span className="block text-gray-400 text-sm">{postData.createdAt}</span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-900">
                                        {postData.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{postData.description}</p>
                                </div>

                                <div>read post / postid :{postId}</div>
    </div>
  )
}

export default ReadPost