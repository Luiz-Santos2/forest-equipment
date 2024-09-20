# Teste Frontend

Neste teste serão avaliados seus conhecimentos em Javascript, HTML e CSS, a criatividade e metodologia aplicada no desenvolvimento, a usabilidade e design da aplicação final.

## O Desafio

Você é o desenvolvedor frontend de uma empresa que coleta dados de equipamentos utilizados em uma operação florestal. Dentre esses dados estão o histórico de posições e estados desses equipamentos. O estado de um equipamento é utilizado para saber o que o equipamento estava fazendo em um determinado momento, seja *Operando*, *Parado* ou em *Manutenção*. O estado é alterado de acordo com o uso do equipamento na operação, já a posição do equipamento é coletada através do GPS e é enviada e armazenada de tempo em tempo pela aplicação.

Seu objetivo é, de posse desses dados, desenvolver o frontend de aplicação web que trate e exibida essas informações para os gestores da operação.

## Requisitos

Esses requisitos são obrigatórios e devem ser desenvolvidos.

* **Posições dos equipamentos**: Exibir no mapa os equipamentos nas suas posições mais recentes.

* **Estado atual do equipamento**: Visualizar o estado mais recente dos equipamentos. Exemplo: mostrando no mapa, como um pop-up, mouse hover sobre o equipamento, etc.

* **Histórico de estados do equipamento**: Permitir a visualização do histórico de estados de um equipamento específico ao clicar sobre o equipamento.

## Dados

Todos os dados que precisa para desenvolver os requisitos estão na pasta `data/` no formato `json` e são detalhados a seguir.

```sh
data/
|- equipment.json
|- equipmentModel.json
|- equipmentPositionHistory.json
|- equipmentState.json
|- equipmentStateHistory.json
```

### equipment.json
Contém todos os equipamentos da aplicação.

```JSONC
[
    {
        // Identificador único do equipamento
        "id": "a7c53eb1-4f5e-4eba-9764-ad205d0891f9",
        // Chave estrangeira, utilizada para referenciar de qual modelo é esse equipamento 
        "equipmentModelId": "a3540227-2f0e-4362-9517-92f41dabbfdf",
        // Nome do Equipamento
        "name": "CA-0001"
    },
    // ...
]
```

### equipmentState.json
Contém todos os estados dos equipamentos.

```JSONC
[
    {
        // Identificador único do estado de equipamento
        "id": "0808344c-454b-4c36-89e8-d7687e692d57",
        // Nome do estado
        "name": "Operando",
        // Cor utilizada para representar o estado
        "color": "#2ecc71"
    },
    // ...
]
```

### equipmentModel.json
Contém todos os modelos de equipamento e a informação de qual é o valor por hora do equipamento em cada um dos estados.

```JSONC
[
    {
        // Identificador único do modelo de equipamento
        "id": "a3540227-2f0e-4362-9517-92f41dabbfdf",
        // Nome do modelo de equipamento
        "name": "Caminhão de carga",
        // Valor gerado por hora para cada estado
        "hourlyEarnings": [
            {
                // Chave estrangeira, utilizada para referenciar de qual valor é esse estado
                "equipmentStateId": "0808344c-454b-4c36-89e8-d7687e692d57",
                // Valor gerado por hora nesse estado
                "value": 100
            },
            // ...
        ]
    },
    // ...
]
```

### equipmentStateHistory.json
O histórico de estados por equipamento.

```JSONC
[
    {
        // Chave estrangeira, utilizada para referenciar de qual equipamento são esses estados
        "equipmentId": "a7c53eb1-4f5e-4eba-9764-ad205d0891f9",
        // Histórico de estados do equipamento
        "states": [
            {
                // Data em que o equipamento declarou estar nesse estado
                "date": "2021-02-01T03:00:00.000Z",
                // Chave estrangeira, utilizada para referenciar qual é o estado
                // que o equipamento estava nesse momento
                "equipmentStateId": "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f"
            },
            // ...
        ]
    },
    // ...
]
```

### equipmentPositionHistory.json
O histórico de posições dos equipamentos.

```JSONC
[
    {
        // Chave estrangeira, utilizada para referenciar de qual equipamento são esses estados
        "equipmentId": "a7c53eb1-4f5e-4eba-9764-ad205d0891f9",
        // Posições do equipamento
        "positions": [
            {   
                // Data em que a posição foi registrada
                "date": "2021-02-01T03:00:00.000Z",
                // Latitude WGS84
                "lat": -19.126536,
                // Longitude WGS84
                "lon": -45.947756
            },
            // ...
        ]
    },
    // ...
]
```


## Tecnologias

* React

* Typescript.

* Bibliotecas e APIs de Mapas (Leaflet).
