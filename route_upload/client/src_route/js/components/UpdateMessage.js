var React=require('react');

var UpdateMessage=React.createClass({

  appendToIframe: function(message)
  {
  var iFrameNode = this.refs.myIframe,
  frameDoc = iFrameNode.contentWindow.document;
  frameDoc.write(message);
  },
// getInitialState:function(){
//   return({message:'',boo:false,mailFrom:this.props.mailFrom,mailsub:this.props.mailsub,body:this.props.body,id:this.props.id});
// },
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
    							<div className="modal fade" id="myModal12">
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



                  <button className="btn btn-success" type="submit"onClick={this.deleting}>save</button>


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
module.exports=UpdateMessage;
