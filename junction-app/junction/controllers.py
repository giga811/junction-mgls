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

@app.route("/status/:ticketid", methods=['GET'])
def status():
    return render_template('status.html', ticketid=ticketid)

# api
@app.route("/api/test")
def get_sensor():
    s = Status('t123', 'b234')
    db.session.add(s)
    db.session.commit()
    status = Status.query.first()
    return status.ticket_id

# tests
@app.route('/test')
def test_page():
    return "ok"


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
