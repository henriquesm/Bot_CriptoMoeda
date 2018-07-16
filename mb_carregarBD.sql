
INSERT INTO `CriptoMoeda`.`CM_CORRETORA`
(
`NM_CORRETORA`,
`ST_CORRETORA`,
`API_PB_CORRETORA`,
`API_CL_CORRETORA`,
`FL_ATIVO`
)
VALUES
(
'Mercado Bitcoin',
'https://www.mercadobitcoin.com.br/',
'https://www.mercadobitcoin.net/api/',
'https://www.mercadobitcoin.net/tapi/v3/',
1
);

INSERT INTO `CriptoMoeda`.`CM_MOEDA`
(
`DS_MOEDA`,
`SG_MOEDA`,
`DM_MOEDA`,
`FL_ATIVO`
)
VALUES
(
'Bitcoin',
'BTC',
'BRLBTC',
1
);

INSERT INTO `CriptoMoeda`.`CM_MOEDA`
(
`DS_MOEDA`,
`SG_MOEDA`,
`DM_MOEDA`,
`FL_ATIVO`
)
VALUES
(
'Litecoin',
'LTC',
'BRLLTC',
1
);


INSERT INTO `CriptoMoeda`.`CM_MOEDA`
(
`DS_MOEDA`,
`SG_MOEDA`,
`DM_MOEDA`,
`FL_ATIVO`
)
VALUES
(
'BCash',
'BCH',
'BRLBCH',
1
);

INSERT INTO `CriptoMoeda`.`CM_CORRETORA_MOEDA`
(
`ID_CORRETORA`,
`ID_MOEDA`,
`FL_ATIVO`
)
VALUES
(
1,
1,
1);

INSERT INTO `CriptoMoeda`.`CM_CORRETORA_MOEDA`
(
`ID_CORRETORA`,
`ID_MOEDA`,
`FL_ATIVO`
)
VALUES
(
1,
2,
1);

INSERT INTO `CriptoMoeda`.`CM_CORRETORA_MOEDA`
(
`ID_CORRETORA`,
`ID_MOEDA`,
`FL_ATIVO`
)
VALUES
(
1,
3,
1);