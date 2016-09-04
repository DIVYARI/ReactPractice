var React = require('react');
var ReactDOM=require('react-dom');
var {browserHistory,Route,Router,IndexRoute}=require('react-router');
var About = require('./components/About');
var Home = require('./components/Home');
var NavBar = require('./components/NavBar');
var GmailBox = require('./components/GmailBox');
{/*console.log(Larray);*/}
var MainComponent=React.createClass({
  render:function(){
  {/*console.log('props data to child'+JSON.stringify(Larray));*/}
    return(
      <div>
      <NavBar/>
      <br></br><br></br>
      {this.props.children}
      </div>
    );
  }
});
ReactDOM.render(
<Router history={browserHistory}>
  <Route path="/" component={MainComponent}>
  <Route path="/home" component={Home}/>
  <IndexRoute component={Home}/>
  <Route path="/about/:aboutName" component={About}/>
  <Route path="/gmailbox" component={GmailBox}/>
  </Route>
</Router>,document.getElementById('app')
);
