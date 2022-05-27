package de.bassadin.somos03_bassadin

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        var grossAmountInput = findViewById<EditText>(R.id.grossAmountInput);
        var tipPercentageInput = findViewById<EditText>(R.id.tipPercentageInput);
        var personsAmountInput = findViewById<EditText>(R.id.personsAmountInput);

        var convertButton = findViewById<Button>(R.id.convert_button);

        var resultTextView = findViewById<TextView>(R.id.resultTextView);

        convertButton.setOnClickListener {

            val grossAmountInputValue = grossAmountInput.text.toString().toFloat();
            val tipPercentageInputValue = grossAmountInput.text.toString().toFloat();
            val personsAmountInputValue = grossAmountInput.text.toString().toInt();

            


            resultTextView.text = outputValue.toString();

        }

    }


}