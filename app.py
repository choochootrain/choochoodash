import os
import requests

from flask import Flask, render_template

app = Flask(__name__)
app.config['DEBUG'] = True

@app.route('/')
def index():
    return render_template('index.html')

#API
@app.route('/api/ping', methods=['GET'])
def api_ping():
    return "pong"

@app.route('/api/weather/<int:city_id>', methods=['GET'])
def api_weather(city_id):
    resp = requests.get('http://api.openweathermap.org/data/2.5/weather?id=%d&units=imperial' % city_id)
    return resp.text, resp.status_code

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 8000))
