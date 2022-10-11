import './App.css';
import React from 'react'
import { Routes , Route } from 'react-router-dom'
import { Navbar } from './component/navbar/navbar.component';
import { Home } from './pages/home/home.page';
import { Stays } from './pages/stays/stays.page';
import { Rooms } from './pages/search/rooms/rooms.pages';
import { Hotel } from './pages/details/hotels/hotel.page';
import { HotelImg } from './pages/details/hotel-img/hotel-img.page';

function App() {
  return (
      <Routes>      
        <Route path='/' element={<Home />} />  
        <Route path='/' element={<Navbar />}>
          <Route path='/stays' element={<Stays />} />
          <Route path='/stays/search' element={<Rooms />} />
          <Route path='/stays/search/:id' element={<Hotel />} />
          <Route path='/stays/search/:id/img/:id' element={ <HotelImg/>} />
        </Route> 
      </Routes>
  );
}

export default App;