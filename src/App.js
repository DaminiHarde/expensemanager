import React from 'react';
import {Header} from './components/Header'
import{Balance} from './components/ShowBalance'
import {TransactionList} from './components/TranscationList'
import{AddTransaction} from './components/AddTransaction'
import{GlobalProvider} from './components/ContextReducer';
import './App.css';

function App() {
  return (
    <>
    <GlobalProvider>
    <Header/>
    <div className="container">
     <Balance/>
     <AddTransaction/>
     </div><div className='list-container'>
     <TransactionList/>
     </div>
    </GlobalProvider>
     
    
    </>
   
  );
}

export default App;
