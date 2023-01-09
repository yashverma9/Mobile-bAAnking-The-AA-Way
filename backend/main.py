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

'''
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
'''

@app.route('/api/initiateConsentJourney', methods = ['POST'])
def initiateConsentJourney():
    
    payloadData = request.json
    
    mobileNumber = str(payloadData["mobileNumber"])
    session['mobileNumber'] = mobileNumber

    vuaId = mobileNumber + "@dashboard-aa-uat"

    idDetailsJsonPath = './output-data/idDetails.json'

    with open(idDetailsJsonPath) as json_file:
        idDetails = json.load(json_file)

    trackingId = idDetails[mobileNumber]["trackingId"]
    referenceId = idDetails[mobileNumber]["referenceId"]

    return {"Type":"Success", "Message":"Consent Journey Initiated with following details", "vuaId": vuaId, "trackingId": trackingId, "referenceId": referenceId}


# Get the consent/data fetch status
@app.route('/api/checkConsentStatus/<string:mobileNumber>', methods = ['GET'])
def checkConsentStatus(mobileNumber):

    vuaId = mobileNumber + "@dashboard-aa-uat"
    idDetailsJsonPath = './output-data/idDetails.json'
 
    with open(idDetailsJsonPath) as json_file:
        idDetails = json.load(json_file)

    trackingId = idDetails[mobileNumber]["trackingId"]
    referenceId = idDetails[mobileNumber]["referenceId"]

    url = "https://hackathon.pirimidtech.com/hackathon/consent/status?referenceId=" + referenceId + "&trackingId=" + trackingId

    payload={}
    headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'API_KEY': apiKey,
    'Cookie': 'JSESSIONID=21CE483BA61DF10D7721EE24312D2544; OAuth_Token_Request_State=750bf628-ba92-4ae5-a635-765c23014ca3'
    }

    response = requests.request("GET", url, headers=headers, data=payload)

    return {"Type": "Success", "Message":"Status checked successfully", "Response":response.json(), "vuaId": vuaId}


# Get the FI Data after consent
@app.route('/api/getFIData/<string:mobileNumber>', methods = ['GET'])
def getFIData(mobileNumber):

    vuaId = mobileNumber + "@dashboard-aa-uat"
    idDetailsJsonPath = './output-data/idDetails.json'
 
    with open(idDetailsJsonPath) as json_file:
        idDetails = json.load(json_file)

    trackingId = idDetails[mobileNumber]["trackingId"]
    referenceId = idDetails[mobileNumber]["referenceId"]
    
    url = "https://hackathon.pirimidtech.com/hackathon/consent/data/fetch?referenceId=" + referenceId + "&trackingId=" + trackingId

    payload={}
    headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'API_KEY': apiKey,
    'Cookie': 'JSESSIONID=21CE483BA61DF10D7721EE24312D2544; OAuth_Token_Request_State=750bf628-ba92-4ae5-a635-765c23014ca3'
    }

    response = requests.request("GET", url, headers=headers, data=payload)
    fiDataRespJsonPath = "./output-data/fiData-" + mobileNumber + ".json"

    with open(fiDataRespJsonPath, "w") as outfile:
        json.dump(response.json(), outfile)

    return {"Type": "Success", "Message":"FI Data fetched successfully", "Response":response.json(), "vuaId": vuaId}


# Get the bank analysis data
@app.route('/api/getBankAnalysisData/<string:mobileNumber>', methods = ['GET'])
def getBankAnalysisData(mobileNumber):
    
    vuaId = mobileNumber + "@dashboard-aa-uat"
    idDetailsJsonPath = './output-data/idDetails.json'
 
    with open(idDetailsJsonPath) as json_file:
        idDetails = json.load(json_file)

    trackingId = idDetails[mobileNumber]["trackingId"]
    referenceId = idDetails[mobileNumber]["referenceId"]

    url = "https://hackathon.pirimidtech.com/hackathon/consent/analytics/fetch?referenceId=" + referenceId + "&trackingId=" + trackingId

    payload={}
    headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'API_KEY': apiKey,
    'Cookie': 'JSESSIONID=21CE483BA61DF10D7721EE24312D2544; OAuth_Token_Request_State=750bf628-ba92-4ae5-a635-765c23014ca3'
    }

    response = requests.request("GET", url, headers=headers, data=payload)
    bankAnalysisRespJsonPath = "./output-data/bankAnalysisData-" + mobileNumber + ".json"

    with open(bankAnalysisRespJsonPath, "w") as outfile:
        json.dump(response.json(), outfile)

    return {"Type": "Success", "Message":"Bank analysis Data fetched successfully", "response":response.json(), "vuaId": vuaId}



# Get personalized nudge for the user
@app.route('/api/getProfile/<string:mobileNumber>', methods = ['GET'])
def getProfile(mobileNumber):
    
    profileJsonPath = './output-data/profileData-' + mobileNumber + '.json'
    with open(profileJsonPath) as json_file:
        profileData = json.load(json_file)

    return {"Type": "Success", "profileData": profileData}



# Get personalized nudge for the user
@app.route('/api/getNudges/<string:mobileNumber>', methods = ['GET'])
def getNudges(mobileNumber):
    
    nudgesJsonPath = './output-data/nudgesData-' + mobileNumber + '.json'

    with open(nudgesJsonPath) as json_file:
        nudgesData = json.load(json_file)

    # with open('./output-data/nudgesDataUser2.json') as json_file2:
    #     nudgesDataUser2 = json.load(json_file2)
    
    combinedNudgesData = {
     "data": nudgesData["nudges"],
    } 

    return {"Type": "Success", "nudges": combinedNudgesData}


# Get personalized widget details for the user
@app.route('/api/getWidgetDetails/<string:mobileNumber>', methods = ['GET'])
def getWidgetDetails(mobileNumber):

    widgetsJsonPath = './output-data/widgetsData-' + mobileNumber + '.json'

    with open(widgetsJsonPath) as json_file:
        widgetsData = json.load(json_file)
    return {"Type": "Success", "widgetData": widgetsData}


# Get insuranceRecommendation for the user
@app.route('/api/getInsuranceDetails/<string:mobileNumber>', methods = ['GET'])
def getInsuranceDetails(mobileNumber):
    try:
        insuranceRecommendationJsonPath = './output-data/insuranceRecommendationData-' + mobileNumber + '.json'

        with open(insuranceRecommendationJsonPath) as json_file:
            insuranceDetails = json.load(json_file)
        return {"Type": "Success", "insuranceDetails": insuranceDetails}
    
    except Exception as e:
        return {"Type":"Success", "Message":"No data for this user", "insuranceDetails": {}}

# Get all accounts (banks and providers accounts fetch)
@app.route('/api/getAllAccounts/<string:mobileNumber>', methods = ['GET'])
def getAllAccounts(mobileNumber):

    accountDetailsJsonPath = './output-data/accountDetails-' + mobileNumber + '.json'

    with open(accountDetailsJsonPath) as json_file:
        accountDetails = json.load(json_file)
    return {"Type": "Success", "allAccountDetails": accountDetails}


# Get consent details
@app.route('/api/getConsentDetails/<string:mobileNumber>', methods = ['GET'])
def getConsentDetails(mobileNumber):

    consentDetailsJsonPath = './output-data/consentDetails-' + mobileNumber + '.json'

    with open(consentDetailsJsonPath) as json_file:
        consentDetails = json.load(json_file)
    return {"Type": "Success", "consentDetails": consentDetails}


if __name__ == "__main__":
    app.run(debug=True)


