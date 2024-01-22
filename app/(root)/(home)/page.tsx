import QuestionCard from '@/components/cards/QuestionCard';
import HomeFilters from '@/components/home/HomeFilters';
import Filters from '@/components/shared/Filters';
import NoResult from '@/components/shared/NoResult';
import LocalSearchbar from '@/components/shared/search/LocalSearchbar';
import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/constants/filters';
import { getQuestions } from '@/lib/actions/question.action';
import Link from 'next/link';
import React from 'react';

const Home = async () => {
  const result = await getQuestions({});

  return (
    <>
      <div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
        <h1 className='h1-bold text-dark100_light900'>All Questions</h1>
        <Link
          href='/ask-question'
          className='flex justify-end max-sm:w-full'
        >
          <Button className='bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 w-fit hover:to-blue-800 text-white font-bold py-7 px-8 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce'>
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
        {result.questions.length > 0 ? (
          result.questions.map((question) => (
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
