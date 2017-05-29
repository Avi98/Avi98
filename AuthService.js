import buffer from 'buffer';
import React,{Component} from'react';

export  class authService extends Component{
    login(creds,cb){

     var b =buffer.Buffer(creds.username + ':' + creds.password);
     var encode=b.toString('base64');
   let url='https://api.github.com/user';
   fetch(url, { 
  
   headers: {
     'Authorization' : 'Basic ' + encode,
     
   }, 
 
 })
        .then((response)=>{
            if (response.status>=200 && reaposne.status<300){
                return response;
            }
           throw {
               badCredentials: response.status==401,
               unknownError: response.status!=401
           }
        })
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            return cb({success:true});
        })
       
        .catch((err)=>{
             return cb(err);
        })
        .finally(()=>
         this.setState({indeterminate:true})
        );

    }

}
