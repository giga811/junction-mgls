"""Config"""
import os
import json

### Variables
#DATABASE = './database.db'
PER_PAGE = 30
DEBUG = True
SECRET_KEY = 'junctionmgls' # secret key for app

vcap_config = os.environ.get('VCAP_SERVICES')
decoded_config = json.loads(vcap_config)
for key, value in decoded_config.iteritems():
    if key.startswith('cleardb'):
    	mysql_creds = decoded_config[key][0]['credentials']

# mysql settings
MYSQL_DATABASE_HOST = str(mysql_creds['hostname'])
MYSQL_DATABASE_PORT = str(mysql_creds['port'])
MYSQL_DATABASE_USER = str(mysql_creds['username'])
MYSQL_DATABASE_PASSWORD = str(mysql_creds['password'])
MYSQL_DATABASE_DB = str(mysql_creds['name'])
MYSQL_DATABASE_CHARSET = 'utf8'
# format is dialect+driver://username:password@host:port/database
SQLALCHEMY_DATABASE_URI = str(mysql_creds['uri'])

#SQLALCHEMY_DATABASE_URI = 'sqlite:///' + DATABASE
