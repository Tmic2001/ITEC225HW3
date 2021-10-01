function forceCalc(mass , acceleration) {
                 
    mass = document.getElementById("getMassValue").value;
    acceleration = document.getElementById("getAccelerationValue").value;              
     

  var result1  = (mass * acceleration);
    document.getElementById("outputForce").innerHTML = "Force: " + result1;
}

function displacementCalc(initialVelocity, timeInSeconds, accelerate) {
    num1 = 0.5;
    initialVelocity = document.getElementById("getVelocityValue").value;
    timeInSeconds = document.getElementById("getTimeValue").value;
    accelerate = document.getElementById("getAccelerationValue2").value;              
     

  var result2  = ((initialVelocity * timeInSeconds) + ((num1)*(accelerate*timeInSeconds**2)) );
    document.getElementById("outputDisplacement").innerHTML = "Displacement is : " + result2;
}

/* Cant find way to handle the imaginary number only produces NaN */
function quadCalc(a, b, c) {
    a = document.getElementById("getAValue").value;
    b = document.getElementById("getBValue").value;
    c = document.getElementById("getCValue").value;              
     

  var postiveTop  = (1) * (Math.sqrt((b**2) - (4*(a)*(c))));
  var negativeTop = (-1) * (Math.sqrt((b**2) - (4*(a)*(c))));
  var posResult = postiveTop / (2*a);
  var negResult = negativeTop / (2*a);
    document.getElementById("outputQuadratic1").innerHTML = "Positive Quadratic Answer : " + posResult;
    document.getElementById("outputQuadratic2").innerHTML = "Negative Quadratic Answer : " + negResult;
}

/* Im positive my math is correct, but it doesn't provide the answers I would expect */
function pCalc(pmt, r, n) {
    pmt = document.getElementById("getPMTValue").value;
    r = document.getElementById("getRValue").value;
    n = document.getElementById("getNValue").value;              
     
  var result4  = (pmt) * ((1 - (1/(1+r)**n)) / r);
  /* using formula off pdf sheet var res = (pmt *	((1	- (1	/	(1	+	r)**n))	/	r))	*	(1+r); */
    document.getElementById("outputP").innerHTML = "P equals : " + result4;
}

