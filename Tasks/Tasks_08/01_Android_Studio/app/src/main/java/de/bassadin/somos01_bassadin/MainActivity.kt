package de.bassadin.somos01_bassadin

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState);
        var webView: WebView = WebView(this);

        webView.webViewClient = WebViewClient();
        var webSettings = webView.settings;

        webSettings.javaScriptEnabled = true;

        // webView.loadUrl("https://m.spiegel.de");
        webView.loadUrl("file:///android_asset/index.html");

        setContentView(webView);
    }
}