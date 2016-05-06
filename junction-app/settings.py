"""Config"""

### Variables
DATABASE = './database.db'
PER_PAGE = 30
DEBUG = True
SECRET_KEY = 'junctionmgls' # secret key for app

# mysql settings
# MYSQL_DATABASE_HOST = 'localhost'
# MYSQL_DATABASE_PORT = 3306
# MYSQL_DATABASE_USER = 'angel'
# MYSQL_DATABASE_PASSWORD = 'junction'
# MYSQL_DATABASE_DB = 'junction'
# MYSQL_DATABASE_CHARSET = 'utf8'
# format is dialect+driver://username:password@host:port/database
# SQLALCHEMY_DATABASE_URI = 'mysql://junction@localhost/junction'
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + DATABASE
