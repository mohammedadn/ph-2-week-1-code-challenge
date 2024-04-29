import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import Form from './components/form';
import Search from './components/search';
import { useState } from 'react';



function App() {
  const transaction = [
      {
      date: "27/04/2024",
    description: "Super Metro",
      category: "Expenditure",
     amount: "Ksh 970"
     },
    {
      date: "28/04/2024",
        description: "Miscellaneous",
        category: "Expenditure",
        amount: "Ksh 23,500"
    },
    {
        date: "30/03/2024",
        description: "Salary",
        category: "Deposit",
        amount: "Ksh 900,000"
    },
    {
        date: "21/07/2023",
        description: "Mercedes c200",
        category: "Expenditure",
        amount: "Ksh 3,500,000"
    },
    {
        date: "23/12/2023",
        description: "Kenya Airways",
        category: "Expenditure",
        amount: "Ksh 35,000"
    }
      ]


      const [data, setData] = useState(transaction)
      const [searchData, setSearchData] = useState("")

      function handleSearch (e){
        setSearchData(e.target.value)}

        const newData = data.filter((transaction) => {
          if(searchData.length > 0)
          {
          return transaction.description.toLowerCase().includes(searchData.toLowerCase())
        } else{
          return true
        }
        })
        
      function ControlNewData (formData) {
        setData([...data, formData])
      }


  return (
    <div className='container'>
  
    <Header/>
    <Search searchBar={handleSearch}/>
    <Form ControlNewData={ControlNewData}/>
    <Table transaction={newData}/>

    
    </div>
  );
}

export default App;