
export function DataGrid(props){
    return(
        <table className={`table table-hover caption-top`}>
            <caption>{props.caption}</caption>
            <thead>
                <tr>
                    {
                        Object.keys(props.data[0]).map(key=>
                        <th key={key}>
                            <div className="dropdown">
                                <button data-bs-toggle="dropdown" className="dropdown-toggle btn">
                                    {key}
                                </button>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item"> <span className="bi bi-funnel"> Filter </span> </li>
                                    <li className="dropdown-item"> <span className="bi bi-sort-alpha-up"> Sort Asc </span> </li>
                                    <li className="dropdown-item"> <span className="bi bi-sort-alpha-down"> Sort Desc </span> </li>
                                </ul>
                            </div>
                        </th>)
                    }
                    <th>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(item=>
                        <tr key={item}>
                            {
                                Object.values(item).map(value=><td key={value}>{value}</td>)
                            }
                            <td>
                                <button className="btn btn-warning bi bi-pen-fill"></button>
                                <button className="btn btn-danger mx-2 bi bi-trash-fill"></button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}