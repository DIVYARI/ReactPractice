var React = require('react');
var ReactDom=require('react-dom');
var Child1=require('./components/Child1.js');
var Child2=require('./components/Child2.js');
var MainComponent=React.createClass({
  getInitialState: function() {
   return {sdata:"state data"};
 },
 handleClick:function(){
   this.setState({sdata:"data changed"})
 },
render:function(){

  return(
    <div>
      <div className="col-12">
      <p>nav bar</p>
      </div>
      <div className="row">
        <div className="col-2">
          <Child1 pizza="eat pizza" data={this.state.sdata}></Child1>
        </div>
        <div className="col-8">
          <Child2 pizza="grand pizza" p1={this.handleClick} cdata={this.state.sdata}></Child2>
        </div>
      </div>
    {/*  <button onClick={this.handleClick} >click to change</button>*/}

    </div>
  );
}

});
ReactDom.render(<MainComponent/>,document.getElementById('app'));
