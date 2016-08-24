var React=require('react');
var Labelcomponent=require('./Labelcomponent');
var Leftpanel=React.createClass({
  render:function(){
    var labelArr= this.props.Ldata.map(function(e){
    {/*console.log(e.id+":"+e.name);*/}
          return(

                <Labelcomponent Lgid={e.id} Lgname={e.name}></Labelcomponent>

          );
        });

    return(
     <div>
            {labelArr}
        </div>

    );
  }
});
module.exports=Leftpanel
