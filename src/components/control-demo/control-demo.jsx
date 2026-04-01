
import { useState } from "react"
import { DataGrid } from "../../controlled-components/data-grid"

export function ControlDemo(){

    const [products] = useState([{Name:'TV', Price:23000},{Name:'Mobile', Price:50000}]);
    const [employees] = useState(
        [
            {FirstName:'Raj', LastName:'Kumar', Designation:'Manager', Salary: 21000},
            {FirstName:'Kiran', LastName:'Kumar', Designation:'Developer', Salary: 51000},
            {FirstName:'Rakesh', LastName:'Kumar', Designation:'Admin', Salary: 31000}
        ]
    )

    return(
        <div className="container-fluid">
            <DataGrid caption='Employee Details' data={employees} />
            <hr />
            <DataGrid caption='Products Info' data={products} />
        </div>
    )
}