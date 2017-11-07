import Button from './navigation_button';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {

    let page = e.target.value;
        
    //dispatcher system by Viktharien Volander
    let signal = `SIGNAL_NAVIGATE`;
    let value = page; //set value to whatever value you're sending with the signal
    console.log('component ' + this._reactInternalInstance.getName() + ' sent: ' + signal + ' for ' + value);
    this.props.dispatcher(signal,value);
  }
  
  
  render() {
    return (
      <div id='header-navigation'>
        <Button onClick={this.handleClick} value='Index' text='Hom' fa='home'/>
        <Button onClick={this.handleClick} value='Community' text='Kommøn' fa='users'/>
        <Button onClick={this.handleClick} value='MyKitchen' text='Min Këtkien' fa='cutlery'/>
        <Button onClick={this.handleClick} value='Contact' text='Kontakter' fa='envelope'/>
        
      </div>
    );
  }
}

export default Navigation;