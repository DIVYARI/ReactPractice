var React = require('react');
// var ReactDom=require('react-dom');
var Child1=React.createClass({
render:function(){

  return(
    <div>
        <p>left panl</p>
      <p>{this.props.pizza}</p>
        <p>{this.props.data}</p>


    </div>
  );
}

});
module.exports =Child1
