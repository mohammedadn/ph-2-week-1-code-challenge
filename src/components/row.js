

function Row ({transactions: transaction}) {
  
    const rows = transaction.map ((transaction, index) => {
      return (
        <div
        style={{
           display: 'flex',
           justifyContent: "space-between"
           
        }}>
        <tr key={index+1}>
          <td>{transaction.date}</td>
          <td>{transaction.description}</td>
          <td>{transaction.category}</td>
          <td>{transaction.amount}</td>
          
        </tr>
        </div>
      )
    })
    
      return (
          <>
          
              {rows}
  
          </>
      )
  }
  
  export default Row