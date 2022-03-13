*Chave SSH
Forma de estabelecer uma conexão segura

>ssh-keygen -t ed25519 -C varela.alves@outlook.com
-Colocar em uma chave do perfil github

> eval $(ssh-agent -s)
Gera um agent pid

>ssh-add chave privada
>git clone com ssh option

*Token de acesso pessoal
- Outra forma de acesso seguro por tempo limitado
- Salvar código de token
- Usa o código https