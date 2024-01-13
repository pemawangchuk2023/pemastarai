import QuestionCard from '@/components/cards/QuestionCard';
import HomeFilters from '@/components/home/      HomeFilters';
import Filters from '@/components/shared/Filters';
import NoResult from '@/components/shared/NoResult';
import LocalSearchbar from '@/components/shared/search/LocalSearchbar';
import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/constants/filters';
import Link from 'next/link';
import React from 'react';

const questions = [
  {
    _id: '1',
    title: 'Who is Satoshi Nakamoto?',
    tags: [
      { _id: '1', name: 'Bitcoin' },
      { _id: '2', name: 'Eth' },
    ],
    author: {
      _id: '1',
      name: 'Pema Wangchuk',
      picture: 'url/to/pema-picture.jpg',
    },
    upvotes: 10,
    views: 10000,
    answers: [],
    createdAt: new Date('2022-09-01T12:00:00.000Z'),
  },
  {
    _id: '2',
    title: 'Who is Vitalik Buterin?',
    tags: [
      { _id: '1', name: 'Ethereum' },
      { _id: '2', name: 'EVM' },
    ],
    author: {
      _id: '2',
      name: 'Tashi Namgay',
      picture: 'url/to/tashi-picture.jpg',
    },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date('2022-09-01T12:00:00.000Z'),
  },
];

const Home = () => {
  return (
    <>
      <div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
        <h1 className='h1-bold text-dark100_light900'>All Questions</h1>
        <Link
          href='/ask-question'
          className='flex justify-end max-sm:w-full'
        >
          <Button className='primary-gradient min-h-[46px] px-4 py-3 !text-light-900'>
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
        <LocalSearchbar
          route='/'
          iconPosition='left'
          imgSrc='/assets/icons/search.svg'
          placeholder='Search for questions'
          otherClasses='flex-1'
        />
        <Filters
          filters={HomePageFilters}
          otherClasses='min-h-[56px] sm:min-w-[170px]'
          containerClasses='hidden max-md:flex'
        />
      </div>
      <HomeFilters />
      <div className='mt-10 flex w-full flex-col gap-6'>
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title='There is no question to show'
            description='Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡'
            link='/ask-question'
            linkTitle='Ask a Question'
          />
        )}
      </div>
    </>
  );
};

export default Home;
