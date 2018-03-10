import React from "react"
import Option from './Option';
 const Options= (props)=> (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button 
                className="button button--link"
                onClick={props.handleRemoveAll}
                >Remove All</button>
            </div>
            {props.options.length ==0 && <p class="widget__message">Please Add Some Option</p>}
            {
                props.options.map((element,index) => ( 
                    <Option 
                    key={element} 
                    optionText={element}
                    count={index+1}
                    handleRemoveOption={props.handleRemoveOption}/>
                )
            )
        }
        </div>
    );
export default Options;