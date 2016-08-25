var React=require('react');
var Compose=React.createClass({

  render:function(){
  {/*console.log('Inside label'+this.props.Lgname);*/}
    return(
    <div>


    							<a href="#myModal" role="button" className="btn btn-warning pull-center" data-toggle="modal"><span className="glyphicon glyphicon-hand-up"></span>compose</a>
    							<div className="modal fade" id="myModal">
    								<div className="modal-dialog">
    									<div className="modal-content">
    										<div className="modal-header">
    											<button className="close" data-dismiss="modal">x</button>

    											<h6 className="modal-title">New Message</h6>

    												</div>
    											<div className="modal-body">








    					<form className="form-horizontal">
    							<div className="form-group">

    								<div className="col-lg-10">
    								<input className="form-control" id="inputName" placeholder="To" type="text"/>
    								</div>
    							</div>
    							<div className="form-group">

    								<div className="col-lg-10">
    								<input className="form-control" id="inputNumber" placeholder="Subject" type="text"/>
    								</div>
    							</div>
    							<div className="form-group">


    							</div>
    							<div className="form-group">

    								<div className="col-lg-10">
    							<textarea className="form-control" id="inputMessage" placeholder="Message" rows="5"></textarea>


    								</div>
    							</div>
    					</form>
    					</div>
    					<div className="modal-footer">

    						<button className="btn btn-success pull-left" type="submit" onClick={this.submitting}>send</button>

    					</div>
    				</div>
    			</div>
    		</div>    </div>
    );
  }
});
module.exports=Compose
