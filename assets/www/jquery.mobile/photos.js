$("#photos").live("pageshow",function(e){
	
	$(".slide8").find(".ui-btn").css({"width":"50%","margin":"auto","margin-bottom":"80px"});
     db.transaction(
                function(tx) {
                    var Photos_data="Photos_ensUsDotImage							,"+
                    "Photos_railroadDirection2SupplementalImage		,"+
                    "Photos_roadwayDirection1Image					,"+
                    "Photos_roadwayDirection2Image					,"+
                    "Photos_roadwayDirection1SupplementalImage		,"+
                    "Photos_roadwayDirection2SupplementalImage		,"+
                    "Photos_railroadDirection1Image					,"+
                    "Photos_railroadDirection2Image					,"+
                    "Photos_railroadDirection1SupplementalImage		,"+

                    "Photos_crossingSurfaceDirection1Image			,"+
                    "Photos_crossingSurfaceDirection2Image			,"+
                    "Photos_cabinetImage							,"+
                    "Photos_additionalImages,cross_id				";
                    
                    tx.executeSql("select "+Photos_data+" from Crossing_Details where cross_id='"+$("#note_id").val()+"'" ,[],function(tx,results) {
                     notes=results.rows.item(0).cross_id;
                     Crossing="<div class='right_travel'>Crossing :"+notes+"</div>";
                     $("#Crossing8").html(Crossing);
               
                     console.log(results.rows.item(0).Photos_ensUsDotImage);
                     console.log(results.rows.item(0).Photos_railroadDirection2SupplementalImage);
                     if(results.rows.item(0).Photos_ensUsDotImage != null && results.rows.item(0).Photos_ensUsDotImage != "undefined" && results.rows.item(0).Photos_ensUsDotImage != ""){
                    	
                    	 localStorage.setItem("ens1",0);
                    	
                    	window.resolveLocalFileSystemURI(results.rows.item(0).Photos_ensUsDotImage, uploadFile, faill);
                    	
                     }
                    
                     if(results.rows.item(0).Photos_railroadDirection2SupplementalImage != null && results.rows.item(0).Photos_railroadDirection2SupplementalImage != "undefined" && results.rows.item(0).Photos_railroadDirection2SupplementalImage != ""){
                    	 
                    	 
                    	 localStorage.setItem("ens2",1);
                    	
                    	 
                 		window.resolveLocalFileSystemURI(results.rows.item(0).Photos_railroadDirection2SupplementalImage, uploadFile, faill);
                 	
                    	  
                     };
                    if(results.rows.item(0).Photos_roadwayDirection1Image != null && results.rows.item(0).Photos_roadwayDirection1Image!="undefined" && results.rows.item(0).Photos_roadwayDirection1Image!="")
                    	{
                    	localStorage.setItem("ens3",2);
                    	window.resolveLocalFileSystemURI(results.rows.item(0).Photos_roadwayDirection1Image, uploadFile, faill);
                    	}
                    if(results.rows.item(0).Photos_roadwayDirection2Image != null && results.rows.item(0).Photos_roadwayDirection2Image!="undefined" && results.rows.item(0).Photos_roadwayDirection2Image!="")
                	{
                	localStorage.setItem("ens4",3);
                	window.resolveLocalFileSystemURI(results.rows.item(0).Photos_roadwayDirection2Image, uploadFile, faill);
                	}
                    if(results.rows.item(0).Photos_roadwayDirection1SupplementalImage != null && results.rows.item(0).Photos_roadwayDirection1SupplementalImage!="undefined" && results.rows.item(0).Photos_roadwayDirection1SupplementalImage!="")
                	{
                	localStorage.setItem("ens5",4);
                	window.resolveLocalFileSystemURI(results.rows.item(0).Photos_roadwayDirection1SupplementalImage, uploadFile, faill);
                	}
                     
//                      $("#Direction_number_img").attr("src",results.rows.item(0).Photos_roadwayDirection1Image);
//                      $("#Direction2_number_img").attr("src",results.rows.item(0).Photos_roadwayDirection2Image);
//                      $(".delete_img").attr("src",results.rows.item(0).Photos_roadwayDirection1SupplementalImage);
//                      $(".delete_img1").attr("src",results.rows.item(0).Photos_roadwayDirection2SupplementalImage);
//                      $("#Railroad_Direction_1_img").attr("src",results.rows.item(0).Photos_railroadDirection1Image);
//                      $("#Railroad_Direction_2_img").attr("src",results.rows.item(0).Photos_railroadDirection2Image);
//                      $(".delete_img2").attr("src",results.rows.item(0).Photos_railroadDirection1SupplementalImage);
//                      $("#number_img").attr("src",results.rows.item(0).Photos_railroadDirection2SupplementalImage);
//                      $("#Crossing_Roadway_1_img").attr("src",results.rows.item(0).Photos_crossingSurfaceDirection1Image);
//                      $("#Crossing_Roadway_2_img").attr("src",results.rows.item(0).Photos_crossingSurfaceDirection2Image);
//                      $(".delete_img3").attr("src",results.rows.item(0).Photos_cabinetImage);
//                      $(".delete_img4").attr("src",results.rows.item(0).Photos_additionalImages);
                });
                },errorCB);
     
     
     
    
});

var c=0;
var s_img="";
 function captureSuccess(mediaFiles) {
         var i, len;
         for (i = 0, len = mediaFiles.length; i < len; i += 1) {
             uploadFile(mediaFiles[i]);
         }       
         
     }

     // Called if something bad happens.
     // 
     function captureError(error) {
         //var msg = 'An error occurred during capture: ' + error.code;
         //navigator.notification.alert(msg, null, 'Uh oh!');
         //$("#Direction_1").closest('.ui-btn').show();
     }

     // A button will call this function
     //
     
     function captureImage(ens) {
        
         localStorage.ens=ens;
         
         navigator.camera.getPicture(uploadFile1, function(ex) {
             //alert("Camera Error!");
         }, { quality : 30, 
             destinationType: Camera.DestinationType.FILE_URI,
             sourceType: Camera.PictureSourceType.CAMERA, 
             mediaType: Camera.MediaType.PICTURE,
             saveToPhotoAlbum: true
             });
     }
function uploadFile1(ImageUri) {
	
    localStorage.IMAGEURI=ImageUri;
    //window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, faill);

    window.resolveLocalFileSystemURI(ImageUri, uploadFile, faill);
}


     // Upload files to server
     function uploadFile(mediaFile) {
    	 //alert(localStorage.ens);
         name = mediaFile.name;
         path=mediaFile.fullPath;
        
         var x=name.split(".");
        
        if (localStorage.ens==0 || localStorage.getItem("ens1")==0) {
           
            var src_ens=document.getElementById("ENS_img");
            $(".ENS_div").show();
            $(".ENS_div").remove("id");
            $(".ENS_div").attr("id",x[0]);
            src_ens.src=path;
            localStorage.removeItem("ens1");
            data_save(path,"Photos_ensUsDotImage");
            
        }
         if (localStorage.ens==1 || localStorage.getItem("ens2")==1) {
        	 
             var number_img=document.getElementById("number_img");
             $(".ENS_Number_div").show();
             
             $(".ENS_Number_div").remove("id");
             $(".ENS_Number_div").attr("id",x[0]);
             
             number_img.src=path;
             localStorage.removeItem("ens2");
             data_save(path,"Photos_railroadDirection2SupplementalImage");
        }
         if(localStorage.ens==2 || localStorage.getItem("ens5")==4){
        	 alert("its done");
     s_img ="<div  class='image' id='"+x[0]+"' style='position:relative;margin-right: 10px;margin-top:20px; '><img class='delete_img' width='256' height='256' id='"+c+"' src='"+path+"'/><img id='d"+x[0]+"' class='delete_tap_image' src='stylesheets/images/delete_image.png'  style='position:absolute;right: 0%;top:0%;'/> </div>";
            
       
     document.getElementById('picture_hold').innerHTML +=s_img;
     localStorage.removeItem("ens5");
     data_save(path,"Photos_roadwayDirection1SupplementalImage");
     
         }
         if (localStorage.ens==3 || localStorage.getItem("ens3")==2) {
             //alert(localStorage.getItem("ens3"))
             $(".Direction_1").closest('.ui-btn').hide();
             $(".Direction_1").remove("id");
             $(".Direction_1").attr("id","id"+x[0]);
             var Direction_number_img=document.getElementById("Direction_number_img");
             
             $(".Roadway_1").show();
             $(".Roadway_1").attr("id",x[0]);
             Direction_number_img.src=path;
             localStorage.removeItem("ens3");
             data_save(path,"Photos_roadwayDirection1Image");
        }
         if (localStorage.ens==4 || localStorage.getItem("ens4")==3) {
        	 
             $(".Direction_2").closest('.ui-btn').hide();
             $(".Direction_2").remove("id");
             $(".Direction_2").attr("id","id"+x[0]);
             var Direction2_number_img=document.getElementById("Direction2_number_img");
             $(".Roadway_2").show();
             $(".Roadway_2").attr("id",x[0]);
             Direction2_number_img.src=path;
             localStorage.removeItem("ens4");
             data_save(path,"Photos_roadwayDirection2Image");
        }
         if (localStorage.ens==5) {
             s_img ="<div  class='image1' id='"+x[0]+"' style='position:relative;margin-right: 10px;margin-top:20px; '><img class='delete_img1' width='256' height='256' id='"+c+"' src='"+path+"'/><img id='d"+x[0]+"' class='delete_tap_image1' src='stylesheets/images/delete_image.png'  style='position:absolute;right: 0%;top:0%;'/> </div>";
             
             
             document.getElementById('picture_hold1').innerHTML +=s_img;
        }
         if (localStorage.ens==10) {
             s_img ="<div  class='image2' id='"+x[0]+"' style='position:relative;margin-right: 10px;margin-top:20px; '><img class='delete_img2' width='256' height='256' id='"+c+"' src='"+path+"'/><img id='d"+x[0]+"' class='delete_tap_image2' src='stylesheets/images/delete_image.png'  style='position:absolute;right: 0%;top:0%;'/> </div>";
             
             
             document.getElementById('picture_hold2').innerHTML +=s_img;
        }
         if (localStorage.ens==11) {
             s_img ="<div  class='image3' id='"+x[0]+"' style='position:relative;margin-right: 10px;margin-top:20px; '><img class='delete_img3' width='256' height='256' id='"+c+"' src='"+path+"'/><img id='d"+x[0]+"' class='delete_tap_image3' src='stylesheets/images/delete_image.png'  style='position:absolute;right: 0%;top:0%;'/> </div>";
             
             
             document.getElementById('picture_hold3').innerHTML +=s_img;
        }
         if (localStorage.ens==12) {
             s_img ="<div  class='image4' id='"+x[0]+"' style='position:relative;margin-right: 10px;margin-top:20px; '><img class='delete_img4' width='256' height='256' id='"+c+"' src='"+path+"'/><img id='d"+x[0]+"' class='delete_tap_image4' src='stylesheets/images/delete_image.png'  style='position:absolute;right: 0%;top:0%;'/> </div>";
             
             
             document.getElementById('picture_hold4').innerHTML +=s_img;
        }
        if (localStorage.ens==6) {
             $(".Crossing_Direction_1").closest('.ui-btn').hide();
             $(".Crossing_Direction_1").remove("id");
             $(".Crossing_Direction_1").attr("id","id"+x[0]);
             var Crossing_Roadway_1_img=document.getElementById("Crossing_Roadway_1_img");
             $(".Crossing_Roadway_1").show();
             $(".Crossing_Roadway_1").attr("id",x[0]);
             Crossing_Roadway_1_img.src=path;
        }
         if (localStorage.ens==7) {
             $(".Crossing_Direction_2").closest('.ui-btn').hide();
             $(".Crossing_Direction_2").remove("id");
             $(".Crossing_Direction_2").attr("id","id"+x[0]);
             var Crossing_Roadway_2_img=document.getElementById("Crossing_Roadway_2_img");
             $(".Crossing_Roadway_2").show();
             $(".Crossing_Roadway_2").attr("id",x[0]);
             Crossing_Roadway_2_img.src=path;
        }
         if (localStorage.ens==8) {
             $(".Railroad_Direction_1").closest('.ui-btn').hide();
             $(".Railroad_Direction_1").remove("id");
             $(".Railroad_Direction_1").attr("id","id"+x[0]);
             var Railroad_Direction_1_img=document.getElementById("Railroad_Direction_1_img");
             $(".Railroad_Direction_1_d").show();
             $(".Railroad_Direction_1_d").attr("id",x[0]);
             Railroad_Direction_1_img.src=path;
        }
         if (localStorage.ens==9) {    
             $(".Railroad_Direction_2").closest('.ui-btn').hide();
             $(".Railroad_Direction_2").remove("id");
             $(".Railroad_Direction_2").attr("id","id"+x[0]);
             var Railroad_Direction_2_img=document.getElementById("Railroad_Direction_2_img");
             $(".Railroad_Direction_2_d").show();
             $(".Railroad_Direction_2_d").attr("id",x[0]);
             Railroad_Direction_2_img.src=path;
        }
         
     c++;
     }
     function data_save(path,data) {
    		db.transaction(
    	            function(tx) {
    	            	
    	            	tx.executeSql("update Crossing_Details set "+data+"=? where cross_id=?",[path,$("#note_id").val()]);
    	            	
    	            });
    	}
     $("#click_camera").live('touchstart',function() {
    	 
        captureImage(2);
    });
    $("#click_camera1").live('touchstart',function() {
        captureImage(5);
    });
    $("#click_camera2").live('touchstart',function() {
        captureImage(10);
    });
     $("#click_camera3").live('touchstart',function() {
        captureImage(11);
    });
     $("#click_camera4").live('touchstart',function() {
        captureImage(12);
    });
    $(".image > .delete_tap_image").live('touchstart', function() {
      localStorage.remove_data="Photos_roadwayDirection1SupplementalImage";
        window.resolveLocalFileSystemURI($(this).prev(".delete_img").attr("src"), ResolveSuccess, faill); 
    });
     $(".image1 > .delete_tap_image1").live('touchstart', function() {
      
        window.resolveLocalFileSystemURI($(this).prev(".delete_img1").attr("src"), ResolveSuccess, faill); 
    });
    $(".image2 > .delete_tap_image2").live('touchstart', function() {
      
        window.resolveLocalFileSystemURI($(this).prev(".delete_img2").attr("src"), ResolveSuccess, faill); 
    });
    $(".image3 > .delete_tap_image3").live('touchstart', function() {
      
        window.resolveLocalFileSystemURI($(this).prev(".delete_img3").attr("src"), ResolveSuccess, faill); 
    });
    $(".image4 > .delete_tap_image4").live('touchstart', function() {
      
        window.resolveLocalFileSystemURI($(this).prev(".delete_img4").attr("src"), ResolveSuccess, faill); 
    });
    function ResolveSuccess(entry) {
         var x=entry.name.split(".");
         
         
         var r=confirm("Delete This Picture");
         if (r==true)
           {
        	 db.transaction(
       	            function(tx) {
       	            	
       	            	tx.executeSql("update Crossing_Details set "+localStorage.remove_data+"=? where cross_id=?",[null,$("#note_id").val()]);
       	            	tx.executeSql("select Photos_ensUsDotImage,Photos_railroadDirection2SupplementalImage,cross_id from Crossing_Details where cross_id='"+$("#note_id").val()+"'" ,[],function(tx,results) {
       	            		
       	            	});
       	            });
            $("#"+x[0]).hide();
             $("#id"+x[0]).closest('.ui-btn').show();
            
             entry.remove(function (entry) {
            	 
                 //alert('removal succeeded');
                 }, function () {
                // alert('Error removing file: ' );
                 });
            
           }
         else {
             

        }
    
    }
function faill(evt) {
	//alert("fail");
    $("#"+localStorage.div).hide();
    $("#id"+localStorage.div).closest('.ui-btn').show();
    console.log("Url is not resolve");
}
var clickEventType=((document.ontouchstart!==null)?'click':'touchstart');
$("#ens_delete_image").bind(clickEventType, myClickHandler);
$("#ens_number_delete_image").bind(clickEventType, myClickHandler1);
$(".Direction_1").bind(clickEventType, Roadway_1);
$(".Direction_2").bind(clickEventType, Roadway_2);

$("#Direction_delete_image").bind(clickEventType, { id: 'Direction_delete_image' }, Roadway_1_delete);
$("#Direction2_delete_image").bind(clickEventType, Roadway_2_delete);

$(".Crossing_Direction_1").bind(clickEventType, Crossing_Direction_1);
$(".Crossing_Direction_2").bind(clickEventType, Crossing_Direction_2);

$("#Crossing_Roadway_1_delete_image").bind(clickEventType, Crossing_Roadway_1_delete_image);
$("#Crossing_Roadway_2_delete_image").bind(clickEventType, Crossing_Roadway_2_delete_image);

$(".Railroad_Direction_1").bind(clickEventType, Railroad_Direction_1);
$(".Railroad_Direction_2").bind(clickEventType, Railroad_Direction_2);

$("#Railroad_Direction_1_delete_image").bind(clickEventType, Railroad_Direction_1_delete_image);
$("#Railroad_Direction_2_delete_image").bind(clickEventType, Railroad_Direction_2_delete_image);
//$(".delete_tap_image").bind(clickEventType,$('.image').find(".delete_img").attr("src"), myClickHandler2);
function myClickHandler(){
    localStorage.remove_data="Photos_ensUsDotImage";
    window.resolveLocalFileSystemURI($("#ENS_img").attr("src"), ResolveSuccess, faill);
}
function myClickHandler1(){
	localStorage.remove_data="Photos_railroadDirection2SupplementalImage";
    window.resolveLocalFileSystemURI($("#number_img").attr("src"), ResolveSuccess, faill);
}
function Roadway_1() {
    
    captureImage(3);
    
}
function Roadway_2() {
    captureImage(4);
}
function Roadway_1_delete(event) {
    var data = event.data;
    localStorage.remove_data="Photos_roadwayDirection1Image";
    localStorage.div=$("#"+data.id).parent("div").attr("id");
    window.resolveLocalFileSystemURI($("#Direction_number_img").attr("src"), ResolveSuccess, faill);
    
}
function Roadway_2_delete() {
	localStorage.remove_data="Photos_roadwayDirection2Image";
    window.resolveLocalFileSystemURI($("#Direction2_number_img").attr("src"), ResolveSuccess, faill);
}
function Crossing_Direction_1() {
    //alert("Crossing_Direction_1")
    captureImage(6);
}
function Crossing_Direction_2() {
    //alert("Crossing_Direction_2")
   captureImage(7);
}
function Crossing_Roadway_1_delete_image() {
    window.resolveLocalFileSystemURI($("#Crossing_Roadway_1_img").attr("src"), ResolveSuccess, faill);
}

function Crossing_Roadway_2_delete_image() {
    window.resolveLocalFileSystemURI($("#Crossing_Roadway_2_img").attr("src"), ResolveSuccess, faill);
}


function Railroad_Direction_1() {
    //alert("Crossing_Direction_1")
    captureImage(8);
}
function Railroad_Direction_2() {
    //alert("Crossing_Direction_2")
   captureImage(9);
}
function Railroad_Direction_1_delete_image() {
    window.resolveLocalFileSystemURI($("#Railroad_Direction_1_img").attr("src"), ResolveSuccess, faill);
}

function Railroad_Direction_2_delete_image() {
    window.resolveLocalFileSystemURI($("#Railroad_Direction_2_img").attr("src"), ResolveSuccess, faill);
}
function next8(){
	$(".image_top8").removeAttr("disabled");
	$(".image_top8").attr("src","stylesheets/images/top-arrow.png");

    var $next = $(".slide8:visible").slideUp().next('.slide8');
    
    
   // alert($next.is(":last-child"));
    if($next.hasClass('current1') == true) {
    	$(".image_bottom8").attr("disabled", "disabled");
    	$(".image_bottom8").attr("src","stylesheets/images/bottom-arrow-d.png");
    	
    }
    
    $("#PhotosFooter").text($next.find("input").val());
    $next.slideDown();
         

    
    //saveImage(data);            
   
}


function prev8(){
	 $(".image_bottom8").removeAttr("disabled");
		$(".image_bottom8").attr("src","stylesheets/images/bottom-arrow.png");
		
    var $prev = $(".slide8:visible").slideUp().prev('.slide8');
   
    //alert($prev.is(":first-child"));
    if($prev.hasClass('current1') == true) {
    	//alert("ok ok");
    	$(".image_top8").attr("src","stylesheets/images/top-arrow-d.png");
    	$(".image_top8").attr("disabled", "disabled");
    	
        
        
    }
    
    $("#PhotosFooter").text($prev.find("input").val());
    $prev.slideDown();
   
    
}
function saveImage(data) {
	db.transaction(
            function(tx) {
                var sql_photos="Photos_ensUsDotImage			=?,"+
                "Photos_roadwayDirection1Image					=?,"+
                "Photos_roadwayDirection2Image					=?,"+
                "Photos_roadwayDirection1SupplementalImage		=?,"+
                "Photos_roadwayDirection2SupplementalImage		=?,"+
                "Photos_railroadDirection1Image					=?,"+
                "Photos_railroadDirection2Image					=?,"+
                "Photos_railroadDirection1SupplementalImage		=?,"+
                "Photos_railroadDirection2SupplementalImage		=?,"+
                "Photos_crossingSurfaceDirection1Image			=?,"+
                "Photos_crossingSurfaceDirection2Image			=?,"+
                "Photos_cabinetImage							=?,"+
                "Photos_additionalImages						=? where cross_id=?";
                
                tx.executeSql("update Crossing_Details set "+sql_photos ,[
data.ensUsDotImage,
data.roadwayDirection1Image,
data.roadwayDirection2Image,
data.roadwayDirection1SupplementalImage,
data.roadwayDirection2SupplementalImage,
data.railroadDirection1Image,
data.railroadDirection2Image,
data.railroadDirection1SupplementalImage,
data.railroadDirection2SupplementalImage,
data.crossingSurfaceDirection1Image,
data.crossingSurfaceDirection2Image,
data.cabinetImage,
data.additionalImages,data.id]);
            },errorCB);
 
}