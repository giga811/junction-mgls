# Junction Asia Mgls
Mgls at Junction Asia 2016/05/07

## how to run
1. needs python, pip
2. pip install virtualenv
3. setup
```
$ cd junction-app
$ virtualenv env
$ . ./env/bin/activate
$ pip install -r requirements.txt
$ sqlite3 ./database.db < user_schema.sql # execute only on local pc
$ python run.py
```
4. access localhost:5000
