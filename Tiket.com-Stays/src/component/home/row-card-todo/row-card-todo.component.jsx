
import React from 'react';
import { CardTodo } from '../../card/home-card-todo/home-card-todo.component';

import './row-card-todo.style.scss'

export const RowCardTodo = () => {

    const activityData = [
        {
            id : 1,
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit621414gsm/events/2021/12/08/3b8ee0b6-8f64-4f37-9c26-d1fe8c5a3b78-1638949476791-8af319f35eae016a25836f47c6a4e7d1.jpg",
            title : "Tiket Dunia Fantasi (Dufan) Ancol",
            reviews : 4.682,
            place : "North Jakarta",
            price :   234000,
            available : true
        },
        {
            id : 2,
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit621414gsm/events/2021/12/08/a36a0a0b-b62a-4a45-ac3b-0c2fca3332aa-1638950266388-d7569b384b0d44b6ceeab6bba1af7a16.jpg",
            title : "Taman Safari Indonesia Bogor",
            reviews : 3.966,
            place : "Bogor",
            price : 200000,
            available : true
        },
        {
            id : 3,
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit621414gsm/events/2022/03/09/bd3d4c3c-e85a-4720-83d0-597d333a6251-1646828274600-bdd0184d7e00f77cf64175b880ceaf59.jpg",
            title : "Playtopia Ciputra World Surabaya",
            reviews : 11,
            place : "Surabaya",
            price : 150000,
            available : true
        },
        {
            id : 4,
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit621414gsm/events/2021/10/19/60b0a251-9ba2-40ad-8706-c8f25888c979-1634642692909-be027afef783505e0530487e357bdac4.jpg",
            title : "Uluwatu Kecak & Fire Dance Show",
            reviews : 945,
            place : "Bandung",
            price : 67000,
            available : true
        },
        {
            id : 5,
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit621414gsm/events/2021/11/22/f4ce9a9f-c3fa-4e43-a546-7ade60c3bf68-1637583910784-df5c4f414c2c4678933395bf24696ba0.jpg",
            title : "Bali Bird Park",
            reviews : 74,
            place : "Gianyar",
            price : 70000,
            available : true
        },
        {
            id : 6,
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit621414gsm/events/2022/03/09/fc2d70de-4b21-4d3f-aea9-20f1b0a05a90-1646828301560-2f79ff7edb295c36151bf53236049f8f.jpg",
            title : "Playtopia Gandaria City",
            reviews : 634,
            place : "South Jakarta",
            price : 150000,
            available : true
        },
        {
            id : 7,
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/events/2020/12/22/65dcbef1-b40b-4510-a538-2207714a636f-1608648085208-820fdb92a60f8d219522b31760793358.jpg",
            title : "Garuda Wisnu Kencana Cultural Park (GWK)",
            reviews : 873,
            place : "Badung",
            price : 95000,
            available : true
        },
        {
            id : 8,
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit621414gsm/events/2022/01/24/30eba73c-2d05-4b72-8ada-7473dc7640cf-1643018195313-dc64244f911be3ed49fafa6df2e808f1.jpg",
            title : "Bali Zoo",
            reviews : 551,
            place : "Gianyar",
            price : 90000,
            available : true
        },
    ]

    return(
        <div className='row-card-todo-section'>
            <div className='row-card-todo-title'>
                <h2>Recommendation for a fun outing</h2>
                <p>Explore iconic attraction around you! Great discounts await</p>
            </div>
            <div className='home-row-card-todo-content-container'>
                {activityData.map((obj , idx) => {
                    return(
                        <CardTodo
                            img={obj.img} 
                            title={obj.title}
                            reviews={obj.reviews}
                            place={obj.place}
                            price={obj.price}
                            stock={obj.stock}
                            />
                    )
                })}
            </div>
        </div>
    )
}
