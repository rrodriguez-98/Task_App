// import React from 'react'
import { useState } from 'react';
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
        <label htmlFor="">
            New Task:
            <input type="text" name="newTask" value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
           />
        </label>
        <button type='submit' >Add</button>
        </form>
    </section>
  )
}
