var React=require('react');
var Mail=require('./Mail');
var Rightpanel=React.createClass({

  render:function(){
    console.log("rightpanel");
//console.log(this.props.allMailData);
    var InboxMail=this.props.allMailData.map(function(mail){

            var from;
            var subject;
            var date;
            var to;
            for(var i=0;i<mail.payload.headers.length;i++){
                 if(mail.payload.headers[i].name=="From"){
                   from=mail.payload.headers[i].value;

                 }
                 if(mail.payload.headers[i].name=="Subject"){
                   subject=mail.payload.headers[i].value;
                 }
                 if(mail.payload.headers[i].name=="Date"){
                   date=mail.payload.headers[i].value;
                    //  console.log(date);
                 }
                 if(mail.payload.headers[i].name=="To"){
                   to=mail.payload.headers[i].value;
//console.log(to);
                 }
            }

      return( <Mail mailFrom={from} mailSubject={subject}  mailDate={date} mailTo={to}/>


      );
//console.log(InboxMail);
    });
return(
  <div>
{InboxMail}
</div>

);


  }
});
module.exports=Rightpanel
