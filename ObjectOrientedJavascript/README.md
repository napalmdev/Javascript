# Minhas Anotações do Livro

![Livro de Nicholas C. Zakas](img/Book-Cover.jpg)


-----------------------------------------

## 1. Primitive and Reference Types

### Criando um Objeto
Uma forma simples de criar um objeto é através do operador **_new_**, exemplo:

```javascript
  var ob1 = new Object();
```
No exemplo acima, o que é referenciado na variável **ob1** não é diretamente o objeto, e sim um ponteiro de memória com a referência do Objeto.


### Adicionando propriedades ao Objeto
Para adicionar uma propriedade(seja ela atributo ou método) em objetos no JS, é bem simples, veja o exemplo:

```javascript
  var ob1 = new Object();
  var ob2 = ob1
  ob1.meuNovoAtributo = "Show de Bola";
  console.log(ob2.meuNovoAtributo); // "Show de Bola"
```
Como visto acima, pelo fato de ambas as variáveis **ob1** e **ob2** manterem um ponteiro como referência em vez objeto em si, quando foi adicionado a propriedade **meuNovoAtributo** a **ob1**, automaticamente **ob2** também obteve o mesmo atributo.


###Criando um Objeto de forma literal
Existe uma forma abreviada e mais limpa de criar objetos em JS que utilizando a sintaxe **literal**, da seguinte forma:

```javascript
  var ob1 = {
    meuNovoAtributo: "Show de Bola",
    meuMetodo: function () {
      console.log(meuNovoAtributo)
    }
  };
```

A sintaxe do Objeto Literal é a seguinte:

1. Deve ser declarado entre chaves **{}**
1. As propriedades devem ser separadas por vírgula **,**
1. O separador de Chave e Valor deve ser o dois-pontos **:**  
1. Os métodos são declarados utilizando funções


### Identificando tipos

#### Arrays
A melhor e mais confiável forma de identificar Array é através do método **Array.isArray(myArray)**, exemplo:

```javascript
  var arr = [];
  Array.isArray(arr); // true
```

**Obs:** Este método não é suportado no IE8 e anteriores.


#### Objetos

##### instanceof
Como em JS praticamente todos os tipos herdam de Object se compararmos utilizando **typeof** muitos irão retornar object, para estes casos utiliza-se **instanceof**, exemplo:

```javascript

  var items = [];
  var object = {};
  function reflect(value) {
  return value;
  }
  console.log(items instanceof Array); // true
  console.log(object instanceof Object); // true
  console.log(reflect instanceof Function); // true
```

##### typeof
O typeof somente consegue ser preiso quando se trata de funções, em outros casos normalmente ele identifica como objeto, exemplo:

```javascript
  var fn = function () {};
  console.log(typeof fn); // "function"
```


#### Primitive Wrapper Tipes
Uma das mais confusas partes do Javascript são os empacotadores de tipos primitivos(String, Number, Boolean).
Eles existem para fazer com que os tipos primitivos trabalhem de forma parecida com Objetos. Eles são criados automaticamente por trás dos panos sempre que um tipo primitivo é lido, e se este tipo precisa utlizar alguma função object-like, os Wrappers entram em ação, exemplo:

```javascript
  var nome = "Denis";
  var primeiroCaracter = nome.charAt(0);
  console.log(primeiroCaracter);  //"D"
```
Quando o trecho de código acima é executado, isso é o que acontece por trás dos panos:

```javascript
  var nome = "Denis";
  var temp = new String(nome); //aqui o wrapper é criado para trabalhar as funções de objeto da string
  var primeiroCaracter = temp.charAt(0);
  temp = null; //agora que ja fez seu papel o wrapper é destruido
  console.log(primeiroCaracter);
```
Como visto acima, pelo fato de o tipo primitivo(**string**) trabalhar como um objeto, a Engine do Javascript cria uma instância de **String**, por isso a função **charAt(0)** funciona. O objeto String existe somente por umbreve momento antes de ser destruído, este processo é conhecido como **_autoboxing_**.

Vamos ver outro exemplo:

```javascript
  var name = "Denis";
  name.last = "Nunes";
  console.log(name.last);  //undefined
```
O código acima, tenta efetuar um procedimento que é comumente aplicado a qualquer objeto, ou seja, adicionar uma propriadade qualquer a ele, porém no tipo primitivo, como as propriedas são criadas no Wrapper, quando elas são chamadas, o Wrapper já foi destruído, e por isso temos o resultado de **undefined**, vamos ver como a engine processa o exemplo acima:

```javascript
  //como as coisas ocorrem por tras do panos =D
  var name = "Denis";
  var temp = new String(name);
  temp.last = "Nunes";
  temp = null; //objeto temporario é detruido aqui

  var temp = new String(name);
  console.log(temp.last); // undefined
  temp = null;
```

Como visto acima o Wrapper é destruido antes de ser chamado no console.log, e é novamente criado para exibir a propriedade **last**, que neste momento já não existe mais.


Apesar de o fato dos Wrappers de tipos primitivos serem criados automaticamente, quando são verificados com **instanceof**, ele retornam **false**, exemplo:

```javascript
  var name = "Denis";
  var count = 10;
  var found = false;

  console.log(name instanceof String); //false
  console.log(count instanceof Number); //false
  console.log(found instanceof Boolean); //false
```
As comparações retornam **false**, porque os Wrappers só são criados quando um valor é lido pela engine, e a função **instanceof** não faz a leitura dos valores, e por isso os Wrappers não são criados e as comparações retornam false.

Para comparar tipos primitivos usa-se a função **typeof()**, porém a mesma não funciona com **null**, ele deve ser comparado com ele mesmo(**null**).

---------------------------
## Functions

Em JS Funções são também objetos, porém o que as diferencia de objetos comuns é a presença da **_propriedade interna_** chamada de **[[Call]]**. Propriedades internas não são acessíveis via código, porém determinam o comportamento do código conforme ele é executado.
O EcmaScript define vários tipos de **propriedades internas** para objetos em JS, e estas propriedades são indicadas através da notação **[[Propriedade]]**.

A propriedade **[[Call]]** é única para funções, e indica que o objeto pode ser executado. Este é o motivo de o operador **typeof** retornar **"function"** para as funções, ele compara a existência da propriedade **[[Call]]**.


###Tipos de Função
O JS possui dois tipos básicos de função, a **_function declaration_** e a **_function expression_**. Esse tipos já foram documentados [**aqui**](../README.md).
