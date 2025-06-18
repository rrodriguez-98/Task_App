import React from 'react'

export default function WordForm({addTask}) {

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTaskField = document.querySelector('[name=newTask]');

    const newTaskValue = newTaskField.value;

    newTaskField.value = '';

    alert(`New Task: ${newTaskValue}`);
    addTask(newTaskValue);
  } 


  return (
    <section className='input-form-container'>
        <form action="#" method='GET' onSubmit={handleSubmit}>
        <label htmlFor="">
            New Task:
            <input type="text" name="newTask"/>
        </label>
        <button type='submit' >Add</button>
        </form>
    </section>
  )
}
