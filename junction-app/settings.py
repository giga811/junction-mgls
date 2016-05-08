"""Config"""

### Variables
#DATABASE = './database.db'
PER_PAGE = 30
DEBUG = True
SECRET_KEY = 'junctionmgls' # secret key for app

# mysql settings
MYSQL_DATABASE_HOST = 'us-cdbr-iron-east-03.cleardb.net'
MYSQL_DATABASE_PORT = 3306
MYSQL_DATABASE_USER = 'b22d82b5e57d67'
MYSQL_DATABASE_PASSWORD = 'cbccb1c0'
MYSQL_DATABASE_DB = 'ad_bcdddb8fbd90b7a'
MYSQL_DATABASE_CHARSET = 'utf8'
# format is dialect+driver://username:password@host:port/database
SQLALCHEMY_DATABASE_URI = 'mysql://b22d82b5e57d67:cbccb1c0@us-cdbr-iron-east-03.cleardb.net:3306/ad_bcdddb8fbd90b7a'

#SQLALCHEMY_DATABASE_URI = 'sqlite:///' + DATABASE