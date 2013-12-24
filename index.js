var x = new CJL_CookieUtil("project",1000, "/");
function setCookie(name,value){ name+="."; x.setSubValue(name, value); }
function getCookie(name)      { name+="."; return x.getSubValue(name); }
function findCookie(name)     { name+="."; return x.getSubValue(name) ? true : false;}
function listCookies()
{
   var users=document.cookie.split('@');
   for(i=0;i<users.length;i++)
      alert(users[i]);
}

function findCookie(name)
{
   name+=".";
   var users=document.cookie.split('@');
   for(i=0;i<users.length;i++)
      if(users[i].search(name) != -1) {return true;}
   return false;
}

function delCookie(name)
{
   if(findCookie(name)) {setCookie(name,0);
   alert(name+"="+value);}
   		
   else alert("cookie not found");
    
}

function addCookie(name)
{
  var value="";
  if(findCookie(name))
  {
   count=parseInt(getCookie(name))+1;
   value=value+count;   
  }
  else value="1";
  alert(name+"="+value);
  setCookie(name,value);
}

function clearAllCookies() 
{ 
   var xx=new Date();   
   var days=-1;   
   xx.setTime(xx.getTime() + (days*24*60*60*1000));
   var cookie1="project=; expires="+xx.toGMTString()+"; path=/";
   document.cookie=cookie1;
}
