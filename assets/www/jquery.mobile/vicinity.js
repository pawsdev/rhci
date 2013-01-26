$("#vicinity").live("pageshow", function(e) {
//alert($("#note_id").val())
db.transaction(
                function(tx) {
                    var sql_vis="cross_id,vicinity_Predominant_Landuse,"+                         
                    "vicinity_Number_of_Intersecting_500   ,"+                  
                    "vicinity_Distance_to_Intersecting_One_Side ,"+             
                    "vicinity_Distance_to_Intersecting_Other_Side ,"+           
                    "vicinity_Trafic_Signals_within_500    ,"+                  
                    "vicinity_Driveway_within_100      ,"+                      
                    "vicinity_Is_Crossing_Illuminated   ,"+                     
                    "vicinity_Is_Commercial_Power_within_500  ,"+               
                    "vicinity_Is_Alternate_Power_within_500 ,"+                 
                    "vicinity_Do_Vehicles_queue_across_the_track  "
                    tx.executeSql("select "+sql_vis+" from Crossing_Details where cross_id='"+$("#note_id").val()+"'" ,[],function(tx,results) {
                     notes=results.rows.item(0).cross_id;
                 //alert(results.rows.item(0).general_Is_Crossing_Blocked)
                   
                     
                    Crossing="<div class='right_travel'>Crossing :"+notes+"</div>"
                    $("#Crossing5").html(Crossing);
                    vicinity_show("TrafficSignals",results.rows.item(0).vicinity_Trafic_Signals_within_500)
                    vicinity_show("Driveway",results.rows.item(0).vicinity_Driveway_within_100)
                    vicinity_show("IsCrossingIlluminated",results.rows.item(0).vicinity_Is_Crossing_Illuminated)
                    vicinity_show("IsCommercialPower",results.rows.item(0).vicinity_Is_Commercial_Power_within_500)
                    vicinity_show("IsAlternatePower",results.rows.item(0).vicinity_Is_Alternate_Power_within_500)
                    vicinity_show("DoVehiclesqueue",results.rows.item(0).vicinity_Do_Vehicles_queue_across_the_track)
                    $("#PredominantLanduse").val(results.rows.item(0).vicinity_Predominant_Landuse).selectmenu('refresh');
                    if (results.rows.item(0).vicinity_Number_of_Intersecting_500 != 0 && results.rows.item(0).vicinity_Number_of_Intersecting_500 != null) {
                        $("[name=NumberofIntersectingRoadways][value='0']").attr('checked',false).checkboxradio("refresh")
                        $("[name=NumberofIntersectingRoadways][value="+results.rows.item(0).vicinity_Number_of_Intersecting_500+"]").attr('checked',true).checkboxradio("refresh")
                    } 
                    $("#DistancetoIntersectionOne").val(results.rows.item(0).vicinity_Distance_to_Intersecting_One_Side)
                    $("#DistancetoIntersectionOther").val(results.rows.item(0).vicinity_Distance_to_Intersecting_Other_Side)
                    });
                }, errorCB);
});
function next6(){
   
    var $next = $(".slide5:visible").slideUp().next('.slide5');
   
    if($next.size() < 1) {
        
        $next = $(".slide5:first");
    }
    //$("#VicinityFooter").text($next.find("input").val());
    $next.slideDown();
     
       
   var data = {
           vicinity_Predominant_Landuse: $("#PredominantLanduse").val(),
           vicinity_Number_of_Intersecting_500: $('input[name=NumberofIntersectingRoadways]:radio:checked').val(),
           vicinity_Distance_to_Intersecting_One_Side: $("#DistancetoIntersectionOne").val(),
           vicinity_Distance_to_Intersecting_Other_Side: $("#DistancetoIntersectionOther").val(),
           vicinity_Trafic_Signals_within_500: $('input[name=TrafficSignals]:radio:checked').val(),
           vicinity_Driveway_within_100: $('input[name=Driveway]:radio:checked').val(),
           vicinity_Is_Crossing_Illuminated: $('input[name=IsCrossingIlluminated]:radio:checked').val(),
           vicinity_Is_Commercial_Power_within_500: $('input[name=IsCommercialPower]:radio:checked').val(),
           vicinity_Is_Alternate_Power_within_500: $('input[name=IsAlternatePower]:radio:checked').val(),
           vicinity_Do_Vehicles_queue_across_the_track: $('input[name=DoVehiclesqueue]:radio:checked').val(),
           id: $("#note_id").val()

};
   saveNote6(data);
            
   
}

 
function prev6(){
    
    var $prev = $(".slide5:visible").slideUp().prev('.slide5');
    if($prev.size() < 1) {
        $prev = $(".slide5:last");
    }
    //$("#VicinityFooter").text($prev.find("input").val());
    $prev.slideDown();
}
function saveNote6(note) {
    var text="update Crossing_Details set "+
    "vicinity_Predominant_Landuse=?,"+
    "vicinity_Number_of_Intersecting_500=?,"+
    "vicinity_Distance_to_Intersecting_One_Side=?,"+
    "vicinity_Distance_to_Intersecting_Other_Side=?,"+
    "vicinity_Trafic_Signals_within_500=?          ,"+
    "vicinity_Driveway_within_100=?                ,"+
    "vicinity_Is_Crossing_Illuminated=?            ,"+
    "vicinity_Is_Commercial_Power_within_500=?     ,"+
    "vicinity_Is_Alternate_Power_within_500=?      ,"+
    "vicinity_Do_Vehicles_queue_across_the_track=? where cross_id=?";
    //Sometimes you may want to jot down something quickly....
    
    db.transaction(function(tx) {

       tx.executeSql(text,
               [note.vicinity_Predominant_Landuse,
                note.vicinity_Number_of_Intersecting_500,
                note.vicinity_Distance_to_Intersecting_One_Side,
                note.vicinity_Distance_to_Intersecting_Other_Side,
                note.vicinity_Trafic_Signals_within_500,
                note.vicinity_Driveway_within_100,
                note.vicinity_Is_Crossing_Illuminated,
                note.vicinity_Is_Commercial_Power_within_500,
                note.vicinity_Is_Alternate_Power_within_500,
                note.vicinity_Do_Vehicles_queue_across_the_track,note.id]);
        
       
    }, errorCB);
   // $("#name").val(note.US_name);
    //alert(note.C_name);
    
}
function vicinity_show(name,value) {
    if (value != true && value != null) {
        $("[name="+name+"][value='true']").attr('checked',false).checkboxradio("refresh")
        $("[name="+name+"][value="+value+"]").attr('checked',true).checkboxradio("refresh")
    } 
}
