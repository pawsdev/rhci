package com.phonegap.rhci8;

import org.apache.cordova.DroidGap;

import android.webkit.WebView;
import android.widget.Toast;

public class MyToaster {
	 private WebView mAppView;
     private DroidGap mGap;

     public MyToaster(DroidGap gap, WebView view) {
             mAppView = view;
             mGap = gap;
     }

     //Show toast for a long time
     public void lng(String message) {
             Toast.makeText(mGap, message, Toast.LENGTH_LONG).show();
     }
     
     public void srt(String message) {  //Show toast for a short time
             Toast.makeText(mGap, message, Toast.LENGTH_SHORT).show();
     }
}
