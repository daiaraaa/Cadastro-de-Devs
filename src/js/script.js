const button = document.getElementById('button')
const form = document.getElementById('form')
let number_input = 0
const button_cadastrar = document.getElementById('cadastrar')



button.addEventListener('click', (ev) =>{
    ev.preventDefault();

    number_input++;

    const div = document.getElementById('bloco')

    const bloco = document.createElement('div')
    const br = document.createElement('br')
    const br1 = document.createElement('br')
    const br2 = document.createElement('br')
    const br3 = document.createElement('br')

    const label_Tecnologia = document.createElement('label')
    label_Tecnologia.innerText = 'Nome da tecnologia:'
    label_Tecnologia.setAttribute('for','tecnologias') 

    const input_tecnologias = document.createElement('input')
    input_tecnologias.type = 'text'
    input_tecnologias.name = 'tecnologias'
    input_tecnologias.id = 'tecnologias'
    input_tecnologias.placeholder = 'Digite o nome'
    input_tecnologias.className = 'input_text_tecnologias'
    input_tecnologias.style.padding = '10px 10px'
    input_tecnologias.style.border = '2px solid #e9dede'
    input_tecnologias.style.borderRadius = '10px'

    const subTitulo = document.createElement('label')
    subTitulo.innerText = 'Tempo de experiência:'
    subTitulo.setAttribute('for','input_time' + number_input) 

    const input_num1 = document.createElement('input')
    input_num1.type = 'radio'
    input_num1.name = 'input_time' + number_input
    input_num1.id ='input_num1-' + number_input
    input_num1.value = '0-2 anos'

    const label_num1 = document.createElement('label')
    label_num1.innerText = '0-2 anos'
    label_num1.setAttribute('for', 'input_num1-' + number_input)

    const input_num2 = document.createElement('input')
    input_num2.type = 'radio'
    input_num2.name = 'input_time' + number_input
    input_num2.id ='input_num2-' + number_input
    input_num2.value = '3-4 anos'

    const label_num2 = document.createElement('label')
    label_num2.innerText = '3-4 anos'
    label_num2.setAttribute('for', 'input_num2-' + number_input)

    const input_num3 = document.createElement('input')
    input_num3.type = 'radio'
    input_num3.name = 'input_time' + number_input
    input_num3.id ='input_time3-' + number_input
    input_num3.value = '5+ anos'

    const label_num3 = document.createElement('label')
    label_num3.innerText = '5+ anos'
    label_num3.setAttribute('for', 'input_time3-' + number_input)

    const retira = document.createElement('button')
    retira.innerText = 'Remover'
    retira.style.padding = '15px 15px'
    retira.style.border = '2px solid #e9dede'
    retira.style.borderRadius = '15px'

    bloco.append(label_Tecnologia,br,input_tecnologias,br1,subTitulo,br2,input_num1,label_num1,input_num2,label_num2,input_num3,label_num3,br3,retira)
    div.appendChild(bloco)
    form.appendChild(div)

    retira.addEventListener('click', (ev) =>{
        ev.preventDefault()
        div.removeChild(bloco)
        number_input--;
    })
})
form.addEventListener('submit', (ev) =>{
    ev.preventDefault()
})
button_cadastrar.addEventListener('click', (ev) => {
    ev.preventDefault()

    const name = document.getElementById('name').value
    const tecnologia_name = document.querySelectorAll("input[id= 'tecnologias']")
    const time_tecnologias = document.querySelectorAll("input[type= 'radio']:checked")

    for(var i = 0; i < number_input; i++){
        alert(
            "Cadastro do desenvolvedor concluído" +
        "\nNome do desenvolvedor: " + name +
        "\nNome da tecnologia: " + tecnologia_name[i].value +
        "\nTempo de experiência: " + time_tecnologias[i].value
        )
    }

    console.log({name, tecnologia_name, time_tecnologias})

    
})