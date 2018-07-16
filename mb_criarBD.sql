create database CriptoMoeda;

use CriptoMoeda;

CREATE TABLE CM_CORRETORA (
ID_CORRETORA INT AUTO_INCREMENT COMMENT 'Table Primary Key AUTO_INCREMENT.',
NM_CORRETORA 			VARCHAR(100) NOT NULL COMMENT 'Nome Corretora ',
ST_CORRETORA 			VARCHAR(500) NOT NULL COMMENT 'Site Corretora ',
API_PB_CORRETORA 			VARCHAR(500) NOT NULL COMMENT 'API Publica Corretora ',
API_CL_CORRETORA 			VARCHAR(500) NOT NULL COMMENT 'API Privada Corretora ',
FL_ATIVO BIT NOT NULL DEFAULT 0 COMMENT 'Flag True = Ativo, False = não ativo',
PRIMARY KEY PK_STATE (ID_CORRETORA)
) ENGINE=MyISAM COMMENT = 'Dados Corretora';

CREATE TABLE CM_MOEDA (
ID_MOEDA INT AUTO_INCREMENT COMMENT 'Table Primary Key AUTO_INCREMENT.',
DS_MOEDA 			VARCHAR(100) NOT NULL COMMENT 'Descrição Moeda',
SG_MOEDA					CHAR(3) NOT NULL COMMENT 'SIGLA MOEDA.',
DM_MOEDA					CHAR(6) NOT NULL COMMENT 'DOMINIO MOEDA.',
FL_ATIVO BIT NOT NULL DEFAULT 0 COMMENT 'Flag True = Ativo, False = não ativo',
PRIMARY KEY PK_STATE (ID_MOEDA)
) ENGINE=MyISAM COMMENT = 'Dados Moeda';

CREATE TABLE CM_CORRETORA_MOEDA (
ID_CORRETORA_MOEDA INT AUTO_INCREMENT COMMENT 'Table Primary Key AUTO_INCREMENT.',
ID_CORRETORA    INT NOT NULL COMMENT 'Table (CM_CORRETORA) foreign key to Corretora.',
ID_MOEDA    INT NOT NULL COMMENT 'Table (CM_MOEDA) foreign key to Moeda.',
FL_ATIVO BIT NOT NULL DEFAULT 0 COMMENT 'Flag True = Ativo, False = não ativo',
PRIMARY KEY PK_STATE (ID_CORRETORA_MOEDA)
)ENGINE=MyISAM COMMENT = 'Tabela N para N - Corretora vs Moeda';

ALTER TABLE CM_CORRETORA_MOEDA ADD CONSTRAINT FK_CORRETORA_VS_COMD FOREIGN KEY(ID_CORRETORA) REFERENCES CM_CORRETORA (ID_CORRETORA);
ALTER TABLE CM_CORRETORA_MOEDA ADD CONSTRAINT FK_MOEDA_VS_COMD FOREIGN KEY(ID_MOEDA) REFERENCES CM_MOEDA (ID_MOEDA);

CREATE TABLE CM_TICKER (
ID_TICKER					INT AUTO_INCREMENT COMMENT 'Table Primary Key AUTO_INCREMENT.',
ID_CORRETORA_MOEDA    				INT NOT NULL COMMENT 'Table (CM_MOEDA) foreign key to Moeda.',
CM_HIGH    					DECIMAL(18,9) NOT NULL COMMENT 'Maior preço unitário de negociação das últimas 24 horas. ',
CM_LOW     					DECIMAL(18,9) NOT NULL COMMENT 'Menor preço unitário de negociação das últimas 24 horas. ',
CM_VOL     					DECIMAL(18,9)  NOT NULL COMMENT 'Quantidade negociada nas últimas 24 horas. ',
CM_LAST     				DECIMAL(18,9)  NOT NULL COMMENT 'Preço unitário da última negociação. ',
CM_BUY     					DECIMAL(18,9)  NOT NULL COMMENT 'Maior preço de oferta de compra das últimas 24 horas. ',
CM_SELL     				DECIMAL(18,9)  NOT NULL COMMENT 'Menor preço de oferta de venda das últimas 24 horas. ',
CM_DATE     				INT NOT NULL COMMENT 'Data e hora da informação em Era Unix ',
DT_TICKER					TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Data Insert',
PRIMARY KEY PK_STATE (ID_TICKER)
) ENGINE=MyISAM COMMENT = 'Retorna informações com o resumo das últimas 24 horas de negociações.';

ALTER TABLE CM_TICKER ADD CONSTRAINT FK_MOEDA_VS_TICKER FOREIGN KEY(ID_CORRETORA_MOEDA) REFERENCES CM_CORRETORA_MOEDA (ID_CORRETORA_MOEDA);

-- orderbook
CREATE TABLE CM_ORDERBOOK (
ID_ORDERBOOK				INT AUTO_INCREMENT COMMENT 'Table Primary Key AUTO_INCREMENT.',
ID_CORRETORA_MOEDA    				INT NOT NULL COMMENT 'Table (CM_MOEDA) foreign key to Moeda.',
NM_ACAO					    varchar(5) NOT NULL COMMENT '1 = COMPRA 2 = VENDA.',
CM_PRECO    					DECIMAL(18,9)  NOT NULL COMMENT 'Preço unitário da oferta de compra.',
CM_QUANT     					DECIMAL(18,9)  NOT NULL COMMENT 'Quantidade da oferta de compra.',
DT_ORDERBOOK					TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Data Insert',
PRIMARY KEY PK_STATE (ID_ORDERBOOK)
) ENGINE=MyISAM COMMENT = 'Livro de ofertas é composto por duas listas: (1) uma lista com as ofertas de compras ordenadas pelo maior valor; (2) uma lista com as ofertas de venda ordenadas pelo menor valor. O livro mostra até 1000 ofertas de compra e até 1000 ofertas de venda.';

ALTER TABLE CM_ORDERBOOK ADD CONSTRAINT FK_MOEDA_VS_ORDERBOOK FOREIGN KEY(ID_CORRETORA_MOEDA) REFERENCES CM_CORRETORA_MOEDA (ID_CORRETORA_MOEDA);
-- trades
CREATE TABLE CM_TRADE (
ID_TRADE					INT AUTO_INCREMENT COMMENT 'Table Primary Key AUTO_INCREMENT.',
CM_DATE     				INT NOT NULL COMMENT 'Data e hora da informação em Era Unix ',
ID_CORRETORA_MOEDA    				INT NOT NULL COMMENT 'Table (CM_MOEDA) foreign key to Moeda.',
CM_PRICE    					DECIMAL(18,9)  NOT NULL COMMENT 'Preço unitário da negociação.',
CM_AMOUNT     					DECIMAL(18,9)  NOT NULL COMMENT 'Quantidade da negociação.',
CM_TID					    INT NOT NULL COMMENT 'Identificador da negociação.',
CM_TYPE 					CHAR(4) NOT NULL COMMENT 'Indica a ponta executora da negociação ',
DT_TRADE					TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Data Insert',
PRIMARY KEY PK_STATE (ID_TRADE)
) ENGINE=MyISAM COMMENT = 'Livro de ofertas é composto por duas listas: (1) uma lista com as ofertas de compras ordenadas pelo maior valor; (2) uma lista com as ofertas de venda ordenadas pelo menor valor. O livro mostra até 1000 ofertas de compra e até 1000 ofertas de venda.';

ALTER TABLE CM_TRADE ADD CONSTRAINT FK_MOEDA_VS_TRADE FOREIGN KEY(ID_CORRETORA_MOEDA) REFERENCES CM_CORRETORA_MOEDA (ID_CORRETORA_MOEDA);

-- day-summary
CREATE TABLE CM_DAY_SUMMARY (
ID_DAY_SUMMARY					INT AUTO_INCREMENT COMMENT 'Table Primary Key AUTO_INCREMENT.',
ID_CORRETORA_MOEDA    				INT NOT NULL COMMENT 'Table (CM_MOEDA) foreign key to Moeda.',
CM_DATA						TIMESTAMP COMMENT 'Data do resumo diário - Formato: AAAA-MM-DD, exemplo: 2013-06-20 ',
CM_OPENING    					DECIMAL(18,9) NOT NULL COMMENT 'Preço unitário de abertura de negociação no dia.',
CM_CLOSING     					DECIMAL(18,9) NOT NULL COMMENT 'Preço unitário de fechamento de negociação no dia.',
CM_LOWEST     					DECIMAL(18,9)  NOT NULL COMMENT 'Menor preço unitário de negociação no dia.',
CM_HIGHEST     				DECIMAL(18,9)  NOT NULL COMMENT 'Maior preço unitário de negociação no dia.',
CM_VOLUME     					DECIMAL(18,9)  NOT NULL COMMENT 'Volume de Reais (BRL) negociados no dia. ',
CM_QUANTITY     				DECIMAL(18,9)  NOT NULL COMMENT 'Quantidade da moeda digital negociada no dia.',
CM_AMOUNT     				INT NOT NULL COMMENT 'Número de negociações realizadas no dia.',
CM_AVG_PRICE     				DECIMAL(18,9)  NOT NULL COMMENT 'Preço unitário médio das negociações no dia.',
DT_DAY_SUMMARY					TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Data Insert',
PRIMARY KEY PK_STATE (ID_DAY_SUMMARY)
) ENGINE=MyISAM COMMENT = 'Retorna informações com o resumo das últimas 24 horas de negociações.';

ALTER TABLE CM_DAY_SUMMARY ADD CONSTRAINT FK_MOEDA_VS_DAY_SUMMARY FOREIGN KEY(ID_CORRETORA_MOEDA) REFERENCES CM_CORRETORA_MOEDA (ID_CORRETORA_MOEDA);
