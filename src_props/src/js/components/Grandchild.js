var React = require('react');

var Grandchild=React.createClass({
render:function(){
  return(
    <div >
      <p>{this.props.gpizza}</p>
    </div>
  );
}

});
module.exports =Grandchild
