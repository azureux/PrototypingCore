import { MyButton } from './MyButton';

export class MyCommandBar extends React.Component {
    render(){
        return (
        <div>
            <MyButton backgroundColor="red">button 1</MyButton>
            <MyButton backgroundColor="green">button 2</MyButton>
            <MyButton backgroundColor="blue">button 3</MyButton>
        </div>
        );
    }
}