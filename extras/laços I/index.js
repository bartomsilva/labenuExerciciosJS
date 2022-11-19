/*
- Desafios
    1. Neste exercício vocês vão implementar uma brincadeira muito simples: 
    "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. 
        
        Inicialmente, uma das pessoas insere qual o número em que ela pensou. 
        A outra pessoa tem que ficar chutando até acertar em cheio o número. 
        Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para 
        a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si.
         Veja, abaixo, um exemplo de partida:
        
        ```
        Vamos jogar!
        O número chutado foi: 3
        Errrrrrrrou, é maior
        O número chutado foi: 18
        Errrrrrrrou, é menor
        O número chutado foi: 15
        Errrrrrrrou, é menor
        O número chutado foi: 11
        Acertou!!
        O número de tentativas foi: 4 
        
        ```
        
        Um resumo das funcionalidades são:
        
        a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. 
        Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`
        
        b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, 
        através do `prompt`. A cada chute, deve ser informado no console:
        
        - O número chutado, com a mensagem: `O número chutado foi: <número>`
        - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. 
        O número escolhido é maior/menor`
        
        c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, 
        deve ser impressa a mensagem: `Acertou` ; e, embaixo,
         `O número de tentativas foi : <quantos chutes o usuário deu>`
        
        - Observação 👀
            
            Vocês tem a liberdade para serem 100% criativos quanto às mensagens deste exercício, 
            mas lembrem-se de cobrir todos os casos pedidos!
            
        
    2. Uma das principais características de uma boa pessoa programadora é
     conseguir resolver seus problemas independentemente. Queremos que você comece a
      treinar isso a partir de hoje! Então, vamos pedir para que você faça uma alteração
       no código acima. Agora, ao invés de ter 2 jogadores, haverá um só;
        e o seu adversário será o computador. A ideia é: ao iniciar o jogo,
        você deve sortear um número aleatório (entre 1 e 100) 
        e o usuário terá que ficar chutando o valor até acertar. 
        Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.
        
        Quando resolver o exercício, pare e faça a seguinte reflexão: 
        foi fácil fazer esta alteração? O que você poderia ter feito para que fosse mais fácil? 
        **Deixe comentários no seu código sobre esta reflexão.**
*/
