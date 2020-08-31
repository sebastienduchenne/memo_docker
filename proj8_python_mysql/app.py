from flask import Flask, request, jsonify
import mysql.connector


app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    print("------------")
    mydb = mysql.connector.connect(
        host="localhost",
        user="user",
        password="password"
    )

    mycursor = mydb.cursor()
    mycursor.execute("CREATE DATABASE toto")

    mycursor = mydb.cursor()
    mycursor.execute("SHOW DATABASES")

    res = ""
    for x in mycursor:
        res = x

    return res
