var React = require('react');
var ReactDom=require('react-dom');
var Child1=require('./components/Child1.js');
var Child2=require('./components/Child2.js');
var MainComponent=React.createClass({
  getInitialState: function() {
   return {title:"title",dsc:"description"};
 },
 handleClick:function(t,d){
   this.setState({title:t,dsc:d})
 },
render:function(){
  return(
    <div>
    <div className="navbar">
    </div>
<div className="container">
        <div className="col-4">
          <Child1 p1={this.handleClick}></Child1>
        </div>
        <div className="col-8">
        <Child2 cdata1={this.state.title} cdata2={this.state.dsc}></Child2>
      </div>

    {/*  <button onClick={this.handleClick} >click to change</button>*/}
</div>
    </div>
  );
}

});
ReactDom.render(<MainComponent/>,document.getElementById('app'));
