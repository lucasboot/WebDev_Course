*Fluxo de proposta
1. Strawman
   Submeter form para ser analisado
2. Proposal
   Proposta formal, bem descrito objetivo e exemplos
3. Draft
   Primeira versão, descrição formal da sintaxe 
4. Candidate
   Feedback de implementação
5. Finished
   Tem que passar na suite de testes

*Linguagem interpretada
- De cima pra baixo
- Linguagem de tipagem fraca(soma de string e número) e dinâmica(inferência de tipo) 
- Typescrit: superset da linguagem, controle de tipos
- Flow não é superset

*Closure
- Escopos de variáveis, let, var, const

*Currying
- Técnica de transformar uma função com  n parâmetros para uma que recebe apenas 1 e vai retornando outras funções

>código

function soma(a){
    return function(b){
        return a+b;
    }
}
const soma2 = soma(2);
soma2(3); -> 5

>código

*Hoisting
- Levantar/suspender, 
retorna undefined com variáveis (chamadas, mas não definidas/criadas)
Consegue içar funções chamadas antes de sua definição

*Imutabilidade
- Códigos na pasta

*Tipos e variáveis
- var: global
- let: bloco
- const: bloco, consegue mudar as propriedades do objeto e arrays