from flask import Flask, jsonify, session, redirect, request
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
apiKey = '476a8e08db7b89d1cdc553faf2'

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
    payloadData = request.json
    
    mobileNumber = str(payloadData["mobileNumber"])
    session['mobileNumber'] = mobileNumber

    vuaId = mobileNumber + "@dashboard-aa-uat"

    trackingId = "mobile-baanking-"+ mobileNumber
    session['trackingId'] = trackingId

    url = "https://hackathon.pirimidtech.com/hackathon/init/redirection"

    payload = json.dumps({
    "vuaId": vuaId,
    "templateType": "ONETIME",
    "trackingId": trackingId,
    "redirectionUrl": "http://localhost:5000"
    })
    headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'API_KEY': apiKey,
    'Cookie': 'JSESSIONID=21CE483BA61DF10D7721EE24312D2544; OAuth_Token_Request_State=750bf628-ba92-4ae5-a635-765c23014ca3'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    responseData = response.json()
    referenceId = responseData["referenceId"]
    session["referenceId"] = referenceId

    return {"Type":"Success", "Message":"Consent Journey Initiated", "Response": response.json()}


# Get the consent/data fetch status
@app.route('/api/checkConsentStatus', methods = ['GET'])
def checkConsentStatus():
    
    url = "https://hackathon.pirimidtech.com/hackathon/consent/status?referenceId=" + session["referenceId"] + "&trackingId=" + session["trackingId"]

    payload={}
    headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'API_KEY': apiKey,
    'Cookie': 'JSESSIONID=21CE483BA61DF10D7721EE24312D2544; OAuth_Token_Request_State=750bf628-ba92-4ae5-a635-765c23014ca3'
    }

    response = requests.request("GET", url, headers=headers, data=payload)

    return {"Type": "Success", "Message":"Status checked successfully", "Response":response.json()}


# Get the FI Data after consent
@app.route('/api/getFIData', methods = ['GET'])
def getFIData():
    
    url = "https://hackathon.pirimidtech.com/hackathon/consent/data/fetch?referenceId=" + session["referenceId"] + "&trackingId=" + session["trackingId"]

    payload={}
    headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'API_KEY': apiKey,
    'Cookie': 'JSESSIONID=21CE483BA61DF10D7721EE24312D2544; OAuth_Token_Request_State=750bf628-ba92-4ae5-a635-765c23014ca3'
    }

    response = requests.request("GET", url, headers=headers, data=payload)
    fiDataRespJsonPath = "./output-data/fiData-" + session["mobileNumber"] + ".json"

    print("mobileNumber:", session["mobileNumber"])

    with open(fiDataRespJsonPath, "w") as outfile:
        json.dump(response.json(), outfile)

    return {"Type": "Success", "Message":"FI Data fetched successfully", "Response":response.json()}


# Get the bank analysis data
@app.route('/api/getBankAnalysisData', methods = ['GET'])
def getBankAnalysisData():
    
    url = "https://hackathon.pirimidtech.com/hackathon/consent/analytics/fetch?referenceId=" + session["referenceId"] + "&trackingId=" + session["trackingId"]

    payload={}
    headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'API_KEY': apiKey,
    'Cookie': 'JSESSIONID=21CE483BA61DF10D7721EE24312D2544; OAuth_Token_Request_State=750bf628-ba92-4ae5-a635-765c23014ca3'
    }

    response = requests.request("GET", url, headers=headers, data=payload)
    bankAnalysisRespJsonPath = "./output-data/bankAnalysisData-" + session["mobileNumber"] + ".json"

    print("mobileNumber:", session["mobileNumber"])

    with open(bankAnalysisRespJsonPath, "w") as outfile:
        json.dump(response.json(), outfile)

    return {"Type": "Success", "Message":"Bank analysis Data fetched successfully", "response":response.json()}



# Get personalized nudge for the user
@app.route('/api/getProfile', methods = ['GET'])
def getProfile():
    payloadData = request.json
    mobileNumber = str(payloadData["mobileNumber"])
    profileJsonPath = './output-data/profileData-' + mobileNumber + '.json'
    with open(profileJsonPath) as json_file:
        profileData = json.load(json_file)

    return {"Type": "Success", "profileData": profileData}



# Get personalized nudge for the user
@app.route('/api/getNudges', methods = ['GET'])
def getNudges():
    payloadData = request.json
    mobileNumber = str(payloadData["mobileNumber"])
    nudgesJsonPath = './output-data/nudgesData-' + mobileNumber + '.json'

    with open(nudgesJsonPath) as json_file:
        nudgesData = json.load(json_file)

    # with open('./output-data/nudgesDataUser2.json') as json_file2:
    #     nudgesDataUser2 = json.load(json_file2)
    
    combinedNudgesData = {
     mobileNumber: nudgesData["nudges"],
    } 

    return {"Type": "Success", "nudges": combinedNudgesData}


# Get personalized widget details for the user
@app.route('/api/getWidgetDetails', methods = ['GET'])
def getWidgetDetails():

    # sampleWidgetDetails = {"widget_name_1": "This widget does ...", "widget_name_2": "This widget does this..."}    
    
    payloadData = request.json
    mobileNumber = str(payloadData["mobileNumber"])
    widgetsJsonPath = './output-data/widgetsData-' + mobileNumber + '.json'

    with open(widgetsJsonPath) as json_file:
        widgetsData = json.load(json_file)
    return {"Type": "Success", "widgetData": widgetsData}


# Get insuranceRecommendation for the user
@app.route('/api/getInsuranceDetails', methods = ['GET'])
def getInsuranceDetails():

    payloadData = request.json
    mobileNumber = str(payloadData["mobileNumber"])
    insuranceRecommendationJsonPath = './output-data/insuranceRecommendationData-' + mobileNumber + '.json'

    with open(insuranceRecommendationJsonPath) as json_file:
        insuranceDetails = json.load(json_file)
    return {"Type": "Success", "insuranceDetails": insuranceDetails}


# Get all accounts (banks and providers accounts fetch)
@app.route('/api/getAllAccounts', methods = ['GET'])
def getAllAccounts():
    payloadData = request.json
    mobileNumber = str(payloadData["mobileNumber"])
    accountDetailsJsonPath = './output-data/accountDetails-' + mobileNumber + '.json'

    with open(accountDetailsJsonPath) as json_file:
        accountDetails = json.load(json_file)
    return {"Type": "Success", "allAccountDetails": accountDetails}


# Get consent details
@app.route('/api/getConsentDetails', methods = ['GET'])
def getConsentDetails():
    payloadData = request.json
    mobileNumber = str(payloadData["mobileNumber"])
    consentDetailsJsonPath = './output-data/consentDetails-' + mobileNumber + '.json'

    with open(consentDetailsJsonPath) as json_file:
        consentDetails = json.load(json_file)
    return {"Type": "Success", "consentDetails": consentDetails}


if __name__ == "__main__":
    app.run(debug=True)


