export class MyButton extends React.Component {
    render(){
      return ( <button style={{backgroundColor: this.props.backgroundColor}}>{this.props.children}</button> );
    }
}