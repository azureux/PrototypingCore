import { MyCommandBar } from './MyCommandBar';

export class MyApp extends React.Component {
  render(){
    return ( <MyCommandBar>Hello From React </MyCommandBar> );
  }
}
  
let target =  document.getElementById('my-app');
  
ReactDOM.render(<MyApp />, target)