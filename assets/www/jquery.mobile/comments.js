$("#comments").live("pageshow", function(e) {
//alert($("#note_id").val())
db.transaction(
                function(tx) {
                   var sql_com="cross_id,comments_Commercial_Trucks_Present,"+                    
                   "comments_HAZMAT_Trucks_Present    ,"+                    
                   "comments_School_Busses_Present   ,"+                     
                   "comments_Emergency_Vehicle_Present ,"+                   
                   "comments_Comment_for_FDOT" 
                    tx.executeSql("select "+sql_com+" from Crossing_Details where cross_id='"+$("#note_id").val()+"'" ,[],function(tx,results) {
                    notes=results.rows.item(0).cross_id;
                   
                    Crossing="<div class='right_travel'>Crossing :"+notes+"</div>"
                    $("#Crossing6").html(Crossing);
                    comments_show("CommercialTrucksPresent",results.rows.item(0).comments_Commercial_Trucks_Present)
                    comments_show("HAZMATTrucksPresent",results.rows.item(0).comments_HAZMAT_Trucks_Present)
                    comments_show("SchoolBusesPresent",results.rows.item(0).comments_School_Busses_Present)
                    comments_show("EmergencyVehiclesPresent",results.rows.item(0).comments_Emergency_Vehicle_Present)
                    $("#CommentsforFDOT").val(results.rows.item(0).comments_Comment_for_FDOT)
                    
                });
                }, errorCB);
});
function next7(){
   
    var $next = $(".slide6:visible").slideUp().next('.slide6');
   
    if($next.size() < 1) {
        
        $next = $(".slide6:first");
    }
    //$("#CommentsFooter").text($next.find("input").val());
    $next.slideDown();
     
       
   var data = {
           comments_Commercial_Trucks_Present: $('input[name=CommercialTrucksPresent]:radio:checked').val(),
           comments_HAZMAT_Trucks_Present: $('input[name=HAZMATTrucksPresent]:radio:checked').val(),
           comments_School_Busses_Present: $('input[name=SchoolBusesPresent]:radio:checked').val(),
           comments_Emergency_Vehicle_Present: $('input[name=EmergencyVehiclesPresent]:radio:checked').val(),
           comments_Comment_for_FDOT: $("#CommentsforFDOT").val(),
           
           id: $("#note_id").val()

};
   saveNote7(data);
                 
             
   
}

 
function prev7(){
    
    var $prev = $(".slide6:visible").slideUp().prev('.slide6');
    if($prev.size() < 1) {
        $prev = $(".slide6:last");
    }
    //$("#CommentsFooter").text($prev.find("input").val());
    $prev.slideDown();
}
function saveNote7(note) {
    var text="update Crossing_Details set "+
    "comments_Commercial_Trucks_Present=?,"+
    "comments_HAZMAT_Trucks_Present=?,"+
    "comments_School_Busses_Present=?,"+
    "comments_Emergency_Vehicle_Present=?,"+
    "comments_Comment_for_FDOT=? where cross_id=?";
    //Sometimes you may want to jot down something quickly....
    
   
    
    db.transaction(function(tx) {
//alert(note.tracks[6])
       tx.executeSql(text,
               [ note.comments_Commercial_Trucks_Present,
                 note.comments_HAZMAT_Trucks_Present,
                 note.comments_School_Busses_Present,
                 note.comments_Emergency_Vehicle_Present,
                 note.comments_Comment_for_FDOT ,note.id]);
        
       
    }, errorCB);
   // $("#name").val(note.US_name);
    //alert(note.C_name);
    
}
function comments_show(name,value) {
    if (value != true && value != null) {
        $("[name="+name+"][value='true']").attr('checked',false).checkboxradio("refresh")
        $("[name="+name+"][value="+value+"]").attr('checked',true).checkboxradio("refresh")
    } 
}

