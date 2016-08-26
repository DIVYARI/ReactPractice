var React = require('react');
var ReactDOM=require('react-dom');
var GmailBox=require('./components/GmailBox.js')
var Leftpanel=require('./components/Leftpanel.js');

{/*console.log(Larray);*/}
var MainComponent=React.createClass({
  render:function(){
  {/*console.log('props data to child'+JSON.stringify(Larray));*/}
    return(
      <div>
      <GmailBox/>

      </div>
    );
  }
});
ReactDOM.render(<MainComponent/>,document.getElementById('app'));
