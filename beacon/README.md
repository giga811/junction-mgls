### Install Packages

```sh
# beacon package
$ npm install bleacon

# http
$ npm install request

# grove led
$ npm install jsupm_grove

# twillio
$ npm install twilio

# querystring
$ npm install querystring
```

### Set Edison's Bluetooth ON

```sh
$ rfkill list
$ rfkill unblock bluetooth
$ hciconfig
```

### Run Edison

```sh
# set checkpoint number
$ node receive.js 1

```


### Change Beacon Distance
```sh
# change 'accuracy' value to 0.1, if 'immediate'
$ vi node_modules/bleacon/lib/bleacon.js
else if (accuracy < 0.5) {
    proximity = 'immediate';
}
```
