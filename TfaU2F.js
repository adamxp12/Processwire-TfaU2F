function TfaU2F_addkey() {
    
    var appId = document.getElementById('TfaU2F_appId').value;
    var challenge = JSON.parse("[" + document.getElementById('TfaU2F_challenge').value + "]");
    var regreq = [{version: 'U2F_V2', challenge: challenge, attestation: 'direct'}];
    console.log("Register: ", regreq);
    u2f.register(appId, challenge, [], function(data) {
        console.log("Register callback", data);
                if(data.errorCode && data.errorCode != 0) {
                    alert("registration failed with errror: " + data.errorCode);
                    return;
                    
                } else {
                    document.getElementById('TfaU2F_regdata').value = JSON.stringify(data);
                    document.getElementById('TfaU2F_button').disabled = true;
                    document.getElementById('TfaU2F_msg').textContent = 'Security key added. Save this page to continue';
                    
                }
            });


}
