import React from 'react';
export default class AddOption extends React.Component{
    state ={
        error:undefined
    }
    handleAddOption = (e)=>{
        e.preventDefault();
        let value =e.target.elements.option.value.trim();
        e.target.elements.option.value ="";
        const error = this.props.handleAddOption(value);
        this.setState(()=>({error}));
        if(!error){
            e.target.elements.option.value='';
        }
    }
    render(){
        return (
            <div>
            {this.state.error &&<p class="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}