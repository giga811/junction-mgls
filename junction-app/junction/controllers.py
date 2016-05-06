"""
2016/05/07
junction asia app
junction
"""

# flask imports
from flask import Flask, request, session, url_for, redirect, render_template, abort, g, flash,\
    _app_ctx_stack, jsonify, send_from_directory
from werkzeug import check_password_hash, generate_password_hash
from flask.ext.restful import reqparse, abort, Api, Resource
import json


# user imports
from junction import app, db
from models import Status

# route for INDEX
@app.route("/")
def hello():
    return render_template('index.html')

# api create
@app.route("/api/create")
def create():
    ticket_id = request.args.get("ticket_id")
    beacon_id = request.args.get("beacon_id")
    status = Status(ticket_id=ticket_id, beacon_id=beacon_id)
    db.session.add(status)
    db.session.commit()
    return "OK"

@app.route("/status")
def status():
    return render_template('status.html', ticket_id=request.args.get('ticket_id'))

# api chunag
@app.route("/api/chunag")
def return_status():
    ticket_id = request.args.get('ticket_id')
    status = Status.query.filter_by(ticket_id=ticket_id).first()
    data = {'last_checkpoint_id': status.last_checkpoint_id}
    return json.dumps(data)

# api beacon
@app.route('/api/beacon')
def update_data():
    beacon_id = request.args.get('beacon_id')
    last_checkpoint_id = request.args.get('last_checkpoint_id')
    Status.query.filter_by(beacon_id=beacon_id).update({'last_checkpoint_id': last_checkpoint_id}, synchronize_session=False)
    db.session.commit()
    status = Status.query.filter_by(beacon_id=beacon_id).first() 
    return status.last_checkpoint_id


### static file helpers
# route for static js, css files
@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory(app.static_folder + '/js', path)
@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory(app.static_folder + '/css', path)
@app.route('/fonts/<path:path>')
def send_fonts(path):
    return send_from_directory(app.static_folder + '/fonts', path)
@app.route('/font-awesome/<path:path>')
def send_fontawesome(path):
    return send_from_directory(app.static_folder + '/font-awesome', path)
@app.route('/img/<path:path>')
def send_img(path):
    return send_from_directory(app.static_folder + '/img', path)
@app.route('/less/<path:path>')
def send_less(path):
    return send_from_directory(app.static_folder + '/less', path)
