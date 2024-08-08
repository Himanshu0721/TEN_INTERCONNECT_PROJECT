import React from 'react'
import "../../componentsCss/filteroptions.css";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Filteroptions({filteropts,selectbtn,content,downarrow,arr,setdetail}) {
    const togglefunc = () => {
        // console.log(`#${filteropts}`)
        document.querySelector(`.${filteropts}`).classList.toggle("active");
        // console.log(document.querySelector(`.${filteropts}`));
      };
    //   console.log(content);
    return (
        <div className={filteropts}>
            <div className={selectbtn} onClick={togglefunc}>
                <span>Filter... </span>
                <div className={downarrow}><FontAwesomeIcon icon={faChevronDown} /></div>
            </div>
            <div id={content}>
                {/* <div className="search">
                <input type="text" name="" id="" placeholder='Search' />
              </div> */}
                <ul className="options">
                    {arr && arr.map((val, index) =>
                        <li key={index} onClick={() => { document.querySelector(`.${selectbtn}`).firstElementChild.innerText = val; setdetail(val); togglefunc();}}> {val} </li>
                    )}
                </ul>
            </div>

        </div>
    )
}

export default Filteroptions;