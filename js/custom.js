let gXorO = 'X';
let gXcolor = "alert-warning";
let gOcolor = "alert-info";
let gameOver = false;
let gXpoints=0;
let gOpoints=0;

function myFunction(e) {
	if(!gameOver){
		let y;
		// y=document.getElementById(e.id).innerHTML;
		y = e.innerHTML;

		if (y == "") {
			document.getElementById(e.id).innerHTML = gXorO;
			document.getElementById(e.id).className = gXorO === "X" ? gXcolor : gOcolor;
			if (fnWinner()) {
				document.getElementById("mainTable").disabled=true;
				document.getElementById("resetButton").disabled=false;
				document.getElementById("resetButton").className="btn btn-primary btn-lg btn-block";
				gameOver=true;
				gXpoints += (gXorO === 'X' ? 1 : 0);
				gOpoints += (gXorO === 'O' ? 1 : 0);
				document.getElementById("player1points").innerHTML=gXpoints;
				document.getElementById("player2points").innerHTML=gOpoints;
			}
			gXorO = gXorO === 'X' ? 'O' : 'X';
		}
	}
}

function fnResetGame(){
	gameOver=false;
	gXorO = 'X';
	document.getElementById("resetButton").disabled=true;
	document.getElementById("resetButton").className="btn btn-secondary btn-lg btn-block disabled";
	lAddColumns=document.getElementsByTagName("td");
	for(let i=0;i<9;i++){
		lAddColumns[i].innerHTML="";
		lAddColumns[i].className="alert-secondary";
	}
}
function fnWinner() {
    //let game={"box1","box2"};
    /*
    1 2 3
    1 4 7
    1 5 9
    4 5 6
    7 8 9
    2 5 8
    3 6 9
    3 5 7 
    */
    let valueOfBox1 = document.getElementById("box1").innerHTML;
    let valueOfBox2 = document.getElementById("box2").innerHTML;
    let valueOfBox3 = document.getElementById("box3").innerHTML;
    let valueOfBox4 = document.getElementById("box4").innerHTML;
    let valueOfBox5 = document.getElementById("box5").innerHTML;
    let valueOfBox6 = document.getElementById("box6").innerHTML;
    let valueOfBox7 = document.getElementById("box7").innerHTML;
    let valueOfBox8 = document.getElementById("box8").innerHTML;
    let valueOfBox9 = document.getElementById("box9").innerHTML;

    valueOfBox1 = (valueOfBox1 === "") ? 1 : valueOfBox1;
    valueOfBox2 = (valueOfBox2 === "") ? 2 : valueOfBox2;
    valueOfBox3 = (valueOfBox3 === "") ? 3 : valueOfBox3;
    valueOfBox4 = (valueOfBox4 === "") ? 4 : valueOfBox4;
    valueOfBox5 = (valueOfBox5 === "") ? 5 : valueOfBox5;
    valueOfBox6 = (valueOfBox6 === "") ? 6 : valueOfBox6;
    valueOfBox7 = (valueOfBox7 === "") ? 7 : valueOfBox7;
    valueOfBox8 = (valueOfBox8 === "") ? 8 : valueOfBox8;
    valueOfBox9 = (valueOfBox9 === "") ? 9 : valueOfBox9;

    if ((valueOfBox1 === valueOfBox2) && (valueOfBox1 === valueOfBox3)) {
        document.getElementById('box1').className = 'alert-success';
        document.getElementById('box2').className = 'alert-success';
        document.getElementById('box3').className = 'alert-success';
		return true;
    } else if ((valueOfBox1 === valueOfBox4) && (valueOfBox1 == valueOfBox7)) {
        document.getElementById('box1').className = 'alert-success';
        document.getElementById('box4').className = 'alert-success';
        document.getElementById('box7').className = 'alert-success';
		return true;
    } else if ((valueOfBox1 === valueOfBox5) && (valueOfBox1 == valueOfBox9)) {
        document.getElementById('box1').className = 'alert-success';
        document.getElementById('box5').className = 'alert-success';
        document.getElementById('box9').className = 'alert-success';
		return true;
    } else if ((valueOfBox4 === valueOfBox5) && (valueOfBox4 == valueOfBox6)) {
        document.getElementById('box4').className = 'alert-success';
        document.getElementById('box5').className = 'alert-success';
        document.getElementById('box6').className = 'alert-success';
		return true;
    } else if ((valueOfBox7 === valueOfBox8) && (valueOfBox7 == valueOfBox9)) {
        document.getElementById('box7').className = 'alert-success';
        document.getElementById('box8').className = 'alert-success';
        document.getElementById('box9').className = 'alert-success';
		return true;
    } else if ((valueOfBox2 === valueOfBox5) && (valueOfBox2 == valueOfBox8)) {
        document.getElementById('box2').className = 'alert-success';
        document.getElementById('box5').className = 'alert-success';
        document.getElementById('box8').className = 'alert-success';
		return true;
    } else if ((valueOfBox3 === valueOfBox6) && (valueOfBox3 == valueOfBox9)) {
        document.getElementById('box3').className = 'alert-success';
        document.getElementById('box6').className = 'alert-success';
        document.getElementById('box9').className = 'alert-success';
		return true;
    } else if ((valueOfBox3 === valueOfBox5) && (valueOfBox3 == valueOfBox7)) {
        document.getElementById('box3').className = 'alert-success';
        document.getElementById('box5').className = 'alert-success';
        document.getElementById('box7').className = 'alert-success';
		return true;
    }else{
        return false;

    }
}