var React = require('react');
var Grandchild=require('./Grandchild.js');
var Child2=React.createClass({

render:function(){
  return(
    <div >

    {/* <Grandchild gpizza={this.props.pizza}></Grandchild>*/}
    <p>{this.props.cdata1}</p>
    <p>{this.props.cdata2}</p>
    </div>
  );
}
});
module.exports =Child2
