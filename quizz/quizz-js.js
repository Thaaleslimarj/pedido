let perguntas = [
{
    titulo: 'Como minha irmã chama?',
    alternativas: ['Thaysa', 'Thalita', 'Thaís', 'Thamiris'],
    correta: 3
},

{
    titulo: 'Qual o nome dos meus pais?',
    alternativas: ['Marcia e Joaci', 'Marta e Kinha', 'Marth e Jupiter', 'Marcia e João'],
    correta: 1
},

{
    titulo: 'Top 3 da minha lista de comidas prediletas',
    alternativas: ['Pizza', 'Churrasco', 'Hamburguer', 'Japa'],
    correta: 2
},

{
    titulo: 'Quantos animais de estimação eu tenho?',
    alternativas: ['2', '4', '5', '6'],
    correta: 1
},

{
    titulo: 'Como é meu apelido de infância?',
    alternativas: ['Cabelin', 'kaká', 'Polegar', 'Juvenal'],
    correta: 3
},

{
    titulo: 'Quem é o mais fdp da série do THE BOYS?',
    alternativas: ['Todos', 'Capitão patria', 'Trem bala', 'Brutus'],
    correta: 1
},

{
    titulo: 'Quantos minha idade?',
    alternativas: ['18', '32', '30', '31'],
    correta: 2
},

{
    titulo: 'Qual meu time do coração?',
    alternativas: ['Atlético MG', 'Corinthian', 'Palmeiras', 'Flamengo'],
    correta: 4
},

{
    titulo: 'O que já tirei do meu corpo?',
    alternativas: ['Siso', 'Apêndice', 'Amígdalas', 'Pênis'],
    correta: 1
},

{
    titulo: 'Qual é o melhor jogador do mundo?',
    alternativas: ['Neymar', 'Neymar jr', 'Neymar 2026', 'Obina'],
    correta: 3
},

{
    titulo: 'Pronta para a pergunta mais importante?!',
    alternativas: ['Sim', 'Não', 'Talvez', '-'],
    correta: 0
},


]

let app = {
    start: function(){
        this.Atualpos = 0;
        this.Totalpontos = 0;
        this.Erros = 0;

        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element, index)=>{
            element.addEventListener('click', ()=>{
                this.checaResposta(index);
            })
        })
        this.atualizaPontos();
        app.mostraquestao(perguntas[this.Atualpos]);
    },

    mostraquestao: function(q){
        this.qatual = q;
        //mostrando titulo
        let titleDiv = document.getElementById('titulo');
        titleDiv.textContent = q.titulo;
        //mostrando alternativas
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach(function(element, index){
            element.textContent = q.alternativas[index];
        })
    },

    checaResposta: function(user){
        if(this.qatual.correta == user){
            console.log("Correto");
            this.Totalpontos++;
        }else{
            console.log("Errado");
            this.Erros++;
        }
        this.atualizaPontos();
        this.Proximaperg();
        this.mostraquestao(perguntas[this.Atualpos]);
    },

    Proximaperg: function(){
        this.Atualpos++;
        if(this.Atualpos == perguntas.length){
            if(this.Totalpontos == 11){
                location.href = "/Namoro/duwdwm/duwdwm.html";
            }else{
                alert(`Tente novamente! Você errou um total de: ${this.Erros}`);
                location.href = "/Namoro/quizz/quizz.html";
            }
        }
    },

    atualizaPontos: function(){
        let scoreDiv = document.getElementById('pontos');
        if(this.Totalpontos >= 9)
        scoreDiv.textContent = `Sua pontuação é: ${this.Totalpontos}`;
    }

}
app.start();