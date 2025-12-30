# Configuración de Google Sheets para el Formulario

## Pasos para conectar el formulario con Google Sheets

### 1. Preparar el Google Sheet

<!-- 1. Abre tu Google Sheet: https://docs.google.com/spreadsheets/d/1Zn4JJ09UIkVp4oSKJN9jnVG5yGUFKS1tN3gS0elGgpk/edit -->

2. En la primera fila (fila 1), añade estos encabezados en las columnas A-J:

```
A1: Fecha y Hora
B1: Nombre
C1: Acompañante
D1: Transporte
E1: Intolerancias
F1: Trae Niños
G1: Ubicación Niños
H1: Menú Niños
I1: Menús Vegetarianos
J1: Sorbete
```

### 2. Crear el Script de Apps Script

1. En tu Google Sheet, ve a **Extensiones** → **Apps Script**
2. Se abrirá una nueva pestaña con el editor de código
3. Borra todo el código que aparezca por defecto
4. Copia y pega este código:

```javascript
function doPost(e) {
  try {
    // Obtener la hoja activa
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()

    // Parsear los datos recibidos
    const data = JSON.parse(e.postData.contents)

    // Preparar la fila con los datos
    const row = [
      data.timestamp || new Date().toLocaleString('es-ES'),
      data.nombre || '',
      data.acompanante || '',
      data.transporte || '',
      data.intolerancias || '',
      data.traeNinos || '',
      data.ubicacionNinos || '',
      data.menuNinos || '',
      data.menuVegetariano || '',
      data.sorbete || '',
    ]

    // Añadir la fila a la hoja
    sheet.appendRow(row)

    // Retornar éxito
    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    // En caso de error, retornar el error
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON)
  }
}
```

5. Guarda el proyecto (Ctrl+S o Cmd+S)
6. Dale un nombre al proyecto, por ejemplo: "Wedding Form Handler"

### 3. Desplegar el Script como Web App

1. En el editor de Apps Script, haz clic en **Desplegar** → **Nueva implementación**
2. Haz clic en el icono de configuración (⚙️) junto a "Tipo"
3. Selecciona **Aplicación web**
4. Configura:
   - **Descripción**: "Handler para formulario de boda"
   - **Ejecutar como**: "Yo"
   - **Quién tiene acceso**: "Cualquiera"
5. Haz clic en **Desplegar**
6. **IMPORTANTE**: Copia la **URL del servicio web** que aparece (algo como: `https://script.google.com/macros/s/AKfycby.../exec`)
7. Haz clic en **Aceptar**

**⚠️ Si aparece una advertencia de "Google hasn't verified this app":**

- Esto es normal para apps personales no verificadas
- Haz clic en **"Avanzado"** (o "Advanced")
- Luego haz clic en **"Ir a [nombre de tu proyecto] (no seguro)"** (o "Go to [project name] (unsafe)")
- Esto es seguro porque es tu propia app y solo tú/usuario autorizado puede usarla
- La verificación de Google es solo necesaria para apps públicas que se distribuyen a muchos usuarios

### 4. Actualizar el código del formulario

1. Abre el archivo `src/App.jsx`
2. Busca la línea que dice: `const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'`
3. Reemplaza `YOUR_SCRIPT_ID` con la URL completa que copiaste en el paso anterior
4. Guarda el archivo

### 5. Compartir el Sheet con los novios

1. En tu Google Sheet, haz clic en **Compartir** (botón azul arriba a la derecha)
2. Añade los emails de David y Patricia
3. Selecciona el permiso: **Editor** o **Lector** (según quieras que puedan editar o solo ver)
4. Haz clic en **Enviar**

### 6. Probar el formulario

1. Abre la página web del formulario
2. Rellena el formulario de prueba
3. Envía el formulario
4. Verifica que los datos aparezcan en el Google Sheet

## Notas importantes

- **Primera ejecución**: La primera vez que alguien envíe el formulario, Google te pedirá autorizar el script. Simplemente acepta los permisos (necesita acceso a tu Google Sheet para escribir los datos).
- **Advertencia de verificación**: Es normal que Google muestre una advertencia de que la app no está verificada. Para uso personal es seguro continuar (ver paso 3 arriba).
- Si cambias algo en el script, necesitas crear una **nueva versión** del despliegue.
- La URL del script es pública, pero solo puede escribir en tu Sheet (no puede leer ni modificar otros datos).

## Solución de problemas

- **Error 401**: Necesitas autorizar el script la primera vez
- **Error 403**: Verifica que el acceso sea "Cualquiera" en la configuración del despliegue
- **No aparecen datos**: Verifica que los nombres de las columnas coincidan exactamente
