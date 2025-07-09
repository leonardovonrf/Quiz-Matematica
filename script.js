document.getElementById("quizForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  if (!nome) {
    alert("Por favor, insira seu nome.");
    return;
  }

  // Gabarito
  const respostasCorretas = {
    q1: "a", // 8
    q2: "c", // 8
    q3: "b"  // 1.41
  };
  let faltandoResposta = false;
  let acertos = 0;
  let totalRespondidas=0;
  let totalQuestoes=3;

  for (let q in respostasCorretas) {
    const resposta = document.querySelector(`input[name="${q}"]:checked`);
    const div = document.querySelector(`.${q}`);
    
    if(!resposta) {
      faltandoResposta = true;
      div.classList.add("error");
    } else {
      div.classList.remove("error");
      totalRespondidas++;
    if (resposta.value === respostasCorretas[q]) {
      acertos++; 
    }
   }
  }
if (faltandoResposta) {
  alert("Responda todas as questões antes de enviar!")
}

 
if (totalRespondidas == totalQuestoes) {
  alert(`${nome}, você acertou ${acertos} de 3 questões.`);
}
  
});