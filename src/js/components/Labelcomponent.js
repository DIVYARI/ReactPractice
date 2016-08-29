var React=require('react');
var Labelcomponent=React.createClass({
  changeMessges:function(){
    console.log('changeMessges');
    this.props.p2(this.props.Lgid);
  },
  render:function(){
  {/*console.log('Inside label'+this.props.Lgname);*/}
    return(
    <div>

     <button  value={this.props.Lgid} onClick={this.changeMessges} id="leftbutton">{this.props.Lgname}</button>
    </div>
    );
  }
});
module.exports=Labelcomponent
