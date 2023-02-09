// Cadastro
const formUser = document.querySelector(".form-user")
const nameUser = document.querySelector(".name-user")
const ageUser = document.querySelector(".age-user")
const bimestreUser = document.querySelector(".bimestre-user")

formUser.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputValueName = nameUser.value
    const inputValueAge = ageUser.value
    const inputValueBimestre = bimestreUser.value

    if(inputValueName, inputValueAge, inputValueBimestre){

        nameRes.innerHTML = `Nome: ${inputValueName}`
        bimestreRes.innerHTML = `${inputValueBimestre}º bimestre`

        formUser.style.display = 'none'
        form.style.display = 'flex'

    }

})

// Questões
const form = document.querySelector(".form")
const inputWan = document.querySelector(".input-wan")
const inputTwo = document.querySelector(".input-two")
const inputTry = document.querySelector(".input-try")
const inputFor = document.querySelector(".input-for")
const inputFiv = document.querySelector(".input-fiv")

// box de mensagens
const endTest = document.querySelector(".end-test-container")
const ptsRes = document.querySelector(".pts-res")
const nameRes = document.querySelector('.name-res')
const bimestreRes = document.querySelector(".bimestre-res")
const porcentsRes = document.querySelector(".porcents-res")
const passed = document.querySelector(".passed")

// verificando acertos e erros
form.addEventListener("submit", (e) => {
    e.preventDefault()

    var very = prompt("Salvar Prova? [S] para sim | [N] para não")

    if (very === "s") {
        alert("salvo")
    }else{
        return alert("Cancelado")
    }

    let pts = 0

    const inputvalueWan = inputWan.value

    if(inputvalueWan === "c" || inputvalueWan === "C"){
        pts ++
    }

    const inputValueTwo = inputTwo.value
    
    if(inputValueTwo === "d" || inputValueTwo === "D") {
        pts ++
    }

    const inputValueTry = inputTry.value
    
    if(inputValueTry === "a" || inputValueTry === "A") {
        pts ++
    }

    const inputValueFor = inputFor.value
    
    if(inputValueFor === "d" || inputValueFor === "D") {
        pts ++
    }

    const inputValueFiv = inputFiv.value
    
    if(inputValueFiv === "b" || inputValueFiv === "B") {
        pts ++
    }

    form.style.display = 'none'
    endTest.style.display = 'flex'

    msg(pts)

})

//exibindo mensagen de aprovação é dados
function msg(pts){

    const porcents = pts * 100 / 5
    if(porcents >= 90){
        porcentsRes.style.color = 'rgb(26, 200, 26)'
    }


    porcentsRes.innerHTML = `${porcents}% de aproveitamento`

    ptsRes.innerHTML = `De 5 questões voce acertou ${pts}`

    if(pts < 4){
        passed.innerHTML = 'Reprovado, precisa melhorar!'
        passed.style.color = 'red'
    }else{
        passed.innerHTML = 'Aprovado'
        passed.style.color = 'rgb(26, 200, 26)'
    }

}