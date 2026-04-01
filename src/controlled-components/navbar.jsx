

export function Navbar(props){
    if(props.layout==='horizontal'){
        return(
        <nav className={`d-flex flex-row justify-content-between p-2 border border-1 my-2 ${props.theme}`}>
            <div>
                <span className="fs-4 fw-bold"> <span className={props.logo}></span> {props.brand}</span>
            </div>
            <div>
                {
                    props.menuItems.map(item=> <span key={item} className="mx-4"> {item} </span>)
                }
            </div>
            <div>
                <button className="btn bi bi-person btn-light"></button>
            </div>
        </nav>
    )
    } else {
        return(
        <nav style={{width:'200px', height:'400px'}} className={`d-flex flex-column align-items-center justify-content-between p-2 border border-1 my-2 ${props.theme}`}>
            <div>
                <span className="fs-4 fw-bold mt-2"> <span className={props.logo}></span> {props.brand}</span>
            </div>
            <div>
                {
                    props.menuItems.map(item=> <div key={item} className="my-4"> {item} </div>)
                }
            </div>
            <div>
                <button className="btn bi bi-person btn-light w-100"></button>
            </div>
        </nav>
    )
    }
}