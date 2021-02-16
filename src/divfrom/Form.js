import React from 'react';
import './Form.css';
import Input from '../Input/Input';
import Select from '../Select/Select';
import Validation from '../validation/validation';
const Gender = ["Male", "Femal", "Other"];
const Country = ["India", "Australia", "USA", "UK"];




const Form = () =>{
    return (
        <div className="divform">
            <form method="POST">
                <div className="div-form">
                   <Input type="text" label="First Name" name="fname" />
                   <Input type="text" label="Last Name" name="lname" />
                </div>
                <div className="div-form">
                    <Input classname="inputbday" type="date" label="Birth date" name="bday" max="2021-02-15"/>
                    <Select list={Gender} label="Gender" name="gender"/>
                    <Select list={Country} label="country" name="country"/>
                </div>
                <div className="div-form">
                   <Input type="password" label="Password" name="password" minlength="6" />
                   <Input type="password" label="Confirm Password" name="cpassword" minlength="6"/>
                </div>
                <div className="div-form">
                   <Input type="number" label="Phone Number" name="pnumber" minlength="8" maxlength="10"/>
                   <Input type="email" label="Email" name="email" />
                </div>
                <div>
                    <button type="submit" className="submitbutton" onClick = {validate}>submit</button>
                </div>
            </form>
        </div>
    );


}

const validate = (event) =>{
    const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const gender = document.getElementById('gender');
const country = document.getElementById('country');
const bday = document.getElementById('bday');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const pnumber = document.getElementById('pnumber');
const email = document.getElementById('email');
    // password verification
    const psw = password.value;
    const cpsw = cpassword.value
    if(psw!=cpsw)
     {
         alert("Password and confirm, password must be same");
         event.preventDefault();
     }
    else{

        const pformate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,50}$/;
        if(!psw.match(pformate))
         {
             alert("password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special characte");
             event.preventDefault();
         }
        else
        {

            //  emial verification
            const emailAddr =email.value;

            var aposition = emailAddr.indexOf("@");
            var lastdot = emailAddr.lastIndexOf('.');
            var firstdot = emailAddr.indexOf('.');
            var dotbeforea = 0;
            var dotaftera = 0;
            var charcondition = true;
            var position = 0 ;
            if((emailAddr[0]>='a' && emailAddr[0]<='z') || (emailAddr[0]>='A' && emailAddr[0]<='Z'))
             charcondition = true;
            else 
             charcondition = false; 
        
            for(const p in emailAddr)
            {
                
                if((emailAddr[p]>='a' && emailAddr[p]<='z') || (emailAddr[p]>='A' && emailAddr[p]<='Z') || (emailAddr[p]>='0' && emailAddr[p]<='9') || emailAddr[p]=='.' || emailAddr[p]=='_' || emailAddr[p]=='@')
                {
                    if(emailAddr[p]=='.')
                    {
                        if(position ==0 )
                         dotbeforea++;
                        else 
                         dotaftera++; 
                    }
                    if(emailAddr[p]=='@')
                     position = 1;
                }
                else 
                 charcondition = false;
            }
            
            if(lastdot+2 >= emailAddr.length || firstdot <= 0 || lastdot<aposition || lastdot<aposition+2 ||  charcondition == false || dotbeforea>1 || dotaftera==0 || dotaftera>1)
             {
                 alert("email is invalid")
                 event.preventDefault();
             }
            else
            {

               // phone verification
               const pno = pnumber.value;
               if(pno.length< 8 || pno.length >10)
               {
                   alert("Phone number legnth must be 8 or 9 or 10 ")
                   event.preventDefault();
               }
               else{
                alert("First Name: " + fname.value + "\n Last Name: " + lname.value
                +"\n Birth Day: "+bday.value + "\n Gender: "+gender.value + "\n Country: "
                + country.value + "\n Phone Number: " + pnumber.value + "\n Email: " + email.value
                + "\n Password: " + password.value)
               }
            } 
             
        } 
    }  
    event.preventDefault();
}




export default Form;