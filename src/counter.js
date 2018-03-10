class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.state={
            visible:false,
            displayText:"Show Details"
        }
    }
    handleButtonClick(){
        this.setState((prevState)=>{
            return {
                visible :!prevState.visible,
                displayText : (prevState.visible ?"Show Details":"Hide Details")
            }
        })
    }
    render(){
        return (
            <div>
                <button onClick={this.handleButtonClick}>{this.state.displayText}</button>
                {this.state.visible && <p>This is a hidden message</p>}
            </div>
        );
    }
}
ReactDOM.render(<Visibility />,document.getElementById("app"));