# Decodificador de Texto

## Descrição
Este projeto é um decodificador de texto simples desenvolvido em HTML, CSS e JavaScript. A aplicação permite que os usuários criptografem e descriptografem textos utilizando um método de substituição simples. 

## Funcionalidades
- **Criptografar Texto**: Permite que os usuários insiram um texto que será criptografado ao clicar no botão "Criptografar".
- **Descriptografar Texto**: Permite que os usuários insiram um texto criptografado que será descriptografado ao clicar no botão "Descriptografar".
- **Copiar Texto**: Após a criptografia ou descriptografia, o texto resultante pode ser copiado para a área de transferência.

## Tecnologias Utilizadas
- **HTML**: Estrutura do aplicativo.
- **CSS**: Estilização do aplicativo, garantindo uma interface amigável e responsiva.
- **JavaScript**: Lógica de criptografia e descriptografia.

## Estrutura do Projeto
- `index.html`: Arquivo principal contendo a estrutura HTML da aplicação.
- `style.css`: Arquivo de estilos CSS responsável pela aparência do aplicativo.
- `app.js`: Arquivo JavaScript contendo a lógica de criptografia e descriptografia.

## Como Usar
1. Abra o arquivo `index.html` em um navegador web.
2. Digite o texto que deseja criptografar ou descriptografar na área de texto.
3. Clique no botão apropriado ("Criptografar" ou "Descriptografar").
4. O resultado será exibido na área de apresentação secundária.
5. Use o botão "Copiar" para copiar o texto resultante para a área de transferência.

## Método de Criptografia
O método de criptografia utilizado é uma substituição simples onde cada letra do texto é substituída por outra letra a um número fixo de posições no alfabeto. Por exemplo, com um deslocamento de 3:
- A letra 'A' se torna 'D'.
- A letra 'B' se torna 'E'.
- E assim por diante.

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias ou correções de bugs.

---

Desenvolvido por Matheus Feitosa.
