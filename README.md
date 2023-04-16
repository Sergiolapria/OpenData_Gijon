# OpenData_Gijon
Descargar datos contaminación ambiental de la plataforma de OpenData de Gijon con la herramienta Node-RED
## Requisitos software
* Node-Red
* node-red-dashboard
## Como funciona?
Si se observa la siguiente figura
![](https://github.com/Sergiolapria/OpenData_Gijon/blob/593bcc381ec9ddb46034959a2116b8b178c0cc6e/Node-RED.png)
se descargan los 3 JSON, uno con los datos ambientales de la estaciones en l aultima semana, otro con los parametros de las estaciones y otro con las estaciones y su ubicación.
Para ello hay una serie de 3 subflow que se van a encargar de extraer la informacion pertinente para al final mostrar la información deseada.
A continuación se muestra un dashboard para una estacion en concreto.
![](https://github.com/Sergiolapria/OpenData_Gijon/blob/6395223cf041231af05639a47469cf91040d2a6d/Node-RED%20Dashboard.png)
