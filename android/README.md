# ChronoCast para Android (TWA)

La app de Google Play de [ChronoCast](https://neogroup-chronocast.vercel.app): una Trusted Web Activity generada con [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap) que abre el sitio a pantalla completa y en horizontal. El juego en sí es el resto de este repo; esta carpeta solo tiene el envoltorio Android. Todos los comandos de abajo se corren desde `android/`, y Vercel la ignora (`.vercelignore`).

- Package: `app.chronocast.twa`
- Host: `neogroup-chronocast.vercel.app`. Si el dominio de producción es otro, cambiá `host`, `iconUrl`, `maskableIconUrl`, `webManifestUrl` y `fullScopeUrl` en `twa-manifest.json`.

## Requisitos

- Node 20 o más nuevo y `npm i -g @bubblewrap/cli`.
- La primera vez, `bubblewrap doctor` ofrece bajar el JDK 17 y el Android SDK.

## La clave de firma (una sola vez)

```bash
keytool -genkeypair -v -keystore android.keystore -alias android -keyalg RSA -keysize 2048 -validity 10000
```

Guardá las dos contraseñas en tu gestor de contraseñas (o en `KEYSTORE-CREDENTIALS.txt`, que está en `.gitignore`). **Si se pierde la clave no se puede volver a subir la app con el mismo package** (salvo que uses la firma de Google Play, que es lo recomendado: Play guarda la clave de la app y esta queda como clave de subida).

## Generar el proyecto y compilar

```bash
bubblewrap update      # genera el proyecto Android a partir de twa-manifest.json
bubblewrap build       # pide las contraseñas; deja app-release-signed.apk y app-release-bundle.aab
cp app-release-signed.apk ChronoCast.apk
```

- `app-release-bundle.aab` es lo que se sube a Play Console.
- `ChronoCast.apk` se sube a las Releases de GitHub con ese nombre fijo, así el link de descarga siempre baja la última.

## Asset Links (pantalla completa sin barra de direcciones)

1. Sacá la huella SHA-256: `keytool -list -v -keystore android.keystore -alias android`. Con la firma de Google Play, copiá también la de Play Console → Prueba y lanzamiento → Integridad de la app → Firma de apps.
2. En Vercel, en el proyecto `neogroup-chronocast`, definí:
   - `ANDROID_PACKAGE_NAME=app.chronocast.twa`
   - `ANDROID_SHA256_CERT_FINGERPRINTS=<huella1>,<huella2>`
3. Redeploy y revisá `https://neogroup-chronocast.vercel.app/.well-known/assetlinks.json`.

Si la app abre con la barra de Chrome arriba, falta o no coincide alguna huella.

## Nueva versión

1. En `twa-manifest.json`, subí `appVersionCode` (1, 2, 3...) y cambiá `appVersionName` y `appVersion` (por ejemplo `1.0.1`).
2. `bubblewrap update && bubblewrap build`.
3. Subí el `.aab` a Play Console y el APK a GitHub Releases.

Los cambios del juego no necesitan una versión nueva de la app: la TWA abre siempre el sitio publicado.
