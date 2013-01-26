
$("#signs").live("pageshow", function(e) {
	//window.MyToast.srt('signs page');
	db.transaction(
                function(tx) {
                    var sql_signs="cross_id,signs_Number_Mounted_signs_Bucks         ," +               
                    "signs_Total_Number_signs_Bucks_Signs       ," +             
                    "signs_Number_of_Stop_Signs               ," +               
                    "signs_Number_of_Yield_Signs             ," +                
                    "signs_Road_Closed                    ," +                   
                    "signs_Number_of_Tracks_R15                 ," +             
                    "signs_Private_Crossing_Signs_Present      ," +              
                    "signs_Number_of_Private_Crossing_Signs       ," +           
                    "signs_Trespass_Signs_Present               ," +             
                    "signs_Number_Low_Ground_Clearance_Signs    ," +             
                    "signs_Exempt_R15_3_Sign_Present           ," +         
                    "signs_LED_Enhanced_Crossing_warning        ," +             
                    "signs_Do_Not_Stop_on_Tracks_R8_8          ," +              
                    "signs_Do_Not_Stop_on_Tracks_with_Beacon     ," +            
                    "signs_Track_out_of_Service_R8_9           ," +              
                    "signs_Stop_here_When_Flashing_R_8_10     ," +               
                    "signs_Stop_here_When_Flashing_R_8_10a    ," +               
                    "signs_Stop_here_On_Red_R10_6           ," +                 
                    "signs_Stop_here_On_Red_R10_6a       ," +                    
                    "signs_Advanced_Warning_W_10_1      ," +                     
                    "signs_Amber_Beacons_on_Advanced_Warning_W_10_1   ," +       
                    "signs_Advanced_Warning_W_10_2           ," +                  
                    "signs_Advanced_Warning_W_10_3         ," +                   
                    "signs_Advanced_Warning_W_10_4        ," +                    
                    "signs_Advanced_Warning_W_10_11       ," +                   
                    "signs_Advanced_Warning_W_10_12       ," +                    
                    "signs_No_Right_Turn_Across_Tracks_R3_1a    ," +                
                    "signs_No_Right_Turn_Across_Tracks_R3_2a    ," +             
                    "signs_No_Motorized_Vehicle_on_Tracks_R15_6    ," +          
                    "signs_Do_not_Drive_On_on_Tracks_R15_6a       ," +           
                    "signs_Light_Rail_Divided_Highway_R15_7    ," +              
                    "signs_Light_Rail_Divided_Highway_R15_7a   ," +              
                    "signs_Look_R_15_8                    ," +                   
                    "signs_Look_Out_for_Cars             ," +                    
                    "signs_BUMP_W_8_1                    ," +                    
                    "signs_Trains_May_Exceed_80_MPH_W_10_8     ," +              
                    "signs_No_Train_Horn_W_10_9                ," +              
                    "signs_No_Train_Horn_Plaque_W_10_9a      ," +                
                    "signs_Between_Tracks_and_Highway_W_10_11a    ," +           
                    "signs_Between_Highway_and_Tracks_10_11b    ," +             
                    "signs_Not_Gates_or_Lights_Plaque_W_10_13p ," +          
                    "signs_Next_Crossing_Plaque_W_10_14p  ," +               
                    "signs_Use_Next_Crossing_Plaque_W_10_14ap,"+                 
                    "signs_Rought_Crossing_Plaque_W_10_15P," +               
                    "signs_Slow_Signs" ;
                    //console.log(sql_signs)
							tx.executeSql("select "+sql_signs+" from Crossing_Details where cross_id='"+$("#note_id").val()+"'" ,[],function(tx,results) {
                     notes=results.rows.item(0).cross_id;
                		//alert(results.rows.item(0).general_Is_Crossing_Blocked);
                    
                 
                                        
                     
                     Crossing="<div class='right_travel'>Crossing :"+notes+"</div>";
                     $("#Crossing3").html(Crossing);
                     var sign = new Signs();
                     sign.Show_data("Number-of-Most-Mounted-Cross-Bucks",results.rows.item(0).signs_Number_Mounted_signs_Bucks);

                     sign.Show_data("Total-Number-of-Cross-Bucks-Signs",results.rows.item(0).signs_Total_Number_signs_Bucks_Signs);

                     sign.Show_data("Number-of-Stop-Signs",results.rows.item(0).signs_Number_of_Stop_Signs);

                     sign.Show_data("Number-of-Yeild-Signs",results.rows.item(0).signs_Number_of_Yield_Signs);

                     sign.Show_data("Road-Closed-R11-2",results.rows.item(0).signs_Road_Closed);

                     sign.Show_data("Number_of_Tracks",results.rows.item(0).signs_Number_of_Tracks_R15);
                     if (results.rows.item(0).signs_Private_Crossing_Signs_Present != true && results.rows.item(0).signs_Private_Crossing_Signs_Present != null) {
                         $("[name=Private-Crossing-Signs-Present][value='true']").attr('checked',false).checkboxradio("refresh");
                         $("[name=Private-Crossing-Signs-Present][value="+results.rows.item(0).signs_Private_Crossing_Signs_Present+"]").attr('checked',true).checkboxradio("refresh");
                     }
                    

                     sign.Show_data("Number-of-Private-Crossing-Signs",results.rows.item(0).signs_Number_of_Private_Crossing_Signs);
                     if (results.rows.item(0).signs_Trespass_Signs_Present != true && results.rows.item(0).signs_Trespass_Signs_Present != null) {
                         $("[name=Trespass-Signs-Present][value='true']").attr('checked',false).checkboxradio("refresh");
                         $("[name=Trespass-Signs-Present][value="+results.rows.item(0).signs_Trespass_Signs_Present+"]").attr('checked',true).checkboxradio("refresh");
                     }
                     

                     sign.Show_data("Number-of-Low-Ground-Clearance-Signs",results.rows.item(0).signs_Number_Low_Ground_Clearance_Signs);
                     if (results.rows.item(0).signs_Exempt_R15_3_Sign_Present != true && results.rows.item(0).signs_Exempt_R15_3_Sign_Present != null) {
                         $("[name=Exempt-R15-3-Sign-Present][value='true']").attr('checked',false).checkboxradio("refresh");
                         $("[name=Exempt-R15-3-Sign-Present][value="+results.rows.item(0).signs_Exempt_R15_3_Sign_Present+"]").attr('checked',true).checkboxradio("refresh");
                     }

                    

                     sign.Show_data("LEDEnhanced",results.rows.item(0).signs_LED_Enhanced_Crossing_warning);

                     sign.Show_data("Do-Not-Stop-on-Tracks",results.rows.item(0).signs_Do_Not_Stop_on_Tracks_R8_8);

                     sign.Show_data("DoNotStoponTrackswithBeacon",results.rows.item(0).signs_Do_Not_Stop_on_Tracks_with_Beacon);

                     sign.Show_data("TracksoutofService",results.rows.item(0).signs_Track_out_of_Service_R8_9);

                     sign.Show_data("StopHerewhenFlashingR8",results.rows.item(0).signs_Stop_here_When_Flashing_R_8_10);

                     sign.Show_data("StopHerewhenFlashingR8a",results.rows.item(0).signs_Stop_here_When_Flashing_R_8_10a);

                     sign.Show_data("StopHereOnRed6",results.rows.item(0).signs_Stop_here_On_Red_R10_6);

                     sign.Show_data("StopHereOnRed6a",results.rows.item(0).signs_Stop_here_On_Red_R10_6a);

                     sign.Show_data("AdvancedWarning",results.rows.item(0).signs_Advanced_Warning_W_10_1);

                     sign.Show_data("AmberBeacons",results.rows.item(0).signs_Amber_Beacons_on_Advanced_Warning_W_10_1);

                     sign.Show_data("AdvancedWarningW2",results.rows.item(0).signs_Advanced_Warning_W_10_2);

                     sign.Show_data("AdvancedWarningW3",results.rows.item(0).signs_Advanced_Warning_W_10_3);
                     

                     sign.Show_data("AdvancedWarningW4",results.rows.item(0).signs_Advanced_Warning_W_10_4);

                     sign.Show_data("AdvancedWarningW11",results.rows.item(0).signs_Advanced_Warning_W_10_11);

                     sign.Show_data("AdvancedWarningW12",results.rows.item(0).signs_Advanced_Warning_W_10_12);

                     sign.Show_data("NoRightTurn1",results.rows.item(0).signs_No_Right_Turn_Across_Tracks_R3_1a);

                     sign.Show_data("NoRightTurn2",results.rows.item(0).signs_No_Right_Turn_Across_Tracks_R3_2a);

                     sign.Show_data("NoMotarizedVehicles",results.rows.item(0).signs_No_Motorized_Vehicle_on_Tracks_R15_6);

                     sign.Show_data("DonotDrive6",results.rows.item(0).signs_Do_not_Drive_On_on_Tracks_R15_6a);

                     sign.Show_data("LighRailDivided7",results.rows.item(0).signs_Light_Rail_Divided_Highway_R15_7);

                     sign.Show_data("LighRailDivided7a",results.rows.item(0).signs_Light_Rail_Divided_Highway_R15_7a);

                     sign.Show_data("Look8",results.rows.item(0).signs_Look_R_15_8);


                     
                     sign.Show_data("LookOutforCars",results.rows.item(0).signs_Look_Out_for_Cars);
                     
                     sign.Show_data("Bump",results.rows.item(0).signs_BUMP_W_8_1);
                     sign.Show_data("TrainsMayExceed",results.rows.item(0).signs_Trains_May_Exceed_80_MPH_W_10_8);
                     sign.Show_data("NoTrainHorn",results.rows.item(0).signs_No_Train_Horn_W_10_9);
                     sign.Show_data("NoTrainHornPlaque",results.rows.item(0).signs_No_Train_Horn_Plaque_W_10_9a);
                     sign.Show_data("BetweenTracksandHighwaysa",results.rows.item(0).signs_Between_Tracks_and_Highway_W_10_11a);
                     sign.Show_data("BetweenTracksandHighwaysb",results.rows.item(0).signs_Between_Highway_and_Tracks_10_11b);
                     sign.Show_data("NotGatesorLightsPlaque",results.rows.item(0).signs_Not_Gates_or_Lights_Plaque_W_10_13p);
                     sign.Show_data("NextCrossingPlaque",results.rows.item(0).signs_Next_Crossing_Plaque_W_10_14p);
                     sign.Show_data("UseNextCrossingPlaque",results.rows.item(0).signs_Use_Next_Crossing_Plaque_W_10_14ap);
                     sign.Show_data("RoughtCrossingPlaque",results.rows.item(0).signs_Rought_Crossing_Plaque_W_10_15P);
                     sign.Show_data("SlowSigns",results.rows.item(0).signs_Slow_Signs);
                     
                     //alert(results.rows.item(0).signs_Exempt_R15_3_Sign_Present)
						});
   }, errorCB);

 });
function next4() {

	$(".image_top3").removeAttr("disabled");
	$(".image_top3").attr("src","stylesheets/images/top-arrow.png");
    var $next = $(".slide3:visible").slideUp().next('.slide3');
  
    
   // var $next = $(".slide:visible").slideUp().next('.slide');
   // alert($next.is(":last-child"));
    if($next.hasClass('current1') == true) {
    	$(".image_bottom3").attr("disabled", "disabled");
    	$(".image_bottom3").attr("src","stylesheets/images/bottom-arrow-d.png");
    	
    	
    }
    $next.slideDown();
    $("#SignsFooter").text($next.find("input").val());
    
    
    var data = {
           Number_of_Most_Mounted_Cross_Bucks: $('input[name=Number-of-Most-Mounted-Cross-Bucks]:radio:checked').val(),
           Total_Number_of_Cross_Bucks_Signs: $('input[name=Total-Number-of-Cross-Bucks-Signs]:radio:checked').val(),
           Number_of_Stop_Signs: $('input[name=Number-of-Stop-Signs]:radio:checked').val(),
           Number_of_Yeild_Signs: $('input[name=Number-of-Yeild-Signs]:radio:checked').val(),
           Road_Closed_R11_2:$('input[name=Road-Closed-R11-2]:radio:checked').val(),
           Number_of_Tracks:$('input[name=Number_of_Tracks]:radio:checked').val(),
           Private_Crossing_Signs_Present: $('input[name=Private-Crossing-Signs-Present]:radio:checked').val(),
           
           Number_of_Private_Crossing_Signs: $('input[name=Number-of-Private-Crossing-Signs]:radio:checked').val(),
           Trespass_Signs_Present: $('input[name=Trespass-Signs-Present]:radio:checked').val(),
           Number_of_Low_Ground_Clearance_Signs: $('input[name=Number-of-Low-Ground-Clearance-Signs]:radio:checked').val(),
           R15_3_Sign_Present: $('input[name=Exempt-R15-3-Sign-Present]:radio:checked').val(),
           
           signs_LED_Enhanced_Crossing_warning: $('input[name=LEDEnhanced]:radio:checked').val(),
           signs_Do_Not_Stop_on_Tracks_R8_8: $('input[name=Do-Not-Stop-on-Tracks]:radio:checked').val(),
           signs_Do_Not_Stop_on_Tracks_with_Beacon: $('input[name=DoNotStoponTrackswithBeacon]:radio:checked').val(),
           signs_Track_out_of_Service_R8_9: $('input[name=TracksoutofService]:radio:checked').val(),
           signs_Stop_here_When_Flashing_R_8_10: $('input[name=StopHerewhenFlashingR8]:radio:checked').val(),
           signs_Stop_here_When_Flashing_R_8_10a: $('input[name=StopHerewhenFlashingR8a]:radio:checked').val(),
           signs_Stop_here_On_Red_R10_6: $('input[name=StopHereOnRed6]:radio:checked').val(),
           signs_Stop_here_On_Red_R10_6a: $('input[name=StopHereOnRed6a]:radio:checked').val(),
           signs_Advanced_Warning_W_10_1: $('input[name=AdvancedWarning]:radio:checked').val(),
           signs_Amber_Beacons_on_Advanced_Warning_W_10_1: $('input[name=AmberBeacons]:radio:checked').val(),
           signs_Advanced_Warning_W_10_2: $('input[name=AdvancedWarningW2]:radio:checked').val(),
           signs_Advanced_Warning_W_10_3: $('input[name=AdvancedWarningW3]:radio:checked').val(),
           
           signs_Advanced_Warning_W_10_4: $('input[name=AdvancedWarningW4]:radio:checked').val(),
           signs_Advanced_Warning_W_10_11: $('input[name=AdvancedWarningW11]:radio:checked').val(),
           signs_Advanced_Warning_W_10_12: $('input[name=AdvancedWarningW12]:radio:checked').val(),
           signs_No_Right_Turn_Across_Tracks_R3_1a: $('input[name=NoRightTurn1]:radio:checked').val(),  
           signs_No_Right_Turn_Across_Tracks_R3_2a: $('input[name=NoRightTurn2]:radio:checked').val(),
           signs_No_Motorized_Vehicle_on_Tracks_R15_6: $('input[name=NoMotarizedVehicles]:radio:checked').val(),
           signs_Do_not_Drive_On_on_Tracks_R15_6a: $('input[name=DonotDrive6]:radio:checked').val(),
           signs_Light_Rail_Divided_Highway_R15_7: $('input[name=LighRailDivided7]:radio:checked').val(),
           signs_Light_Rail_Divided_Highway_R15_7a: $('input[name=LighRailDivided7a]:radio:checked').val(),
           signs_Look_R_15_8: $('input[name=Look8]:radio:checked').val(),
           signs_Look_Out_for_Cars: $('input[name=LookOutforCars]:radio:checked').val(),
           signs_BUMP_W_8_1: $('input[name=Bump]:radio:checked').val(),
           
           signs_Trains_May_Exceed_80_MPH_W_10_8: $('input[name=TrainsMayExceed]:radio:checked').val(),
           signs_No_Train_Horn_W_10_9: $('input[name=NoTrainHorn]:radio:checked').val(),
           signs_No_Train_Horn_Plaque_W_10_9a: $('input[name=NoTrainHornPlaque]:radio:checked').val(),
           signs_Between_Tracks_and_Highway_W_10_11a: $('input[name=BetweenTracksandHighwaysa]:radio:checked').val(),
           signs_Between_Highway_and_Tracks_10_11b: $('input[name=BetweenTracksandHighwaysb]:radio:checked').val(),
           signs_Not_Gates_or_Lights_Plaque_W_10_13p: $('input[name=NotGatesorLightsPlaque]:radio:checked').val(),
           signs_Next_Crossing_Plaque_W_10_14p: $('input[name=NextCrossingPlaque]:radio:checked').val(),
           signs_Use_Next_Crossing_Plaque_W_10_14ap: $('input[name=UseNextCrossingPlaque]:radio:checked').val(),
           signs_Rought_Crossing_Plaque_W_10_15P: $('input[name=RoughtCrossingPlaque]:radio:checked').val(),
           signs_Slow_Signs: $('input[name=SlowSigns]:radio:checked').val(),
           id: $("#note_id").val()
	}; //alert(data);
	
	saveSigns1(data);
                     
   }
   
function prev4(){
	$(".image_bottom3").removeAttr("disabled");
	$(".image_bottom3").attr("src","stylesheets/images/bottom-arrow.png");
	var $prev = $(".slide3:visible").slideUp().prev('.slide3');
    
    //alert($prev.is(":first-child"));
    if($prev.hasClass('current1') == true) {
    	//alert("ok ok");
    	$(".image_top3").attr("src","stylesheets/images/top-arrow-d.png");
    	$(".image_top3").attr("disabled", "disabled");
       
        
    }
    $prev.slideDown();
    $("#SignsFooter").text($prev.find("input").val());
}
function saveSigns1(note) {
  
   
  var text="update Crossing_Details set "+ 
  "signs_Number_Mounted_signs_Bucks=?, "+
  "signs_Total_Number_signs_Bucks_Signs=?, "+
  "signs_Number_of_Stop_Signs=?, "+
  "signs_Number_of_Yield_Signs=?, "+
  "signs_Road_Closed=?, "+
  "signs_Number_of_Tracks_R15=?,"+ 
  "signs_Private_Crossing_Signs_Present=?, "+
  "signs_Number_of_Private_Crossing_Signs=?, "+
  "signs_Trespass_Signs_Present=?, "+
  "signs_Number_Low_Ground_Clearance_Signs=?, "+
  "signs_Exempt_R15_3_Sign_Present=? ,"+
  "signs_LED_Enhanced_Crossing_warning=?,"+
  "signs_Do_Not_Stop_on_Tracks_R8_8=?,"+
  "signs_Do_Not_Stop_on_Tracks_with_Beacon=?,"+
  "signs_Track_out_of_Service_R8_9=?,"+
  "signs_Stop_here_When_Flashing_R_8_10=? ,"+
  "signs_Stop_here_When_Flashing_R_8_10a=?,"+
  "signs_Stop_here_On_Red_R10_6=?,"+
  "signs_Stop_here_On_Red_R10_6a=?,"+
  "signs_Advanced_Warning_W_10_1=?,"+
  "signs_Amber_Beacons_on_Advanced_Warning_W_10_1=?,"+
  "signs_Advanced_Warning_W_10_2=?,"+  
  "signs_Advanced_Warning_W_10_3=?,"+
  
  "signs_Advanced_Warning_W_10_4=?,"+ 
  "signs_Advanced_Warning_W_10_11=?, "+
  "signs_Advanced_Warning_W_10_12=?,"+ 
  "signs_No_Right_Turn_Across_Tracks_R3_1a=?,"+   
  "signs_No_Right_Turn_Across_Tracks_R3_2a=?,"+
  "signs_No_Motorized_Vehicle_on_Tracks_R15_6=?,"+
  "signs_Do_not_Drive_On_on_Tracks_R15_6a=?,"+
  "signs_Light_Rail_Divided_Highway_R15_7=?,"+
  "signs_Light_Rail_Divided_Highway_R15_7a=?,"+
  "signs_Look_R_15_8=?,"+
  "signs_Look_Out_for_Cars=?,"+
  "signs_BUMP_W_8_1=?," +
  
  "signs_Trains_May_Exceed_80_MPH_W_10_8=?,"+
  "signs_No_Train_Horn_W_10_9=?,"+
  "signs_No_Train_Horn_Plaque_W_10_9a=?,"+
  "signs_Between_Tracks_and_Highway_W_10_11a=?,"+
  "signs_Between_Highway_and_Tracks_10_11b=?,"+
  "signs_Not_Gates_or_Lights_Plaque_W_10_13p=?,"+
  "signs_Next_Crossing_Plaque_W_10_14p=?,"+
  "signs_Use_Next_Crossing_Plaque_W_10_14ap=?,"+    
  "signs_Rought_Crossing_Plaque_W_10_15P=?,"+
  "signs_Slow_Signs=?  where cross_id=?";
  
 //alert(note.signs_Trains_May_Exceed_80_MPH_W_10_8)

      
    db.transaction(function(tx) {
    	
       tx.executeSql(text,
               [note.Number_of_Most_Mounted_Cross_Bucks,note.Total_Number_of_Cross_Bucks_Signs, 
                note.Number_of_Stop_Signs, note.Number_of_Yeild_Signs, 
                note.Road_Closed_R11_2, note.Number_of_Tracks, note.Private_Crossing_Signs_Present,
                note.Number_of_Private_Crossing_Signs, note.Trespass_Signs_Present, 
                note.Number_of_Low_Ground_Clearance_Signs, note.R15_3_Sign_Present, 
                note.signs_LED_Enhanced_Crossing_warning,
                note.signs_Do_Not_Stop_on_Tracks_R8_8,
                note.signs_Do_Not_Stop_on_Tracks_with_Beacon,
                note.signs_Track_out_of_Service_R8_9,
                note.signs_Stop_here_When_Flashing_R_8_10,
                note.signs_Stop_here_When_Flashing_R_8_10a,
                note.signs_Stop_here_On_Red_R10_6,
                note.signs_Stop_here_On_Red_R10_6a,
                note.signs_Advanced_Warning_W_10_1,
                note.signs_Amber_Beacons_on_Advanced_Warning_W_10_1,
                note.signs_Advanced_Warning_W_10_2, 
                note.signs_Advanced_Warning_W_10_3,
                
                note.signs_Advanced_Warning_W_10_4,
                note.signs_Advanced_Warning_W_10_11,
                note.signs_Advanced_Warning_W_10_12,
                note.signs_No_Right_Turn_Across_Tracks_R3_1a , 
                note.signs_No_Right_Turn_Across_Tracks_R3_2a,
                note.signs_No_Motorized_Vehicle_on_Tracks_R15_6,
                note.signs_Do_not_Drive_On_on_Tracks_R15_6a,
                note.signs_Light_Rail_Divided_Highway_R15_7,
                note.signs_Light_Rail_Divided_Highway_R15_7a,
                note.signs_Look_R_15_8,
                note.signs_Look_Out_for_Cars,
                note.signs_BUMP_W_8_1,
                
                note.signs_Trains_May_Exceed_80_MPH_W_10_8,
                note.signs_No_Train_Horn_W_10_9,
                note.signs_No_Train_Horn_Plaque_W_10_9a,
                note.signs_Between_Tracks_and_Highway_W_10_11a,
                note.signs_Between_Highway_and_Tracks_10_11b,
                note.signs_Not_Gates_or_Lights_Plaque_W_10_13p,
                note.signs_Next_Crossing_Plaque_W_10_14p,
                note.signs_Use_Next_Crossing_Plaque_W_10_14ap,   
                note.signs_Rought_Crossing_Plaque_W_10_15P,
                note.signs_Slow_Signs,
                note.id]);
                
         
    }, errorCB);
  
}
Signs.prototype.Show_data = function(name,value)
{
	
	 if (value != 0 && value != null) {
	        $("[name="+name+"][value='0']").attr('checked',false).checkboxradio("refresh");
	        $("[name="+name+"][value="+value+"]").attr('checked',true).checkboxradio("refresh");
	    }
};
function Signs() {
	
}
