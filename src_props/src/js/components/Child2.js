var React = require('react');
var Grandchild=require('./Grandchild.js');
var Child2=React.createClass({
render:function(){
  return(
    <div >
      <p>right panel</p>
      <Grandchild gpizza={this.props.pizza}></Grandchild>
    </div>
  );
}
});
module.exports =Child2
