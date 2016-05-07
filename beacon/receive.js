// load modules
var request = require('request');
var Bleacon = require('bleacon');
var groveSensor = require('jsupm_grove');
var querystring = require('querystring');
var twilio = require('twilio');

// variables
var uri_server = 'http://junction-test.mybluemix.net/api/beacon?';
var uuid_list = ['485344424c45414480c01800ffffbbbb'];
var checkpoint = process.argv[2];
var flag = true;
var date1 = new Date();
var track_interval = 1000;

 // Twilio Credentials
var accountSid = 'ACca5e81eda5d9445d0a058d2498102041';
var authToken = '359e59814443966ac35cd18be2a8cf84';
var client = require('twilio')(accountSid, authToken);
var word = "Hi it is bacon. Your visitor is arrived in airport! Pick your visitor now!";
var twiml = '<Response><Say voice="woman" language="en-us">' + word + '</Say></Response>';

console.log("Your CHECKPOINT NUMBER is: " + checkpoint);


// ==== LED ====
var led = new groveSensor.GroveLed(2);

function ledLight(){
  led.write(1);
  setTimeout(function(){
    led.write(0);
  }, 3000);
}

// ==== TEL ====
function callme(){
  client.makeCall({
      to: '+81xxxxxxxx', //コール先のtwilio番号(トライアルアカウントの場合、認証されている番号)
      from: '+815031886957', // 取得したtwilioの番号.
      url: 'http://twimlets.com/echo?Twiml=' + querystring.escape(twiml) //twimlを返すURL
  }, function (err, responseData) {
      if(err) throw err;
      console.log(responseData.from);
  });
}


// ==== BEACON ====
var beaconTrack = function(bleacon) {
  var date2 = new Date();

  // track interval
  if (date2 - date1 > track_interval){
    date1 = date2;

    // Signal status & distance
    if (uuid_list.indexOf(bleacon.uuid) != -1) {
      if (bleacon.proximity != 'immediate') {
        console.log(bleacon.proximity);
      }
    } else {
      console.log("NO SIGNAL");
    }

    // set uri
    var options = {
      uri: uri_server + 'last_checkpoint_id=' + checkpoint + '&beacon_id=' + bleacon.uuid
    };

    // beacon checked on Checkpoint
    if (flag && bleacon.proximity == 'immediate' && uuid_list.indexOf(bleacon.uuid) != -1) {

      // send GET REQUEST
      request.get(options, function(error, response, body){

        if (response.statusCode == 200) {
          console.log("*** SUCCESS ***");
          console.log(bleacon.uuid);
          console.log(bleacon.proximity);
          console.log(checkpoint);
          ledLight();

          if (checkpoint == 3){
            callme();
          }

          // stop POST-ing
          flag = false;
        } else {
          console.log("### ERROR ### ");
          console.log('error: '+ response.statusCode);
          console.log(bleacon.uuid);
          console.log(bleacon.proximity);
          console.log(checkpoint);
          ledLight();
        }
      });
    } else if (bleacon.proximity == 'immediate' && uuid_list.indexOf(bleacon.uuid) != -1) {
      console.log(bleacon.proximity);
      ledLight();
    }
  }
};



// Start Tracking
Bleacon.startScanning();
Bleacon.on('discover', beaconTrack);
