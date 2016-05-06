var request = require('request');


// variables
var uuid_list = '485344424c45414480c01800ffffbbbb';
var checkpoint = 1; // change number
var flag = true;


// standard input
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your CHECKPOINT number? ', (answer) => {
  // TODO: Log the answer in a database
  console.log('Your checkpoint number:', answer);
  checkpoint = answer

  rl.close();
});


// start tracking
Bleacon = require('bleacon');
Bleacon.startScanning();

Bleacon.on('discover', function(bleacon) {

    // debug
   // console.dir(bleacon);
   console.log('checkpoint: ' + checkpoint)
   console.log('uuid: ' + bleacon.uuid);
   console.log('distance: ' + bleacon.proximity);
   // sleep.sleep(3);

    var options = {
      uri: 'http://192.168.179.3:5000/api/beacon?last_checkpoint_id=' + checkpoint + '&beacon_id=' + bleacon.uuid,
      form: { name: 'テストユーザー' },
      json: true
    };

    if (flag && bleacon.proximity == 'immediate' && uuid_list == bleacon.uuid){
        request.post(options, function(error, response, body){
          if (!error && response.statusCode == 200) {
            console.log(bleacon.uuid);
            // stop POST-ing
            flag = false;
          } else {
            console.log('error: '+ response.statusCode);
          }
        });
    }
});