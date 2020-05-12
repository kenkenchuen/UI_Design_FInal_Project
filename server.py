from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
import sys
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')  

@app.route('/lesson1')
def lesson1():
    return render_template('lesson1.html')

@app.route('/lesson2')
def lesson2():
    return render_template('lesson2.html')  

@app.route('/lesson3')
def lesson3():
    return render_template('lesson3.html')    

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

@app.route('/quiz2')
def quiz2():
    return render_template('quiz2.html')

@app.route('/quiz3')
def quiz3():
    return render_template('quiz3.html')

@app.route('/done')
def done():
    return render_template('done.html')

if __name__ == '__main__':
   app.run(debug = True)




