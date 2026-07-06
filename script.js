body{
    margin:0;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg,#ffd6e8,#d8e8ff,#ffffff);
    background-size: 300% 300%;
    animation: gradient 10s ease infinite;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    overflow:hidden;
}

@keyframes gradient{
    0%{background-position:0% 50%;}
    50%{background-position:100% 50%;}
    100%{background-position:0% 50%;}
}

.container{
    background:rgba(255,255,255,0.85);
    backdrop-filter:blur(10px);
    padding:35px;
    border-radius:25px;
    text-align:center;
    width:420px;
    box-shadow:0 15px 35px rgba(0,0,0,.2);
}

h1{
    color:#ff69b4;
}

button{
    padding:12px 25px;
    margin:10px;
    border:none;
    border-radius:30px;
    font-size:16px;
    cursor:pointer;
    transition:.3s;
}

#yesBtn{
    background:#ff8fab;
    color:white;
}

#yesBtn:hover{
    transform:scale(1.08);
}

#noBtn{
    background:#8ec5ff;
    color:white;
}

#noBtn:hover{
    transform:scale(1.08);
}

input{
    padding:10px;
    border-radius:10px;
    border:1px solid #ddd;
    margin:10px;
}

#confirmBtn{
    background:#ff69b4;
    color:white;
}
