// Banco de preguntas LPIC-1 102-500 generado desde 102-500_Preguntas_Respuestas_Descripcion.md
const QUESTION_BANK_102 = [
  {
    "id": 1,
    "question": "RELLENE EL ESPACIO EN BLANCO: ¿Qué comando se utiliza para establecer el nombre de host (hostname) del sistema local? (Especifique solo el comando, sin ruta ni parámetros).",
    "options": {},
    "answer": "hostname",
    "explanation": ""
  },
  {
    "id": 2,
    "question": "¿Cuál de las siguientes es una dirección IPv6 válida?",
    "options": {
      "A": "2001:db8:0g21::1",
      "B": "2001::db8:4581::1",
      "C": "2001:db8:3241::1",
      "D": "2001%db8%9990%%1",
      "E": "2001.db8.819f..1"
    },
    "answer": "C",
    "explanation": "La respuesta correcta es la C, 2001:db8:3241::1, porque tiene un formato de dirección IPv6 válido. Las direcciones IPv6 son direcciones de 128 bits escritas en notación hexadecimal, agrupadas en ocho campos de 16 bits separados por dos puntos. Cada campo puede contener números hexadecimales de 0000 a FFFF.\n\nLa opción A, 2001:db8:0g21::1, no es válida porque contiene el carácter «g», que no es un dígito hexadecimal válido (los dígitos válidos son 0-9 y a-f). La opción B, 2001::db8:4581::1, es incorrecta porque intenta usar el doble dos puntos :: (que representa la compresión de campos consecutivos con valor cero) dos veces en la misma dirección, lo cual no está permitido: solo puede aparecer un ::. La opción D, 2001%db8%9990%%1, usa el carácter «%», que en algunos contextos (como las URL) se usa para codificar caracteres especiales, pero no es un separador válido en las direcciones IPv6. La opción E, 2001.db8.819f..1, usa puntos como separadores, que son propios de las direcciones IPv4, no de IPv6.\n\nEl :: en 2001:db8:3241::1 representa una secuencia de campos con valor cero, lo que hace que la dirección sea válida porque puede expandirse a una representación completa de 128 bits. En concreto, 2001:db8:3241::1 equivale a 2001:0db8:3241:0000:0000:0000:0000:0001. En entornos de nube, la configuración correcta de direcciones IPv6 es fundamental para la comunicación entre máquinas virtuales, contenedores y otros recursos. Los proveedores de nube adoptan cada vez más IPv6 para dar cabida al creciente número de dispositivos y servicios. Un formato de dirección correcto garantiza que estos recursos sean enrutables y accesibles dentro de la red.\n\nPara más información, consulte estas fuentes de referencia:\n\n• RFC 4291: IP Version 6 Addressing Architecture: https://www.rfc-editor.org/rfc/rfc4291\n• Espacio de direcciones IPv6 de IANA: https://www.iana.org/assignments/ipv6-address-space/ipv6-address-space.xhtml"
  },
  {
    "id": 3,
    "question": "RELLENE EL ESPACIO EN BLANCO: ¿Qué comando, según sus opciones, puede mostrar las conexiones TCP abiertas, las tablas de enrutamiento y las estadísticas de las interfaces de red? (Especifique solo el comando, sin ruta ni parámetros).",
    "options": {},
    "answer": "netstat",
    "explanation": ""
  },
  {
    "id": 4,
    "question": "RELLENE EL ESPACIO EN BLANCO: ¿Qué comando incluido en NetworkManager es una aplicación basada en curses que ofrece un acceso sencillo a NetworkManager desde la línea de comandos? (Especifique solo el comando, sin ruta ni parámetros).",
    "options": {},
    "answer": "nmtui",
    "explanation": ""
  },
  {
    "id": 5,
    "question": "¿Cuál de las siguientes herramientas, utilizadas para depurar DNS, informa no solo de la respuesta del servidor de nombres, sino también de los detalles de la consulta?",
    "options": {
      "A": "dnsq",
      "B": "hostname",
      "C": "dig",
      "D": "dnslookup",
      "E": "zoneinfo"
    },
    "answer": "C",
    "explanation": "La respuesta correcta es la C, dig (Domain Information Groper). Motivos:\n\n• Capacidades de diagnóstico de dig: dig es una potente herramienta de línea de comandos que se usa principalmente para consultar servidores de nombres DNS. Es mucho más completa que las herramientas de búsqueda simples.\n• Detalles de la consulta: a diferencia de las herramientas que solo devuelven la dirección IP resuelta, dig informa con detalle sobre el propio proceso de consulta: el tipo de consulta (A, MX, NS, etc.), los indicadores (flags) usados, el tiempo que tardó en llegar la respuesta y el tamaño del mensaje.\n• Detalles de la respuesta: dig muestra la respuesta completa recibida del servidor DNS, incluidas la sección de respuesta (los registros resueltos), la sección de autoridad (información sobre los servidores de nombres autoritativos) y la sección adicional (registros auxiliares).\n• Ayuda para la depuración: este nivel de detalle hace que dig sea indispensable para diagnosticar problemas de resolución DNS. Permite seguir el recorrido de una consulta DNS, identificar servidores DNS mal configurados y verificar firmas DNSSEC.\n\nPor qué las demás opciones son incorrectas:\n\n• dnsq y zoneinfo no son herramientas DNS estándar ni ampliamente disponibles.\n• hostname simplemente muestra el nombre de host del sistema.\n• dnslookup (o nslookup, que suele ser su antecesor) realiza búsquedas DNS básicas, pero carece del informe detallado y de las capacidades de diagnóstico de dig. Aunque nslookup puede devolver la dirección IP, no ofrece información completa sobre el proceso de consulta.\n\nContexto de nube: en entornos de nube, donde los servicios dependen en gran medida del DNS para el descubrimiento de servicios y el enrutamiento, dig es fundamental para resolver problemas de DNS que pueden afectar la disponibilidad de las aplicaciones. Una resolución DNS correcta garantiza la comunicación adecuada entre servicios desplegados en distintas máquinas virtuales o contenedores.\n\nReferencias:\n\n• Manual de dig de ISC: https://www.isc.org/bind/dig/ (ISC es la organización que mantiene BIND, una implementación de servidor DNS muy común, y también mantiene dig).\n• man dig en un sistema Linux/Unix también ofrece una documentación excelente."
  },
  {
    "id": 6,
    "question": "¿Cuál de las siguientes instrucciones es válida en el archivo /etc/nsswitch.conf?",
    "options": {
      "A": "multi on",
      "B": "192.168.168.4 dns-server",
      "C": "namespaces: net mount procs",
      "D": "include /etc/nsswitch.d/",
      "E": "hosts: files dns"
    },
    "answer": "E",
    "explanation": "La respuesta correcta es la E, hosts: files dns. Es una entrada válida del archivo /etc/nsswitch.conf que determina cómo resuelve el sistema los nombres de host.\n\nEl archivo /etc/nsswitch.conf es un archivo de configuración fundamental en Linux y en sistemas tipo Unix que controla el Name Service Switch (NSS). NSS determina el orden en que se consultan las distintas fuentes al resolver nombres. Estos nombres pueden ser nombres de host, cuentas de usuario, grupos, servicios y otra información del sistema.\n\nLa sintaxis de /etc/nsswitch.conf suele seguir el patrón base_de_datos: fuente1 fuente2 ...:\n\n• base_de_datos indica el tipo de información que se busca (por ejemplo, hosts para nombres de host o passwd para cuentas de usuario).\n• fuente1, fuente2, etc., indican las fuentes de datos que se usarán y el orden en que se consultarán.\n\nEntre las fuentes habituales están files (archivos locales como /etc/hosts y /etc/passwd), dns (Domain Name System), ldap (Lightweight Directory Access Protocol) y nis (Network Information Service).\n\nCon la respuesta válida hosts: files dns, cuando un programa intenta resolver un nombre de host, el sistema consulta primero la fuente files (normalmente /etc/hosts). Si encuentra el nombre ahí, la resolución termina. Si no lo encuentra en /etc/hosts, pasa a consultar la fuente dns, es decir, realiza una búsqueda DNS mediante los servidores DNS configurados.\n\nLa opción A (multi on) no es una fuente ni una directiva válida de NSS (es una opción del antiguo /etc/host.conf). La opción B (192.168.168.4 dns-server) está relacionada con la configuración de DNS, pero no corresponde a la sintaxis de nsswitch.conf; su lugar natural serían los archivos de configuración del resolvedor DNS. La opción C (namespaces: net mount procs) hace referencia a los espacios de nombres (namespaces) de Linux, una característica para aislar procesos que no tiene nada que ver con la resolución de nombres. La opción D (include /etc/nsswitch.d/) podría parecer válida, ya que algunas configuraciones admiten incluir otros archivos o directorios para modularizar la configuración, pero no indica ninguna fuente para ninguna base de datos. hosts: files dns es una directiva completa y bien formada para la resolución de nombres de host.\n\nLecturas recomendadas:\n\n• Página de manual de nsswitch.conf: man nsswitch.conf (disponible desde la línea de comandos en la mayoría de los sistemas Linux).\n• También es útil consultar documentación sobre NSS, por ejemplo la documentación de Red Hat."
  },
  {
    "id": 7,
    "question": "¿Cuáles de los siguientes tipos de conexión, tal como se muestran en nmcli connection show, pueden existir en NetworkManager? (Elija tres).",
    "options": {
      "A": "tcp",
      "B": "ethernet",
      "C": "wifi",
      "D": "ipv6",
      "E": "bridge"
    },
    "answer": "BCE",
    "explanation": "Las respuestas correctas son B, C y E, que corresponden a los tipos de conexión ethernet, wifi y bridge de NetworkManager, tal como los muestra nmcli connection show.\n\nNetworkManager es un servicio del sistema que gestiona los dispositivos y las conexiones de red. Admite varios tipos de conexión que definen cómo se conecta un dispositivo a una red. Una conexión ethernet representa una interfaz de red cableada. Una conexión wifi representa una interfaz de red inalámbrica que usa los estándares 802.11. Una conexión bridge crea un puente de red virtual que permite que varias interfaces actúen como un único segmento de red; se usa mucho en virtualización y para agrupar interfaces.\n\nEl comando nmcli connection show lista estos tipos de conexión y sus configuraciones. Aunque protocolos como TCP (A) e IPv6 (D) son componentes fundamentales de la comunicación en red, no son tipos de conexión en el contexto de NetworkManager, sino protocolos que las conexiones utilizan. El tipo de conexión se refiere al medio físico o lógico con el que se establece el enlace de red (cableado, inalámbrico, puente virtual). TCP e IPv6 funcionan en capas superiores y se encargan del transporte y el direccionamiento de los paquetes que circulan por la conexión. NetworkManager gestiona la conectividad subyacente (ethernet, wifi, bridge) sobre la que operan estos protocolos.\n\nPor lo tanto, ethernet, wifi y bridge son los tipos de conexión válidos que NetworkManager gestiona directamente y muestra mediante nmcli connection show.\n\nLecturas recomendadas:\n\n• Documentación de NetworkManager: https://networkmanager.dev/\n• Uso de nmcli: man nmcli\n• Guía de redes de Red Hat Enterprise Linux: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/ (buscar «NetworkManager»)"
  },
  {
    "id": 8,
    "question": "En una estación de trabajo Linux, el comando route tarda mucho tiempo en mostrar la tabla de enrutamiento. ¿Qué error indica esto?",
    "options": {
      "A": "La información de enrutamiento local puede estar dañada y debe volver a validarse mediante un protocolo de enrutamiento.",
      "B": "Uno de los routers de la tabla de enrutamiento no está disponible, lo que hace que el mecanismo automático de detección de fallos de router (ARF-D) espere hasta agotar el tiempo de espera.",
      "C": "Puede que haya accidentalmente más de un router predeterminado, en cuyo caso debe realizarse en la red una elección del router predeterminado para escoger uno solo.",
      "D": "El demonio de enrutamiento del kernel de Linux (LKRD) no está en ejecución y debe iniciarse mediante su script de init o su unidad de systemd.",
      "E": "Puede que la resolución DNS no funcione, ya que route intenta por defecto resolver los nombres de los routers y de los destinos, y puede agotar el tiempo de espera."
    },
    "answer": "E",
    "explanation": "La respuesta correcta es la E: puede que la resolución DNS no funcione, ya que route intenta por defecto resolver los nombres de los routers y de los destinos, y puede agotar el tiempo de espera.\n\nJustificación detallada:\n\nDe forma predeterminada, el comando route intenta convertir las direcciones IP en nombres de host para facilitar la lectura. Cuando la resolución DNS es lenta o falla, route sufre retrasos importantes al intentar realizar estas búsquedas para cada entrada de la tabla de enrutamiento, porque espera a que se agote el tiempo de espera del DNS antes de renunciar a resolver cada dirección IP.\n\nLa opción A es incorrecta porque la corrupción de la información de enrutamiento normalmente provocaría un comportamiento de enrutamiento erróneo (por ejemplo, problemas de conectividad), no simplemente una salida lenta de route. Los protocolos de enrutamiento se encargan de propagar y corregir la información de enrutamiento, y los problemas suelen manifestarse primero como fallos de conectividad.\n\nLa opción B es poco probable. Aunque un router no disponible podría afectar al enrutamiento, route muestra principalmente información configurada localmente. Un router caído afectaría más directamente al tráfico que usa esa ruta que al listado de route. Además, ARF-D no es una característica estándar de Linux relacionada con el comando route.\n\nLa opción C también es poco probable. Varios routers predeterminados suelen gestionarse mediante métricas de enrutamiento; aunque pueden provocar bucles o comportamientos extraños, no harían directamente que route tardara en mostrar la tabla. Además, el proceso de elección descrito no es estándar.\n\nLa opción D es incorrecta porque route es una utilidad básica que interactúa directamente con la tabla de enrutamiento del kernel; no depende de un demonio de enrutamiento como LKRD (que no existe como demonio estándar en Linux; los demonios más comunes son bird o quagga). Un demonio de enrutamiento sirve para actualizar dinámicamente la tabla de enrutamiento según los cambios en la topología de la red, pero no es necesario para consultar la tabla.\n\nPor lo tanto, la explicación más plausible del retraso es que route intenta (y falla o agota el tiempo de espera) resolver las direcciones IP a nombres de host mediante DNS. Desactivar la resolución de nombres en el propio comando (con route -n) permitiría comprobar de inmediato si esa es la causa.\n\nLecturas recomendadas:\n\n• Página de manual de route: man route (en una terminal Linux) o buscar en línea «route command Linux man page».\n• Enrutamiento en Linux: https://www.kernel.org/doc/html/latest/networking/routing.html (documentación del kernel sobre enrutamiento)"
  },
  {
    "id": 9,
    "question": "¿Qué es cierto sobre el campo Hop Limit de la cabecera IPv6?",
    "options": {
      "A": "El campo no cambia durante el transporte de un paquete.",
      "B": "El campo se transmite dentro de una cabecera de extensión hop-by-hop.",
      "C": "Cada router que reenvía el paquete aumenta el valor del campo.",
      "D": "Cada router que reenvía el paquete disminuye el valor del campo.",
      "E": "En los paquetes multicast, el valor del campo es siempre 1."
    },
    "answer": "D",
    "explanation": "La respuesta correcta es la D: cada router que reenvía el paquete disminuye el valor del campo. Justificación detallada:\n\nEl campo Hop Limit de la cabecera IPv6 cumple una función esencial: evitar que los paquetes circulen indefinidamente por la red. Es el equivalente al campo Time-to-Live (TTL) de IPv4.\n\nEl campo se reduce en uno cada vez que un router reenvía el paquete. Esto garantiza que los paquetes con errores de enrutamiento o atrapados en bucles acaben descartándose.\n\nSi el Hop Limit llega a cero en cualquier router, este descarta el paquete y normalmente envía un mensaje ICMPv6 Time Exceeded al origen. Este mecanismo evita la congestión de la red y el agotamiento de recursos causado por paquetes que rebotan sin fin entre routers.\n\nLas opciones A, B, C y E son incorrectas. El Hop Limit sí cambia (se reduce) durante el transporte (A). Es un campo estándar de la cabecera IPv6, no forma parte de una cabecera de extensión hop-by-hop (B). Los routers reducen el campo, no lo aumentan (C). El valor del Hop Limit en los paquetes multicast no está fijado en 1; se configura según el alcance deseado de la transmisión multicast (E). Un valor bajo puede limitar los paquetes multicast a la red local, pero puede necesitarse un valor mayor para que se propaguen correctamente. Es parecido al «TTL=1» que suele usarse en las sondas de traceroute, pero no es un principio general del multicast.\n\nLa reducción del Hop Limit es esencial para la estabilidad de la red y es un aspecto fundamental del enrutamiento IPv6. Por eso, el valor inicial debe ser lo bastante alto para llegar al host de destino; un valor predeterminado típico es 64 saltos, similar al TTL máximo en IPv4, y suele bastar para evitar que el paquete caduque antes de tiempo.\n\nReferencias para profundizar:\n\n• RFC 8200 (Internet Protocol, Version 6 (IPv6) Specification): https://datatracker.ietf.org/doc/html/rfc8200 (en particular, la sección sobre el formato de la cabecera IPv6)\n• Cisco – Understanding IPv6 Headers: https://www.cisco.com/c/en/us/support/docs/ip/ip-version-6-ipv6/22604-ipv6-headers.html\n\nEstos recursos ofrecen información detallada sobre los campos de la cabecera IPv6 y sus funciones."
  },
  {
    "id": 10,
    "question": "¿Cuáles de los siguientes subcomandos de nmcli existen? (Elija dos).",
    "options": {
      "A": "nmcli ethernet",
      "B": "nmcli device",
      "C": "nmcli wifi",
      "D": "nmcli address",
      "E": "nmcli connection"
    },
    "answer": "BE",
    "explanation": "Los subcomandos correctos de nmcli son nmcli device y nmcli connection. nmcli (NetworkManager Command Line Interface) es una herramienta de línea de comandos para controlar NetworkManager.\n\n• nmcli device sirve para gestionar los dispositivos de red: listar los dispositivos disponibles, conectarse a redes a través de ellos o desconectarlos. Muestra detalles sobre el hardware y su estado de conectividad.\n• nmcli connection sirve para gestionar los perfiles de conexión de NetworkManager. Estos perfiles almacenan la configuración de red y se usan para establecer conexiones. Con este subcomando se pueden listar, añadir, modificar, activar y desactivar conexiones de red.\n\nnmcli ethernet no es un subcomando directo; las interfaces ethernet se gestionan con nmcli device. Del mismo modo, nmcli wifi no es un subcomando directo; las conexiones wifi se establecen con nmcli device wifi o se gestionan con nmcli connection. nmcli address tampoco es un subcomando directo: las direcciones IP se configuran normalmente dentro de los perfiles de conexión gestionados con nmcli connection y pueden verse con nmcli device show <dispositivo>. Así pues, nmcli device y nmcli connection son los subcomandos fundamentales para trabajar con interfaces y conexiones de red desde la línea de comandos.\n\nLecturas recomendadas:\n\n• Documentación de NetworkManager: https://networkmanager.dev/\n• Página de manual de nmcli: man nmcli en la terminal."
  },
  {
    "id": 11,
    "question": "¿Cuáles de los siguientes cambios pueden producirse como consecuencia de usar el comando ip? (Elija tres).",
    "options": {
      "A": "Las interfaces de red pueden activarse o desactivarse.",
      "B": "Pueden añadirse nuevos servidores de nombres a la configuración del resolvedor.",
      "C": "El nombre de host del sistema puede cambiar.",
      "D": "Las direcciones IP pueden cambiar.",
      "E": "La tabla de enrutamiento puede cambiar."
    },
    "answer": "ADE",
    "explanation": "Justificación de por qué las opciones A, D y E son correctas respecto a las posibles consecuencias de usar el comando ip, mientras que B y C son incorrectas:\n\nEl comando ip de Linux es una potente utilidad para configurar interfaces de red, enrutamiento y direcciones IP.\n\nLa opción A, «Las interfaces de red pueden activarse o desactivarse», es correcta porque ip permite levantar (activar) o bajar (desactivar) interfaces con el subcomando ip link set. Al levantar una interfaz, esta queda operativa y puede enviar y recibir tráfico; al bajarla, se deshabilita.\n\nLa opción D, «Las direcciones IP pueden cambiar», también es correcta. El subcomando ip addr permite asignar, eliminar y modificar las direcciones IP asociadas a las interfaces de red. Esto es fundamental en la configuración de red, ya que las direcciones IP sirven para identificar y comunicarse con los dispositivos de una red. Cambiar la dirección IP es una tarea habitual, por ejemplo, al pasar de DHCP a una configuración IP estática.\n\nLa opción E, «La tabla de enrutamiento puede cambiar», es correcta. El subcomando ip route está diseñado específicamente para manipular la tabla de enrutamiento: permite añadir, eliminar o modificar rutas e influir así en cómo se dirigen los paquetes a su destino. Modificar la tabla de enrutamiento permite definir caminos concretos para el tráfico, algo fundamental para dirigirlo entre distintas redes y subredes.\n\nLa opción B, «Pueden añadirse nuevos servidores de nombres a la configuración del resolvedor», es incorrecta. La configuración de los servidores de nombres (resolución DNS) se gestiona normalmente modificando archivos como /etc/resolv.conf o mediante herramientas de gestión de red, no directamente con el comando ip. Aunque ip podría afectar indirectamente a la resolución DNS si cambia la configuración IP de una interfaz, no modifica directamente la configuración del resolvedor.\n\nLa opción C, «El nombre de host del sistema puede cambiar», también es incorrecta. El nombre de host suele cambiarse con el comando hostnamectl (en sistemas con systemd) o editando directamente el archivo /etc/hostname. El comando ip se centra en la configuración de red de bajo nivel y no controla directamente el nombre de host del sistema.\n\nEn resumen, ip se centra en la manipulación directa de interfaces de red, direcciones IP y enrutamiento. Aunque estos cambios pueden afectar indirectamente a servicios de red relacionados, no modifica directamente la configuración del resolvedor DNS ni el nombre de host. Por lo tanto, A, D y E son las únicas opciones que reflejan acciones directas del comando ip.\n\nReferencias para profundizar:\n\n• Página de manual de ip: man ip (disponible directamente en un sistema Linux).\n• Linux Advanced Routing & Traffic Control HOWTO: http://lartc.org/\n• Guía de redes de Red Hat Enterprise Linux: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/ (buscar «configuring network interfaces» o «ip command»)"
  },
  {
    "id": 12,
    "question": "¿Cuántas direcciones IP pueden usarse para hosts únicos dentro de la subred IPv4 192.168.2.128/26?",
    "options": {
      "A": "6",
      "B": "14",
      "C": "30",
      "D": "62",
      "E": "126"
    },
    "answer": "D",
    "explanation": "La respuesta es la D, 62. Desglose: el «/26» de 192.168.2.128/26 representa la máscara de subred. En IPv4, esta notación indica que los primeros 26 bits de la dirección se usan para la parte de red, y los bits restantes quedan para las direcciones de host. Como una dirección IPv4 tiene 32 bits en total y 26 se dedican a la red, quedan 6 bits (32 − 26 = 6) para identificar hosts.\n\nPor lo tanto, el número de direcciones posibles es 2 elevado al número de bits de host (2^6 = 64).\n\nSin embargo, dentro de una subred hay dos direcciones reservadas para fines especiales: la dirección de red y la dirección de difusión (broadcast). La dirección de red (la más baja del rango) identifica a la propia subred, mientras que la de difusión (la más alta del rango) se usa para enviar mensajes a todos los dispositivos de la subred.\n\nEn consecuencia, para calcular el número de direcciones de host utilizables se restan esas dos direcciones reservadas del total: 64 − 2 = 62, que corresponde a la opción D. Estas direcciones utilizables pueden asignarse a hosts individuales dentro de la red 192.168.2.128/26.\n\nLecturas recomendadas sobre direccionamiento IP y subredes:\n\n• Cisco: https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13769-5.html\n• Centro de aprendizaje de Cloudflare: https://www.cloudflare.com/learning/network-layer/what-is-subnetting/"
  },
  {
    "id": 13,
    "question": "¿Cuáles de las siguientes redes IPv4 están reservadas por la IANA para la asignación de direcciones privadas y el enrutamiento privado? (Elija tres).",
    "options": {
      "A": "10.0.0.0/8",
      "B": "127.0.0.0/8",
      "C": "169.255.0.0/16",
      "D": "172.16.0.0/12",
      "E": "192.168.0.0/16"
    },
    "answer": "ADE",
    "explanation": "Las respuestas correctas son A, D y E, porque estos rangos de direcciones IP están designados específicamente para uso privado dentro de las redes, es decir, no son enrutables en Internet.\n\n• A. 10.0.0.0/8: este bloque ofrece un espacio de direcciones muy amplio y se usa habitualmente en redes privadas grandes. Está definido en la RFC 1918 como rango de direcciones privadas. https://datatracker.ietf.org/doc/html/rfc1918\n• D. 172.16.0.0/12: este rango, que va de 172.16.0.0 a 172.31.255.255, es otro espacio de direcciones privadas de la RFC 1918. La notación CIDR /12 ofrece un buen equilibrio entre el tamaño de la red y el número de hosts disponibles. https://datatracker.ietf.org/doc/html/rfc1918\n• E. 192.168.0.0/16: este bloque se usa muy a menudo en redes privadas pequeñas, como las domésticas y las de pequeñas oficinas. Su tamaño relativamente reducido lo hace fácil de gestionar en configuraciones sencillas. https://datatracker.ietf.org/doc/html/rfc1918\n\nPor qué las demás respuestas son incorrectas:\n\n• B. 127.0.0.0/8: todo este bloque está reservado para direcciones de loopback, que se usan para probar las interfaces de red en la propia máquina local. No están pensadas para el direccionamiento de redes privadas. https://en.wikipedia.org/wiki/Localhost\n• C. 169.255.0.0/16: no es un rango privado. (Nota: el bloque reservado para direcciones de enlace local es 169.254.0.0/16, no 169.255.0.0/16; la opción es un distractor). El rango 169.254.0.0/16 se usa para el direccionamiento IP privado automático (APIPA), también llamado direccionamiento de enlace local (link-local): los hosts se asignan a sí mismos una dirección de ese rango cuando no consiguen obtenerla de un servidor DHCP. Estas direcciones solo son válidas para comunicarse dentro del segmento de red local y no se usan en redes privadas configuradas intencionadamente. https://en.wikipedia.org/wiki/Link-local_address\n\nLas direcciones IP privadas son fundamentales en los entornos de nube para crear redes aisladas y seguras. Permiten que varias máquinas virtuales y servicios se comuniquen internamente sin exponerlos directamente a Internet. La traducción de direcciones de red (NAT) se usa habitualmente para que estas redes privadas accedan a Internet a través de una única dirección IP pública. Conocer los rangos de direcciones privadas es fundamental para diseñar arquitecturas de red seguras y eficientes."
  },
  {
    "id": 14,
    "question": "¿Cuáles de los siguientes comandos configuran las interfaces de red a partir de los archivos de configuración propios de la distribución que ya existen en el sistema? (Elija dos).",
    "options": {
      "A": "ifconf",
      "B": "ifdown",
      "C": "ifpause",
      "D": "ifstart",
      "E": "ifup"
    },
    "answer": "BE",
    "explanation": "Las respuestas correctas son B, ifdown, y E, ifup. Ambos comandos se usan para levantar y bajar interfaces de red (ifup y ifdown, respectivamente) usando la configuración indicada en los archivos de configuración de red del sistema. Estos archivos son específicos de cada distribución (por ejemplo, /etc/network/interfaces en sistemas basados en Debian, o /etc/sysconfig/network-scripts/ifcfg-* en sistemas basados en Red Hat). ifup activa una interfaz leyendo su configuración del archivo correspondiente y aplicando los ajustes, mientras que ifdown desactiva una interfaz, deshaciendo lo que hizo ifup.\n\nifconf no es un comando válido. ifpause e ifstart tampoco son comandos estándar para gestionar interfaces de red mediante archivos de configuración. La administración básica de red en Linux se apoya en las utilidades ifconfig, ip, ifup e ifdown. Los comandos ifconfig e ip permiten configurar las interfaces de red directamente, pero ifup e ifdown dependen de los archivos de configuración existentes en la distribución, por lo que B y E son las respuestas correctas.\n\nReferencias:\n\n• https://man7.org/linux/man-pages/man8/ifup.8.html\n• https://man7.org/linux/man-pages/man8/ifdown.8.html\n• https://www.debian.org/doc/manuals/debian-reference/ch05.en.html"
  },
  {
    "id": 15,
    "question": "¿Cuál de las siguientes afirmaciones es cierta si el UID de un usuario normal es idéntico al GID de un grupo?",
    "options": {
      "A": "Los UID tienen prioridad sobre los GID; por lo tanto, el usuario está disponible y el grupo no.",
      "B": "Ni el usuario ni el grupo están disponibles, para evitar la ambigüedad debida al conflicto de ID.",
      "C": "Los UID y los GID son independientes entre sí; por lo tanto, tanto el usuario como el grupo siguen estando disponibles.",
      "D": "El usuario es el único miembro del grupo, aunque la configuración del grupo incluya otros miembros.",
      "E": "Los GID tienen prioridad sobre los UID; por lo tanto, el grupo está disponible y el usuario no."
    },
    "answer": "C",
    "explanation": "La respuesta correcta es la C: los UID y los GID son independientes entre sí; por lo tanto, tanto el usuario como el grupo siguen estando disponibles.\n\nLos identificadores de usuario (UID) y de grupo (GID) son espacios de nombres separados en los sistemas Linux/Unix. Aunque ambos son identificadores numéricos, tienen fines distintos: un UID identifica una cuenta de usuario y un GID identifica un grupo. El sistema usa estos identificadores para determinar los derechos de acceso y los permisos sobre archivos y recursos. El kernel los trata por separado, aunque tengan el mismo valor numérico.\n\nEl sistema no interpreta que un UID y un GID idénticos sean un conflicto que obligue a deshabilitar al usuario o al grupo. El usuario se identifica y funciona según su UID, y el grupo existe y funciona según su GID, coincidan o no sus valores numéricos.\n\nLa prioridad de uno sobre otro (opciones A y E) no interviene: en este contexto, los UID no tienen intrínsecamente más autoridad que los GID ni al revés. La afirmación de que el usuario es el único miembro del grupo (opción D) es incorrecta, porque la pertenencia a un grupo se define explícitamente en el archivo /etc/group (o en un servicio de directorio equivalente, como LDAP) y no se ve afectada por la coincidencia de UID y GID. Deshabilitar ambos por ambigüedad (opción B) tampoco es un comportamiento estándar del sistema operativo: el sistema simplemente funciona con el usuario y el grupo como entidades distintas.\n\nPor lo tanto, la independencia de los espacios de nombres de UID y GID garantiza que tanto el usuario como el grupo sigan disponibles y operativos aunque compartan el mismo identificador numérico. Esta independencia es un aspecto fundamental de la gestión de usuarios y grupos en Linux/Unix.\n\nLecturas recomendadas:\n\n• Permisos en Linux: https://www.linux.com/training-tutorials/understanding-linux-file-permissions/ (explica los fundamentos de los permisos de archivo usando UID y GID).\n• Archivo /etc/group: https://man7.org/linux/man-pages/man5/group.5.html (página de manual del archivo group, que muestra cómo se configura la pertenencia a los grupos).\n• Conceptos de UID y GID: busque «UID GID Linux» en cualquier buscador; encontrará numerosos artículos y foros sobre el tema."
  },
  {
    "id": 16,
    "question": "¿Cuál de las siguientes informaciones se almacena en /etc/shadow para cada usuario?",
    "options": {
      "A": "La marca de tiempo del último inicio de sesión del usuario.",
      "B": "Las claves SSH privadas del usuario.",
      "C": "La contraseña cifrada (hash) del usuario.",
      "D": "El identificador numérico del usuario (UID).",
      "E": "La ruta al directorio personal del usuario."
    },
    "answer": "C",
    "explanation": "La respuesta correcta es la C, el hash de la contraseña del usuario, porque la función principal de /etc/shadow es almacenar información de seguridad sensible relacionada con las cuentas de usuario, sobre todo los hashes de las contraseñas. A diferencia de /etc/passwd, que puede leer cualquier usuario, /etc/shadow solo puede leerlo root, lo que impide el acceso no autorizado a la información de las contraseñas.\n\nLa opción A es incorrecta: la marca de tiempo del último inicio de sesión no se guarda en /etc/shadow; de eso se encargan otras herramientas y archivos del sistema, como lastlog. La opción B es incorrecta porque las claves SSH suelen guardarse en el directorio .ssh dentro del directorio personal del usuario, no en /etc/shadow. La opción D es incorrecta porque el UID numérico se guarda en /etc/passwd, no en /etc/shadow. Del mismo modo, la opción E es incorrecta porque la ruta al directorio personal también se guarda en /etc/passwd, junto con el nombre de usuario, el UID, el GID (identificador de grupo), la información del usuario (campo GECOS) y su shell de inicio de sesión.\n\nEl hash de la contraseña en /etc/shadow permite al sistema autenticar a los usuarios sin guardar la contraseña en texto plano, lo que mejora notablemente la seguridad. Para generar estos hashes unidireccionales se usan distintos algoritmos, como SHA-512 o bcrypt. Esto significa que, aunque /etc/shadow se viera comprometido, obtener las contraseñas originales a partir de los hashes sería computacionalmente inviable. El archivo también contiene otra información relacionada con las contraseñas, como las políticas de caducidad de contraseñas y la fecha de expiración de la cuenta.\n\nPara más información sobre /etc/shadow, consulte:\n\n• Linux Documentation Project – Shadow Password HOWTO: https://tldp.org/HOWTO/Shadow-Password-HOWTO/\n• man shadow (en un sistema Linux): página de manual del formato del archivo shadow.\n• Documentación de Red Hat sobre gestión de usuarios: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/managing_users_and_groups/index (capítulos sobre los archivos de cuentas de usuario)"
  },
  {
    "id": 17,
    "question": "¿Cuál de los siguientes comandos muestra todos los temporizadores (timers) de systemd activos?",
    "options": {
      "A": "systemctl-timer show",
      "B": "timectl list",
      "C": "systemctl -t",
      "D": "systemctl list-timers",
      "E": "timeq"
    },
    "answer": "D",
    "explanation": "Nota: en el original la opción C aparece como systemctl \"t, probablemente un error de conversión de systemctl -t.\n\nLa respuesta correcta es la D, systemctl list-timers. Motivos:\n\nsystemd es el sistema de inicio y gestor de servicios adoptado por la mayoría de las distribuciones Linux. Los temporizadores de systemd son unidades que programan la ejecución de tareas en momentos o intervalos concretos, y funcionan como sustitutos de cron.\n\nsystemctl es la herramienta principal de línea de comandos para controlar systemd. Se usa para gestionar servicios, unidades y otros componentes de systemd.\n\nEl subcomando list-timers de systemctl está diseñado específicamente para mostrar una lista de todos los temporizadores activos de systemd, junto con su estado, la última vez que se activaron y cuándo está prevista su próxima ejecución. Así se obtiene una visión clara de las tareas programadas en systemd.\n\nPor qué las demás opciones son incorrectas:\n\n• A. systemctl-timer show: no es un subcomando ni una utilidad válida; no existe ningún comando systemctl-timer. Se puede usar systemctl show, pero requiere el nombre de una unidad de temporizador concreta para mostrar sus propiedades, no todos los temporizadores activos.\n• B. timectl list: timectl no es un comando estándar de systemd ni de gestión de temporizadores.\n• C. systemctl -t: no es un comando completo. La opción -t (--type) necesita como argumento un tipo de unidad (por ejemplo, systemctl -t timer) y, por sí sola, no muestra los temporizadores activos.\n• E. timeq: tampoco es un comando estándar para gestionar temporizadores de systemd.\n\nPor lo tanto, systemctl list-timers es el único de los comandos propuestos que muestra directamente todos los temporizadores activos de systemd. Aprovecha la funcionalidad integrada de systemd para programar y gestionar eventos temporizados y ofrece una vista centralizada de todas las unidades de temporizador configuradas. Saber usar systemctl list-timers es fundamental para que los administradores supervisen las tareas programadas y garanticen el buen funcionamiento del sistema.\n\nReferencias:\n\n• systemd.timer: https://www.freedesktop.org/software/systemd/man/latest/systemd.timer.html\n• systemctl: https://www.freedesktop.org/software/systemd/man/latest/systemctl.html"
  },
  {
    "id": 18,
    "question": "¿Cuáles de las siguientes tareas puede realizar el comando date? (Elija dos).",
    "options": {
      "A": "Establecer la fecha y la hora del sistema.",
      "B": "Establecer la fecha del sistema, pero no la hora.",
      "C": "Calcular el intervalo de tiempo entre dos fechas.",
      "D": "Mostrar un calendario de un mes o de un año.",
      "E": "Mostrar la hora en un formato concreto."
    },
    "answer": "AE",
    "explanation": "El comando date de Linux es una herramienta versátil para gestionar y mostrar la fecha y la hora. La opción A es correcta porque date permite establecer la fecha y la hora del sistema si se tienen los privilegios necesarios (normalmente, acceso de root o de administrador). Esto permite mantener exacto el reloj del sistema, algo fundamental para programar trabajos, registrar eventos y mantener la integridad de los datos en sistemas distribuidos.\n\nLa opción E también es correcta. date admite numerosas opciones de formato: con los especificadores de formato se puede indicar exactamente cómo mostrar la fecha y la hora. Por ejemplo, se puede mostrar la fecha en formato AAAA-MM-DD, mostrar el día de la semana o incluir información de la zona horaria. Esto es muy útil en scripts y automatizaciones donde hay que procesar fechas y horas en un formato concreto.\n\nLa opción B es incorrecta. Aunque date puede usarse para establecer la fecha, siempre trata la fecha y la hora en conjunto: no se puede modificar solo la fecha sin que la hora se vea afectada.\n\nLa opción C es incorrecta, ya que date no está diseñado para calcular directamente el intervalo entre dos fechas. Aunque con scripts complejos se podría aproximar ese cálculo, para estas tareas se suelen usar herramientas específicas (como datediff, que no es una utilidad estándar) o lenguajes de scripting.\n\nLa opción D es incorrecta porque date se centra en mostrar y establecer la fecha y la hora actuales. La utilidad estándar para mostrar un calendario en la terminal es cal.\n\nEn un entorno de nube, la sincronización correcta de la hora es esencial para muchos servicios. Por ejemplo, las bases de datos distribuidas, los sistemas de agregación de registros y las plataformas de orquestación de contenedores dependen de marcas de tiempo exactas para funcionar de forma coherente. Usar date (junto con NTP, Network Time Protocol) permite mantener sincronizados los sistemas de la infraestructura, lo que favorece la integridad de los datos y la fiabilidad del servicio.\n\nReferencia:\n\n• Utilidad date de GNU: https://www.gnu.org/software/coreutils/manual/html_node/date-invocation.html"
  },
  {
    "id": 19,
    "question": "RELLENE EL ESPACIO EN BLANCO: ¿Qué archivo, si existe, debe contener a todos los usuarios que tienen permitido usar el sistema de programación de tareas cron? (Especifique el nombre completo del archivo, incluida la ruta).",
    "options": {},
    "answer": "/etc/cron.allow",
    "explanation": "Corrección: el original da como respuesta «crontab», lo cual es incorrecto. El archivo que, si existe, enumera a los usuarios autorizados a usar cron es /etc/cron.allow (y /etc/cron.deny enumera a los usuarios a los que se les niega)."
  },
  {
    "id": 20,
    "question": "¿Qué se puede especificar con useradd? (Elija dos).",
    "options": {
      "A": "Los comandos que el usuario puede ejecutar con sudo.",
      "B": "La ruta absoluta al directorio personal del usuario.",
      "C": "Las impresoras disponibles para el nuevo usuario.",
      "D": "Las claves SSH usadas para iniciar sesión en la nueva cuenta.",
      "E": "El identificador numérico (UID) del usuario."
    },
    "answer": "BE",
    "explanation": "El comando useradd de Linux es una utilidad de línea de comandos para crear cuentas de usuario nuevas. Permite a los administradores especificar varios atributos del nuevo usuario.\n\nLa opción B es correcta porque useradd permite establecer la ruta absoluta al directorio personal del usuario mediante la opción -d seguida de la ruta deseada. Así el usuario dispone de un lugar designado para guardar sus archivos y configuraciones al iniciar sesión.\n\nLa opción E también es correcta, ya que useradd permite especificar el UID numérico del nuevo usuario con la opción -u seguida del UID deseado. Esto es fundamental para identificar al usuario y gestionar sus permisos en el sistema.\n\nLa opción A es incorrecta porque los privilegios de sudo se gestionan normalmente en el archivo sudoers o con herramientas como visudo, no con useradd.\n\nLa opción C es incorrecta porque la disponibilidad de impresoras no se gestiona al crear el usuario; la configuración de impresoras es un ajuste independiente a nivel de sistema.\n\nLa opción D es incorrecta porque useradd no gestiona directamente las claves SSH. Esto se hace por separado, normalmente con herramientas como ssh-keygen y colocando la clave pública en el archivo ~/.ssh/authorized_keys del usuario una vez creada la cuenta.\n\nEn resumen, useradd se ocupa principalmente de crear la cuenta de usuario y establecer atributos básicos como la ruta del directorio personal y el UID, mientras que otros aspectos, como los privilegios de sudo, el acceso a impresoras y la gestión de claves SSH, se resuelven con otros mecanismos de administración del sistema.\n\nReferencias: man useradd o recursos en línea como:\n\n• https://man7.org/linux/man-pages/man8/useradd.8.html\n• https://www.geeksforgeeks.org/useradd-command-in-linux-with-examples/"
  },
  {
    "id": 21,
    "question": "¿Qué es cierto sobre el archivo /etc/localtime?",
    "options": {
      "A": "Es un archivo de texto plano que contiene una cadena como Europe/Berlin.",
      "B": "Lo crea y mantiene el servicio NTP según la ubicación de la dirección IP del sistema.",
      "C": "Es un enlace simbólico a /sys/device/clock/ltime y siempre contiene la hora local actual.",
      "D": "Después de modificar este archivo hay que ejecutar newtzconfig para que los cambios surtan efecto.",
      "E": "Es un enlace simbólico a, o una copia de, un archivo de información de zona horaria como /usr/share/zoneinfo/Europe/Berlin."
    },
    "answer": "E",
    "explanation": "La respuesta correcta es la E, porque /etc/localtime configura la zona horaria del sistema. Para ello, es un enlace simbólico o una copia directa de un archivo del directorio /usr/share/zoneinfo/. Este directorio contiene los archivos de datos de zonas horarias de la base de datos tz de la IANA (Internet Assigned Numbers Authority). Estos archivos contienen las reglas para determinar la hora local a partir de UTC en una región geográfica concreta.\n\nLa opción A es incorrecta porque, aunque /etc/timezone puede contener una cadena como Europe/Berlin (sobre todo en sistemas basados en Debian), /etc/localtime es un archivo binario o un enlace a uno. Contiene los datos reales de la zona horaria, no una representación en texto plano.\n\nLa opción B es incorrecta: el servicio NTP sincroniza el reloj del sistema con servidores de hora, pero no gestiona la configuración de la zona horaria en /etc/localtime. NTP garantiza que el sistema tenga la hora correcta, mientras que /etc/localtime define cómo se interpreta esa hora en una región concreta.\n\nLa opción C es incorrecta porque /etc/localtime no tiene relación con /sys/device/clock/ltime, ruta que en general no existe. Además, /etc/localtime no contiene la hora local actual, sino las reglas para calcularla.\n\nLa opción D es incorrecta porque newtzconfig no es una herramienta estándar. Los sistemas modernos suelen usar timedatectl o herramientas similares y, a menudo, basta con reiniciar los servicios afectados (o el sistema) tras actualizar /etc/localtime para que se apliquen los cambios. systemd, por ejemplo, vigila /etc/localtime y actualiza automáticamente la información de zona horaria en los procesos correspondientes.\n\nEn entornos de nube, configurar correctamente la zona horaria es fundamental para que los registros, la programación de tareas y el comportamiento de las aplicaciones sean correctos en sistemas distribuidos. Si /etc/localtime no está bien configurado, las aplicaciones pueden interpretar mal las marcas de tiempo, lo que provoca incoherencias en los datos y problemas operativos. Una buena práctica es usar herramientas de gestión de configuración y mantener una zona horaria coherente en todas las instancias.\n\nReferencias:\n\n• Base de datos tz: https://www.iana.org/time-zones\n• timedatectl: man timedatectl (en un sistema Linux con systemd)"
  },
  {
    "id": 22,
    "question": "¿Cuál de las siguientes afirmaciones es cierta respecto a las unidades de temporizador (timer) de systemd?",
    "options": {
      "A": "Las unidades de temporizador solo pueden definirse dentro del archivo de una unidad de servicio.",
      "B": "El comando que ejecuta el temporizador se especifica en la sección [Cmd] de la unidad de temporizador.",
      "C": "Un servicio del sistema dedicado, systemd-cron, se encarga de ejecutar las unidades de temporizador.",
      "D": "Las unidades de temporizador solo existen en el ámbito del sistema y no están disponibles para los usuarios.",
      "E": "Cada unidad de temporizador de systemd controla una unidad de servicio de systemd concreta."
    },
    "answer": "E",
    "explanation": "La respuesta correcta es la E, porque las unidades de temporizador de systemd están diseñadas para activar otras unidades de systemd, normalmente unidades de servicio. Esa es su función principal: el archivo de una unidad de temporizador indica cuándo y con qué frecuencia debe iniciarse otra unidad (normalmente un servicio).\n\nLa opción A es incorrecta porque las unidades de temporizador tienen sus propios archivos (con extensión .timer) y no se definen dentro del archivo de una unidad de servicio, sino que se vinculan a ella.\n\nLa opción B es incorrecta. El comando que se ejecuta no se especifica directamente en la unidad de temporizador. Esta indica qué unidad (normalmente un servicio) debe activarse cuando el temporizador se dispare, y el comando se define dentro de esa unidad de servicio.\n\nLa opción C es incorrecta. systemd-cron es un servicio de compatibilidad que imita parte de la funcionalidad de cron, no el encargado principal de los temporizadores de systemd. Los temporizadores los gestiona systemd de forma nativa mediante sus mecanismos internos de gestión de eventos.\n\nLa opción D es incorrecta. Las unidades de temporizador pueden existir tanto en el ámbito del sistema (/usr/lib/systemd/system/ o /etc/systemd/system/) como en el del usuario (~/.config/systemd/user/). Se pueden crear temporizadores de usuario para ejecutar tareas específicas de un usuario.\n\nLa relación entre el temporizador y el servicio se establece mediante directivas del archivo .timer como OnCalendar=, que define los criterios de programación, y Unit=, que define la unidad de servicio que se activará (si no se indica, se usa el servicio con el mismo nombre que el temporizador). En esencia, el temporizador «despierta» al servicio, y el servicio realiza el trabajo definido en su archivo .service.\n\nEsta separación aporta más modularidad y facilita la gestión de las tareas programadas. Los temporizadores de systemd ofrecen ventajas importantes frente al cron tradicional, como la activación por eventos, la gestión de dependencias y el registro en el journal.\n\nPara profundizar, consulte la documentación oficial de systemd:\n\n• systemd.timer: https://www.freedesktop.org/software/systemd/man/systemd.timer.html\n• systemd.service: https://www.freedesktop.org/software/systemd/man/systemd.service.html"
  },
  {
    "id": 23,
    "question": "¿Cuáles de los siguientes campos están disponibles en el formato estándar tanto del archivo global /etc/crontab como de los archivos crontab de cada usuario? (Elija dos).",
    "options": {
      "A": "Año",
      "B": "Minuto",
      "C": "Nombre de usuario",
      "D": "ID de grupo efectivo",
      "E": "Comando"
    },
    "answer": "BE",
    "explanation": "Las respuestas correctas son B, Minuto, y E, Comando. Motivos:\n\nTanto /etc/crontab como los archivos crontab de usuario definen tareas programadas. La estructura básica de una entrada de crontab consta de las especificaciones de tiempo (minuto, hora, día del mes, mes y día de la semana) seguidas del comando que se va a ejecutar. Por eso, el campo de minuto (cuándo se ejecuta el comando) y el campo de comando (qué acción se realiza) están presentes en ambos tipos de archivo.\n\nLa opción A, Año, no es un campo estándar ni en el crontab global ni en los de usuario. Aunque algunas implementaciones de cron admitan especificar el año, no forma parte del estándar POSIX y, por tanto, no está garantizado.\n\nLa opción C, Nombre de usuario, está presente en /etc/crontab, pero no en los crontab de usuario. En /etc/crontab, el campo de usuario indica con qué cuenta se ejecuta el comando. Los crontab de usuario, creados con crontab -e, ejecutan los comandos con la cuenta del usuario que invocó crontab -e, así que el usuario está implícito y no hace falta indicarlo en cada entrada.\n\nLa opción D, ID de grupo efectivo, no es un campo estándar ni en /etc/crontab ni en los crontab de usuario. El demonio cron suele ejecutar los comandos con el ID de grupo predeterminado del usuario correspondiente, y no existe un campo estándar para cambiarlo desde la propia entrada. Aunque alguna implementación avanzada de cron pudiera ofrecerlo mediante parches o extensiones, no es lo habitual.\n\nEn resumen, Minuto y Comando son los componentes básicos obligatorios en ambos tipos de archivo crontab. El nombre de usuario solo existe en /etc/crontab. El año y el ID de grupo efectivo rara vez se admiten y, desde luego, no forman parte del estándar.\n\nLecturas recomendadas:\n\n• Formato de crontab: man 5 crontab (ejecútelo en la terminal para ver la página de manual).\n• Cron: https://en.wikipedia.org/wiki/Cron\n• Sintaxis de cron: hay muchos tutoriales en línea; busque los que se centren en la sintaxis estándar de cron."
  },
  {
    "id": 24,
    "question": "¿Cuál de los siguientes comandos debe ejecutarse al iniciar una shell de inicio de sesión para cambiar a portugués (pt) el idioma de los mensajes de un programa internacionalizado?",
    "options": {
      "A": "export LANGUAGE=pt",
      "B": "export LC_MESSAGES=pt",
      "C": "export UI_MESSAGES=pt",
      "D": "export MESSAGE=pt",
      "E": "export ALL_MESSAGES=pt"
    },
    "answer": "B",
    "explanation": "La respuesta correcta es la B, export LC_MESSAGES=pt, porque LC_MESSAGES es la variable de entorno designada específicamente para controlar el idioma de los mensajes e indicaciones de los programas internacionalizados. Al iniciarse una shell de inicio de sesión, se leen las variables de entorno que configuran la sesión del usuario. Establecer LC_MESSAGES en pt indica a los programas con soporte de internacionalización (i18n) que usen las traducciones al portugués en su salida.\n\nUI_MESSAGES, MESSAGE y ALL_MESSAGES no son variables de entorno estándar reconocidas para este fin. Las variables LC_ (como LC_CTYPE, LC_COLLATE, LC_TIME, LC_MONETARY, LC_NUMERIC y LC_MESSAGES) permiten controlar por separado distintos aspectos de la localización, y LC_MESSAGES es la que se ocupa directamente del idioma de los textos. LANGUAGE es una extensión de GNU gettext que admite una lista de idiomas separados por dos puntos para establecer preferencias, pero no forma parte del estándar POSIX de locales. Establecer LC_ALL sobrescribiría todas las demás variables LC_, lo cual es más drástico que actuar solo sobre los mensajes. Elegir LC_MESSAGES afecta únicamente a la funcionalidad deseada (la traducción de mensajes) sin efectos secundarios en otros ajustes de la configuración regional. Por lo tanto, export LC_MESSAGES=pt es la forma más precisa y correcta de hacerlo.\n\nCorrección: el original afirma que LC_MESSAGES tiene prioridad sobre LANGUAGE. En realidad, en GNU gettext LANGUAGE tiene prioridad sobre LC_MESSAGES (siempre que la configuración regional no sea C), pero como no es una variable POSIX estándar, la respuesta esperada en el examen sigue siendo la B.\n\nLecturas recomendadas:\n\n• Documentación de GNU gettext: https://www.gnu.org/software/gettext/manual/html_node/The-Locale-Categories.html\n• Locale – ArchWiki: https://wiki.archlinux.org/title/locale"
  },
  {
    "id": 25,
    "question": "¿Cuál de los siguientes archivos asigna a un usuario su grupo principal?",
    "options": {
      "A": "/etc/pgroup",
      "B": "/etc/shadow",
      "C": "/etc/passwd",
      "D": "/etc/group",
      "E": "/etc/gshadow"
    },
    "answer": "C",
    "explanation": "La respuesta correcta es /etc/passwd, porque este archivo es el repositorio central de la información básica de las cuentas de usuario en Linux y en sistemas tipo Unix. Contiene una línea por usuario, con los campos separados por dos puntos. Uno de esos campos es el UID del usuario y otro es el GID de su grupo principal. Ese GID es un identificador numérico que corresponde a una entrada del archivo /etc/group, con lo que el usuario queda vinculado a su grupo principal.\n\nEl archivo /etc/shadow guarda las contraseñas cifradas de los usuarios y la información relacionada con ellas; no contiene datos de asignación de grupos. El archivo /etc/group enumera los nombres de los grupos y sus miembros, pero no asigna grupos principales a los usuarios, sino que define las características y la pertenencia de los grupos. El archivo /etc/gshadow contiene las contraseñas cifradas de los grupos y se usa para su administración. /etc/pgroup no es un archivo estándar del sistema.\n\nPor lo tanto, /etc/passwd vincula directamente la cuenta de un usuario con su grupo principal al indicar el GID, y es el archivo que asigna a un usuario su grupo principal. Mientras que /etc/group define el grupo y sus miembros, /etc/passwd indica cuál es el grupo principal de cada usuario.\n\nPara más información sobre la gestión de usuarios en Linux, consulte:\n\n1. Linux Documentation Project: https://tldp.org/\n2. man 5 passwd (disponible en cualquier sistema Linux)\n3. man group (disponible en cualquier sistema Linux)\n4. Documentación de Red Hat sobre gestión de usuarios y grupos: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/"
  },
  {
    "id": 26,
    "question": "¿Cuál de los siguientes pasos impide que un usuario obtenga una sesión de inicio interactiva?",
    "options": {
      "A": "Establecer el UID del usuario en 0.",
      "B": "Ejecutar el comando chsh -s /bin/false con el nombre del usuario.",
      "C": "Quitar al usuario del grupo staff.",
      "D": "Añadir al usuario a /etc/noaccess.",
      "E": "Crear un archivo .nologin en el directorio personal del usuario."
    },
    "answer": "B",
    "explanation": "La respuesta correcta es la B. Ejecutar chsh -s /bin/false <usuario> impide que el usuario obtenga una sesión de inicio interactiva, porque chsh modifica la shell de inicio de sesión del usuario, que es el programa que se ejecuta después de que este se autentica correctamente.\n\nEstablecer la shell del usuario en /bin/false (u otras como /sbin/nologin) deshabilita en la práctica los inicios de sesión interactivos. Cuando el usuario intenta iniciar sesión, el sistema intenta arrancar la shell indicada, pero /bin/false termina inmediatamente, por lo que el usuario no obtiene un prompt de comandos ni, por tanto, una sesión interactiva.\n\nLa opción A es incorrecta porque establecer el UID de un usuario en 0 le otorga privilegios de root, justo lo contrario de impedirle el acceso. Las opciones C y D son incorrectas porque no impiden directamente el inicio de sesión. Quitar a un usuario del grupo staff puede restringir su acceso a ciertos recursos, pero no bloquea el inicio de sesión. Del mismo modo, /etc/noaccess (si existe; no es un archivo estándar en las distribuciones Linux) suele estar relacionado con el control de acceso a recursos del sistema o a servicios de red, no con el inicio de sesión.\n\nLa opción E (crear un archivo .nologin) no es un mecanismo estándar para bloquear a un usuario concreto: en algunas configuraciones, como mucho, muestra un mensaje al intentar iniciar sesión, pero no impide la sesión de forma fiable, a diferencia de cambiar la shell con chsh. (El mecanismo estándar es el archivo /etc/nologin, que bloquea el acceso a todos los usuarios salvo a root). Cambiar la shell es un método más directo y fiable.\n\nEn resumen, chsh está diseñado específicamente para gestionar la shell de inicio de sesión de los usuarios. Al establecer una shell no interactiva como /bin/false, se impide explícitamente que el usuario inicie una shell y, por tanto, que obtenga una sesión interactiva normal.\n\nReferencias:\n\n• Página de manual de chsh: man chsh (en un sistema Linux)\n• Formato del archivo /etc/passwd: man 5 passwd (en un sistema Linux)\n• /bin/false: puede consultarse man false; también hay abundante información sobre su uso en foros y sitios de documentación."
  },
  {
    "id": 27,
    "question": "RELLENE EL ESPACIO EN BLANCO: ¿Qué comando incluido en systemd permite seleccionar mensajes del journal de systemd según criterios como la hora o el nombre de la unidad? (Especifique solo el comando, sin ruta ni parámetros).",
    "options": {},
    "answer": "journalctl",
    "explanation": ""
  },
  {
    "id": 28,
    "question": "¿Cuáles de las siguientes afirmaciones sobre systemd-journald son ciertas? (Elija tres).",
    "options": {
      "A": "Es incompatible con syslog y no puede instalarse en un sistema que use syslog normal.",
      "B": "Solo procesa mensajes de systemd y no de ninguna otra herramienta.",
      "C": "Puede pasar los mensajes de registro a syslog para su posterior procesamiento.",
      "D": "Guarda metadatos como _UID o _PID para cada mensaje.",
      "E": "Admite facilidades (facilities) de syslog como kern, user y auth."
    },
    "answer": "CDE",
    "explanation": "Veamos por qué las opciones C, D y E son correctas y A y B no lo son en relación con systemd-journald.\n\n• C. Puede pasar los mensajes de registro a syslog para su posterior procesamiento: systemd-journald no sustituye por completo a syslog. Puede configurarse para reenviar los mensajes a un demonio syslog tradicional, lo que permite integrarlo con la infraestructura de registro existente y con sistemas de gestión centralizada de registros basados en syslog. El archivo /etc/systemd/journald.conf contiene la configuración relativa al reenvío a syslog (ForwardToSyslog=). Esta interoperabilidad es clave para una transición gradual al registro basado en systemd y para mantener la compatibilidad con sistemas antiguos o soluciones de registro centralizado.\n• D. Guarda metadatos como _UID o _PID para cada mensaje: una de las principales ventajas de systemd-journald es que almacena los registros de forma estructurada. Esto incluye no solo el mensaje, sino también metadatos como el ID de usuario (_UID), el ID de proceso (_PID), la ruta del ejecutable y más. Estos metadatos permiten filtrar y analizar los registros de forma más eficiente y precisa, lo que mejora la resolución de problemas y las auditorías de seguridad frente al enfoque no estructurado del syslog tradicional.\n• E. Admite facilidades de syslog como kern, user y auth: systemd-journald mantiene la compatibilidad con las facilidades (kern, user, auth, etc.) y las prioridades de syslog. Aunque usa su propia organización interna y sus metadatos, sigue entendiendo y procesando estos conceptos de syslog, de modo que los mensajes de distintas fuentes pueden clasificarse y tratarse adecuadamente. Esta compatibilidad es fundamental para dar soporte a la gran variedad de aplicaciones y servicios que siguen registrando al estilo syslog.\n\nPor qué las opciones A y B son incorrectas:\n\n• A. Es incompatible con syslog y no puede instalarse en un sistema que use syslog normal: es incorrecto, como se explica en la opción C. systemd-journald está diseñado para coexistir con syslog.\n• B. Solo procesa mensajes de systemd y no de ninguna otra herramienta: también es incorrecto. Aunque systemd-journald está integrado con los servicios de systemd, también recoge registros de otras aplicaciones y herramientas que escriben en la salida estándar o usan la API sd-journal. Incluso puede recibir mensajes syslog.\n\nPor lo tanto, las únicas afirmaciones correctas son C, D y E, que reflejan las funciones de systemd-journald en cuanto a compatibilidad con syslog, gestión de metadatos y soporte de facilidades.\n\nReferencias:\n\n• Documentación de systemd-journald: https://www.freedesktop.org/software/systemd/man/systemd-journald.service.html\n• Documentación de journald.conf: https://www.freedesktop.org/software/systemd/man/journald.conf.html"
  },
  {
    "id": 29,
    "question": "RELLENE EL ESPACIO EN BLANCO: ¿Qué comando debe ejecutarse después de añadir un nuevo alias de correo a la configuración para que el cambio surta efecto? (Especifique el comando sin ruta, pero con todos los parámetros necesarios).",
    "options": {},
    "answer": "newaliases",
    "explanation": ""
  },
  {
    "id": 30,
    "question": "¿Qué opción del archivo de configuración de chrony cambia el intervalo inicial de sondeo a un servidor NTP para acelerar la sincronización inicial?",
    "options": {
      "A": "iburst",
      "B": "quickstart",
      "C": "fast",
      "D": "fsync",
      "E": "flood"
    },
    "answer": "A",
    "explanation": "La respuesta correcta es la A, iburst. La opción iburst del archivo de configuración de chrony indica a chronyd que, al arrancar, envíe una ráfaga de consultas iniciales al servidor NTP. Esto reduce drásticamente el tiempo que tarda chronyd en lograr la sincronización inicial, sobre todo cuando la desviación inicial es grande. Sin iburst, chronyd empieza con un intervalo de sondeo mucho más largo y puede tardar bastante en converger a la hora correcta.\n\nLas demás opciones son incorrectas: quickstart, fast, fsync y flood no son opciones de configuración válidas de chrony relacionadas con la sincronización inicial. fsync, aunque existe en otros contextos, no tiene nada que ver con la sincronización inicial de la hora.\n\nLa opción iburst es fundamental en entornos donde se necesita una hora exacta poco después del arranque, algo muy importante en la nube, donde las instancias se crean y destruyen con frecuencia. Que las instancias se sincronicen rápidamente por NTP al arrancar garantiza la coherencia de los datos, marcas de tiempo correctas en los registros y el buen funcionamiento de las aplicaciones sensibles al tiempo. La sincronización correcta de la hora también es esencial para los protocolos de seguridad y los mecanismos de autenticación. Usar iburst ayuda a agilizar los despliegues y reduce el tiempo que las instancias necesitan para estar operativas con la hora correcta.\n\nPara más información, consulte la documentación oficial de chrony:\n\n• chrony.conf: https://chrony-project.org/doc/4.2/chrony.conf.html"
  },
  {
    "id": 31,
    "question": "¿Cuál de los siguientes comandos se usa para rotar, comprimir y enviar por correo los registros del sistema?",
    "options": {
      "A": "logrotate",
      "B": "striplog",
      "C": "syslogd --rotate",
      "D": "rotatelog",
      "E": "logger"
    },
    "answer": "A",
    "explanation": "La respuesta correcta es la A, logrotate. Motivos:\n\nlogrotate es una utilidad de Linux muy utilizada, diseñada específicamente para gestionar los registros del sistema. Su función principal es automatizar la rotación de los archivos de registro: renombra el archivo existente (por ejemplo, de syslog a syslog.0), a menudo lo comprime (por ejemplo, a syslog.0.gz) y crea un archivo nuevo y vacío con el nombre original. Así se evita que los registros crezcan indefinidamente y ocupen demasiado espacio en disco.\n\nlogrotate se configura mediante archivos de configuración (normalmente /etc/logrotate.conf y el directorio /etc/logrotate.d/). Estos archivos indican con qué frecuencia rotar los registros (diaria, semanal, mensual), cuántos archivos rotados conservar, si comprimirlos y otras acciones que realizar antes o después de la rotación, como reiniciar servicios o enviar por correo los registros rotados.\n\nAunque opciones como el envío por correo se configuran dentro de logrotate, no son una función aislada de línea de comandos: el comando gestiona todo el proceso de rotación de registros.\n\nLas demás opciones son incorrectas porque no sirven principalmente para rotar, comprimir y enviar por correo los registros de forma estructurada y automatizada. striplog no es una utilidad estándar de Linux. syslogd --rotate no es una sintaxis válida, y syslogd es el demonio de registro del sistema, no un rotador. rotatelog puede existir como script en algún contexto, pero no es la utilidad estándar habitual. logger se usa para escribir entradas en el registro del sistema, no para gestionar su rotación.\n\nPor lo tanto, logrotate es la mejor respuesta, ya que se ocupa directamente de gestionar los archivos de registro rotándolos, comprimiéndolos y, opcionalmente, enviándolos por correo. Es fundamental para mantener la estabilidad del sistema, optimizar el uso del disco y facilitar el análisis de registros para la resolución de problemas y la supervisión de seguridad. Su enfoque basado en la configuración lo hace escalable y adaptable a requisitos de registro muy diversos.\n\nPara profundizar, consulte:\n\n• Página de manual de logrotate: man logrotate (en un sistema Linux)\n• Documentación de Red Hat sobre logrotate: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/system_administrators_guide/s1-logrotate\n• Documentación de Ubuntu sobre logrotate: https://help.ubuntu.com/community/LogRotate"
  },
  {
    "id": 32,
    "question": "¿Por qué es importante configurar correctamente la zona horaria de un sistema?",
    "options": {
      "A": "Porque la zona horaria se incluye en el cálculo de las sumas de comprobación y cambiarla invalida las existentes.",
      "B": "Porque la zona horaria se guarda como parte de la fecha de modificación de los archivos y no puede cambiarse después de crear el archivo.",
      "C": "Porque las variables de entorno LANG y LC_MESSAGES se establecen por defecto según la zona horaria.",
      "D": "Porque NTP elige servidores cercanos según la zona horaria configurada.",
      "E": "Porque la conversión de las marcas de tiempo Unix a la hora local depende de la configuración de la zona horaria."
    },
    "answer": "E",
    "explanation": "La respuesta correcta, la E, refleja la importancia de una zona horaria bien configurada por su efecto en cómo se interpretan las marcas de tiempo Unix. Estas marcas son la base de la medición del tiempo en Linux y en muchos otros sistemas operativos: representan el número de segundos transcurridos desde el inicio de la época Unix (1 de enero de 1970 a las 00:00:00 UTC, Tiempo Universal Coordinado). Se almacenan internamente y son independientes de la zona horaria.\n\nLa clave es que, al mostrar o interpretar una marca de tiempo Unix, el sistema necesita saber en qué zona horaria se encuentra el usuario. La marca representa un instante relativo a UTC, y normalmente queremos verlo en nuestra hora local; la configuración de la zona horaria aporta ese desfase. Sin una zona horaria correcta, la marca de tiempo se convertiría mal a la hora local, y se mostrarían de forma incorrecta las fechas de modificación de archivos, los eventos programados, las entradas de registro, etc. Cualquier aplicación o proceso que use formatos de hora legibles se vería afectado: por ejemplo, la salida de date, las tareas de cron y las marcas de tiempo de los registros estarían desfasadas, lo que podría causar problemas operativos importantes.\n\nEs importante tener en cuenta que la marca de tiempo almacenada está siempre en UTC, lo que permite ajustar la zona horaria cuando haga falta sin problemas. El sistema operativo no modifica la fecha de modificación de un archivo al cambiar la zona horaria; simplemente aplica el desfase al mostrar o interpretar la hora. NTP tampoco usa la zona horaria configurada para elegir servidores: trabaja siempre en UTC.\n\nLa afirmación sobre las «sumas de comprobación» es totalmente incorrecta y no tiene relación con la pregunta. Por eso la respuesta correcta es la E.\n\nPara profundizar, consulte:\n\n• Documentación del comando date de GNU: https://www.gnu.org/software/coreutils/manual/html_node/date-invocation.html (explica cómo influye la zona horaria en la salida de date).\n• Artículo de Wikipedia sobre el tiempo Unix: https://en.wikipedia.org/wiki/Unix_time (explicación detallada de las marcas de tiempo Unix y su importancia).\n• Documentación de zonas horarias: examine los archivos de /usr/share/zoneinfo en un sistema Linux para entender cómo se almacenan y usan los datos de zona horaria."
  },
  {
    "id": 33,
    "question": "RELLENE EL ESPACIO EN BLANCO: ¿Qué comando, disponible en todos los MTA compatibles con sendmail, se usa para listar el contenido de la cola de correo del MTA? (Especifique solo el comando, sin ruta ni parámetros).",
    "options": {},
    "answer": "mailq",
    "explanation": ""
  },
  {
    "id": 34,
    "question": "RELLENE EL ESPACIO EN BLANCO: ¿Cuál es el directorio de nivel superior que contiene los archivos de configuración de CUPS? (Especifique la ruta completa del directorio).",
    "options": {},
    "answer": "/etc/cups/",
    "explanation": "Nota: en el original la respuesta aparece como «/etc/cups/ cups-files.conf». La respuesta es el directorio /etc/cups/; cups-files.conf es solo uno de los archivos que contiene (junto con cupsd.conf, printers.conf, etc.)."
  },
  {
    "id": 35,
    "question": "¿Cuál de los siguientes comandos lista todos los trabajos de impresión en cola?",
    "options": {
      "A": "lpd",
      "B": "lpr",
      "C": "lp",
      "D": "lsq",
      "E": "lpq"
    },
    "answer": "E",
    "explanation": "El comando correcto para listar los trabajos de impresión en cola en Linux, y el relevante para la certificación LPI de nivel 1, es lpq. Veamos por qué las demás opciones son incorrectas y por qué lpq es la adecuada.\n\n• lpd es el demonio de impresión de línea (line printer daemon), es decir, el propio servicio de impresión. Gestiona la cola de impresión y se encarga del proceso de impresión, pero no lista directamente los trabajos en cola para el usuario.\n• lpr es el comando que se usa para enviar un trabajo a la cola de impresión. Coloca archivos en la cola, pero no muestra su contenido.\n• lp (comando del sistema de impresión System V) se usa para enviar trabajos de impresión y modificarlos. Aunque está relacionado con la impresión, su función principal no es listar los trabajos en cola. En algunos sistemas puede mostrar el estado de los trabajos, pero sus funciones son variadas y lpq está diseñado expresamente para listar los trabajos.\n• lsq no es un comando estándar de Linux para gestionar colas de impresión.\n• lpq (line printer queue) muestra específicamente el contenido de la cola de impresión: la lista de trabajos pendientes, sus identificadores, los usuarios que los enviaron y los nombres de archivo. Es el comando más directo para lograr el objetivo planteado, en línea con el uso habitual de la gestión de colas de impresión en Linux.\n\nEn resumen, lpq es el comando especializado en listar los trabajos de impresión en cola, y por eso es la respuesta correcta. Los demás comandos tienen otras funciones relacionadas con la impresión, pero no la de listar la cola.\n\nPara profundizar, consulte las páginas de manual:\n\n• man lpq (lista la cola de impresión)\n• man lpr (envía un trabajo de impresión)\n• man lp (impresión System V)"
  },
  {
    "id": 36,
    "question": "¿Cuál de las siguientes entradas de /etc/syslog.conf escribe todos los eventos relacionados con el correo en el archivo /var/log/maillog y envía todos los eventos críticos al servidor remoto logger.example.com?",
    "options": {
      "A": "mail.* /var/log/maillog — mail,crit @logger.example.org",
      "B": "mail.* /var/log/maillog — mail.crit syslog://logger.example.org",
      "C": "mail /var/log/maillog — mail.crit @logger.example.org",
      "D": "mail.* /var/log/maillog — mail.crit @logger.example.org",
      "E": "mail * /var/log/maillog — mail crit @logger.example.org"
    },
    "answer": "D",
    "explanation": "Nota: cada opción corresponde a dos líneas del archivo (separadas aquí con «—»). Además, el enunciado original dice logger.example.com mientras que las opciones dicen logger.example.org; es una incoherencia del original que no afecta a la respuesta.\n\nLa respuesta correcta es la D, mail.* /var/log/maillog y mail.crit @logger.example.org, porque refleja correctamente la sintaxis y el funcionamiento de /etc/syslog.conf para dirigir los mensajes de registro. Desglose:\n\n• mail.: indica que deben procesarse todos los mensajes de la facilidad «mail». El asterisco (`) actúa como comodín e incluye todos los niveles de gravedad de esa facilidad.\n• /var/log/maillog: indica el archivo local de destino donde se escribirán todos los mensajes de la facilidad mail (sea cual sea su gravedad).\n• mail.crit: indica que deben tratarse los mensajes de la facilidad «mail» con nivel de gravedad «critical» (o superior).\n• @logger.example.org: indica al sistema que reenvíe los mensajes mail.crit al servidor syslog remoto con ese nombre de host. El símbolo @ indica el envío por UDP a un servidor syslog remoto.\n\nPor qué fallan las demás opciones:\n\n• A: la facilidad y la prioridad se separan con un punto (por ejemplo, mail.crit), no con una coma. En syslog.conf la coma sirve para enumerar varias facilidades con la misma prioridad (por ejemplo, mail,news.crit), por lo que mail,crit no es válido.\n• B: syslog://logger.example.org no es una sintaxis válida en el syslog.conf clásico; el destino remoto se indica con @.\n• C: la primera parte debería ser mail.*, para indicar que TODOS los eventos de correo se escriben en /var/log/maillog.\n• E: en mail crit debe haber un punto entre la facilidad y la prioridad, es decir, mail.crit (y lo mismo en mail *).\n\nEn esencia, la opción elegida dirige todos los registros de correo a un archivo local y, a la vez, envía los registros críticos de correo a un servidor remoto, respetando la sintaxis tradicional de syslog. Este mecanismo es la base del registro centralizado, que permite a los administradores supervisar los eventos críticos en un lugar dedicado. Las demás opciones tienen una sintaxis incorrecta.\n\nReferencias para profundizar:\n\n1. Página de manual de syslog.conf (man syslog.conf): la fuente más fiable sobre la sintaxis y las opciones de syslog.conf`, disponible en sistemas Linux/Unix.\n2. Documentación de rsyslog: aunque rsyslog es una implementación moderna de syslog, entender sus principios de configuración ayuda a comprender la evolución de syslog. https://www.rsyslog.com/doc/\n3. Documentación de syslog-ng: por el mismo motivo. https://www.syslog-ng.com/documents/"
  },
  {
    "id": 37,
    "question": "RELLENE EL ESPACIO EN BLANCO: ¿Qué opción del archivo /etc/ntp.conf especifica una fuente NTP externa a la que consultar la hora? (Especifique solo la opción, sin valores ni parámetros).",
    "options": {},
    "answer": "server",
    "explanation": ""
  },
  {
    "id": 38,
    "question": "¿Cuál de los siguientes protocolos está relacionado con el término open relay (relé abierto)?",
    "options": {
      "A": "SMTP",
      "B": "POP3",
      "C": "NTP",
      "D": "IMAP",
      "E": "LDAP"
    },
    "answer": "A",
    "explanation": "La respuesta correcta es la A, SMTP (Simple Mail Transfer Protocol).\n\nSMTP es el protocolo estándar para enviar correo electrónico a través de Internet. Un open relay es un servidor SMTP que permite que cualquiera en Internet envíe correo a través de él, esté o no autorizado. Es una vulnerabilidad de seguridad, porque los spammers pueden aprovechar los relés abiertos para enviar correo no deseado (spam) sin que se les pueda rastrear hasta sus propios servidores. Al retransmitir a través de un tercero (el relé abierto), ocultan su origen y distribuyen spam a mucha mayor escala. Los servidores SMTP modernos suelen configurarse para impedir el relé abierto, exigiendo autenticación o limitando el relé a direcciones IP o redes concretas. Esto es fundamental para mantener la integridad del correo electrónico y frenar la propagación del spam.\n\nPOP3 (Post Office Protocol versión 3) e IMAP (Internet Message Access Protocol) se usan para descargar el correo de un servidor, no para enviarlo. NTP (Network Time Protocol) se usa para sincronizar los relojes entre equipos. LDAP (Lightweight Directory Access Protocol) es un protocolo para acceder a servicios de información de directorio distribuidos y mantenerlos. Ninguno de ellos tiene que ver con permitir que usuarios no autorizados envíen correo. Como el relé abierto abusa de la capacidad de envío del correo, el protocolo directamente relacionado es SMTP.\n\nLecturas recomendadas:\n\n• RFC 5321 (Simple Mail Transfer Protocol): https://datatracker.ietf.org/doc/html/rfc5321 — la especificación oficial de SMTP.\n• Definición de open relay: busque «what is an open mail relay» en sitios como Cisco, Cloudflare o la documentación de Microsoft."
  },
  {
    "id": 39,
    "question": "¿Cuál de los siguientes comandos muestra todas las variables de entorno y de la shell?",
    "options": {
      "A": "getargs",
      "B": "lsenv",
      "C": "ls",
      "D": "env",
      "E": "lsshell"
    },
    "answer": "D",
    "explanation": "La respuesta correcta es la D, env.\n\nEl comando env de Linux (y de otros sistemas tipo Unix) está diseñado para mostrar las variables de entorno actuales. Las variables de entorno son valores con nombre que influyen en el comportamiento de los procesos en ejecución y son esenciales para configurar las aplicaciones y las sesiones de shell.\n\nLa opción A, getargs, no es un comando estándar de Linux para mostrar variables de entorno; podría existir como script o alias personalizado en algún entorno, pero no es una utilidad reconocida para esto. Las opciones B (lsenv) y E (lsshell) no son comandos estándar de Linux. El comando ls (opción C) lista el contenido de directorios y no tiene relación con las variables de entorno.\n\nSin argumentos, env lista todas las variables de entorno y sus valores. Por ejemplo, muestra variables como PATH, HOME, USER y SHELL, que indican, respectivamente, dónde se buscan los ejecutables, el directorio personal del usuario, su nombre y la shell que usa. Esta información es fundamental para entender y configurar el entorno de ejecución de los programas, y administradores y desarrolladores se apoyan en ella para resolver problemas relacionados con el comportamiento de las aplicaciones y la configuración del entorno. Por eso env es la herramienta directa y estándar entre las opciones propuestas.\n\nNota: en sentido estricto, env solo muestra las variables exportadas al entorno. Para ver también las variables locales de la shell (y las funciones) se usa set sin argumentos, que no figura entre las opciones; por eso la respuesta esperada es env.\n\nLecturas recomendadas:\n\n• Documentación de env en GNU Coreutils: https://www.gnu.org/software/coreutils/manual/html_node/env-invocation.html\n• Página de manual de env: man env en un sistema Linux."
  },
  {
    "id": 40,
    "question": "¿Cuáles de los siguientes operadores de comparación de test actúan sobre elementos del sistema de archivos? (Elija dos).",
    "options": {
      "A": "-z",
      "B": "-eq",
      "C": "-d",
      "D": "-f",
      "E": "-lt"
    },
    "answer": "CD",
    "explanation": "Las respuestas correctas son la C y la D, que corresponden a los operadores -d y -f de la shell, usados normalmente con test o con [ ]. Estos operadores evalúan características de los archivos del sistema de archivos.\n\nEl operador -d comprueba si una ruta corresponde a un directorio. Devuelve verdadero (código de salida 0) si la ruta existe y es un directorio, y falso (código distinto de cero) en caso contrario. Es fundamental en scripts que deben distinguir entre archivos y directorios antes de operar con ellos.\n\nEl operador -f comprueba si una ruta corresponde a un archivo regular. Devuelve verdadero si la ruta existe y es un archivo regular (no un directorio, una tubería con nombre, etc.), y falso en caso contrario. Es esencial en scripts que solo deben procesar archivos regulares, para evitar errores al encontrar otros tipos de objetos.\n\nLas demás opciones son incorrectas. El operador -z comprueba si una cadena tiene longitud cero, no elementos del sistema de archivos. Los operadores -eq y -lt son de comparación numérica: comprueban, respectivamente, si dos enteros son iguales y si un número es menor que otro. Ninguno sirve para comprobar elementos del sistema de archivos.\n\nPor lo tanto, -d y -f son los únicos operadores de la lista diseñados para comprobar atributos de elementos (archivos y directorios) del sistema de archivos. Usarlos correctamente en los scripts es fundamental para manejar archivos de forma robusta y evitar errores inesperados. Un script bien diseñado suele comprobar la existencia y el tipo de los archivos con este tipo de pruebas antes de realizar operaciones críticas.\n\nReferencias:\n\n• Comando test: https://man7.org/linux/man-pages/man1/test.1.html\n• Advanced Bash-Scripting Guide: https://tldp.org/LDP/abs/html/fto.html (operadores de prueba de archivos)"
  },
  {
    "id": 41,
    "question": "¿Qué información muestra el comando echo $$?",
    "options": {
      "A": "El ID de proceso de la shell actual.",
      "B": "El ID de proceso del comando siguiente.",
      "C": "El ID de proceso del último comando ejecutado.",
      "D": "El ID de proceso del último comando enviado a segundo plano.",
      "E": "El ID de proceso del comando echo."
    },
    "answer": "A",
    "explanation": "Nota: en el original aparece «echo $», probablemente por un error de conversión; el comando correcto es echo $$.\n\nEl comando echo $$ en una shell de Linux o de un sistema tipo Unix muestra el ID de proceso (PID) de la shell actual. $$ es un parámetro especial que se expande al PID de la shell en la que se ejecuta el comando. Esto es muy importante para la gestión de procesos, ya que permite identificar y seguir de forma unívoca el propio proceso de la shell, algo útil en scripts, para supervisar el comportamiento de la shell o para depurar. Las demás opciones son incorrectas porque $$ se refiere específicamente a la shell actual, no al comando siguiente, al último ejecutado ($? es su código de salida), al último enviado a segundo plano (ese es $!) ni al propio echo.\n\nEn un entorno de nube, conocer el PID de un proceso, incluida una shell, es vital para supervisar el uso de recursos, seguir el rendimiento de las aplicaciones dentro de contenedores o máquinas virtuales y depurar sistemas distribuidos. Identificar la instancia concreta de shell que ejecuta un script permite atribuir con precisión el consumo de recursos y detectar posibles cuellos de botella. En orquestaciones complejas como Kubernetes, conocer el PID de los procesos de shell dentro de los contenedores ayuda a depurar el comportamiento de las aplicaciones y a gestionar el ciclo de vida de los contenedores.\n\nReferencias:\n\n• Bash Reference Manual – Special Parameters: https://www.gnu.org/software/bash/manual/html_node/Special-Parameters.html\n• Advanced Bash-Scripting Guide – Variables internas: https://tldp.org/LDP/abs/html/internalvariables.html"
  },
  {
    "id": 42,
    "question": "¿Qué comando hace visible para las subshells la variable de shell llamada VARIABLE?",
    "options": {
      "A": "export $VARIABLE",
      "B": "env VARIABLE",
      "C": "set $VARIABLE",
      "D": "set VARIABLE",
      "E": "export VARIABLE"
    },
    "answer": "E",
    "explanation": "La respuesta correcta es la E, export VARIABLE. Motivos:\n\nLas variables de shell son locales a la shell en la que se definen. Esto significa que una subshell (un nuevo proceso de shell creado desde la shell padre) no hereda automáticamente las variables del padre. Para que una variable sea accesible desde las subshells hay que exportarla, y eso es lo que hace el comando export.\n\nexport VARIABLE añade la variable indicada al entorno de la shell actual y, sobre todo, la marca para que la hereden los comandos y subshells que se ejecuten a continuación, ya que las subshells reciben una copia del entorno del padre al crearse. Sin exportarla, la subshell no conocería la variable.\n\nPor qué las demás opciones son incorrectas:\n\n• A. export $VARIABLE: $ se usa para acceder al valor de la variable, pero export necesita el nombre de la variable, no su valor. Con $VARIABLE se exportaría una variable cuyo nombre es el contenido de VARIABLE (o no se haría nada útil si está vacía o contiene espacios, ya que la shell la interpretaría como varios argumentos o ninguno).\n• B. env VARIABLE: el comando env muestra las variables de entorno actuales o ejecuta un programa en un entorno modificado. No exporta una variable definida en la shell actual para que la usen otros procesos (env VARIABLE intentaría ejecutar un programa llamado VARIABLE).\n• C. set $VARIABLE: el comando set sirve para establecer opciones de la shell y parámetros posicionales o, sin argumentos, para listar todas las variables de la shell (incluidas las funciones). No exporta variables a las subshells. En particular, set $VARIABLE asignaría parámetros posicionales según el contenido de VARIABLE o daría un error, según su contenido.\n• D. set VARIABLE: este comando no exporta la variable ni la hace disponible para las subshells; en bash, de hecho, establece el parámetro posicional $1 con el texto «VARIABLE».\n\nEn la nube, entender las variables de entorno es fundamental. Por ejemplo, las aplicaciones desplegadas en contenedores suelen depender de variables de entorno para su configuración, cadenas de conexión a bases de datos, claves de API y otra información sensible. Exportarlas garantiza que estén disponibles para los procesos que se ejecutan en el contenedor. Los sistemas de orquestación como Kubernetes se apoyan mucho en las variables de entorno para configurar las aplicaciones de los pods. Usar correctamente export (o los mecanismos equivalentes de los orquestadores) es vital para el buen funcionamiento y la seguridad de las aplicaciones.\n\nPara profundizar, consulte:\n\n• Manual de referencia de GNU Bash: https://www.gnu.org/software/bash/manual/bash.html\n• La documentación de export en su shell (por ejemplo, help export en bash).\n• Documentación de Kubernetes sobre variables de entorno: https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/ (contexto de nube)"
  },
  {
    "id": 43,
    "question": "¿Qué salida produce la siguiente secuencia de comandos?\necho '1 2 3 4 5 6' | while read a b c; do echo result $c $b $a; done",
    "options": {
      "A": "result: 6 5 4",
      "B": "result: 1 2 3 4 5 6",
      "C": "result: 3 4 5 6 2 1",
      "D": "result: 6 5 4 3 2 1",
      "E": "result: 3 2 1"
    },
    "answer": "C",
    "explanation": "Corrección: la explicación del original es errónea (afirma que la salida sería «result 3 2 1» seguida de «result 6 5 4» y llega a decir que la C es incorrecta). A continuación se da la explicación correcta. Además, las opciones incluyen dos puntos («result:») que el comando no imprime; es una errata del original.\n\necho envía la cadena 1 2 3 4 5 6 como una sola línea por la tubería al bucle while. El comando read a b c lee una línea completa y la divide en palabras: asigna la primera palabra a a, la segunda a b y todo el resto de la línea a la última variable, c. Así:\n\n• a = 1\n• b = 2\n• c = 3 4 5 6\n\nEl cuerpo del bucle ejecuta echo result $c $b $a, que imprime:\n\nresult 3 4 5 6 2 1\n\nComo solo hay una línea de entrada, el bucle se ejecuta una única vez y la siguiente llamada a read encuentra el fin de archivo y termina el bucle. Por eso la respuesta correcta es la C. La clave de la pregunta es saber que read no lee «de tres en tres palabras», sino línea a línea, y que la última variable recibe todas las palabras sobrantes.\n\nReferencias:\n\n• Comando interno read de Bash: https://www.gnu.org/software/bash/manual/html_node/Bash-Builtins.html\n• Bucle while en Bash: https://www.gnu.org/software/bash/manual/html_node/Looping-Constructs.html\n• Tuberías en Linux: https://www.geeksforgeeks.org/piping-in-unix-or-linux/"
  },
  {
    "id": 44,
    "question": "¿Cuál de los siguientes archivos de configuración debe modificarse para establecer variables de shell de forma global para todos los usuarios?",
    "options": {
      "A": "/etc/profile",
      "B": "/etc/bashrc",
      "C": "~/.bash_profile",
      "D": "/etc/.bashrc",
      "E": "/etc/shellenv"
    },
    "answer": "A",
    "explanation": "La respuesta correcta es /etc/profile. Este archivo lo ejecuta la shell de inicio de sesión de todos los usuarios durante el proceso de inicio de sesión. Por lo tanto, cualquier variable de entorno definida en /etc/profile estará disponible para todos los usuarios del sistema después de iniciar sesión.\n\nLa opción B, /etc/bashrc, se ejecuta cada vez que se inicia una nueva shell interactiva que no es de inicio de sesión, no necesariamente al iniciar sesión. Aunque afecta a todos los usuarios cuando abren una nueva shell, no es el archivo principal para configurar el entorno global de inicio de sesión.\n\nLa opción C, ~/.bash_profile, es un archivo específico de cada usuario, situado en su directorio personal. Solo se ejecuta para ese usuario al iniciar sesión.\n\nLa opción D, /etc/.bashrc, no es una ruta válida: no existe ningún archivo estándar con ese nombre para la configuración global de la shell.\n\nLa opción E, /etc/shellenv, no es un archivo de configuración estándar que usen las distribuciones Linux para definir variables de entorno globales.\n\nPor lo tanto, /etc/profile es el archivo más adecuado para establecer variables de shell de forma global para todos los usuarios, ya que está diseñado específicamente para la inicialización global del inicio de sesión. Ofrece un lugar centralizado para gestionar la configuración del entorno en todo el sistema, que afecta a todos los usuarios que inician sesión. Los administradores lo usan para garantizar variables de entorno coherentes para todos, algo fundamental para estandarizar el entorno de trabajo y asegurar que las aplicaciones dispongan de la configuración, las rutas y demás parámetros necesarios.\n\nPara más información:\n\n• man bash (sección INVOCATION)\n• Manual de GNU Bash: https://www.gnu.org/software/bash/manual/"
  },
  {
    "id": 45,
    "question": "¿Qué salida produce el comando seq 10?",
    "options": {
      "A": "Un flujo continuo de números que aumentan de 10 en 10 hasta que se detiene el comando.",
      "B": "No produce ninguna salida porque falta un segundo parámetro.",
      "C": "Los números del 0 al 9, uno por línea.",
      "D": "El número 10 en la salida estándar.",
      "E": "Los números del 1 al 10, uno por línea."
    },
    "answer": "E",
    "explanation": "El comando seq de Linux imprime una secuencia de números. seq 10 genera una secuencia que empieza en 1 (el valor inicial predeterminado cuando solo se da un argumento) y termina en 10.\n\nPor defecto, seq incrementa la secuencia de 1 en 1. Por lo tanto, seq 10 produce los números 1, 2, 3, 4, 5, 6, 7, 8, 9 y 10, cada uno en una línea.\n\nLa opción A es incorrecta porque seq 10 no produce un flujo continuo, sino una secuencia finita. La opción B es incorrecta porque indicar solo el valor final es una sintaxis válida de seq, que empieza por defecto en 1. La opción C es incorrecta porque la secuencia empieza en 1, no en 0. La opción D es incorrecta porque genera una secuencia, no solo el número 10.\n\nPor lo tanto, la salida correcta son los enteros del 1 al 10, cada uno en una línea.\n\nPara profundizar, consulte la página de manual con man seq o recursos en línea como:\n\n• https://www.gnu.org/software/coreutils/seq\n• https://linux.die.net/man/1/seq"
  },
  {
    "id": 46,
    "question": "RELLENE EL ESPACIO EN BLANCO: ¿Qué comando lista los alias definidos en la shell Bash actual? (Especifique solo el comando, sin ruta ni parámetros).",
    "options": {},
    "answer": "alias",
    "explanation": ""
  },
  {
    "id": 47,
    "question": "¿Cuál de los siguientes comandos puede usarse para limitar la cantidad de memoria que puede usar un usuario?",
    "options": {
      "A": "umask",
      "B": "usermod",
      "C": "passwd",
      "D": "ulimit",
      "E": "chage"
    },
    "answer": "D",
    "explanation": "La respuesta correcta es ulimit. Este comando está diseñado específicamente para controlar los recursos disponibles para la shell y para los procesos que se inician desde ella. Entre esos recursos están el tamaño de los archivos, el tamaño de los datos de los procesos, el número de archivos abiertos y, sobre todo, la cantidad de memoria que puede consumir un proceso del usuario. Al fijar límites con ulimit, los administradores pueden impedir que usuarios o procesos concretos consuman demasiada memoria, lo que podría causar inestabilidad en el sistema o degradar el rendimiento para los demás usuarios.\n\nLa opción A, umask, se usa para establecer los permisos predeterminados de los archivos y directorios nuevos. La opción B, usermod, se usa para modificar la información de la cuenta de un usuario, como su nombre de inicio de sesión o los grupos a los que pertenece. La opción C, passwd, se usa para cambiar la contraseña de un usuario. La opción E, chage, se usa para cambiar la información de caducidad de la contraseña. Ninguno de estos comandos limita directamente el uso de memoria de un usuario.\n\nPor lo tanto, ulimit es el único comando correcto para limitar el uso de memoria de un usuario. Los administradores suelen configurar los valores de ulimit en los archivos de inicialización de la shell (como .bashrc o .profile) o mediante PAM (Pluggable Authentication Modules, con /etc/security/limits.conf) para aplicar límites de recursos al iniciar sesión. Así el uso de memoria queda controlado según la política del sistema.\n\nPara más información:\n\n• Comando ulimit: help ulimit en bash, o https://man7.org/linux/man-pages/man1/ulimit.1p.html\n• Límites de recursos en Linux: man limits.conf y man setrlimit"
  },
  {
    "id": 48,
    "question": "¿Cuál es una de las funciones de una clave de host SSH?",
    "options": {
      "A": "Todo cliente SSH debe enviarla, además de una clave de usuario, para identificar el host del cliente.",
      "B": "Es la clave raíz con la que deben firmarse todas las claves SSH de usuario.",
      "C": "Proporciona la información de identidad del servidor a los clientes SSH que se conectan.",
      "D": "Autentica a cualquier usuario que inicie sesión en una máquina remota desde el host de la clave.",
      "E": "La usan servicios del sistema como cron, syslog o un trabajo de copia de seguridad para conectarse automáticamente a hosts remotos."
    },
    "answer": "C",
    "explanation": "La respuesta correcta es la C, porque la clave de host SSH sirve para identificar el servidor SSH ante los clientes que se conectan, lo que mitiga los ataques de intermediario (man-in-the-middle).\n\nFuncionamiento: cuando un cliente SSH se conecta por primera vez a un servidor, recibe la clave de host del servidor y la guarda (en ~/.ssh/known_hosts). En las conexiones siguientes, el cliente comprueba que la clave de host del servidor coincide con la guardada. Si no coincide, es un claro indicio de que un atacante intenta interceptar la conexión y suplantar al servidor. Este proceso se basa en que el cliente disponga inicialmente de una copia de confianza de la clave de host.\n\nLa opción A es incorrecta porque los clientes SSH usan claves de usuario (o contraseñas) para autenticarse, no claves de host; estas sirven principalmente para identificar al servidor. La opción B es incorrecta porque las claves de host son independientes de las claves de usuario y no se usan para firmarlas; las claves de usuario pueden estar firmadas por una autoridad de certificación, pero no por la clave de host del servidor. La opción D es incorrecta porque la clave de host no autentica directamente a los usuarios; la autenticación de usuarios se basa en mecanismos distintos, como contraseñas o claves de usuario. La opción E es incorrecta porque servicios como cron o syslog, cuando se conectan a hosts remotos, suelen autenticarse con claves SSH de usuario almacenadas en cuentas concretas, no con la clave de host. La clave de host sigue siendo importante para verificar la identidad del servidor, pero no es el mecanismo principal de autenticación de estos servicios.\n\nLa clave de host SSH es fundamental para establecer la confianza en la conexión inicial. Sin ella, un atacante podría interceptar fácilmente las comunicaciones. Este mecanismo garantiza que el cliente se comunica con el servidor previsto.\n\nLecturas recomendadas:\n\n• DigitalOcean – Understanding SSH Host Key Verification\n• SSH.com – SSH Host Keys"
  },
  {
    "id": 49,
    "question": "¿Cuál es la finalidad de TCP Wrapper?",
    "options": {
      "A": "Gestionar y ajustar el ancho de banda que usan los servicios TCP.",
      "B": "Vincular un servicio de red a un puerto TCP.",
      "C": "Encapsular los mensajes TCP en paquetes IP.",
      "D": "Añadir soporte SSL a servicios TCP en texto plano.",
      "E": "Limitar el acceso a un servicio de red."
    },
    "answer": "E",
    "explanation": "La respuesta correcta es la E: limitar el acceso a un servicio de red. TCP Wrapper actúa como una capa de seguridad que controla qué hosts o redes pueden conectarse a determinados servicios de red basados en TCP (como SSH o FTP). Funciona interceptando las solicitudes de conexión antes de que lleguen al demonio del servicio. TCP Wrapper, implementado principalmente con el demonio tcpd (o la biblioteca libwrap) y configurado mediante los archivos /etc/hosts.allow y /etc/hosts.deny, define reglas basadas en direcciones IP o nombres de host de origen.\n\nCuando llega una solicitud de conexión, tcpd compara la IP y el nombre de host de origen (si la resolución DNS está habilitada) con estas reglas. Si encuentra una coincidencia en /etc/hosts.allow, la conexión se permite; si no, se consulta /etc/hosts.deny. Si hay coincidencia en ese archivo, la conexión se rechaza. Si no hay coincidencia en ninguno de los dos, se permite el acceso por defecto.\n\nLas opciones A, B, C y D son incorrectas. TCP Wrapper no gestiona el ancho de banda (A), no vincula servicios a puertos (B), no encapsula mensajes TCP (C) ni añade soporte SSL (D). Su única finalidad es conceder o denegar selectivamente el acceso a la red según criterios predefinidos. Proporciona un nivel básico de control de acceso basado en hosts que mejora la seguridad de la red. Puede ser útil en la nube para limitar el acceso a servicios sensibles, aunque suele complementarse con cortafuegos más robustos o con las listas de control de acceso (ACL) o grupos de seguridad del proveedor.\n\nLecturas recomendadas:\n\n• TCP Wrappers – página de manual: https://linux.die.net/man/5/hosts.allow\n• Wikipedia – TCP Wrapper: https://en.wikipedia.org/wiki/TCP_Wrapper"
  },
  {
    "id": 50,
    "question": "Dado el siguiente extracto de la configuración de sudo:\njane ANY=NOPASSWD: /bin/kill, /bin/id, PASSWD: /sbin/fdisk\n¿Cuáles de las siguientes afirmaciones son ciertas? (Elija tres).",
    "options": {
      "A": "Jane solo puede ejecutar /bin/id después de introducir su contraseña.",
      "B": "Jane puede ejecutar /sbin/fdisk después de introducir la contraseña de root.",
      "C": "Jane puede ejecutar /sbin/fdisk después de introducir su contraseña.",
      "D": "Jane puede ejecutar /bin/kill sin introducir ninguna contraseña.",
      "E": "Jane puede ejecutar /bin/id sin introducir su contraseña."
    },
    "answer": "CDE",
    "explanation": "Justificación detallada de por qué las respuestas correctas son C, D y E según el extracto de configuración de sudo:\n\nLa línea jane ANY=NOPASSWD: /bin/kill, /bin/id, PASSWD: /sbin/fdisk define los privilegios de sudo del usuario jane. La palabra clave ANY significa que la regla se aplica desde cualquier host; como no se indica un usuario de destino entre paréntesis, los comandos se ejecutan como root. La etiqueta NOPASSWD: permite a jane ejecutar los comandos indicados a continuación sin introducir contraseña. En cambio, la etiqueta PASSWD: indica que, para los comandos que la siguen, jane debe introducir una contraseña.\n\n• La afirmación C es cierta: la entrada PASSWD: /sbin/fdisk indica que jane debe introducir su propia contraseña para ejecutar /sbin/fdisk con sudo. Por defecto, sudo pide la contraseña del usuario que lo invoca.\n• La afirmación D es cierta: como /bin/kill figura bajo NOPASSWD:, jane puede ejecutarlo con sudo sin introducir ninguna contraseña. La configuración le concede explícitamente este permiso.\n• La afirmación E es cierta: al igual que /bin/kill, /bin/id figura bajo NOPASSWD:, así que jane puede ejecutarlo con sudo sin introducir contraseña.\n\nLas afirmaciones A y B son incorrectas porque interpretan mal el funcionamiento de las etiquetas NOPASSWD y PASSWD. Cuando sudo pide contraseña, jane usa la suya (no la de root), y los comandos que no requieren contraseña son los indicados bajo NOPASSWD.\n\nLecturas recomendadas sobre la configuración de sudo:\n\n• Documentación de sudo en Ubuntu: https://help.ubuntu.com/community/Sudo\n• Páginas de manual: man sudo y man sudoers en una terminal Linux (documentación oficial de sudo).\n• Página de sudo en ArchWiki: https://wiki.archlinux.org/title/Sudo (buen resumen del uso y la configuración de sudo)."
  },
  {
    "id": 51,
    "question": "¿Qué archivo de configuración contiene las opciones predeterminadas de los clientes SSH?",
    "options": {
      "A": "/etc/ssh/sshd_config",
      "B": "/etc/ssh/ssh",
      "C": "/etc/ssh/ssh_config",
      "D": "/etc/ssh/client",
      "E": "/etc/ssh/ssh_client"
    },
    "answer": "C",
    "explanation": "La respuesta correcta es la C, /etc/ssh/ssh_config. Este archivo contiene la configuración global que se aplica a todas las conexiones de cliente SSH que se originan en ese sistema. Define comportamientos como las claves SSH predeterminadas, los cifrados preferidos, los tiempos de espera de conexión y configuraciones específicas por host que sustituyen a los valores globales al conectarse a determinados servidores.\n\n/etc/ssh/sshd_config (opción A) es el archivo de configuración del demonio servidor SSH, que controla aspectos como el número de puerto, los métodos de autenticación permitidos y los usuarios autorizados para las conexiones SSH entrantes.\n\nLas opciones B, D y E (/etc/ssh/ssh, /etc/ssh/client y /etc/ssh/ssh_client) no son archivos de configuración estándar del cliente SSH.\n\nPor lo tanto, para modificar el comportamiento predeterminado del cliente SSH al iniciar conexiones, el archivo que hay que editar es /etc/ssh/ssh_config. Esto permite a los administradores definir de forma global parámetros que afectan a todas las conexiones SSH, lo que mejora la seguridad y simplifica la experiencia de los usuarios. El archivo se lee cada vez que se inicia una conexión SSH, de modo que las reglas se aplican de forma coherente (la configuración de cada usuario en ~/.ssh/config tiene prioridad sobre ella).\n\nReferencias:\n\n• https://man.openbsd.org/ssh_config\n• https://www.ssh.com/academy/ssh/config"
  },
  {
    "id": 52,
    "question": "Según la configuración del sistema, ¿cuál de los siguientes archivos puede usarse para habilitar y deshabilitar servicios de red que se ejecutan en el host?",
    "options": {
      "A": "/etc/profile",
      "B": "/etc/xinetd.conf",
      "C": "/etc/ports",
      "D": "/etc/services",
      "E": "/etc/host.conf"
    },
    "answer": "B",
    "explanation": "La respuesta correcta es la B, /etc/xinetd.conf. Este archivo (junto con los archivos del directorio /etc/xinetd.d/) es el archivo de configuración principal del servicio xinetd (extended Internet daemon). xinetd es un superservidor que escucha en varios puertos de red; cuando llega una conexión a uno de ellos, inicia el servicio asociado a ese puerto. Lo importante es que xinetd.conf y los archivos que incluye permiten a los administradores habilitar o deshabilitar cada servicio gestionado por xinetd modificando su atributo disable. Cambiar disable = yes por disable = no (o al revés) habilita o deshabilita ese servicio la próxima vez que se recargue o reinicie xinetd.\n\nAunque otras opciones podrían afectar indirectamente a los servicios de red, xinetd.conf ofrece un mecanismo directo para controlar los servicios que gestiona. /etc/profile sirve principalmente para definir variables de entorno de los usuarios. /etc/ports no es un archivo de configuración estándar. /etc/services asocia nombres de servicios con números de puerto, y /etc/host.conf configura cómo resuelve el sistema los nombres de host; ninguno de los dos habilita ni deshabilita servicios de red directamente. Solo xinetd.conf ofrece un método disponible y muy utilizado para el fin que plantea la pregunta.\n\nPor lo tanto, xinetd.conf es la respuesta más adecuada.\n\nReferencias:\n\n• https://man7.org/linux/man-pages/man5/xinetd.conf.5.html\n• https://www.howtoforge.com/tutorial/securing-xinetd/"
  },
  {
    "id": 53,
    "question": "¿Cuál de los siguientes comandos puede identificar el PID de un proceso que ha abierto un puerto TCP?",
    "options": {
      "A": "ptrace",
      "B": "strace",
      "C": "debug",
      "D": "lsof",
      "E": "nessus"
    },
    "answer": "D",
    "explanation": "La respuesta correcta es la D, lsof (List Open Files), porque está diseñado específicamente para listar todos los archivos abiertos, incluidos los sockets de red, y asociarlos con los procesos que los usan. Esto resuelve directamente el problema de identificar el PID de un proceso que mantiene abierto un puerto TCP. lsof permite filtrar por diversos criterios, entre ellos los puertos de red.\n\nLas opciones A, B, C y E son incorrectas porque tienen otros fines:\n\n• A. ptrace: es una llamada al sistema que se usa para rastrear la ejecución de otro proceso. En teoría se podría usar para examinar las llamadas al sistema relacionadas con la creación y vinculación de sockets, pero es de demasiado bajo nivel e ineficiente para simplemente averiguar el PID asociado a un puerto. Suele usarse para depuración e ingeniería inversa.\n• B. strace: al igual que ptrace, strace es un rastreador de llamadas al sistema que muestra la secuencia de llamadas que realiza un proceso. Aunque podría revelar indirectamente el uso de un puerto si el proceso rastreado hace las llamadas oportunas (como bind o listen), no está diseñado para encontrar el PID a partir del número de puerto. Es más adecuado para entender el comportamiento de bajo nivel de un proceso.\n• C. debug: «debug» es un término genérico, no un comando concreto disponible en la mayoría de las distribuciones Linux que liste procesos por puerto TCP.\n• E. nessus: Nessus es un escáner de vulnerabilidades que identifica fallos de seguridad en un sistema o una red. Aunque puede descubrir servicios que se ejecutan en determinados puertos, no proporciona el PID de los procesos que escuchan en ellos. Nessus escanea de forma remota, mientras que averiguar el PID es una operación local en el propio sistema.\n\nLa ventaja de lsof es que consulta directamente al kernel sobre el uso de archivos y sockets de red, y presenta una salida clara que asocia cada archivo o socket abierto con el ID del proceso correspondiente. Por ejemplo, para encontrar el proceso que usa el puerto 8080 se ejecutaría lsof -i :8080.\n\nPor lo tanto, lsof es la herramienta más directa y eficiente para identificar el PID de un proceso que usa un puerto TCP, y los administradores la usan mucho para resolver problemas de red y supervisar la seguridad. (Otras herramientas con la misma utilidad, aunque no aparecen entre las opciones, son fuser, ss -p y netstat -p).\n\nMás recursos:\n\n• Página de manual de lsof: man lsof en la terminal.\n• Tutorial de lsof: https://www.computerhope.com/unix/ulsof.htm\n• Uso de lsof para encontrar puertos abiertos: https://www.cyberciti.biz/faq/unix-linux-check-if-port-is-in-use-using-fuser-lsof/"
  },
  {
    "id": 54,
    "question": "RELLENE EL ESPACIO EN BLANCO: Al usar el reenvío de X11 (X11 forwarding) en SSH, ¿qué variable de entorno se establece automáticamente en la shell remota para ayudar a las aplicaciones a conectarse al servidor X11 correcto? (Especifique solo la variable de entorno, sin comandos ni valores adicionales).",
    "options": {},
    "answer": "DISPLAY",
    "explanation": ""
  },
  {
    "id": 55,
    "question": "RELLENE EL ESPACIO EN BLANCO: ¿La presencia de qué archivo impide temporalmente que todos los usuarios, salvo root, inicien sesión en un sistema? (Especifique el nombre completo del archivo, incluida la ruta).",
    "options": {},
    "answer": "/etc/nologin",
    "explanation": ""
  },
  {
    "id": 56,
    "question": "¿Cuál de los siguientes comandos precarga y gestiona las claves SSH existentes que se usan para la autenticación automática al iniciar sesión en otras máquinas mediante SSH?",
    "options": {
      "A": "sshd",
      "B": "ssh-keyring",
      "C": "ssh-keygen",
      "D": "ssh-pki",
      "E": "ssh-agent"
    },
    "answer": "E",
    "explanation": "Corrección: el original da como respuesta la C (ssh-keygen), pero su propia explicación indica que es incorrecta y que la respuesta correcta es la E (ssh-agent).\nssh-keygen se usa para generar nuevos pares de claves SSH (clave privada y pública). No precarga ni gestiona claves existentes para la autenticación automática.\n\nssh-agent es un programa que mantiene en memoria las claves privadas usadas para la autenticación por clave pública. Al iniciar sesión, ssh-agent puede ofrecer automáticamente las claves al cliente SSH, lo que permite conectarse sin introducir la frase de contraseña cada vez (si la clave está protegida con una). Normalmente las claves se añaden al agente con ssh-add, que las precarga en la memoria del agente y las deja disponibles para las conexiones SSH posteriores.\n\nsshd es el demonio SSH, el componente del lado del servidor que escucha las conexiones SSH entrantes. ssh-keyring y ssh-pki no son utilidades SSH estándar de gestión de claves.\n\nPor lo tanto, ssh-agent es la herramienta diseñada específicamente para precargar y gestionar claves SSH y facilitar la autenticación automática al conectarse a otras máquinas por SSH. Funciona junto con ssh-add, que añade las claves, y después gestiona el proceso de autenticación de forma transparente.\n\nLecturas recomendadas:\n\n• Documentación de OpenSSH: https://www.openssh.com/ (en particular, la documentación de ssh-agent, ssh-add y la autenticación por clave pública).\n• Tutorial de DigitalOcean sobre claves SSH: https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-20-04"
  },
  {
    "id": 57,
    "question": "En una máquina que ejecuta varios servidores X, ¿cómo identifican los programas las distintas instancias del servidor X11?",
    "options": {
      "A": "Mediante un UUID fijo definido en el archivo de configuración de X11.",
      "B": "Mediante un nombre de pantalla (display) como :1.",
      "C": "Mediante el nombre del usuario que ejecuta el servidor X, como x11:bob.",
      "D": "Mediante un nombre de dispositivo como /dev/X11/xservers/1.",
      "E": "Mediante una dirección IPv6 única de la subred fe80::/64."
    },
    "answer": "B",
    "explanation": "La respuesta correcta es la B, porque los servidores X de una misma máquina se distinguen mediante un nombre de pantalla (display). Este suele tener el formato host:número_de_display.número_de_pantalla. El número de display es un entero no negativo que identifica de forma única la instancia del servidor X; el número de pantalla suele ser 0. El nombre de host es opcional y, si se omite, se usa el host local. Por ejemplo, :0 hace referencia al primer servidor X de la máquina local.\n\nLa opción A es incorrecta porque los servidores X no se identifican mediante UUID en sus archivos de configuración. La opción C es incorrecta porque los nombres de usuario no tienen relación con la identificación de las instancias del servidor X: un usuario puede lanzar varios servidores X, o varios usuarios pueden conectarse a un mismo servidor X. La opción D es incorrecta porque no existen nodos de dispositivo para identificar servidores X. La opción E es incorrecta porque las direcciones IPv6 son direcciones de red, no identificadores de instancias locales del servidor X.\n\nLa arquitectura del sistema X Window permite ejecutar varios servidores X a la vez, incluso en la misma máquina. Cada servidor gestiona su propio conjunto de dispositivos de entrada (teclado, ratón) y de salida (pantalla). Los programas, llamados clientes X, se conectan a un servidor X concreto mediante su nombre de display. Este diseño es especialmente importante en entornos como las máquinas virtuales y los escritorios en la nube, donde varios usuarios o aplicaciones pueden necesitar sesiones gráficas separadas en el mismo hardware.\n\nPara más información:\n\n• Documentación de X.Org: no hay un único enlace definitivo, pero en el sitio de X.Org (x.org) se encuentran las especificaciones y la documentación del sistema X Window.\n• The X Window System: A User's Guide, de Niall Mansfield (disponibilidad variable; búsquelo en librerías en línea). Es una guía completa sobre X."
  },
  {
    "id": 58,
    "question": "¿Cuál es la finalidad de un lector de pantalla?",
    "options": {
      "A": "Gestiona los teclados virtuales de las pantallas táctiles.",
      "B": "Lee los parámetros de los monitores conectados y genera una configuración de X11 adecuada.",
      "C": "Muestra líneas y marcadores para ayudar a las personas a usar técnicas de lectura rápida.",
      "D": "Gestiona y muestra archivos que contienen libros electrónicos.",
      "E": "Lee el texto que aparece en pantalla para atender las necesidades de personas ciegas o con discapacidad visual."
    },
    "answer": "E",
    "explanation": "La respuesta correcta es la E: un lector de pantalla lee el texto que aparece en pantalla para atender las necesidades de personas ciegas o con discapacidad visual. Esa es su finalidad fundamental.\n\nLos lectores de pantalla son aplicaciones de tecnología de apoyo que permiten a las personas con discapacidad visual usar ordenadores y otros dispositivos electrónicos. Funcionan convirtiendo el texto y otra información visual de la pantalla en voz o en braille, de modo que los usuarios pueden «oír» o «sentir» la información que otros ven. El lector de pantalla interactúa con el sistema operativo y las aplicaciones, captura el texto y otros elementos gráficos y, después, usa un motor de síntesis de voz para leerlos o envía la información a una línea braille. (En Linux, un ejemplo habitual es Orca).\n\nLas opciones A, B, C y D son incorrectas. Los teclados virtuales (A) pueden gestionarse con funciones de accesibilidad del sistema operativo o con software especializado, pero no suelen gestionarlos los lectores de pantalla. La configuración de X11 (B) es responsabilidad del sistema gráfico, no de los lectores de pantalla. Las técnicas de lectura rápida (C) no tienen relación con las tecnologías de apoyo para personas con discapacidad visual. La gestión de libros electrónicos (D) es función de las aplicaciones de lectura de e-books.\n\nLos lectores de pantalla son fundamentales para la accesibilidad, ya que permiten a las personas con discapacidad visual participar más plenamente en la educación, el empleo y otros ámbitos de la vida. Fomentan la inclusión y la igualdad de acceso a la información y la tecnología.\n\nPara profundizar:\n\n1. Web Accessibility Initiative (WAI) – W3C: información completa y directrices sobre accesibilidad web, incluido el uso de tecnologías de apoyo como los lectores de pantalla. https://www.w3.org/WAI/\n2. Access Technology – American Foundation for the Blind (AFB): recursos e información sobre tecnologías de acceso para personas con discapacidad visual. https://www.afb.org/blindness-and-low-vision/using-technology\n3. Encuesta a usuarios de lectores de pantalla (WebAIM): información valiosa sobre cómo usan las personas los lectores de pantalla y las dificultades que encuentran. https://webaim.org/projects/screenreadersurvey/"
  },
  {
    "id": 59,
    "question": "El archivo de configuración de X11 xorg.conf está organizado en secciones. ¿Cómo se representa el contenido de la sección SectionName?",
    "options": {
      "A": "Se coloca entre llaves, como en Section SectionName { … }.",
      "B": "Se coloca entre las etiquetas <Section name=SectionName> y </Section>.",
      "C": "Se coloca entre una línea que contiene Section SectionName y otra que contiene EndSection.",
      "D": "Se coloca después de la línea [SectionName].",
      "E": "Se coloca después de una línea inicial sin sangría Section SectionName y debe tener una sangría de exactamente un tabulador."
    },
    "answer": "C",
    "explanation": "La respuesta correcta es la C, porque xorg.conf usa una sintaxis específica para definir las secciones. Cada sección empieza con la palabra clave Section seguida del nombre de la sección (por ejemplo, Section \"Monitor\" o Section \"Device\"). Los parámetros y valores de esa sección se colocan después de esta línea inicial, y para marcar el final se usa la palabra clave EndSection en una línea aparte. Esta estructura permite al servidor X analizar e interpretar la configuración de forma clara e inequívoca.\n\nLas opciones A, B, D y E son incorrectas porque describen sintaxis que no se usan en el formato de xorg.conf. Las llaves, las etiquetas de estilo XML, los corchetes y la sangría obligatoria con tabuladores no forman parte de la sintaxis de configuración de X11 (la sangría se usa solo por legibilidad). Usar cualquiera de ellas provocaría errores de análisis e impediría que el servidor X se iniciara correctamente. La estructura de bloques Section … EndSection es esencial para agrupar las opciones relacionadas dentro de xorg.conf, lo que permite una organización modular y facilita la gestión de la configuración del servidor X.\n\nSin ella, el servidor X no podría saber qué parámetros corresponden a cada componente de hardware o elemento de configuración. Esta estructura es el estándar desde hace muchos años y garantiza la compatibilidad entre distintas implementaciones de servidores X.\n\nReferencias para profundizar:\n\n• Configuración de X.Org: https://www.x.org/releases/X11R7.6/doc/man/man5/xorg.conf.5.xhtml — página de manual oficial de xorg.conf, con la sintaxis y las opciones disponibles.\n• Xorg en ArchWiki: https://wiki.archlinux.org/title/Xorg — ejemplos prácticos y explicaciones sobre la configuración de Xorg, incluidas las secciones de xorg.conf.\n\nEstos recursos muestran claramente la sintaxis Section … EndSection de xorg.conf."
  },
  {
    "id": 60,
    "question": "¿Cuáles de las siguientes funciones ofrece SPICE? (Elija dos).",
    "options": {
      "A": "Conectar dispositivos USB locales a aplicaciones remotas.",
      "B": "Acceder a aplicaciones gráficas de un host remoto.",
      "C": "Sustituir a Xorg como servidor X11 local.",
      "D": "Descargar e instalar localmente aplicaciones desde una máquina remota.",
      "E": "Subir y ejecutar un programa binario en una máquina remota."
    },
    "answer": "AB",
    "explanation": "Las respuestas correctas son A y B. SPICE (Simple Protocol for Independent Computing Environments) es un sistema de visualización remota creado para entornos virtuales. Su función principal es ofrecer una experiencia de usuario completa al acceder a máquinas virtuales o escritorios remotos.\n\nLa opción A es correcta porque SPICE permite redirigir dispositivos USB del equipo cliente a la máquina virtual o al servidor de aplicaciones remoto. Así, un usuario puede conectar una memoria USB, una impresora u otro periférico a su equipo local y usarlo en el entorno remoto. Esto mejora la usabilidad de las aplicaciones remotas al permitirles interactuar con el hardware conectado localmente.\n\nLa opción B también es correcta. La capacidad central de SPICE es dar acceso a aplicaciones gráficas que se ejecutan en un host remoto. Para ello transmite los datos gráficos de forma eficiente y admite funciones como la transmisión de vídeo y audio, de modo que el usuario interactúa con la interfaz de la aplicación remota como si se ejecutara en local.\n\nLa opción C es incorrecta porque SPICE es un protocolo y un conjunto de herramientas para acceder a entornos gráficos remotos, no un sustituto de Xorg, que es un servidor X11 completo. SPICE suele funcionar sobre un sistema de visualización existente y le añade capacidades de acceso remoto.\n\nLa opción D es incorrecta porque SPICE no está pensado para descargar e instalar aplicaciones. Su objetivo es dar acceso a aplicaciones que ya están instaladas y en ejecución en un host remoto; no se encarga de la gestión de paquetes ni del despliegue de aplicaciones.\n\nLa opción E es incorrecta. Aunque SPICE permite interactuar con aplicaciones remotas, no ofrece ningún mecanismo para subir y ejecutar programas binarios arbitrarios. Funciona en la capa gráfica, no en la de ejecución de binarios.\n\nPara profundizar, consulte la documentación oficial de SPICE y los recursos de la comunidad:\n\n• Sitio web del proyecto SPICE: https://www.spice-space.org/\n• Documentación de Red Hat Virtualization sobre SPICE (Red Hat es uno de los principales contribuidores del proyecto)."
  },
  {
    "id": 61,
    "question": "¿Dónde se almacena el journal de systemd?",
    "options": {
      "A": "/var/jlog/ y /var/jlogd/",
      "B": "/proc/log/ y /proc/klog/",
      "C": "/run/log/journal/ o /var/log/journal/",
      "D": "/var/log/syslog.bin o /var/log/syslog.jrn",
      "E": "/etc/systemd/journal/ o /usr/lib/systemd/journal/"
    },
    "answer": "C",
    "explanation": "La ubicación correcta de los archivos del journal de systemd es /run/log/journal/ y/o /var/log/journal/. El servicio systemd-journald recoge y almacena registros de diversas fuentes, como el kernel, los servicios del sistema y las aplicaciones. El journal está diseñado para ofrecer una forma centralizada y eficiente de gestionar los registros del sistema, y en muchas distribuciones modernas ha sustituido al antiguo syslog.\n\nEl directorio /run/log/journal/ se encuentra en un sistema de archivos en RAM (tmpfs), por lo que los registros se pierden al reiniciar. Es adecuado para registros volátiles que no necesitan conservarse entre arranques. En cambio, /var/log/journal/ se usa para el almacenamiento persistente en disco, de modo que los registros sobreviven a los reinicios.\n\nUsar /run/log/journal/ o /var/log/journal/ depende de la configuración y las necesidades del sistema. Si se desea un registro persistente, hay que habilitar /var/log/journal/, lo que implica crear el directorio o ajustar el parámetro Storage= en el archivo de configuración /etc/systemd/journald.conf (con Storage=auto, el valor predeterminado, se usa /var/log/journal/ si existe).\n\nLas opciones A, B, D y E son incorrectas. /var/jlog/ y /var/jlogd/ (A) no son ubicaciones estándar del journal de systemd. /proc/log/ y /proc/klog/ (B) no son ubicaciones de almacenamiento de journald (/proc/kmsg es la interfaz de los mensajes del kernel). /var/log/syslog.bin y /var/log/syslog.jrn (D) no son archivos estándar del journal de systemd. Por último, /etc/systemd/journal/ y /usr/lib/systemd/journal/ (E) no son ubicaciones de almacenamiento de los registros; la configuración de journald está en /etc/systemd/journald.conf.\n\nSaber dónde se almacenan los registros del journal es fundamental para la resolución de problemas y las auditorías de seguridad. Las instancias en la nube dependen mucho de los registros para su supervisión y depuración, y conocer las rutas correctas es esencial para una administración eficaz. Hay que tener en cuenta el carácter volátil de /run/log/journal/ al diseñar las estrategias de registro para no perder información importante.\n\nReferencias:\n\n• journald.conf: https://www.freedesktop.org/software/systemd/man/journald.conf.html\n• Documentación de Red Hat sobre el journal persistente: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/system_administrators_guide/sec-managing_the_system_log#sec-Persistent_Journal"
  },
  {
    "id": 62,
    "question": "¿Cuál de las siguientes afirmaciones es cierta respecto al comando sendmail?",
    "options": {
      "A": "Con cualquier MTA, el comando sendmail debe ser ejecutado periódicamente por el demonio cron.",
      "B": "Al usar systemd, sendmail es un alias de relayctl.",
      "C": "El comando sendmail muestra el historial de la cola del MTA con los correos enviados correctamente.",
      "D": "Solo está disponible cuando está instalado el MTA Sendmail.",
      "E": "Todos los MTA habituales, incluidos Postfix y Exim, proporcionan un comando sendmail."
    },
    "answer": "E",
    "explanation": "La respuesta correcta es la E. Motivos:\n\nEl comando sendmail es una utilidad de envío de correo de un MTA (Mail Transfer Agent). Es una interfaz estándar de facto para enviar correos desde la línea de comandos, sea cual sea el MTA que se use. En lugar de obligar a los usuarios a aprender los comandos propios de cada MTA (como postdrop en Postfix o exim -bs en Exim), sendmail ofrece una interfaz coherente y predecible.\n\nLa mayoría de los MTA, incluidos los más populares como Postfix, Exim y el propio Sendmail, proporcionan un binario sendmail o un enlace simbólico a su programa de envío de correo. Esto permite que las aplicaciones y los scripts envíen correos sin necesidad de saber qué MTA se encarga de la entrega.\n\nLa opción A es incorrecta porque el procesamiento de la cola de correo lo realiza el propio demonio del MTA, no necesariamente el comando sendmail. La opción B es incorrecta porque relayctl no es un componente estándar relacionado con sendmail ni con systemd. La opción C es incorrecta porque el historial de la cola se consulta de forma distinta según el MTA, a menudo mediante herramientas de registro o comandos específicos de gestión de colas; sendmail se centra en el envío de mensajes. La opción D es incorrecta porque otros MTA pueden proporcionar el comando sendmail como capa de compatibilidad.\n\nEn esencia, el comando sendmail actúa como punto de entrada común y oculta la complejidad de la implementación del MTA subyacente. Esta abstracción es útil en entornos de nube, donde el MTA concreto puede cambiar sin necesidad de modificar las aplicaciones que envían correo.\n\nReferencias:\n\n• Compatibilidad de Postfix con sendmail: http://www.postfix.org/sendmail.1.html\n• Línea de comandos de Exim (compatibilidad con sendmail): https://www.exim.org/exim-html-current/doc/html/spec_html/ch-the_exim_command_line.html"
  },
  {
    "id": 63,
    "question": "¿Qué archivo del directorio de configuración de CUPS contiene la configuración de las impresoras?",
    "options": {
      "A": "cups-devices.conf",
      "B": "snmp.conf",
      "C": "printers.conf",
      "D": "printcap.conf",
      "E": "cupsd.conf"
    },
    "answer": "C",
    "explanation": "La respuesta correcta es la C, printers.conf. Este archivo, situado en el directorio de configuración de CUPS (Common Unix Printing System), normalmente /etc/cups, es el repositorio principal de la configuración específica de cada impresora. Almacena información esencial sobre cada impresora configurada, como su nombre, su URI de dispositivo (que identifica la ubicación de la impresora o el método de conexión), la información del controlador y la configuración predeterminada. Esta configuración controla aspectos como el tamaño del papel, la calidad de impresión y otras opciones. Cuando se envía un trabajo de impresión, CUPS consulta printers.conf para decidir cómo procesarlo y dirigirlo a la impresora adecuada con la configuración correcta.\n\nLa opción A, cups-devices.conf, no es un archivo de configuración estándar de CUPS. La opción B, snmp.conf, está relacionada con SNMP (Simple Network Management Protocol), que se usa para la supervisión de la red y para descubrir impresoras de red, no para configurar las impresoras. La opción D, printcap.conf, no es un archivo de CUPS: el formato printcap (/etc/printcap) es el de los sistemas de impresión antiguos anteriores a CUPS, y CUPS solo puede generar un /etc/printcap por compatibilidad. Por último, la opción E, cupsd.conf, configura el propio demonio de CUPS, es decir, los ajustes globales y las políticas de acceso del servidor de impresión, pero no la configuración concreta de cada impresora. Así pues, printers.conf es la ubicación definitiva de las definiciones de impresoras en CUPS, por lo que la C es la única respuesta correcta.\n\nPara profundizar, consulte la documentación oficial de CUPS:\n\n• Ayuda en línea de CUPS.\n• Archivos de configuración de CUPS (aunque se centra en cupsd.conf, menciona la función de los demás archivos de configuración)."
  },
  {
    "id": 64,
    "question": "RELLENE EL ESPACIO EN BLANCO: ¿Qué archivo procesa newaliases? (Especifique el nombre completo del archivo, incluida la ruta).",
    "options": {},
    "answer": "/etc/aliases",
    "explanation": "Nota: el original da /etc/mail/aliases, que es la ubicación usada por algunas instalaciones de Sendmail. La ubicación estándar (y la respuesta habitual en el examen LPI) es /etc/aliases."
  },
  {
    "id": 65,
    "question": "¿Cuáles de las siguientes son facilidades (facilities) de syslog? (Elija dos).",
    "options": {
      "A": "local5",
      "B": "accounting",
      "C": "mail",
      "D": "postmaster",
      "E": "remote"
    },
    "answer": "AC",
    "explanation": "Las respuestas correctas son A y C: local5 y mail. Las facilidades de syslog indican el origen de un mensaje de registro y ayudan a clasificar y filtrar los registros según su procedencia.\n\n• Las facilidades local0 a local7 están reservadas para uso local y suelen emplearlas aplicaciones o servicios personalizados. local5 es una de ellas.\n• mail es una facilidad estándar de syslog que se usa para registrar la actividad del servidor de correo: envío, recepción y otras operaciones de procesamiento del correo.\n• accounting no es una facilidad estándar de syslog.\n• postmaster no es una facilidad de syslog. Aunque postmaster es una dirección de correo estándar para las comunicaciones administrativas de un sistema de correo, no es una categoría de syslog.\n• remote tampoco es una facilidad de syslog válida.\n\nPor lo tanto, local5 (para una aplicación personalizada) y mail (para el subsistema de correo) son las dos facilidades de syslog válidas. Las facilidades permiten distinguir los mensajes de registro según su origen, de modo que los administradores pueden filtrarlos y analizarlos con más eficacia. Son fundamentales en los sistemas de registro centralizado.\n\nPara profundizar:\n\n• RFC 5424 – The Syslog Protocol: https://datatracker.ietf.org/doc/html/rfc5424\n• Documentación de rsyslog: https://www.rsyslog.com/doc/ (rsyslog es una implementación de syslog muy extendida)"
  },
  {
    "id": 66,
    "question": "¿Cuáles de los siguientes parámetros de journalctl se usan para limitar el intervalo de tiempo de la salida? (Elija dos).",
    "options": {
      "A": "--since=",
      "B": "--from=",
      "C": "--until=",
      "D": "--upto=",
      "E": "--date="
    },
    "answer": "AC",
    "explanation": "Las opciones correctas para limitar el intervalo de tiempo de la salida de journalctl son --since= y --until=. journalctl es la utilidad de línea de comandos para consultar el journal de systemd, el sistema de registro centralizado. Indicar un intervalo de tiempo permite filtrar los registros según el momento en que se generaron, lo que facilita diagnosticar problemas o analizar el comportamiento del sistema.\n\nEl parámetro --since= indica a journalctl que muestre los registros a partir de una fecha y hora determinadas. Puede ser una marca de tiempo concreta, un tiempo relativo como «yesterday» o «2 hours ago», u otros formatos legibles que reconoce systemd. Así se obtiene una vista centrada en los eventos posteriores a un momento dado.\n\nA la inversa, el parámetro --until= limita la salida a los registros generados antes de una fecha y hora determinadas. Igual que --since=, admite varios formatos de tiempo (marcas de tiempo, tiempos relativos y términos descriptivos) y establece el límite superior de las entradas mostradas.\n\nLas opciones --from= y --upto= no son parámetros válidos de journalctl. Aunque intuitivamente podrían parecer útiles, el comando no los reconoce y produce un error.\n\nLa opción --date= tampoco existe en journalctl. (El formato de las marcas de tiempo de la salida se controla con --output=, por ejemplo -o short-iso).\n\nUsar --since= y --until= juntos permite seleccionar con mucha precisión las entradas de un periodo concreto, lo que ayuda mucho a la resolución de problemas y a la supervisión del sistema. Esta capacidad de filtrado es esencial en entornos de nube, donde se generan grandes volúmenes de registros que hay que analizar de forma eficiente. Acotar los registros a una ventana de tiempo concreta reduce el ruido y permite centrarse en los eventos relevantes.\n\nPara profundizar, consulte la documentación oficial de systemd:\n\n• Manual de journalctl: https://www.freedesktop.org/software/systemd/man/journalctl.html\n• Sintaxis de tiempo de systemd: https://www.freedesktop.org/software/systemd/man/systemd.time.html"
  },
  {
    "id": 67,
    "question": "¿Qué es cierto respecto al archivo ~/.forward?",
    "options": {
      "A": "Si se configura correctamente, ~/.forward puede usarse para reenviar cada correo entrante a uno o varios destinatarios distintos.",
      "B": "Después de editar ~/.forward, el usuario debe ejecutar newaliases para que el servidor de correo tenga en cuenta los cambios.",
      "C": "Con ~/.forward, root puede configurar cualquier dirección de correo, mientras que los demás usuarios solo pueden configurar la suya.",
      "D": "Como ~/.forward pertenece al MTA y el usuario no puede escribir en él, debe editarse con el comando editaliases.",
      "E": "Por defecto, solo se procesan los archivos ~/.forward de los usuarios del grupo mailq; los de los demás usuarios se ignoran."
    },
    "answer": "A",
    "explanation": "La respuesta correcta es la A. El archivo .forward es un mecanismo estándar de los sistemas tipo Unix para reenviar el correo. Cuando un usuario tiene un archivo .forward en su directorio personal, el agente de transporte de correo (MTA), como Postfix o Sendmail, lo lee para decidir dónde entregar el correo entrante de ese usuario.\n\nLa opción A refleja correctamente esta funcionalidad. El archivo .forward puede contener una o varias direcciones de correo, y el MTA reenvía el correo entrante a todos los destinatarios indicados. Normalmente, cada línea del archivo representa un destino de reenvío distinto.\n\nLa opción B es incorrecta porque newaliases se usa para reconstruir la base de datos de alias, relacionada con los alias de correo de todo el sistema definidos en archivos como /etc/aliases, no con el reenvío de cada usuario configurado en .forward. Modificar .forward no requiere ejecutar newaliases.\n\nLa opción C es incorrecta porque el archivo .forward pertenece a cada usuario y está pensado para que este configure el reenvío de su propio correo. No existe una distinción como la que describe la opción entre lo que puede configurar root y lo que pueden configurar los demás usuarios.\n\nLa opción D es incorrecta porque .forward pertenece al usuario, no al MTA, y el usuario puede escribir en él (por eso puede configurar el reenvío). Además, editaliases no es un comando estándar.\n\nLa opción E es incorrecta porque todos los usuarios pueden usar el mecanismo .forward, no solo los de un grupo concreto como mailq. La pertenencia a grupos no suele restringir el uso de los archivos .forward.\n\nEn resumen, .forward ofrece a los usuarios una forma sencilla y directa de gestionar el reenvío de su correo en sistemas tipo Unix, indicando las direcciones de destino en un archivo de su directorio personal.\n\nReferencias:\n\n• Documentación de Postfix sobre .forward: http://www.postfix.org/local.8.html\n• Documentación de Sendmail (busque «.forward»): https://www.sendmail.com/sm/open_source/docs/"
  },
  {
    "id": 68,
    "question": "¿Cuáles de los siguientes comandos muestran una lista de los trabajos de la cola de impresión? (Elija dos).",
    "options": {
      "A": "cups --list",
      "B": "lprm -l",
      "C": "lpstat",
      "D": "lpr -q",
      "E": "lpq"
    },
    "answer": "CE",
    "explanation": "Las respuestas correctas son la C (lpstat) y la E (lpq). Justificación de cada una:\n\nlpstat es una utilidad estándar de línea de comandos diseñada para mostrar el estado actual del sistema de impresión, incluida la cola de impresión. Ofrece información sobre las impresoras, los trabajos y su estado. Forma parte de CUPS (Common UNIX Printing System), muy utilizado en Linux y otros sistemas tipo Unix, y permite ver qué trabajos están en cola, a qué impresora están asignados y en qué estado se encuentran (pendiente, imprimiendo, completado, etc.).\n\nlpq es otra utilidad de línea de comandos que muestra el contenido de la cola de impresión: los trabajos pendientes, sus propietarios, sus identificadores y, a veces, su tamaño. Aunque es un comando más antiguo que lpstat (procede del sistema de impresión BSD), sigue funcionando en muchos sistemas y sirve para mostrar el contenido de la cola.\n\nLa opción A, cups --list, no es un comando válido de CUPS: no existe un comando cups con una opción --list para mostrar la cola.\n\nLa opción B, lprm -l, es incorrecta. lprm se usa para eliminar trabajos de la cola de impresión, no para listarlos.\n\nLa opción D, lpr -q, también es incorrecta. lpr es el comando para enviar trabajos a la cola de impresión, y la opción -q no sirve para consultar el estado de la cola (en CUPS, lpr -q envía el trabajo en estado retenido).\n\nEn resumen, lpstat y lpq son los comandos estándar para ver el contenido y el estado de la cola de impresión en un entorno CUPS.\n\nReferencias:\n\n• Documentación de CUPS: https://www.cups.org/doc.html\n• Página de manual de lpstat: man lpstat\n• Página de manual de lpq: man lpq"
  },
  {
    "id": 69,
    "question": "En un sistema que usa systemd-journald, ¿cuáles de los siguientes comandos añaden el mensaje Howdy al registro del sistema? (Elija dos).",
    "options": {
      "A": "append Howdy",
      "B": "logger Howdy",
      "C": "systemd-cat echo Howdy",
      "D": "echo Howdy > /dev/journal",
      "E": "journalctl add Howdy"
    },
    "answer": "BC",
    "explanation": "Veamos por qué las opciones B y C son correctas y las demás no.\n\nLa opción B, logger Howdy, usa una utilidad estándar de línea de comandos diseñada específicamente para escribir mensajes en el registro del sistema. En un sistema con systemd-journald, el mensaje enviado por logger llega al journal, por lo que es la forma más sencilla de añadir «Howdy» al registro. Es una herramienta clásica de syslog que sigue funcionando con systemd.\n\nLa opción C, systemd-cat echo Howdy, también es correcta. systemd-cat ejecuta el comando indicado y redirige su salida estándar (stdout) y su salida de error (stderr) al journal del sistema. Al usar echo Howdy como comando, «Howdy» se escribe en stdout y systemd-cat lo envía al journal. systemd-cat permite capturar fácilmente en el registro del sistema la salida de cualquier comando.\n\nLa opción A, append Howdy, es incorrecta: no existe ningún comando estándar llamado append que escriba en el registro del sistema.\n\nLa opción D, echo Howdy > /dev/journal, es incorrecta: /dev/journal no existe como dispositivo estándar para escribir en el journal. (journald recibe los mensajes a través de sockets como /run/systemd/journal/socket y /dev/log, no mediante una simple redirección a un archivo de dispositivo).\n\nLa opción E, journalctl add Howdy, es incorrecta. journalctl es una herramienta para leer y filtrar el registro del sistema, no para añadir mensajes, y no tiene ningún subcomando add. Se usa para consultar el journal, examinar las entradas y gestionar su almacenamiento.\n\nEn resumen, logger es la forma tradicional y preferida de añadir mensajes sencillos, y systemd-cat permite capturar la salida de cualquier comando. Escribir directamente en un dispositivo o usar journalctl para añadir mensajes no son métodos válidos.\n\nReferencias:\n\n• logger: man logger o https://man7.org/linux/man-pages/man1/logger.1.html\n• systemd-cat: man systemd-cat o https://www.freedesktop.org/software/systemd/man/systemd-cat.html\n• journalctl: man journalctl o https://www.freedesktop.org/software/systemd/man/journalctl.html"
  },
  {
    "id": 70,
    "question": "¿Cuáles de las siguientes opciones del archivo de configuración de chrony definen fuentes de hora remotas? (Elija dos).",
    "options": {
      "A": "source",
      "B": "clock",
      "C": "remote",
      "D": "pool",
      "E": "server"
    },
    "answer": "DE",
    "explanation": "Las respuestas son D y E porque pool y server son las directivas que se usan en chrony.conf para definir fuentes de hora remotas, concretamente servidores NTP (Network Time Protocol). chrony sincroniza el reloj del sistema con estas fuentes remotas.\n\nLa directiva server especifica un único servidor NTP, identificado por su nombre de host o su dirección IP, que se usará como fuente de hora. Con ella, el cliente chrony se conecta directamente a un servidor concreto.\n\nLa directiva pool, en cambio, especifica un conjunto (pool) de servidores NTP. chrony resuelve el nombre del pool para descubrir los servidores disponibles y selecciona dinámicamente entre ellos, lo que aporta redundancia y reparto de carga. chrony usa un sistema de ponderación y preferencias para determinar los mejores servidores del pool.\n\nLa opción A, source, no es una directiva válida de chrony para especificar fuentes de hora remotas. Las opciones B, clock, y C, remote, tampoco son directivas estándar para definir fuentes de hora en chrony.\n\nEn esencia, tanto pool como server indican a chrony dónde encontrar relojes externos fiables para sincronizar la hora, algo esencial para mantener la hora exacta en entornos de red, incluidas las infraestructuras en la nube. (Existe además la directiva peer, para relaciones simétricas entre servidores NTP).\n\nReferencias:\n\n• Documentación de chrony: https://chrony-project.org/\n• Chrony en ArchWiki: https://wiki.archlinux.org/title/Chrony"
  },
  {
    "id": 71,
    "question": "RELLENE EL ESPACIO EN BLANCO: ¿Qué comando se usa para sincronizar el reloj de hardware con el reloj del sistema? (Especifique solo el comando, sin ruta ni parámetros).",
    "options": {},
    "answer": "hwclock",
    "explanation": ""
  },
  {
    "id": 72,
    "question": "¿Cuál de las siguientes situaciones detecta y corrige un cliente NTP?",
    "options": {
      "A": "La desviación de tiempo entre el reloj del sistema y el reloj de hardware del equipo.",
      "B": "La ubicación física y la configuración de la zona horaria.",
      "C": "Los cambios de zona horaria de la ubicación actual del equipo.",
      "D": "El ajuste necesario para el horario de verano.",
      "E": "La desviación de tiempo entre el reloj del sistema y el reloj de referencia."
    },
    "answer": "E",
    "explanation": "La respuesta correcta es la E, «La desviación de tiempo entre el reloj del sistema y el reloj de referencia», porque los clientes NTP (Network Time Protocol) están diseñados específicamente para sincronizar el reloj de un sistema con una fuente de hora fiable, llamada reloj de referencia. Este proceso de sincronización corrige directamente la diferencia o desviación entre la hora del sistema local y la del reloj de referencia. NTP intenta minimizar esa diferencia para que el reloj del sistema sea lo más exacto posible.\n\nLas opciones A, B, C y D son incorrectas porque describen funciones ajenas al propósito central de NTP. NTP no corrige directamente la desviación entre el reloj del sistema y el reloj de hardware (A); de eso se encargan otros mecanismos, como hwclock. NTP tampoco gestiona la ubicación física ni la configuración de la zona horaria (B), que suelen configurarse por separado con herramientas como timedatectl. Los cambios de zona horaria (C) tampoco los gestiona NTP: aunque la zona horaria está relacionada con la hora, requiere una configuración externa propia de la ubicación del sistema. Del mismo modo, aunque NTP proporciona una base de tiempo exacta, el ajuste del horario de verano (D) lo gestiona la configuración de zona horaria del sistema, no NTP. El reloj del sistema se sincroniza con el servidor de hora y después la configuración de zona horaria calcula la hora mostrada teniendo en cuenta el horario de verano.\n\nNTP funciona intercambiando información horaria con servidores de hora designados, que a su vez suelen sincronizarse con fuentes aún más precisas, como relojes atómicos o receptores GPS. El cliente NTP calcula los retardos de red y los desfases a partir de esta comunicación y ajusta el reloj del sistema en consecuencia. Esto hace que NTP sea fundamental para mantener la hora exacta en todos los sistemas de una red, sobre todo en entornos distribuidos y en la nube, donde la coordinación de operaciones es crítica. La sincronización por NTP es esencial para el análisis de registros, las transacciones distribuidas, los protocolos de seguridad y muchas otras operaciones que dependen de marcas de tiempo coherentes.\n\nReferencias para profundizar:\n\n• Sitio oficial de NTP: https://www.ntp.org/\n• RFC 5905 (NTP versión 4): https://datatracker.ietf.org/doc/html/rfc5905\n• Understanding NTP: https://www.redhat.com/sysadmin/understanding-ntp"
  },
  {
    "id": 73,
    "question": "Si existe un alias ls, ¿cuál de los siguientes comandos actualiza el alias para que apunte al comando ls -l en lugar de a su destino actual?",
    "options": {
      "A": "set ls='ls -l'",
      "B": "alias ls='ls -l'",
      "C": "alias --force ls='ls -l'",
      "D": "alias --update ls ls='ls -l'",
      "E": "realias ls='ls -l'"
    },
    "answer": "B",
    "explanation": "La respuesta correcta es la B, alias ls='ls -l'.\n\nLos alias en Linux son atajos o nombres alternativos para comandos. El comando alias está diseñado específicamente para crear y modificar estos atajos. La sintaxis alias nombre='comando' define o redefine el alias nombre para que ejecute el comando indicado. En este caso, alias ls='ls -l' redefine el alias ls para que ejecute ls -l en lugar de su destino anterior. No hace falta ninguna opción especial como --force o --update: basta con usar alias con el mismo nombre y un comando distinto para actualizarlo.\n\nLa opción A, set ls='ls -l', no define un alias. En bash, set con argumentos establece los parámetros posicionales (en este caso, $1 pasaría a valer ls=ls -l), por lo que no consigue el efecto deseado.\n\nLas opciones C y D intentan usar opciones de alias que no existen: alias no admite opciones como --force o --update.\n\nLa opción E, realias ls='ls -l', usa un comando inexistente, realias, que no es un comando estándar de Linux para gestionar alias.\n\nPor lo tanto, la forma más sencilla y correcta de actualizar un alias existente es usar alias con la nueva definición.\n\nReferencias:\n\n• https://man7.org/linux/man-pages/man1/alias.1p.html\n• https://www.gnu.org/software/bash/manual/html_node/Aliases.html"
  },
  {
    "id": 74,
    "question": "¿Cuál de los siguientes comandos guarda la salida del comando date en la variable de shell mydate?",
    "options": {
      "A": "mydate=date",
      "B": "mydate=exec date",
      "C": "mydate=$((date))",
      "D": "mydate=$(date)",
      "E": "mydate=$ date"
    },
    "answer": "D",
    "explanation": "La respuesta correcta es la D, porque usa la sustitución de comandos para capturar la salida de date y asignarla a la variable mydate. Veamos por qué las demás opciones son incorrectas y por qué funciona la D:\n\n• A. mydate=date asigna la cadena «date» a la variable mydate, no la salida del comando date. Es una simple asignación de cadena.\n• B. mydate=exec date no captura la salida. La shell lo interpreta como la ejecución del comando date con la variable de entorno temporal mydate=exec (la palabra exec no se trata aquí como orden interna). La salida de date se muestra en pantalla y mydate no queda definida en la shell.\n• C. mydate=$((date)) es una expansión aritmética. La sintaxis $((...)) evalúa expresiones aritméticas; dentro de ella, date se trata como el nombre de una variable, no como un comando, por lo que el resultado sería un número (0 si la variable no existe), no la fecha.\n• E. mydate=$ date tampoco funciona: por el espacio, la shell ejecuta el comando date con la variable de entorno temporal mydate='$', así que la fecha se muestra en pantalla pero no se guarda en la variable. (Si se pretendía escribir mydate=$date, se expandiría el valor de una variable llamada date, que normalmente está vacía; en ningún caso se ejecutaría el comando).\n\nLa opción D, mydate=$(date), usa la sustitución de comandos. La construcción $( ) ejecuta el comando que hay entre paréntesis (en este caso, date) y sustituye toda la expresión por la salida estándar del comando, que después se asigna a la variable mydate. En esencia, la shell ejecuta date, captura su salida y la asigna a mydate. Es la forma estándar de guardar la salida de un comando en una variable dentro de un script. (La forma antigua equivalente es con comillas invertidas: mydate=date ).\n\nPara profundizar:\n\n• Manual de GNU Bash – Command Substitution: https://www.gnu.org/software/bash/manual/html_node/Command-Substitution.html\n• Advanced Bash-Scripting Guide – Command Substitution: https://www.tldp.org/LDP/abs/html/commandsub.html\n\nEstos recursos ofrecen información completa sobre la sustitución de comandos y otras técnicas de scripting en la shell."
  },
  {
    "id": 75,
    "question": "¿Qué información muestra el comando echo $??",
    "options": {
      "A": "El ID de proceso del comando echo.",
      "B": "El valor de salida del comando ejecutado inmediatamente antes de echo.",
      "C": "El ID de proceso que se usará para el siguiente comando.",
      "D": "El valor de salida del comando echo.",
      "E": "El ID de proceso de la shell actual."
    },
    "answer": "B",
    "explanation": "El comando echo $? muestra el estado o código de salida del último comando ejecutado en primer plano. En los scripts de shell y en la línea de comandos, todo comando devuelve al terminar un valor numérico al sistema operativo. Este valor, llamado estado de salida, indica si el comando se ejecutó correctamente o si encontró errores. En general, 0 indica éxito y los valores distintos de cero indican distintos tipos de fallo.\n\n$? es, en la mayoría de las shells tipo Unix, una variable especial que contiene automáticamente el estado de salida del último comando. Al ejecutar echo $?, se imprime el valor guardado en ella. Lo importante es que refleja el estado de salida del comando anterior, no el del propio echo, ni el de un comando futuro, ni ningún ID de proceso. El PID del comando echo, del comando siguiente o de la shell actual no tiene nada que ver con $? (el PID de la shell actual es $$).\n\nLos entornos de nube dependen mucho de la automatización mediante scripts, por lo que entender los estados de salida es fundamental para despliegues robustos y un buen manejo de errores. Por ejemplo, un script puede comprobar el estado de salida de un comando de despliegue y pasar al siguiente paso solo si el despliegue terminó bien (estado 0).\n\nPor lo tanto, la respuesta correcta es que echo $? muestra el valor de salida del comando ejecutado inmediatamente antes de echo.\n\nReferencias:\n\n• https://www.gnu.org/software/bash/manual/bash.html#Special-Parameters\n• https://tldp.org/LDP/abs/html/exitcodes.html"
  },
  {
    "id": 76,
    "question": "¿Cuál de los siguientes archivos no lee directamente una shell Bash de inicio de sesión?",
    "options": {
      "A": "~/.bashrc",
      "B": "~/.bash_profile",
      "C": "~/.bash_login",
      "D": "~/.profile",
      "E": "/etc/profile"
    },
    "answer": "A",
    "explanation": "La respuesta correcta es la A, ~/.bashrc. Las shells Bash de inicio de sesión ejecutan una secuencia concreta de archivos de configuración al arrancar. Cuando un usuario inicia sesión, se lanza una shell de inicio de sesión que primero lee /etc/profile. Este perfil global establece variables de entorno y opciones de la shell para todos los usuarios. Después, Bash busca un perfil específico del usuario en su directorio personal: comprueba ~/.bash_profile, ~/.bash_login y ~/.profile, en ese orden, y ejecuta solo el primero que encuentra. Estos archivos suelen personalizar el entorno, los alias y las funciones del usuario.\n\n~/.bashrc, en cambio, se ejecuta al iniciar una shell interactiva que no es de inicio de sesión. Esto suele ocurrir al abrir una nueva ventana de terminal en un entorno gráfico o al iniciar una shell dentro de otra. Se usa habitualmente para definir alias, funciones y opciones necesarias en las sesiones interactivas. La distinción importante es que las shells de inicio de sesión leen /etc/profile y uno de ~/.bash_profile, ~/.bash_login o ~/.profile, mientras que las shells que no son de inicio de sesión leen ~/.bashrc.\n\nPor lo tanto, una shell Bash de inicio de sesión no lee .bashrc directamente, aunque a menudo lo carga de forma indirecta desde alguno de los archivos de perfil, sobre todo .bash_profile. Es habitual incluir en .bash_profile la siguiente línea para cargar .bashrc:\n\nif [ -f ~/.bashrc ]; then . ~/.bashrc; fi\n\nAsí, la configuración de .bashrc también está disponible en las shells de inicio de sesión.\n\nLecturas recomendadas:\n\n• Archivos de inicio de Bash: https://www.gnu.org/software/bash/manual/html_node/Bash-Startup-Files.html\n• Understanding Bash Startup Files: https://linuxconfig.org/understanding-bash-startup-files"
  },
  {
    "id": 77,
    "question": "¿Qué es cierto sobre el archivo .profile del directorio personal de un usuario?",
    "options": {
      "A": "Debe ser ejecutable.",
      "B": "Debe llamar al binario de la shell de inicio de sesión.",
      "C": "Debe usar una sintaxis válida de script de shell.",
      "D": "Debe empezar con un shebang.",
      "E": "Solo debe poder leerlo su propietario."
    },
    "answer": "C",
    "explanation": "La respuesta correcta es la C: debe usar una sintaxis válida de script de shell.\n\nEl archivo .profile es un script de shell que se ejecuta cuando un usuario inicia sesión en el sistema mediante una shell de inicio de sesión. Como lo interpreta una shell (bash, sh, zsh, etc.), debe respetar las reglas de sintaxis de ese lenguaje. Si la sintaxis no es válida, la shell producirá errores y puede que no configure correctamente el entorno del usuario, con comportamientos inesperados o funciones que no operan.\n\nLa opción A es incorrecta porque .profile no necesita ser ejecutable: la propia shell lee y ejecuta su contenido (lo carga con source), por lo que no hace falta el permiso de ejecución.\n\nLa opción B es incorrecta porque .profile no llama al binario de la shell de inicio de sesión. Es el proceso de inicio de sesión del sistema el que invoca la shell, y esta carga después .profile.\n\nLa opción D no es correcta. Aunque los scripts de shell pueden empezar con un shebang (por ejemplo, #!/bin/bash), no es un requisito para .profile, ya que no se ejecuta como programa independiente sino que lo lee la propia shell.\n\nLa opción E es incorrecta porque basta con que el archivo sea legible por el propio usuario (la shell de inicio de sesión se ejecuta con su identidad); no es obligatorio que solo pueda leerlo el propietario. Los permisos exactos pueden variar según las políticas de seguridad.\n\nEn resumen, .profile es un componente fundamental de la configuración del entorno de shell de un usuario, y su validez como script de shell es esencial para un inicio de sesión correcto y un entorno bien configurado.\n\nRecursos:\n\n• Archivos de inicio de Bash: https://www.gnu.org/software/bash/manual/html_node/Bash-Startup-Files.html\n• Archivos de inicio de zsh: https://zsh.sourceforge.io/Doc/Release/Startup_002fShutdown-Files.html"
  },
  {
    "id": 78,
    "question": "¿Qué es cierto respecto a la instrucción que empieza por #! en la primera línea de un script? (Elija dos).",
    "options": {
      "A": "Impide que el script se ejecute hasta que se elimine el !.",
      "B": "Provoca la instalación del intérprete del script.",
      "C": "Especifica la ruta y los argumentos del intérprete que se usa para ejecutar el script.",
      "D": "Define la codificación de caracteres del script.",
      "E": "Es un comentario que el intérprete del script ignora."
    },
    "answer": "CE",
    "explanation": "Corrección: el original da como respuesta B y C, pero su propia explicación reconoce que el shebang no instala el intérprete, así que la B es falsa. Las respuestas correctas son C y E.\nLa instrucción que empieza por #! (shebang) en la primera línea de un script es fundamental para determinar cómo se ejecuta el script en los sistemas tipo Unix.\n\nLa opción C es correcta porque el shebang indica tanto la ruta del intérprete (por ejemplo, /usr/bin/python3) como los argumentos que se le pasan al ejecutar el script (por ejemplo, #!/usr/bin/env python3, donde python3 es un argumento de env). #!/usr/bin/python3 invoca directamente a Python 3, mientras que #!/usr/bin/env python3 usa env para encontrar el primer ejecutable de Python 3 en el PATH del usuario, lo que suele ser más portable.\n\nLa opción E también es correcta. Es el kernel (el sistema operativo) el que interpreta la línea #! para decidir qué intérprete lanzar. Una vez que el intérprete (bash, Python, Perl, etc.) lee el script, esa línea empieza por #, que en esos lenguajes indica un comentario, así que el intérprete la ignora.\n\nLa opción A es incorrecta: la presencia de #! no impide la ejecución; al contrario, su ausencia o una configuración incorrecta puede provocar errores o comportamientos inesperados. La opción B es incorrecta: el shebang no instala el intérprete; si no está instalado, el script simplemente no se ejecutará hasta que se instale. La opción D es incorrecta porque la codificación de caracteres se gestiona con otros mecanismos (por ejemplo, la configuración regional o declaraciones de codificación dentro del script).\n\nReferencias:\n\n• Shebang (Unix): https://en.wikipedia.org/wiki/Shebang_(Unix)\n• Comando env: https://www.gnu.org/software/coreutils/manual/html_node/env-invocation.html"
  },
  {
    "id": 79,
    "question": "¿Qué salida produce el comando seq 1 5 20?",
    "options": {
      "A": "1 5 10 15 20",
      "B": "1 6 11 16",
      "C": "1 2 3 4 5",
      "D": "2 7 12 17",
      "E": "5 10 15 20"
    },
    "answer": "B",
    "explanation": "Nota: las opciones A, C, D y E se reconstruyeron para el simulador a partir del primer número que conservaba el original.\n\nNota: en el original las opciones están incompletas: cada opción era una lista de números en varias líneas y solo se conservó el primer número. La opción B corresponde a la salida correcta: 1, 6, 11, 16 (un número por línea).\n\nEl comando seq genera una secuencia de números. Su sintaxis general es seq [PRIMERO [INCREMENTO]] ÚLTIMO. En este caso, seq 1 5 20 usa los tres argumentos:\n\n• 1 es el número inicial (PRIMERO).\n• 5 es el incremento (INCREMENTO).\n• 20 es el número final (ÚLTIMO).\n\nEl comando empieza en 1, suma 5 cada vez y se detiene cuando el número supera 20:\n\n• 1 + 5 = 6\n• 6 + 5 = 11\n• 11 + 5 = 16\n• 16 + 5 = 21 (supera 20, así que no se incluye)\n\nPor lo tanto, la salida es:\n\n1\n6\n11\n16\n\nEl comando seq se usa mucho en scripts de shell para bucles y para generar listas numéricas.\n\nReferencias:\n\n• seq – GNU coreutils: https://www.gnu.org/software/coreutils/manual/html_node/seq-invocation.html\n• Comando seq en Linux: https://www.geeksforgeeks.org/linux-seq-command/"
  },
  {
    "id": 80,
    "question": "¿Cuál de los siguientes comandos lista todas las variables y funciones definidas en Bash?",
    "options": {
      "A": "env",
      "B": "export",
      "C": "env -a",
      "D": "set",
      "E": "echo $ENV"
    },
    "answer": "D",
    "explanation": "La respuesta correcta es la D, set. Justificación detallada:\n\nset es un comando interno de Bash muy versátil que tiene varios usos, pero, en lo que importa para esta pregunta, sin argumentos lista todas las variables de la shell (tanto las de entorno como las propias de la shell) y todas las funciones definidas en ella. El listado incluye las variables definidas explícitamente mediante asignación o por otros mecanismos, y las funciones creadas con la palabra clave function o con la sintaxis nombre().\n\nLa opción A, env, lista las variables de entorno, que son un subconjunto de todas las variables: las que se pasan a los procesos hijos. No muestra las variables de shell que no se han exportado, por lo que no muestra todas las variables y funciones definidas.\n\nLa opción B, export, se usa para marcar variables como variables de entorno, de modo que las hereden los subprocesos. Sin argumentos (o con -p) lista solo las variables exportadas, no todas.\n\nLa opción C, env -a, no es un uso estándar del comando env. La opción -a existe en algunas implementaciones con otro fin (indicar el nombre del programa, argv[0]), pero en ningún caso hace que env liste todas las variables.\n\nLa opción E, echo $ENV, intenta mostrar el valor de una variable llamada ENV. Solo funciona si esa variable está definida y, aun así, solo muestra el valor de esa única variable.\n\nset sin argumentos muestra una lista completa de las variables y funciones de la shell, por lo que es la opción correcta para listar todas las variables y funciones definidas en Bash. Es una herramienta fundamental para inspeccionar el estado de la shell.\n\nReferencia:\n\n• Manual de referencia de GNU Bash: https://www.gnu.org/software/bash/manual/bash.html#index-set"
  },
  {
    "id": 81,
    "question": "¿Qué información de una cuenta de usuario se modifica con el comando chage?",
    "options": {
      "A": "La propiedad predeterminada de los archivos nuevos.",
      "B": "La pertenencia a grupos.",
      "C": "El conjunto de comandos disponibles para el usuario.",
      "D": "La información de caducidad de la contraseña.",
      "E": "Los permisos predeterminados de los archivos nuevos."
    },
    "answer": "D",
    "explanation": "El comando chage está diseñado específicamente para gestionar la información de envejecimiento y caducidad de las contraseñas de las cuentas de usuario en Linux y otros sistemas tipo Unix. Permite a los administradores controlar cuándo se obliga a los usuarios a cambiar su contraseña, cuánto tiempo es válida una contraseña y cuándo se desactiva una cuenta por caducidad de la contraseña.\n\nLa opción A, «La propiedad predeterminada de los archivos nuevos», no la gestiona chage: el propietario de los archivos nuevos depende del usuario y del grupo que los crean (y puede cambiarse después con chown). La opción B, «La pertenencia a grupos», se gestiona con comandos como usermod o editando directamente los archivos de configuración de grupos. La opción C, «El conjunto de comandos disponibles para el usuario», está relacionada con los mecanismos de control de acceso y, quizá, con los archivos de configuración de la shell del usuario, no con chage. La opción E, «Los permisos predeterminados de los archivos nuevos», se controla con umask.\n\nLas funciones principales de chage son establecer la fecha del último cambio de contraseña, el número mínimo de días antes de poder cambiarla, el número máximo de días que es válida, el número de días de aviso antes de que caduque y el periodo de inactividad de la cuenta. Estos atributos influyen directamente en la seguridad y el control administrativo de las cuentas al aplicar políticas de contraseñas.\n\nPor lo tanto, la respuesta correcta es la D, porque chage modifica directamente la información de caducidad de la contraseña, lo que mejora la seguridad del sistema al impedir que los usuarios usen la misma contraseña indefinidamente. El envejecimiento de contraseñas es un componente importante de una estrategia de seguridad sólida.\n\nPara profundizar, consulte la página de manual de chage en su sistema (man chage) o la documentación en línea:\n\n• Comando chage: https://man7.org/linux/man-pages/man1/chage.1.html"
  },
  {
    "id": 82,
    "question": "¿Qué comando se usa para establecer restricciones sobre el tamaño del archivo core que se crea para un usuario cuando un programa falla?",
    "options": {
      "A": "core",
      "B": "edquota",
      "C": "quota",
      "D": "ulimit",
      "E": "ktrace"
    },
    "answer": "D",
    "explanation": "La respuesta correcta es la D, ulimit. Este comando está diseñado específicamente para controlar los límites de recursos de los procesos iniciados por la shell o por un usuario. Entre esos límites está el tamaño máximo de los archivos core, que son volcados de memoria que se crean cuando un programa termina de forma anómala (falla). Con ulimit -c <tamaño> se fija el tamaño máximo de los archivos core; con 0 se desactiva por completo su creación.\n\nedquota y quota están relacionados con la gestión de cuotas de disco, es decir, con limitar el espacio en disco que usan usuarios y grupos, no con el tamaño de los volcados core. core no es un comando estándar. Aunque los límites de espacio en disco pueden afectar indirectamente a que se escriba un volcado completo, estos comandos no controlan el tamaño de los archivos core. ktrace es una utilidad de rastreo de llamadas al sistema (de BSD) que registra las llamadas que hace un proceso, y tampoco tiene relación con el tamaño de los archivos core.\n\nLos límites de recursos, incluido el tamaño de los archivos core, son fundamentales para mantener la estabilidad del sistema y evitar el agotamiento de recursos, sobre todo en entornos multiusuario o en la nube, donde los recursos suelen compartirse. Limitar el tamaño de los archivos core evita que un solo proceso que falla llene todo el disco, y ulimit ofrece una forma sencilla de aplicar esos límites. En la nube, además, los volcados core descontrolados pueden ocupar mucho almacenamiento y aumentar los costes.\n\nReferencias:\n\n• https://man7.org/linux/man-pages/man1/ulimit.1p.html\n• help ulimit en bash"
  },
  {
    "id": 83,
    "question": "¿Cómo mejoran las contraseñas shadow la seguridad respecto a las contraseñas estándar sin shadow?",
    "options": {
      "A": "Los usuarios normales no tienen acceso a los hashes de las contraseñas shadow.",
      "B": "Cada contraseña shadow es válida durante 45 días y después debe cambiarse.",
      "C": "La clave de host del sistema se usa para cifrar todas las contraseñas shadow.",
      "D": "Las contraseñas shadow siempre se combinan con una clave pública que debe coincidir con la clave privada del usuario.",
      "E": "Las contraseñas shadow se guardan en texto plano y se puede comprobar si son débiles."
    },
    "answer": "A",
    "explanation": "Justificación detallada de por qué la opción A es la respuesta correcta:\n\nLas contraseñas shadow mejoran notablemente la seguridad frente a las contraseñas tradicionales sin shadow porque restringen el acceso a los hashes de las contraseñas. En un sistema tradicional, los hashes se guardan en el archivo /etc/passwd, que pueden leer todos los usuarios, de modo que cualquier usuario del sistema puede obtenerlos. Aunque las contraseñas estén cifradas mediante hash (una transformación unidireccional), un atacante puede intentar descifrarlas sin conexión con ataques de diccionario o de fuerza bruta, que son mucho más fáciles si dispone de los hashes.\n\nLas contraseñas shadow resuelven esta vulnerabilidad trasladando los hashes a un archivo separado, normalmente /etc/shadow, que solo pueden leer root (y, en algunas distribuciones, los miembros del grupo shadow). Esta restricción impide que los usuarios normales accedan directamente a los hashes. Es un principio de seguridad fundamental: limitar el acceso a los datos sensibles reduce la superficie de ataque y el riesgo de compromiso.\n\nAl hacer que los hashes sean inaccesibles para los usuarios normales, el atacante tiene que conseguir antes privilegios de root (o pertenecer al grupo shadow) para intentar descifrar las contraseñas, lo que dificulta mucho el ataque.\n\nLas opciones B, C, D y E son incorrectas. La B es incorrecta porque la política de caducidad de las contraseñas es configurable y no es una propiedad inherente de las contraseñas shadow. La C es incorrecta porque la clave de host se usa en la autenticación SSH, no para cifrar las contraseñas shadow. La D es incorrecta porque las contraseñas shadow no usan criptografía de clave pública. La E es incorrecta porque las contraseñas shadow no se guardan en texto plano, sino como hashes.\n\nLecturas recomendadas:\n\n• Documentación de Red Hat sobre la seguridad de las contraseñas: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/security_guide/sec-understanding_password_security\n• Página de manual de shadow: man 5 shadow, que describe el formato del archivo shadow."
  },
  {
    "id": 84,
    "question": "Después de editar la configuración de TCP Wrapper para conceder acceso a un servicio a determinados hosts, ¿cuándo entran en vigor estos cambios?",
    "options": {
      "A": "La nueva configuración entra en vigor tras reiniciar el servicio correspondiente.",
      "B": "La nueva configuración entra en vigor en el siguiente reinicio del sistema.",
      "C": "La nueva configuración entra en vigor cuando se cierra la última conexión establecida con el servicio.",
      "D": "La nueva configuración entra en vigor tras reiniciar el servicio tcpd.",
      "E": "La nueva configuración entra en vigor inmediatamente para todas las conexiones nuevas."
    },
    "answer": "E",
    "explanation": "La respuesta correcta es la E: la nueva configuración entra en vigor inmediatamente para todas las conexiones nuevas.\n\nTCP Wrapper, controlado principalmente por los archivos hosts.allow y hosts.deny, actúa como una primera capa de control de acceso antes de entregar la conexión al demonio del servicio. Cuando se intenta una nueva conexión a un servicio protegido por TCP Wrapper (gestionado con tcpd o con libwrap), se consultan estos archivos de configuración en orden. Esta comprobación se hace en cada nuevo intento de conexión.\n\nPor lo tanto, cualquier cambio en hosts.allow o hosts.deny se aplica en el siguiente intento de conexión. No hace falta reiniciar el servicio ni tcpd (que, de hecho, no es un demonio permanente), ni esperar a que se cierren las conexiones existentes. Las reglas se vuelven a evaluar con cada solicitud entrante: si una regla coincide, la conexión se permite y pasa al servicio, o se deniega directamente.\n\nLas opciones A, B, C y D son incorrectas porque suponen un retraso o una acción previa (reinicio del servicio o del sistema) para que los cambios surtan efecto. TCP Wrapper está diseñado para aplicar las reglas de control de acceso de inmediato a las conexiones nuevas.\n\nPara más información:\n\n• Página de manual de tcpd: man tcpd (en un sistema Linux con TCP Wrapper instalado).\n• Páginas de manual de hosts.allow y hosts.deny: man hosts.allow, man hosts.deny.\n• Networking HOWTO (algo antiguo, pero ofrece un buen resumen de TCP Wrapper y su finalidad): https://www.tldp.org/HOWTO/Networking-Overview-HOWTO/x644.html"
  },
  {
    "id": 85,
    "question": "¿Qué es cierto respecto a las claves SSH públicas y privadas? (Elija dos).",
    "options": {
      "A": "Para cada cuenta de usuario hay exactamente un par de claves que puede usarse para iniciar sesión en ella.",
      "B": "La clave privada nunca debe revelarse a nadie.",
      "C": "Se pueden generar varias claves públicas distintas para la misma clave privada.",
      "D": "Para mantener la confidencialidad de la clave privada, el par de claves SSH debe crearlo su propietario.",
      "E": "Para permitir los inicios de sesión remotos, la clave privada del usuario debe copiarse al servidor remoto."
    },
    "answer": "BD",
    "explanation": "La respuesta identifica dos aspectos fundamentales de los pares de claves SSH: la confidencialidad de la clave privada y la creación adecuada del par de claves. Veamos por qué es correcta cada opción elegida.\n\nB. La clave privada nunca debe revelarse a nadie.\n\nEs una regla de oro de la gestión de claves SSH. La clave privada es análoga a una contraseña: quien la posee puede autenticarse como el usuario asociado al par de claves. Si una clave privada se ve comprometida (revelada o robada), un atacante puede obtener acceso no autorizado a los sistemas a los que da acceso esa clave, lo que puede provocar filtraciones de datos, compromisos de sistemas y otros incidentes. Por eso la confidencialidad de la clave privada es primordial.\n\nD. Para mantener la confidencialidad de la clave privada, el par de claves SSH debe crearlo su propietario.\n\nLo ideal es que cada usuario genere su propio par de claves en un dispositivo de confianza que controle. Así la clave privada nunca queda expuesta en sistemas potencialmente no fiables. Si un administrador genera el par en un servidor y luego se lo entrega al usuario, existe el riesgo de que la clave privada haya quedado registrada o almacenada en algún lugar, comprometiendo su confidencialidad. La buena práctica es generar el par de claves en local y transferir al servidor únicamente la clave pública.\n\nPor qué las demás opciones son incorrectas:\n\n• A. Es falso. Un usuario puede tener varios pares de claves, y una cuenta en un servidor puede autorizar varias claves públicas en el archivo ~/.ssh/authorized_keys.\n• C. Es falso. Cada clave privada corresponde a una única clave pública; claves públicas distintas requieren claves privadas distintas.\n• E. Es incorrecto y muy peligroso. En el servidor remoto solo se coloca la clave pública (en el archivo ~/.ssh/authorized_keys de la cuenta). La clave privada permanece protegida en el equipo cliente. Copiarla al servidor anularía el sentido de la autenticación por clave, ya que se convertiría en el equivalente a una contraseña almacenada en el servidor.\n\nPara profundizar:\n\n• Documentación de OpenSSH: https://www.openssh.com/ (secciones sobre generación de claves y autenticación).\n• Tutorial de DigitalOcean sobre claves SSH: https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-20-04 (guía práctica para generar y usar claves SSH)."
  },
  {
    "id": 86,
    "question": "¿Cuál de los siguientes comandos encuentra todos los archivos propiedad de root que tienen activado el bit SetUID?",
    "options": {
      "A": "find / -user root -perm -4000",
      "B": "find / -user 0 -mode +s",
      "C": "find / -owner root -setuid",
      "D": "find / -owner 0 -permbits 0x100000000",
      "E": "find / --filter uid=1 --filter pers=u+s"
    },
    "answer": "A",
    "explanation": "La respuesta correcta es la A, find / -user root -perm -4000. Motivos:\n\nEl comando find se usa para localizar archivos dentro de una jerarquía de directorios según los criterios indicados.\n\n• -user root: filtra los resultados para incluir solo los archivos cuyo propietario es el usuario root.\n• -perm -4000: es la parte clave para encontrar archivos con el bit SetUID (SUID) activado. La opción -perm filtra los archivos según sus permisos. El guion inicial (-) significa «al menos estos bits de permiso están activados». El valor octal 4000 corresponde al bit SUID. Por tanto, -perm -4000 selecciona los archivos que tienen activado el bit SUID, independientemente del resto de permisos. (También puede escribirse -perm -u+s).\n\nLa opción B, find / -user 0 -mode +s, es incorrecta porque -mode no es una opción de find. Además, +s por sí solo sería ambiguo, ya que la s puede referirse tanto al bit SetUID como al SetGID (el sticky bit se representa con t).\n\nLa opción C, find / -owner root -setuid, es incorrecta porque ni -owner ni -setuid son opciones válidas de find, que usa -user para el propietario y -perm para comprobar los permisos, incluidos los bits especiales.\n\nLa opción D, find / -owner 0 -permbits 0x100000000, es incorrecta. El valor 0x100000000 es mucho mayor que el que representa el bit SUID (0x800 en hexadecimal, 4000 en octal). Además, -permbits no es una opción estándar de find.\n\nLa opción E, find / --filter uid=1 --filter pers=u+s, es incorrecta porque --filter no es una opción de find. Además, el UID de root es 0, no 1.\n\nEl bit SUID permite que un programa se ejecute con los privilegios del propietario del archivo (en este caso, root) en lugar de con los del usuario que lo ejecuta. Es una característica sensible desde el punto de vista de la seguridad, por lo que localizar estos archivos es importante para la administración del sistema y las auditorías de seguridad.\n\nReferencias:\n\n• man find (en un sistema Linux/Unix)\n• Documentación de GNU findutils: https://www.gnu.org/software/findutils/"
  },
  {
    "id": 87,
    "question": "RELLENE EL ESPACIO EN BLANCO: ¿Qué comando se usa para añadir claves privadas de OpenSSH a una instancia de ssh-agent en ejecución? (Especifique solo el nombre del comando, sin ruta).",
    "options": {},
    "answer": "ssh-add",
    "explanation": ""
  },
  {
    "id": 88,
    "question": "RELLENE EL ESPACIO EN BLANCO: ¿Qué directorio contiene los archivos de configuración de los servicios de xinetd? (Especifique la ruta completa del directorio).",
    "options": {},
    "answer": "/etc/xinetd.d/",
    "explanation": ""
  },
  {
    "id": 89,
    "question": "¿Qué mecanismo usa ssh para comunicarse con el agente SSH?",
    "options": {
      "A": "Se conecta al puerto 2222, que usa el agente SSH de todo el sistema.",
      "B": "Usa el socket fijo .ssh-agent/ipc.",
      "C": "Crea un alias que sustituye ssh por llamadas a ssh-agent.",
      "D": "Inicia ssh-agent como proceso hijo en cada invocación de ssh.",
      "E": "Evalúa variables de entorno como SSH_AUTH_SOCK."
    },
    "answer": "E",
    "explanation": "La respuesta correcta es la E, porque ssh se comunica con el agente SSH a través de variables de entorno, sobre todo SSH_AUTH_SOCK. Esta variable apunta a un socket de dominio Unix en el que escucha el agente. Cuando ssh necesita autenticarse con una clave privada gestionada por el agente, lee SSH_AUTH_SOCK, se conecta al socket indicado y se comunica con el agente a través de él para solicitar la autenticación. Así ssh no necesita acceder directamente a la clave privada, lo que mejora la seguridad.\n\nLa opción A es incorrecta: aunque el 22 es el puerto estándar de SSH, no existe ningún puerto 2222 asociado a un agente SSH de todo el sistema. La opción B no es correcta: la ruta del socket no es fija (.ssh-agent/ipc), sino que se crea dinámicamente y se comunica mediante la variable SSH_AUTH_SOCK.\n\nLa opción C es incorrecta: los alias no son el mecanismo de comunicación con el agente; los comandos SSH se comunican directamente con él a través del socket. La opción D también es incorrecta: el agente SSH no se lanza como proceso hijo en cada invocación de ssh, sino que normalmente es un proceso de larga duración.\n\nEl enfoque basado en variables de entorno (E) permite una gestión segura de las claves, ya que ssh nunca maneja directamente las claves privadas: el agente las guarda y ssh usa el socket para las solicitudes de autenticación. Esto también permite reenviar el agente a través de varias conexiones SSH (agent forwarding).\n\nReferencias:\n\n• Documentación de OpenSSH sobre ssh-agent: https://man.openbsd.org/ssh-agent\n• Explicación de SSH_AUTH_SOCK: https://unix.stackexchange.com/questions/56564/what-is-the-ssh-auth-sock-environment-variable-for"
  },
  {
    "id": 90,
    "question": "RELLENE EL ESPACIO EN BLANCO: ¿Qué parámetro del comando ssh especifica la ubicación de la clave privada que se usa en los intentos de inicio de sesión? (Especifique solo el nombre de la opción, sin valores ni parámetros).",
    "options": {},
    "answer": "-i",
    "explanation": "Corrección: el original da como respuesta «ssh-keygen», que es un comando, no un parámetro de ssh. La opción correcta es -i (identity file), por ejemplo: ssh -i ~/.ssh/id_ed25519 usuario@host."
  },
  {
    "id": 91,
    "question": "¿Cuál de las siguientes afirmaciones sobre IPv6 es cierta?",
    "options": {
      "A": "IPv6 ya no admite direcciones de difusión (broadcast).",
      "B": "Con IPv6 han cambiado los números de puerto TCP de la mayoría de los servicios.",
      "C": "Las direcciones IPv4 pueden usarse sin ningún cambio con IPv6.",
      "D": "IPv6 ya no admite direcciones multicast.",
      "E": "En IPv6, UDP y TCP se han sustituido por el Rapid Transmission Protocol (RTP)."
    },
    "answer": "A",
    "explanation": "La respuesta correcta es la A: IPv6 ya no admite direcciones de difusión. Motivos:\n\n• Eliminación de la difusión: IPv6 sustituye las direcciones de difusión por direcciones multicast. La difusión envía datos a todos los dispositivos de una red, lo que puede generar congestión innecesaria y carga de procesamiento en dispositivos que no necesitan esa información. IPv6 busca mejorar la eficiencia y la escalabilidad.\n• Ventajas del multicast: las direcciones multicast envían datos solo a los dispositivos que se han unido expresamente a un grupo multicast, indicando su interés en recibirlos. Este enfoque selectivo reduce el tráfico innecesario.\n• Mejor escalabilidad: eliminar la difusión contribuye de forma importante a que IPv6 escale mejor que IPv4. Las redes pueden crecer sin sufrir la degradación del rendimiento que causa la difusión generalizada.\n\nLas demás opciones son incorrectas: IPv6 tiene un espacio de direcciones mucho mayor que IPv4 y un formato distinto, por lo que las direcciones IPv4 no pueden usarse sin cambios en IPv6 (opción C). TCP y UDP siguen existiendo en IPv6 (opción E). IPv6 admite direcciones multicast (opción D), y los números de puerto de los servicios estándar no han cambiado entre IPv4 e IPv6 (opción B).\n\nLos documentos RFC (Request for Comments) del IETF (Internet Engineering Task Force) ofrecen especificaciones detalladas de IPv6, incluida su arquitectura de direcciones y la sustitución de la difusión por el multicast.\n\nEn resumen, la sustitución de las direcciones de difusión por direcciones multicast es un aspecto fundamental del diseño de IPv6, orientado a mejorar la eficiencia, la escalabilidad y el rendimiento de la red respecto a IPv4.\n\nDocumentación:\n\n• RFC 4291 – IP Version 6 Addressing Architecture: https://datatracker.ietf.org/doc/html/rfc4291 (detalla los conceptos de direccionamiento de IPv6, incluida la ausencia de difusión y el uso del multicast).\n• Cisco – IPv6 Addressing: https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/ipv6/configuration/15-sy/ipv6-15-sy-book/ip6-addr-arch.html"
  },
  {
    "id": 92,
    "question": "¿Qué es cierto sobre el siguiente comando?\nnmcli device wifi connect WIFIoI",
    "options": {
      "A": "NetworkManager abre un nuevo punto de acceso público con el SSID WIFIoI.",
      "B": "NetworkManager crea una nueva interfaz de red virtual sin configurar llamada WIFIoI.",
      "C": "NetworkManager crea una nueva conexión wifi WIFIoI y la activa.",
      "D": "NetworkManager devuelve un error si la conexión WIFIoI no existe.",
      "E": "NetworkManager devuelve un error porque WIFIoI no es un dispositivo wifi válido."
    },
    "answer": "D",
    "explanation": "Nota: la respuesta de esta pregunta es discutida. Según la página de manual de nmcli, nmcli device wifi connect <SSID> se conecta a la red wifi con ese SSID creando un nuevo perfil de conexión y activándolo, lo que corresponde a la opción C. Solo devuelve un error si no encuentra ninguna red wifi visible con ese SSID. Conviene conocer ambas interpretaciones.\nSegún el original, la respuesta correcta es la D porque nmcli device wifi connect WIFIoI intenta conectarse a una red wifi existente llamada «WIFIoI». Si no existe, el comando falla y devuelve un error.\n\nLa opción A es incorrecta porque el comando sirve para conectarse a una red wifi existente, no para crear un punto de acceso; para eso se usa otro comando (nmcli device wifi hotspot).\n\nLa opción B es incorrecta porque el comando se centra en conectarse a una red wifi. No crea interfaces de red virtuales, y menos sin configurar: supone que ya existe una interfaz inalámbrica, real o virtual, a través de la cual conectarse.\n\nSobre la opción C, el original indica que es parcialmente correcta, ya que el comando intenta activar una conexión, pero que el punto clave es que la red «WIFIoI» debe existir; si no, el comando falla.\n\nLa opción E es incorrecta. En nmcli device wifi connect WIFIoI, «WIFIoI» se interpreta como el nombre (SSID) de la red, no como el nombre de un dispositivo wifi. El dispositivo se indicaría, en su caso, con ifname.\n\nPara profundizar, consulte la documentación de NetworkManager y la página de manual de nmcli:\n\n• NetworkManager: https://networkmanager.dev/\n• Página de manual de nmcli: man nmcli (en un sistema con NetworkManager instalado)."
  },
  {
    "id": 93,
    "question": "¿Cuál de los siguientes comandos podría haber producido la salida siguiente?\n(Nota: la salida a la que se refiere la pregunta no aparece en el original (probablemente era una imagen). Por la respuesta, se trata de la salida típica de una consulta de registro A con dig.)",
    "options": {
      "A": "dig -t mx www.example.org",
      "B": "dig www.example.org",
      "C": "dig -t ns www.example.org",
      "D": "dig -t a www.example.org",
      "E": "dig -t soa www.example.org"
    },
    "answer": "B",
    "explanation": "El original solo indica dig www.example.org. Sin argumentos adicionales, dig consulta el registro de tipo A, así que la salida sería la misma que con dig -t a www.example.org (opción D). Lo más probable es que la salida mostrada incluyera la línea de comando (; <<>> DiG ... <<>> www.example.org), y por eso la respuesta es la B."
  },
  {
    "id": 94,
    "question": "RELLENE EL ESPACIO EN BLANCO: ¿Qué parámetro falta en el comando ip link set ____ dev eth0 para activar la interfaz de red eth0, que estaba inactiva? (Especifique solo el parámetro, sin comando, ruta ni opciones adicionales).",
    "options": {},
    "answer": "up",
    "explanation": ""
  },
  {
    "id": 95,
    "question": "¿Cuáles de los siguientes estados puede mostrar NetworkManager respecto a la conectividad de red del sistema? (Elija dos).",
    "options": {
      "A": "up",
      "B": "portal",
      "C": "full",
      "D": "login-required",
      "E": "firewalled"
    },
    "answer": "BC",
    "explanation": "Las respuestas correctas son la B, portal, y la C, full. NetworkManager, una herramienta de gestión de red muy utilizada en Linux, ofrece varios estados para indicar la conectividad de la red. No son simplemente binarios (activo/inactivo), sino que reflejan el grado de acceso a Internet. Los estados posibles son none, portal, limited, full y unknown.\n\nEl estado portal significa que el sistema está conectado a una red, pero necesita una autenticación adicional, normalmente mediante un portal cautivo. Es habitual en las redes wifi públicas de hoteles o aeropuertos, donde hay que aceptar unas condiciones o iniciar sesión antes de tener acceso completo a Internet. NetworkManager detecta este estado consultando una URL concreta que redirige al portal.\n\nEl estado full, en cambio, indica que el sistema tiene acceso completo a Internet, sin restricciones ni pasos de autenticación intermedios.\n\nEl estado up (A), aunque parezca lógico, no es uno de los estados de conectividad que informa NetworkManager. Una interfaz puede estar técnicamente «activa» (con enlace establecido), pero el sistema puede seguir detrás de un portal o de un cortafuegos sin acceso completo a Internet. login-required (D) y firewalled (E) tampoco son estados de conectividad de NetworkManager. Aunque un cortafuegos puede afectar a la conectividad, es una entidad independiente y no un estado de NetworkManager. La necesidad de iniciar sesión se deduce indirectamente cuando el estado es portal.\n\nQue NetworkManager distinga estos estados es importante para que las aplicaciones adapten su comportamiento a la conectividad disponible. Por ejemplo, un proceso de actualización puede retrasar la descarga de archivos grandes mientras el estado sea portal.\n\nPara profundizar, consulte la documentación de NetworkManager y, en particular, la del comando nmcli general (por ejemplo, nmcli networking connectivity), que muestra cómo se presentan los estados de conectividad.\n\n• https://networkmanager.dev/\n• https://developer.gnome.org/NetworkManager/"
  },
  {
    "id": 96,
    "question": "¿Cuáles de las siguientes son direcciones de host válidas en la subred 203.0.113.64/28? (Elija dos).",
    "options": {
      "A": "203.0.113.64",
      "B": "203.0.113.78",
      "C": "203.0.113.65",
      "D": "203.0.113.80",
      "E": "203.0.113.81"
    },
    "answer": "BC",
    "explanation": "La subred 203.0.113.64/28 tiene la dirección de red 203.0.113.64 y una máscara /28, equivalente a 255.255.255.240. Esta máscara asigna 28 bits a la parte de red y 4 bits a la parte de host (32 − 28 = 4). Con 4 bits de host hay 2^4 = 16 direcciones en total, pero hay que restar dos (la dirección de red y la de difusión), lo que deja 14 direcciones de host utilizables.\n\nEl rango de la subred va de 203.0.113.64 (dirección de red) a 203.0.113.79 (dirección de difusión). La primera dirección de host utilizable es 203.0.113.65 y la última, 203.0.113.78. Las direcciones fuera del rango 203.0.113.65–203.0.113.78 no son direcciones de host válidas en esta subred.\n\nLa opción A (203.0.113.64) es la dirección de red y no es una dirección de host válida. La opción B (203.0.113.78) está dentro del rango válido (es la última dirección utilizable). La opción C (203.0.113.65) es la primera dirección utilizable y, por tanto, es válida. La opción D (203.0.113.80) está fuera del rango de la subred (203.0.113.64–203.0.113.79), y la opción E (203.0.113.81) también. Por lo tanto, solo B y C son correctas.\n\nLecturas recomendadas:\n\n• Subredes: https://www.cloudflare.com/learning/network-layer/what-is-subnetting/\n• Direccionamiento IP: https://www.tutorialspoint.com/ipv4/ipv4_addressing.htm"
  },
  {
    "id": 97,
    "question": "¿Cuáles de las siguientes palabras clave pueden usarse en el archivo /etc/resolv.conf? (Elija dos).",
    "options": {
      "A": "substitute",
      "B": "lookup",
      "C": "search",
      "D": "nameserver",
      "E": "method"
    },
    "answer": "CD",
    "explanation": "Las palabras clave válidas en /etc/resolv.conf son search y nameserver. Este archivo, usado en Linux y sistemas tipo Unix, configura el resolvedor DNS (Domain Name System), que se encarga de traducir los nombres de dominio legibles en direcciones IP.\n\nLa palabra clave nameserver indica la dirección IP de un servidor DNS al que el sistema debe consultar para resolver nombres de dominio. Puede haber varias líneas nameserver (hasta tres), y el sistema las prueba en el orden en que aparecen.\n\nLa palabra clave search define una lista de búsqueda de dominios. Cuando se intenta resolver un nombre de host que no es un nombre de dominio completo (FQDN), el resolvedor añade automáticamente cada dominio de la lista al nombre e intenta resolverlo. Por ejemplo, si la lista incluye «example.com» y un usuario hace ping server1, el sistema intentará resolver «server1.example.com». Esto simplifica el acceso a los recursos de red dentro de un dominio concreto.\n\nLa opción A, substitute, no es una palabra clave de /etc/resolv.conf. La opción B, lookup, no es válida en Linux (existe en el resolv.conf de OpenBSD, pero no en el de glibc). La opción E, method, tampoco es válida en este contexto. nameserver y search son fundamentales para gestionar la resolución DNS. (Otras palabras clave válidas son domain y options).\n\nReferencias:\n\n• resolv.conf(5): man resolv.conf (disponible en la mayoría de los sistemas Linux).\n• Documentación de Red Hat sobre resolv.conf: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/networking_guide/sec-configuring_name_resolution\n\nNota: el original escribe la ruta como /etc/resolv/conf; la ruta correcta es /etc/resolv.conf."
  },
  {
    "id": 98,
    "question": "¿Cómo funciona el comando ping de forma predeterminada?",
    "options": {
      "A": "Envía una solicitud de eco ICMP (Echo Request) a un host remoto y espera recibir a cambio una respuesta de eco ICMP (Echo Reply).",
      "B": "Envía una solicitud ARP a un host remoto y espera recibir a cambio una respuesta ARP.",
      "C": "Envía un paquete TCP SYN a un host remoto y espera recibir a cambio una respuesta TCP SYN-ACK.",
      "D": "Envía un paquete de difusión a todos los hosts de la red y espera recibir, entre otras, una respuesta del sistema de destino.",
      "E": "Envía un paquete UDP al puerto 0 del host remoto y espera recibir a cambio una respuesta de error UDP."
    },
    "answer": "A",
    "explanation": "La respuesta correcta es la A: envía una solicitud de eco ICMP a un host remoto y espera recibir a cambio una respuesta de eco ICMP.\n\nMotivos:\n\nDe forma predeterminada, ping usa el protocolo ICMP (Internet Control Message Protocol) para comprobar si un host remoto es alcanzable. Para ello envía un paquete ICMP Echo Request al destino indicado. El host receptor, si está operativo y bien configurado, responde con un paquete ICMP Echo Reply. Después, ping mide el tiempo de ida y vuelta (RTT), es decir, lo que tarda la solicitud en llegar al destino y la respuesta en volver. Este mecanismo permite determinar si un host es alcanzable y da una medida de la latencia de la red.\n\nICMP es un protocolo fundamental para el diagnóstico y la resolución de problemas de red. Las opciones B, C, D y E describen protocolos o comportamientos que no corresponden al funcionamiento predeterminado de ping. ARP (Address Resolution Protocol) traduce direcciones IP a direcciones MAC. TCP (Transmission Control Protocol) y UDP (User Datagram Protocol) son protocolos de la capa de transporte que se usan para transferir datos de aplicaciones. ping no envía paquetes de difusión por defecto, y enviar un paquete UDP al puerto 0 no es una práctica estándar para comprobar la alcanzabilidad.\n\nReferencias para profundizar:\n\n• Wikipedia – Ping: https://en.wikipedia.org/wiki/Ping_(networking_utility)\n• ICMP (RFC 792): https://datatracker.ietf.org/doc/html/rfc792 (la especificación original de ICMP; densa, pero es el documento de referencia)."
  },
  {
    "id": 99,
    "question": "¿Cuáles de los siguientes comandos muestran el número de bytes transmitidos y recibidos a través de la interfaz de red eth0? (Elija dos).",
    "options": {
      "A": "route -v via eth0",
      "B": "ip stats show dev eth0",
      "C": "netstat -s -i eth0",
      "D": "ifconfig eth0",
      "E": "ip -s link show eth0"
    },
    "answer": "DE",
    "explanation": "Las respuestas correctas son la D y la E.\n\n• D. ifconfig eth0: aunque ifconfig está en desuso en favor de ip, sigue mostrando información sobre la interfaz eth0, incluido el número de paquetes y bytes transmitidos y recibidos. La salida incluye los campos «RX bytes» y «TX bytes», que indican el total de bytes recibidos y transmitidos, respectivamente. https://man7.org/linux/man-pages/man8/ifconfig.8.html\n• E. ip -s link show eth0: el comando ip, y en concreto ip link, es el sustituto moderno de ifconfig. Con la opción -s (estadísticas), ip -s link show eth0 muestra estadísticas detalladas de la interfaz eth0, incluido el número de bytes transmitidos y recibidos (en las secciones RX: y TX: de la salida). La opción -s es imprescindible para obtener los contadores de bytes. https://man7.org/linux/man-pages/man8/ip.8.html\n\nPor qué las demás opciones son incorrectas:\n\n• A. route -v via eth0: el comando route trabaja con la tabla de enrutamiento, que determina el camino que sigue el tráfico. La opción -v aumenta el detalle de la salida, pero el comando no informa del número de bytes transmitidos y recibidos por una interfaz; además, via eth0 no es una sintaxis válida de route.\n• B. ip stats show dev eth0: en las versiones de iproute2 que cubre el examen no existe el subcomando ip stats (se añadió en versiones recientes); la forma correcta es ip -s link show eth0.\n• C. netstat -s -i eth0: netstat también está en gran parte en desuso. Aunque netstat -i muestra estadísticas de las interfaces (en paquetes, no en bytes), la opción -s muestra estadísticas generales por protocolo de todo el sistema, no contadores de bytes de una interfaz concreta. Indicar eth0 no cambia este comportamiento."
  },
  {
    "id": 100,
    "question": "Dada la siguiente tabla de enrutamiento:\n(Nota: la tabla de enrutamiento no aparece en el original (probablemente era una imagen). Por la respuesta, la tabla incluía una ruta hacia la red 192.168.2.0 a través del router 192.168.1.1 en eth0, y una ruta predeterminada por 192.168.178.1 en wlan0.)\n¿Cómo se gestionaría un paquete saliente con destino a 192.168.2.150?",
    "options": {
      "A": "Se pasaría al router predeterminado 192.168.178.1 en wlan0.",
      "B": "Se transmitiría directamente por el dispositivo eth0.",
      "C": "Se pasaría al router predeterminado 255.255.255.0 en eth0.",
      "D": "Se pasaría al router 192.168.1.1 en eth0.",
      "E": "Se transmitiría directamente por el dispositivo wlan0."
    },
    "answer": "D",
    "explanation": "Se pasaría al router 192.168.1.1 en eth0, porque en la tabla existe una ruta más específica hacia la red de destino a través de ese router, y el kernel siempre elige la ruta más específica (la de prefijo más largo) antes que la ruta predeterminada."
  },
  {
    "id": 101,
    "question": "¿Cuáles de los siguientes comandos eliminan la puerta de enlace predeterminada de la tabla de enrutamiento IP del sistema? (Elija dos).",
    "options": {
      "A": "ifconfig unset default",
      "B": "route del default",
      "C": "ip route del default",
      "D": "netstat -r default",
      "E": "sysctl ipv4.default_gw=0"
    },
    "answer": "BC",
    "explanation": "Las respuestas correctas son la B y la C, porque son las utilidades estándar para manipular la tabla de enrutamiento IP y, en concreto, para eliminar la puerta de enlace predeterminada. El comando route del default (B) es un método más antiguo, pero todavía funcional, que usa la utilidad route para eliminar la ruta predeterminada.\n\nEl comando ip route del default (C) es el método moderno y preferido, que forma parte del paquete iproute2. La utilidad ip gestiona el enrutamiento, las interfaces y los túneles; es más completa que route y la ha sustituido en gran medida. ip route del default elimina explícitamente la ruta predeterminada de la tabla de enrutamiento.\n\nLa opción A, ifconfig unset default, es incorrecta. ifconfig configura las propias interfaces de red, no la tabla de enrutamiento, y no tiene ninguna opción unset para eliminar la puerta de enlace predeterminada.\n\nLa opción D, netstat -r default, también es incorrecta. netstat -r solo muestra la tabla de enrutamiento; no la modifica. Es una herramienta de observación, no de manipulación, y pasarle «default» como argumento no tiene ningún efecto de eliminación.\n\nLa opción E, sysctl ipv4.default_gw=0, también es incorrecta. sysctl se usa para modificar parámetros del kernel en tiempo de ejecución, pero ipv4.default_gw no es un parámetro de sysctl. sysctl se usa más bien para ajustar el comportamiento de la red (por ejemplo, el reenvío de paquetes o los tiempos de espera de las conexiones), no para modificar directamente la tabla de rutas. Los cambios permanentes de la configuración de red deben hacerse en los archivos de configuración de red.\n\nReferencias:\n\n• Utilidad iproute2: https://wiki.linuxfoundation.org/networking/iproute2\n• Comando route: man route en un sistema Linux.\n• Qué es una puerta de enlace predeterminada: https://www.cloudflare.com/learning/network-layer/what-is-a-default-gateway/"
  },
  {
    "id": 102,
    "question": "RELLENE EL ESPACIO EN BLANCO: ¿Qué comando activa una interfaz de red según la configuración propia de la distribución, como /etc/network/interfaces o /etc/sysconfig/network-scripts/ifcfg-eth0? (Especifique solo el comando, sin ruta ni parámetros).",
    "options": {},
    "answer": "ifup",
    "explanation": ""
  },
  {
    "id": 103,
    "question": "¿Qué es cierto sobre NetworkManager en un sistema Linux que usa los mecanismos de su distribución para configurar las interfaces de red? (Elija dos).",
    "options": {
      "A": "NetworkManager reconfigura todas las interfaces de red para que usen DHCP, a menos que las gestione específicamente NetworkManager.",
      "B": "NetworkManager debe habilitarse explícitamente para cada interfaz que deba gestionar.",
      "C": "Por defecto, NetworkManager no modifica las interfaces que ya están configuradas.",
      "D": "NetworkManager deshabilita todas las interfaces que no ha configurado NetworkManager.",
      "E": "NetworkManager puede configurarse para usar la configuración de interfaces de red de la distribución."
    },
    "answer": "CE",
    "explanation": "Corrección: el original da como respuesta B y C. Sin embargo, la B es falsa: por defecto, NetworkManager gestiona todas las interfaces que no estén excluidas expresamente (por ejemplo, con unmanaged-devices), sin necesidad de habilitarlo interfaz por interfaz. La E sí es cierta: mediante complementos como ifupdown (Debian) o ifcfg-rh (Red Hat), NetworkManager puede leer y usar los archivos de configuración de red de la distribución. La respuesta aceptada habitualmente para esta pregunta es C y E.\nNetworkManager está diseñado para gestionar las conexiones de red de forma dinámica y sencilla. Sin embargo, las distribuciones suelen ofrecer sus propios mecanismos para configurar las interfaces de red, normalmente mediante archivos como /etc/network/interfaces (en sistemas basados en Debian) o los archivos de /etc/sysconfig/network-scripts/ (en sistemas basados en Red Hat).\n\nLa opción C es correcta porque NetworkManager está diseñado para convivir con estas configuraciones. Por defecto, evita interferir con las interfaces que ya están configuradas con los métodos nativos de la distribución (por ejemplo, en Debian, las interfaces definidas en /etc/network/interfaces quedan sin gestionar por NetworkManager). Es una decisión de diseño deliberada para evitar conflictos y respetar la configuración de red existente.\n\nLa opción E es correcta porque NetworkManager incluye complementos (plugins) que le permiten leer la configuración nativa de la distribución, de modo que puede usar esos archivos en lugar de (o además de) sus propios perfiles de conexión. Esto se configura en /etc/NetworkManager/NetworkManager.conf (por ejemplo, plugins=ifupdown,keyfile).\n\nLa opción A es incorrecta porque NetworkManager no reconfigura a ciegas todas las interfaces para usar DHCP. La opción B es incorrecta porque no hace falta habilitar NetworkManager interfaz por interfaz: gestiona por defecto las interfaces que no estén excluidas. La opción D es incorrecta porque NetworkManager no deshabilita las interfaces que no gestiona: las deja como están, para que los mecanismos de configuración de la distribución sigan funcionando.\n\nEn esencia, NetworkManager está diseñado para no ser intrusivo y para integrarse con la configuración de red existente, lo que da a los administradores flexibilidad para decidir qué interfaces gestiona NetworkManager y cuáles las herramientas nativas de la distribución.\n\nReferencias:\n\n• Documentación de Red Hat sobre NetworkManager: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/configuring_and_managing_networking/index (es un ejemplo; consulte la documentación de su distribución)\n• Proyecto NetworkManager: https://networkmanager.dev/"
  },
  {
    "id": 104,
    "question": "¿Qué puerto TCP estandarizado usan los servicios HTTPS?",
    "options": {
      "A": "25",
      "B": "80",
      "C": "8080",
      "D": "443",
      "E": "636"
    },
    "answer": "D",
    "explanation": "La respuesta correcta es la D, el puerto 443. HTTPS (Hypertext Transfer Protocol Secure) es la versión segura de HTTP. Usa TLS (Transport Layer Security) o su predecesor, SSL (Secure Sockets Layer), para cifrar la comunicación entre el cliente y el servidor. Este cifrado protege los datos sensibles que se transmiten por Internet, como contraseñas, datos de tarjetas de crédito e información personal, frente a escuchas y manipulaciones.\n\nEl puerto estándar asignado a HTTPS es el 443. Esto significa que, cuando un cliente (como un navegador web) inicia una conexión HTTPS con un servidor, normalmente se conecta al puerto 443 de ese servidor, y los servidores web están configurados para escuchar las solicitudes HTTPS en ese puerto.\n\nEl puerto 80 se usa para HTTP (tráfico web sin cifrar) y el 8080 se usa a veces para servidores HTTP alternativos o proxies, pero ninguno está estandarizado para HTTPS. El puerto 25 se usa para SMTP (Simple Mail Transfer Protocol), el protocolo de envío de correo, y el 636 para LDAPS (LDAP sobre TLS/SSL). Por lo tanto, el puerto estandarizado y universalmente reconocido para HTTPS es el 443. Usar un puerto estándar simplifica la configuración de la red y permite a los clientes establecer fácilmente conexiones seguras con los servidores web.\n\nPara más información:\n\n• Asignación de puertos de IANA: https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml\n• RFC 2818 (HTTP Over TLS): https://www.rfc-editor.org/rfc/rfc2818 (antiguo, pero aporta el contexto esencial)."
  },
  {
    "id": 105,
    "question": "¿Cuáles de las siguientes variables de entorno pueden definirse en locale.conf? (Elija dos).",
    "options": {
      "A": "LC_ALL",
      "B": "LC_USERNAME",
      "C": "LC_UTF8",
      "D": "LC_GEOGRAPHY",
      "E": "LC_TIME"
    },
    "answer": "AE",
    "explanation": "Nota: según la página de manual locale.conf(5) de systemd, LC_ALL no puede configurarse en este archivo (está pensada solo para pruebas o sobrescrituras puntuales). Aun así, entre las opciones propuestas solo LC_ALL y LC_TIME son variables de configuración regional reales, por lo que A y E es la respuesta esperada en el examen.\nLas respuestas correctas son A y E (LC_ALL y LC_TIME). Motivos:\n\nEl archivo locale.conf (normalmente /etc/locale.conf) define la configuración regional de todo el sistema, es decir, cómo trata el sistema el idioma y los ajustes regionales para todos los usuarios. En concreto, define variables de entorno que influyen en el formato de la fecha y la hora, los símbolos de moneda, el formato de los números y otros aspectos culturales de la presentación de la información.\n\nLC_ALL es una variable de configuración regional que, si está definida, sustituye a todas las demás variables LC_*: establece la configuración regional de todas las categorías a la vez.\n\nLC_TIME controla específicamente el formato de la fecha y la hora. Por ejemplo, en algunas configuraciones regionales la fecha se muestra como MM/DD/AAAA y en otras como DD/MM/AAAA.\n\nLas opciones B, C y D son incorrectas porque LC_USERNAME, LC_UTF8 y LC_GEOGRAPHY no son variables de configuración regional estándar. Las categorías de configuración regional son específicas (LC_TIME, LC_MONETARY, LC_COLLATE, etc.). La opción C se parece a LANG o LC_CTYPE, que es donde se define la codificación de caracteres. No existe una variable estándar LC_GEOGRAPHY para la ubicación o el formato geográfico. Y el nombre de usuario se define en la configuración de las cuentas o en un servicio de directorio, sin relación con la configuración regional.\n\nEn resumen, locale.conf sirve para definir las preferencias de idioma y región de todo el sistema, y LC_TIME determina el formato de la fecha y la hora.\n\nPara profundizar:\n\n• Locale – ArchWiki: https://wiki.archlinux.org/title/locale\n• Páginas de manual: man locale.conf y man locale"
  },
  {
    "id": 106,
    "question": "¿Cuál de los siguientes comandos establece la zona horaria del sistema en la hora del este de Canadá?",
    "options": {
      "A": "localegen -t -f /usr/share/zoneinfo/Canada/Eastern > /etc/locate.tz",
      "B": "tzconf /etc/localtime",
      "C": "sysctl -w clock.tz='Canada/Eastern'",
      "D": "modprobe tz_ca_est",
      "E": "ln -sf /usr/share/zoneinfo/Canada/Eastern /etc/localtime"
    },
    "answer": "E",
    "explanation": "La respuesta correcta es la E, ln -sf /usr/share/zoneinfo/Canada/Eastern /etc/localtime. Este comando crea un enlace simbólico, un tipo de archivo que apunta a otro archivo. En este caso, crea un enlace simbólico llamado /etc/localtime que apunta al archivo de información de zona horaria de la hora del este de Canadá, ubicado en /usr/share/zoneinfo/Canada/Eastern.\n\nLinux, y en general los sistemas tipo Unix, determinan la zona horaria del sistema leyendo el archivo /etc/localtime, que contiene datos binarios de zona horaria. En lugar de modificar directamente este archivo, que no es legible por personas, lo habitual es enlazarlo con el archivo de zona horaria adecuado del directorio /usr/share/zoneinfo/, que contiene una estructura jerárquica de archivos de zona horaria organizados geográficamente.\n\nLa opción -s de ln crea un enlace simbólico (soft link), y la opción -f fuerza la sobrescritura de /etc/localtime si ya existe, de modo que el sistema use la nueva zona horaria. (En sistemas con systemd se obtiene el mismo resultado con timedatectl set-timezone Canada/Eastern).\n\nLa opción A es incorrecta porque localegen no es un comando estándar (el que existe es locale-gen, que genera configuraciones regionales de idioma, no zonas horarias). Además, redirigir su salida a /etc/locate.tz no es la forma estándar de establecer la zona horaria, y ese archivo no existe en los sistemas habituales.\n\nLa opción B, tzconf /etc/localtime, propone un comando llamado tzconf, que no es un comando estándar de Linux.\n\nLa opción C, sysctl -w clock.tz='Canada/Eastern', intenta establecer la zona horaria con sysctl, que sirve para configurar parámetros del kernel. No existe ningún parámetro clock.tz, y sysctl no modifica la zona horaria persistente del sistema.\n\nLa opción D, modprobe tz_ca_est, intenta cargar un módulo del kernel llamado tz_ca_est. La información de zona horaria no se gestiona mediante módulos del kernel; modprobe sirve para añadir o quitar módulos cargables del kernel.\n\nEn resumen, enlazar /etc/localtime con el archivo de zona horaria correcto de /usr/share/zoneinfo/ es el método más común y portable para establecer la zona horaria del sistema en Linux.\n\nReferencias:\n\n• Comando ln: man ln o https://man7.org/linux/man-pages/man1/ln.1.html\n• /usr/share/zoneinfo: forma parte normalmente del paquete tzdata; consulte el gestor de paquetes de su distribución.\n• Información de zonas horarias: https://www.iana.org/time-zones"
  },
  {
    "id": 107,
    "question": "RELLENE EL ESPACIO EN BLANCO: ¿Qué opción de useradd crea el directorio personal del nuevo usuario y lo provee de un conjunto de archivos estándar? (Especifique solo el nombre de la opción, sin valores ni parámetros).",
    "options": {},
    "answer": "-m",
    "explanation": "Corrección: el original indica «-D» como respuesta, aunque su propia explicación dice que la correcta es -m. La opción -D sirve para mostrar o cambiar los valores predeterminados de useradd.\n-m es la respuesta correcta porque la clave de la descripción es el directorio de plantilla (skel):\n\n-m, --create-home: crea el directorio personal del usuario si no existe. Los archivos y directorios del directorio de plantilla (/etc/skel por defecto, o el que se indique con la opción -k) se copian al directorio personal."
  },
  {
    "id": 108,
    "question": "¿Cómo se puede impedir que un usuario concreto programe tareas con at?",
    "options": {
      "A": "Añadiendo el usuario al archivo /etc/at.allow.",
      "B": "Añadiendo el usuario a la sección [deny] del archivo /etc/atd.conf.",
      "C": "Añadiendo el usuario al grupo nojobs.",
      "D": "Añadiendo el usuario al archivo /etc/at.deny.",
      "E": "Ejecutando el comando atd --deny [usuario]."
    },
    "answer": "D",
    "explanation": "La respuesta correcta es la D: añadiendo el usuario al archivo /etc/at.deny.\n\nLa utilidad at de Linux permite a los usuarios programar comandos para que se ejecuten más adelante. El acceso a at se controla con dos archivos: /etc/at.allow y /etc/at.deny. Si existe /etc/at.allow, solo pueden usar at los usuarios que figuran en él. Si no existe, el sistema consulta /etc/at.deny: si este existe, se deniega el acceso a at a los usuarios que figuran en él. Si no existe ninguno de los dos archivos, solo el superusuario (root) puede usar at.\n\nLa opción A es incorrecta porque /etc/at.allow concede permisos, no los deniega. La opción B es incorrecta porque /etc/atd.conf no tiene una sección [deny] para gestionar usuarios de at. La opción C es incorrecta porque no existe un grupo estándar nojobs relacionado con el control de acceso de at. La opción E es incorrecta porque atd (el demonio de at) no admite una opción --deny para bloquear usuarios. El mecanismo establecido para denegar el acceso es el archivo /etc/at.deny. Por lo tanto, la forma correcta de impedir que un usuario programe tareas con at es añadir su nombre a /etc/at.deny: al invocar at, el sistema consulta este archivo y, si encuentra al usuario, se niega a programar la tarea.\n\nReferencias:\n\n• Página de manual de at: man at (en una terminal Linux)\n• at(1): https://man7.org/linux/man-pages/man1/at.1.html\n• Temporizadores de systemd: https://www.digitalocean.com/community/tutorials/how-to-use-systemd-timers-to-schedule-jobs (alternativa a at; útil para entender la programación de tareas en general)."
  },
  {
    "id": 109,
    "question": "¿Qué archivo contiene la fecha del último cambio de contraseña de un usuario?",
    "options": {
      "A": "/etc/gshadow",
      "B": "/etc/passwd",
      "C": "/etc/pwdlog",
      "D": "/var/log/shadow",
      "E": "/etc/shadow"
    },
    "answer": "E",
    "explanation": "La respuesta correcta es /etc/shadow, porque es el archivo que almacena la información cifrada de las contraseñas, incluida la fecha del último cambio de contraseña. Está separado deliberadamente de /etc/passwd, que guarda la información básica de las cuentas, para mejorar la seguridad.\n\n/etc/shadow contiene una entrada por cuenta de usuario, con varios campos separados por dos puntos: nombre de usuario, contraseña cifrada, fecha del último cambio de contraseña (en días desde la época Unix), antigüedad mínima de la contraseña, antigüedad máxima, periodo de aviso, periodo de inactividad y fecha de caducidad de la cuenta.\n\nEl campo del último cambio de contraseña permite al sistema aplicar políticas de contraseñas, como la antigüedad mínima (que impide cambiar la contraseña de nuevo inmediatamente) y la antigüedad máxima (que obliga a los usuarios a cambiarla periódicamente). Esto contribuye a un entorno más seguro.\n\n/etc/gshadow contiene información sobre los grupos, sus miembros y sus administradores, no las fechas de cambio de contraseña de los usuarios. /etc/passwd guarda información básica como el nombre de usuario, el UID, el GID, el directorio personal y la shell de inicio de sesión, pero no los datos de las contraseñas ni sus fechas de cambio. No existen archivos estándar llamados /etc/pwdlog ni /var/log/shadow. Por lo tanto, solo /etc/shadow contiene esta información.\n\nUsar un archivo separado y de acceso restringido para la información sensible de las contraseñas es una práctica de seguridad habitual, acorde con el principio de mínimo privilegio. Normalmente solo root puede leer /etc/shadow, lo que limita aún más el riesgo de que las contraseñas se vean comprometidas.\n\nPara profundizar:\n\n• man 5 shadow: página de manual del formato del archivo shadow.\n• Documentación de Red Hat sobre la seguridad de las cuentas de usuario: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/security_hardening/index (o la documentación equivalente de su distribución)."
  },
  {
    "id": 110,
    "question": "¿Cuáles de los siguientes campos se encuentran en el archivo /etc/group? (Elija dos).",
    "options": {
      "A": "El directorio personal del grupo.",
      "B": "La lista de usuarios que pertenecen al grupo.",
      "C": "El nombre del grupo.",
      "D": "La ACL predeterminada del grupo.",
      "E": "La descripción del grupo."
    },
    "answer": "BC",
    "explanation": "El archivo /etc/group es un archivo del sistema que define los grupos de un sistema Linux. Cada línea representa un grupo y contiene su información en campos separados por dos puntos: nombre del grupo, contraseña del grupo (normalmente x, que indica que la contraseña está en /etc/gshadow), ID del grupo (GID) y una lista, separada por comas, de los usuarios que pertenecen al grupo.\n\nPor lo tanto, el nombre del grupo (C) y la lista de usuarios que pertenecen a él (B) son campos del archivo /etc/group.\n\nLa opción A, el directorio personal del grupo, no se guarda en /etc/group: los directorios personales están asociados a cada usuario y se definen en /etc/passwd. La opción D, la ACL predeterminada del grupo, tampoco se guarda en /etc/group: las ACL (listas de control de acceso) se gestionan por separado, en los atributos de los propios archivos. La opción E, la descripción del grupo, tampoco es un campo estándar de /etc/group. La función principal de /etc/group es definir la pertenencia a los grupos y su GID.\n\nPara más información:\n\n• man 5 group: página de manual del formato del archivo group."
  },
  {
    "id": 111,
    "question": "¿Cuál de las siguientes secciones existe en una unidad de temporizador (timer) de systemd?",
    "options": {
      "A": "[Events]",
      "B": "[Timer]",
      "C": "[cron]",
      "D": "[Schedule]",
      "E": "[Trigger]"
    },
    "answer": "B",
    "explanation": "La sección correcta de una unidad de temporizador de systemd es [Timer]. Las unidades de temporizador, con extensión .timer, son archivos de configuración que controlan cuándo se activan los servicios u otras unidades de systemd, y en la práctica sustituyen a cron para programar tareas. La sección [Timer] define los criterios de tiempo: cuándo debe empezar el temporizador, con qué frecuencia debe repetirse y qué unidad de servicio debe activar. Entre sus opciones están OnBootSec, OnUnitActiveSec, OnCalendar, AccuracySec y Unit.\n\nLa opción A, [Events], es incorrecta. Aunque systemd gestiona eventos, no existe una sección [Events] en las unidades de temporizador; el comportamiento del temporizador se configura directamente en la sección [Timer] con directivas específicas.\n\nLas opciones C, [cron], D, [Schedule], y E, [Trigger], también son incorrectas. Cron es una utilidad de programación independiente a la que sustituyen los temporizadores de systemd, y las unidades de temporizador no usan secciones llamadas [cron] ni [Schedule]. Aunque el resultado final sea «disparar» una acción, no existe ninguna sección llamada [Trigger]: es la sección [Timer] la que define las condiciones de tiempo. (Además de [Timer], una unidad .timer puede tener las secciones genéricas [Unit] e [Install]; la acción que se ejecuta se define en la sección [Service] de la unidad de servicio asociada).\n\nPor lo tanto, la sección [Timer] es imprescindible para definir la programación y los mecanismos de activación de las unidades de systemd asociadas.\n\nPara profundizar:\n\n• systemd.timer(5): man systemd.timer en un sistema Linux con systemd.\n• Documentación de systemd.timer en freedesktop.org: https://www.freedesktop.org/software/systemd/man/systemd.timer.html"
  },
  {
    "id": 112,
    "question": "¿Cuál de las siguientes invocaciones de getent lista todos los usuarios existentes?",
    "options": {
      "A": "getent homes",
      "B": "getent uids",
      "C": "getent passwd",
      "D": "getent users",
      "E": "getent logins"
    },
    "answer": "C",
    "explanation": "La respuesta correcta es la C, getent passwd. El comando getent es una interfaz unificada para acceder a diversas bases de datos del sistema, incluidas las de información de usuarios y grupos. getent passwd obtiene las entradas de la base de datos passwd, que almacena la información de las cuentas de usuario: nombres de usuario, UID, GID, directorios personales y shells de inicio de sesión.\n\nLa opción A, getent homes, es incorrecta porque homes no es una base de datos estándar que getent pueda consultar.\n\nLa opción B, getent uids, es incorrecta porque uids no es una base de datos que reconozca getent. La base de datos passwd contiene los UID junto con el resto de datos de los usuarios, pero getent no consulta los UID por separado.\n\nLa opción D, getent users, es incorrecta por motivos similares: users no es una base de datos estándar de getent.\n\nLa opción E, getent logins, tampoco es válida: no es una base de datos estándar que getent pueda consultar.\n\nPor lo tanto, el único comando de la lista que muestra de forma fiable todos los usuarios conocidos por el sistema, obteniendo la información de la base de datos estándar de usuarios, es getent passwd. A diferencia de leer /etc/passwd directamente, getent también incluye los usuarios de otras fuentes configuradas en NSS (por ejemplo, LDAP).\n\nPara más información, consulte la página de manual con man getent o la documentación de la biblioteca C de GNU, que explica en detalle el Name Service Switch (NSS) y cómo interactúa getent con él: https://www.gnu.org/software/libc/manual/html_node/Name-Service-Switch.html"
  },
  {
    "id": 113,
    "question": "Dada la siguiente entrada del crontab de un usuario:\n15 14   1-5 /usr/local/bin/example.sh\n¿Cuándo se ejecutará el script /usr/local/bin/example.sh?",
    "options": {
      "A": "A las 14:15 hora local, de enero a mayo.",
      "B": "A las 15:14 hora local, del día 1 al 5 de cada mes.",
      "C": "A las 14:15 hora local, de febrero a junio.",
      "D": "A las 14:15 hora local, del día 1 al 5 de cada mes.",
      "E": "A las 14:15 hora local, de lunes a viernes."
    },
    "answer": "E",
    "explanation": "La expresión de cron 15 14   1-5 se interpreta campo a campo:\n\n• El primer campo, 15, indica el minuto (el minuto 15 de la hora).\n• El segundo campo, 14, indica la hora (las 14:00, es decir, las 2 de la tarde).\n• El tercer campo, *, significa todos los días del mes.\n• El cuarto campo, *, significa todos los meses del año.\n• El quinto campo, 1-5, indica los días de la semana, donde 1 es lunes, 2 martes, 3 miércoles, 4 jueves y 5 viernes.\n\nPor lo tanto, el script /usr/local/bin/example.sh se ejecutará a las 14:15 los lunes, martes, miércoles, jueves y viernes. Las opciones A, B, C y D son incorrectas porque no interpretan correctamente la expresión de cron ni la definición del día de la semana.\n\nLecturas recomendadas sobre la sintaxis y la programación de cron:\n\n• crontab(5): man 5 crontab (directamente en una terminal Linux o en repositorios de páginas de manual en línea). Es la fuente más fiable.\n• Wikipedia – Cron: https://en.wikipedia.org/wiki/Cron\n• GeeksforGeeks – Cron Utility in Linux: https://www.geeksforgeeks.org/cron-utility-in-linux/"
  },
  {
    "id": 114,
    "question": "Si no existen ni cron.allow ni cron.deny en /etc/, ¿cuál de las siguientes afirmaciones es cierta?",
    "options": {
      "A": "Sin configuración adicional, todos los usuarios pueden crear crontabs propios.",
      "B": "Sin configuración adicional, solo root puede crear crontabs de usuario.",
      "C": "El demonio cron se negará a arrancar e informará de los archivos que faltan en el registro del sistema.",
      "D": "Cuando un usuario crea un crontab propio, el administrador del sistema debe aprobarlo explícitamente.",
      "E": "La configuración predeterminada de /etc/crond.conf define si se permiten o no, en general, los crontabs de usuario."
    },
    "answer": "B",
    "explanation": "Nota: este comportamiento depende de la implementación de cron. En algunas (y así lo da por bueno esta pregunta), si no existe ninguno de los dos archivos solo root puede usar crontab; en otras, como la de Debian/Ubuntu y cronie en su configuración habitual, todos los usuarios pueden hacerlo (lo que correspondería a la opción A). La página de manual de crontab de cada sistema indica cuál se aplica.\nSegún el original, la respuesta correcta es la B: sin configuración adicional, solo root puede crear crontabs de usuario cuando no existen ni cron.allow ni cron.deny en /etc/.\n\nCuando estos archivos no existen, el sistema aplica un modelo de permisos restrictivo. Para gestionar los crontabs de usuario (crontab -e), cron consulta cron.allow y cron.deny para saber qué usuarios tienen permiso. Sin ellos, se supone que solo root puede crear o modificar crontabs. Esta medida de seguridad impide que usuarios no autorizados programen tareas potencialmente dañinas y limita la modificación de los crontabs al administrador del sistema.\n\nLas opciones A, C, D y E son incorrectas según el original. La opción A afirma que todos los usuarios pueden crear crontabs, lo contrario de lo que se toma como comportamiento predeterminado. La opción C es incorrecta porque el demonio cron arranca con normalidad, solo que con permisos restringidos. La opción D es incorrecta porque no existe ningún proceso de aprobación explícita por parte del administrador. La opción E es incorrecta porque /etc/crond.conf no es un archivo estándar para esto; el control de acceso se gestiona con cron.allow y cron.deny.\n\nLecturas recomendadas:\n\n• Página de manual de crontab: man crontab\n• Introducción a los trabajos de cron (cron jobs)."
  },
  {
    "id": 115,
    "question": "¿Cuál es la finalidad del comando iconv?",
    "options": {
      "A": "Convierte imágenes de mapa de bits de un formato a otro, por ejemplo de PNG a JPEG.",
      "B": "Verifica que el árbol del directorio raíz cumple todas las convenciones del Filesystem Hierarchy Standard (FHS).",
      "C": "Convierte archivos de un juego de caracteres a otro.",
      "D": "Cambia el modo de un inodo en el sistema de archivos ext4.",
      "E": "Muestra metainformación adicional de los archivos de icono con extensión .ico."
    },
    "answer": "C",
    "explanation": "El comando iconv está diseñado específicamente para convertir juegos de caracteres. Su función principal es transformar la codificación de los caracteres de un archivo de texto de un juego de caracteres (como UTF-8) a otro (como Latin-1 o ASCII), por ejemplo: iconv -f ISO-8859-1 -t UTF-8 entrada.txt > salida.txt.\n\nEsto es fundamental porque distintos sistemas y aplicaciones pueden usar codificaciones diferentes, y un archivo codificado en un sistema puede no mostrarse correctamente en otro. Sin la codificación adecuada, los caracteres especiales, las letras acentuadas o los caracteres de alfabetos no latinos pueden aparecer como símbolos ilegibles o perderse por completo.\n\niconv lee el archivo de entrada usando la codificación de origen indicada y convierte cada carácter a su representación equivalente en la codificación de salida especificada. Gestiona la complejidad de la correspondencia entre juegos de caracteres y puede tratar los casos en que no existe un equivalente directo (omitiendo el carácter, sustituyéndolo por uno similar con //TRANSLIT o ignorándolo con //IGNORE). Este proceso es fundamental para garantizar la integridad de los datos y su correcta visualización en distintas plataformas y aplicaciones, y es esencial para la internacionalización y localización de software y datos. Por lo tanto, la opción C describe correctamente la función principal de iconv. Las opciones A, B, D y E describen funciones que no tienen nada que ver con la conversión de juegos de caracteres.\n\nLecturas recomendadas:\n\n• Documentación de GNU libiconv: https://www.gnu.org/software/libiconv/ (aunque se refiere a la biblioteca, explica en detalle la conversión de juegos de caracteres).\n• man iconv: en la mayoría de los sistemas Linux muestra la página de manual del comando."
  },
  {
    "id": 116,
    "question": "¿Qué carácter del campo de contraseña de /etc/passwd indica que la contraseña cifrada está almacenada en /etc/shadow?",
    "options": {
      "A": "*",
      "B": "-",
      "C": "s",
      "D": "#",
      "E": "x"
    },
    "answer": "E",
    "explanation": "La respuesta correcta es x. En el archivo /etc/passwd, el campo de contraseña contenía tradicionalmente una versión cifrada de la contraseña del usuario. Sin embargo, por motivos de seguridad, los sistemas Linux modernos usan un sistema de contraseñas shadow, en el que la contraseña cifrada se traslada a un archivo de acceso más restringido, /etc/shadow, que solo puede leer root. Para indicar que la contraseña cifrada no está en /etc/passwd, sino en /etc/shadow, se coloca el carácter x en el campo de contraseña. Los demás caracteres (*, -, s y #) no tienen esta función.\n\n/etc/passwd almacena principalmente la información de las cuentas de usuario, y la x indica que la contraseña se guarda en /etc/shadow, lo que mejora la seguridad al separar los datos de los usuarios de la información sensible de las contraseñas. Trasladar las contraseñas a /etc/shadow impide que los usuarios normales intenten descifrarlas leyendo /etc/passwd. Es un aspecto fundamental de la gestión de usuarios y de las prácticas de seguridad en Linux.\n\nReferencias:\n\n• https://man7.org/linux/man-pages/man5/passwd.5.html\n• https://man7.org/linux/man-pages/man5/shadow.5.html"
  },
  {
    "id": 117,
    "question": "¿A qué se refiere el término línea braille (Braille Display)?",
    "options": {
      "A": "Un tema gráfico estandarizado de alto contraste para aplicaciones de escritorio.",
      "B": "Un entorno de escritorio de Linux similar a KDE y GNOME.",
      "C": "Una tecnología de pantalla antigua sustituida por la LCD.",
      "D": "Una representación física de caracteres mediante pequeños puntos.",
      "E": "Un formato de archivo estándar para el intercambio de datos, similar a XML."
    },
    "answer": "D",
    "explanation": "La respuesta correcta es la D, porque una línea braille (también llamada pantalla braille o display braille actualizable) es un dispositivo electromecánico que presenta caracteres braille. Estos dispositivos usan pines controlados electrónicamente que suben y bajan para formar celdas braille, que las personas ciegas o con discapacidad visual pueden leer al tacto.\n\nCada celda braille consta de un patrón de seis u ocho puntos. El usuario puede leer la salida en braille y desplazarse por el texto y el resto del contenido que se muestra en la pantalla del ordenador mediante la línea braille.\n\nLa opción A es incorrecta porque los temas de alto contraste son adaptaciones visuales, no táctiles. La opción B es incorrecta: KDE y GNOME son entornos de escritorio que ofrecen interfaces gráficas, mientras que las líneas braille ofrecen una salida táctil. La opción C también es incorrecta, ya que las líneas braille tienen una finalidad completamente distinta de las tecnologías de pantalla antiguas como el CRT; su función no es visual. La opción E es incorrecta porque los formatos de intercambio de datos como XML son estructuras de datos abstractas, no dispositivos físicos de salida.\n\nLas líneas braille son una herramienta de accesibilidad esencial, que permite a los usuarios interactuar con el contenido digital de forma autónoma. Se conectan a ordenadores o dispositivos móviles y traducen la información de la pantalla a código braille. Esta tecnología es vital para la educación, el empleo y el acceso cotidiano a la información de las personas ciegas o con discapacidad visual.\n\nPara profundizar:\n\n• American Foundation for the Blind (AFB): https://www.afb.org/\n• National Federation of the Blind (NFB): https://www.nfb.org/\n• Artículo de Wikipedia sobre las líneas braille: https://en.wikipedia.org/wiki/Refreshable_braille_display"
  },
  {
    "id": 118,
    "question": "RELLENE EL ESPACIO EN BLANCO: ¿Qué variable de entorno usa un cliente X11 para determinar a qué servidor X conectarse? (Especifique solo el nombre de la variable, sin comandos ni valores).",
    "options": {},
    "answer": "DISPLAY",
    "explanation": ""
  },
  {
    "id": 119,
    "question": "¿Cuáles de las siguientes tareas realiza un gestor de pantalla (display manager) como XDM o KDM? (Elija dos).",
    "options": {
      "A": "Configurar dispositivos adicionales, como nuevos monitores o proyectores, cuando se conectan.",
      "B": "Iniciar y preparar el entorno de escritorio para el usuario.",
      "C": "Crear un archivo de configuración de X11 para los dispositivos gráficos y monitores actuales.",
      "D": "Bloquear la pantalla cuando el usuario ha estado inactivo durante un tiempo configurable.",
      "E": "Gestionar el inicio de sesión de un usuario."
    },
    "answer": "BE",
    "explanation": "Las respuestas correctas son la B y la E. Los gestores de pantalla, como XDM, KDM o GDM, se encargan de iniciar el proceso de inicio de sesión gráfico y de gestionar la autenticación de los usuarios.\n\nLa opción B es correcta porque una de las principales responsabilidades de un gestor de pantalla es iniciar y preparar el entorno de escritorio (por ejemplo, GNOME, KDE o Xfce) una vez que el usuario inicia sesión correctamente. Esto implica lanzar la sesión gráfica, establecer las variables de entorno del usuario e inicializar los componentes del entorno de escritorio.\n\nLa opción E es correcta porque los gestores de pantalla gestionan el inicio de sesión: presentan una pantalla de inicio de sesión gráfica donde los usuarios introducen su nombre y su contraseña, y después autentican al usuario mediante los mecanismos del sistema (por ejemplo, PAM) antes de darle acceso al entorno de escritorio.\n\nLa opción A es incorrecta. La configuración dinámica de nuevos monitores o proyectores la gestionan normalmente las herramientas del entorno de escritorio o utilidades específicas como xrandr o arandr, no el gestor de pantalla.\n\nLa opción C es incorrecta. El archivo de configuración de X11 (normalmente xorg.conf) lo crean las herramientas de configuración del servidor X o, en la actualidad, ni siquiera es necesario porque el servidor X detecta el hardware automáticamente al arrancar. El gestor de pantalla usa la configuración de X11 existente, pero no la crea ni la modifica.\n\nLa opción D es incorrecta. El bloqueo de pantalla lo gestiona normalmente el entorno de escritorio o una aplicación de salvapantallas independiente, no el gestor de pantalla, que se centra en el inicio de sesión y en el arranque del entorno de escritorio.\n\nPara más información:\n\n• Display manager – ArchWiki: https://wiki.archlinux.org/title/Display_manager\n• freedesktop.org – X Display Manager Control Protocol: https://www.freedesktop.org/wiki/Software/xdmcp/ (aunque XDMCP está prácticamente en desuso, el protocolo ayuda a entender el funcionamiento de los gestores de pantalla).\n\nNota: el original escribe «KMD»; el gestor de pantalla de KDE es KDM."
  },
  {
    "id": 120,
    "question": "¿Cuál de los siguientes protocolos está diseñado para acceder a la salida de la tarjeta de vídeo de una máquina virtual?",
    "options": {
      "A": "KDE",
      "B": "X11",
      "C": "Xfce",
      "D": "SPICE",
      "E": "XDMCP"
    },
    "answer": "D",
    "explanation": "La respuesta correcta es la D. SPICE (Simple Protocol for Independent Computing Environments) está diseñado específicamente para dar acceso a la salida de la tarjeta de vídeo y a otras funciones de entrada/salida de una máquina virtual. SPICE es un protocolo de visualización remota creado para entornos virtuales. A diferencia de protocolos genéricos como X11 o RDP, está optimizado para la infraestructura de escritorios virtuales (VDI) de alto rendimiento y la computación basada en servidor.\n\nPor qué las demás opciones son incorrectas:\n\n• A. KDE y C. Xfce: son entornos de escritorio, no protocolos para acceder a la salida de vídeo. Se ejecutan en el sistema operativo, que puede visualizarse mediante un protocolo como SPICE, pero no proporcionan el mecanismo de acceso subyacente.\n• B. X11: es un sistema de ventanas que se usa principalmente en sistemas tipo Unix. Aunque X11 puede usarse en remoto mediante el reenvío de X, no está optimizado para entornos de virtualización como SPICE. Está pensado para mostrar en la máquina local aplicaciones que se ejecutan en otro equipo, y es menos eficiente para mostrar en remoto la pantalla completa de una máquina virtual, por su mayor latencia y consumo de ancho de banda.\n• E. XDMCP: el X Display Manager Control Protocol es un protocolo que permite a un servidor X solicitar a un gestor de pantalla remoto su pantalla de inicio de sesión gráfica. Al igual que X11, no está optimizado para entornos virtuales y se centra en la gestión de los gestores de pantalla, que se encargan de las solicitudes de inicio de sesión.\n\nSPICE, en cambio, incorpora funciones como la optimización del ancho de banda, el ajuste dinámico de la resolución, la redirección USB y la transmisión de audio, lo que lo hace ideal para interactuar con la salida gráfica y los periféricos de entrada de las máquinas virtuales. Está diseñado para ofrecer una experiencia de escritorio casi nativa, incluso a través de la red.\n\nPor lo tanto, SPICE es el único protocolo de las opciones diseñado específicamente para dar acceso a la salida de la tarjeta de vídeo de una máquina virtual.\n\nLecturas recomendadas:\n\n• Protocolo SPICE: https://www.spice-space.org/\n• Documentación de Red Hat Virtualization: https://access.redhat.com/documentation/en-us/red_hat_virtualization/ (usa SPICE con frecuencia)"
  },
  {
    "id": 121,
    "question": "¿Cuáles de los siguientes cambios pueden producirse como consecuencia de usar el comando ip? (Elija tres).",
    "options": {
      "A": "Las interfaces de red pueden activarse o desactivarse.",
      "B": "Pueden añadirse nuevos servidores de nombres a la configuración del resolvedor.",
      "C": "El nombre de host del sistema puede cambiar.",
      "D": "Las direcciones IP pueden cambiar.",
      "E": "La tabla de enrutamiento puede cambiar."
    },
    "answer": "ADE",
    "explanation": "Nota: esta pregunta es un duplicado de la pregunta 11.\n\nLas respuestas correctas son A, D y E. Justificación de cada una según las capacidades del comando ip:\n\n• A. Las interfaces de red pueden activarse o desactivarse: el comando ip permite controlar directamente las interfaces de red. Comandos como ip link set <interfaz> up e ip link set <interfaz> down cambian el estado administrativo de una interfaz, activándola o desactivándola, respectivamente. Esto afecta a su capacidad para enviar y recibir tráfico.\n• D. Las direcciones IP pueden cambiar: el subcomando ip addr permite añadir y eliminar direcciones IP de las interfaces. Por ejemplo, ip addr add <dirección_ip>/<máscara> dev <interfaz> asigna una nueva dirección IP a una interfaz. Por tanto, el comando ip puede modificar las direcciones IP asociadas a las interfaces de red.\n• E. La tabla de enrutamiento puede cambiar: el subcomando ip route está diseñado específicamente para manipular la tabla de enrutamiento. Permite añadir, eliminar o modificar rutas con comandos como ip route add default via <puerta_de_enlace>, para definir una puerta de enlace predeterminada, o ip route add <red>/<máscara> via <puerta_de_enlace> dev <interfaz>, para dirigir el tráfico hacia una red concreta a través de una puerta de enlace determinada.\n\nPor qué las opciones B y C son incorrectas:\n\n• B. Pueden añadirse nuevos servidores de nombres a la configuración del resolvedor: el comando ip no modifica directamente la configuración del resolvedor (normalmente /etc/resolv.conf). De eso se encargan herramientas como nmcli, systemd-resolved o la edición manual de /etc/resolv.conf.\n• C. El nombre de host del sistema puede cambiar: el comando ip no modifica directamente el nombre de host del sistema. Para cambiarlo se usan el comando hostname o herramientas como hostnamectl.\n\nPor lo tanto, las opciones A, D y E reflejan los cambios que pueden realizarse con el comando ip en las interfaces de red, las direcciones IP y las tablas de enrutamiento, respectivamente.\n\nRecursos:\n\n1. Página de manual de ip: man ip o versiones en línea como https://man7.org/linux/man-pages/man8/ip.8.html (ofrece una visión completa de la sintaxis y las capacidades de ip).\n2. Linux Advanced Routing & Traffic Control HOWTO: aunque es antiguo, ofrece información detallada sobre los conceptos de enrutamiento en Linux. http://lartc.org/"
  },
  {
    "id": 122,
    "question": "¿Cuál de las siguientes afirmaciones es cierta si el UID de un usuario normal es idéntico al GID de un grupo?",
    "options": {
      "A": "Los UID tienen prioridad sobre los GID; por lo tanto, el usuario está disponible y el grupo no.",
      "B": "Ni el usuario ni el grupo están disponibles, para evitar la ambigüedad debida al conflicto de ID.",
      "C": "Los UID y los GID son independientes entre sí; por lo tanto, tanto el usuario como el grupo siguen estando disponibles.",
      "D": "El usuario es el único miembro del grupo, aunque la configuración del grupo incluya otros miembros.",
      "E": "Los GID tienen prioridad sobre los UID; por lo tanto, el grupo está disponible y el usuario no."
    },
    "answer": "C",
    "explanation": "Nota: esta pregunta es un duplicado de la pregunta 15.\n\nLa respuesta correcta es la C, porque el sistema operativo gestiona los identificadores de usuario (UID) y de grupo (GID) de forma independiente. Linux distingue a los usuarios y a los grupos por el tipo de identificador, no solo por su valor numérico. Aunque un UID y un GID tengan el mismo valor, el sistema los reconoce como entidades distintas: uno representa una cuenta de usuario y el otro, un grupo. Por lo tanto, tanto la cuenta de usuario como el grupo son válidos y están disponibles.\n\nEl sistema de permisos del sistema operativo se basa tanto en los UID como en los GID para determinar los derechos de acceso. Si un archivo concede ciertos permisos a un GID concreto y el UID de un usuario coincide con ese GID, el usuario no obtiene automáticamente esos permisos: debe ser miembro del grupo asociado a ese GID para heredar los permisos del grupo.\n\nLas respuestas A, B, D y E son incorrectas porque suponen una dependencia o un conflicto entre UID y GID que no existe en los sistemas Linux estándar. El sistema no da prioridad a uno sobre otro (A y E), no deshabilita ninguno de los dos (B) ni supone una pertenencia exclusiva (D) por coincidir los números.\n\nEn entornos de nube (por ejemplo, al gestionar instancias y permisos) se aplican los mismos principios de gestión independiente de UID y GID. Las listas de control de acceso (ACL) y los sistemas de gestión de identidades y accesos (IAM) se basan en esta separación para asignar permisos con precisión. Malinterpretarla podría provocar vulnerabilidades de seguridad o configuraciones de permisos incorrectas.\n\nLecturas recomendadas:\n\n• Usuarios y grupos en Linux: https://www.cyberciti.biz/faq/understanding-unixlinux-groups/\n• Permisos de archivo: https://www.geeksforgeeks.org/file-permissions-in-linux/"
  },
  {
    "id": 123,
    "question": "¿Qué se puede especificar con useradd? (Elija dos).",
    "options": {
      "A": "Los comandos que el usuario puede ejecutar con sudo.",
      "B": "La ruta absoluta al directorio personal del usuario.",
      "C": "Las impresoras disponibles para el nuevo usuario.",
      "D": "Las claves SSH usadas para iniciar sesión en la nueva cuenta.",
      "E": "El identificador numérico (UID) del usuario."
    },
    "answer": "BE",
    "explanation": "Nota: esta pregunta es un duplicado de la pregunta 20.\n\nEl comando useradd de Linux es una utilidad de línea de comandos para crear cuentas de usuario nuevas. Permite a los administradores definir varios atributos del nuevo usuario al crear la cuenta.\n\nLa opción B, «La ruta absoluta al directorio personal del usuario», es correcta porque la opción -d o --home-dir de useradd establece explícitamente el directorio personal del nuevo usuario. Así el usuario dispone de un espacio propio para sus archivos y configuraciones. Por ejemplo, useradd -d /home/newuser newuser crea el usuario «newuser» con /home/newuser como directorio personal.\n\nLa opción E, «El identificador numérico (UID) del usuario», también es correcta. La opción -u o --uid permite indicar un UID concreto para el usuario; si no se indica, el sistema asigna automáticamente el siguiente UID disponible. Asignar un UID concreto puede ser necesario por compatibilidad con otros sistemas o por requisitos de seguridad específicos. Por ejemplo, useradd -u 1001 newuser crea un usuario con UID 1001.\n\nLa opción A es incorrecta porque useradd no gestiona directamente los privilegios de sudo, que suelen gestionarse en el archivo sudoers o mediante mecanismos relacionados, como los grupos. Las opciones C y D son incorrectas porque useradd no configura el acceso a impresoras ni las claves SSH. El acceso a impresoras se configura con las herramientas del sistema de impresión, y las claves SSH se gestionan por separado, normalmente con ssh-keygen y colocando las claves públicas en el archivo .ssh/authorized_keys del usuario.\n\nPor lo tanto, las respuestas correctas son la B y la E, ya que son atributos que se configuran directamente con el comando useradd.\n\nPara profundizar:\n\n• man useradd: página de manual del comando useradd.\n• Documentación de Red Hat sobre gestión de usuarios: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/managing_users_and_groups/index"
  },
  {
    "id": 124,
    "question": "¿Qué opción del archivo de configuración de chrony cambia el intervalo inicial de sondeo a un servidor NTP para acelerar la sincronización inicial?",
    "options": {
      "A": "iburst",
      "B": "quickstart",
      "C": "fast",
      "D": "fsync",
      "E": "flood"
    },
    "answer": "A",
    "explanation": "Nota: esta pregunta es un duplicado de la pregunta 30.\n\nLa respuesta correcta es la A, iburst.\n\nLa opción iburst de chrony.conf está diseñada específicamente para acelerar la sincronización inicial con los servidores NTP. En un arranque en frío o tras una desviación horaria importante, chrony necesita converger rápidamente a la hora correcta. Sin iburst, chrony usa el intervalo de sondeo estándar, que al principio puede ser relativamente lento.\n\niburst indica a chrony que, al principio, envíe al servidor NTP configurado una ráfaga de paquetes NTP (normalmente cuatro u ocho) a un ritmo mucho más rápido que el intervalo de sondeo habitual. Esta mayor frecuencia permite a chrony evaluar rápidamente la latencia de la red y el desfase del servidor, y sincronizarse mucho antes. Es fundamental en sistemas que necesitan la hora exacta desde el principio, como los que participan en la autenticación Kerberos o los que tienen requisitos de tiempo real.\n\nLas demás opciones son incorrectas: quickstart y fast no son directivas válidas de chrony. fsync está relacionado con la sincronización del sistema de archivos, no con NTP. flood tampoco es un parámetro válido del archivo de configuración de chrony.\n\nEn esencia, iburst sacrifica algo de carga de red durante la sincronización inicial a cambio de una convergencia mucho más rápida, una compensación que suele merecer la pena, sobre todo en entornos donde es importante tener la hora exacta desde el inicio.\n\nPara profundizar, consulte la documentación oficial de chrony:\n\n• https://chrony-project.org/doc/4.1/chrony.conf.html\n• https://chrony-project.org/"
  },
  {
    "id": 125,
    "question": "¿Cuáles de los siguientes operadores de comparación de test actúan sobre elementos del sistema de archivos? (Elija dos).",
    "options": {
      "A": "-z",
      "B": "-eq",
      "C": "-d",
      "D": "-f",
      "E": "-lt"
    },
    "answer": "CD",
    "explanation": "Nota: esta pregunta es un duplicado de la pregunta 40. En el original los operadores aparecen como \"\"z, \"\"eq, etc., por un error de conversión; son -z, -eq, -d, -f y -lt.\n\nLa pregunta se refiere a los operadores de comparación que comprueban propiedades de los elementos del sistema de archivos, es decir, operadores que determinan si un elemento del sistema de archivos cumple una condición.\n\nLa opción C, -d, es correcta porque comprueba si un elemento del sistema de archivos es un directorio. Es una operación habitual, ya que los scripts a menudo necesitan distinguir entre archivos y directorios para procesarlos.\n\nLa opción D, -f, es correcta porque comprueba si un elemento del sistema de archivos es un archivo regular. Al igual que con los directorios, saber si un elemento es un archivo es esencial antes de leerlo, escribirlo o ejecutarlo.\n\nLas opciones A (-z), B (-eq) y E (-lt) son incorrectas en este contexto. -z comprueba si una cadena tiene longitud cero, mientras que -eq y -lt son operadores de comparación numérica: comprueban, respectivamente, si dos enteros son iguales y si uno es menor que otro. Ninguno comprueba propiedades de los elementos del sistema de archivos. El comando test (o su equivalente con corchetes, [ ]) usa estos operadores: test -d ruta confirma si una ruta es un directorio, y test -f ruta confirma si es un archivo regular.\n\nLecturas recomendadas sobre el comando test y los operadores de archivos:\n\n1. Documentación de test en GNU Coreutils: https://www.gnu.org/software/coreutils/manual/html_node/test-invocation.html\n2. Manual de Bash: https://www.gnu.org/software/bash/manual/html_node/Conditional-Constructs.html"
  },
  {
    "id": 126,
    "question": "¿Cuáles de los siguientes operadores de comparación de test actúan sobre elementos del sistema de archivos? (Elija dos).",
    "options": {
      "A": "-z",
      "B": "-eq",
      "C": "-d",
      "D": "-f",
      "E": "-lt"
    },
    "answer": "CD",
    "explanation": "Nota: esta pregunta es otro duplicado de las preguntas 40 y 125.\n\nLas respuestas correctas son la C y la D. En los scripts de shell, sobre todo en las condiciones de test (que suelen usarse con if, while o until), hay operadores dedicados a comprobar propiedades del sistema de archivos: si un archivo existe, si es un directorio, si es ejecutable, etc.\n\nLa opción C, -d, es el operador que comprueba si un archivo es un directorio. El comando test (o su equivalente [ ]) evalúa si el archivo indicado después de -d es un directorio. Si lo es, devuelve verdadero (código de salida 0); en caso contrario, devuelve falso (código distinto de 0).\n\nLa opción D, -f, comprueba de forma similar si un archivo es un archivo regular. test -f archivo devuelve verdadero si el archivo existe y es un archivo regular (no un directorio ni otro tipo de archivo especial). Si no existe o no es un archivo regular, devuelve falso.\n\nNota: la explicación original atribuye a unas «comillas dobles» un papel de protección; en realidad esas comillas son un error de conversión del guion (-) y no forman parte de los operadores.\n\nLas opciones A, B y E son incorrectas en este contexto. -z comprueba si una cadena tiene longitud cero; no es un operador de archivos. -eq es un operador de comparación numérica que comprueba si dos enteros son iguales (para cadenas se usa =), y -lt es otro operador numérico que determina si un número es menor que otro. Ninguno tiene relación con los elementos del sistema de archivos.\n\nPor lo tanto, solo son correctos los operadores diseñados expresamente para comprobaciones del sistema de archivos: -d para directorios y -f para archivos regulares. Estas comprobaciones son fundamentales para tareas como verificar que existe un directorio antes de crear archivos en él, o que existe un archivo de configuración antes de leerlo.\n\nRecursos para profundizar:\n\n1. Documentación de GNU Coreutils (comando test): https://www.gnu.org/software/coreutils/manual/html_node/test-invocation.html\n2. Manual de Bash (construcciones condicionales): https://www.gnu.org/software/bash/manual/html_node/Conditional-Constructs.html\n3. The Open Group Base Specifications Issue 7, edición de 2018 (test): https://pubs.opengroup.org/onlinepubs/9699919799/utilities/test.html"
  }
];
