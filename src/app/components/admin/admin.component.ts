import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { AppService } from "../../app.service";

@Component({
  selector: 'admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css']
})

export class AdminComponent {

  constructor(private route: ActivatedRoute, private appService: AppService) {}

  // Misc attributes
  title = 'Management Page';
  siteName = "Disaster Relief Page";
  lastUpdated = "";

  // Activation attributes
  boolContacts = 1
  boolAdvisories = 1
  boolLocations = 1
  boolPrecaution = 1;

  // Precaution attributes
  precautionVal = "";

  // Contact attributes
  nameVal = "";
  emailVal = "";
  phoneNumVal = "";

  // Location attributes
  locNameVal = "";
  locAddressVal = "";
  locDescVal = "";

  // Advisory attributes
  advisoryMsgVal = "";

  // Entity arrays
  contacts = [];
  locations = [];
  advisories = [];
  precautions = [];

  addContact(){
    this.contacts.push({ name: this.nameVal,
                         phone: this.phoneNumVal,
                         email: this.emailVal });
    this.nameVal = "";
    this.emailVal = "";
    this.phoneNumVal = "";
  }

  removeContact(contact){
    let x = this.contacts.indexOf(contact)
    this.contacts.splice(x, x+1);
  }

  addPrecaution(){
    this.precautions.push({ desc: this.precautionVal });
    this.precautionVal = "";
  }

  removePrecaution(precaution){
    let x = this.precautions.indexOf(precaution);
    this.precautions.splice(x,x+1);
  }

  addLocation(){
    this.locations.push({ address: this.locAddressVal,
                          desc: this.locDescVal,
                          name: this.locNameVal });
    this.locNameVal = "";
    this.locAddressVal = "";
    this.locDescVal = "";
  }

  removeLocation(location){
    let x = this.locations.indexOf(location)
    this.locations.splice(x, x+1);
  }

  addAdvisory(){
    this.advisories.push({ msg: this.advisoryMsgVal });
    this.advisoryMsgVal = "";
  }

  removeAdvisory(advisory){
    let x = this.advisories.indexOf(advisory)
    this.advisories.splice(x, x+1);
  }

  toggleLocations(){
    if(this.boolLocations == 1){
      this.boolLocations = 0;
    }else{
      this.boolLocations = 1;
    }
  }

  toggleContacts(){
    if(this.boolContacts == 1){
      this.boolContacts = 0;
    }else{
      this.boolContacts = 1;
    }
  }

  togglePrecautions(){
    if(this.boolPrecaution == 1){
      this.boolPrecaution = 0;
    }else{
      this.boolPrecaution = 1;
    }
  }

  toggleAdvisories(){
    if(this.boolAdvisories == 1){
      this.boolAdvisories = 0;
    }else{
      this.boolAdvisories = 1;
    }
  }

  sendBoundVariables(){
    this.appService.updateState({"locations":JSON.stringify(this.locations),
                                 "contacts":JSON.stringify(this.contacts),
                                 "advisories":JSON.stringify(this.advisories),
                                 "precautions":JSON.stringify(this.precautions),
                                 "boolContacts":this.boolContacts,
                                 "boolLocations":this.boolLocations,
                                 "boolAdvisories":this.boolAdvisories,
                                 "siteName":this.siteName,
                                 "lastUpdate":new Date()})
  }
}

/*
*todo:
*check boxes that make text boxes clickable 
*entire webpage
*/
