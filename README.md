#Aqui salvo minhas observações de estudo de JS


##Functions

####Function Declarations
É a declaração mais comum de função, simplesmente se declara a palavra reservada **function** seguida do nome da função ex:

```javascript
function somaNumero (a, b) {
	return a+b;
}
``` 

----------------

####Function Expression
Aqui a função não é executada de imediato, pois ela será atribuída a uma variável, primeiro se declara uma variável qualquer seguida do operador de atribuição **=** por fim seguido de **function** ex:

```javascript
var somaNumero = function (a, b) {
	return a+b;
}
``` 

**Obs:** Neste caso a função será anônima, ou seja, ela não terá nome, sua única referência é a variável para a qual ela foi definida.

----------------


####Named Function Expression
Declarada da mesma forma da **Function Expression** porém esta forma adiciona um nome para a função, ou seja, a função deixa de ser anônima ex:

```javascript
var somaNumero = function somaNumero(a, b) {
	return a+b;
}
``` 

**Obs:** Ela se difere da **Function Expression** principalmente no fato de que ela pode ser utlizada nas ferramentas de Debugging e Logs.

----------------


