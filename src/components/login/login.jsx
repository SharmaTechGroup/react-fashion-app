

export function Login(){
    return(
      <section className="d-flex justify-content-center mt-5">
         <form className="border alert alert-dismissible alert-warning shadow shadow-3 border-1 p-4 border-secondary rounded rounded-2">
          <h4 className="bi bi-person-circle"> User Login</h4>
          <button className="btn btn-close" data-bs-dismiss="alert"></button>
          <dl>
            <dt>User Name</dt>
            <dd><input type="text" className="form-control" /></dd>
            <dt>Password</dt>
            <dd><input type="password" className="form-control"/></dd>
          </dl>
          <button className="btn btn-warning w-100">Login</button>
       </form>
      </section>
    )
}