import React from 'react';
import './home-card-todo.style.scss'

export const CardTodo = (props) => {
    return(
        <div className="card-todo-box-container">
            <div className="card-todo-image-container">
                <img src={props.img} alt='jkt48'/>
            </div>
            <div className='card-todo-content-container'>
                <h2>{props.title}</h2>
                <div className='card-todo-content-information'>
                    <p>{props.reviews} Review</p>
                    <p>{props.place}</p>
                </div>
                <div className='card-todo-footer-container'>
                    <h2>IDR {props.price}</h2>
                    <p>{props.stock === true ? "Ticket available" : "Out of stock"}</p>
                </div>
            </div>
        </div>
    )
}