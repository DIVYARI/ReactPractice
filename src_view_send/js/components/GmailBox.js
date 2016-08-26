var Leftpanel=require('./Leftpanel');
var Rightpanel=require('./Rightpanel');
var React = require('react');
{/*var LeftSideBar = require('./LeftSideBar');*/}
var loadedData = false;
var tempArr=[];
var GmailBox = React.createClass({
  getInitialState: function()
  {
    return({allLabelsData:[]},{SpecificMessageData:[]});
  },

  gmailLogin: function()
  {
    var acToken, tokenType, expiresIn;
    var OAUTHURL    =   'https://accounts.google.com/o/oauth2/v2/auth?';
    var SCOPE       =   'https://mail.google.com/ https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/gmail.readonly';
    var CLIENTID    =   '1068162426630-8rvrokirl120lovlkub2qbmljgs8fdo1.apps.googleusercontent.com';
    var REDIRECT    =   'http://localhost:8080';
    var TYPE        =   'token';
    var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
    var win         =   window.open(_url, "windowname1", 'width=800, height=600');

    var pollTimer   =   window.setInterval(function()
    {

      try
      {
        if (win.document.URL.indexOf(REDIRECT) != -1)
        {
          window.clearInterval(pollTimer);
          var url =   win.document.URL;
          acToken =   gup(url, 'access_token');
          tokenType = gup(url, 'token_type');
          expiresIn = gup(url, 'expires_in');
          localStorage.setItem('gToken',acToken);
          localStorage.setItem('gTokenType',tokenType);
          localStorage.setItem('gExprireIn',expiresIn);
          function gup(url, name) {
            name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
            var regexS = "[\\#&]"+name+"=([^&#]*)";
            var regex = new RegExp( regexS );
            var results = regex.exec( url );
            if( results == null )
            return "";
            else
            return results[1];
          }
          win.close();
        }
      }
      catch(e)
      {
        console.log(e);
      }
    }, 500);
    this.allLabels();
   this.getemailBylabel("INBOX");
  },


  allLabels: function()
  {
    console.log("inside label");
    var accessToken = localStorage.getItem('gToken');
    $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/me/labels?key={AIzaSyDVjenDbUtCm-bGiCJW69jr2kHoTjFoNKo}',
      dataType: 'json',
      type: 'GET',
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data)
      {
        //console.log(data);
        this.setState({allLabelsData:data.labels});
        loadedData=true;
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
    });

  },

  getemailBylabel:function(labelData){
    console.log('getemaillabel');
    var accessToken=localStorage.getItem('gToken');
    $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/dvsri41%40gmail.com/messages?labelIds='+labelData+'&maxResults=10&key={AIzaSyDVjenDbUtCm-bGiCJW69jr2kHoTjFoNKo}',
      dataType: 'json',
      type: 'GET',

      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data)
      {
      var  arr=[];
        //console.log(data);
        // this.setState({getemailBylabelData:data.labelIds});

        tempArr =data.messages;
        for(var i=0;i<tempArr.length;i++){

        arr.push( this.getSpecificMessage(tempArr[i].id));

        }
        this.setState({SpecificMessageData:arr});



        // console.log(data.labelIds);
      }.bind(this),
      async:false,
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)

    });
  },
  getSpecificMessage:function(id){
console.log(id);


    var accessToken = localStorage.getItem('gToken');
var f= $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/dvsri41%40gmail.com/messages/'+id+'?key={AIzaSyDVjenDbUtCm-bGiCJW69jr2kHoTjFoNKo}',
      dataType: 'json',
      type: 'GET',

      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);

      },

      success: function(data)
      {
        console.log(data);
    //console.log(JSON.stringify(data));
       //this.state.SpecificMessageData.push(data);
        //  this.setState(this.state.SpecificMessageData.push(data));


          //arr.push(data);
          //  console.log("arr"+arr);
        //  this.setState({SpecificMessageData});
        //  console.log(this.state.SpecificMessageData);

      }.bind(this),
      async:false,
      error: function(xhr, status, err) {
        //console.error(err.toString());
      }.bind(this)
    });
//console.log(this.state.SpecificMessageData);

return f.responseJSON;
  },

  render:function()
  {
    var leftPanel;
    var rightPanel;
//console.log(this.state.SpecificMessageData);
    if(loadedData){
      //console.log(this.state.SpecificMessageData);
      leftPanel =    <Leftpanel Ldata={this.state.allLabelsData} p1={this.getemailBylabel}></Leftpanel>
      rightPanel= <Rightpanel allMailData={this.state.SpecificMessageData}></Rightpanel>
    }

    return(
      <div className="GmailBox">
      <div className="container-fluid">
      <div className="row">
      <div className="col-lg-1">
      <button id="authorize-button" onClick={this.gmailLogin} className="btn btn-danger pull-left">Si</button>
      </div>
      <div className="col-lg-8 pull-right" id="gmail">
      <h2>Gmail</h2>
      </div>
      </div>
      <div className="row">
      <div className="col-lg-2">
      {leftPanel}
      </div>
      <div className="col-lg-10">
      {rightPanel}
      </div>
      </div>
      </div>
      </div>
    );
  }
});

module.exports = GmailBox;
