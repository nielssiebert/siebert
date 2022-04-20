import json
import flask
from datetime import datetime

from model.SuccessResponse import SuccessResponse

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    response = flask.Response(json.dumps(SuccessResponse('404 wenn man so will','eieiei','error')), mimetype="application/json", status=404)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/currentmillis', methods=['GET'])
def currentSeconds():
    response = flask.Response('{\"currentMillis\":%s}' %(str(datetime.now().second),), mimetype="application/json", status=200)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/switchprimaryrelay', methods=['GET'])
def switchPrimaryRelay():
    #do something with GPIO
    if(datetime.now().second > 30):
        response = flask.Response(SuccessResponse('successfully switched relay','gut gut','success').toJSON(), mimetype="application/json", status=200)
    else:
        response = flask.Response(SuccessResponse('something is broken','eieiei','error').toJSON(), mimetype="application/json", status=200)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

app.run()