var React=require('react');
var UpdateMessage=require('./UpdateMessage');
var SaveViewModal=React.createClass({

  appendToIframe: function(message)
  {
  var iFrameNode = this.refs.myIframe,
  frameDoc = iFrameNode.contentWindow.document;
  frameDoc.write(message);
  },
getInitialState:function(){
  return({message:'',b:false,mailFrom:this.props.mailFrom,mailsub:this.props.mailsub,body:this.props.body,id:this.props.id});
},
  composeReply:function(){
this.setState({b:true});
  },


    deleting:function(){

console.log("in deleting");
console.log(this.state);
     $.ajax({
            url: '/delete',
            dataType: 'json',
            type: 'DELETE',
            data: this.state,
          //  data: JSON.stringify({'from':this.props.mailFrom,'subject':this.props.mailsub,'body':this.props.body}),
            // beforeSend: function (request)
            // {
            //   request.setRequestHeader("Authorization", "Bearer "+accessToken);
            // },
      success: function(response)
      {
        this.setState({message:response.message});
        console.log("Success dele");
      //  alert("message sent");
      }.bind(this),
      async: false,
      error: function(xhr, status, err) {
        console.error("Error.."+err.toString());
      }.bind(this)
    });

    },
  // saving:function(){
  //
  //
  //   // this.setState({mailFrom:mailFrom1});
  //   // this.setState({mailsub:mailsub1});
  //   // this.setState({body:body1});
  //   console.log(this.state.body);
  //   console.log(this.state.mailFrom);
  //   console.log(this.state.mailsub);
  //
  // //   var accessToken = localStorage.getItem('gToken');
  // //  console.log("Access token: "+accessToken);
  //  var encodedBody = this.props.body;
  //
  // encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
  // encodedBody = decodeURIComponent(escape(window.atob(encodedBody)));
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
  //  $.ajax({
  //         url: '/',
  //         dataType: 'json',
  //         contentType: "application/json",
  //         type: 'POST',
  //         data: JSON.stringify({'from':this.props.mailFrom,'subject':this.props.mailsub,'body':encodedBody}),
  //         // beforeSend: function (request)
  //         // {
  //         //   request.setRequestHeader("Authorization", "Bearer "+accessToken);
  //         // },
  //   success: function(data)
  //   {
  //     console.log("Success");
  //     console.log(data.length);
  //   //  alert("message sent");
  //   }.bind(this),
  //
  //   error: function(xhr, status, err) {
  //     console.error("Error.."+err.toString());
  //   }.bind(this)
  // });
  //
  // },

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
    							{this.props.from}
    								</div>
    							</div>
    							<div className="form-group">

    								<div className="col-lg-10">
    							{this.props.subject}
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


              	<a href="#myModal12"  role="button" className="btn btn-warning" data-toggle="modal" onClick={this.composeReply}>update</a>
{this.state.b?<UpdateMessage id={this.props.id} subject={this.props.subject} modalset={this.modalset} from={this.props.from} date={this.props.date} body={this.props.body}/>:null}
                  <button className="btn btn-success" type="submit"onClick={this.deleting}>delete</button>


    					</div>
    				</div>
    			</div>
    		</div>    </div>
    );
  },
  componentDidMount: function(){
var encodedBody = this.props.body;


this.appendToIframe(encodedBody);
},
});
module.exports=SaveViewModal;
