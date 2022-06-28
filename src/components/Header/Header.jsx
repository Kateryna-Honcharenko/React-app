import React, { useState } from 'react';
import './Header.scss';

export const Header = () => {
  const product = [
    {
      "id": 1,
      "title": "Todo1",
      "description": "Todo1 desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum placeat nam ratione ea veritatis, quas quidem. Maxime sapiente temporibus, consequatur ratione ipsam eveniet cupiditate quas explicabo id at fugit vero?"
    },
    {
      "id": 2,
      "title": "Todo2",
      "description": "Todo2 desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum placeat nam ratione ea veritatis, quas quidem. Maxime sapiente temporibus, consequatur ratione ipsam eveniet cupiditate quas explicabo id at fugit vero?"
    },
    {
      "id": 3,
      "title": "Todo3",
      "description": "Todo3 desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum placeat nam ratione ea veritatis, quas quidem. Maxime sapiente temporibus, consequatur ratione ipsam eveniet cupiditate quas explicabo id at fugit vero?"
    },
    {
      "id": 4,
      "title": "Todo4",
      "description": "Todo4 desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum placeat nam ratione ea veritatis, quas quidem. Maxime sapiente temporibus, consequatur ratione ipsam eveniet cupiditate quas explicabo id at fugit vero?"
    },
    {
      "id": 5,
      "title": "Todo5",
      "description": "Todo5 desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum placeat nam ratione ea veritatis, quas quidem. Maxime sapiente temporibus, consequatur ratione ipsam eveniet cupiditate quas explicabo id at fugit vero?"
    },
    {
      "id": 6,
      "title": "Todo6",
      "description": "Todo6 desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum placeat nam ratione ea veritatis, quas quidem. Maxime sapiente temporibus, consequatur ratione ipsam eveniet cupiditate quas explicabo id at fugit vero?"
    },
    {
      "id": 7,
      "title": "Todo7",
      "description": "Todo7 desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum placeat nam ratione ea veritatis, quas quidem. Maxime sapiente temporibus, consequatur ratione ipsam eveniet cupiditate quas explicabo id at fugit vero?"
    },
    {
      "id": 8,
      "title": "Todo8",
      "description": "Todo8 desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum placeat nam ratione ea veritatis, quas quidem. Maxime sapiente temporibus, consequatur ratione ipsam eveniet cupiditate quas explicabo id at fugit vero?"
    },
    {
      "id": 9,
      "title": "Todo9",
      "description": "Todo9 desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum placeat nam ratione ea veritatis, quas quidem. Maxime sapiente temporibus, consequatur ratione ipsam eveniet cupiditate quas explicabo id at fugit vero?"
    },
    {
      "id": 10,
      "title": "Todo11",
      "description": "Todo11 desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum placeat nam ratione ea veritatis, quas quidem. Maxime sapiente temporibus, consequatur ratione ipsam eveniet cupiditate quas explicabo id at fugit vero?"
    },
    {
      "id": 12,
      "title": "Todo12",
      "description": "Todo12 desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum placeat nam ratione ea veritatis, quas quidem. Maxime sapiente temporibus, consequatur ratione ipsam eveniet cupiditate quas explicabo id at fugit vero?"
    },
    {
      "id": 13,
      "title": "Todo13",
      "description": "Todo13 desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum placeat nam ratione ea veritatis, quas quidem. Maxime sapiente temporibus, consequatur ratione ipsam eveniet cupiditate quas explicabo id at fugit vero?"
    },
    {
      "id": 14,
      "title": "Todo14",
      "description": "Todo14 desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum placeat nam ratione ea veritatis, quas quidem. Maxime sapiente temporibus, consequatur ratione ipsam eveniet cupiditate quas explicabo id at fugit vero?"
    },
    {
      "id": 15,
      "title": "Todo15",
      "description": "Todo15 desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum placeat nam ratione ea veritatis, quas quidem. Maxime sapiente temporibus, consequatur ratione ipsam eveniet cupiditate quas explicabo id at fugit vero?"
    }
  ]

  const [upDateProduct, setUpDateProduct] = useState(product);
  const [shownModalWindow, setShownModalWindow] = useState(false);
  const [shownEditorWindow, setShownEditorWindow] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [currentTodo, setCurrentTodo] = useState(null);
  
  const removeProduct = (id) => {
    const newArr = upDateProduct.filter((item) => item.id !== id)
    setUpDateProduct(newArr)
  }

  const addProduct = () => {
    setShownModalWindow(true)
  }

  const editProduct = (id) => {
    setShownEditorWindow(true);
    const currentTodo = upDateProduct.find((item) => item.id === id);
    setCurrentTodo(currentTodo);
    setTitle(currentTodo.title);
    setDescription(currentTodo.description);
  }
    
  const closeModalWindow = () => {
    setShownModalWindow(false);
    setTitle('');
    setDescription('');
  }

  const closeEditorWindow = () => {
    setShownEditorWindow(false)
  }

  const editTodo = () => {
    currentTodo.title = title;
    currentTodo.description = description
    setShownEditorWindow(false);
  }

  const createTodo = () => {
    const newTodo =  {
      id: upDateProduct.length + 2 ,
      title: title,
      description: description
    }
    setUpDateProduct([newTodo, ...upDateProduct]);
    setShownModalWindow(false);
    setTitle('');
    setDescription('')
  }
  
  const titleChange = (event) => {
    setTitle(event.target.value);
  }

  const descriptionChange = (event) => {
    setDescription(event.target.value);
  }

  return (
    <>
      <div className="header">
        <button className="header__add-btn" onClick={addProduct}>Add new Todo</button>
      </div>
        {
          upDateProduct.map((el) => (
            <header key={el.id} className="header">
              <div>
                <h1 className="header__title">{el.title}</h1>
                <p className="header__description">{el.description}</p>
              </div>
              <div className="header__btn" >
                <button className="header__delete-btn" onClick={() => removeProduct(el.id)}>Delete</button>
                <button className="header__edit-btn" onClick={() => editProduct(el.id)} >Edit</button>
              </div>
            </header>
          ))
        }
        {
        shownModalWindow && 
          <form className="header__modal-window">
            <label htmlFor="title">Enter title</label>
            <input id="title" placeholder="Enter title" value={title} onChange={titleChange} />
            <label htmlFor="description">Enter description</label>
            <textarea id="description" placeholder="Enter description" value={description} onChange={descriptionChange}/>
            <div className="header__modal-window-btn">
              <button type="button" className="header__modal-window__cancel-btn" onClick={closeModalWindow} >Cancel</button>
              <button type="button" className="header__modal-window__submit-btn" onClick={createTodo}>Create</button>
            </div>
          </form>
        }
        {
           shownEditorWindow &&
           <form className="header__editor-window">
            <label htmlFor="title">Edit title</label>
            <input id="title" placeholder="Edit title" value={title} onChange={titleChange} />
            <label htmlFor="description">Edit description</label>
            <textarea id="description" placeholder="Edit description" value={description} onChange={descriptionChange} /> 
            <div className="header__editor-window-btn">
              <button type="button" className="header__editor-window__cancel-btn" onClick={closeEditorWindow} >Cancel</button>
              <button type="button" className="header__editor-window__submit-btn" onClick={editTodo}>Edit</button>
            </div>
          </form>
        }
    </>
  )
}