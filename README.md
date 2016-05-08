# "Pikap"
Team Ants 2016/05/07
Junction Asia 2016
​
# Product description
Pikap is an airport pick-up helper service using iBeacon.
​
## Challenging Problem
There are more than 8 million people flying over the world in a single day. Several thousands of passengers for business trips, travellers going alone sometimes needs for pickups. 
In such case, receptions would usually write down the name of visitor on some big paper or whiteboard. But wait, it is 21st century! The IoT devices, smartphones are everywhere but we are still using some paperboard to meet each other.
​
## Our product
Pikap service solves the airport pickup problem using iBeacon technology. When the passenger checks in at his departure, airline company provides them a Pikap. Several iBeacon sensors are placed on special checkpoints at airport. Upon his arrival, receptionist would know where the passenger is and meet up with him.
With iBeacon, pick-ups could be done smartly and there is no need to worry about internet connection.
​
## Our vision
By air companies using our Pikap, the passenger can easily meetup with other people at the airport.
The bigdata from the service, about passengers' behaviour inside the airport, could improve the airport process such as baggage carousel.
Not only the receptionist but the passenger's family or friends can also know that he or she safely arrived at the destination.
​
## Techs
Device:
- iBeacon
- Intel Edison

Developments:
- Python, jQuery, Node.js
- ClearDB, MySQL
- IBM Bluemix server (Web service(Flask), Twillio)

We used iBeacon device for passenger and Intel Edison for iBeacon sensors. By using iBeacon, passenger do not need any internet connection or take any action. Intel Edison is compact computing device for detecting iBeacons and send data to server.

Our backend is deployed on IBM Bluemix. Python Flask web-app is deployed on Bluemix PaaS. We can further expand our app by connecting Bluemix's other services easily afterward.

