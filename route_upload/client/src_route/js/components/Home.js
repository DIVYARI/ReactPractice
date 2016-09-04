var React=require('react');
var ReplyMail=require('./ReplyMail');
var Display=require('./Display');
var Home=React.createClass({

getInitialState:function(){
  console.log("Inside getIS"+this);
  return ({message:'',favMessages:[]});
},


  getting:function(){


console.log("Inside getting"+this);
   $.ajax({
          url: '/mail',
          dataType: 'json',
          type: 'GET',
        //  data: JSON.stringify({'from':this.props.mailFrom,'subject':this.props.mailsub,'body':this.props.body}),
          // beforeSend: function (request)
          // {
          //   request.setRequestHeader("Authorization", "Bearer "+accessToken);
          // },

    success: function(response)
    {
      //console.log("Inside success"+JSON.stringify(this));
      this.setState({favMessages:response});
      console.log(response);
console.log(this.state.favMessages);
      console.log("Success");

    //  alert("message sent");
    }.bind(this),
    async: false,
    error: function(xhr, status, err) {
      console.error("Error.."+err.toString());
    }.bind(this)
  });

  },


  updating:function(){



   $.ajax({
          url: '/update',
          dataType: 'json',
          type: 'PUT',
        //  data: JSON.stringify({'from':this.props.mailFrom,'subject':this.props.mailsub,'body':this.props.body}),
          // beforeSend: function (request)
          // {
          //   request.setRequestHeader("Authorization", "Bearer "+accessToken);
          // },
    success: function(response)
    {
    //  this.setState({mongData:data});
      console.log("Success update");
      this.setState({message:response});
    //  alert("message sent");
    }.bind(this),
    async: false,
    error: function(xhr, status, err) {
      console.error("Error.."+err.toString());
    }.bind(this)
  });

  },


  deleting:function(){



   $.ajax({
          url: '/delete',
          dataType: 'json',
          type: 'DELETE',
        //  data: JSON.stringify({'from':this.props.mailFrom,'subject':this.props.mailsub,'body':this.props.body}),
          // beforeSend: function (request)
          // {
          //   request.setRequestHeader("Authorization", "Bearer "+accessToken);
          // },
    success: function(response)
    {
      this.setState({message:response.message});
      console.log("Success dele in home");
    //  alert("message sent");
    }.bind(this),
    async: false,
    error: function(xhr, status, err) {
      console.error("Error.."+err.toString());
    }.bind(this)
  });

  },









  render:function(){

console.log("State data in render-->"+this.state.favMessages);
    return(
    <div>
  {/*	<h1>	{this.state.message}</h1>*/}

                  <button className="btn btn-success" type="submit" onClick={this.updating}>Update1</button>
                    <button className="btn btn-success" type="submit" onClick={this.deleting}>Delete</button>
                    <Display favMessages={this.state.favMessages}/>
   </div>
    );
  },
  componentDidMount: function(){
    var that=this;
    console.log("Inside getting"+this);
       $.ajax({
              url: '/mail',
              dataType: 'json',
              type: 'GET',
            //  data: JSON.stringify({'from':this.props.mailFrom,'subject':this.props.mailsub,'body':this.props.body}),
              // beforeSend: function (request)
              // {
              //   request.setRequestHeader("Authorization", "Bearer "+accessToken);
              // },

        success: function(response)
        {
          //console.log("Inside success"+JSON.stringify(this));
          that.setState({favMessages:response});
          console.log(response);
    console.log("State data-->"+that.state.favMessages);
          console.log("Success");

        //  alert("message sent");
        }.bind(this),
        async: false,
        error: function(xhr, status, err) {
          console.error("Error.."+err.toString());
        }.bind(this)
      });



},
});
module.exports=Home;
