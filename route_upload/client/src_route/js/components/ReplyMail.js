var React=require('react');

var ReplyMail=React.createClass({
  getInitialState: function()
  {
    return({to:"tomsg",subject:"sub",body:"bodymsg"});
  },
  handleChange:function(e){
    //console.log("in hadlechange of modal"+e.target.value);

//console.log(e.target);
if(e.target.id=="to"){
  var t=e.target.value;
this.setState({to:t});
}
if(e.target.id=="subject"){
  var t=e.target.value;
this.setState({subject:t});
}
if(e.target.id=="body"){
  var t=e.target.value;
this.setState({body:t});
}
console.log(this.state.to);
console.log(this.state.subject);
console.log(this.state.body);
  },

  submitting:function(){


    var accessToken = localStorage.getItem('gToken');
   console.log("Access token: "+accessToken);
   var email = '';
   var Headers = {'To': this.state.to,'Subject': this.state.subject};
   for(var header in Headers)
   {
     email += header += ": "+Headers[header]+"\r\n";
     console.log("email---"+email);
     console.log("header---"+header);
     console.log("Headers[header]---"+Headers[header]);
    }
   email += "\r\n" + this.state.body;
   console.log("constructed email: " +email);
   var encodedMessage =  window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_');
   $.ajax({
          url: 'https://www.googleapis.com/gmail/v1/users/dvsri41%40gmail.com/messages/send?key={AIzaSyDVjenDbUtCm-bGiCJW69jr2kHoTjFoNKo}',
          dataType: 'json',
          contentType: "application/json",
          type: 'POST',
          data: JSON.stringify({'raw': encodedMessage}),
          beforeSend: function (request)
          {
            request.setRequestHeader("Authorization", "Bearer "+accessToken);
          },
    success: function(data)
    {
      console.log("Success");
      alert("message sent");
    }.bind(this),
    async: false,
    error: function(xhr, status, err) {
      console.error("Error.."+err.toString());
    }.bind(this)
  });

  },
  render:function(){
    return(
    <div>

    <div className="modal fade" id="myModal12">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button className="close" data-dismiss="modal" onClick={this.props.modalset}>x</button>

            <h6 className="modal-title">New Message</h6>

              </div>
            <div className="modal-body">
  <form className="form-horizontal">
    <div className="form-group">

      <div className="col-lg-10">
      <input className="form-control" id="to"  placeholder="To" type="text" onChange={this.handleChange} value={this.props.d}/>
      </div>
    </div>
    <div className="form-group">

      <div className="col-lg-10">
      <input className="form-control" id="subject" placeholder="Subject" type="text" onChange={this.handleChange}/>
      </div>
    </div>
    <div className="form-group">


    </div>
    <div className="form-group">
      <div className="col-lg-10">
    <textarea className="form-control" id="body" placeholder="Message" rows="12" onChange={this.handleChange}></textarea>
  </div>
    </div>
  </form>
  </div>
  <div className="modal-footer">

  <button className="btn btn-success pull-left" type="submit" onClick={this.submitting}>send</button>


  </div>
  </div>
  </div>
  </div>
    </div>
);
  }
});
module.exports=ReplyMail
