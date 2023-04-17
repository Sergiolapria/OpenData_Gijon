# OpenData_Gijon
Descargar datos contaminación ambiental de la plataforma de OpenData de Gijon con la herramienta Node-RED
## Requisitos software
* Node-Red
* node-red-dashboard
## Como funciona?
Si se observa la siguiente figura
![](https://github.com/Sergiolapria/OpenData_Gijon/blob/593bcc381ec9ddb46034959a2116b8b178c0cc6e/Node-RED.png)

se descargan los 3 JSON, uno con los datos ambientales de la estaciones en la última semana, otro con los parametros de las estaciones y otro con las estaciones y su ubicación.
El JSON con los datos de las diferentes estaciones es un "*chorizo*" en el cual los primeros 168 items pertenecen a los parametros de una estacion los ultimos 14 dias, los siguientes 168 items a otra estacion, y así sucesivamente.
El JSON de los parametros tiene la siguiente forma:
![](https://github.com/Sergiolapria/OpenData_Gijon/blob/2161cc95d695cd2812190800b3d9b1f4951b1cac/PARAMETROS.png)
El JSON final solo contiene los nombres de las estaciones y su localización, es un dato redundante ya que en cada item viene con los datos ambientales ya viene.
Para ello hay una serie de 3 subflow que se van a encargar de extraer la informacion pertinente para al final mostrar la información deseada.
A continuación se muestra un dashboard para una estacion en concreto.
![](https://github.com/Sergiolapria/OpenData_Gijon/blob/6395223cf041231af05639a47469cf91040d2a6d/Node-RED%20Dashboard.png)

Si nos fijamos en la proxima figura, vemos como se descargan los ficheros, hago un "*http request*" a las direcciones que contienen cada uno de los ficheros, de esta manera descarga 3 ficheros json, tener en cuenta que estos datos se leen cada 2 horas.
![](https://github.com/Sergiolapria/OpenData_Gijon/blob/da2a9ec547bea4144203c1fdf7260b75901be9a7/Node-RED%20_%20Descarga.png)

Del bloque "*Function 3*" se descargan los parametros de las mediciones tal y como se muestra en la siguiente figura:
![](https://github.com/Sergiolapria/OpenData_Gijon/blob/da2a9ec547bea4144203c1fdf7260b75901be9a7/Node-RED_JSON_PARAMETROS.png)

Del bloque "*Function 1*" se descargan los nombres de las estaciones ambientales diseminadas por Gijón, estan nombradas por la calle o barrio donde estan ubicadas.
![](https://github.com/Sergiolapria/OpenData_Gijon/blob/da2a9ec547bea4144203c1fdf7260b75901be9a7/Node-RED_JSON_ESTACIONES.png)

Del bloque "*Function 5*" sale el "*chorizo*" con los datos ambientales de todas las estaciones, que es "*choppeado*" en mensaje por estación:
![](https://github.com/Sergiolapria/OpenData_Gijon/blob/b1bc1c30f591eb75893ddfca24736b23aa6e3455/Node-RED%20_%20chopper.png)

en la siguiente figura muestro un mensaje de sálida al azar de la función:
![](https://github.com/Sergiolapria/OpenData_Gijon/blob/b1bc1c30f591eb75893ddfca24736b23aa6e3455/Node-RED%20_%20Avda_Castilla.png)

