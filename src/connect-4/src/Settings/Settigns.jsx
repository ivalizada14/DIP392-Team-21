import './Settings.css';
import {useState} from "react";
import cell1 from "../assets/Connect 4 (Community) (Copy) (1).png"
import cell2 from "../assets/Connect 4 (Community) (Copy) (2).png"
import cell3 from "../assets/Connect 4 (Community) (Copy) (3).png"
import cell4 from "../assets/Connect 4 (Community) (Copy) (4).png"
import cell5 from "../assets/Connect 4 (Community) (Copy) (5).png"
import cell6 from "../assets/Connect 4 (Community) (Copy) (6).png"
import cell7 from "../assets/Connect 4 (Community) (Copy) (7).png"
import cell8 from "../assets/Connect 4 (Community) (Copy) (8).png"
import {useNavigate} from "react-router-dom";



const getInitialMode = () => {
    const savedMode = localStorage.getItem("mode");
    return savedMode ? savedMode : '4';
};


const Settings = () => {
    const [selectedOption, setSelectedOption] = useState(getInitialMode);
    const navigate = useNavigate();

    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value); // Update state
        console.log(value);
        localStorage.removeItem("mode");
        localStorage.setItem("mode", value);
    };


    return (
        <>
            <button className="navButton" onClick={() => navigate("/main")}>Main Page</button>
            <div className="container">
                <h1> Choose pieces to play with </h1>

                <div className="radio-group">
                    <input type="radio" id="option1" name="option" value="1" checked={selectedOption === '1'} onChange={handleOptionChange}></input>
                    <label htmlFor="option1">
                        <div className="inner-circles">
                            <div className="circle"><img src={cell1}></img></div>
                            <div className="circle"><img src={cell2}></img></div>
                        </div>
                    </label>
                </div>
                <div className="radio-group">
                    <input type="radio" id="option2" name="option" value="2" checked={selectedOption === '2'} onChange={handleOptionChange}></input>
                    <label htmlFor="option2">
                        <div className="inner-circles">
                            <div className="circle"><img src={cell3}></img></div>
                            <div className="circle"><img src={cell4}></img></div>
                        </div>
                    </label>
                </div>
                <div className="radio-group">
                    <input type="radio" id="option3" name="option" value="3" checked={selectedOption === '3'} onChange={handleOptionChange}></input>
                    <label htmlFor="option3">
                        <div className="inner-circles">
                            <div className="circle"><img src={cell5}></img></div>
                            <div className="circle"><img src={cell6}></img></div>
                        </div>
                    </label>
                </div>
                <div className="radio-group">
                    <input type="radio" id="option4" name="option" value="4" checked={selectedOption === '4'} onChange={handleOptionChange}></input>
                    <label htmlFor="option4">
                        <div className="inner-circles">
                            <div className="circle"><img src={cell7}></img></div>
                            <div className="circle"><img src={cell8}></img></div>
                        </div>
                    </label>
                </div>
            </div>
        </>

    );
};

export default Settings;
