package de.bassadin.somos03_bassadin

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity


class MainActivity : AppCompatActivity() {

    var resultTextView: TextView = findViewById<TextView>(R.id.resultTextView);
    var sourceCurrencyInput: EditText =
        findViewById<EditText>(R.id.editTextNumberDecimal_srcCurrency);
    var convertButton: Button = findViewById<Button>(R.id.convert_button);

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        convertButton.setOnClickListener {
            Toast.makeText(this@MainActivity, "You clicked me.", Toast.LENGTH_SHORT).show()
        }
    }


}