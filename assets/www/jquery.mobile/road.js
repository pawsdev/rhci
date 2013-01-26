$("#road").live("pageshow", function(e) {
//alert($("#note_id").val())
db.transaction(
                function(tx) {
                  var sql_road="cross_id,Road_Street_type ,"+                                    
                  "Road_Thru_Lanes_Crossing_Tracks  ,"+                    
                  "Road_Aux_Lanes_Crossing_Tracks    ,"+                   
                  "Road_Posted_Speed_Limit     ,"+                         
                  "Road_Track_Parallel_To_Street  ,"+                      
                  "Road_Is_Roadway_Paved      ,"+                          
                  "Road_Pavement_Material      ,"+                         
                  "Road_Median_Channelization      ,"+                     
                  "Road_Channelization_Device      ,"+                     
                  "Road_Sidewalk_Approach_Crossing  ,"+                    
                  "Road_Sidewalk_Cross_track       ,"+                     
                  "Road_MainLine_Crossing_Surface   ,"+                    
                  "Road_Surface_Width              ,"+                     
                  "Road_Surface_Length              ,"+                    
                  "Road_Approach_Leave_Condition      ,"+                  
                  "Road_Vehicle_Reaction             ,"+                   
                  "Road_Driver_Reaction             ,"+                    
                  "Road_Rail_Pad_Movement           ,"+                    
                  "Road_Pavement_Markings            "   ;
                    tx.executeSql("select "+sql_road+" from Crossing_Details where cross_id='"+$("#note_id").val()+"'" ,[],function(tx,results) {
                     notes=results.rows.item(0).cross_id;
                 //alert(results.rows.item(0).general_Is_Crossing_Blocked)
                    
                     
                    Crossing="<div class='right_travel'>Crossing :"+notes+"</div>";
                    $("#Crossing2").html(Crossing);

                    $("#Pavement_Materia").val(results.rows.item(0).Road_Pavement_Material).selectmenu('refresh');
                    if(results.rows.item(0).Road_Median_Channelization=="none"){
                        $("#Median_Channelization").val(results.rows.item(0).Road_Median_Channelization).selectmenu('refresh');
                        $("#Channelization_Device").val(results.rows.item(0).Road_Channelization_Device).selectmenu('refresh');
                        call_data();
                    }
                    
                    $("#Street_Type").val(results.rows.item(0).Road_Street_type).selectmenu('refresh');
                    $("#Mainline_Crossing_Surface").val(results.rows.item(0).Road_MainLine_Crossing_Surface).selectmenu('refresh');
                    if(results.rows.item(0).Road_Thru_Lanes_Crossing_Tracks != null)
                        $("#Lanses_Crossing").val(results.rows.item(0).Road_Thru_Lanes_Crossing_Tracks).slider("refresh");
                    if(results.rows.item(0).Road_Aux_Lanes_Crossing_Tracks != null)
                        $("#Aux_Lanes").val(results.rows.item(0).Road_Aux_Lanes_Crossing_Tracks).slider("refresh");
                    $("#Posted_Speed").val(results.rows.item(0).Road_Posted_Speed_Limit);
                    if(results.rows.item(0).Road_Track_Parallel_To_Street=="false"){

                        $("#Track_par_n").attr("checked","checked");
                        $("#Track_par_y").removeAttr("checked");
                        $("#Track_par_n").checkboxradio("refresh");
                        $("#Track_par_y").checkboxradio("refresh");
                        
                    }
                    if(results.rows.item(0).Road_Is_Roadway_Paved=="false"){
                        none();
                        $("#Is_roadway_n").attr("checked","checked");
                        $("#Is_roadway_y").removeAttr("checked");
                        $("#Is_roadway_n").checkboxradio("refresh");
                        $("#Is_roadway_y").checkboxradio("refresh");
                        
                    }
                    if(results.rows.item(0).Road_Sidewalk_Approach_Crossing=="false"){

                        $("#Sidewalk_n").attr("checked","checked");
                        $("#Sidewalk_y").removeAttr("checked");
                        $("#Sidewalk_n").checkboxradio("refresh");
                        $("#Sidewalk_y").checkboxradio("refresh");
                        
                    }
                    if(results.rows.item(0).Road_Sidewalk_Cross_track=="false"){

                        $("#Sidewalk_Cross_n").attr("checked","checked");
                        $("#Sidewalk_Cross_y").removeAttr("checked");
                        $("#Sidewalk_Cross_n").checkboxradio("refresh");
                        $("#Sidewalk_Cross_y").checkboxradio("refresh");
                        
                    }
                    if(results.rows.item(0).Road_Surface_Width != null)
                        $("#Surface_Width").val(results.rows.item(0).Road_Surface_Width).slider("refresh");
                    if(results.rows.item(0).Road_Surface_Length != null)
                        $("#Surface_Length").val(results.rows.item(0).Road_Surface_Length).slider("refresh");
                    $("#Approach_and_Leave").val(results.rows.item(0).Road_Approach_Leave_Condition).selectmenu('refresh');
                    $("#Vehicle_Reaction").val(results.rows.item(0).Road_Vehicle_Reaction).selectmenu('refresh');
                    $("#Driver_Reaction").val(results.rows.item(0).Road_Driver_Reaction).selectmenu('refresh');
                    $("#Rail_Pad").val(results.rows.item(0).Road_Rail_Pad_Movement).selectmenu('refresh');
                    $("#Pavement_Markings").val(results.rows.item(0).Road_Pavement_Markings).selectmenu('refresh');
                   // alert($("#Is_roadway_n").is(":checked"))
                    });
                }, errorCB);
});
function next3(){
    k=0;

    $(".image_top2").removeAttr("disabled");
	$(".image_top2").attr("src","stylesheets/images/top-arrow.png");
    var $next = $(".slide2:visible").slideUp().next('.slide2');
  
    
   // alert($next.is(":last-child"));
    if($next.hasClass('current1') == true) {
    	$(".image_bottom2").attr("disabled", "disabled");
    	$(".image_bottom2").attr("src","stylesheets/images/bottom-arrow-d.png");
    	
    	
    }
   
    $("#RoadFooter").text($next.find("input").val());
    $next.slideDown();
       //alert(results1.rows.item(0).general_US_Route_Number)
      // alert($("#select-choice-0").val())
    //l=document.forms["form_name"].getElementsByTagName("input").length;elent
    el=document.getElementById('form3_id').elements;
    //el1=$('#elent').find('input')
   // alert(el.length)
    //alert($('#elent').find('input')[0].value)
   //railroad_form=document.getElementById('railroad_id').elements
   //alert($("#note_id").val())
   for(var j=0; j<el.length; j++){
                   if(el[j].type=='radio'){
                   //alert(el1[j].value)
               if(el[j].checked ==true && (el[j].name =="Track_par")){
                   ens_sign6=el[j].value;
                   
                   //return false;
               }
               
               if(el[j].checked ==true && (el[j].name =="Is_roadway")){
                   ens_sign7=el[j].value;
                   
                   //return false;
               }
               if(el[j].checked ==true && (el[j].name =="Sidewalk")){
                   ens_sign8=el[j].value;
                   
                   //return false;
               }
               if(el[j].checked ==true && (el[j].name =="Sidewalk_Cross")){
                   ens_sign9=el[j].value;
                   
                   //return false;
               }
               
           }
                   
       }
       
       
   var data = {
           Street_Type: $("#Street_Type").val(),
           Lanses_Crossing: $("#Lanses_Crossing").val(),
           Aux_Lanes: $("#Aux_Lanes").val(),
           Posted_Speed: $("#Posted_Speed").val(),
           Track_par: ens_sign6,
           Is_roadway: ens_sign7,
           
           Pavement_Materia: $("#Pavement_Materia").val(),
           Median_Channelization: $("#Median_Channelization").val(),
           Channelization_Device: $("#Channelization_Device").val(),
           Sidewalk: ens_sign8,
           Sidewalk_Cross: ens_sign9,
           Mainline_Crossing_Surface: $("#Mainline_Crossing_Surface").val(),
           Surface_Width: $("#Surface_Width").val(),
           Surface_Length: $("#Surface_Length").val(),
           Approach_and_Leave: $("#Approach_and_Leave").val(),
           Vehicle_Reaction: $("#Vehicle_Reaction").val(),
           Driver_Reaction: $("#Driver_Reaction").val(),
           Rail_Pad: $("#Rail_Pad").val(),
           Pavement_Markings: $("#Pavement_Markings").val(),
           id: $("#note_id").val()

};
   saveNote2(data);
              
}

 
function prev3(){
	 $(".image_bottom2").removeAttr("disabled");
		$(".image_bottom2").attr("src","stylesheets/images/bottom-arrow.png");
		
    var $prev = $(".slide2:visible").slideUp().prev('.slide2');
   
    //alert($prev.is(":first-child"));
    if($prev.hasClass('current1') == true) {
    	//alert("ok ok");
    	$(".image_top2").attr("src","stylesheets/images/top-arrow-d.png");
    	$(".image_top2").attr("disabled", "disabled");
        
        
    }
    
    $("#RoadFooter").text($prev.find("input").val());
    $prev.slideDown();
}
function saveNote2(note) {
    
    //Sometimes you may want to jot down something quickly....
   
    db.transaction(function(tx) {
//alert(note.tracks[6])
       tx.executeSql("update Crossing_Details set Road_Street_type=?, Road_Thru_Lanes_Crossing_Tracks=?, Road_Aux_Lanes_Crossing_Tracks=?, Road_Posted_Speed_Limit=?, Road_Track_Parallel_To_Street=?, Road_Is_Roadway_Paved=?, Road_Pavement_Material=?, Road_Median_Channelization=?, Road_Channelization_Device=?, Road_Sidewalk_Approach_Crossing=?,Road_Sidewalk_Cross_track=?,Road_MainLine_Crossing_Surface=?,Road_Surface_Width=?,Road_Surface_Length=?,Road_Approach_Leave_Condition=?,Road_Vehicle_Reaction=?,Road_Driver_Reaction=?,Road_Rail_Pad_Movement=?,Road_Pavement_Markings=? where cross_id=?",
               [note.Street_Type,note.Lanses_Crossing, note.Aux_Lanes, 
                note.Posted_Speed, note.Track_par, note.Is_roadway,
                note.Pavement_Materia, note.Median_Channelization, 
                note.Channelization_Device, note.Sidewalk, 
                note.Sidewalk_Cross, note.Mainline_Crossing_Surface,
                note.Surface_Width,note.Surface_Length,note.Approach_and_Leave,
                note.Vehicle_Reaction,note.Driver_Reaction,
                note.Rail_Pad,note.Pavement_Markings,note.id]);
        
       
    }, errorCB);
   // $("#name").val(note.US_name);
    //alert(note.C_name);
    
}
function none () {
    $("#Pavement_Materia").val("none").selectmenu('disable').selectmenu("refresh");
    /*$("#Median_Channelization").val("none").selectmenu('disable').selectmenu("refresh");
    $("#Channelization_Device").val("none").selectmenu('disable').selectmenu("refresh");*/
  }
  function yes_none() {
    $("#Pavement_Materia").selectmenu('enable').val("Asphalt").selectmenu("refresh");
    /*$("#Median_Channelization").selectmenu('enable').val("One Approach").selectmenu("refresh");
    $("#Channelization_Device").selectmenu('enable').val("One Approach").selectmenu("refresh");*/
  }
  function call_data() {
     
      if( $("#Median_Channelization").val() =='none'){
          $("#Channelization_Device").val("none").selectmenu('disable').selectmenu("refresh");
      }
      else{
          $("#Channelization_Device").selectmenu('enable').val("One Approach").selectmenu("refresh");
      }
}
 