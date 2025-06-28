// import React from 'react'
type WordFormProps = {
  addTask: (taskTitle: string) => void;
};
export default function WordForm({addTask}: WordFormProps) {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const newTaskField = document.querySelector('[name=newTask]');

    // const newTaskValue = newTaskField.value;

    // newTaskField.value = '';
    const form = e.currentTarget;
    const input = form.elements.namedItem('newTask') as HTMLInputElement;

    const newTaskValue = input.value.trim();
    if (newTaskValue === '') return;

    input.value = ''; // clear input

    // alert(`New Task: ${newTaskValue}`);
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
