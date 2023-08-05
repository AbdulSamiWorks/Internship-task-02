import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { fetchAllPostsAsync, selectAllPosts } from './PostsSlice';
import { Link } from 'react-router-dom';

export default function Posts() {
  const posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();

   useEffect(()=>{
    dispatch(fetchAllPostsAsync())
   },[dispatch])

  return (
    <>
         <div className="flex flex-col items-center justify-center mt-16">
        <h2 className="text-5xl font-bold">Latest Posts</h2>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-full lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {posts.map((post) => (
              <a key={post.id} href={post.href} className="group">
                <div className="border border-gray-300 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-[#ffffff] xl:aspect-h-8 xl:aspect-w-7">
                  <div
                    style={{ backgroundImage: `url(${post.imageSrc})` }}
                    className="bg-no-repeat bg-contain"
                  ></div>
                  <div className="mt-52 flex justify-center ">
                   <center>
                   <h3 className=" mt-3 mx-3 text-lg font-medium text-gray-900">
                      {post.name}
                    </h3>
                   </center>
                    <div className="absolute mt-16">
                     <Link to={`/posts/${post.id}`}><Button title={'Read More...'} /></Link>
                      </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
