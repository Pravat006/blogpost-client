import React, { useEffect, useState } from "react";
import PostService from "../src/services/post.services.js";
import PostCard from "../src/components/post/PostCard.jsx";
import Container from "../src/components/container/Container.jsx"

function AllPost() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    PostService.getAllPost(1, 10).then((posts) => {
      setPosts(posts?.data.posts);
     
    });
  });

  return (
 
    <div className="container mx-auto mt-8">
      <Container>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts?.map((items) => (
          <div key={items._id}>
            <PostCard
              id={items?._id}
              title={items?.title}
              image={items.image}
              date={items.createdAt}
              description= {items.description}
              author={items.author}
              />
           
          </div>
        ))}
      </div>
        </Container>
        </div>

  );
}

export default AllPost;
