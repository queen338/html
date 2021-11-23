1.function valid_email(str)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(mailformat.test(str))
{  
console.log("Valid email address!");  
}  
else  
{  
console.log("You have entered an invalid email address!");  
}
}

valid_email('me-info@example.com');

2.function Trim(str)
{
  var result;
  if (typeof str === 'string') 
  {
    result = str.replace(/^\s+|\s+$/g, '');
    return result;
  }
  else
  {
    return false;
  }
}
console.log(Trim(' w3resource '));
3.var str = "your long string with many words.";
var wordCount = str.match(/(\w+)/g).length;
alert(wordCount); //6

//    \w+    between one and unlimited word characters
//    /g     greedy - don't stop after the first match
4.function ValidateIPaddress(inputText)
 {
 var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
 if(inputText.value.match(ipformat))
 {
 document.form1.text1.focus();
 return true;
 }
 else
 {
 alert("You have entered an invalid IP address!");
 document.form1.text1.focus();return false;
 }
 
 5.function is_url(str)
{
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(str))
        {
          return true;
        }
        else
        {
          return false;
        }
}

console.log(is_url("http://www.example.com"));
console.log(is_url("https://www.example.com"));
console.log(is_url("www.example.com"));

 6.function is_alphaNumeric(str)
{
 regexp = /^[A-Za-z0-9]+$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(is_alphaNumeric("37828sad"));

console.log(is_alphaNumeric("3243#$sew"));
7.function is_usZipCode(str)
{
 regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(is_usZipCode("03201-2150"));

console.log(is_usZipCode("7892"));

8.function is_ukPostCode(str)
{
 regexp = /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(is_ukPostCode("B294HJ"));

console.log(is_ukPostCode("7892"));
9.function is_caPostalCode(str)
{
 regexp = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(is_caPostalCode("K8V3Y1"));

console.log(is_caPostalCode("K8V 3Y1"));

console.log(is_caPostalCode("Z4V4X1"));
10.//Write a JavaScript program to get the length of a JavaScript object.

Object.objsize = function(Myobj) {
    var osize = 0, key;
    for (key in Myobj) {
        if (Myobj.hasOwnProperty(key)) osize++;
    }
    return osize;
};

var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

var objsize = Object.objsize(student);
console.log('Size of the current object : '+objsize);

11.function is_boolean(value)
        {
        return value === true || value === false || toString.call(value) === '[object Boolean]';
       }

console.log(is_boolean(true));

console.log(is_boolean('bar'));

12.unction is_object(value)
        {
        var datatype = typeof value;
        return datatype === 'function' || datatype === 'object' && !!value;
       }

console.log(is_object({name: 'Robert'}));

console.log(is_object('bar'));

console.log(is_object(72));

13.function is_json(value)
        {
        return toString.call(value) === '[object Object]';
        }

console.log(is_json({name: 'Robert'}));

console.log(is_json('bar'));

console.log(is_json(72));

14.function is_sameType(value1, value2) {
        if(is_nan(value1) || is_nan(value2)) {
         return is_nan(value1) === is_nan(value2);
        }
        return toString.call(value1) === toString.call(value2);
    }

function is_nan(val)