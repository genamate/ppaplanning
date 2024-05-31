sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    'sap/ui/model/Filter',
    'sap/ui/model/Sorter'
],
    function (Controller, JSONModel, Filter, Sorter) {
        "use strict";

        return Controller.extend("tbspl.ppaplanning.controller.Form1", {
            onInit: function () {
                var aData = [
                    {
                        "Type": "ATL",
                        "executor": "Execution ",
                        "ActivityName": "Radio",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "No. Of Seconds the campaign will run on Radio",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "ATL",
                        "executor": "Execution ",
                        "ActivityName": "Ad Film Creation",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "No. of Ad Films Created",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "ATL",
                        "executor": "Execution ",
                        "ActivityName": "TV (Ad film/Cable / TV-Scroll Branding / L- Shape Branding)",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "No. of Bites/ day | Duration of each Bite | ",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "ATL",
                        "executor": "Execution ",
                        "ActivityName": "Newspaper/Magazine/ Inserts/Advertisement",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "No. of Newspaper/Magazine Ads Planned | No. of Incerts Circulated |",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "ATL",
                        "executor": "Execution ",
                        "ActivityName": "Shop Shutter painting/Branding",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "Area of Shop Shutter Painted (Sq.Ft. or Sq.Mtrs.)",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "ATL",
                        "executor": "Execution ",
                        "ActivityName": "Wall painting",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "Area of Wall Painted (Sq.Ft. or Sq.Mtrs.)",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "ATL",
                        "executor": "Execution ",
                        "ActivityName": "Train Branding",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "No. of Bogies Branded with Duration this Branding will remain there",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "ATL",
                        "executor": "Execution ",
                        "ActivityName": "Bus Q- Shelter Branding",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "No. of Bus Shelters Branded with duration this branding will remain there",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "ATL",
                        "executor": "Execution ",
                        "ActivityName": "Bus / Auto Branding",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "No. of Buses/Autos Branded",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "ATL",
                        "executor": "Execution ",
                        "ActivityName": "Water tank Branding",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "Area of water tank branding (Sq.Ft. or Sq.Mtrs.)",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "ATL",
                        "executor": "Execution ",
                        "ActivityName": "Display standees/ Concept Selling Standees",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "Nos. of standees | No. of dealers provided these standees",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "ATL",
                        "executor": "Execution ",
                        "ActivityName": "Welcome City Campaign - Airport Branding/ Railway Station/ Highway",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "No. of Welcome City Campaigns Run | Duration of Campaign"
                    },
                    {
                        "Type": "BTL",
                        "executor": "Execution ",
                        "ActivityName": "Radio",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "No. Of Seconds the campaign will run on Radio",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "BTL",
                        "executor": "Execution ",
                        "ActivityName": "Ad Film Creation",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "No. of Ad Films Created",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "BTL",
                        "executor": "Execution ",
                        "ActivityName": "TV (Ad film/Cable / TV-Scroll Branding / L- Shape Branding)",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "No. of Bites/ day | Duration of each Bite | ",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "BTL",
                        "executor": "Execution ",
                        "ActivityName": "Newspaper/Magazine/ Inserts/Advertisement",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "No. of Newspaper/Magazine Ads Planned | No. of Incerts Circulated |",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "BTL",
                        "executor": "Execution ",
                        "ActivityName": "Shop Shutter painting/Branding",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "Area of Shop Shutter Painted (Sq.Ft. or Sq.Mtrs.)",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "BTL",
                        "executor": "Execution ",
                        "ActivityName": "Wall painting",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "Area of Wall Painted (Sq.Ft. or Sq.Mtrs.)",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "BTL",
                        "executor": "Execution ",
                        "ActivityName": "Train Branding",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "No. of Bogies Branded with Duration this Branding will remain there",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "BTL",
                        "executor": "Execution ",
                        "ActivityName": "Bus Q- Shelter Branding",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "No. of Bus Shelters Branded with duration this branding will remain there",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "BTL",
                        "executor": "Execution ",
                        "ActivityName": "Bus / Auto Branding",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "No. of Buses/Autos Branded",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "BTL",
                        "executor": "Execution ",
                        "ActivityName": "Water tank Branding",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "Area of water tank branding (Sq.Ft. or Sq.Mtrs.)",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "BTL",
                        "executor": "Execution ",
                        "ActivityName": "Display standees/ Concept Selling Standees",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "Nos. of standees | No. of dealers provided these standees",
                        "activitydetails ": ""
                    },
                    {
                        "Type": "BTL",
                        "executor": "Execution ",
                        "ActivityName": "Welcome City Campaign - Airport Branding/ Railway Station/ Highway",
                        "M1": "₹ 0.00",
                        "M2": "₹ 0.00",
                        "M3": "₹ 0.00",
                        "measure": "",
                        "urban ": "",
                        "semiurban": "",
                        "rural": "",
                        "plantotal": "₹ 0.00",
                        "remCount": "₹ 0.00",
                        "remarks": "No. of Welcome City Campaigns Run | Duration of Campaign"
                    }
                ];

                this.getView().setModel(new JSONModel(aData), "MarketingActivity");
            },

            onTableLoad: function (oEvent) {
                var oTable = oEvent.getSource(),
                    oBinding = oTable.getBinding("items"),
                    sPath,
                    bDescending,
                    vGroup,
                    aGroups = [];

                sPath = "Type";
                bDescending = false;
                vGroup = function (oContext) {
                    var name = oContext.getProperty("Type");
                    return {
                        key: name,
                        text: name
                    };
                };
                aGroups.push(new Sorter(sPath, bDescending, vGroup));
                // apply the selected group settings
                oBinding.sort(aGroups);
            },

            onReview: function() {
                var oView = this.getView();

                oView.byId("ReviewButton").setVisible(false);
                oView.byId("ReviewSection").setVisible(true);
                oView.byId("EditSection_T2").setVisible(false);
                oView.byId("EditSection_T1").setVisible(false);
                oView.byId("SubmitButton").setVisible(true);
                oView.byId("EditButton").setVisible(true);
            },

            onEdit: function() {
                var oView = this.getView();

                oView.byId("ReviewButton").setVisible(true);                
                oView.byId("EditSection_T2").setVisible(true);
                oView.byId("EditSection_T1").setVisible(true);
                oView.byId("ReviewSection").setVisible(false);
                oView.byId("SubmitButton").setVisible(false);
                oView.byId("EditButton").setVisible(false);
            },
        });
    });
