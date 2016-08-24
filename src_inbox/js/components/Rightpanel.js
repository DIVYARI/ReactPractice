var React=require('react');
var Mail=require('./Mail');
var Rightpanel=React.createClass({
  render:function(){

    var InboxMail=this.props.allMailData.map(function(mail){

            var from;
            var subject;
            var date;
            for(var i=0;i<mail.payload.headers.length;i++){
                 if(mail.payload.headers[i].name=="From"){
                   from=mail.payload.headers[i].value;

                 }
                 if(mail.payload.headers[i].name=="Subject"){
                   subject=mail.payload.headers[i].value;
                 }
                 if(mail.payload.headers[i].name=="Date"){
                   date=mail.payload.headers[i].value;
                      //console.log(date);
                 }
            }

      return( <Mail mailFrom={from} mailSubject={subject}  mailDate={date} />


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
