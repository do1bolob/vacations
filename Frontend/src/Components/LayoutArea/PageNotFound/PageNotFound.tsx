import "./PageNotFound.css";
import imageSource from "../../../Assets/Images/page-not-found.png"
import { useNavigate } from "react-router-dom";

function PageNotFound(): JSX.Element {


    const navigate = useNavigate()

    function goBack() {
        navigate(-1)
    }

    return (
        <div className="PageNotFound">
            <span>Page doesn't exist yet! </span>
            <button onClick={goBack} className="button">  Back</button>

              <br/>
          
            <img src={imageSource}/>
            
			
        </div>
    );
}

export default PageNotFound;
