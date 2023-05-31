import React, { useState } from 'react';
function Comment() {
    const comments = [
        {
          title: "100+",
          comment: "It's estimated that 100 African elephants are killed each day by poachers.",
          link: "Endangered Elephants"
        },
        {
          title: "$23B",
          comment: "One of the most illicit markets in the world, illegal wildlife trade is worth $7- $23 billion annually.",
          link: "Animals We Support"
        },
        {
          title: "18.7M",
          comment: "Annually, 18.7M acres of forest loss affects 80% of terrestrial species' habitats.",
          link: "Deforestation"
        },
        {
          title: "38,000+",
          comment: "Over 38,000 species (27% of assessed) are threatened with extinction.",
          link: "Donate"
        }
      ];
  return (
    <div className="bg-black">
      <div className='flex max-md:flex-col pt-52 px-20 max-md:px-4 max-md:pt-32'>
      {comments.map((data, index) => (
        <div className='max-md:w-full flex flex-col justify-between w-1/4 px-5'>
            <h1 className='text-white md:text-3xl xl:text-5xl max-md:text-2xl'>{data.title}</h1>
            <p className='text-white md:text-md lg:text-lg xl:text-2xl py-10 max-md:py-4'>{data.comment}</p>
            <div className='flex items-center text-white md:text-md lg:text-lg xl:text-2xl max-md:pb-10'>
                <span className='pr-[15px]'>{data.link}</span>
                <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 5.5L1.19924 10.5L0 9.24901L3.59962 5.5L6.08905e-06 1.751L1.19924 0.5L6 5.5Z" fill="white"/>
                </svg>
            </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Comment;
