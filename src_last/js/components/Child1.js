var React = require('react');
// var ReactDom=require('react-dom');
var Child1=React.createClass({
  changeContent:function(e){
    if(e.target.id=="h"){
      this.props.p1("home","in home");
    }
    else if(e.target.id=="a"){
      this.props.p1("About Us","In About US");
    }
    else if(e.target.id=="c"){
      this.props.p1("Contact","in Contact");
    }
  },

render:function(){

  return(
    <div>

<button className="btn btn-success" onClick={this.changeContent} id="h">Home1</button><br/>
<button className="btn btn-primary" onClick={this.changeContent} id="a">About Us</button><br/>
<button className="btn btn-default" onClick={this.changeContent} id="c">Contact</button><br/>


    </div>
  );
}

});
module.exports =Child1
