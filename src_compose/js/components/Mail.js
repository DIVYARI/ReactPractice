var React=require('react');
var Mail=React.createClass({

 render:function(){

   return(
<div className="list-group-item">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-4">
        {this.props.mailTo}
      </div>
      <div className="col-lg-4">
        {this.props.mailSubject}
      </div>
     <div className="col-lg-4">
     {this.props.mailDate}
            </div>
          </div>
      </div>
   </div>

   );

 }
});
module.exports=Mail
