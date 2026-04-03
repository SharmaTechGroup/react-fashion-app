import { useParams } from "react-router-dom"




export function ReactTutorial(){

    let params = useParams();

    return(
        <div className="container-fluid">
              <h2>React Tutorial</h2>
              <dl>
                <dt>Topic</dt>
                <dd>{params.topic}</dd>
                <dt>Subtopic</dt>
                <dd>{params.subtopic}</dd>
              </dl>
        </div>
    )
}