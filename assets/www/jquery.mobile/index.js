//console.dir("asdj")
//window.MyToast.lng('Long Toast');
//window.MyToast.srt('Short Toast');
    var db;
    var msg="";
    var insert_sq;
    var cros;
    var noteId;
    var login;
    var vall=new Array();
    var str=new Array();
    var cross_num;
    db = window.openDatabase("SQL", 3, "PhoneGap Demo", 200000);
    // Wait for PhoneGap to load
     
  function device_ready() {
      document.addEventListener("deviceready", onDeviceReady, false);
}
 
   //onDeviceReady()
    // Populate the database 
    //
    function populateDB(tx) {
    
        var cross_sql="CREATE TABLE IF NOT EXISTS Master_Crossing ("+
        "cross_id          INT IDENTITY(1,1)       NOT NULL,"+
        "cross_number      VARCHAR(255)  NOT NULL,"+
        "cross_status      VARCHAR(50)   NOT NULL,"+    
        "message           VARCHAR(255)  NULL,"+
        "cross_Latitude    DOUBLE        NULL,"+
        "cross_Longitude   DOUBLE        NULL,"+
        "PRIMARY KEY ( cross_id ) )";
       
        
   var sql_1="Crossing_Details("+
   
   "cross_id                                            INT                      NULL,"+
   "general_rail_road_company                           VARCHAR(255)             NULL,"+
   "general_rail_road_milepost                          DOUBLE                   NULL,"+
   "general_adjacent_crossing_Number                    INT                      NULL,"+
   "general_County                                      VARCHAR(255)             NULL,"+
   "general_City                                        VARCHAR(255)             NULL,"+
   "general_ENS_Sign_Present                            BOOLEAN                  NULL,"+
   "general_Crossing_Number_Posted                      BOOLEAN                  NULL,"+
   "general_ENS_Sign_Image                              VARCHAR(255)             NULL,"+
   "general_Number_Posted_Image                         VARCHAR(255)             NULL,"+
   "general_US_Route_Number                             VARCHAR(255)             NULL,"+
   "general_State_Route_Number                          VARCHAR(255)             NULL,"+
   "general_County_Route_Number                         VARCHAR(255)             NULL,"+
   "general_Local_Street_Name                           VARCHAR(255)             NULL,"+
   "general_RR_Local_Street_Name                        VARCHAR(255)             NULL,"+
   "general_Crossing_Status                             VARCHAR(255)             NULL,"+
   "general_Crossing_Type                               VARCHAR(255)             NULL,"+
   "general_Public_Access                               BOOLEAN                  NULL,"+
   "general_Is_Crossing_Blocked                         BOOLEAN                  NULL,"+
   "general_Blocked_by                                  VARCHAR(50)              NULL,"+
   "general_Purpose                                     VARCHAR(50)              NULL,"+
   "general_Position                                    VARCHAR(50)              NULL,"+
   
   "Railroad_Main_Line_Tracks                           INT                      NULL,"+
   "Railroad_Other_Tracks                               INT                      NULL,"+
   "Railroad_Is_Siding                                  BOOLEAN                  NULL,"+
   "Railroad_Is_Industry                                BOOLEAN                  NULL,"+
   "Railroad_Is_Wye                                     BOOLEAN                  NULL,"+
   "Railroad_Is_Storage                                 BOOLEAN                  NULL,"+
   "Railroad_Is_Spur_or_Lead                            BOOLEAN                  NULL,"+
   "Railroad_Is_RR_Yard                                 BOOLEAN                  NULL,"+
   "Railroad_Is_Transit                                 BOOLEAN                  NULL,"+
   "Railroad_Are_Train_Signals_Visible                  BOOLEAN                  NULL,"+   
   
   "Road_Street_type                                    VARCHAR(50)              NULL,"+
   "Road_Thru_Lanes_Crossing_Tracks                     INT                      NULL,"+
   "Road_Aux_Lanes_Crossing_Tracks                      INT                      NULL,"+
   "Road_Posted_Speed_Limit                             INT                      NULL,"+
   "Road_Track_Parallel_To_Street                       BOOLEAN                  NULL,"+
   "Road_Is_Roadway_Paved                               BOOLEAN                  NULL,"+
   "Road_Pavement_Material                              VARCHAR(50)              NULL,"+
   "Road_Median_Channelization                          VARCHAR(50)              NULL,"+
   "Road_Channelization_Device                          VARCHAR(50)              NULL,"+
   "Road_Sidewalk_Approach_Crossing                     BOOLEAN                  NULL,"+
   "Road_Sidewalk_Cross_track                           BOOLEAN                  NULL,"+
   "Road_MainLine_Crossing_Surface                      VARCHAR(50)              NULL,"+
   "Road_Surface_Width                                  DOUBLE                   NULL,"+
   "Road_Surface_Length                                 DOUBLE                   NULL,"+
   "Road_Approach_Leave_Condition                       VARCHAR(50)              NULL,"+
   "Road_Vehicle_Reaction                               VARCHAR(50)              NULL,"+
   "Road_Driver_Reaction                                VARCHAR(50)              NULL,"+
   "Road_Rail_Pad_Movement                              VARCHAR(50)              NULL,"+
   "Road_Pavement_Markings                              VARCHAR(50)               NULL,"+
   
   "signs_Number_Mounted_signs_Bucks                    INT                      NULL,"+
   "signs_Total_Number_signs_Bucks_Signs                INT                      NULL,"+
   "signs_Number_of_Stop_Signs                          INT                      NULL,"+
   "signs_Number_of_Yield_Signs                         INT                      NULL,"+
   "signs_Road_Closed                                   INT                      NULL,"+
   "signs_Number_of_Tracks_R15                          INT                      NULL,"+
   "signs_Private_Crossing_Signs_Present                BOOLEAN                  NULL,"+
   "signs_Number_of_Private_Crossing_Signs              INT                      NULL,"+
   "signs_Trespass_Signs_Present                        BOOLEAN                  NULL,"+
   "signs_Number_Low_Ground_Clearance_Signs             INT                      NULL,"+
   "signs_Exempt_R15_3_Sign_Present                     BOOLEAN                  NULL,"+
   "signs_LED_Enhanced_Crossing_warning                 INT                      NULL,"+
   "signs_Do_Not_Stop_on_Tracks_R8_8                    INT                      NULL,"+
   "signs_Do_Not_Stop_on_Tracks_with_Beacon             INT                      NULL,"+
   "signs_Track_out_of_Service_R8_9                     INT                      NULL,"+
   "signs_Stop_here_When_Flashing_R_8_10                INT                      NULL,"+
   "signs_Stop_here_When_Flashing_R_8_10a               INT                      NULL,"+
   "signs_Stop_here_On_Red_R10_6                        INT                      NULL,"+
   "signs_Stop_here_On_Red_R10_6a                       INT                      NULL,"+
   "signs_Advanced_Warning_W_10_1                       INT                      NULL,"+
   "signs_Amber_Beacons_on_Advanced_Warning_W_10_1      INT                      NULL,"+
   "signs_Advanced_Warning_W_10_2                       INT                      NULL,"+  
   "signs_Advanced_Warning_W_10_3                       INT                      NULL,"+ 
   "signs_Advanced_Warning_W_10_4                       INT                      NULL,"+ 
   "signs_Advanced_Warning_W_10_11                      INT                      NULL, "+
   "signs_Advanced_Warning_W_10_12                      INT                      NULL,"+ 
   "signs_No_Right_Turn_Across_Tracks_R3_1a             INT                      NULL,"+   
   "signs_No_Right_Turn_Across_Tracks_R3_2a             INT                      NULL,"+
   "signs_No_Motorized_Vehicle_on_Tracks_R15_6          INT                      NULL,"+
   "signs_Do_not_Drive_On_on_Tracks_R15_6a              INT                      NULL,"+
   "signs_Light_Rail_Divided_Highway_R15_7              INT                      NULL,"+
   "signs_Light_Rail_Divided_Highway_R15_7a             INT                      NULL,"+
   "signs_Look_R_15_8                                   INT                      NULL,"+
   "signs_Look_Out_for_Cars                             INT                      NULL,"+
   "signs_BUMP_W_8_1                                    INT                      NULL,"+
   "signs_Trains_May_Exceed_80_MPH_W_10_8               INT                      NULL,"+
   "signs_No_Train_Horn_W_10_9                          INT                      NULL,"+
   "signs_No_Train_Horn_Plaque_W_10_9a                  INT                      NULL,"+
   "signs_Between_Tracks_and_Highway_W_10_11a           INT                      NULL,"+
   "signs_Between_Highway_and_Tracks_10_11b             INT                      NULL,"+
   "signs_Not_Gates_or_Lights_Plaque_W_10_13p           INT                      NULL,"+
   "signs_Next_Crossing_Plaque_W_10_14p                 INT                      NULL,"+
   "signs_Use_Next_Crossing_Plaque_W_10_14ap            INT                      NULL,"+    
   "signs_Rought_Crossing_Plaque_W_10_15P               INT                      NULL,"+
   "signs_Slow_Signs                                    INT                      NULL,"+   
   
   "gates_Number_of_Bells                               INT                      NULL,"+
   "gates_Posts_with_Flashing_Lights                    INT                      NULL,"+
   "gates_has_Incandescent_Lights                       BOOLEAN                  NULL,"+
   "gates_has_Led                                       BOOLEAN                  NULL,"+
   "gates_has_Backlights                                BOOLEAN                  NULL,"+
   "gates_Cantilevers_over_Trafic                       INT                      NULL,"+
   "gates_Cantilevers_NOT_over_Trafic                   INT                      NULL,"+
   "gates_Type_of_cantilver_Flashing_Lights             CHAR(1)                  NULL,"+
   "gates_Number_of_Flashing_Pairs                      INT                      NULL,"+
   "gates_Number_8_Incandescent_Signal_Pairs            INT                      NULL,"+
   "gates_Number_12_Incandescent_Signal_Pairs           INT                      NULL,"+
   "gates_Number_12_Led_Signal_Pairs                    INT                      NULL,"+
   "gates_Traffic_Signal_Controlling                    BOOLEAN                  NULL,"+
   "gates_Traffic_Pre_Signals_Present                   BOOLEAN                  NULL,"+
   "gates_Number_of_Traffic_Pre_Signals                 INT                      NULL,"+
   "gates_Traffic_Pre_Signal_Storage_Distance           INT                      NULL,"+
   "gates_Traffic_Pre_Signal_Stop_Distance              INT                      NULL,"+
   "gates_Total_Number_of_Roadway_Gates                 INT                      NULL,"+
   "gates_Total_Number_of_Pedestrian_Gates              INT                      NULL,"+
   "gates_Gate_Config_Quad                              INT                      NULL,"+
   "gates_Gate_Config_Full                              INT                      NULL,"+
   "gates_has_Median_Gates                              BOOLEAN                  NULL,"+  
   
   "vicinity_Predominant_Landuse                        VARCHAR(50)              NULL,"+
   "vicinity_Number_of_Intersecting_500                 INT                      NULL,"+
   "vicinity_Distance_to_Intersecting_One_Side          INT                      NULL,"+
   "vicinity_Distance_to_Intersecting_Other_Side        INT                      NULL,"+
   "vicinity_Trafic_Signals_within_500                  BOOLEAN                  NULL,"+
   "vicinity_Driveway_within_100                        BOOLEAN                  NULL,"+
   "vicinity_Is_Crossing_Illuminated                    BOOLEAN                  NULL,"+
   "vicinity_Is_Commercial_Power_within_500             BOOLEAN                  NULL,"+
   "vicinity_Is_Alternate_Power_within_500              BOOLEAN                  NULL,"+
   "vicinity_Do_Vehicles_queue_across_the_track         BOOLEAN                  NULL,"+  
   
   "comments_Commercial_Trucks_Present                  BOOLEAN                  NULL,"+
   "comments_HAZMAT_Trucks_Present                      BOOLEAN                  NULL,"+
   "comments_School_Busses_Present                      BOOLEAN                  NULL,"+
   "comments_Emergency_Vehicle_Present                  BOOLEAN                  NULL,"+
   "comments_Comment_for_FDOT                           VARCHAR(255)             NULL,"+
   
   "Photos_ensUsDotImage								VARCHAR(255)			 NULL,"+
   "Photos_railroadDirection2SupplementalImage			VARCHAR(255)			 NULL,"+
   "Photos_roadwayDirection1Image						VARCHAR(255)		 	 NULL,"+
   "Photos_roadwayDirection2Image						VARCHAR(255)			 NULL,"+
   "Photos_roadwayDirection1SupplementalImage			VARCHAR(255)			 NULL,"+
   "Photos_roadwayDirection2SupplementalImage			VARCHAR(255)			 NULL,"+
   "Photos_railroadDirection1Image						VARCHAR(255)			 NULL,"+
   "Photos_railroadDirection2Image						VARCHAR(255)			 NULL,"+
   "Photos_railroadDirection1SupplementalImage			VARCHAR(255)			 NULL,"+
   
   "Photos_crossingSurfaceDirection2Image				VARCHAR(255)			 NULL,"+
   "Photos_crossingSurfaceDirection1Image				VARCHAR(255)			 NULL,"+
   "Photos_cabinetImage									VARCHAR(255)			 NULL,"+
   "Photos_additionalImages								VARCHAR(255)			 NULL,"+
   
   "PRIMARY KEY  (cross_id))";
      
       tx.executeSql("SELECT COUNT(*) as Count FROM sqlite_Master where type='table'" ,[],function(tx,results1) {
          
   if(results1.rows.item(0).Count < 4){
         
       tx.executeSql('CREATE TABLE IF NOT EXISTS LOGIN (id unique, user string,password string ,userId string)');
       tx.executeSql("INSERT INTO LOGIN VALUES (1, 'flarhci@gmail.com','test','e129b216-ad8e-4cee-b7b1-e5894dbfa5d9')");
       tx.executeSql("INSERT INTO LOGIN VALUES (2, 'admin','admin','e129b216-ad8e-4cee-b7b1-e5894dbfa5d9')");
           tx.executeSql('DROP TABLE IF EXISTS Master_Crossing');
           tx.executeSql('DROP TABLE IF EXISTS Crossing_Details');
           console.log('Static Queries Running');
           tx.executeSql(cross_sql);
           tx.executeSql("CREATE TABLE IF NOT EXISTS "+sql_1);
           
            console.log('Syntatic Insertion Completed');
            
       
           
           var lan=new Array();
           var id_data=new Array();
         
           lan=[[-0.12833833694479024,51.49960661871536],[-0.14305830001890846,51.50179725022855],[-0.14305830001890846,51.50179725022855],[-0.14305830001890846,51.50179725022855],[-0.14305830001890846,51.50179725022855],[-0.14305830001890846,51.50179725022855],[-0.14305830001890846,51.50179725022855]];
          
           $.ajax({
               url: 'http://dev.dtsagile.com/rhci/api/crossingsummaries/e129b216-ad8e-4cee-b7b1-e5894dbfa5d9',
               dataType: 'json',
               async: false,
               cache: false,
               timeout: 90000,
               success: function(data, status){
                   $.each(data, function(i,data){
                       id_data[i]=data.id;
                         
                       if (data.status=='Assigned') {
                           state="Awaiting Inspection";
                       }
                       
                       tx.executeSql("INSERT OR REPLACE INTO Master_Crossing  (cross_id ,cross_number ,cross_status , Message ,cross_Latitude ,cross_Longitude) values (?,?,?,?,?,?)",[data.id,data.id+"-"+data.streetName,state, data.message,lan[i][0],lan[i][1]]);
                      
                   });
                   
                
                             },
                            error: function (xmlHttpRequest, textStatus, errorThrown) {
                         if (xmlHttpRequest.readyState == 0 || xmlHttpRequest.status == 0)
                             return;
                         else{
                             
                             alert('ErrorNaren' + textStatus);
                             
                         }
                     }
                     
            }); 
           for(var j=0;j<id_data.length;j++){
             
               $.ajax({
                   url: 'http://dev.dtsagile.com/rhci/api/crossingdetails/'+id_data[j],
                   dataType: 'json',
                   async: false,
                   cache: false,
                   timeout: 90000,
                   success: function(data, status){
                       tx.executeSql("INSERT OR REPLACE INTO Crossing_Details VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[data.crossing.id,
                        data.crossing.operatingCompanyId,
                        data.crossing.milepost,
                        data.crossing.adjacentUsDotRrxId,
                        data.crossing.countyId,
                        data.crossing.cityId,
                        data.crossing.hasEnsSign,
                        data.crossing.hasRrxNumberPosted,
                        data.crossing.ensUsDotImage,
                        null,
                        data.crossing.usRoute,
                        data.crossing.stateRoad,
                        data.crossing.countyRoute,
                        data.crossing.streetName,
                        data.crossing.railroadLocalStreetName,
                        data.crossing.crossingStatusId,
                        data.crossing.crossingTypeId,
                        data.crossing.privateCrossingHasPublicAccessId,
                        data.crossing.isCrossingBlocked,
                        data.crossing.crossingBlockedTypeId,
                        data.crossing.crossingPurposeId,
                        data.crossing.crossingPositionId,
                        
                        
                        data.crossing.mainlineRrTracksCount,
                        data.crossing.otherRrTracksCount,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        data.crossing.trainSignalsVisible,
                        
                        
                        data.crossing.streetTypeId,
                        data.crossing.trafficThruLaneCount,
                        data.crossing.auxLaneCount,
                        data.crossing.postedSpeedLimit,
                        data.crossing.trackRunsParallelToStreet,
                        data.crossing.IsApproachRoadwayPaved,
                        data.crossing.pavementMaterialTypeId,
                        null,
                        data.crossing.presenceOfApproachMedianBarriersId,
                        data.crossing.hasApproachingSidewalk,
                        data.crossing.sidewalkCrossesRrTracksId,
                        data.crossing.crossingSurfaceTypes,
                        data.crossing.crossingSurfaceWidth,
                        data.crossing.crossingSurfaceLength,
                        data.crossing.crossingApproachConditionId,
                        data.crossing.crossingApproachVehicleReactionTypeId,
                        data.crossing.crossingApproachDriverReactionTypeId,
                        data.crossing.crossingApproachPadMovementTypeId,
                        data.crossing.pavementMarkingsTypeId,
                        
                        
                        
                        data.crossing.mastMountedCrossbuckSignCount,
                        data.crossing.crossbuckSignCount,
                        data.crossing.stopSignCount,
                        data.crossing.yieldSignsCount,
                        data.crossing.signR112Count,
                        data.crossing.signR152PCount,
                        data.crossing.hasPrivateCrossingSigns,
                        data.crossing.signPrivateCount,
                        data.crossing.hasTrespassSignsPosted,
                        data.crossing.signW105Count,
                        data.crossing.hasExemptSign,
                        data.crossing.ledEnhancedSignCount,
                        data.crossing.SignR88Count,
                        data.crossing.doNotStopSignCount,
                        data.crossing.signR89Count,
                        data.crossing.signR810Count,
                        data.crossing.signR810aCount,
                        data.crossing.signR106Count,
                        data.crossing.signR106aCount,
                        data.crossing.signW101Count,
                        data.crossing.trafficSignalSignCount,
                        data.crossing.signW102Count,
                        data.crossing.signW103Count,
                        data.crossing.signW104Count,
                        data.crossing.signW1011Count,
                        data.crossing.signW1012Count,
                        data.crossing.signR31aCount,
                        data.crossing.signR32aCount,
                        data.crossing.signR156Count,
                        data.crossing.signR156aCount,
                        data.crossing.signR157Count,
                        data.crossing.signR157aCount,
                        data.crossing.signR158Count,
                        data.crossing.lookoutForCarsSignCount,
                        data.crossing.signW81Count,
                        data.crossing.signW108Count,
                        data.crossing.signW109Count,
                        data.crossing.signW109PCount,
                        data.crossing.signW1011aCount,
                        data.crossing.signW1011bCount,
                        data.crossing.signW1013PCount,
                        data.crossing.signW1014PCount,
                        data.crossing.signW1014aPCount,
                        data.crossing.signW1015PCount,
                        data.crossing.slowSignCount,
                        
                        
                        
                        data.crossing.trainWarningBellCount,
                        data.crossing.postLightCount,
                        null,
                        null,
                        null,
                        data.crossing.flashingLightsOnCantileverOverTrafficCount,
                        data.crossing.flashingLightsOnCantileverNotOverTrafficCount,
                        data.crossing.cantileverLightTypes,
                        data.crossing.flashingLightPairCount,
                        data.crossing.signalHead8InchIncandescentCount,
                        data.crossing.signalHead12InchIncandescentCount,
                        data.crossing.signalHeadLedCount,
                        data.crossing.hasControllingTrafficSignals,
                        data.crossing.hasTrafficPreSignals,
                        data.crossing.trafficPreSignalsCount,
                        data.crossing.trafficPreSignalsStorageDistance,
                        data.crossing.trafficPreSignalsStopLineDistance,
                        data.crossing.roadwayGatesCount,
                        data.crossing.pedestrianGateCount,
                        null,
                        null,
                        null,
                        
                        
                        
                        data.crossing.landUseTypeId,
                        data.crossing.intersectingRoadwaysCount,
                        data.crossing.distanceToIntersectingRoadway,
                        data.crossing.distanceToSecondIntersectingRoadway,
                        data.crossing.hasSignalizationId,
                        data.crossing.hasPrivateDriveway,
                        data.crossing.hasStreetLights,
                        data.crossing.hasCommercialPower,
                        data.crossing.hasAlternatePowerSource,
                        data.crossing.vehiclesQueueAcrossTrackId,
                        
                        data.crossing.percentTrucksCrossing,
                        data.crossing.hazmatVehicles,
                        data.crossing.schoolBusesPresent,
                        data.crossing.isEmergencyServicesRoute,
                        data.crossing.stUse3Txt,
                        
                        data.crossing.ensUsDotImage,
                        data.crossing.railroadDirection2SupplementalImage,
                        data.crossing.roadwayDirection1Image,
                        data.crossing.roadwayDirection2Image,
                        data.crossing.roadwayDirection1SupplementalImage,
                        data.crossing.roadwayDirection2SupplementalImage,
                        data.crossing.railroadDirection1Image,
                        data.crossing.railroadDirection2Image,
                        data.crossing.railroadDirection1SupplementalImage,
                        
                        data.crossing.crossingSurfaceDirection1Image,
                        data.crossing.crossingSurfaceDirection2Image,
                        data.crossing.cabinetImage,
                        data.crossing.additionalImages]);
                      console.log(data.crossing.id);
                   }
               });
           }
           
}
   
 
              
                   }, errorCB);
       
    }
  // Query the database
    //
    function queryDB(tx) {
       
     tx.executeSql("SELECT COUNT(*) as count FROM Master_Crossing", [],function Query_Success(tx1, results1){
        
         if (results1.rows.item(0).count) {
             
             tx1.executeSql("SELECT * FROM Master_Crossing", [], QuerySuccess, errorCB);
        }
         
     }, errorCB);
    
    }
   
    
 function QuerySuccess(tx, results) {

        var len = results.rows.length;
        
        var s = "";
        
        for (var i=0; i<len; i++){
            
          var check=(results.rows.item(i).cross_status == "REVISIT REQUIRED");
          
          msg="";
          if(check==true)
          {
        
            msg="Message:"+results.rows.item(i).message;
            }
          vall[i+1]=results.rows.item(i).cross_number;
          data=results.rows.item(i).cross_id;
           s += "<li data-theme='B' class='color_coding' id='i"+results.rows.item(i).cross_id+"' ><a id='"+results.rows.item(i).cross_id+"' class='slide_effect' data-ajax='false' href='data.html' onclick='session(this.id)' data-transition='slide' ><input type='hidden' id='l1"+results.rows.item(i).cross_id+"' value='"+results.rows.item(i).cross_number+"'/>" + results.rows.item(i).cross_number + "<p  class='a_bold' class='ui-li-desc'>Status:"+results.rows.item(i).cross_status+"   "+msg+"</p></a></li>";
         
           
        }
        
       
        $("#noteTitleList").html(s);
        
        $("li.color_coding").css({"text-shadow":"none",
        "border":"1px solid gray",
        "font-weight":"bold"});
        $(".a_bold").css({"font-weight":"bold","margin-top":"10px"});
        $(".ui-li-desc").css({"margin-top":"10px"});
        for (var i=0; i<len; i++){
        var status=results.rows.item(i).cross_status;
        switch(status){
        case "REVISIT REQUIRED":
                $("#i"+results.rows.item(i).cross_id).addClass("revisit-required");
                break;
        case "Inspection Complete":
                $("#i"+results.rows.item(i).cross_id).addClass("inspection-complete");
                break;
        case "Inspection In-Progress":
                $("#i"+results.rows.item(i).cross_id).addClass("inspection-pending");
                break;
        case "Awaiting Inspection":
                $("#i"+results.rows.item(i).cross_id).addClass("awaiting-inspection");
                break;
       }
       }
       $("#noteTitleList").listview("refresh");
       $("#login_data").html("<span style='float:right;margin-right:40px'>Logged in as "+localStorage.user+"</span>");
   
       return true;             
    }
 
function session(cross_id) {
    //Get id dynamic
    sessionStorage.id=cross_id;
   
}

    // Transaction error callback
    //
    function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
    }
    // Transaction success callback
    //
    
    
    function successCB() {
      console.log("*************Sqlite is successfully called*********") ;
        
    }
   
function list() {
    
    db.transaction(queryDB, errorCB, successCB);
    
  return;
}


    // PhoneGap is ready
    //
    
    function onDeviceReady() {
        //document.addEventListener("backbutton", onBackKeyDown, false);
        console.log("We got device ready");
        
        db.transaction(populateDB, errorCB, successCB);
        

        

    }
    
    function onBackKeyDown() {
        alert('its fine');
        // Handle the back button
    }
    
    
    function renderEntries(tx,results){
    
                    if(results.rows.item(0).UserCount > 0)
                        {
                        login=$('#user').val();
                       
                        localStorage.user=login;
//                        $.mobile.changePage('process.html', {
//                            
//                            /*transition: "slidefade",*/
//                            transition: "slide",
//                            changeHash: false
//                        });
                      window.location.href='process.html';
                        }
                    else
                    {
                        alert("Invalid UserId or Password");
                        
                    }
                    
       return;               
    }
    
    $("#homePage").live("pageshow", function(e,ui) {
       
       list();
        
    });
    
   

$("#general").live("pageshow", function(e,ui) {
    
    $(".ui-loader").css({"display": "none" });
    
    var notes;
        //get the location - it is a hash - got to be a better way
        
            noteId = sessionStorage.id;
           
            
            
            db.transaction(
                function(tx) {
                
                    var sql_gen="cross_id,"+                                             
                    "general_rail_road_company ,"+                           
                    "general_rail_road_milepost  ,"+                         
                    "general_adjacent_crossing_Number ,"+                    
                    "general_County    ,"+                                   
                    "general_City   ,"+                                      
                    "general_ENS_Sign_Present  ,"+                           
                    "general_Crossing_Number_Posted  ,"+                     
                    "general_ENS_Sign_Image   ,"+                            
                    "general_Number_Posted_Image    ,"+                      
                    "general_US_Route_Number    ,"+                          
                    "general_State_Route_Number      ,"+                     
                    "general_County_Route_Number    ,"+                      
                    "general_Local_Street_Name     ,"+                       
                    "general_RR_Local_Street_Name   ,"+                      
                    "general_Crossing_Status      ,"+                        
                    "general_Crossing_Type       ,"+                         
                    "general_Public_Access       ,"+                         
                    "general_Is_Crossing_Blocked   ,"+                       
                    "general_Blocked_by          ,"+                         
                    "general_Purpose       ,"+                               
                    "general_Position,comments_Comment_for_FDOT " ;
                    
                   tx.executeSql("SELECT "+sql_gen+" FROM Crossing_Details where cross_id='"+noteId+"'" ,[],function(tx,results) {
                       
                            notes=results.rows.item(0).cross_id;                                                       
                          
                    Crossing="<div class='right_travel'>Crossing :"+notes+"</div>"+
                               "<input id='note_id' type='hidden' value='"+notes+"'>";
                    var s1="<table>"+
                            "<tr>"+
                            "<td>Crossing Number :</td><td>"+notes+"</td><td><a href='#' id='dialoglink'  data-role='button'>FLAG</a></td></tr>"+
                            "<tr><td>Railrod Company :</td><td>"+results.rows.item(0).general_rail_road_company+"</td></tr>"+
                            "<tr><td>Railroad Milepost :</td><td>"+results.rows.item(0).general_rail_road_milepost+"</td></tr>"+
                            "<tr><td>Adjacent Crossing Number :</td><td>"+results.rows.item(0).general_adjacent_crossing_Number+"</td></tr>"+
                            "<tr><td>Country :</td><td>"+results.rows.item(0).general_County+"</td></tr>"+
                            "<tr><td>City :</td><td>"+results.rows.item(0).general_City+"</td></tr>"+
                            "</table>"+
                            "<div  style='float: left; width: 200px; height: 200px; margin-top: 20px;'>"+
                            "<img align='left'  width='200' height='150' src='stylesheets/images/"+results.rows.item(0).general_ENS_Sign_Image+"' alt='image' ></div>"+
                            "<div style='float: right; width: 200px; height: 200px; margin-top: 20px;'>"+
                            "<img  align='right' width='200' height='150' src='stylesheets/images/"+results.rows.item(0).general_Number_Posted_Image+"' alt='image' ></div></div>";
                    
                    $("#Genaral_data").html(s1);
                    
                    $("#Crossing").html(Crossing);
                    
                    Show_general("ENSSignPresent",results.rows.item(0).general_ENS_Sign_Present);
                    Show_general("CrossingNumberPosted",results.rows.item(0).general_Crossing_Number_Posted);
                    Show_general1("PublicAccess",results.rows.item(0).general_Public_Access);
                    Show_general1("IsCrossingBlocked",results.rows.item(0).general_Is_Crossing_Blocked);
                    //Show_general1("PublicAccess",results.rows.item(0).general_Public_Access);
//                  
                  
                        document.getElementById('CrossingStatus').value=results.rows.item(0).general_Crossing_Status;
                        $("#CrossingStatus").selectmenu('refresh');
                   
                   document.getElementById('BlockedBy').value=results.rows.item(0).general_Blocked_by;
                   
                        $("#BlockedBy").selectmenu('refresh');
                  
                    Show_general_pur("CrossingType",results.rows.item(0).general_Crossing_Type);
                    Show_general_pur("CrossingPurpose",results.rows.item(0).general_Purpose);
                    Show_general_pur("CrossingPosition",results.rows.item(0).general_Position);
        
                    
                    $("#USRouteNumber").val(results.rows.item(0).general_US_Route_Number);
                    $("#State_name").val(results.rows.item(0).general_State_Route_Number);
                    $("#Country_name").val(results.rows.item(0).general_County_Route_Number);
                    $("#Local_name").val(results.rows.item(0).general_Local_Street_Name);
                    $("#RR_name").val(results.rows.item(0).general_RR_Local_Street_Name);
                   
                    
                    $("#dialoglink").live("touchstart",function() {
                       
                        $('#dialoglink').attr('data-string',results.rows.item(0).comments_Comment_for_FDOT);
                        
    $(this).simpledialog({
      'mode' : 'string',
      'prompt' : 'What do you say?',
      'buttons' : {
        'OK': {
          click: function () {
            var f=$('#dialoglink').attr('data-string');
            db.transaction(
                    function(tx) {
                        
     
  tx.executeSql("update Crossing_Details set comments_Comment_for_FDOT=? where cross_id=?",[f,noteId]); 
  
});
          }
        },
        'Cancel': {
          click: function () { },
          icon: "delete",
          theme: "c"
        }
      }
    });
    //$("input[name='pickin']").val(results.rows.item(0).comments_Comment_for_FDOT)
  });
             
                    });
                }, errorCB);
   
        
         
    });
   
    $("#railroad").live("pageshow", function(e) {

         db.transaction(
                function(tx) {
                    var sql_rail="cross_id,Railroad_Main_Line_Tracks,"+                            
                    "Railroad_Other_Tracks,"+                                
                    "Railroad_Is_Siding  ,"+                                 
                    "Railroad_Is_Industry ,"+                                
                    "Railroad_Is_Wye   ,"+                                   
                    "Railroad_Is_Storage   ,"+                               
                    "Railroad_Is_Spur_or_Lead ,"+                            
                    "Railroad_Is_RR_Yard   ,"+                               
                    "Railroad_Is_Transit   ,"+                               
                    "Railroad_Are_Train_Signals_Visible ";
                    tx.executeSql("select "+sql_rail+" from Crossing_Details where cross_id='"+$("#note_id").val()+"'" ,[],function(tx,results) {
                     notes=results.rows.item(0).cross_id;
                    
                    Crossing="<div class='right_travel'>Crossing :"+notes+"</div>";
                    $("#Crossing1").html(Crossing);
                    
                    if(results.rows.item(0).Railroad_Main_Line_Tracks != null)
                       
                        $("#MainLineTracks").val(results.rows.item(0).Railroad_Main_Line_Tracks).slider("refresh");
                    if(results.rows.item(0).Railroad_Other_Tracks != null)
                        $("#OtherTracks").val(results.rows.item(0).Railroad_Other_Tracks).slider("refresh");
                    
                    //call the slider controll
                    submt();
                    
                    if(results.rows.item(0).Railroad_Is_Siding=="true"){
                        $("#TypesofOther-1").attr("checked","checked");
                        $("#TypesofOther-1").checkboxradio("refresh");
                        
                    }
                        if(results.rows.item(0).Railroad_Is_Industry=="true"){
                        $("#TypesofOther-2").attr("checked","checked");
                        $("#TypesofOther-2").checkboxradio("refresh");
                        
                    }
                        
                    if(results.rows.item(0).Railroad_Is_Wye=="true"){
                        $("#TypesofOther-3").attr("checked","checked");
                        $("#TypesofOther-3").checkboxradio("refresh");
                        
                    }
                    if(results.rows.item(0).Railroad_Is_Storage=="true"){
                        $("#TypesofOther-4").attr("checked","checked");
                        $("#TypesofOther-4").checkboxradio("refresh");
                        
                    }
                    if(results.rows.item(0).Railroad_Is_Spur_or_Lead=="true"){
                        $("#TypesofOther-5").attr("checked","checked");
                        $("#TypesofOther-5").checkboxradio("refresh");
                        
                    }
                    if(results.rows.item(0).Railroad_Is_RR_Yard=="true"){
                        $("#TypesofOther-6").attr("checked","checked");
                        $("#TypesofOther-6").checkboxradio("refresh");
                        
                    }
                    if(results.rows.item(0).Railroad_Is_Transit=="true"){
                        $("#TypesofOther-7").attr("checked","checked");
                        $("#TypesofOther-7").checkboxradio("refresh");
                        
                    }
                    if(results.rows.item(0).Railroad_Are_Train_Signals_Visible=="false"){
                        
                        $("#Train_radio-choice-22").attr("checked","checked");
                        $("#Train_radio-choice-21").removeAttr("checked");
                        $("#Train_radio-choice-21").checkboxradio("refresh");
                        $("#Train_radio-choice-22").checkboxradio("refresh");
                    }
                    
                     });
                }, errorCB);
         
    });
    function submt() {
        
        var mtrack = $("input#MainLineTracks").val() ;           
        var otrack = $("input#OtherTracks").val();
       
        // Validation for OTHER TRACKS must be >0   
        if (otrack == 0) {
            
             $(".checkbox_check").attr("disabled", true).removeAttr("checked").checkboxradio("refresh");
               
                
        } else {        

                $(".checkbox_check").removeAttr("disabled").checkboxradio("refresh");
        }
        if(mtrack == 0 && otrack == 0) {
             alert("One of the Track must be non-zero"); 
        }
        
}
$( ".selector" ).live( "slidestop", function(event, ui) {
    submt();
});
$( "#TotalNumberofRoadwayGates" ).live( "slidestop", function(event, ui) {
    Configuration();
});
  
function Configuration(){

var Configuration = $("input#TotalNumberofRoadwayGates").val();
if(Configuration==0){
$("[name=Quad]:radio").checkboxradio('disable');
$("[name=Full]:radio").checkboxradio('disable');
$("[name=MedianGates]:checkbox").checkboxradio('disable');
}
else{
$("[name=Quad]:radio").checkboxradio('enable');
$("[name=Full]:radio").checkboxradio('enable');
$("[name=MedianGates]:checkbox").checkboxradio('enable');
}
} 
$("#prev").addClass('ui-disabled');
function prev1()
{
	$(".image_bottom1").removeAttr("disabled");
	$(".image_bottom1").attr("src","stylesheets/images/bottom-arrow.png");
	var $prev = $(".slide:visible").slideUp().prev('.slide');
    //alert($prev.is(":first-child"));
    if($prev.hasClass('current1') == true) {
    	//alert("ok ok");
    	$(".image_top1").attr("src","stylesheets/images/top-arrow-d.png");
    	$(".image_top1").attr("disabled", "disabled");
    	
        
        
    }
    
    $("#GeneralFooter").text($prev.find("input").val());
    $prev.slideDown();
}

function next1()
{
	$(".image_top1").removeAttr("disabled");
	$(".image_top1").attr("src","stylesheets/images/top-arrow.png");
    var $next = $(".slide:visible").slideUp().next('.slide');
   // alert($next.is(":last-child"));
    if($next.hasClass('current1') == true) {
    	$(".image_bottom1").attr("disabled", "disabled");
    	$(".image_bottom1").attr("src","stylesheets/images/bottom-arrow-d.png");
    	
    }
    
    $("#GeneralFooter").text($next.find("input").val());
    $next.slideDown();
    
    

//    var data = {ENS: $("input[name=ENSSignPresent]:radio:checked").val(), 
//            Cross_Num: $("input[name=CrossingNumberPosted]:radio:checked").val(),
//            US_name: $("#USRouteNumber").val(),
//            
//            State_name: $("#State_name").val(),
//            C_name: $("#Country_name").val(),
//            L_name: $("#Local_name").val(),
//            R_name: $("#RR_name").val(),
//            C_status: $("#CrossingStatus").val(),
//            C_type: $("input[name=CrossingType]:radio:checked").val(),
//            P_access: $("input[name=PublicAccess]:radio:checked").val(),
//            Is_block: $("input[name=IsCrossingBlocked]:radio:checked").val(),
//            Block: $("#BlockedBy").val(),
//            G_purpose: $("input[name=CrossingPurpose]:radio:checked").val(),
//            G_position: $("input[name=CrossingPosition]:radio:checked").val(),
//            
//            id: $("#note_id").val()
//
//};
//    saveNote(data);
                    
}
 function saveNote(note) {
   
    db.transaction(function(tx) {

       tx.executeSql("update Crossing_Details set general_ENS_Sign_Present=?,general_Crossing_Number_Posted=?,general_US_Route_Number=?, general_State_Route_Number=?, general_County_Route_Number=?, general_Local_Street_Name=?, general_RR_Local_Street_Name=?, general_Crossing_Status=?, general_Crossing_Type=?, general_Public_Access=?, general_Is_Crossing_Blocked=?,general_Blocked_by=?,general_Purpose=?,general_Position=? where cross_id=?",[note.ENS,note.Cross_Num,note.US_name, note.State_name, note.C_name, note.L_name, note.R_name, note.C_status, note.C_type, note.P_access, note.Is_block, note.Block, note.G_purpose, note.G_position, note.id]);
        
       
    }, errorCB);
   
}
 function next2(){
     k=0;
     var s=[];
     var $next = $(".slide1:visible").slideUp().next('.slide1');
     
     if($next.size() < 1) {
         
         $next = $(".slide1:first");
     }
     //$("#RailroadFooter").text($next.find("input").val());
     $next.slideDown();
          
    
     el=document.getElementById('form2_id').elements;
    
    for(var j=0; j<el.length; j++){
                    if(el[j].type=='radio'){
                    
                if(el[j].checked ==true && (el[j].name =="radio-7")){
                    ens_sign6=el[j].value;
                    
                }
            }
            if(el[j].type=='checkbox'){
                
                s[k]=el[j].checked;
                k++;
            }
        }
     submt();      
     
    var data = {
            Main_line: $("#MainLineTracks").val(),
            Other_track: $("#OtherTracks").val(),
            tracks: s,
            S_visible: ens_sign6,
            id: $("#note_id").val()

};
    saveNote1(data);
                 
    
}


  
 function prev2(){
     
     var $prev = $(".slide1:visible").slideUp().prev('.slide1');
     if($prev.size() < 1) {
         $prev = $(".slide1:last");
     }
     //$("#RailroadFooter").text($prev.find("input").val());
     $prev.slideDown();
     
 }
 function saveNote1(note) {
   
    db.transaction(function(tx) {

       tx.executeSql("update Crossing_Details set Railroad_Main_Line_Tracks=?,Railroad_Other_Tracks=?,Railroad_Is_Siding=?,Railroad_Is_Industry=?,Railroad_Is_Wye=?,Railroad_Is_Storage=?,Railroad_Is_Spur_or_Lead=?,Railroad_Is_RR_Yard=?,Railroad_Is_Transit=?,Railroad_Are_Train_Signals_Visible=? where cross_id=?",[note.Main_line, note.Other_track,note.tracks[0],note.tracks[1],note.tracks[2],note.tracks[3],note.tracks[4],note.tracks[5],note.tracks[6],note.S_visible, note.id]);
        
       
    }, errorCB);
  
    
}
function rail_road_page(){
    $.mobile.changePage('#railroad', {
        
        transition: "none",
        changeHash: false
    }); 
}
function general_page(){
    $.mobile.changePage('#general', {
        
        transition: "none",
        changeHash: false
    }); 
}

function road_page(){
$.mobile.changePage('#road', {
        
        transition: "none",
        changeHash: false
    });
}
function sign_page(){
    $.mobile.changePage('#signs', {
            
            transition: "none",
            changeHash: false
        });
    }
function Show_general(name,value) {
    if (value != true && value != null) {
        $("[name="+name+"][value='true']").attr('checked',false).checkboxradio("refresh");
        $("[name="+name+"][value="+value+"]").attr('checked',true).checkboxradio("refresh");
    }
}
function Show_general_pur(name,value) {
    if (value != 1 && value != null) {
        $("[name="+name+"][value='1']").attr('checked',false).checkboxradio("refresh");
        $("[name="+name+"][value="+value+"]").attr('checked',true).checkboxradio("refresh");
    }
}

function Show_general1(name,value) {
    if (value != "Y" && value != null) {
    
        $("[name="+name+"][value='Y']").attr('checked',false).checkboxradio("refresh");
        $("[name="+name+"][value="+value+"]").attr('checked',true).checkboxradio("refresh");
    }
}
 function signals_page() {
     $.mobile.changePage('#signals-and-gates', {
         
         transition: "none",
         changeHash: false
     });
}
 function comments_page() {
     $.mobile.changePage('#comments', {
         
         transition: "none",
         changeHash: false
     });
}
 
 function vicinity_page() {
     $.mobile.changePage('#vicinity', {
         
         transition: "none",
         changeHash: false
     });
}
 function Photes_page() {
    
$.mobile.changePage('#photos', {
         
         transition: "none",
         changeHash: false
     });
 }
     
   



function DB2(tx) {
 
  
    tx.executeSql("SELECT userId FROM LOGIN WHERE user", [],function Query_Success(tx, results){
        
        alert("login :"+results.rows.length);
    }, errorCB,successCB);
    var lan=new Array();
    var id_data=new Array();
    
    lan=[[-0.12833833694479024,51.49960661871536],[-0.14305830001890846,51.50179725022855],[-0.14305830001890846,51.50179725022855],[-0.14305830001890846,51.50179725022855],[-0.14305830001890846,51.50179725022855],[-0.14305830001890846,51.50179725022855],[-0.14305830001890846,51.50179725022855]];
    $.ajax({
        url: 'http://dev.dtsagile.com/rhci/api/crossingsummaries/e129b216-ad8e-4cee-b7b1-e5894dbfa5d9',
        dataType: 'json',
        async: false,
        cache: false,
        timeout: 90000,
        success: function(data, status){
            $.each(data, function(i,data){
                id_data[i]=data.id;
                
                if (data.status=='Assigned') {
                    state="Awaiting Inspection";
                }
                
                tx.executeSql("INSERT OR REPLACE INTO Master_Crossing  (cross_id ,cross_number ,cross_status , Message ,cross_Latitude ,cross_Longitude) values (?,?,?,?,?,?)",[data.id,data.id+"-"+data.streetName,state, data.message,lan[i][0],lan[i][1]]);
               
            });
         
                      },
                     error: function (xmlHttpRequest, textStatus, errorThrown) {
                  if (xmlHttpRequest.readyState == 0 || xmlHttpRequest.status == 0)
                      return;
                  else{
                      
                      alert('ErrorNaren' + textStatus);
                      
                  }
              }
              
     }); 
    for(var j=0;j<id_data.length;j++){
      
        $.ajax({
            url: 'http://dev.dtsagile.com/rhci/api/crossingdetails/'+id_data[j],
            dataType: 'json',
            async: false,
            cache: false,
            timeout: 90000,
            success: function(data, status){
                tx.executeSql("INSERT OR REPLACE INTO Crossing_Details VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[data.id,
                 data.operatingCompanyId,
                 data.milepost,
                 null,
                 data.countyId,
                 data.cityId,
                 data.hasEnsSign,
                 data.hasRrxNumberPosted,
                 null,
                 null,
                 data.usRoute,
                 data.stateRoad,
                 data.countyRoute,
                 data.streetName,
                 data.railroadLocalStreetName,
                 data.crossingStatusId,
                 data.crossingTypeId,
                 data.privateCrossingHasPublicAccessId,
                 data.isCrossingBlocked,
                 data.crossingBlockedTypeId,
                 data.crossingPurposeId,
                 data.crossingPositionId,
                 
                 
                 data.mainlineRrTracksCount,
                 data.otherRrTracksCount,
                 null,
                 null,
                 null,
                 null,
                 null,
                 null,
                 null,
                 data.trainSignalsVisible,
                 
                 
                 data.streetTypeId,
                 data.trafficThruLaneCount,
                 data.auxLaneCount,
                 data.postedSpeedLimit,
                 data.trackRunsParallelToStreet,
                 data.IsApproachRoadwayPaved,
                 data.pavementMaterialTypeId,
                 data.presenceOfApproachMedianBarriersId,
                 null,
                 data.hasApproachingSidewalk,
                 data.sidewalkCrossesRrTracksId,
                 data.crossingSurfaceTypes[0].name,
                 data.crossingSurfaceWidth,
                 data.crossingSurfaceLength,
                 data.crossingApproachConditionId,
                 data.crossingApproachVehicleReactionTypeId,
                 data.crossingApproachDriverReactionTypeId,
                 data.crossingApproachPadMovementTypeId,
                 data.pavementMarkingsTypeId,
                 
                 
                 
                 data.mastMountedCrossbuckSignCount,
                 data.crossbuckSignCount,
                 data.stopSignCount,
                 data.yieldSignsCount,
                 data.signR112Count,
                 data.signR152PCount,
                 data.hasPrivateCrossingSigns,
                 null,
                 data.hasTrespassSignsPosted,
                 null,
                 data.hasExemptSign,
                 data.ledEnhancedSignCount,
                 data.SignR88Count,
                 data.doNotStopSignCount,
                 data.signR89Count,
                 data.signR810Count,
                 data.signR810aCount,
                 data.signR106Count,
                 data.signR106aCount,
                 data.signW101Count,
                 null,
                 data.signW102Count,
                 data.signW103Count,
                 data.signW104Count,
                 data.signW1011Count,
                 data.signW1012Count,
                 data.signR31aCount,
                 data.signR32aCount,
                 data.signR156Count,
                 data.signR156aCount,
                 data.signR157Count,
                 data.signR157aCount,
                 data.signR158Count,
                 data.lookoutForCarsSignCount,
                 data.signW81Count,
                 data.signW108Count,
                 data.signW109Count,
                 data.signW109PCount,
                 data.signW1011aCount,
                 data.signW1011bCount,
                 data.signW1013PCount,
                 data.signW1014PCount,
                 data.signW1014aPCount,
                 data.signW1015PCount,
                 data.slowSignCount,
                 
                 
                 
                 data.trainWarningBellCount,
                 data.postLightCount,
                 null,
                 null,
                 null,
                 data.flashingLightsOnCantileverOverTrafficCount,
                 data.flashingLightsOnCantileverNotOverTrafficCount,
                 null,
                 data.flashingLightPairCount,
                 data.signalHead8InchIncandescentCount,
                 data.signalHead12InchIncandescentCount,
                 data.signalHeadLedCount,
                 data.hasControllingTrafficSignals,
                 data.hasTrafficPreSignals,
                 data.trafficPreSignalsCount,
                 data.trafficPreSignalsStorageDistance,
                 data.trafficPreSignalsStopLineDistance,
                 data.roadwayGatesCount,
                 data.pedestrianGateCount,
                 null,
                 null,
                 null,
                 
                 
                 
                 data.landUseTypeId,
                 data.intersectingRoadwaysCount,
                 data.distanceToIntersectingRoadway,
                 data.distanceToSecondIntersectingRoadway,
                 null,
                 data.hasPrivateDriveway,
                 null,
                 data.hasCommercialPower,
                 data.hasAlternatePowerSource,
                 data.vehiclesQueueAcrossTrackId,
                 
                 data.percentTrucksCrossing,
                 data.hazmatVehicles,
                 data.schoolBusCrossingCount,
                 data.isEmergencyServicesRoute,
                 data.stUse3Txt]);
               console.log(data.id);
            }
        });
    }
   
   document.location.reload(true);
     
}
$("#synchronize").live("click",function() {
    
    var  db = window.openDatabase("SQL", 3, "PhoneGap Demo", 200000);
    db.transaction(ajex_call2, errorCB, successCB);
 
});

/************login page************/

    $("#login").live("touchstart",function(e){
            
            atpos=$("#user").val().indexOf("@");
            dotpos=$("#user").val().lastIndexOf(".");
           var val;
            if($("#user").val()==''){
                alert("User Id required");
                $("#user").focus();
              
            }
            
            else if($("#password").val()==''){
                alert("Password required");
                $("#password").focus();
                //return false;
            }
            else{
        db.transaction(function(tx) {
            
            tx.executeSql("SELECT COUNT(*) as UserCount FROM LOGIN where user='"+$("#user").val()+"' and Password='"+$('#password').val()+"'",[],renderEntries,errorCB);
            
        }, errorCB);
        
            }
            
        });

/************login page************/

function Update_data(value,field) {
	//alert(value);
	db.transaction(function(tx) {

	       tx.executeSql("UPDATE Crossing_Details SET "+field+" = ? WHERE cross_id= ?",[value, noteId],successData,errorData);
	       tx.executeSql("select * from Crossing_Details where cross_id='"+noteId+"'",[],function data(tx,result){
	    	  
	    	  // alert(result.rows.item(0).field); 
	       }, errorData); 
	       
	    }, errorCB);
}
function successData() {
	//alert("success");
}
function errorData(er) {
	//alert("error "+er.code);
}