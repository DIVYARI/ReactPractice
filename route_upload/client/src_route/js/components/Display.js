var React=require('react');
var DisplayChild=require('./DisplayChild');

var Display=React.createClass({

  render:function(){
    var msg= this.props.favMessages.map(function(e){




      return(

            <DisplayChild from={e.from} subject={e.subject} date={e.date} body={e.body} id={e._id}></DisplayChild>

      );


        },this);

    return(
     <div>



          <p>  {msg}</p>



        </div>

    );
  }
});
module.exports=Display
