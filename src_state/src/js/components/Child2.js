var React = require('react');
var Grandchild=require('./Grandchild.js');
var Child2=React.createClass({
{/*childHandleOnClick:function(){
    this.props.p1;
  },*/}
render:function(){
  return(
    <div >
      <p>right panel</p>
    {/* <Grandchild gpizza={this.props.pizza}></Grandchild>*/}
    <p>{this.props.cdata}</p>
    <button onClick={this.props.p1} >click it</button>
    <p>{this.props.cdata}</p>
    </div>
  );
}
});
module.exports =Child2
