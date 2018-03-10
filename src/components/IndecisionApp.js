import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component{
    state={
        options:[],
        selectedOption:undefined
    }
    handleRemoveAll = ()=>{
        this.setState( ()=> ({options:[]}) );
    }
    clearOptionModal = ()=>{
        this.setState(()=>({selectedOption:undefined}));
    }
    handleRemoveOption = (option)=>{
        this.setState((prevState)=>({
            options:prevState.options.filter((optionToRemove)=>{
                return optionToRemove!==option;
            })
        }));
    }
    handleAddOption=(option)=>{
        if(!option){
            return "Enter valid item to add";
        }else if(this.state.options.indexOf(option)>-1){
            return "This item already exist";
        }
        this.setState((prevState)=>({
                options:prevState.options.concat([option])
        }));
    }
    handlePick=()=>{
       const random = Math.floor(Math.random()*this.state.options.length);
       const option= this.state.options[random];
       this.setState(()=>({
           selectedOption:{option}
       }));
    }
    componentDidMount(){
        try{
            const json=localStorage.getItem('options');
            const options=JSON.parse(json);
            if(options){
                this.setState(()=>({options}));
            }
      
        }catch(e){
            //Do nothing at all
        }

    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options){
            const json = JSON.stringify(this.state.options);
            console.log(json);
            localStorage.setItem('options',json);
        }
    }
    render(){
        const title="Indecision App";
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length>0} handlePick={this.handlePick}/>
                    <div className="widget">
                        <Options handleRemoveOption={this.handleRemoveOption} options={this.state.options} handleRemoveAll ={this.handleRemoveAll}/>
                        <AddOption  handleAddOption={this.handleAddOption}/>
                    </div>
            
                </div>
         
                <OptionModal clearOptionModal={this.clearOptionModal} selectedOption={this.state.selectedOption}/>
            </div>
        );
    }
}
export default IndecisionApp;