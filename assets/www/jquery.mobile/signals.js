$("#signals-and-gates").live("pageshow", function(e) {
    
         db.transaction(
                function(tx) {
                    var gate= "cross_id,gates_Number_of_Bells ,"+                               
                    "gates_Posts_with_Flashing_Lights ,"+                     
                    "gates_has_Incandescent_Lights   ,"+                      
                    "gates_has_Led      ,"+                                   
                    "gates_has_Backlights  ,"+                                
                    "gates_Cantilevers_over_Trafic ,"+                        
                    "gates_Cantilevers_NOT_over_Trafic   ,"+                  
                    "gates_Type_of_cantilver_Flashing_Lights ,"+              
                    "gates_Number_of_Flashing_Pairs   ,"+                     
                    "gates_Number_8_Incandescent_Signal_Pairs ,"+             
                    "gates_Number_12_Incandescent_Signal_Pairs  ,"+           
                    "gates_Number_12_Led_Signal_Pairs   ,"+                   
                    "gates_Traffic_Signal_Controlling  ,"+                    
                    "gates_Traffic_Pre_Signals_Present   ,"+                  
                    "gates_Number_of_Traffic_Pre_Signals   ,"+                
                    "gates_Traffic_Pre_Signal_Storage_Distance  ,"+           
                    "gates_Traffic_Pre_Signal_Stop_Distance ,"+               
                    "gates_Total_Number_of_Roadway_Gates    ,"+               
                    "gates_Total_Number_of_Pedestrian_Gates  ,"+              
                    "gates_Gate_Config_Quad            ,"+                    
                    "gates_Gate_Config_Full       ,"+                         
                    "gates_has_Median_Gates   "   
                    tx.executeSql("select "+gate+" from Crossing_Details where cross_id='"+$("#note_id").val()+"'" ,[],function(tx,results) {
                     notes=results.rows.item(0).cross_id;
                
                     
                    Crossing="<div class='right_travel'>Crossing :"+notes+"</div>"
                    $("#Crossing4").html(Crossing);
                    
                    
                    slider_signals("NumberofBells",results.rows.item(0).gates_Number_of_Bells)
                    slider_signals("PostswithFlashingLights",results.rows.item(0).gates_Posts_with_Flashing_Lights)
                    slider_signals("NumberofFlashingPairs",results.rows.item(0).gates_Number_of_Flashing_Pairs)
                    slider_signals("Number8Incandescent",results.rows.item(0).gates_Number_8_Incandescent_Signal_Pairs)
                    slider_signals("Number12Incandescent",results.rows.item(0).gates_Number_12_Incandescent_Signal_Pairs)
                    slider_signals("Number12LED",results.rows.item(0).gates_Number_12_Led_Signal_Pairs)
                    slider_signals("TotalNumberofRoadwayGates",results.rows.item(0).gates_Total_Number_of_Roadway_Gates)
                    Configuration()
                    slider_signals("TotalNumberofPedestrainGates",results.rows.item(0).gates_Total_Number_of_Pedestrian_Gates)
                    
                    radio_signals("ContieversOverTraffic",results.rows.item(0).gates_Cantilevers_over_Trafic)
                    radio_signals("ContieversNOTOverTraffic",results.rows.item(0).gates_Cantilevers_NOT_over_Trafic)
                    radio_signals("NumberofTrafficPreSignals",results.rows.item(0).gates_Number_of_Traffic_Pre_Signals)
                    radio_signals("Quad",results.rows.item(0).gates_Gate_Config_Quad)
                    radio_signals("Full",results.rows.item(0).gates_Gate_Config_Full)
                    
                    radio_true_signals("TrafficSignalsControllingtheCrossing",results.rows.item(0).gates_Traffic_Signal_Controlling)
                    radio_true_signals("TrafficPreSignalsPresent",results.rows.item(0).gates_Traffic_Pre_Signals_Present)
                    
                    checkbox_signal("TypesofOtherLights-1",results.rows.item(0).gates_has_Incandescent_Lights)
                    checkbox_signal("TypesofOtherLights-2",results.rows.item(0).gates_has_Led)
                    checkbox_signal("TypesofOtherLights-3",results.rows.item(0).gates_has_Backlights)
                    
                    checkbox_signal("MedianGates",results.rows.item(0).gates_has_Median_Gates)
                    
                    
                    if ((results.rows.item(0).gates_Type_of_cantilver_Flashing_Lights != "I") && results.rows.item(0).gates_Type_of_cantilver_Flashing_Lights != null) {
                            $("[name=TypeofContileverFlashingLights][value='I']").attr('checked',false).checkboxradio("refresh")
                            $("[name=TypeofContileverFlashingLights][value='"+results.rows.item(0).gates_Type_of_cantilver_Flashing_Lights+"']").attr('checked',true).checkboxradio("refresh")
                    }
                    $("#TrafficPreSignalStorage").val(results.rows.item(0).gates_Traffic_Pre_Signal_Storage_Distance)
                    $("#TrafficPreSignalStop").val(results.rows.item(0).gates_Traffic_Pre_Signal_Stop_Distance)
                     });
                }, errorCB);
    });
function prev5()
{
	 $(".image_bottom4").removeAttr("disabled");
		$(".image_bottom4").attr("src","stylesheets/images/bottom-arrow.png");
	
    var $prev = $(".slide4:visible").slideUp().prev('.slide4');
    
   
    //alert($prev.is(":first-child"));
    if($prev.hasClass('current1') == true) {
    	//alert("ok ok");
    	$(".image_top4").attr("src","stylesheets/images/top-arrow-d.png");
    	$(".image_top4").attr("disabled", "disabled");
    	
        
        
    }
    
    $("#SignalsFooter").text($prev.find("input").val());
    $prev.slideDown();
 
}

function next5()
{
	  $(".image_top4").removeAttr("disabled");
		$(".image_top4").attr("src","stylesheets/images/top-arrow.png");
	   
    var $next = $(".slide4:visible").slideUp().next('.slide4');
    
    //alert($next.size())
  
   // alert($next.is(":last-child"));
    if($next.hasClass('current1') == true) {
    	$(".image_bottom4").attr("disabled", "disabled");
    	$(".image_bottom4").attr("src","stylesheets/images/bottom-arrow-d.png");
    	
    }
   
    $("#SignalsFooter").text($next.find("input").val());
    $next.slideDown();
    
    //alert($("#note_id").val())
    
   
       

    var data = {
            gates_Number_of_Bells: $("#NumberofBells").val(),
            gates_Posts_with_Flashing_Lights: $("#PostswithFlashingLights").val(),
            gates_has_Incandescent_Lights: $('input[name=TypesofOtherLights-1]:checkbox:checked').val(),
            gates_has_Led: $('input[name=TypesofOtherLights-2]:checkbox:checked').val(),
            gates_has_Backlights: $('input[name=TypesofOtherLights-3]:checkbox:checked').val(),
            gates_Cantilevers_over_Trafic: $('input[name=ContieversOverTraffic]:radio:checked').val(),
            gates_Cantilevers_NOT_over_Trafic: $('input[name=ContieversNOTOverTraffic]:radio:checked').val(),
            gates_Type_of_cantilver_Flashing_Lights: $('input[name=TypeofContileverFlashingLights]:radio:checked').val(),
            gates_Number_of_Flashing_Pairs: $("#NumberofFlashingPairs").val(),
            gates_Number_8_Incandescent_Signal_Pairs: $("#Number8Incandescent").val(),
            gates_Number_12_Incandescent_Signal_Pairs: $("#Number12Incandescent").val(),
            gates_Number_12_Led_Signal_Pairs: $("#Number12LED").val(),
            
            gates_Traffic_Signal_Controlling: $('input[name=TrafficSignalsControllingtheCrossing]:radio:checked').val(),
            gates_Traffic_Pre_Signals_Present: $('input[name=TrafficPreSignalsPresent]:radio:checked').val(),
            gates_Number_of_Traffic_Pre_Signals: $('input[name=NumberofTrafficPreSignals]:radio:checked').val(),
            gates_Traffic_Pre_Signal_Storage_Distance: $("#TrafficPreSignalStorage").val(),
            gates_Traffic_Pre_Signal_Stop_Distance: $("#TrafficPreSignalStop").val(),
            gates_Total_Number_of_Roadway_Gates: $("#TotalNumberofRoadwayGates").val(),
            gates_Total_Number_of_Pedestrian_Gates: $("#TotalNumberofPedestrainGates").val(),
            gates_Gate_Config_Quad: $('input[name=Quad]:radio:checked').val(),
            gates_Gate_Config_Full: $('input[name=Full]:radio:checked').val(),
            gates_has_Median_Gates: $('input[name=MedianGates]:checkbox:checked').val(),
            
            id: $("#note_id").val()

};
    saveNote4(data);
                    
}
 function saveNote4(note) {
   
    //Sometimes you may want to jot down something quickly....
   var text="update Crossing_Details set "+
   "gates_Number_of_Bells=?,"+
   "gates_Posts_with_Flashing_Lights=?,"+
   "gates_has_Incandescent_Lights=?,"+
   "gates_has_Led=?                ,"+
   "gates_has_Backlights=?         ,"+
   "gates_Cantilevers_over_Trafic=?,"+
   "gates_Cantilevers_NOT_over_Trafic=?,"+
   "gates_Type_of_cantilver_Flashing_Lights=?,"+
   "gates_Number_of_Flashing_Pairs=?         ,"+
   "gates_Number_8_Incandescent_Signal_Pairs=?,"+
   "gates_Number_12_Incandescent_Signal_Pairs=?,"+
   "gates_Number_12_Led_Signal_Pairs=?         ,"+
   "gates_Traffic_Signal_Controlling=?         ,"+
   "gates_Traffic_Pre_Signals_Present=?        ,"+
   "gates_Number_of_Traffic_Pre_Signals=?      ,"+
   "gates_Traffic_Pre_Signal_Storage_Distance=?,"+
   "gates_Traffic_Pre_Signal_Stop_Distance=?   ,"+
   "gates_Total_Number_of_Roadway_Gates=?      ,"+
   "gates_Total_Number_of_Pedestrian_Gates=?   ,"+
   "gates_Gate_Config_Quad=?                   ,"+
   "gates_Gate_Config_Full=?                   ,"+
   "gates_has_Median_Gates=? where cross_id=?";
   
       
    db.transaction(function(tx) {
//alert(note.Cross_Num)
       tx.executeSql(text,
               [note.gates_Number_of_Bells,
                note.gates_Posts_with_Flashing_Lights,
                note.gates_has_Incandescent_Lights,
                note.gates_has_Led,
                note.gates_has_Backlights,
                note.gates_Cantilevers_over_Trafic,
                note.gates_Cantilevers_NOT_over_Trafic,
                note.gates_Type_of_cantilver_Flashing_Lights,
                note.gates_Number_of_Flashing_Pairs,
                note.gates_Number_8_Incandescent_Signal_Pairs,
                note.gates_Number_12_Incandescent_Signal_Pairs,
                note.gates_Number_12_Led_Signal_Pairs,
                note.gates_Traffic_Signal_Controlling,
                note.gates_Traffic_Pre_Signals_Present,
                note.gates_Number_of_Traffic_Pre_Signals,
                note.gates_Traffic_Pre_Signal_Storage_Distance,
                note.gates_Traffic_Pre_Signal_Stop_Distance,
                note.gates_Total_Number_of_Roadway_Gates,
                note.gates_Total_Number_of_Pedestrian_Gates,
                note.gates_Gate_Config_Quad,
                note.gates_Gate_Config_Full,
                note.gates_has_Median_Gates,
                note.id]);
        
       
    }, errorCB);
   // $("#name").val(note.US_name);
    //alert(note.C_name);
    
}
 function radio_signals(name,value) {
     
     $("[name="+name+"][value='0']").attr('checked',true).checkboxradio("refresh")
     if (value != 0 && value != null) {
         $("[name="+name+"][value='0']").attr('checked',false).checkboxradio("refresh")
         $("[name="+name+"][value="+value+"]").attr('checked',true).checkboxradio("refresh")
     }
     
 }
 function slider_signals(id,value) {
     if(value != null)
         $("#"+id).val(value).slider("refresh");
}
 function checkbox_signal(id,value) {
     if(value=="true"){
         $("#"+id).attr("checked","checked")
         $("#"+id).checkboxradio("refresh");
         
     }
 }
 function radio_true_signals(name,value) {
     if (value != true && value != null) {
         $("[name="+name+"][value='true']").attr('checked',false).checkboxradio("refresh")
         $("[name="+name+"][value="+value+"]").attr('checked',true).checkboxradio("refresh")
     } 
}
