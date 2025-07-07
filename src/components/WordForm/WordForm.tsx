// import React from 'react'
import { useState } from 'react';

import plusIcon from '../../assets/plus_icon.png'

type WordFormProps = {
  addTask: (taskTitle: string) => void;
};
export default function WordForm({addTask}: WordFormProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const input = form.elements.namedItem('newTask') as HTMLInputElement;

    const newTaskValue = input.value.trim();
    if (newTaskValue === '') return;

    addTask(newTaskValue);
    setInputValue(''); // clear input
  } 

  return (
    <section className='input-form-container'>
        <form action="#" method='GET' onSubmit={handleSubmit}>
        <label htmlFor="" className="input-new-task">
            <input type="text" name="newTask" value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
           />
        </label>
        <input type="image"  src={plusIcon} className="plus-icon" alt="Add new task icon" style={{
        width: '25px',
        height: '25px',
        borderRadius: '50%',
      }}/>
        {/* <button type='submit' >Add</button> */}
        </form>
    </section>
  )
}
