import React, { useState } from 'react'
import { Answer, Hints } from '../components';
import { useRecoilValue } from 'recoil';
import { answerStatusAtom, hintIdAtom } from '../store/atom';

export default function Chat() {

  const hintId = useRecoilValue(hintIdAtom);
  const answerStatus = useRecoilValue(answerStatusAtom);

  return (
    <div className=' w-full flex flex-col justify-center items-center min-h-[15rem] py-10 px-2 gap-5'>
      
      <div className='w-full flex flex-col justify-center items-center gap-2'>
        <img
          src='/problem.svg'
          className=' w-[8rem] bg-sky-500 rounded-full shadow-md'
        />
        <p className='font-medium text-xl'>
          Problem Name
        </p>
      </div>

      {
        hintId>0 ?
        <Hints /> :
        null
      }

      {
        answerStatus ?
        <Answer /> :
        null
      }

    </div>
  )
}
