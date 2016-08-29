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
  return({boo:false});
},
  composeReply:function(){
this.setState({boo:true});
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
