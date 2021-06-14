


// pega próx. ano dinâmicamente
const nextYear = new Date().getFullYear() + 1

// Obter próx. ano que contagem será feita
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

// Atualiza contador
const updateCountdown = () => {
    // dif. entre nova data e data atual em ms (milisegundos)
    const currentTime = new Date()
    const difference = newYearTime - currentTime

    // obter qntd. dias - (segundos / minutos / horas)
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    // obter qntd. horas
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    // obter qntd. minutos
    const minutes = Math.floor(difference / 1000 / 60) % 60
    // obter qntd. segundos
    const seconds = Math.floor(difference / 1000) % 60

    // console.log({ days, hours, minutes, seconds });
}

setInterval(updateCountdown, 1000)
    



