RF01 - Registro de Matrículas
O sistema deve permitir o registro rápido e preciso de todas as matrículas realizadas na academia, incluindo informações de tipo de plano de mensalidade, nível (iniciante, intermediário, avançado), nome completo do aluno, número de contato, restrições de treino (limitações físicas e condições médicas), idade, objetivo, taxa de matrícula e data da matrícula.
Regras de negócio:

RN.01 - Validação de Campos Obrigatórios: Antes de registrar uma matrícula, o sistema deve garantir que todos os campos obrigatórios (tipo de plano de mensalidade, nível, nome completo do aluno, número de contato, restrições de treino, idade, objetivo  e data da matrícula) sejam preenchidos para evitar registros incompletos ou inconsistentes.

RN.02 - Validação de Plano de Mensalidade: O sistema deve verificar qual plano foi selecionado (Flex(mensal), Steady(semestral), Power(anual) ou Premium(anual+direito a direito a levar um convidado a cada 2 meses)) correspondente para gerar o valor da mensalidade.

RN.03 - Validação de Nível: O sistema deve verificar quanto tempo o aluno já treinou anteriormente: peso 0 (nenhuma experiência) = iniciante absoluto, peso 1 (até 12 meses) = iniciante, peso 2 (entre 1 ano a 3,4 anos) = intermediário, peso 3 (3,5 anos ou mais) = avançado. 

RN.04 - Validação de Nome Completo do Aluno: O sistema deve verificar se o nome do aluno tem sobrenome para cada matrícula registrada, garantindo que não sejam registradas matrículas com nomes incompletos.

RN.05 - Validação de Número de Contato: O sistema deve verificar se o número do aluno apenas tem números para cada matrícula registrada, garantindo que não sejam registradas matrículas incorretas.

RN.06 - Validação da Taxa de Matrícula: O sistema deve garantir que a taxa de cada matrícula vendida seja um valor que seja positivo, evitando registros de vendas com preços inválidos.

RN.07 - Registro de Data da Matrícula: O sistema deve registrar automaticamente a data e hora em que a matrícula foi realizada, garantindo a precisão dos registros de vendas e facilitando a análise de dados posteriormente.

RN.08 - Geração de Número de Transação Único: O sistema deve gerar um número de matrícula único para cada aluno registrado, garantindo a rastreabilidade e evitando duplicatas de registros.

RN.09 - Histórico de Alterações: O sistema deve manter um histórico de todas as alterações feitas nos registros de cada aluno, incluindo quem fez a alteração e quando, para fins de auditoria e rastreabilidade.
