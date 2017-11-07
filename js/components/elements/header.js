import Navigation from './header-navigation';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.dispatcher = this.dispatcher.bind(this);//dispatcher sends a command from descendant components to main app component
  }
  
  dispatcher(signal,value) {
    console.log(this._reactInternalInstance.getName() +' received: ' + signal);
    console.log(this._reactInternalInstance.getName() + ' dispatched: ' + signal + ": '" + value + "' to executor");
    this.props.executor(signal,value);
  }
  
  render() {
    return (
      <div id='header'>
        <div>
          <div id='jumbo'>
            <h1>GISKE</h1>
            <p>Traveller</p>
          </div>
          <Navigation dispatcher={this.dispatcher}/>
        </div>
      </div>
    );
  }
}

export default Header;