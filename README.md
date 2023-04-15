# OpenData_Gijon
Descargar datos contaminación ambiental de la plataforma de OpenData de Gijon con la herramienta Node-RED
## Requisitos software
* Node-Red
* node-red-dashboard
## Estación meteorológica
Esta basada en el diseño propuesto por Alex Corvis: https://github.com/alexcorvis84/mini-lora-weatherstation , solo se ha añadido una sonda de temperatura de contacto con el fin de medir la temperatura del agua.
## Como funciona?
Si se observa la siguiente figura
![NODE_RED][https://github.com/Sergiolapria/OpenData_Gijon/blob/main/Node-RED.png]
se descargan los 3 JSON, uno con los datos ambientales de la estaciones en l aultima semana, otro con los parametros de las estaciones y otro con las estaciones y su ubicación.
Para ello hay una serie de 3 subflow que se van a encargar de extraer la informacion pertinente para al final mostrar la indormación deseada.
