import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import RenderTag from './RenderTag';

const RightSidebar = () => {
  const hotQuestions = [
    { _id: 1, title: 'How to learn Blockchain in 2024?' },
    {
      _id: 2,
      title:
        'How can blockchain platforms address scalability challenges for mass adoption?',
    },
    {
      _id: 3,
      title:
        'What is the current state of interoperability between different blockchain networks?',
    },
    {
      _id: 4,
      title:
        'What are the alternative consensus mechanisms beyond traditional Proof-of-Work?',
    },
    {
      _id: 5,
      title:
        'What is the role of smart contracts in decentralized applications (DApps)?',
    },
  ];

  const popularTags = [
    { _id: '1', name: 'typescript', totalQuestions: 5 },
    { _id: '2', name: 'solidity', totalQuestions: 6 },
    { _id: '3', name: 'javascript', totalQuestions: 2 },
    { _id: '4', name: 'react', totalQuestions: 9 },
    { _id: '5', name: 'blockchain', totalQuestions: 11 },
  ];

  return (
    <section
      className='background-light900_dark200
        light-border custom-scrollbar sticky left-0 top-0 flex h-screen w-[350px] flex-col
        justify-between overflow-y-auto border-l p-6 pt-36 shadow-light-300 
        dark:shadow-none max-xl:hidden'
    >
      <div>
        <h3 className='h3-bold text-dark200_light900'>Top Questions</h3>
        <div className='mt-7 flex w-full flex-col gap-[30px]'>
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className='flex cursor-pointer items-center justify-between gap-7'
            >
              <p className='body-medium text-dark500_light700'>
                {question.title}
              </p>
              <Image
                src='/assets/icons/chevron-right.svg'
                alt='chevron right'
                width={20}
                height={20}
                className='invert-colors'
              />
            </Link>
          ))}
        </div>
        <div className='mt-16'>
          <h3 className='h3-bold text-dark200_light900'>Popular Tags</h3>
          <div className='mt-7 flex flex-col gap-4'>
            {popularTags.map((tag) => (
              <RenderTag
                key={tag._id}
                _id={tag._id}
                name={tag.name}
                totalQuestions={tag.totalQuestions}
                showCount
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
