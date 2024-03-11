

export const LegendaryTypeTable = ({filteredItems}) => {
    return (
        <div>
              <table className="main-table">
                <tbody>
                  {filteredItems.map((item, index) => (
                    <tr key={index} className="main-table">
                      <td><img src={item.icon}></img></td>
                      <td className="main-table">{item.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
    )
}