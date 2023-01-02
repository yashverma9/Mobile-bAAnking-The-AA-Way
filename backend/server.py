from flask import Flask, jsonify, session, redirect
import json
import sys
import os
import time
from flask_cors import CORS
import requests

original_stdout = sys.stdout
app = Flask(__name__)
CORS(app)
app.static_folder = 'static'
app.secret_key = 'the random string'

currentConsent = {
    "trackingId": "f35761ac-4a18-11e8-96ff-0277a9fbfe",
    "referenceId": "97442e98-96ba-45a0-a54a-d2dd56d8c505"
}



@app.route('/test')
@app.route('/')
def test():
    return "Working!"


@app.route('/api/initiateConsentJourney', methods = ['POST'])
def initiateConsentJourney():
    url = "https://hackathon.pirimidtech.com/hackathon/init/redirection"

    payload = json.dumps({
    "vuaId": "9987600001@dashboard-aa-uat",
    "templateType": "ONETIME",
    "trackingId": "mobile-baanking-1",
    "redirectionUrl": "http://localhost:5000"
    })
    headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'API_KEY': '476a8e08db7b89d1cdc553faf2',
    'Cookie': 'JSESSIONID=21CE483BA61DF10D7721EE24312D2544; OAuth_Token_Request_State=750bf628-ba92-4ae5-a635-765c23014ca3'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.json())

    return {"Type":"Success", "Message":"Consent Journey Initiated", "Response": response.json()}


# Get the consent/data fetch status
@app.route('/api/checkConsentStatus', methods = ['GET'])
def checkConsentStatus():
    
    url = "https://hackathon.pirimidtech.com/hackathon/consent/status?referenceId=4b79bbfd-f539-4e50-86bc-654723a7bfaf&trackingId=mobile-baanking-1"

    payload={}
    headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'API_KEY': '476a8e08db7b89d1cdc553faf2',
    'Cookie': 'JSESSIONID=21CE483BA61DF10D7721EE24312D2544; OAuth_Token_Request_State=750bf628-ba92-4ae5-a635-765c23014ca3'
    }

    response = requests.request("GET", url, headers=headers, data=payload)

    return {"Type": "Success", "Message":"Status checked successfully", "Response":response.json()}


# Get the FI Data after consent
@app.route('/api/getFIData', methods = ['GET'])
def getFIData():
    
    url = "https://hackathon.pirimidtech.com/hackathon/consent/data/fetch?referenceId=4b79bbfd-f539-4e50-86bc-654723a7bfaf&trackingId=mobile-baanking-1"

    payload={}
    headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'API_KEY': '476a8e08db7b89d1cdc553faf2',
    'Cookie': 'JSESSIONID=21CE483BA61DF10D7721EE24312D2544; OAuth_Token_Request_State=750bf628-ba92-4ae5-a635-765c23014ca3'
    }

    response = requests.request("GET", url, headers=headers, data=payload)

    return {"Type": "Success", "Message":"FI Data fetched successfully", "Response":response.json()}


# Get the bank analysis data
@app.route('/api/getBankAnalysisData', methods = ['GET'])
def getBankAnalysisData():
    
    url = "https://hackathon.pirimidtech.com/hackathon/consent/analytics/fetch?referenceId=4b79bbfd-f539-4e50-86bc-654723a7bfaf&trackingId=mobile-baanking-1"

    payload={}
    headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'API_KEY': '476a8e08db7b89d1cdc553faf2',
    'Cookie': 'JSESSIONID=21CE483BA61DF10D7721EE24312D2544; OAuth_Token_Request_State=750bf628-ba92-4ae5-a635-765c23014ca3'
    }

    response = requests.request("GET", url, headers=headers, data=payload)

    return {"Type": "Success", "Message":"Bank analysis Data fetched successfully", "response":response.json()}



# Get personalized nudge for the user
@app.route('/api/getProfile', methods = ['GET'])
def getProfile():
    
    with open('./output-data/profileData.json') as json_file:
        profileData = json.load(json_file)

    return {"Type": "Success", "profileData": profileData}



# Get personalized nudge for the user
@app.route('/api/getNudges', methods = ['GET'])
def getNudges():
    
    with open('./output-data/nudgesData.json') as json_file:
        nudgesData = json.load(json_file)
    return {"Type": "Success", "nudges": nudgesData}


# Get personalized widget details for the user
@app.route('/api/getWidgetDetails', methods = ['GET'])
def getWidgetDetails():
    sampleWidgetDetails = {"widget_name_1": "This widget does ...", "widget_name_2": "This widget does this..."}    
    return {"Type": "Success", "widgetDetails": sampleWidgetDetails}




if __name__ == "__main__":
    app.run(debug=True)


