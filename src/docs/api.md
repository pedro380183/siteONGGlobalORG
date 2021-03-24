### Documentação da api rest

### Api Rest 
```
git clone https://github.com/pedro380183/global.org3.git && cd global.org3/api/ && npm install && npm start
```

## Use o rest api 
Você pode acessar o REST API of the server usando esses endpoints:

### método de requisição http: get
- `/vagas/:id`: Exibe uma vaga pelo `id`
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `/vagas`: Exibe todas as vagas publicadas
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `/vagas/:ongs`: FFiltra vagas por `ongs`
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `/vagas/:estados`: Filtra vagas por `estados`
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `/vagas/:habilidades`: Filtra vagas por `habilidades`
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `/vagas/:causas`:Filtra vagas por `causas`
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem

### método de requisição http: post
- `cadastro/:ong`
  - Corpo da requisição:
    - `name: String` (required): Nome do tipo de usuário: Ong
    - `email: String` (required): E-mail do tipo de usuário: Ong
- `cadastro/:voluntario`
  - Corpo da requisição:
    - `name: String` (required): Nome do tipo de usuário: Voluntário
    - `email: String` (required): E-mail do tipo de usuário: Voluntário
- `perfil/:ong`
  - Corpo da requisição:
    - `name: String` (required): Nome do tipo de usuário: Ong
    - `email: String` (required): E-mail do tipo de usuário: Ong
- `perfil/ong/:vagas`
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `perfil/:voluntario`
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `perfil/voluntario/inscricoes`
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `/vagas`: Create a new post
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `/perfil/:ong`: Create novo perfil do tipo Ong
  - Corpo da requisição:
    - `titulo: String` (required): The email address of the user
    - `nome: String` (optional): The name of the user
- `/vagas/:ongs`: Lista de vagas por ongs
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `/vagas/:voluntario`: Lista de vagas por numero de participantes
  - Corpo da requisição:
    - `email: String` (required): The email address of the user
    - `nome: String` (optional): The name of the user

## Use o rest api 
Você pode acessar o REST API of the server usando esses endpoints:

### método de requisição http: get
- `/vagas/:id`: Exibe uma vaga pelo `id`
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `/vagas`: Exibe todas as vagas publicadas
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `/vagas/:ongs`: FFiltra vagas por `ongs`
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `/vagas/:estados`: Filtra vagas por `estados`
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `/vagas/:habilidades`: Filtra vagas por `habilidades`
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `/vagas/:causas`:Filtra vagas por `causas`
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `/filterVagas?searchString={searchString}`: Filtra posts by `title` or `content`

### método de requisição http: post
- `cadastro/:ong`
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `cadastro/:voluntario`
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `perfil/:ong`
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `perfil/ong/:vagas`
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `perfil/:voluntario`
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `perfil/voluntario/inscricoes`
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `/vagas`: Create a new post
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `/perfil/:ong`: Create novo perfil do tipo Ong
  - Corpo da requisição:
    - `titulo: String` (required): The email address of the user
    - `nome: String` (optional): The name of the user
- `/vagas/:ongs`: Lista de vagas por ongs
  - Corpo da requisição:
    - `titulo: String` (required): Título da postagem
    - `conteudo: String` (optional): Conteúdo da postagem
    - `postEmail: String` (required): E-mail do tipo de usuário que criou a postagem
- `/vagas/:voluntario`: Lista de vagas por numero de participantes
  - Corpo da requisição:
    - `email: String` (required): The email address of the user
    - `nome: String` (optional): The name of the user


### `PUT`
- `/vagas/:id`: Publicar uma postagem pelo `id`

### `DELETE`
- `/vagas/:id`: Delete a postagem pelo `id`