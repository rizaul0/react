import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container,PostCard } from '../components'
function AllPosts() {
    const [posts ,setPost ] = useState([])
    useEffect(() => {
      service.getActivePost([]).then((posts)=> {
        if (posts) {
            setPost(posts.documents)
        }
      })
    
    })
    
  return (
    <div className='py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
            </div>
  )
}

export default AllPosts