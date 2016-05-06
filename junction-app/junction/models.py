import datetime
from junction import db

# Status
class Status(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    ticket_id = db.Column(db.String(80))
    beacon_id = db.Column(db.String(80))
    last_checkpoint_id = db.Column(db.String(80))
    timestamp = db.Column(db.DateTime)

    def __init__(self, ticket_id, beacon_id, last_checkpoint_id=0, timestamp=datetime.datetime.now()):
        self.ticket_id = ticket_id
        self.beacon_id = beacon_id
        self.last_checkpoint_id = last_checkpoint_id
        self.timestamp = timestamp

