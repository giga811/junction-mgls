#!flask/bin/python

"""Run junction"""
import os
from junction import app
import json   

# Bind to PORT/HOST if defined, otherwise default to 5000/localhost.
PORT = int(os.getenv('VCAP_APP_PORT', '5000'))
HOST = str(os.getenv('VCAP_APP_HOST', '0.0.0.0'))
app.run(host=HOST, port=PORT, debug=True)
