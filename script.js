*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:linear-gradient(135deg,#ffdde1,#ee9ca7);
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}

.container{
    background:#fff;
    padding:35px;
    border-radius:20px;
    text-align:center;
    width:400px;
    box-shadow:0 10px 25px rgba(0,0,0,0.2);
}

h1{
    color:#ff4f81;
    margin-bottom:20px;
}

p{
    margin-bottom:20px;
    font-size:18px;
}

button{
    padding:12px 25px;
    margin:10px;
    border:none;
    border-radius:10px;
    cursor:pointer;
    font-size:16px;
    transition:0.3s;
}

#yesBtn{
    background:#4CAF50;
    color:white;
}

#yesBtn:hover{
    background:#45a049;
}

#noBtn{
    background:#f44336;
    color:white;
}

#noBtn:hover{
    background:#d32f2f;
}

.hidden{
    display:none;
}

input{
    padding:10px;
    margin:10px;
    border-radius:8px;
    border:1px solid #ccc;
}

#confirmBtn{
    background:#ff4f81;
    color:white;
}

#result{
    margin-top:20px;
    font-weight:bold;
    color:#ff4f81;
}
