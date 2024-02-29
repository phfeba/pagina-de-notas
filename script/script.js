function verificar() {
  const notaUmUm = document.getElementById('nota-um-um');
  const notaDoisUm = document.getElementById('nota-dois-um');
  const notaTresUm = document.getElementById('nota-tres-um');
  const notaQuatroUm = document.getElementById('nota-quatro-um');
  const situacaoUm = document.getElementById('situacao-um');

  const notaUmDois = document.getElementById('nota-um-dois');
  const notaDoisDois = document.getElementById('nota-dois-dois');
  const notaTresDois = document.getElementById('nota-tres-dois');
  const notaQuatroDois = document.getElementById('nota-quatro-dois');
  const situacaoDois = document.getElementById('situacao-dois');

  const notaUmTres = document.getElementById('nota-um-tres');
  const notaDoisTres = document.getElementById('nota-dois-tres');
  const notaTresTres = document.getElementById('nota-tres-tres');
  const notaQuatroTres = document.getElementById('nota-quatro-tres');
  const situacaoTres = document.getElementById('situacao-tres');

  const mediaUm = document.getElementById('media-um');
  mediaUm.value =
    (Number(notaUmUm.value) +
      Number(notaDoisUm.value) +
      Number(notaTresUm.value) +
      Number(notaQuatroUm.value)) /
    4;

  const mediaDois = document.getElementById('media-dois');
  mediaDois.value =
    (Number(notaUmDois.value) +
      Number(notaDoisDois.value) +
      Number(notaTresDois.value) +
      Number(notaQuatroDois.value)) /
    4;

  const mediaTres = document.getElementById('media-tres');
  mediaTres.value =
    (Number(notaUmTres.value) +
      Number(notaDoisTres.value) +
      Number(notaTresTres.value) +
      Number(notaQuatroTres.value)) /
    4;

  const mediaSala = document.getElementById('media-sala');
  mediaSala.value =
    (Number(mediaUm.value) +
      Number(mediaDois.value) +
      Number(mediaTres.value)) /
    3;

  if (mediaUm.value < 45) {
    situacaoUm.innerHTML = 'REPROVADO';
    situacaoUm.style.padding = '5px';
    situacaoUm.style.backgroundColor = 'red';
  } else if (mediaUm.value >= 45 && mediaUm.value < 60) {
    situacaoUm.innerHTML = 'RECUPERAÇÃO';
    situacaoUm.style.padding = '5px';
    situacaoUm.style.backgroundColor = 'yellow';
  } else {
    situacaoUm.innerHTML = 'APROVADO';
    situacaoUm.style.padding = '5px';
    situacaoUm.style.backgroundColor = 'green';
  }

  if (mediaDois.value < 45) {
    situacaoDois.innerHTML = 'REPROVADO';
    situacaoDois.style.padding = '5px';
    situacaoDois.style.backgroundColor = 'red';
  } else if (mediaDois.value >= 45 && mediaDois.value < 60) {
    situacaoDois.innerHTML = 'RECUPERAÇÃO';
    situacaoDois.style.padding = '5px';
    situacaoDois.style.backgroundColor = 'yellow';
  } else {
    situacaoDois.innerHTML = 'APROVADO';
    situacaoDois.style.padding = '5px';
    situacaoDois.style.backgroundColor = 'green';
  }

  if (mediaTres.value < 45) {
    situacaoTres.innerHTML = 'REPROVADO';
    situacaoTres.style.padding = '5px';
    situacaoTres.style.backgroundColor = 'red';
  } else if (mediaTres.value >= 45 && mediaTres.value < 60) {
    situacaoTres.innerHTML = 'RECUPERAÇÃO';
    situacaoTres.style.padding = '5px';
    situacaoTres.style.backgroundColor = 'yellow';
  } else {
    situacaoTres.innerHTML = 'APROVADO';
    situacaoTres.style.padding = '5px';
    situacaoTres.style.backgroundColor = 'green';
  }
}
