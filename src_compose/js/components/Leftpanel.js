var React=require('react');
var Labelcomponent=require('./Labelcomponent');
var Compose=require('./Compose');
var Leftpanel=React.createClass({
  handling:function(lab){
    console.log('handling');
    this.props.p1(lab);
  },
  composeMail:function(){
    console.log("hai");
  },
  render:function(){
    var labelArr= this.props.Ldata.map(function(e){
    {/*console.log(e.id+":"+e.name);*/}

    if(e.id=="INBOX" || e.id=="SENT" || e.id=="DRAFT" || e.id=="IMPORTANT"){
      return(

            <Labelcomponent Lgid={e.id} Lgname={e.name}  p2={this.handling}></Labelcomponent>

      );
    }

        },this);

    return(
     <div>
     <Compose>Compose Mail</Compose>
            {labelArr}

        </div>

    );
  }
});
module.exports=Leftpanel
