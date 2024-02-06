document.getElementById("bmiForm").addEventListener('submit',function(e){
    e.preventDefault();
    const gender=document.getElementById("gender").value;
    const age=parseInt(document.getElementById("age").value);
    const heightFeet=parseInt(document.getElementById("height").value);
    const heightInches=parseInt(document.getElementById("height-inches").value);
    const weight=parseFloat(document.getElementById("weight").value);

    if(gender && age && heightFeet && heightInches&& weight){

        const heightInMeters = ((heightFeet * 12)+ heightInches)* 0.0254;// heights in meters
        const bmi =weight /(heightInMeters * heightInMeters);
        const resultElement = document.getElementById("result");
        let cateqory = '';

        if(bmi < 18.5){
            cateqory = 'Underweight';
        }else if(bmi >= 18.5 && bmi < 25){
            cateqory = 'Normal';
        }else if(bmi >= 25 && bmi < 30){
            cateqory = 'Overweight';
        }else if(bmi >= 30 && bmi < 35){
            cateqory = 'Obese';
        }else if(bmi >= 35){
            cateqory = 'Very Obese';
        }

        let resultMesage= 'Your BMI :' + bmi.toFixed(2)+ '<br>';
        resultMesage += 'Category :'+ cateqory;
        resultElement.innerHTML = resultMesage;


    }
    
});






