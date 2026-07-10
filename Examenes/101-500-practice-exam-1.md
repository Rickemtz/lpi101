# Examen de Práctica LPI 101-500 — Simulacro #1

**Duración sugerida:** 90 minutos · **Preguntas:** 60 · **Aprobación real LPI:** ~500/800 puntos

Distribución de preguntas por Topic (según pesos oficiales LPI v5.0, 1 punto de peso ≈ 1 pregunta):

| Topic | Preguntas | Peso total |
|-------|-----------|------------|
| 101 — Arquitectura del Sistema | 8 | 8 |
| 102 — Instalación de Linux y Gestión de Paquetes | 12 | 12 |
| 103 — Comandos GNU y Unix | 26 | 26 |
| 104 — Dispositivos, Filesystems y FHS | 14 | 14 |
| **Total** | **60** | **60** |

Preguntas originales elaboradas a partir de las presentaciones locales de este repositorio
(`tema-101-arquitectura-sistema`, `tema-102-instalacion-gestion-paquetes`,
`tema-103-comandos-gnu-unix`, `tema-104-dispositivos-filesystem`) y del temario oficial LPI.

---

## TOPIC 101: Arquitectura del Sistema

### Pregunta 1 [Topic 101.1, peso: 2]
¿Qué comando de gestión de módulos del kernel se debe usar para cargar un módulo
resolviendo automáticamente sus dependencias, a diferencia de `insmod`?

**Respuesta correcta:** `modprobe`
**Justificación:** A diferencia de `insmod`, que carga un módulo de forma aislada, `modprobe`
resuelve automáticamente las dependencias necesarias antes de cargar el módulo solicitado.

### Pregunta 2 [Topic 101.1, peso: 2]
Al ejecutar `lsusb` se obtiene la línea `Bus 001 Device 003: ID 046d:c52b Logitech USB Receiver`.
¿Qué representa el campo `ID`?

A) El número de bus USB al que está conectado el dispositivo
B) El identificador hexadecimal del fabricante y del dispositivo
C) El identificador asignado por el kernel al dispositivo
D) La versión del controlador USB en uso

**Respuesta correcta:** B
**Justificación:** El campo `ID` (formato `vendor:product`) es el identificador hexadecimal del
fabricante y del dispositivo. `Bus` es el número de bus y `Device` es el identificador asignado
por el kernel.

### Pregunta 3 [Topic 101.2, peso: 3]
Complete el nombre del archivo: en sistemas basados en GRUB 2, los parámetros de arranque
permanentes se configuran en `/etc/default/____`.

**Respuesta correcta:** `grub`
**Justificación:** El archivo `/etc/default/grub` define variables como `GRUB_CMDLINE_LINUX`
que se aplican de forma persistente cada vez que se regenera `grub.cfg`.

### Pregunta 4 [Topic 101.2, peso: 3]
¿Qué parámetro del kernel se usa para especificar el programa que actuará como proceso
PID 1 durante el arranque (por ejemplo, para entrar a un shell de emergencia)?

A) `root=`
B) `systemd.unit=`
C) `init=`
D) `acpi=`

**Respuesta correcta:** C
**Justificación:** `init=` especifica el programa que se ejecutará como PID 1; un uso típico de
recuperación es `init=/bin/bash`. `root=` indica la partición raíz, `systemd.unit=` inicia una
unidad concreta de systemd y `acpi=` controla la gestión de energía/hardware.

### Pregunta 5 [Topic 101.2, peso: 3] — *Selecciona 2 respuestas*
¿Cuáles de las siguientes herramientas permiten inspeccionar y medir el proceso de arranque
del sistema?

A) `systemd-analyze blame`
B) `dpkg-reconfigure`
C) `journalctl -b`
D) `ldconfig`

**Respuesta correcta:** A y C
**Justificación:** `systemd-analyze blame` identifica qué servicios consumen más tiempo durante
el arranque y `journalctl -b` consulta los eventos del último arranque. `dpkg-reconfigure`
pertenece a la gestión de paquetes (102.4) y `ldconfig` a la gestión de librerías (102.3).

### Pregunta 6 [Topic 101.3, peso: 3]
Complete la equivalencia: `systemctl isolate multi-user.target` equivale, en SysVinit, al
nivel de ejecución `init ___`.

**Respuesta correcta:** `3`
**Justificación:** `multi-user.target` en systemd corresponde al runlevel 3 (multiusuario sin
interfaz gráfica) de SysVinit, tal como muestra la tabla comparativa de equivalencias.

### Pregunta 7 [Topic 101.3, peso: 3]
¿Qué comando, heredado de SysVinit, permite consultar el nivel de ejecución previo y actual
del sistema?

A) `who -r`
B) `runlevel`
C) `systemctl get-default`
D) `systemctl list-dependencies`

**Respuesta correcta:** B
**Justificación:** `runlevel` muestra el runlevel previo y el actual. `who -r` también informa
el runlevel actual pero como parte de la información de sesión; `systemctl get-default` muestra
el target por defecto configurado (no el runlevel activo); `list-dependencies` lista las
unidades requeridas por un target.

### Pregunta 8 [Topic 101.3, peso: 3]
¿Qué comando tradicional programa un reinicio del sistema dentro de 5 minutos, avisando a
los usuarios conectados?

A) `shutdown -h now`
B) `systemctl reboot`
C) `shutdown -r +5`
D) `shutdown -c`

**Respuesta correcta:** C
**Justificación:** `shutdown -r +5` reinicia el sistema en 5 minutos. `-h now` apaga
inmediatamente, `systemctl reboot` reinicia de inmediato sin demora programada y `-c` cancela
un `shutdown` pendiente.

---

## TOPIC 102: Instalación de Linux y Gestión de Paquetes

### Pregunta 9 [Topic 102.1, peso: 2]
En LVM (Logical Volume Manager), ¿qué elemento agrupa uno o más Physical Volumes (PV) en
un único "pool" de almacenamiento del cual se crean los volúmenes lógicos?

A) Logical Volume (LV)
B) Volume Group (VG)
C) Partición extendida
D) initramfs

**Respuesta correcta:** B
**Justificación:** El Volume Group (VG) agrupa uno o más PVs en un pool común; los Logical
Volumes (LV) son las "particiones lógicas" creadas dentro de ese VG.

### Pregunta 10 [Topic 102.1, peso: 2]
Complete: el comando que inicializa un disco o partición como Physical Volume de LVM es
`____create`.

**Respuesta correcta:** `pvcreate`
**Justificación:** `pvcreate` inicializa un dispositivo de bloque como PV; `pvs` y `pvdisplay`
se usan después para consultar los PV ya creados.

### Pregunta 11 [Topic 102.2, peso: 2]
¿Cuál es la diferencia principal entre el archivo de configuración de GRUB Legacy y el de
GRUB 2?

A) GRUB Legacy usa `/boot/grub/grub.cfg` y GRUB 2 usa `/boot/grub/menu.lst`
B) GRUB Legacy usa `/boot/grub/menu.lst` y GRUB 2 usa `/boot/grub/grub.cfg`
C) Ambos usan el mismo archivo, `/etc/default/grub`
D) GRUB Legacy no usa archivo de configuración

**Respuesta correcta:** B
**Justificación:** GRUB Legacy se configura en `/boot/grub/menu.lst`, mientras que GRUB 2 usa
`/boot/grub/grub.cfg`, generado automáticamente a partir de `/etc/default/grub` con
`update-grub`.

### Pregunta 12 [Topic 102.2, peso: 2]
Complete: tras modificar `/etc/default/grub`, el comando que regenera `grub.cfg` a partir de
esa configuración es `____-grub`.

**Respuesta correcta:** `update-grub`
**Justificación:** `update-grub` es equivalente a `grub-mkconfig -o /boot/grub/grub.cfg` y
aplica los cambios hechos en `/etc/default/grub`.

### Pregunta 13 [Topic 102.3, peso: 1]
¿Qué comando muestra las librerías compartidas de las que depende un ejecutable, junto con
la ruta completa de cada una?

A) `ldconfig`
B) `ldd`
C) `modinfo`
D) `apt-file`

**Respuesta correcta:** B
**Justificación:** `ldd` muestra las dependencias de librerías compartidas de un binario y su
ruta de carga. `ldconfig` actualiza la caché `/etc/ld.so.cache`, no consulta un binario
específico; `modinfo` es para módulos del kernel.

### Pregunta 14 [Topic 102.4, peso: 3]
Un administrador ejecuta `dpkg -i openshot-qt.deb` y la instalación falla porque falta la
dependencia `fonts-cantarell`. ¿Qué afirmación es correcta?

A) `dpkg` resuelve dependencias automáticamente, así que el error es un bug
B) `dpkg` no resuelve dependencias; el usuario debe instalarlas manualmente o usar `apt`
C) El paquete `.deb` está corrupto y debe descargarse de nuevo
D) `dpkg -i --force` es la solución recomendada para producción

**Respuesta correcta:** B
**Justificación:** `dpkg` es una herramienta de bajo nivel y no resuelve dependencias; ante un
fallo de este tipo se recomienda instalar la dependencia faltante o usar una herramienta de
alto nivel como `apt`. Forzar con `--force` puede dejar el sistema en un estado inconsistente.

### Pregunta 15 [Topic 102.4, peso: 3]
Complete la ruta: el archivo principal que define los repositorios que APT utilizará para
descargar paquetes es `/etc/apt/____`.

**Respuesta correcta:** `sources.list`
**Justificación:** `/etc/apt/sources.list` contiene las líneas `deb`/`deb-src` con la URL,
distribución y componentes de cada repositorio; también pueden añadirse archivos `.list`
adicionales en `/etc/apt/sources.list.d/`.

### Pregunta 16 [Topic 102.4, peso: 3] — *Selecciona 2 respuestas*
¿Cuáles de los siguientes son componentes de repositorio específicos de **Debian** (y no de
Ubuntu)?

A) `universe`
B) `contrib`
C) `non-free`
D) `multiverse`

**Respuesta correcta:** B y C
**Justificación:** Debian usa los componentes `main`, `contrib`, `non-free`, `security` y
`backports`. `universe` y `multiverse` son componentes propios de Ubuntu.

### Pregunta 17 [Topic 102.5, peso: 3]
¿Qué opción de `rpm` permite averiguar qué paquete instalado posee un archivo específico del
sistema?

A) `rpm -qa`
B) `rpm -qi`
C) `rpm -ql`
D) `rpm -qf`

**Respuesta correcta:** D
**Justificación:** `rpm -qf /ruta/al/archivo` identifica el paquete propietario de un archivo.
`-qa` lista todos los paquetes instalados, `-qi` muestra información de un paquete y `-ql` lista
los archivos que contiene.

### Pregunta 18 [Topic 102.5, peso: 3]
Complete: la herramienta de gestión de paquetes que es la evolución moderna de YUM, usada por
defecto en Fedora y RHEL 8+, se llama `____`.

**Respuesta correcta:** `dnf`
**Justificación:** DNF (Dandified YUM) reemplaza a YUM en Fedora y RHEL 8 en adelante, con
sintaxis muy similar (`dnf install`, `dnf search`, `dnf provides`, etc.).

### Pregunta 19 [Topic 102.5, peso: 3]
En SUSE/openSUSE, ¿qué comando de `zypper` lista los repositorios configurados?

A) `zypper search`
B) `zypper refresh`
C) `zypper repos` (o `zypper lr`)
D) `zypper info`

**Respuesta correcta:** C
**Justificación:** `zypper repos` (alias `zypper lr`) lista los repositorios; `refresh` actualiza
los índices, `search` busca paquetes e `info` muestra el detalle de un paquete concreto.

### Pregunta 20 [Topic 102.6, peso: 1]
¿Cuál es la diferencia entre un hipervisor tipo 1 (bare-metal) y uno tipo 2 (hosted)?

A) El tipo 1 requiere un sistema operativo anfitrión previo; el tipo 2 no
B) El tipo 1 se ejecuta directamente sobre el hardware; el tipo 2 se ejecuta sobre un sistema
   operativo anfitrión
C) Solo el tipo 2 soporta virtualización completa
D) No hay diferencia funcional, solo de nombre comercial

**Respuesta correcta:** B
**Justificación:** Un hipervisor tipo 1 (p. ej. Xen, KVM) corre directamente sobre el hardware;
uno tipo 2 (p. ej. VirtualBox) se ejecuta sobre un sistema operativo anfitrión ya instalado.

---

## TOPIC 103: Comandos GNU y Unix

### Pregunta 21 [Topic 103.1, peso: 4]
¿Cuál es la diferencia entre `env` y `set` ejecutados sin argumentos en Bash?

A) `env` muestra todas las variables (locales y de entorno); `set` solo las exportadas
B) `env` muestra solo las variables exportadas; `set` muestra todas las variables y funciones
   (incluidas las locales)
C) Ambos comandos son sinónimos exactos
D) `set` solo funciona dentro de scripts, `env` solo en modo interactivo

**Respuesta correcta:** B
**Justificación:** `env` lista únicamente las variables de entorno exportadas; `set` muestra
todas las variables del shell, incluidas las locales y las funciones definidas.

### Pregunta 22 [Topic 103.1, peso: 4]
Complete: el comando que clasifica si un nombre corresponde a un binario, un builtin, un alias
o una entrada "hashed" del shell es `____`.

**Respuesta correcta:** `type`
**Justificación:** `type CMD` indica la naturaleza del comando (binario, alias, función o
builtin), a diferencia de `which`, que solo devuelve la ruta absoluta del binario.

### Pregunta 23 [Topic 103.1, peso: 4]
Dada la variable `mynewvar=goodbye`, ¿qué salida produce `echo "$mynewvar"` frente a
`echo $mynewvar` sin comillas?

A) Ambos imprimen `goodbye`; no hay diferencia práctica en este caso
B) Con comillas dobles se imprime literalmente `$mynewvar`; sin comillas se expande a `goodbye`
C) Con comillas dobles no se expande la variable; sin comillas sí
D) Ninguno de los dos expande la variable

**Respuesta correcta:** A
**Justificación:** Las comillas dobles conservan el valor literal de todo excepto `$`, `` ` `` y
`\`, por lo que `$mynewvar` sí se expande dentro de ellas; el resultado en ambos casos es
`goodbye` (la diferencia relevante de comillas dobles aparece con espacios internos o
caracteres especiales, no con la expansión de `$`).

### Pregunta 24 [Topic 103.1, peso: 4]
¿Qué opción de `uname` muestra únicamente la arquitectura de hardware del sistema (por
ejemplo, `x86_64`)?

A) `-s`
B) `-n`
C) `-r`
D) `-m`

**Respuesta correcta:** D
**Justificación:** `uname -m` muestra la arquitectura de hardware. `-s` es el nombre del kernel,
`-n` el hostname de red y `-r` el release del kernel.

### Pregunta 25 [Topic 103.2, peso: 2]
¿Qué hace el comando `sed -n '/error/p' archivo.log`?

A) Elimina todas las líneas que contienen "error"
B) Imprime únicamente las líneas que contienen "error" (suprimiendo la impresión automática)
C) Sustituye "error" por una cadena vacía en cada línea
D) Cuenta cuántas líneas contienen "error"

**Respuesta correcta:** B
**Justificación:** `-n` suprime la impresión automática de `sed`, y `/patrón/p` imprime
explícitamente solo las líneas que coinciden con el patrón.

### Pregunta 26 [Topic 103.2, peso: 2]
¿Por qué `uniq -c` puede fallar en eliminar líneas duplicadas si no se combina previamente con
`sort`?

A) `uniq` no acepta la opción `-c`
B) `uniq` solo detecta líneas repetidas cuando son **adyacentes**
C) `uniq` requiere que el archivo esté comprimido con `gzip`
D) `uniq` elimina todas las líneas, duplicadas o no

**Respuesta correcta:** B
**Justificación:** `uniq` solo colapsa/cuenta líneas repetidas consecutivas; si las duplicadas
no son adyacentes, es necesario ordenarlas primero con `sort`.

### Pregunta 27 [Topic 103.3, peso: 4]
Complete: la opción de `find` que ejecuta un comando sobre cada resultado encontrado es
`-____ CMD {} \;`.

**Respuesta correcta:** `exec`
**Justificación:** `find . -name "*.conf" -exec chmod 644 '{}' \;` ejecuta `chmod 644` sobre
cada archivo `.conf` encontrado; `{}` se sustituye por cada resultado y `\;` termina la
expresión.

### Pregunta 28 [Topic 103.3, peso: 4]
Dado el directorio con los archivos `last.txt`, `lest.txt`, `list.txt`, `third.txt` y
`past.txt`, ¿qué archivos devuelve `ls l[aef]st.txt`?

A) `last.txt` y `lest.txt`
B) `last.txt`, `lest.txt` y `list.txt`
C) Todos los archivos del directorio
D) Ningún archivo (patrón inválido)

**Respuesta correcta:** A
**Justificación:** `[aef]` coincide con exactamente un carácter entre `a`, `e` o `f` en esa
posición, por lo que solo `last.txt` y `lest.txt` coinciden (`list.txt` tiene una `i`, que no
está en el conjunto).

### Pregunta 29 [Topic 103.3, peso: 4]
¿Qué hace el comando `tar -czvf backup.tar.gz proyecto/`?

A) Extrae el contenido de `backup.tar.gz` en el directorio `proyecto/`
B) Crea un archivo tar comprimido con gzip a partir del directorio `proyecto/`, en modo verboso
C) Lista el contenido de `backup.tar.gz` sin extraerlo
D) Compara `proyecto/` con el contenido de `backup.tar.gz`

**Respuesta correcta:** B
**Justificación:** `-c` crea un nuevo archivo, `-z` comprime con gzip, `-v` es modo verboso y
`-f` especifica el nombre de archivo de salida.

### Pregunta 30 [Topic 103.3, peso: 4]
¿Cuál es la diferencia clave entre `rmdir` y `rm -r` al eliminar un directorio?

A) `rmdir` elimina directorios con o sin contenido; `rm -r` solo los vacíos
B) `rmdir` solo elimina directorios **vacíos**; `rm -r` elimina el directorio y todo su
   contenido, tenga o no archivos
C) Ambos comandos son idénticos en funcionalidad
D) `rmdir` requiere privilegios de root; `rm -r` no

**Respuesta correcta:** B
**Justificación:** `rmdir` falla si el directorio contiene archivos; `rm -r` elimina
recursivamente el directorio y todo su contenido, independientemente de si está vacío.

### Pregunta 31 [Topic 103.4, peso: 4]
¿Qué logra el operador `2>&1` al final de una línea de comandos como
`comando > salida.log 2>&1`?

A) Redirige stdout a `salida.log` y descarta stderr
B) Redirige stderr al mismo destino al que apunta actualmente stdout (el archivo `salida.log`)
C) Redirige stdout a stderr, ignorando el archivo
D) Ejecuta el comando en segundo plano

**Respuesta correcta:** B
**Justificación:** `2>&1` hace que el descriptor 2 (stderr) apunte adonde apunta el descriptor
1 (stdout) en ese momento; como stdout ya fue redirigido a `salida.log`, stderr también termina
ahí. El orden de los operadores importa.

### Pregunta 32 [Topic 103.4, peso: 4]
Complete: el comando que muestra la salida de un proceso en pantalla **y** la guarda
simultáneamente en un archivo (opcionalmente en modo append con `-a`) es `____`.

**Respuesta correcta:** `tee`
**Justificación:** `comando | tee archivo` muestra la salida y la escribe en `archivo` a la vez;
solo captura stdout, por lo que para incluir stderr hay que redirigirlo antes con `2>&1`.

### Pregunta 33 [Topic 103.4, peso: 4]
¿Qué construcción de Bash se usa para redirigir **una sola línea** de texto como entrada
estándar de un comando, como en `wc -c <<< "texto de prueba"`?

A) Here Document (`<<TERM`)
B) Here String (`<<<`)
C) Pipe (`|`)
D) Sustitución de comandos (`$(...)`)

**Respuesta correcta:** B
**Justificación:** El Here String (`<<<"cadena"`) redirige una única línea como entrada
estándar; el Here Document (`<<TERM ... TERM`) se usa para bloques multilínea.

### Pregunta 34 [Topic 103.4, peso: 4]
¿Para qué sirve la opción `-I TERM` de `xargs`?

A) Limita a N el número de argumentos usados por ejecución
B) Define un término de sustitución que permite ubicar el argumento recibido en cualquier
   posición del comando construido
C) Usa el carácter nulo como separador entre argumentos
D) Ignora los argumentos vacíos recibidos por stdin

**Respuesta correcta:** B
**Justificación:** `-I TERM` define un marcador (p. ej. `PATH`) que `xargs` reemplaza por cada
elemento recibido, permitiendo colocarlo en cualquier posición del comando, como en
`xargs -0 -I PATH mv PATH ./`.

### Pregunta 35 [Topic 103.5, peso: 4]
Un proceso se suspendió con `Ctrl+Z`. ¿Qué comando lo reanuda en **segundo plano**?

A) `fg`
B) `bg`
C) `jobs -l`
D) `kill -CONT`

**Respuesta correcta:** B
**Justificación:** `bg [%n]` reanuda un trabajo suspendido enviándolo a segundo plano; `fg` lo
trae a primer plano. `jobs -l` solo lista los trabajos activos con su PID.

### Pregunta 36 [Topic 103.5, peso: 4]
Complete: la señal que se envía con `kill -9 PID` cuando otras señales de terminación no
surten efecto se llama `SIG____`.

**Respuesta correcta:** `KILL`
**Justificación:** `kill -9` (o `kill -KILL`) envía `SIGKILL`, una señal que el proceso no puede
capturar ni ignorar, forzando su terminación inmediata.

### Pregunta 37 [Topic 103.5, peso: 4]
En la salida de `ps aux` (estilo BSD), ¿qué diferencia fundamental existe frente a `top`?

A) `ps` es un monitoreo dinámico en tiempo real; `top` es una instantánea estática
B) `ps` toma una instantánea estática de los procesos; `top` ofrece monitoreo dinámico en
   tiempo real, actualizándose periódicamente
C) Ambos comandos requieren privilegios de root
D) `ps` solo puede mostrar los procesos del usuario actual; `top` muestra todos

**Respuesta correcta:** B
**Justificación:** `ps` genera una lista de procesos en el momento de la ejecución; `top`
refresca la información periódicamente y permite ordenar/interactuar en tiempo real (teclas
`M`, `P`, `k`, `r`, etc.).

### Pregunta 38 [Topic 103.5, peso: 4]
¿Cuál es una diferencia clave entre GNU Screen y tmux según el material del curso?

A) Screen usa arquitectura cliente-servidor; tmux no
B) En tmux, matar un panel **sí** termina su pseudo-terminal y programas asociados; en Screen,
   matar una región **no** mata su ventana
C) Solo tmux permite desvincular (detach) una sesión
D) Solo Screen soporta múltiples ventanas

**Respuesta correcta:** B
**Justificación:** Según la comparativa del material, tmux usa modelo cliente-servidor y matar
un panel sí mata su proceso; en Screen, matar una región no mata la ventana asociada. Ambos
soportan detach de sesiones.

### Pregunta 39 [Topic 103.6, peso: 2]
¿Cuál es el rango válido del valor "nice" para procesos normales en Linux, y qué extremo
representa la **mayor** prioridad?

A) De 0 a 139; 139 es la mayor prioridad
B) De -20 a 19; -20 es la mayor prioridad (más "poco amigable")
C) De -20 a 19; 19 es la mayor prioridad
D) De 1 a 100; 1 es la mayor prioridad

**Respuesta correcta:** B
**Justificación:** El valor nice va de -20 (máxima prioridad, el proceso "cede" menos CPU) a 19
(mínima prioridad); el valor por defecto es 0, correspondiente a la prioridad estática 120.

### Pregunta 40 [Topic 103.6, peso: 2]
Complete: el comando que permite cambiar el valor nice de un proceso que **ya está en
ejecución** (a diferencia de `nice`, que se aplica al lanzar un comando nuevo) es `____`.

**Respuesta correcta:** `renice`
**Justificación:** `renice VALOR -p PID` cambia la prioridad de un proceso en ejecución. Solo
root puede asignar valores nice negativos o reducir el valor nice de un proceso.

### Pregunta 41 [Topic 103.7, peso: 3]
En expresiones regulares básicas (BRE, usadas por `grep` sin `-E`), ¿cómo se representa "una o
más repeticiones" del átomo anterior?

A) `+`
B) `\+`
C) `{1,}`  sin escapar
D) `?`

**Respuesta correcta:** B
**Justificación:** En BRE, los metacaracteres `+`, `?`, `{i,j}` y `|` deben escaparse con `\`
para tener su significado especial (`\+`, `\?`, `\{i,j\}`, `\|`); en ERE (`grep -E` o `egrep`)
se usan sin escapar.

### Pregunta 42 [Topic 103.7, peso: 3]
¿Qué representa la clase de caracteres POSIX `[:alpha:]` dentro de una expresión de
corchetes?

A) Cualquier carácter numérico (0-9)
B) Cualquier carácter alfabético
C) Cualquier carácter alfanumérico
D) Cualquier espacio en blanco

**Respuesta correcta:** B
**Justificación:** `[:alpha:]` coincide con caracteres alfabéticos; `[:digit:]` con dígitos,
`[:alnum:]` con alfanuméricos y `[:space:]` con espacios en blanco.

### Pregunta 43 [Topic 103.7, peso: 3] — *Selecciona 2 respuestas*
¿Qué opciones de `grep` permiten, respectivamente, mostrar el **número de línea** de cada
coincidencia y seleccionar las líneas que **no** coinciden con el patrón?

A) `-n` y `-v`
B) `-c` y `-i`
C) `-o` y `-C`
D) `-n` y `-c`

**Respuesta correcta:** A
**Justificación:** `-n` muestra el número de línea de cada coincidencia y `-v` invierte la
selección, mostrando las líneas que no coinciden. `-c` cuenta coincidencias, `-i` ignora
mayúsculas/minúsculas, `-o` muestra solo la parte coincidente y `-C` da contexto.

### Pregunta 44 [Topic 103.8, peso: 3]
En `vi`/`vim`, ¿qué diferencia existe entre el Modo Normal y el Modo Inserción?

A) En Modo Inserción las teclas se interpretan como comandos; en Modo Normal el texto se
   escribe directamente
B) En Modo Normal las teclas se interpretan como comandos (navegación, edición); en Modo
   Inserción el texto escrito aparece directamente en pantalla
C) Ambos modos son intercambiables sin ninguna tecla especial
D) El Modo Inserción es el modo predeterminado al abrir `vi`

**Respuesta correcta:** B
**Justificación:** `vi` abre en Modo Normal por defecto, donde las teclas ejecutan comandos
(`dd`, `yy`, `x`, etc.); se entra a Modo Inserción con `i`, `a`, `o`, entre otras, y se regresa
a Normal con `Esc`.

### Pregunta 45 [Topic 103.8, peso: 3]
Complete: el comando de dos puntos que guarda los cambios y cierra `vi` en un solo paso es
`:____`.

**Respuesta correcta:** `wq`
**Justificación:** `:wq` escribe (guarda) el archivo y sale de `vi`. `:q` sale sin guardar
(falla si hay cambios sin guardar), `:q!` fuerza la salida descartando cambios y `:x` guarda y
sale solo si hubo modificaciones.

### Pregunta 46 [Topic 103.8, peso: 3]
¿Qué variable de entorno define el editor de texto predeterminado usado por herramientas como
`crontab -e`?

A) `PATH`
B) `SHELL`
C) `EDITOR` (o `VISUAL`)
D) `TERM`

**Respuesta correcta:** C
**Justificación:** `EDITOR` o `VISUAL` definen el editor predeterminado del shell; para que
persista entre sesiones debe exportarse en un archivo de inicio como `~/.bash_profile`.

---

## TOPIC 104: Dispositivos, Filesystems y FHS

### Pregunta 47 [Topic 104.1, peso: 2]
¿Cuál es una limitación del esquema de particionado **MBR** que **no** aplica a GPT?

A) Soporte máximo de 128 particiones
B) Máximo de 4 particiones primarias y límite práctico de discos de hasta 2 TB
C) Requiere un GUID único de 128 bits por disco
D) No puede usarse con sistemas BIOS

**Respuesta correcta:** B
**Justificación:** MBR admite un máximo de 4 particiones primarias (usando extendidas como
contenedor de lógicas) y tiene un límite práctico de 2 TB por disco; GPT soporta hasta 128
particiones y discos sin ese límite práctico.

### Pregunta 48 [Topic 104.1, peso: 2]
Complete: el comando que formatea una partición ya creada como espacio de intercambio
(swap) es `mk____`.

**Respuesta correcta:** `swap`
**Justificación:** `mkswap /dev/sda2` formatea la partición como swap; después se activa con
`swapon /dev/sda2`. El tipo de partición correspondiente en `fdisk` es `82` (Linux swap).

### Pregunta 49 [Topic 104.2, peso: 2]
¿Qué condición es necesaria para poder ejecutar `fsck` de forma segura sobre un sistema de
archivos ext4?

A) El sistema de archivos debe estar montado en modo lectura-escritura
B) El sistema de archivos debe estar desmontado
C) El sistema debe estar en modo gráfico
D) No hay ninguna condición previa

**Respuesta correcta:** B
**Justificación:** `fsck` (y `e2fsck`) deben ejecutarse sobre un sistema de archivos desmontado
para verificar y reparar de forma segura; `e2fsck -n` permite un chequeo de solo lectura sin
reparar.

### Pregunta 50 [Topic 104.2, peso: 2]
¿Cuál es la diferencia principal entre `du` y `df`?

A) `du` muestra el uso de espacio por sistema de archivos completo; `df` por archivo o
   directorio
B) `du` muestra el uso de espacio por archivo/directorio; `df` muestra el uso por sistema de
   archivos montado
C) Ambos comandos hacen exactamente lo mismo
D) `du` requiere privilegios de root; `df` no

**Respuesta correcta:** B
**Justificación:** `du -sh /var/log` reporta cuánto espacio ocupa un directorio específico;
`df -hT` reporta el uso total de cada sistema de archivos montado, incluyendo su tipo.

### Pregunta 51 [Topic 104.3, peso: 3]
¿Cuántos campos tiene cada línea del archivo `/etc/fstab`?

A) 4
B) 5
C) 6
D) 8

**Respuesta correcta:** C
**Justificación:** Cada línea de `/etc/fstab` tiene 6 campos: `FILESYSTEM MOUNTPOINT TYPE
OPTIONS DUMP PASS`.

### Pregunta 52 [Topic 104.3, peso: 3]
Complete: el comando que muestra el UUID, la etiqueta y el tipo de sistema de archivos de un
dispositivo (por ejemplo, `/dev/sda1`) es `____`.

**Respuesta correcta:** `blkid`
**Justificación:** `blkid /dev/sda1` reporta UUID, etiqueta (`LABEL`) y tipo de FS; `lsblk -f`
ofrece una vista en árbol con la misma información.

### Pregunta 53 [Topic 104.3, peso: 3]
Al montar una partición con la opción `noexec`, ¿qué efecto tiene sobre los archivos
contenidos en ella?

A) Impide que se lean archivos de la partición
B) Impide la ejecución de binarios almacenados en esa partición
C) Monta la partición en modo solo lectura
D) Impide el acceso a dispositivos de bloque

**Respuesta correcta:** B
**Justificación:** `noexec` prohíbe la ejecución de binarios ubicados en el sistema de archivos
montado; no afecta la lectura de archivos ni implica solo lectura (eso lo controla `ro`).

### Pregunta 54 [Topic 104.5, peso: 3]
¿Qué permisos resultan de ejecutar `chmod 750 script.sh`?

A) `rwxr-xr-x`
B) `rwxr-x---`
C) `rw-r--r--`
D) `rwx------`

**Respuesta correcta:** B
**Justificación:** 7=`rwx` (propietario), 5=`r-x` (grupo), 0=`---` (otros), lo que da
`rwxr-x---`.

### Pregunta 55 [Topic 104.5, peso: 3] — *Selecciona 2 respuestas*
¿Cuáles de las siguientes afirmaciones sobre los bits especiales de permisos son correctas?

A) El bit SUID (octal 4000) hace que un ejecutable corra con los privilegios de su propietario
B) El Sticky bit (octal 1000), presente en `/tmp`, permite que solo el propietario de un
   archivo pueda borrarlo dentro de ese directorio
C) El bit SGID (octal 2000) solo tiene efecto sobre archivos ejecutables, nunca sobre
   directorios
D) `chmod +t` elimina el Sticky bit de un directorio

**Respuesta correcta:** A y B
**Justificación:** SUID (4000) ejecuta con privilegios del propietario, como en
`/usr/bin/passwd`. El Sticky bit (1000) en directorios como `/tmp` restringe el borrado de
archivos al propietario. SGID (2000) también afecta directorios (hace que los archivos nuevos
hereden el grupo); `chmod +t` **añade** el Sticky bit, no lo elimina (`chmod -t` lo quita).

### Pregunta 56 [Topic 104.5, peso: 3]
Con `umask` establecido en `022`, ¿qué permisos finales obtiene un archivo nuevo creado con
`touch`?

**Respuesta correcta:** `644` (`rw-r--r--`)
**Justificación:** El permiso base para archivos es `666`; al restar la máscara `022` se
obtiene `644` (`666 - 022 = 644`), es decir `rw-r--r--`.

### Pregunta 57 [Topic 104.6, peso: 2]
¿Cuál de las siguientes es una diferencia real entre un enlace duro (hard link) y un enlace
simbólico (symbolic link)?

A) El enlace duro puede apuntar a directorios; el simbólico no
B) El enlace duro no puede cruzar sistemas de archivos distintos; el enlace simbólico sí puede
C) Si se borra el archivo original, el enlace duro queda roto igual que el simbólico
D) El enlace simbólico comparte el mismo inodo que el archivo original

**Respuesta correcta:** B
**Justificación:** El enlace duro apunta directamente al mismo inodo y por eso no puede cruzar
sistemas de archivos ni apuntar a directorios; si se borra el original, el enlace duro sigue
siendo válido. El enlace simbólico apunta al nombre del archivo original, puede cruzar
sistemas de archivos y apuntar a directorios, pero queda roto si el original se borra.

### Pregunta 58 [Topic 104.6, peso: 2]
Complete: el comando para crear un enlace **simbólico** llamado `softlink.txt` que apunte a
`original.txt` es `ln -_ original.txt softlink.txt`.

**Respuesta correcta:** `-s`
**Justificación:** `ln -s ORIGEN ENLACE` crea un enlace simbólico; sin `-s`, `ln` crea un
enlace duro.

### Pregunta 59 [Topic 104.7, peso: 2]
Según el Filesystem Hierarchy Standard (FHS), ¿qué directorio está destinado a almacenar
"datos variables" como registros del sistema (logs) y colas de impresión?

A) `/opt`
B) `/srv`
C) `/var`
D) `/proc`

**Respuesta correcta:** C
**Justificación:** `/var` contiene datos variables: `/var/log` (registros), `/var/tmp`
(temporales) y colas/cachés. `/opt` es para paquetes de software adicionales, `/srv` para datos
servidos por el sistema y `/proc` es un sistema de archivos virtual con información del
kernel/procesos.

### Pregunta 60 [Topic 104.7, peso: 2]
¿Cuál es la diferencia principal entre `locate` y `find` para buscar archivos?

A) `find` busca en una base de datos indexada (`updatedb`); `locate` recorre el sistema de
   archivos en tiempo real
B) `locate` busca en una base de datos indexada previamente generada (`updatedb`); `find`
   recorre el sistema de archivos en tiempo real, por lo que es más lento pero siempre
   actualizado
C) Ambos comandos son exactamente equivalentes
D) `locate` solo funciona con rutas absolutas; `find` solo con rutas relativas

**Respuesta correcta:** B
**Justificación:** `locate` consulta una base de datos (por defecto `/var/lib/mlocate.db`)
actualizada periódicamente por `updatedb`, lo que la hace muy rápida pero potencialmente
desactualizada; `find` recorre el árbol de directorios en tiempo real, por lo que siempre
refleja el estado actual pero es más lento en sistemas de archivos grandes.

---

## Hoja de respuestas rápida

| # | R | # | R | # | R | # | R | # | R | # | R |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | modprobe | 11 | B | 21 | B | 31 | B | 41 | B | 51 | C |
| 2 | B | 12 | update-grub | 22 | type | 32 | tee | 42 | B | 52 | blkid |
| 3 | grub | 13 | B | 23 | A | 33 | B | 43 | A | 53 | B |
| 4 | C | 14 | B | 24 | D | 34 | B | 44 | B | 54 | B |
| 5 | A, C | 15 | sources.list | 25 | B | 35 | B | 45 | wq | 55 | A, B |
| 6 | 3 | 16 | B, C | 26 | B | 36 | KILL | 46 | C | 56 | 644 |
| 7 | B | 17 | D | 27 | exec | 37 | B | 47 | B | 57 | B |
| 8 | C | 18 | dnf | 28 | A | 38 | B | 48 | swap | 58 | -s |
| 9 | B | 19 | C | 29 | B | 39 | B | 49 | B | 59 | C |
| 10| pvcreate | 20 | B | 30 | B | 40 | renice | 50 | B | 60 | B |
