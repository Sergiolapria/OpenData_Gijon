# OpenData_Gijon
Descargar datos contaminación ambiental de la plataforma de OpenData de Gijon con la herramienta Node-RED
## Requisitos software
* Node-Red
* node-red-dashboard
## Como funciona?
Si se observa la siguiente figura
![](https://github.com/Sergiolapria/OpenData_Gijon/blob/593bcc381ec9ddb46034959a2116b8b178c0cc6e/Node-RED.png)
se descargan los 3 JSON, uno con los datos ambientales de la estaciones en l aultima semana, otro con los parametros de las estaciones y otro con las estaciones y su ubicación.
El JSON con los datos de las diferentes estaciones es un *chorizo* en el cual los primeros 168 items pertenecen a los parametros de los ultimos 14 dias, los siguientes 168 items a otra estacion, y así sucesivamente.
El JSON de los parametros tiene la siguiente forma:
![](https://github.com/Sergiolapria/OpenData_Gijon/blob/2161cc95d695cd2812190800b3d9b1f4951b1cac/PARAMETROS.png)
El JSON final solo contiene los nombres de las estaciones y su localización, es un dato redundante ya que en cada item viene con los datos ambientales ya viene.
Para ello hay una serie de 3 subflow que se van a encargar de extraer la informacion pertinente para al final mostrar la información deseada.
A continuación se muestra un dashboard para una estacion en concreto.
![](https://github.com/Sergiolapria/OpenData_Gijon/blob/6395223cf041231af05639a47469cf91040d2a6d/Node-RED%20Dashboard.png)

