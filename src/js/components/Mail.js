var React=require('react');
var ViewModal=require('./ViewModal');
var Mail=React.createClass({

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
        {this.props.mailFrom}

      </div>
      <div className="col-lg-4">

      	<a href="#myModal1"  data-toggle="modal" onClick={this.modalview} >{this.props.mailSubject}</a>
      {this.state.b?<ViewModal modalset={this.modalset} mailFrom={this.props.mailFrom} mailDate={this.props.mailDate} body={this.props.encodedBodyToChild}/>:null}
      </div>
     <div className="col-lg-4">
    {this.props.mailDate}
            </div>
          </div>
      </div>
   </div>


  </div>


   );

 }
});
module.exports=Mail
