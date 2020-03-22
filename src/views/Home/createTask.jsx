/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

function CreateTask() {
  const [title, setTitle] = useState('');
  const [items, setItems] = useState([{ name: '' }]);

  function updateItem(value, index) {
    const newItemsArr = [...items];
    newItemsArr[index].name = value;
    setItems(newItemsArr);
  }
  function addItem() {
    const newItemsArr = [...items];
    newItemsArr.push({ name: '' });
    setItems(newItemsArr);
  }
  function createTask(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={createTask} className='create-task'>
      <div className='field-banner'>
        <label className='label' htmlFor='assignedUser'>
          Assigned User
        </label>
        <select>
          <option value='A'>Apple</option>
          <option value='B'>Banana</option>
          <option value='C'>Cranberry</option>
        </select>
      </div>
      <div className='field-banner'>
        <label className='label' htmlFor='title'>
          Title
        </label>
        <input
          onChange={e => setTitle(e.target.value)}
          value={title}
          className='title-input'
          name='title'
          type='text'
          placeholder='Task Title'
        />
      </div>
      <div className='field-banner'>
        <div className='label'>Items:</div>
        <div className='items-banner'>
          {items.map((item, index) => (
            <input
              key={`item_${index}`}
              value={item.name}
              className='item-input'
              onChange={e => updateItem(e.target.value, index)}
            />
          ))}
          <button className='add-item' type='button' onClick={() => addItem()}>
            Add Item
          </button>
        </div>
      </div>
      <button type='submit' className='submit-btn'>
        Create Task
      </button>
    </form>
  );
}

export default CreateTask;
