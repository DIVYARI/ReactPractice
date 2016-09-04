var React=require('react');
var SaveViewModal=require('./SaveViewModal');
var DisplayChild=React.createClass({

  getInitialState: function()
  {
    return({b:false});
  },

  modalview:function(){
    this.setState({b:true});
  },
  modalset:function(){
    this.setState({b:false});
  },

 render:function(){

   return(
  <div>
<div className="list-group-item">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-4">
        {this.props.from}
      </div>
      <div className="col-lg-4">
<a href="#myModal1"  data-toggle="modal" onClick={this.modalview}>{this.props.subject}</a>
  {this.state.b?<SaveViewModal id={this.props.id} subject={this.props.subject} modalset={this.modalset} from={this.props.from} date={this.props.date} body={this.props.body}/>:null}
      </div>
     <div className="col-lg-4">
     {this.props.date}
     {this.props.id}
            </div>
          </div>
      </div>
   </div>


  </div>


   );

 }
});
module.exports=DisplayChild
