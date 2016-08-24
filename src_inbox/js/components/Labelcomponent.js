var React=require('react');
var Labelcomponent=React.createClass({
  render:function(){
  {/*console.log('Inside label'+this.props.Lgname);*/}
    return(
    <div>

     <button value={this.props.Lgid}>{this.props.Lgname}</button>
    </div>
    );
  }
});
module.exports=Labelcomponent
