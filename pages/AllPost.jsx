import React, { useEffect, useState } from "react";
import PostService from "../src/services/post.services.js";
import PostCard from "../src/components/root/PostCard.jsx";
import Container from "../src/components/container/Container.jsx"

function AllPost() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    PostService.getAllPost(1, 6).then((posts) => {
      setPosts(posts?.data.posts);
      console.log(posts?.data.posts)
     
    });
  });

  return (
 
    <div className="w-full py-8">
      <Container>


      <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {posts?.map((items) => (
          <div key={items.id}>
            <PostCard
              id={items?._id}
              title={items?.title}
              image={items.image}
              date={items.createdAt}
              description= {items.description}
              //author={items.author}
              />
           
          </div>
        ))}
      </div>
        </Container>
        </div>

  );
}

export default AllPost;
