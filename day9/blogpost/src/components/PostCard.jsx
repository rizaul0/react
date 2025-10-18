import React from 'react'
import { Service } from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id,title,featuredImage}) {
  return (
    <Link to={`/post/${id}`}>
        <div className='w-full bg-gray-100 rounded-2xl p-4 '>
            <div className='w-full justify-center mb-4'>
                <div><img src={Service.filePreview(featuredImage)} alt={title}/></div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </div>

    </Link >
  )
}

export default React.forwardRef(PostCard)