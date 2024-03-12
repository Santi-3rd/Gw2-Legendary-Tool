

export const LegendaryTypeTable = ({currentItems, itemsPerPage, setCurrentPage, totalItems}) => {
    return (
        <div>
          {currentItems && currentItems.length> 0? 
          <table className="main-table">
            <thead>
              <tr>
                <td></td>
                <td>Name</td>
                <td>Traiding Post Buy Price</td>
                <td>Traiding Post Sell Price</td>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index} className="main-table">
                  <td><img src={item.icon}></img></td>
                  <td className="main-table">{item.name}</td>
                  <td className="main-table">Gold: Silver: Copper: </td>
                  <td className="main-table">Gold: Silver: Copper:</td>
                </tr>
              ))}
            </tbody>
          </table>
              :
            <></>
          }
        <div className="pagination">
            {Array(Math.ceil(totalItems / itemsPerPage)).fill().map((_, index) => (
              <button onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
            ))}
          </div>
      </div>
    )
}