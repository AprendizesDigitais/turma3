function logar(){
    let idade = document.getElementById("idade").value;
    let senha = document.getElementById("senha").value;

    if (idade >= 18){
        if (senha != "senha"){
            alert("Senha errada")
        }else{
            window.location.href = "sucesso.html"
        }
    }else{
        if (18 - idade === 1){
            alert(`Volte em ${18 - idade} ano`)
        }else{
            alert(`Volte em ${18 - idade} anos`)
        }
    }
}