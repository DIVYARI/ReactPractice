var React=require('react');
var ReplyMail=require('./ReplyMail');
var ViewModal=React.createClass({

  appendToIframe: function(message)
  {
  var iFrameNode = this.refs.myIframe,
  frameDoc = iFrameNode.contentWindow.document;
  frameDoc.write(message);
  },
getInitialState:function(){
  return({boo:false,mailFrom:this.props.mailFrom,mailsub:this.props.mailsub,body:this.props.body});
},
  composeReply:function(){
this.setState({boo:true});
  },
  saving:function(){


    // this.setState({mailFrom:mailFrom1});
    // this.setState({mailsub:mailsub1});
    // this.setState({body:body1});
    console.log(this.state.body);
    console.log(this.state.mailFrom);
    console.log(this.state.mailsub);

  //   var accessToken = localStorage.getItem('gToken');
  //  console.log("Access token: "+accessToken);
   var encodedBody = this.props.body;

  encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
  encodedBody = decodeURIComponent(escape(window.atob(encodedBody)));
  //  var email = '';
  //  var Headers = {'To': this.state.mailFrom,'Subject': this.state.mailsub};
  //  for(var header in Headers)
  //  {
  //    email += header += ": "+Headers[header]+"\r\n";
  //    console.log("email---"+email);
  //    console.log("header---"+header);
  //    console.log("Headers[header]---"+Headers[header]);
  //   }
  //  email += "\r\n" + this.state.body;
  //  console.log("constructed email: " +email);
  // var encodedMessage =  window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_');
   $.ajax({
          url: '/',
          dataType: 'json',
          contentType: "application/json",
          type: 'POST',
          data: JSON.stringify({'from':this.props.mailFrom,'subject':this.props.mailsub,'body':encodedBody,'date':this.props.mailDate}),
          // beforeSend: function (request)
          // {
          //   request.setRequestHeader("Authorization", "Bearer "+accessToken);
          // },
    success: function(data)
    {
      console.log("Success");
      console.log(data.length);
    //  alert("message sent");
    }.bind(this),

    error: function(xhr, status, err) {
      console.error("Error.."+err.toString());
    }.bind(this)
  });

  },

  render:function(){
  {/*console.log('Inside label'+this.props.Lgname);*/}
// console.log(this.state.to);
// console.log(this.state.subject);
// console.log(this.state.body);

    return(
    <div>
    							<div className="modal fade" id="myModal1">
    								<div className="modal-dialog">
    									<div className="modal-content">
    										<div className="modal-header">
    											<button className="close" data-dismiss="modal" onClick={this.props.modalset}>x</button>

    											<h6 className="modal-title">Messages</h6>
    												</div>
    											<div className="modal-body">
              	<form className="form-horizontal">
    							<div className="form-group">

    								<div className="col-lg-10">
    							{this.props.mailFrom}
    								</div>
    							</div>
    							<div className="form-group">

    								<div className="col-lg-10">
    							{this.props.mailDate}
    								</div>
    							</div>
    							<div className="form-group">


    							</div>
    							<div className="form-group">

    								<div className="col-lg-10">
                    <iframe id="iframe-message" ref="myIframe" >
    </iframe>


    								</div>
    							</div>
    					</form>
    					</div>
    					<div className="modal-footer">

    						<a href="#myModal12"  role="button" className="btn btn-warning" data-toggle="modal" onClick={this.composeReply}>reply</a>
                  <button className="btn btn-success" type="submit" onClick={this.saving}>save</button>
              {this.state.boo?<ReplyMail d={this.props.mailFrom} modalset={this.props.modalset}/>:null}

    					</div>
    				</div>
    			</div>
    		</div>    </div>
    );
  },
  componentDidMount: function(){
var encodedBody = this.props.body;

encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
encodedBody = decodeURIComponent(escape(window.atob(encodedBody)));
console.log(encodedBody);
this.appendToIframe(encodedBody);
},
});
module.exports=ViewModal;
