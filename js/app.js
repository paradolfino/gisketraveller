//pages
import Index from './components/pages/index';
import Community from './components/pages/community';
import MyKitchen from './components/pages/mykitchen';
import Contact from './components/pages/contact';

//elements
import Header from './components/elements/header';
import Footer from './components/elements/footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    //state
    this.state = {
      page: "Index"
    };
    
    //variables
    this.pages = {
      Index: Index,
      Community: Community,
      MyKitchen: MyKitchen,
      Contact: Contact
    };
    
    
    
    //bindings
    this.executor = this.executor.bind(this);//dispatcher execution function
    this.pageHandler = this.pageHandler.bind(this);
    this.savePage = this.savePage.bind(this);
  }
  
  executor(signal,value) {
    
    switch(signal) {
      case 'SIGNAL_NAVIGATE':
        !value === undefined ? console.log('failed') : this.pageHandler(value);
        console.log('executing ' + signal);
        break;
    }
  }
  
  pageHandler(page) {
    console.log('pageHandler called');
    setTimeout(()=>{
      this.setState({ page: page });
    },100);
    
  }
  
  savePage() {
    //save the current page for reloading
    localStorage['Page'] = this.state.page;
  }
  
  componentDidMount() {
    //simulate refreshing to same page
    let savedPage = localStorage['Page'];
    console.log(savedPage);
    savedPage === undefined ?  console.log(savedPage) : this.setState({ page: savedPage});
    
    //for jquery
    let winHeight = $(window).height();
    console.log(winHeight);
    
    //dispatcher version
    console.log('///REACT DISPATCHER///by Viktharien Volander');
  }
  
  componentDidUpdate() {
    this.savePage();
  }
  
  render() {
    let Page = this.pages[this.state.page];
    return (
      <div id="wrapper">
        <div id="wrapper-top">
          <Header executor={this.executor} />
          <Page />
        </div>
        <Footer />

      </div>
    );
  }
  
}

ReactDOM.render(<App />,document.getElementById("app"));