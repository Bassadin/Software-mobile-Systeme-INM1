package de.bassadin.somos03_bassadin

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    lateinit var resultTextView: TextView
    lateinit var sourceCurrencyInput: EditText
    lateinit var convertButton: Button


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        resultTextView = findViewById<TextView>(R.id.resultTextView);
        sourceCurrencyInput = findViewById<EditText>(R.id.editTextNumberDecimal_srcCurrency);
        convertButton = findViewById<Button>(R.id.convert_button);

        convertButton.setOnClickListener {
            Toast.makeText(this@MainActivity, "You clicked me.", Toast.LENGTH_SHORT).show()
        }

    }


}