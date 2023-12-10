document.getElementById("bmiForm").addEventListener('submit',function(e){
    e.preventDefault();
        // querySelector  querySelectorALL
        
    const gender = document.getElementById("gender").value;
    const age =document.getElementById("age").value;
    const heightFeet = parseInt(document.getElementById("height-feet").value);
    const heightInches = parseInt(document.getElementById("height-inches").value);
    const weight = parseFloat(document.getElementById("weight").value);

    const resultElement = document.getElementById("result");

    if(age >120 || age <0){
        const message = 'Please enter valid age';
        resultElement.innerHTML = message;
    }
    if(heightFeet > 8 || heightFeet <0 || heightInches >11 || heightInches<0){

        const message = 'Please enter valid height';
        resultElement.innerHTML +='<br>' + message;

    }
    else if(gender && age && heightFeet && heightInches && weight){
        const height = ((heightFeet*12)+heightInches)*0.0254;
        const bmi = weight/(height*height);
        


        let category ='';
        if(bmi < 18.5)
            category = 'UnderWeight';
        else if(bmi >=18.5 && bmi <24.9)
            category = 'Normal Weight'
        else if(bmi >= 25 && bmi <29.9)
            category = 'Over Weight';
        else
            category = 'Obese';


        let resultMessage ='Your BMI : ' + bmi.toFixed(2) +'<br>';
        resultMessage += 'Category: ' + category;
        resultElement.innerHTML = resultMessage;
    }


});