var React=require('react');
var Mail=require('./Mail');
var Rightpanel=React.createClass({
  getHTMLPart: function(arr)
  {
    for(var x = 0; x <= arr.length; x++)
    {
      if(typeof arr[x].parts === 'undefined')
      {
        if(arr[x].mimeType === 'text/html')
        {
          return arr[x].body.data;
        }
      }
      else
      {
        return this.getHTMLPart(arr[x].parts);
      }
    }
    return '';
  },

  render:function(){
    var that=this;
    console.log("rightpanel");
//console.log(this.props.allMailData);
    var InboxMail=this.props.allMailData.map(function(mail){
      if(typeof mail.payload.parts === 'undefined')
    {
      encodedBody = mail.payload.body.data;
    }
    else
    {
      encodedBody = that.getHTMLPart(mail.payload.parts);
    }
            var from;
            var subject;
            var date;
            var to;
            var bodyData=mail.payload.body.data;
            for(var i=0;i<mail.payload.headers.length;i++){
                 if(mail.payload.headers[i].name=="From"){
                   from=mail.payload.headers[i].value;

                 }
                 if(mail.payload.headers[i].name=="Subject"){
                   subject=mail.payload.headers[i].value;
                 }
                 if(mail.payload.headers[i].name=="Date"){
                   date=mail.payload.headers[i].value;
                      console.log(date);
                 }
                 if(mail.payload.headers[i].name=="To"){
                   to=mail.payload.headers[i].value;
console.log(to);
                 }
            }

      return( <Mail mailFrom={from} mailSubject={subject}  mailDate={date} mailTo={to} encodedBodyToChild={encodedBody}/>


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
