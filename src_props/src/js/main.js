var React = require('react');
var ReactDom=require('react-dom');
var Child1=require('./components/Child1.js');
var Child2=require('./components/Child2.js');
var MainComponent=React.createClass({
render:function(){
  return(
    <div>
      <div className="col-12">
      <p>nav bar</p>
      </div>
      <div className="row">
        <div className="col-2">
          <Child1 pizza="eat pizza"></Child1>
        </div>
        <div className="col-8">
          <Child2 pizza="grand pizza"></Child2>
        </div>
      </div>
    </div>
  );
}

});
ReactDom.render(<MainComponent/>,document.getElementById('app'));
