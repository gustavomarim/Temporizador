(function ($) {
    
    // pega próx. ano dinâmicamente
    const nextYear = new Date().getFullYear() // add + 1 caso queira pegar o ano seguinte
    
    // Obter próx. ano que contagem será feita
    const newYearTime = new Date(`July 04 ${nextYear} 00:00:00`)
    
    // Setando a div ano no background
    $('#year').html(nextYear)
    
    // validação de tempo
    const getTimeUnit = unit => unit < 10 ? '0' + unit : unit
    
    // Inserção de valores com destructuring 
    const insertCountdowValues = ({ days, hours, minutes, seconds }) => {
        // Inserindo valores nas divs com validação
        $('#seconds').html(getTimeUnit(seconds))
        $('#minutes').html(getTimeUnit(minutes))
        $('#hours').html(getTimeUnit(hours))
        $('#days').html(getTimeUnit(days))
    }
    
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
        
        // Setando params. 
        insertCountdowValues({ days, hours, minutes, seconds })
    }
    
    // remove spiner de carregamento, seta o display do contador e inicia a div
    const handleCountdownDisplay = () => {
        $('#loading').remove()
        $('#countdown').css('display', 'flex').show()
    }
    
    
    // Inicializa contadores
    setTimeout(handleCountdownDisplay, 700)
    setInterval(updateCountdown, 1000)
    
})(jQuery)
    
    
    
    