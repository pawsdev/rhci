package com.phonegap.rhci8;


import android.annotation.TargetApi;


import org.apache.cordova.DroidGap;
import android.os.Bundle;
import android.view.KeyEvent;


public class MyPhoneGapActivity extends DroidGap {

    private int retryCount = 0;
    private MyToaster toast;
    
    @Override
    public void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
       //setRequestedOrientation (ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        super.setStringProperty("loadingDialog", "Please wait -- loading...");
        super.init();
        if(android.os.Build.VERSION.SDK_INT > android.os.Build.VERSION_CODES.ICE_CREAM_SANDWICH) {
            fixJellyBeanIssues();
        }
        toast = new MyToaster(this, appView);
        appView.addJavascriptInterface(toast, "MyToast"); 
        super.loadUrl("file:///android_asset/www/index.html");
    }
   
    @TargetApi(14)
    protected void fixJellyBeanIssues() {
        System.out.println(super.appView.toString());
        try {
        	 //super.appView.getSettings().setAllowUniversalAccessFromFileURLs(true);
        } catch(NullPointerException e) {
            System.out.println(e.toString());
        }
    }
    

    // catch an error and if try again 1x or quit
    @Override
    public void onReceivedError( int errorCode, String description, String failingUrl)
    {
        if(retryCount < 3) {
            retryCount++;
            System.out.println("Connection failed, trying again. Retry Count: "+retryCount);
            super.loadUrl("file:///android_asset/www/index.html");
        } else {
            System.out.println("Sorry, it failed three times so I give up.");
            super.loadUrl("file:///android_asset/www/fail.html");
        }
        return;
    }
    @Override
    public void onSaveInstanceState(Bundle savedInstanceState) {
        super.onSaveInstanceState(savedInstanceState);
        // your stuff or nothing
        System.out.println("it is ok");
    }

    
    @Override
    public void onRestoreInstanceState(Bundle savedInstanceState) {
        super.onRestoreInstanceState(savedInstanceState);
        // your stuff or nothing
        System.out.println("it is also ok");
    }
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
                if(keyCode==KeyEvent.KEYCODE_BACK){
                	System.out.println("it is back ok");
                    moveTaskToBack(true);
                }
                return super.onKeyDown(keyCode, event);
    }
    
}