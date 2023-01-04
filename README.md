# unit-tests-Jest

Aplicação para estudos de testes unitarios.

## Criação de usuário 
- Um teste para assegurar que a logica de criação de usuários esteje funcionando corretamente. 
A requisição retorna um status 201 e um usuário em seu body. 

## Listagem de usuário 
- Um teste para assegurar que o retorno da requisição seja um status 200, 
e seu body seja um array de usuários. 

## Falha ao criar um usuário existente 

- Um teste para assegurar uma falha ao criar passando credencias que ja foram utilizadas, 
a aplicação retorna um status 400 e uma mensagem de erro.
