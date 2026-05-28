# 101.1 — Determinar y configurar los ajustes de hardware

**Peso en el examen:** 2  
**Estado:** ⬜ Pendiente

---

## 📌 Conceptos Clave

<!-- Resumen de conceptos importantes de este subtema -->

- 
- 
- 

---

## 💻 Comandos Importantes

| Comando | Descripción | Ejemplo |
|---------|-------------|---------|
| `lspci` | Lista dispositivos PCI | `lspci -v` |
| `lsusb` | Lista dispositivos USB | `lsusb -t` |
| `lshw` | Info detallada de hardware | `lshw -short` |
| `dmesg` | Mensajes del kernel | `dmesg | grep usb` |
| `uname` | Info del sistema | `uname -a` |

---

## 📂 Archivos y Directorios Relevantes

| Ruta | Descripción |
|------|-------------|
| `/proc/` | Sistema de archivos virtual con info del kernel |
| `/sys/` | Interfaz con dispositivos y drivers |
| `/dev/` | Archivos de dispositivo |

---

## 📝 Notas de Estudio

<!-- Tus apuntes personales aquí -->

---

## ❓ Ejercicios de Repaso

1. ¿Qué comando usarías para listar todos los dispositivos PCI del sistema?
2. ¿Dónde se encuentran los archivos de dispositivo en Linux?
3. ¿Cuál es la diferencia entre `/proc` y `/sys`?

---

## 🔗 Referencias

- [Man page: lspci](https://man7.org/linux/man-pages/man8/lspci.8.html)
- [Kernel docs: sysfs](https://www.kernel.org/doc/html/latest/filesystems/sysfs.html)
