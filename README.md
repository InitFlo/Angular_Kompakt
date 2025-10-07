# 🅰️ Angular Kompakt – Schulungsnotizen

## 📄 Kursinformationen

### Kurszeitraum

`06.10.2025 - 10.10.2025`

### 🎯 Zielgruppe

IT-Entwickler\*innen

### 🧠 Voraussetzungen

Entwickler\*innen von Web- und Clientanwendungen.  
Kenntnisse zumindest einer (objektorientierten) Programmiersprache und Erfahrung mit **JavaScript**, **HTML** und **CSS
**,  
sowie Kenntnisse im Umgang mit Datentypen und Erstellen von eigenen Funktionen.

### 🎓 Ziele

Die Teilnehmenden kennen die Aspekte für die Umsetzung von Angular-Enterprise-Anwendungen.  
Sie wissen, wie man wiederverwendbaren Code mit Modularisierung erreicht.  
Sie verwenden erweitertes Routing und Zustandsverwaltung mit **NgRx** und implementieren **Unit-Tests** und **E2E-Tests
**.

---

# !!! Wichtige Information für Front & Backend !!!

## 🚀 Projektstart – Angular Frontend & JSON-Server Backend

Dieses Projekt besteht aus zwei getrennten Teilen:

1. 🖥️ **Frontend** → Angular-App (`frontend/`)
2. 🗄️ **Backend** → JSON-Server (`backend/`)

Beide müssen gestartet werden, damit die Anwendung vollständig funktioniert.

---

## ⚙️ Voraussetzungen

Bevor du beginnst, stelle sicher, dass folgende Tools installiert sind:

| Tool        | Befehl zur Prüfung              | Mindestversion   |
| ----------- | ------------------------------- | ---------------- |
| Node.js     | `node -v`                       | 22.20 oder neuer |
| npm         | `npm -v`                        | 9.x oder neuer   |
| Angular CLI | `ng version`                    | 17.x             |
| JSON Server | wird lokal über npm installiert |

---

## 📁 Projektstruktur (vereinfacht)

```text
📁 Development/
├── 📁 backend/           # JSON-Server (Mock-API)
│   ├── 📄 db.json
│   └── 📄 package.json
│
├── 📁 frontend/          # Angular Frontend
│   ├── 📄 angular.json
│   ├── 📄 package.json
│   └── 📁 src/
│
└── 📄 README.md
```

---

## 🗄️ Backend starten (JSON Server)

Wechsle in den Backend-Ordner:

```bash
cd backend
```

Führe dann den folgenden Befehl aus:

```bash
npm start
```

Der Server startet standardmäßig unter:
👉 **[http://localhost:3001](http://localhost:3001)**

Falls du in der `package.json` ein Delay definiert hast (z. B. `--delay 1000`),
simuliert der Server eine Netzwerklatenz.

> 💡 **Tipp:**
> Die Datei `db.json` enthält die Datenquelle (z. B. `products`, `customers`, ...).
> Änderungen an dieser Datei werden automatisch übernommen, wenn du den Server neu startest.

---

## 🖥️ Frontend starten (Angular)

Öffne ein **zweites Terminal** und wechsle in den Frontend-Ordner:

```bash
cd frontend
```

Starte dann die Angular-App:

```bash
ng serve
```

oder (je nach Angular CLI-Konfiguration):

```bash
npm start
```

Das Frontend läuft standardmäßig auf:
👉 **[http://localhost:4200](http://localhost:4200)**

---

## 🌍 Verbindung zwischen Frontend & Backend

Das Angular-Frontend greift über die in den Environments definierten URLs
auf das Backend zu:

```ts
// Beispiel: src/environments/environment.development.ts
export const environment = {
  development: true,
  apiUrl: "http://localhost:3001",
};
```

Wenn du also im `CustomerService` oder `ProductService` einen API-Aufruf machst:

```ts
const url = environment.apiUrl + "/customers";
```

wird automatisch die korrekte URL aus der jeweiligen Environment-Datei verwendet.

---

## 🔄 Zusammenfassung der Startbefehle

| Bereich                   | Befehl                    | URL                                            |
| ------------------------- | ------------------------- | ---------------------------------------------- |
| **Backend (JSON-Server)** | `cd backend && npm start` | [http://localhost:3001](http://localhost:3001) |
| **Frontend (Angular)**    | `cd frontend && ng serve` | [http://localhost:4200](http://localhost:4200) |

---

## ✅ Überprüfung

Wenn beide Server laufen:

1. Öffne im Browser [http://localhost:4200](http://localhost:4200)
2. Prüfe die Browser-Konsole (F12), ob Daten erfolgreich geladen werden
3. Der JSON-Server sollte Anfragen in seiner Konsole loggen, z. B.:

   ```
   GET /customers 200 OK
   GET /products 200 OK
   ```

---

## 🧠 Nützliche Hinweise

- 🔁 Wenn du Daten im JSON-Server änderst, starte den Server neu.
- 🧩 Falls du Ports ändern möchtest, kannst du das im Start-Script der `package.json` tun:

  ```json
  "scripts": {
    "start": "json-server --watch db.json --port 3001 --delay 1000"
  }
  ```

- 🌐 Angular nutzt standardmäßig **Port 4200**, der API-Server läuft auf **Port 3001**.
  → Es wird automatisch ein **CORS-konformer Zugriff** eingerichtet.

---

✅ **Fertig!**
Nach diesen Schritten sind **Frontend und Backend** erfolgreich verbunden
und können gemeinsam weiterentwickelt werden.

---

# Tagesübersicht / Verlauf

# 📅 Tag 1 - 06.10.25

### 🗂️ Projektstruktur – Tag 01

```
📁 Angular Kompakt/
│
├── 📁 01_web_basics/                # Frontend – Grundlagen (HTML, JS, Bootstrap)
│   ├── 📄 index.html
│   │
│   ├── 📁 app/
│   │   ├── 📄 main.js
│   │   │
│   │   ├── 📁 components/
│   │   │   ├── 📁 product-list/
│   │   │   │   ├── 📄 product-list.js
│   │   ├── 📁 services/
│   │       └── 📄 product.service.js
│   │
│   ├── 📁 lib/
│       ├── 📄 http.js
│
├── 📁 02_typescript/
│   ├── 📁 src/
│   │   ├── 📁 01_vorlage/
│   │   │   ├── 📁 app/
│   │   │   │   ├── 📄 main.ts     # TypeScript-Quelle
│   │   │   │   └── 📄 main.js     # automatisch generierter Output
│   │   │   ├── 📄 index.html
│   │   │
│   │   └── 📁 02_types/
│   │   │   ├── 📁 app/
│   │   │   │   ├── 📄 main.ts     # TypeScript-Quelle
│   │   │   │   └── 📄 main.js     # automatisch generierter Output
│   │   │   ├── 📄 index.html
│   │   │
│   │   ├── 📁 03_generic/
│   │   │   ├── 📁 app/
│   │   │   │   ├── 📄 main.ts     # TypeScript-Quelle
│   │   │   │   └── 📄 main.js     # automatisch generierter Output
│   │   │   ├── 📄 index.html
│   │   │
│   ├── 📄 package.json
│   ├── 📄 tsconfig.json
│   ├── 📄 index.html
│   └── 📁 node_modules/
│
├── 📁 backend/                         # Backend – Node.js Projekt
│   ├──node_modules/                    # automatisch von npm erstellt
│   ├── 📄 package.json
│   ├── 📄 db.json
│   └── 📄 package-lock.json
│
└── 📄 README.md                        # Gesamtbeschreibung / Schulungsübersicht
```

## 🧩 Themenübersicht:

VS Code Shortcuts (Windows):
https://shortcutmasters.com/shortcuts/visual-studio-code/windows/general/show-all-commands

## 🌐 Webentwicklung mit den Web Basics

- Aufbau einer einfachen HTML-Seite
- Verwendung von CSS zur Gestaltung
- Erste JavaScript-Skripte einbinden (`<script src="main.js"></script>`)
- Arbeiten mit der Browser-Konsole (Console API)
  🔗 **Referenzen:**
- [MDN: Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)

## 🎨 Bootstrap Grundlagen

- Einbindung von **Bootstrap** per CDN
- Nutzung von vorgefertigten Layouts und Komponenten
- Aufbau eines responsiven Layouts mit dem **Grid-System**

Dokumentation: [https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

## 🧠 DOM-Manipulation mit JavaScript

- Zugriff auf DOM-Elemente mit `getElementById()`
- Dynamische Änderungen von Text, Klassen und Attributen
- Datei **main.js** in `index.html` eingebunden

## 📦 Import externer JavaScript-Dateien

- Modulstruktur: Aufteilung in mehrere `.js`-Dateien
- Import einer externen Datei (`product-list.js`) in `main.js`
- Konsolen-Ausgabe zur Kontrolle der Imports

## ⚙️ Web Components (Custom Elements API)

- Definition einer eigenen Komponente durch `class ... extends HTMLElement`
- Registrierung mit `customElements.define('product-list', ProductListComponent)`
- Verwendung im HTML: `<product-list></product-list>`

### Erweiterte Funktionen:

- **`connectedCallback()`** – Lifecycle-Methode, wird beim Einfügen ins DOM ausgeführt
- **`loadProducts()`** – simuliert Datenladen
- **`render()`** – dynamisches Generieren von HTML-Listen
- Verwendung von **IIFE** (_Immediately Invoked Function Expression_) und **Array.map()**
- Nutzung moderner JS-Features wie:
  - [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)
  - [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- Vergleich zu Angular: Manuelles vs. automatisches Rendering
  🔗 **Referenzen:**
- [MDN: Web Components API](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)

## 🧩 Erweiterte Web Components

- Nutzung von **Object Literal Notation** für strukturierte Daten (`{ id, name, price }`)
- Einsatz von **Destructuring** in `Array.map(({ name, price }) => ...)`
- Formatierung von Preisen mit **`toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })`**
- Dynamische Template-Generierung mit **IIFE** und **Array.join('\n')**
- Erweiterte Darstellung im Browser:

```html
<h2>Product List</h2>
<ul>
  <li>Shirt (25,00 €)</li>
  <li>Sneaker (75,00 €)</li>
</ul>
```

## 💻 Backend mit Node.js – Einstieg

- Überprüfung der Node.js-Installation (`node -v`)
- Start der REPL-Konsole (`node`) und Test einfacher Ausdrücke (`typeof 'hello'`)
- Erstellung eines neuen Projekts mit `npm init -y`
- Verständnis der erzeugten package.json:

  - `"name"`, `"version"`, `"main"`, `"scripts"`, `"type"`: `"commonjs"`

- Vorbereitung für:
  - Aufbau eines einfachen Node-Servers
  - Bereitstellung von Produktdaten über eine REST-Schnittstelle
  - Verbindung zum späteren Angular-Frontend

## 🗄️ JSON Server – Simulierte REST-API

- Installation über `npm i json-server@0.17.4`
- Ergänzung des Startskripts in `package.json`:

```json
"start": "json-server --watch db.json --port 3001 --delay 1000"
```

- Starten des Servers mit `npm start`
- API-Endpunkte erreichbar unter http://localhost:3001
- Beispielhafte `db.json`:

```json
{
  "products": [
    {
      "id": 1,
      "name": "Shirt",
      "price": 25
    },
    {
      "id": 2,
      "name": "Sneaker",
      "price": 75
    }
  ]
}
```

- Simulierter Delay (1000 ms) für realistischere Antwortzeiten
- Bereitstellung einer vollwertigen REST-API mit GET/POST/PUT/DELETE-Endpunkten
- Vorbereitung auf den späteren Zugriff aus Angular mit HttpClient

---

## 🧰 Services & HTTP-Kommunikation

- Einführung einer **Service-Schicht** zur Datenkapselung
- Erstellen einer **`ProductService`**-Klasse in `/services/product.service.js`
  - Importiert `HttpClient` aus `/lib/http.js`
  - Bietet Methode `getAllProducts()` zur Kommunikation mit der REST-API
- Verwendung von **privaten Klassenfeldern** (`#http`)
- Nutzung von **Promises** und **async/await** für asynchrone Aufrufe
- Trennung von **Darstellung (Komponente)** und **Datenlogik (Service)**
- In der `product-list.js`:
  - Produkte werden per `ProductService.getAllProducts()` geladen
  - Ergebnis (Promise) wird mit `.then()` verarbeitet
  - Die Komponente rendert die erhaltenen Daten über `this.render()`
- Verbindung mit dem JSON-Server unter `http://localhost:3001/products`

---

## 🔄 Architekturvergleich (Web Components vs. Angular)

| Konzept              | Web Components                          | Angular                    |
| -------------------- | --------------------------------------- | -------------------------- |
| Komponentenstruktur  | Klasse `extends HTMLElement`            | `@Component`               |
| Services             | eigene Klassen (z. B. `ProductService`) | `@Injectable` Services     |
| HTTP                 | eigener `HttpClient`                    | Angular `HttpClient`       |
| Datenbindung         | manuelles Rendern (`innerHTML`)         | automatisches Data Binding |
| Dependency Injection | manuell instanziert                     | Angular DI-System          |

---

## 🧮 TypeScript Grundlagen & Projektkonfiguration

- Neues TypeScript-Projekt initialisiert:

  ```bash
  npm init -y
  ```

- Installation von TypeScript als Dev-Abhängigkeit:

  ```bash
  npm i -D typescript
  ```

- Initialisierung der TypeScript-Konfiguration:

  ```bash
  npx tsc --init
  ```

- Anpassung der **tsconfig.json** mit modernen Einstellungen:

  - `target: "esnext"`
  - `module: "es2022"`
  - `strict: true`
  - `sourceMap: true`
  - `declaration: true`
  - `noUncheckedIndexedAccess: true`
  - `exactOptionalPropertyTypes: true`

- Ergänzung der **package.json**:

  ```json
  "scripts": {
    "start": "tsc --watch"
  }
  ```

- Erstellung einer **index.html** zur Einbindung des kompilierten Outputs:

  ```html
  <script src="app/main.js" type="module"></script>
  ```

- Ausführung des Startskripts:

  ```bash
  npm start
  ```

- Automatische Kompilierung der `.ts`-Dateien zu `.js` in Echtzeit

---

## 🧮 TypeScript Grundlagen – Datentypen & Typisierung

- Verständnis der **impliziten Typisierung**:
  - TypeScript leitet den Typ automatisch aus dem Initialwert ab
  - Beispiel: `const car = { color: 'red' }`
- Nutzung der **expliziten Typisierung**:
  - Typ wird manuell definiert: `let info: any = "Text"`
- Verwendung von **Basisdatentypen**:
  - `number`, `string`, `boolean`
- Typisierung von **Objekten**:
  - Beispiel: `let myCar: { vin: string } = { vin: '0258983424' }`
- Einführung in **Union Types**:
  - `let department: string | number = 'A1'`
- **Arrays** und ihre Typvarianten:
  - `string[]`, `(string | number)[]`, `Array<number>`
- Nutzung von **Literal Types**:
  - `let accessRole: 'admin' | 'user' | 'guest'`
- Einführung in **Tuples**:
  - `let record: [number, string, number] = [1, 'ABC', 7]`
- Verständnis der Unterschiede:
  - **Compile-Time-Typprüfung (TypeScript)** vs. **Runtime-Prüfung (JavaScript)**
- Kontrolle des Typs zur Laufzeit über `typeof`

---

## 🧮 TypeScript Grundlagen – Custom Types (Type Aliases)

- Einführung in **Type Aliases** zur Definition eigener Typbezeichner
- Verwendung eines Alias für primitive Typen:

  ```ts
  type year = number;
  let established: year = 1990;
  ```

- Vereinfachung der Typisierung durch **semantisch sinnvolle Namen**
- Definition eines **Funktions-Typs**:

  ```ts
  type computation = (x: number, y: number) => number;
  ```

- Verwendung des Typs bei der Funktionsdefinition:

  ```ts
  const add: computation = (a, b) => a + b;
  ```

- Vorteile:

  - Erhöhte **Lesbarkeit und Wiederverwendbarkeit**
  - Zentrale Verwaltung von Typdefinitionen
  - Grundlage für spätere komplexe Typen (z. B. Interfaces, Models, DTOs)

---

## 🧬 TypeScript Generics & Interfaces

- Einführung in **Generics** zur Wiederverwendung von Funktionen mit unterschiedlichen Typen
- Verwendung eines **Typparameters `<T>`** als Platzhalter für beliebige Typen
- Rückgabe eines generischen **Promises (`Promise<T>`)** für asynchrone Operationen
- Anwendung von **Generics** in Kombination mit `fetch()`:

````
  ```ts
  function getData<T>(url: string): Promise<T> {
      return fetch(url).then(response => response.json());
  }
````

- Erstellung von **Interfaces** zur Definition von Objektstrukturen:

  ```ts
  interface Product {
    id: number;
    title: string;
    price: number;
  }
  ```

- Nutzung von **Literal Types** innerhalb von Interfaces:

  ```ts
  interface User {
    id: number;
    name: string;
    role: "Admin" | "User" | "Guest";
  }
  ```

- Verwendung der generischen Funktion mit verschiedenen Interfaces:

  ```ts
  getData<Product>("product.json");
  getData<User>("user.json");
  ```

- Vorteile von Generics:

  - **Typsicherheit über Funktionsgrenzen hinweg**
  - **Wiederverwendbarkeit von Code**
  - **Automatische Typableitung** durch den Compiler

TypeScript-Dokumentation:
https://www.typescriptlang.org/docs/handbook/intro.html

---

---

# Praktische Übungen / Projekte:

- Erstellen einer einfachen index.html mit Bootstrap und JavaScript
- Einfache h1 implementierung mit Text "Web Basics"
- Einbinden per linkhref von bootstrap CDN
- Erstellen eines einfachen JavaScript (main.js) Datei welche eine DOM-Manipulation durchführt
- Erstellen von components Ordnerstruktur und einer einfachen product-list.js Datei
- Die product-list.js Datei soll eine einfache Produktliste in der Konsole ausgeben
- Erstellung eines WebComponents (product-list) mit customElements.define

### 🧩 Erklärung: Web Component `"ProductListComponent"` mit dynamischen Inhalten & Lifecycle

Der Code definiert eine eigene HTML-Komponente (eine sogenannte Web Component) mit dem Namen `<product-list>`.

```javascript
// Web Component
class ProductListComponent extends HTMLElement {
  products = []; // Array für Produkte

  constructor() {
    super();
    this.innerHTML = "<h2>Product List</h2>";
  }

  // Wird automatisch aufgerufen, wenn das Element in den DOM eingefügt wird
  connectedCallback() {
    this.loadProducts();
  }

  loadProducts() {
    this.products = ["a", "b"];
    this.render();
  }

  // Gibt es so nicht in Angular – eigenes Render-Verhalten
  render() {
    const list = `<ul>
            ${(() => {
              // IIFE = Immediately Invoked Function Expression
              return this.products
                .map(() => {
                  // Erzeugt aus jedem Element ein <li>
                  return `<li>Test</li>`;
                })
                .join(""); // Array in String umwandeln
            })()}
        </ul>`;
    this.innerHTML += list;
  }
}

// Registrierung des neuen HTML-Tags
customElements.define("product-list", ProductListComponent);
```

🔍 Schritt-für-Schritt:

1. `connectedCallback()`

   - Diese Methode ist Teil des Web Component Lifecycle.
   - Sie wird automatisch aufgerufen, sobald das Element im DOM erscheint.
   - Vergleichbar mit `ngOnInit()` in Angular-Komponenten.
   - Hier wird `loadProducts()` gestartet.

2. `loadProducts()`

   - Simuliert das Laden von Daten (z. B. aus einer API).
   - Speichert die Produkte in `this.products`.
   - Ruft `render()` auf, um die Ansicht zu aktualisieren.

3. `render()`

   - Baut dynamisch eine HTML-Liste aus den Produktdaten auf.
   - Nutzt eine IIFE (Immediately Invoked Function Expression), um JavaScript innerhalb des Template-Strings
     auszuführen.
   - Verwendet `Array.map()` zum Erzeugen von `<li>` -Elementen.
   - Fügt den generierten HTML-Code an den bestehenden Inhalt (`this.innerHTML +=`) an.

4. `class ProductListComponent extends HTMLElement`

   - Erstellt eine eigene Klasse, die von der Standardklasse `HTMLElement` erbt.
   - Damit wird sie zu einem „echten“ HTML-Element.

5. `constructor()` & `super()`

   - Der Konstruktor wird beim Erzeugen des Elements aufgerufen.
   - `super()` ruft den Konstruktor der Basisklasse (`HTMLElement`) auf – das ist Pflicht.

6. `this.innerHTML = ...`

   - Definiert den HTML-Inhalt, der angezeigt werden soll.

7. `customElements.define('product-list', ProductListComponent)`
   - Registriert das neue HTML-Tag <product-list> im Browser.
   - Danach kannst du es überall im HTML verwenden wie ein normales Tag:

```html
<product-list></product-list>
```

```html
Ergebnis:

<h2>Product List</h2>
```

### ⚖️ Unterschied zu Angular

| Web Component                                                 | Angular                                                                    |
| ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Nutzt Browser-eigene Lifecycle-Methoden (`connectedCallback`) | Nutzt Angular-spezifische Hooks (`ngOnInit`, `ngOnDestroy`, …)             |
| Template-Logik in JavaScript (`innerHTML`, Template-Strings)  | Template in separater `.html`-Datei mit Data-Binding                       |
| Kein Framework nötig                                          | Läuft im Angular-Framework mit Dependency Injection, Change Detection usw. |
| Manuelles Rendern nötig (`this.render()`)                     | Angular aktualisiert automatisch über Change Detection                     |

---

### 🧩 Erweitertes Web Component – Objektstruktur & dynamisches Rendering

```javascript
loadProducts();
{
  this.products = [
    {
      // object literal notation
      id: 1,
      name: "Shirt",
      price: 25,
    },
    {
      id: 2,
      name: "Sneaker",
      price: 75,
    },
  ];
  this.render();
}

// Gibt es so nicht in Angular
render();
{
  const list = `<ul>
        ${(() => {
          // IIFE - Immediately Invoked Function Expression
          return this.products
            .map(({ name, price }) => {
              // Array-Methode
              return `
                 <li>${name} (${price.toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR",
              })})</li>
                `;
            })
            .join("\n"); // Array in Zeichenkette umwandeln
        })()}
    </ul>`;
  this.innerHTML += list;
}
```

---

### 🔍 Erklärung der Neuerungen

1. **`this.products` als Array von Objekten**

   - Statt einfacher Strings (`['a', 'b']`) wird jetzt eine **Liste von Produktobjekten** verwendet.
   - Jedes Produkt ist ein **Object Literal** mit `id`, `name` und `price`.

   Beispiel:

   ```javascript
   { id: 1, name: 'Shirt', price: 25 }
   ```

2. **Destructuring in `map()`**

   - `({name, price})` entpackt die Eigenschaften direkt aus dem Produktobjekt.
   - Spart Schreibarbeit: Kein `product.name` oder `product.price` nötig.

3. **Formatierung mit `toLocaleString()`**

   - Wandelt Zahlen in **lokalisierte Währungsformate** um.
   - Beispielausgabe:

     ```
     Shirt (25,00 €)
     Sneaker (75,00 €)
     ```

   - Syntax:

     ```javascript
     price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
     ```

4. **IIFE (Immediately Invoked Function Expression)**

   - Führt eine anonyme Funktion sofort aus, um den Template-String sauber einzubetten.
   - Dient hier als Inline-Template-Generator.

5. **`join('\n')`**

   - Fügt alle Listenelemente zu einem einzigen String zusammen, getrennt durch Zeilenumbrüche.
   - So entsteht ein vollständiges `<ul>`-Element.

---

### ⚙️ Ergebnis im Browser

```html
<h2>Product List</h2>
<ul>
  <li>Shirt (25,00 €)</li>
  <li>Sneaker (75,00 €)</li>
</ul>
```

---

### 🧠 Vergleich zu Angular

| Web Component                                       | Angular                                                |                                          |
| --------------------------------------------------- | ------------------------------------------------------ | ---------------------------------------- |
| Manuelles Rendering mit `innerHTML`                 | Template Engine mit Data-Binding (`{{ name }}`)        |                                          |
| Daten werden im Code geladen und direkt eingebettet | Datenfluss über `@Input()`, Services oder Observables  |                                          |
| Keine automatische Change Detection                 | Angular aktualisiert DOM bei Datenänderung automatisch |                                          |
| `toLocaleString()` direkt im Template-Code          | Pipes wie `{{ price                                    | currency:'EUR':'symbol':'1.2-2':'de' }}` |

## 🧰 Erstellen eines Backends mit Node.js

### 1. **Node.js-Version prüfen**

```bash
node -v
```

➡️ Gibt die installierte Node-Version aus.
Hier: `v22/23.x.x` (je nach Installation)

> Damit ist Node.js korrekt installiert und einsatzbereit.

---

### 2. **Node REPL starten**

```
node
```

➡️ Öffnet die **interaktive Node.js-Konsole (REPL)**.
Hier kannst du direkt JavaScript-Befehle ausführen.

Beispiel:

```javascript
typeof "hello";
```

Ergebnis:

```
'string'
```

Beenden mit:

```
.exit
```

> 💡 REPL steht für **Read–Eval–Print–Loop** — eine interaktive Umgebung zum Testen von Code.

---

### 3. **Neues Node-Projekt initialisieren**

```
npm init -y
```

➡️ Erstellt automatisch eine **`package.json`**, die alle Metadaten und Abhängigkeiten deines Projekts enthält.

Beispielausgabe:

```json
{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "license": "ISC",
  "type": "commonjs"
}
```

**Erläuterung:**

| Feld                 | Beschreibung                                     |
| -------------------- | ------------------------------------------------ |
| `"name"`             | Projektname (`backend`)                          |
| `"main"`             | Einstiegspunkt der Anwendung (`index.js`)        |
| `"type": "commonjs"` | Modulsystem, das Node.js standardmäßig verwendet |
| `"scripts"`          | vordefinierte Kommandos, z. B. `npm run test`    |

> 🔸 Das Flag `-y` überspringt alle Rückfragen und akzeptiert Standardwerte automatisch.

---

## 💻 Backend – Erweiterung: JSON Server als REST-API

### 1️⃣ Installation von JSON Server

Im Backend-Ordner ausgeführt:

```
npm i json-server@0.17.4
```

➡️ Installiert **json-server** als lokales Entwicklungs-Backend.
Er dient als einfacher HTTP-Server, der JSON-Dateien (z. B. `db.json`) als **REST-API** bereitstellt.

---

### 2️⃣ Anpassung der `package.json`

In der **`backend/package.json`** wurde das Startskript ergänzt:

```json
{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "json-server -w db.json -p 3001 -d 1000"
  },
  "type": "commonjs"
}
```

**Erläuterung der Parameter:**

| Parameter    | Bedeutung                                                                |
| ------------ | ------------------------------------------------------------------------ |
| `-w db.json` | Überwacht Änderungen in der Datei `db.json`                              |
| `-p 3001`    | Server läuft auf Port **3001** (nicht 3000, da Angular diesen oft nutzt) |
| `-d 1000`    | Simuliert eine **1-Sekunden-Latenz** für realistischere API-Tests        |

---

### 3️⃣ Beispiel: Start des Servers

```
npm start
```

➡️ JSON-Server startet und gibt z. B. aus:

```
\{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3001/products
  http://localhost:3001/users

  Watching...
```

---

### 4️⃣ Beispiel: `db.json`

Diese Datei legt eure API-Daten fest, z. B.:

```json
{
  "products": [
    {
      "id": 1,
      "name": "Shirt",
      "price": 25
    },
    {
      "id": 2,
      "name": "Sneaker",
      "price": 75
    }
  ]
}
```

---

### 5️⃣ Nutzung im Browser oder Frontend

Du kannst die Daten nun direkt abrufen über:
[http://localhost:3001/products](http://localhost:3001/products)

Beispiel (Fetch aus dem Frontend):

```javascript
fetch("http://localhost:3001/products")
  .then((res) => res.json())
  .then((data) => console.log("Produkte:", data));
```

Sehr schön 👏 — jetzt wird’s richtig praxisnah und du hast einen sauberen **Service-Layer** mit einer eigenen \*
\*HTTP-Abstraktion** aufgebaut!
Ihr trennt also nun sauber die **Datenlogik (Service)** von der **Darstellung (Web Component)\*\* – das ist genau die
Architektur, die auch Angular verwendet.

Hier bekommst du:
1️⃣ eine **präzise Erklärung** der neuen Struktur und Funktionsweise,
2️⃣ die **Erweiterung deiner Themenübersicht**,
3️⃣ die **aktualisierten Lernziele**.

---

## 💻 Backend – Erweiterung: Services & HTTP-Kommunikation

### 🔹 `lib/http.js` – Generischer HTTP-Client

```javascript
export class HttpClient {
  async get(url) {
    const response = await fetch(url);
    return await response.json();
  }
}
```

🧩 **Erklärung:**

- `HttpClient` kapselt den `fetch()`-Aufruf.
- `async/await` wird verwendet → dadurch wirkt der Code **synchron lesbar**, obwohl er **asynchron** läuft.
- Gibt ein **Promise** zurück, das die geparsten JSON-Daten liefert.
- Diese Klasse ist wiederverwendbar – du kannst später z. B. auch `post()`, `put()`, `delete()` ergänzen.

---

### 🔹 `services/product.service.js` – Service-Schicht

```javascript
import { HttpClient } from "../../lib/http.js";

const url = "http://localhost:3001/products";

export class ProductService {
  #http = new HttpClient();

  getAllProducts() {
    return this.#http.get(url);
  }
}
```

🧠 **Erklärung:**

- `ProductService` ist eine **Datenservice-Klasse** für Produkte.
- Nutzt den generischen `HttpClient`, um vom JSON Server zu lesen.
- `#http` ist ein **privates Feld** – nur innerhalb der Klasse sichtbar.
- `getAllProducts()` ruft die Produktliste von der REST-API (`http://localhost:3001/products`) ab.

Diese Struktur ist **1:1** mit Angular vergleichbar:
→ `ProductService` ≙ `@Injectable()` Service in Angular
→ `HttpClient` ≙ `HttpClient` aus `@angular/common/http`

---

### 🔹 Anpassung in `product-list.js`

```javascript
// es muss #productService importiert und instanziert werden
import {ProductService} from "../../services/product.service.js";

// Innerhalb der Klasse:
#productService = new ProductService();

// ebenfalls muss im constructor die Produktliste geladen werden
this.#productService = new ProductService();

// Neue loadProducts-Methode
loadProducts()
{
    this.#productService
        .getAllProducts()
        .then(products => {
            this.products = products;
            this.render();
        });
}
```

🧩 **Erklärung:**

- `getAllProducts()` liefert ein Promise zurück.
- Sobald die Daten geladen sind (`.then()`), werden sie in `this.products` gespeichert.
- Danach wird die `render()`-Methode aufgerufen → die Komponente aktualisiert sich dynamisch.
- Damit ist das **Frontend vollständig mit dem JSON-Backend verbunden**.

Sehr gut 👍 — ihr seid jetzt im nächsten Schulungsabschnitt **„02_typescript“** und habt dort begonnen, TypeScript
einzurichten.
Ich erkläre dir kurz die neuen Schritte, und danach bekommst du wieder:

1️⃣ die **Erweiterung deiner Themenübersicht**,
2️⃣ die **Lernziele-Erweiterung** im gleichen Stil wie zuvor.

---

Sehr gut aufgepasst ✅ — du hast absolut recht!
Das initiale `npm init -y` gehört chronologisch **an den Anfang der TypeScript-Einrichtung**, bevor `typescript` installiert und die `tsconfig.json` erzeugt wird.

Hier ist dein Abschnitt **„Beginn mit TypeScript – Einrichtung der TypeScript-Umgebung“** jetzt **vollständig korrigiert**, mit allen Schritten **in der richtigen Reihenfolge**, inklusive `npm init -y`, der Installation, Konfiguration und den aktuellen `tsconfig.json`-Einstellungen.

---

## Beginn mit TypeScript – Einrichtung der TypeScript-Umgebung

### 🪜 Schritt 1: Neues Projekt initialisieren

```bash
npm init -y
```

➡️ Erstellt eine neue **`package.json`** mit Standardwerten.
Diese Datei dient als zentrale Konfigurationsbasis für alle Projektabhängigkeiten und Skripte.

Beispielausgabe:

```json
{
  "name": "02_typescript",
  "version": "1.0.0",
  "main": "index.js",
  "license": "ISC"
}
```

---

### 🪜 Schritt 2: TypeScript installieren

```bash
npm i -D typescript
```

➡️ Installiert **TypeScript** als **Dev-Dependency** (`-D` steht für _--save-dev_)
→ Wird nur für die Entwicklung benötigt, nicht zur Laufzeit.

Eintrag in der `package.json`:

```json
"devDependencies": {
  "typescript": "^5.9.3"
}
```

---

### 🪜 Schritt 3: TypeScript-Konfiguration initialisieren

```bash
npx tsc --init
```

➡️ Erstellt automatisch eine **`tsconfig.json`** im Projektverzeichnis.
Diese Datei legt fest, wie TypeScript kompiliert wird.

Konsolenausgabe:

```
Created a new tsconfig.json
You can learn more at https://aka.ms/tsconfig
```

---

### 🪜 Schritt 4: Anpassung der tsconfig.json

Die generierte Konfiguration wurde angepasst, um das Projekt für moderne Browser-Entwicklung und strikte Typprüfung zu optimieren.

```json
{
  "include": ["./src"],
  "exclude": ["./node_modules"],
  "compileOnSave": true,
  "compilerOptions": {
    // File Layout
    // "rootDir": "./src",
    // "outDir": "./dist",

    // Environment Settings
    "module": "es2022",
    "target": "esnext",
    "types": [],

    // Other Outputs
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    // Stricter Typechecking Options
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    // Recommended Options
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true
  }
}
```

---

### 🔍 **Wichtige Compiler-Optionen**

| Bereich                      | Option                                                                | Bedeutung                                                                                                |
| ---------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Dateiauswahl**             | `include` / `exclude`                                                 | Gibt an, welche Dateien kompiliert werden sollen (`src/` wird überwacht, `node_modules/` ausgeschlossen) |
| **Buildverhalten**           | `compileOnSave`                                                       | Kompiliert automatisch beim Speichern (z. B. in VS Code)                                                 |
| **Module & Zielversion**     | `module: "es2022"`, `target: "esnext"`                                | Nutzt moderne ECMAScript-Standards, ideal für aktuelle Browser                                           |
| **TypeScript-Deklarationen** | `declaration`, `declarationMap`                                       | Erstellt `.d.ts`-Dateien mit passenden SourceMaps                                                        |
| **Source Maps**              | `sourceMap`                                                           | Ermöglicht Debugging im Browser auf TypeScript-Ebene                                                     |
| **Typprüfung**               | `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `strict`    | Aktiviert schärfere Typkontrollen                                                                        |
| **Module & Syntax**          | `isolatedModules`, `verbatimModuleSyntax`, `moduleDetection: "force"` | Erzwingt saubere Modulstruktur und Syntax                                                                |
| **JSX & Performance**        | `jsx: "react-jsx"`, `skipLibCheck: true`                              | JSX-Unterstützung und schnellere Builds                                                                  |

---

### 🪜 Schritt 5: package.json – Startskript für den TypeScript-Compiler

```json
{
  "name": "02_typescript",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "tsc --watch"
  },
  "devDependencies": {
    "typescript": "^5.9.3"
  }
}
```

➡️ Mit

```bash
npm start
```

startet der TypeScript-Compiler im **Watch-Modus** und kompiliert alle Änderungen automatisch.

---

### 🪜 Schritt 6: index.html – Einstiegspunkt für den kompilierten Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>TypeScript</title>
  </head>
  <body>
    <h1>TypeScript</h1>
    <script src="app/main.js" type="module"></script>
  </body>
</html>
```

➡️ Bindet den kompilierten JavaScript-Code (`main.js`) ein.
Das Attribut `type="module"` aktiviert **ES6-Module**, wodurch `import` und `export` unterstützt werden.

---

### 🪜 Schritt 7: Projektstruktur nach der Einrichtung

➡️ Der Build-Prozess läuft automatisch:

```
TypeScript (.ts) → Compiler (tsc --watch) → JavaScript (.js) → index.html
```

---

### ✅ Ergebnis

- Neues npm-Projekt initialisiert (`npm init -y`)
- TypeScript installiert und konfiguriert
- **tsconfig.json** mit modernen Compiler-Optionen angepasst
- Automatische Kompilierung über `npm start` aktiviert
- HTML-Testseite eingebunden und lauffähig
- Projektstruktur für weitere TypeScript-Beispiele vorbereitet

---

## TypeScript Grundlagen: Datentypen (Grundlagen der Typsicherheit)

### 💡 Implizite Typisierung

```ts
const car = {
  color: "red",
  vin: "0258983424",
};
car.engine = "hybrid";
```

➡️ TypeScript erkennt automatisch den Typ anhand der Initialwerte.
→ `car` ist implizit ein Objekt mit `color` und `vin` vom Typ `string`.
→ Das Hinzufügen neuer Eigenschaften (`car.engine`) ist möglich, aber nicht streng geprüft, wenn kein Interface existiert.

---

### 💡 Explizite Typisierung & Typumwandlung

```ts
let info: any = "Text";
info = true;
```

➡️ Der Typ `any` deaktiviert die Typprüfung für diese Variable.
Er sollte nur verwendet werden, wenn der Typ zur Entwicklungszeit unbekannt ist.

---

### 💡 Primitive Datentypen

```ts
let birthYear: number = 1980;
let zipCode: string = "12345";
let isActive: boolean = true;
```

➡️ Die drei Grundtypen:

- `number` → Ganzzahlen und Fließkommazahlen
- `string` → Zeichenketten
- `boolean` → Wahrheitswerte

---

### 💡 Objekttypen

```ts
let myCar: { vin: string } = { vin: "0258983424" };
```

➡️ Der Typ des Objekts wird explizit durch eine **Typbeschreibung (Type Literal)** festgelegt.

---

### 💡 Union Types

```ts
let department: string | number = "A1";
department = 234;
```

➡️ Eine Variable kann **mehrere Typen** annehmen.
→ hilfreich bei flexiblen Eingaben oder API-Daten.

---

### 💡 Arrays und Typvarianten

```ts
let listOfItems: string[] = ["A", "B", "C"];
let listOfThings: (string | number)[] = ["A", 34, "C"];
let listWithDiamonds: Array<number> = [32, 34, 36];
```

➡️ Drei Schreibweisen für Arrays:

- `string[]` → Standard-Schreibweise
- `(string | number)[]` → gemischte Typen
- `Array<number>` → Generische Schreibweise

---

### 💡 Literal Types

```ts
let accessRole: "admin" | "user" | "guest" = "admin";
```

➡️ Variablen dürfen **nur definierte Werte** annehmen – ideal für Rollen, Stati oder Konstanten.

---

### 💡 Tuples

```ts
let record: [number, string, number] = [1, "ABC", 7];
```

➡️ **Tupel** definieren eine **feste Reihenfolge** und **Typenanzahl** in Arrays.
→ Beispiel: Datensätze, Key-Value-Paare etc.

---

## 🧠 Typescript: Custom Types (Type Aliases)

### 💡 Type Alias für primitive Typen

```ts
type year = number;
let established: year = 1990;
```

➡️ Ein **Type Alias** erlaubt es, einem bestehenden Typ einen **aussagekräftigeren Namen** zu geben.
So kann z. B. `year` statt `number` verwendet werden, um klarzumachen, **wofür** der Wert steht.

🧩 Vorteile:

- Erhöht die Lesbarkeit
- Erleichtert Änderungen (nur an einer Stelle)
- Dient als semantische Beschreibung des Datentyps

---

### 💡 Type Alias für Funktionen

```ts
type computation = (x: number, y: number) => number;

const add: computation = (a, b): number => {
  return a + b;
};
```

➡️ Hier wird ein **Funktions-Typ** beschrieben:

- Eingabeparameter (`x`, `y`) sind vom Typ `number`
- Rückgabewert ist ebenfalls vom Typ `number`
- Der Alias `computation` kann dann für jede Funktion mit dieser Signatur verwendet werden

🧠 So lassen sich wiederkehrende Funktionsdefinitionen **vereinheitlichen**:

```ts
const multiply: computation = (a, b) => a * b;
const subtract: computation = (a, b) => a - b;
```

Sehr stark 💪 — ihr seid jetzt im **Kapitel „03_generic“**, und hier wird’s richtig spannend:
Ihr habt den Schritt in **Generics** (generische Typisierung) und **Interfaces** gemacht – also in den Bereich, der das **Rückgrat von Angulars Typsystem** bildet (z. B. `HttpClient<T>`, `Observable<T>` etc.).

Ich fasse dir alles wieder im bekannten Stil zusammen:

1️⃣ **Erklärung der neuen Inhalte**,
2️⃣ **Erweiterung der Themenübersicht**,
3️⃣ **Erweiterung der Lernziele**.

---

## Typescript: Generische Typisierung & Interfaces

### 💡 Generische Funktionen

```ts
function getData<T>(url: string): Promise<T> {
  return fetch(url).then((response) => {
    return response.json();
  });
}
```

➡️ `T` ist ein **Generischer Typparameter** – er steht **platzhalterartig** für den Typ der Daten, die zurückgegeben werden.
So kann dieselbe Funktion mit beliebigen Typen (z. B. `Product`, `User`) verwendet werden, ohne den Code zu duplizieren.

🔹 **Vorteil:**
TypeScript kann automatisch ableiten, **welche Struktur** die Antwortdaten besitzen sollen.

🔹 Beispiel:

```ts
getData<Product>("product.json"); // T = Product
getData<User>("user.json"); // T = User
```

→ Der Rückgabewert wird automatisch als `Promise<Product>` bzw. `Promise<User>` typisiert.

---

### 💡 Promise als Rückgabetyp

```ts
Promise<T>;
```

➡️ Bedeutet: Die Funktion gibt ein Promise zurück, das später den Typ `T` enthält.
Damit wird Typsicherheit auch über asynchrone Aufrufe gewährleistet.

Beispiel:
Wenn `Product` `{ id, title, price }` enthält, prüft der Compiler automatisch, dass nur diese Felder existieren dürfen.

---

### 💡 Interfaces zur Typdefinition

```ts
interface Product {
  id: number;
  title: string;
  price: number;
}

interface User {
  id: number;
  name: string;
  role: "Admin" | "User" | "Guest";
}
```

➡️ **Interfaces** beschreiben die **Struktur von Objekten** —
sie legen fest, welche Eigenschaften vorhanden sind und welchen Typ sie haben.

🔹 Typisch für große Anwendungen (z. B. Angular Models):

- garantieren konsistente Datenstrukturen
- ermöglichen Autovervollständigung und Typsicherheit
- können erweitert oder vererbt werden

---

### 💡 Anwendung im Beispiel

```ts
getData<Product>("product.json").then((products) => console.log(products));

getData<User>("user.json").then((users) => console.log(users));
```

➡️ Dank der Generics wird die Funktion:

- beim ersten Aufruf als `getData<Product>` interpretiert → `Promise<Product>`
- beim zweiten Aufruf als `getData<User>` → `Promise<User>`

Damit kennt TypeScript exakt, welche Eigenschaften in `products` oder `users` verfügbar sind.

---

### 💡 JSON-Beispiele

#### `product.json`

```json
{
  "id": 343,
  "title": "Shirt",
  "price": 29.99
}
```

#### `user.json`

```json
{
  "id": 4,
  "name": "Chris",
  "role": "Admin"
}
```

➡️ Beide Dateien entsprechen ihren jeweiligen Interfaces (`Product` und `User`).

---

## ✅ Bisherige Lernziele

### 🌐 Frontend & Web-Basics

- Verständnis der Web-Grundlagen (HTML, CSS, JavaScript)
- Nutzung von **Bootstrap** zur Gestaltung und Strukturierung von Layouts
- DOM-Manipulation mit JavaScript (Elemente erstellen, ändern, reagieren auf Events)
- Strukturierung von Code über mehrere JavaScript-Dateien (`main.js`, `product-list.js`)
- Arbeiten mit der Browser-Konsole zur Laufzeitkontrolle und Fehleranalyse

---

### 🧩 Web Components

- Einführung in **Custom Elements** und Erstellung eigener HTML-Tags
- Nutzung der **Klassenvererbung** (`extends HTMLElement`)
- Verständnis des **Component-Lifecycles** (`connectedCallback()`)
- Laden und Rendern dynamischer Daten mit eigenen Methoden (`loadProducts()`, `render()`)
- Arbeiten mit **Object Literal Notation** und **Array.map()** zur Template-Erzeugung
- Nutzung von **Destructuring** und **toLocaleString()** zur Formatierung von Ausgaben
- Verständnis des Unterschieds zwischen **manuellem Rendering** (Web Components) und **automatischer DOM-Aktualisierung
  ** (Angular)

---

### 💻 Backend mit Node.js

- Überprüfung der **Node.js-Installation** (`node -v`) und Nutzung der REPL-Konsole
- Erstellung eines neuen Node-Projekts mit `npm init -y`
- Verständnis der **package.json** und ihrer wichtigsten Felder (`name`, `main`, `scripts`, `type`)
- Grundlagen der **CommonJS-Modulstruktur** in Node.js
- Vorbereitung auf den Aufbau eines einfachen Backend-Servers zur Datenbereitstellung
- Arbeiten mit der **package.json** und **npm-Skripten**
- Installation und Einsatz des **JSON Servers** als Mock-Backend
- Erstellung einer eigenen **db.json**-Datenquelle
- Starten und Testen einer REST-API auf **Port 3001**
- Verständnis des API-Verhaltens (**GET**, **POST**, **PUT**, **DELETE**)
- Simulation realer Netzwerkverzögerungen über `--delay`
- Umsetzung des vollständigen Datenflusses vom Backend ins Frontend

---

### 🔗 Services & HTTP-Kommunikation

- Einführung einer **Service-Schicht** zur Trennung von Daten- und UI-Logik
- Erstellung einer **`ProductService`**-Klasse zur Kommunikation mit dem Backend
- Verwendung eines generischen **HttpClient** in `/lib/http.js`
- Nutzung von **Promises** und **async/await** für asynchrone Datenverarbeitung
- Einsatz von **privaten Klassenfeldern** (`#field`)
- Dynamisches Nachladen von Produktdaten über die REST-API (`http://localhost:3001/products`)
- Integration der geladenen Daten in die Web Component über `loadProducts()` und `render()`
- Vergleich zu Angular:
  - **ProductService** ≙ `@Injectable()` Service
  - **HttpClient** ≙ Angular `HttpClient`
  - **Promise-Kette** ≙ Observable / Subscription
- Verständnis des Datenflusses:

```json
Web Component → ProductService → HttpClient → JSON Server → Response → Render
```

### 🧭 Gesamtverständnis

- Aufbau einer **klaren, modularen Projektstruktur**
- Verbindung von **Frontend-Komponenten** mit einem **Backend-Service**
- Verständnis der **Trennung von Aufgaben** (UI, Logik, Datenzugriff)
- Nutzung moderner **JavaScript-Sprachfeatures** (Module, Klassen, async/await, Destructuring)
- Erkennen, wie Angular diese Konzepte (Components, Services, HttpClient, DI) **systematisch erweitert und automatisiert
  **

---

### 🧮 TypeScript Grundlagen

- Installation und Einrichtung der TypeScript-Entwicklungsumgebung
- Verständnis des Unterschieds zwischen **JavaScript** und **TypeScript**
- Arbeiten mit der **tsconfig.json** zur Compiler-Konfiguration
- Verständnis der wichtigsten Compiler-Optionen (`target`, `module`, `rootDir`, `outDir`, `strict`)
- Nutzung von `npx tsc` zur Übersetzung von TypeScript-Dateien
- Verständnis des Build-Prozesses von `.ts` nach `.js`
- Einordnung von TypeScript als Basis für Angular-Entwicklung

---

### 🧮 TypeScript Grundlagen – Typisierung

- Verständnis von **impliziter** und **expliziter Typisierung**
- Kennenlernen der primitiven Datentypen (`number`, `string`, `boolean`)
- Typdefinition von Objekten und Arrays
- Anwendung von **Union Types** für flexible Variablen
- Nutzung von **Literal Types** für feste Wertebereiche
- Einführung in **Tuples** zur Definition fester Datenstrukturen
- Einsatz von `typeof` zur Laufzeit-Typkontrolle
- Verständnis des Unterschieds zwischen **TypeScript-Compiler-Prüfung** und **JavaScript-Ausführung**
- Vorbereitung auf **Interfaces** und **Type Aliases** zur Wiederverwendung von Typdefinitionen

---

### 🧮 TypeScript Grundlagen – Custom Types

- Verständnis des Einsatzes von **Type Aliases**
- Fähigkeit, **eigene Typnamen** für bestehende Datentypen zu definieren
- Definition und Nutzung von **Funktions-Typen** mit Parametern und Rückgabewert
- Förderung der **Code-Lesbarkeit** und **Wartbarkeit** durch semantische Typbezeichner
- Vorbereitung auf den Einsatz von **Interfaces** und **Typkompositionen**
- Anwendung im Angular-Kontext (Model-Definitionen, API-Response-Typen)

---

### 🧬 TypeScript Generics & Interfaces

- Verständnis des Konzepts von **Generics** (`<T>`) zur Erstellung wiederverwendbarer Funktionen
- Fähigkeit, **Typparameter** in Funktionen und Klassen zu verwenden
- Verständnis der **Promise<T>**-Syntax für asynchrone generische Rückgaben
- Definition und Einsatz von **Interfaces** zur Typbeschreibung von Objekten
- Nutzung von **Literal Types** innerhalb von Interfaces (z. B. Rollen, Status)
- Anwendung generischer Funktionen auf unterschiedliche Datentypen (z. B. `User`, `Product`)
- Erkennen von Generics als Grundlage vieler Angular-Features (`HttpClient<T>`, `Observable<T>`)
- Förderung von **Code-Wiederverwendung, Lesbarkeit und Typsicherheit**

---

# 📅 Tag 2 - 07.10.25

### 🗂️ Projektstruktur – Stand Tag 01 / Beginn Tag 02

```text
📁 Angular-Kompakt/
├── 📁 backend/
│   ├── 📄 package.json                # JSON Server Konfiguration (Port 3001, Delay 1000 ms)
│   ├── 📄 db.json                     # Mock-Daten (Produkte)
│
├── 📁 01_web_basics/
│   ├── 📄 index.html                  # Einstieg mit Bootstrap CDN
│   └── 📁 app/
│       ├── 📄 main.js                 # DOM-Manipulation & Komponenten-Einbindung
│       └── 📁 components/
│           └── 📁 product-list/
│               └── 📄 product-list.js # Web Component mit Lifecycle-Methode & Render-Funktion
│
├── 📁 02_typescript/
│   ├── 📄 package.json                # TypeScript Setup (mit "tsc --watch")
│   ├── 📄 tsconfig.json               # Compiler-Optionen (z. B. ESNext, strict, SourceMaps etc.)
│   ├── 📄 index.html                  # Einstiegspunkt für TypeScript-Kompilat
│   └── 📁 src/
│       ├── 📁 01_vorlage/
│       │   ├── 📄 index.html
│       │   └── 📁 app/
│       │       ├── 📄 main.ts         # Basis-TS-Vorlage (Einstieg)
│       │       └── 📄 main.js
│       │
│       ├── 📁 02_types/
│       │   ├── 📄 index.html
│       │   └── 📁 app/
│       │       ├── 📄 main.ts         # Datentypen – (implizit/explizit, Arrays, Tuples,
│       │       └── 📄 main.js         #              Unions, Literals)
│       │
│       └── 📁 03_generic/
│           ├── 📄 index.html
│           ├── 📁 app/
│           │   ├── 📄 main.ts         # Generics & Interfaces mit Promise<T> und fetch()
│           │   └── 📄 main.js
│           ├── 📄 product.json        # Beispiel-Produktdaten
│           └── 📄 user.json           # Beispiel-Userdaten
│
└── 📄 README.md                       # Schulungsdokumentation
```

Sehr gut 👏 — das ist der perfekte nächste Schritt in deiner Schulung:
Ihr startet jetzt mit einem **eigenständigen TypeScript-Projekt** auf Basis von **Vite**.

Hier ist der direkt passende Abschnitt für dein `README.md` – **formatiert wie in Tag 01**,
und markiert als offizieller Beginn von **📅 Tag 2 – Einstieg in moderne Build-Tools (Vite + TS)**.

---

# 📅 Tag 2 – 07.10.2025

## ⚡ Einstieg in moderne TypeScript-Entwicklung mit Vite

### 🧠 Ziel

Einrichtung einer modernen Entwicklungsumgebung für TypeScript-Projekte
mithilfe des **Vite Build Tools** – Grundlage für performante Frontend-Apps
und spätere Frameworks wie **Angular** oder **React**.

---

## 🧩 Themenübersicht

- Einführung in **Vite** als modernen Entwicklungs- und Build-Server
- Vergleich zu klassischen Tools (webpack, parcel, Angular CLI)
- Erstellung eines neuen Projekts über `npm create vite@latest`
- Auswahl der **Vanilla + TypeScript**-Variante
- Automatische Einrichtung der Projektstruktur und Abhängigkeiten
- Start des lokalen Entwicklungsservers mit Hot-Reloading
- Verständnis der generierten Dateien (`index.html`, `main.ts`, `vite.config.ts`, `tsconfig.json`)

---

## 🧪 Praktische Übung – Neues Projekt erstellen

```bash
npm create vite@latest
```

### ➡️ Ablauf im Terminal:

```bash
✔ Project name: » 03_ts_projekt
✔ Select a framework: » Vanilla
✔ Select a variant: » TypeScript
✔ Use rollup-vite (Experimental)? » No
✔ Install with npm and start now? » Yes
```

**Vite erstellt automatisch ein vollständiges Projekt in:**

```
C:\Users\<user>\Angular Kompakt\03_ts_projekt
```

und startet den Development-Server:

```bash
VITE v7.1.9  ready in 284 ms
➜  Local:   http://localhost:5173/
```

---

## 📂 Projektstruktur nach der Initialisierung

```text
📁 03_ts_projekt/
├── 📁 node_modules/
├── 📁 public/
├── 📁 src/
│   ├── 📄 main.ts           # Einstiegspunkt – bindet index.html
│   └── 📄 style.css         # Standard-Styles
├── 📄 index.html            # Root-HTML mit <script type="module">
├── 📄 package.json          # npm-Skripte & Abhängigkeiten
├── 📄 tsconfig.json         # TypeScript-Konfiguration
```

---

## ✅ Lernziele

- Verständnis moderner Entwicklungs-Tools (**Vite**)
- Fähigkeit, ein neues **TypeScript-Projekt mit Vite** zu erstellen
- Verständnis der generierten Dateien und ihrer Aufgaben
- Starten und Stoppen des lokalen Dev-Servers (`npm run dev`)
- Vorbereitung auf künftige Framework-Integration (z. B. Angular oder React)
- Nutzung von ES-Modulen und modernem JavaScript-Importsystem

---

### 🔗 Nützliche Ressourcen

- 📘 **Vite Dokumentation:** [https://vitejs.dev/guide/](https://vitejs.dev/guide/)
- 📘 **TypeScript Handbuch:** [https://www.typescriptlang.org/docs/handbook/intro.html](https://www.typescriptlang.org/docs/handbook/intro.html)
- 💡 **VS Code Shortcuts:** [https://shortcutmasters.com/shortcuts/visual-studio-code/windows/general/show-all-commands](https://shortcutmasters.com/shortcuts/visual-studio-code/windows/general/show-all-commands)

---

## 📦 Projektintegration – Web Components & Services mit TypeScript

Nachdem das Grundgerüst mit **Vite + TypeScript** erstellt wurde,  
wurde das Projekt um die aus Tag 1 bekannten Strukturen erweitert,  
um den Code nun vollständig typisiert und modular nutzbar zu machen.

---

### 📂 Projektstruktur nach der Anpassung

```text
📁 03_ts_projekt/
├── 📁 node_modules/
├── 📁 public/
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 components/
│   │   │   └── 📁 product-list/
│   │   │       └── 📄 product-list.ts   # Web Component (TypeScript)
│   │   │
│   │   ├── 📁 services/
│   │   │   └── 📄 product.service.ts    # Service-Klasse mit HttpClient und Typisierung
│   │   │
│   │   ├── 📄 main.ts                   # Einstiegspunkt des Projekts, bindet Komponenten
│   │
│   └── 📁 lib/
│       └── 📄 http.ts                   # HttpClient mit fetch() + async/await
│
├── 📄 index.html                        # Vite-Einstiegsdatei mit <script type="module">
├── 📄 tsconfig.json                     # TypeScript-Konfiguration (strict mode, ESNext)
├── 📄 package.json                      # npm-Skripte (z. B. "dev", "build", "preview")
├── 📄 package-lock.json
└── 📄 .gitignore

```

## 🧠 Erklärungen

- Der Code aus **01_web_basics** wurde in **TypeScript** überführt.
- Strukturierung nach bewährtem Muster:

  - `/app/components` → UI-Komponenten (z. B. `ProductListComponent`)
  - `/app/services` → Datenzugriffslogik (z. B. `ProductService`)
  - `/lib` → technische Hilfsklassen (z. B. `HttpClient`)

- Die Web Component wird über `customElements.define()` registriert und typisiert.
- Daten werden asynchron über `fetch()` geladen (`HttpClient.get(url)`),
  jetzt mit **TypeScript-Promise-Typen** (`Promise<Product[]>`).
- Imports erfolgen mit **ES Modules** (`import { ProductService } from './services/product.service'`).
- Durch Vite läuft alles im **Dev-Server mit Hot-Reloading** (`npm run dev`).

---

## ✅ Lernziele

- Verständnis, wie man bestehende **JavaScript-Projekte in TypeScript migriert**
- Strukturierung eines **modularen Projekts** mit Vite und TS
- Nutzung von **TypeScript in Web Components**
- Einführung von **typisierten Services** und **HTTP-Kommunikation**
- Anwendung von **async/await**, **Promise<T>**, und **Importsystem (ES Modules)**
- Vorbereitung auf Framework-Konzepte (Angular – Components, Services, HttpClient)

---

## 🧠 Komponenten-Dekoration & strukturierte Modularisierung

Nach der Migration der bisherigen JavaScript-Komponenten in das neue TypeScript-Vite-Projekt  
wurde die Projektstruktur erweitert und die Architektur weiter modularisiert.  
Dabei kam erstmals ein **Decorator-Pattern** zum Einsatz, das die Registrierung von Web Components  
analog zu Angulars `@Component()` ermöglicht.

---

## 🧩 Themenübersicht

- Einführung eines **Component-Decorators** zur automatisierten Registrierung von Web Components
- Nutzung von **TypeScript-Interfaces** für klar definierte Datenstrukturen (`Product`)
- Erweiterung des Projekts um eine strukturierte **Model-Ebene**
- Integration eines **typisierten HTTP-Clients** mit Generics (`get<T>(url: string): Promise<T>`)
- Nutzung von **Dependency Injection-ähnlichen Konstruktoren**
- Verständnis der Zusammenhänge zwischen **Decorator**, **Component** und **CustomElementRegistry**

---

## 📂 Neue Projektstruktur

```text
📁 03_ts_projekt/
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 components/
│   │   │   └── 📁 product-list/
│   │   │       └── 📄 product-list.ts     # Web Component mit Decorator
│   │   │
│   │   ├── 📁 model/
│   │   │   └── 📄 product.ts              # TypeScript-Interface für Produktdaten
│   │   │
│   │   ├── 📁 services/
│   │   │   └── 📄 product.service.ts      # Typisierter Service mit HttpClient
│   │   │
│   │   └── 📄 main.ts                     # Einstiegspunkt
│   │
│   └── 📁 lib/
│       ├── 📄 http.ts                     # Generischer HttpClient (async/await + Generics)
│       └── 📄 core.ts                     # Component Decorator
```

---

## 🧠 Erklärung der neuen Module

### 🧱 **HttpClient (lib/http.ts)**

```ts
export class HttpClient {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return await response.json();
  }
}
```

➡️ Ein generischer, wiederverwendbarer HTTP-Client.
Das `<T>` ermöglicht die **typisierte Rückgabe** – so erkennt TypeScript automatisch den erwarteten Datentyp.

---

### 🧩 **Model – Product (app/model/product.ts)**

```ts
export interface Product {
  id: number;
  name: string;
  price: number;
}
```

➡️ Einfache Strukturdefinition, um sicherzustellen,
dass nur valide Produktobjekte verarbeitet werden.

---

### ⚙️ **Decorator-Konzept (lib/core.ts)**

```ts
type Metadata = { selector: string };

export function Component({ selector }: Metadata) {
  return function (classReference: CustomElementConstructor) {
    customElements.define(selector, classReference);
  };
}
```

➡️ Dient als **vereinfachter Angular-ähnlicher Decorator**,
der automatisch eine Web Component unter einem Selektor registriert.

---

### ⚙️ TypeScript-Konfiguration – Aktivierung von Decorators

Damit der in `lib/core.ts` implementierte **`Component`-Decorator** funktioniert,  
müssen in der **tsconfig.json** zwei spezielle Compiler-Optionen aktiviert werden.  
Diese erlauben es TypeScript, die experimentelle Decorator-Syntax zu verarbeiten  
und Metadaten für spätere Framework-ähnliche Features (z. B. Angular) zu erzeugen.

---

## 🧾 Anpassung der `tsconfig.json`

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    ...
  }
}
```

### 🧠 Erklärung

| Option                       | Bedeutung                                                                                                                                                                                   |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`experimentalDecorators`** | Aktiviert die Unterstützung für Decorators (z. B. `@Component`, `@Injectable`). Ohne diese Option können keine Decorator-Funktionen oder -Fabriken verwendet werden.                        |
| **`emitDecoratorMetadata`**  | Ergänzt generierte JavaScript-Dateien um zusätzliche Metadaten (Typinformationen, Konstruktor-Parameter usw.). Dies wird z. B. von Angular, InversifyJS oder ähnlichen DI-Systemen genutzt. |

---

### 🧩 **Web Component (product-list.ts)**

```ts
@Component({
  selector: "product-list",
})
class ProductListComponent extends HTMLElement {
  products: Product[] = [];

  constructor(private productService: ProductService = new ProductService()) {
    super();
    this.innerHTML = "<h2>Product List</h2>";
  }

  connectedCallback() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().then((products) => {
      this.products = products;
      this.render();
    });
  }

  render() {
    const list = `<ul>${this.products
      .map(
        ({ name, price }) => `
                <li>${name} (${price.toLocaleString("de-DE", {
          style: "currency",
          currency: "EUR",
        })})</li>`
      )
      .join("\n")}</ul>`;
    this.innerHTML += list;
  }
}
```

➡️ Der **Decorator `@Component()`** (funktional über `Component({...})(Class)`) ersetzt die manuelle Registrierung per
`customElements.define()`.
➡️ Der **`ProductService`** wird per Konstruktor-Injection bereitgestellt.

---

### 🧩 **Service-Schicht (product.service.ts)**

```ts
import { HttpClient } from "../../lib/http";
import type { Product } from "../model/product";

const url = "http://localhost:3001/products";

export class ProductService {
  #http = new HttpClient();

  getAllProducts() {
    return this.#http.get<Product[]>(url);
  }
}
```

➡️ Stellt alle Datenoperationen für Produkte bereit.
➡️ Der Rückgabetyp `Promise<Product[]>` ist **vollständig typisiert**.

---

## ✅ Lernziele

- Verständnis der **Modularisierung mit Services, Models und Components**
- Einsatz von **Generics** zur Typisierung asynchroner Datenabrufe
- Nutzung eines **Decorators** zur komponentenbasierten Architektur
- Vergleich zwischen **CustomElements API** und Angular-ähnlicher Struktur
- Anwendung von **Kapselung und Dependency Injection-Prinzipien**
- Sicherer Umgang mit TypeScript-Syntax: `interface`, `type`, `private fields`, `Generics`, `Promises`

---

## 🧩 Vorbereitung auf Angular – Einrichtung der Angular CLI

Zum Abschluss von **Tag 2** wurde begonnen, die **Angular-Umgebung** aufzusetzen,
um in den nächsten Schritten die bisher erarbeiteten TypeScript-Konzepte
(Web Components, Services, Decorators) in einem echten Framework wiederzufinden.

---

## ⚙️ Installation der Angular CLI

```bash
npm i -g @angular/cli@19
ng v
```

➡️ Installiert die **Angular CLI** (Version 19.2.17) global.

---

## 🏗️ Erstellen eines neuen Angular-Projekts

```bash
ng new frontend
```

**Auswahl während des Setups:**

| Eingabe                     | Auswahl         |
| --------------------------- | --------------- |
| Stylesheet-Format           | **Sass (SCSS)** |
| Server-Side Rendering / SSG | **No**          |

➡️ Dadurch wird automatisch ein lauffähiges Grundgerüst mit allen Standarddateien erstellt.

---

## 📁 Initiale Struktur des Angular-Projekts

```text
📁 frontend/
├── angular.json
├── package.json
├── tsconfig.json
├── README.md
├── 📁 src/
│   ├── main.ts
│   ├── index.html
│   ├── 📁 app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   └── app.config.ts
│   └── 📁 assets/
└── 📁 .vscode/
    └── extensions.json
```

---

### 🧠 Verständnis

- Die CLI erzeugt automatisch alle relevanten Dateien (Build-Konfiguration, Linter, Testing-Setup).
- Das Grundprinzip bleibt gleich wie bei den vorherigen Übungen:
  **Komponenten + Services + Datenfluss**, nun aber von Angular verwaltet.
- Die `AppComponent` fungiert als Einstiegspunkt der Anwendung.
- **SCSS** ist standardmäßig aktiv und kann projektweit genutzt werden.

---

### ✅ Lernziele

- Installation und Nutzung der **Angular CLI**
- Verständnis des automatischen Scaffoldings eines Angular-Projekts
- Vergleich zwischen **manuell erstellten TypeScript-Komponenten** und Angular-Struktur

---

### 🔗 Nützliche Links

- 📘 **Angular Dokumentation** → [https://angular.dev](https://angular.dev)
- ⚙️ **Angular CLI Referenz** → [https://angular.dev/tools/cli](https://angular.dev/tools/cli)
- 💡 **Node LTS Informationen** → [https://nodejs.org/en/about/previous-releases](https://nodejs.org/en/about/previous-releases)
- 🎨 **Sass / SCSS Syntax** → [https://sass-lang.com/documentation/syntax#scss](https://sass-lang.com/documentation/syntax#scss)

---

## 🚀 Start des Angular-Frontends

Nach der erfolgreichen Erstellung des Projekts mit der Angular CLI  
wurde das neue **Angular-Frontend** erstmals gestartet, um die Grundstruktur zu testen  
und den Build-Prozess sowie die Entwicklungsumgebung kennenzulernen.

---

## ▶️ Startbefehl

```bash
cd frontend
npm start
```

oder alternativ:

```bash
ng serve
```

➡️ Startet den Angular Development Server
und öffnet die Anwendung automatisch unter:

```
http://localhost:4200/
```

---

### 🧠 Erklärung

- Angular verwendet standardmäßig den integrierten **Entwicklungsserver** (`ng serve`),
  der Quellcodeänderungen automatisch erkennt (**Hot Reloading**).
- Beim Start wird die App aus `src/main.ts` gebootstrapped,
  wobei die **Root-Komponente `AppComponent`** aus `app/app.component.ts` geladen wird.
- Änderungen an HTML, CSS (SCSS) oder TypeScript werden sofort im Browser reflektiert.
- Der Entwicklungsserver kompiliert das Projekt mit dem **Angular Compiler (AOT/JIT)**
  und zeigt Buildfehler direkt in der Konsole oder im Browser an.

---

### 📄 Standardansicht im Browser

Nach dem ersten Start zeigt Angular eine Standard-Seite mit dem Angular-Logo und einem Link auf die offizielle Dokumentation:

```
Welcome to frontend!
This project is running successfully.
```

➡️ Dies bestätigt, dass der Compiler, der Dev-Server und die Projektkonfiguration korrekt funktionieren.

---

### ✅ Lernziele (Erweiterung)

- Starten und Überwachen eines Angular-Dev-Servers
- Verständnis des Angular-Bootstrap-Prozesses (`main.ts` → `AppComponent`)
- Erkennen der Live-Reload-Funktionalität
- Sicherer Umgang mit `ng serve`, `npm start` und Build-Logs

---

### 🔗 Nützliche Links

- ⚡ **Angular CLI – ng serve** → [https://angular.dev/tools/cli/serve](https://angular.dev/tools/cli/serve)
- 🧩 **Angular Main Entry Point** → [https://angular.dev/guide/bootstrapping](https://angular.dev/guide/bootstrapping)
- 💡 **Angular Quick Start** → [https://angular.dev/tutorials/learn-angular](https://angular.dev/tutorials/learn-angular)

---

## 🧱 Anpassung der Root-Komponente (`AppComponent`)

Nach dem erfolgreichen Start des Angular-Projekts wurde die automatisch generierte **`AppComponent`** überarbeitet.  
Dabei wurden die externen Dateien `app.component.html` und `app.component.scss` entfernt,  
um das Komponenten-Template direkt inline in der TypeScript-Datei zu definieren.  
Dies erleichtert das Verständnis des Komponentenaufbaus und dient als Einstieg in die Angular-Template-Syntax.

---

## 📄 Neue Struktur: `app.component.ts`

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  imports: [],
  template: ` <h1>{{ title }}</h1> `,
})
export class AppComponent {
  title = "frontend";
}
```

---

### 🧠 Erklärung

- **@Component Decorator**
  Deklariert eine Angular-Komponente und definiert Metadaten wie `selector`, `template` und optionale `imports`.

- **Inline-Template**
  Der HTML-Code wird direkt im Template-Feld der Deklaration definiert (anstelle einer separaten `.html`-Datei).
  → Vorteil: Übersichtlicher bei kleinen Demos oder Schulungsprojekten.

- **Entfernte Dateien:**

  - `app.component.html`
  - `app.component.scss`
    Beide wurden gelöscht, da die Inhalte nun inline gepflegt werden.

- **Interpolation (`{{ title }}`)**
  Angular ersetzt automatisch die Variable `title` aus der Komponentendefinition im Template.
  → Ein einfaches Beispiel für **Data Binding**.

---

### ✅ Lernziele

- Verständnis der Angular-Komponentenstruktur
- Einsatz des **@Component-Decorators**
- Arbeiten mit **Inline-Templates**
- Nutzung von **Interpolation** (`{{ }}`) zur Darstellung dynamischer Werte
- Vereinfachung des Komponentenaufbaus für lehrreiche, kompakte Beispiele

---

### 🔗 Nützliche Links

- 📘 **Angular Komponenten – Einführung** → [https://angular.dev/guide/components](https://angular.dev/guide/components)
- 💡 **Datenbindung in Angular** → [https://angular.dev/guide/property-binding](https://angular.dev/guide/property-binding)
- ⚙️ **Component Metadata** → [https://angular.dev/reference/api/core/Component](https://angular.dev/reference/api/core/Component)

---

## 🧩 Erstellung eigener Komponenten in Angular

Nach der Anpassung der `AppComponent` wurde nun der nächste Schritt unternommen:  
die Erstellung einer eigenen **Komponente** über die Angular CLI.  
Dies dient als Einstieg in den modularen Aufbau einer Angular-Anwendung.

---

## ⚙️ Generieren einer neuen Komponente

```bash
ng generate component Footer
```

Kurzform:

```bash
ng g c Footer
```

➡️ Erstellt automatisch eine neue Komponente **`FooterComponent`** mit vollständiger Dateistruktur und Boilerplate-Code.

---

### 📂 Neue Struktur

```text
📁 src/app/
├── 📁 components/
│   └── 📁 footer/
│       ├── 📄 footer.component.ts
│       ├── 📄 footer.component.html
│       ├── 📄 footer.component.scss
│       └── 📄 footer.component.spec.ts
```

---

### 🧠 Erklärung

- **`footer.component.ts`**
  Enthält die eigentliche Logik der Komponente.
  Hier befindet sich der `@Component`-Decorator mit `selector`, `templateUrl` und `styleUrls`.

- **`footer.component.html`**
  Das Template der Komponente – hier wird das HTML-Layout definiert.

- **`footer.component.scss`**
  Enthält Styles, die nur für diese Komponente gelten (**Scoped CSS**).

- **`footer.component.spec.ts`**
  Automatisch generierte Testdatei für Unit Tests (optional für Schulungszwecke).

---

### ✅ Lernziele

- Verwendung des Angular CLI zur automatischen Codegenerierung
- Verständnis der **Komponentenstruktur in Angular**
- Erkennen der Trennung von Logik, Template und Styles
- Verständnis des **Scoping-Konzepts** von Angular-Komponenten
- Vorbereitung auf die Einbindung eigener Komponenten in `AppComponent`

---

### 🔗 Nützliche Links

- 📘 **Angular CLI – Generate Commands** → [https://angular.dev/tools/cli/generate](https://angular.dev/tools/cli/generate)
- 🧩 **Angular Komponenten – Grundlagen** → [https://angular.dev/guide/components](https://angular.dev/guide/components)
- 🧱 **Style Encapsulation in Components** → [https://angular.dev/guide/component-styles](https://angular.dev/guide/component-styles)

---

## 🔗 Einbindung der eigenen Komponente in die Root-Komponente

Nachdem die **`FooterComponent`** sowie **`NavigationComponent`** über die Angular CLI erstellt wurde,  
wurde sie in der **`AppComponent`** eingebunden und im Template verwendet.  
Dies zeigt, wie Angular-Komponenten miteinander kommunizieren und wiederverwendbar sind.

---

## 📄 Angepasste `app.component.ts`

```ts
import { Component } from "@angular/core";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: "app-root",
  imports: [FooterComponent, NavigationComponent],
  template: `
    <app-navigation></app-navigation>
    <h1>{{ title }}</h1>
    <app-footer></app-footer>
  `,
})
export class AppComponent {
  title = "frontend";
}
```

---

### 🧠 Erklärung

- **Import der FooterComponent**
  Die `FooterComponent` & `NavigationComponent` wurde direkt importiert und über das Feld `imports: [FooterComponent, NavigationComponent]`
  in der Komponentendeklaration bereitgestellt.
  → Dadurch kann der **Selektor `<app-footer>`** im Template verwendet werden.

- **Inline-Template mit Komponenteneinbindung**
  Das Inline-Template der `AppComponent` enthält nun die dynamische Überschrift (`{{ title }}`)
  und die eingebettete `FooterComponent` sowie `NavigationComponent`.

  ```html
  <h1>{{ title }}</h1>
  <app-footer></app-footer>
  ```

- **Selector-Nutzung**
  Der Selektor `app-footer` stammt aus dem `@Component`-Decorator der Footer-Komponente:

  ```ts
  selector: "app-footer";
  ```

  Angular ersetzt diesen Tag automatisch durch den gerenderten Inhalt der Footer-Komponente.

---

### ✅ Lernziele

- Importieren und Verwenden eigener Komponenten in anderen Angular-Komponenten
- Verständnis des `imports`-Arrays in Standalone-Komponenten
- Nutzung von **Selektoren** (`<app-footer>`, `<app-navigation>`) zur Strukturierung von Templates
- Anwendung der Angular-Komponentenkommunikation auf Root-Ebene

---

### 🔗 Nützliche Links

- 📘 **Angular Komponenten-Hierarchie** → [https://angular.dev/guide/components/hierarchy](https://angular.dev/guide/components/hierarchy)
- 🧩 **Standalone Components** → [https://angular.dev/guide/standalone-components](https://angular.dev/guide/standalone-components)
- ⚙️ **Angular Component Metadata** → [https://angular.dev/reference/api/core/Component](https://angular.dev/reference/api/core/Component)

---

## 🎨 Integration von Bootstrap in das Angular-Frontend

Um das Styling und Layout des Angular-Projekts zu verbessern,  
wurde das **CSS-Framework Bootstrap** in Kombination mit **Popper.js** integriert.  
Zusätzlich wurde eine neue Navigationskomponente erstellt und das Layout der App erweitert.

---

## ⚙️ Installation von Bootstrap und Popper.js

```bash
npm i --save bootstrap @popperjs/core
```

➡️ Bootstrap wird zusammen mit Popper.js installiert,
welches z. B. für Dropdowns oder Tooltips benötigt wird.

---

## 📁 Anpassungen im Projekt

### 🧾 `main.ts`

```ts
import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";

import "bootstrap";

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
```

➡️ Bootstrap wird direkt importiert, sodass Styles und Skripte global verfügbar sind.

---

### 🎨 Globale Styles (`styles.scss`)

```scss
/* You can add global styles to this file, and also import other style files */
@use "bootstrap";
```

➡️ Über die SCSS-Import-Direktive `@use 'bootstrap';`
werden alle Bootstrap-Variablen und Klassen global eingebunden.

---

## 🧩 Layout-Struktur in `AppComponent`

Die Root-Komponente (`app.component.ts`) wurde erweitert,
um das Layout mit **Bootstrap-Container**, **Abständen** und einer neuen Navigationskomponente zu gestalten.

```ts
import { Component } from "@angular/core";
import { FooterComponent } from "./components/footer/footer.component";
import { NavigationComponent } from "./components/navigation/navigation.component";

@Component({
  selector: "app-root",
  imports: [FooterComponent, NavigationComponent],
  template: `
    <div class="container my-4" style="margin-bottom: 80px;">
      <app-navigation></app-navigation>
      <h1 class="display-3">{{ title }}</h1>
    </div>

    <app-footer></app-footer>
  `,
})
export class AppComponent {
  title = "frontend";
}
```

➡️ Verwendung von Bootstrap-Klassen wie `container`, `my-4`, `display-3` für Layout und Typografie.
➡️ Integration von **Navigation** und **Footer-Komponenten** in das Haupttemplate.

---

## 🧱 Footer-Komponente

### 📄 `footer.component.html`

```html
<div class="footer bg-black text-white">
  <div class="container">
    <p>footer works!</p>
  </div>
</div>
```

### 🎨 `footer.component.scss`

```scss
.footer {
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0px;
}
```

➡️ Der Footer ist **fixiert am unteren Bildschirmrand** und nutzt Bootstrap-Farben (`bg-black`, `text-white`).

---

### ✅ Lernziele

- Installation und Einbindung von **Bootstrap** in Angular-Projekte
- Arbeiten mit **SCSS und globalen Styles**
- Strukturierung eines Layouts mit **Header (Navigation)** und **Footer**
- Verständnis des globalen Styling-Konzepts in Angular
- Nutzung von Bootstrap-Klassen zur schnellen UI-Gestaltung
- Integration externer Bibliotheken über npm und globale Imports

---

### 🔗 Nützliche Links

- 📘 **Bootstrap Doku (v5.3)** → [https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- 🧩 **Angular Styles & Assets** → [https://angular.dev/guide/styles](https://angular.dev/guide/styles)
- 💡 **SCSS in Angular-Projekten** → [https://sass-lang.com/documentation/syntax#scss](https://sass-lang.com/documentation/syntax#scss)
- ⚙️ **Angular CLI Styles Integration** → [https://angular.dev/tools/cli#configuration](https://angular.dev/tools/cli#configuration)

---

## 🧭 Einführung in das Routing-System von Angular

Das Projekt wurde nun um **Routing** erweitert, um Seitenstrukturen und Navigation
innerhalb der Angular-Anwendung zu ermöglichen.
Dazu wurde eine eigene **DefaultPageComponent** angelegt, die als Fallback-Seite dient.

---

## ⚙️ Erstellen der Routing-Konfiguration

In der Datei **`app.routes.ts`** wurde das Routing eingerichtet:

```ts
import { Routes } from "@angular/router";
import { DefaultPageComponent } from "./pages/default-page/default-page.component";

export const routes: Routes = [
  {
    path: "**",
    component: DefaultPageComponent,
  },
];
```

---

### 🧠 Erklärung

- **`Routes`**: Typ von Angular, der eine Liste möglicher Pfade und zugehöriger Komponenten beschreibt.

- **Wildcard-Pfad `**`**: Wird verwendet, wenn kein anderer Pfad übereinstimmt.
→ In diesem Fall wird immer die `DefaultPageComponent` geladen,
  wenn keine spezifische Route gefunden wird (ähnlich einem 404-Handler).

- Die Datei **`app.routes.ts`** definiert die zentrale Routenstruktur der Anwendung.
  Diese wird im `main.ts` über `provideRouter(routes)` mit dem Angular-Router registriert.

---

## 📂 Neue Projektstruktur mit `app/pages`

```text
📁 src/app/
├── 📁 components/
│   ├── 📁 footer/
│   ├── 📁 navigation/
│   └── ...
│
├── 📁 pages/
│   └── 📁 default-page/
│       ├── 📄 default-page.component.ts
│       ├── 📄 default-page.component.html
│       ├── 📄 default-page.component.scss
│       └── 📄 default-page.component.spec.ts
│
├── 📄 app.component.ts
├── 📄 app.routes.ts
└── 📄 app.config.ts
```

---

## 🧩 Anpassung der Root-Komponente (`AppComponent`)

```ts
import { Component } from "@angular/core";
import { FooterComponent } from "./components/footer/footer.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [FooterComponent, NavigationComponent, RouterOutlet],
  template: `
    <div class="container my-4" style="margin-bottom: 80px;">
      <app-navigation></app-navigation>
      <h1 class="display-3">{{ title }}</h1>
      <router-outlet></router-outlet>
    </div>

    <app-footer></app-footer>
  `,
})
export class AppComponent {
  title = "frontend";
}
```

---

### 🧠 Erklärung

- **`RouterOutlet`** ist eine spezielle Angular-Direktive,
  die den dynamischen Platzhalter für Routeninhalte bereitstellt.
  → Über sie werden die jeweiligen Seitenkomponenten (z. B. `DefaultPageComponent`) eingeblendet.
- Die `AppComponent` bleibt dabei als Shell bestehen und enthält Navigation und Footer.
- Damit wurde der Grundstein für eine **Single Page Application (SPA)** gelegt.

---

## ✅ Lernziele

- Verständnis der **Angular-Routing-Struktur**
- Arbeiten mit **RouterOutlet** für dynamische Inhaltsbereiche
- Implementierung einer **Fallback-Route (Wildcard)**
- Trennung von **Layout-Komponenten (Header/Footer)** und **Seiten-Komponenten**
- Vorbereitung auf Navigation mit Routenlinks (`routerLink`)

---

### 🔗 Nützliche Links

- 📘 **Angular Routing & Navigation Guide** → [https://angular.dev/guide/routing](https://angular.dev/guide/routing)
- 🧭 **RouterOutlet API Reference** → [https://angular.dev/reference/api/router/RouterOutlet](https://angular.dev/reference/api/router/RouterOutlet)
- ⚙️ **Angular Wildcard Routes** → [https://angular.dev/guide/routing/common-router-tasks#fallback-routes](https://angular.dev/guide/routing/common-router-tasks#fallback-routes)

---

## 🏁 Einrichtung einer Startseite und Redirect im Routing

Im nächsten Schritt wurde das Routing erweitert, um eine dedizierte **Startseite (`StartPageComponent`)**  
sowie eine automatische **Weiterleitung (Redirect)** zu implementieren.  
Damit startet die Anwendung direkt auf einer definierten Hauptseite.

---

## ⚙️ Aktualisierte Routing-Konfiguration (`app.routes.ts`)

```ts
import { Routes } from "@angular/router";
import { DefaultPageComponent } from "./pages/default-page/default-page.component";
import { StartPageComponent } from "./pages/start-page/start-page.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/start",
    pathMatch: "full",
  },
  {
    path: "start",
    component: StartPageComponent,
  },
  {
    path: "**",
    component: DefaultPageComponent,
  },
];
```

---

### 🧠 Erklärung

- **Redirect (`redirectTo`)**
  Wenn der Nutzer die Anwendung ohne spezifischen Pfad aufruft (`http://localhost:4200`),
  wird automatisch eine Weiterleitung auf `/start` ausgeführt.

- **`pathMatch: 'full'`**
  Stellt sicher, dass der Redirect nur dann greift, wenn der komplette Pfad leer ist –
  nicht nur ein Teil davon (sonst könnten z. B. `/start` oder `/startpage` ebenfalls umgeleitet werden).

- **Neue Route `start`**
  Lädt die `StartPageComponent`, die als neue Einstiegsseite fungiert.

- **Fallback (`**`)**
Alle unbekannten Routen werden weiterhin an die `DefaultPageComponent` weitergeleitet.

---

## 📂 Aktualisierte Projektstruktur

```text
📁 src/app/
├── 📁 pages/
│   ├── 📁 default-page/
│   │   ├──  ...
│   │   └── 📄 default-page.component.ts
│   └── 📁 start-page/
│       ├── 📄 start-page.component.ts
│       ├── 📄 start-page.component.html
│       ├── 📄 start-page.component.scss
│       └── 📄 start-page.component.spec.ts
│
└── 📄 app.routes.ts
```

---

### ✅ Lernziele

- Verwendung von **Redirects** (`redirectTo`) innerhalb der Routing-Konfiguration
- Verständnis der Option **`pathMatch: 'full'`**
- Implementierung einer **Startseite** mit eigener Route
- Aufbau einer Routing-Hierarchie mit **Start**, **Fallback** und später weiteren Seiten
- Verständnis, wie Angular den initialen Einstiegspunkt einer SPA steuert

---

### 🔗 Nützliche Links

- 📘 **Angular Routing – Redirects & Default Routes** → [https://angular.dev/guide/routing/common-router-tasks#redirects](https://angular.dev/guide/routing/common-router-tasks#redirects)
- 🧭 **Router Configuration Reference** → [https://angular.dev/reference/api/router/Routes](https://angular.dev/reference/api/router/Routes)
- 💡 **Angular Pages & Route Components** → [https://angular.dev/guide/routing](https://angular.dev/guide/routing)

---

## 🧭 Aufbau einer Navigation mit Bootstrap (Navbar)

Nach der Einrichtung des Routings wurde nun eine **Navigationsleiste (Navbar)**  
aus der offiziellen Bootstrap-Dokumentation übernommen und in die  
Angular-Komponente `NavigationComponent` integriert.

Damit wurde das Grundgerüst für eine nutzerfreundliche Navigation geschaffen,  
die später mit Angular-Routen (`routerLink`) erweitert wird.

---

## 📄 `navigation.component.html`

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>

      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```

---

### 🧠 Erklärung

- Verwendet wurde die **Bootstrap Navbar-Komponente**, angepasst an das Angular-Projekt.
- Der Code stammt aus der offiziellen Bootstrap-Dokumentation
  → [https://getbootstrap.com/docs/5.3/components/navbar/](https://getbootstrap.com/docs/5.3/components/navbar/)
- Sie bietet standardmäßig:

  - Responsive Verhalten über **`navbar-expand-lg`**
  - Dynamische **Collapse-Funktion** für mobile Geräte
  - Beispielhafte Navigationslinks, Dropdown-Menü und Suchfeld

- Bootstrap-Styles und Funktionen werden automatisch aktiv,
  da die Bibliothek global über `main.ts` importiert wurde.

---

## 💡 Integration in die App

Die `NavigationComponent` wurde bereits in der `AppComponent` importiert und eingebunden:

```ts
import { NavigationComponent } from "./components/navigation/navigation.component";

@Component({
  selector: "app-root",
  imports: [NavigationComponent, FooterComponent, RouterOutlet],
  template: `
    <div class="container my-4" style="margin-bottom: 80px;">
      <app-navigation></app-navigation>
      <h1 class="display-3">{{ title }}</h1>
      <router-outlet></router-outlet>
    </div>

    <app-footer></app-footer>
  `,
})
export class AppComponent {
  title = "frontend";
}
```

---

## ✅ Lernziele

- Integration einer **Bootstrap-Navigationsleiste** in Angular
- Verständnis von **Responsivem Design** mit `navbar-expand`
- Verwendung von **Collapse-Funktionalität** (JavaScript über Bootstrap aktiviert)
- Aufbau einer einheitlichen Struktur aus **Navigation**, **Content** und **Footer**
- Vorbereitung auf **Routing-Links** (`routerLink`) für interne Navigation

---

### 🔗 Nützliche Links

- 📘 **Bootstrap Navbar Doku** → [https://getbootstrap.com/docs/5.3/components/navbar/](https://getbootstrap.com/docs/5.3/components/navbar/)
- 🧩 **Angular Components & Template Imports** → [https://angular.dev/guide/components/importing](https://angular.dev/guide/components/importing)
- 💡 **Bootstrap Integration in Angular** → [https://angular.dev/guide/workspace-config#styles-and-scripts-configuration](https://angular.dev/guide/workspace-config#styles-and-scripts-configuration)

---

## 🧭 Einbindung des Customer-Features in das zentrale Routing (mit Spread Operator)

Nach der Erstellung des neuen `CustomerIndexComponent` wurde das **Customer-Feature**  
in das Haupt-Routing (`app.routes.ts`) integriert.  
Dabei kam der **Spread-Operator (`...`)** zum Einsatz, um Feature-spezifische Routen  
sauber modular einzubinden.

---

## ⚙️ Beispiel: Feature-Routing (`customer.routes.ts`)

Zuerst wurde im `features/customer`-Verzeichnis eine eigene Routing-Datei erstellt:

```ts
// 📄 src/app/features/customer/customer.routes.ts
import { Routes } from "@angular/router";
import { CustomerIndexComponent } from "./customer-index.component";

export const CUSTOMER_ROUTES: Routes = [
  {
    path: "customers",
    component: CustomerIndexComponent,
  },
];
```

---

## ⚙️ Anpassung der zentralen Routing-Datei (`app.routes.ts`)

```ts
import { Routes } from "@angular/router";
import { DefaultPageComponent } from "./pages/default-page/default-page.component";
import { StartPageComponent } from "./pages/start-page/start-page.component";
import { customerRoutes } from "./features/customer/customer.routes";

export const routes: Routes = [
  // 👇 Integration der Customer-Routen per Spread-Operator
  // Feature Routes
  ...customerRoutes, // Spread Operator
  // Common Routes
  {
    path: "",
    redirectTo: "/start",
    pathMatch: "full",
  },
  {
    path: "start",
    component: StartPageComponent,
  },
  {
    path: "**",
    component: DefaultPageComponent,
  },
];
```

---

### 🧠 Erklärung

- **`customerRoutes`**
  Enthält alle Routen des Features „Customer“.
  Diese sind in einer eigenen Datei definiert, um den Code zu modularisieren.

- **Spread Operator (`...customerRoutes`)**
  Fügt alle Routen aus der Customer-Konfiguration direkt in das zentrale Angular-Routing ein.
  Das sorgt für **übersichtliche, erweiterbare Routing-Strukturen**, besonders bei großen Projekten.

- **Vorteil:**
  Neue Features können künftig einfach über ihre jeweilige Routing-Datei eingebunden werden,
  ohne die Hauptdatei unnötig aufzublähen.

---

## 📂 Ergebnisstruktur

```text
📁 src/app/
├── 📁 features/
│   └── 📁 customer/
│       ├── 📄 customer-index.component.ts
│       ├── 📄 customer-index.component.spec.ts
│       └── 📄 customer.routes.ts
│
├── 📁 pages/
│   ├── 📁 start-page/
│   └── 📁 default-page/
│
└── 📄 app.routes.ts
```

---

### ✅ Lernziele

- Aufbau eines **Feature-basierten Routings**
- Nutzung des **Spread-Operators (`...`)** zur modularen Integration
- Trennung von Feature-spezifischen und globalen Routen
- Verständnis, wie Angulars Routing-System skaliert werden kann
- Vorbereitung auf **Lazy Loading** (nächster logischer Schritt bei größeren Apps)

---

### 🔗 Nützliche Links

- 📘 **Angular Routing – Feature Routes** → [https://angular.dev/guide/routing/feature-routes](https://angular.dev/guide/routing/feature-routes)
- 🧩 **Spread Syntax (MDN)** → [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- ⚙️ **Best Practices für Angular-Projektstruktur** → [https://angular.dev/guide/project-structure#feature-areas](https://angular.dev/guide/project-structure#feature-areas)

---

## 🧱 Aufbau von verschachteltem Feature-Routing (Nested Routes)

Im **Customer-Feature** wurde die Routing-Struktur erweitert, um **Kindrouten (children)** zu unterstützen.  
So lassen sich Unterseiten wie z. B. ein **Dashboard oder eine Liste** direkt unterhalb der Hauptroute `/customers` abbilden.

---

## ⚙️ Neue Komponente: CustomerListComponent

Über die Angular CLI wurde innerhalb des Features eine neue Komponente erstellt:

```bash
ng g c CustomerList
```

Die Komponente liegt in folgendem Verzeichnis:

```text
📁 src/app/features/customer/views/customer-list/
│   ├── 📄 customer-list.component.ts
│   ├── 📄 customer-list.component.html
│   ├── 📄 customer-list.component.scss
│   └── 📄 customer-list.component.spec.ts
```

---

## ⚙️ Aktualisierte Routing-Konfiguration (`customer.routes.ts`)

```ts
import { Routes } from "@angular/router";
import { CustomerIndexComponent } from "./customer-index.component";
import { CustomerListComponent } from "./views/customer-list/customer-list/customer-list.component";

export const customerRoutes: Routes = [
  {
    path: "customers",
    component: CustomerIndexComponent,
    children: [
      {
        path: "",
        redirectTo: "/customers/dashboard",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        component: CustomerListComponent,
      },
    ],
  },
];
```

---

### 🧠 Erklärung

- **Hauptroute `path: 'customers'`**
  → Lädt die `CustomerIndexComponent`, welche den Rahmen oder Container für die Unterseiten bildet.

- **Kindrouten (`children`)**
  → Definieren weitere Pfade innerhalb der übergeordneten Route.

  - `/customers` → wird umgeleitet auf `/customers/dashboard`
  - `/customers/dashboard` → zeigt die `CustomerListComponent` an

- **`redirectTo` innerhalb der Kindrouten**
  → Sorgt dafür, dass beim Aufruf von `/customers` automatisch die Unterseite `/customers/dashboard` geöffnet wird.

- **Komponentenstruktur**
  → `CustomerIndexComponent` fungiert als **Layout-Komponente**,
  während `CustomerListComponent` den eigentlichen Seiteninhalt darstellt.

---

## 📂 Ergebnisstruktur

```text
📁 src/app/features/customer/
├── 📄 customer-index.component.ts
├── 📄 customer.routes.ts
└── 📁 views/
    └── 📁 customer-list/
        ├── 📄 customer-list.component.ts
        ├── 📄 customer-list.component.html
        ├── 📄 customer-list.component.scss
        └── 📄 customer-list.component.spec.ts
```

---

### 🧭 Beispielhafte URL-Struktur

| Route                      | Geladene Komponente                                      |
| -------------------------- | -------------------------------------------------------- |
| `/customers`               | Redirect → `/customers/dashboard`                        |
| `/customers/dashboard`     | `CustomerListComponent`                                  |
| `/customers/anything-else` | → (kann später durch weitere Unterrouten ergänzt werden) |

---

### ✅ Lernziele

- Verständnis von **verschachteltem Routing (Nested Routes)**
- Aufbau eines Feature-Layouts mit Kindkomponenten
- Nutzung von **Redirects** in Kindrouten
- Vorbereitung auf **RouterOutlet innerhalb von Feature-Komponenten**
- Organisation von Views unterhalb eines Features (Best Practice in Angular-Projekten)

---

### 🔗 Nützliche Links

- 📘 **Angular Child Routes** → [https://angular.dev/guide/routing/child-routes](https://angular.dev/guide/routing/child-routes)
- 🧩 **Feature Routing Patterns** → [https://angular.dev/guide/routing/feature-routes](https://angular.dev/guide/routing/feature-routes)
- ⚙️ **Router Configuration Reference** → [https://angular.dev/reference/api/router/Routes](https://angular.dev/reference/api/router/Routes)

---

## 📋 Aufbau einer Kundenliste mit Dummy-Daten und Bootstrap-Tabelle

Der Customer-Bereich wurde um eine **funktionale Kundenliste** erweitert.  
Dabei wurde eine Tabelle mit Dummy-Daten erstellt, die mithilfe von Angular-Templates  
und Pipes (`json`, `currency`) dargestellt wird.

---

## ⚙️ Anpassung der `CustomerIndexComponent`

```ts
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-customer-index",
  imports: [RouterOutlet],
  template: `
    <h1 class="display-3">Kundenverwaltung</h1>
    <router-outlet></router-outlet>
  `,
})
export class CustomerIndexComponent {}
```

🧠 **Erklärung:**

- Die Komponente dient als **Layout-Komponente** für das gesamte Customer-Feature.
- Sie enthält einen **`RouterOutlet`**, über den die jeweilige Unterseite (z. B. `CustomerListComponent`) angezeigt wird.
- Überschrift und Platzhalter sorgen für eine klare Seitenstruktur.

---

## ⚙️ Aufbau der `CustomerListComponent`

```ts
import { CommonModule, JsonPipe } from "@angular/common";
import { Component } from "@angular/core";
import { Customer } from "../../../model/customer";

@Component({
  selector: "app-customer-list",
  imports: [CommonModule],
  templateUrl: "./customer-list.component.html",
  styleUrl: "./customer-list.component.scss",
})
export class CustomerListComponent {
  public customers: Customer[] = [
    { id: 3, name: "Tim", credit_limit: 300 },
    { id: 4, name: "Tom", credit_limit: 50 },
  ];
}
```

🧠 **Erklärung:**

- **Dummy-Daten** wurden zur Simulation einer Kundendatenbank eingefügt.
- Die Daten basieren auf dem Interface `Customer` (z. B. `id`, `name`, `credit_limit`).
- Der `CommonModule` wurde importiert, um Direktiven wie `@for` und Pipes wie `currency` zu verwenden.

---

## 💡 Template: `customer-list.component.html`

```html
<h2>Kundenliste</h2>

<pre>
  {{ customers | json }}
</pre>

<table class="table table-striped">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Kredit Limit</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    @for(customer of customers; track customer.id) {
    <tr>
      <td>{{ customer.id }}</td>
      <td>{{ customer.name }}</td>
      <td class="text-end">
        {{ customer.credit_limit | currency : "EUR" : "symbol" }}
      </td>
      <td class="text-end">
        <button class="btn btn-sm btn-primary">Bearbeiten</button>
        <button class="btn btn-sm btn-danger">Löschen</button>
      </td>
    </tr>
    }
  </tbody>
</table>
```

---

### 🧠 Erklärung der Template-Features

| Feature                                        | Beschreibung                                                      |                                                                     |
| ---------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------- |
| `@for`                                         | Neue Angular-Control-Flow-Syntax für Iterationen (statt `*ngFor`) |                                                                     |
| `track customer.id`                            | Optimiert Rendering durch Nachverfolgung einzelner Datensätze     |                                                                     |
| `                                              | json`                                                             | Gibt Rohdaten-Objekte als formatierten JSON-Text aus (zum Debuggen) |
| `                                              | currency : 'EUR' : 'symbol'`                                      | Formatiert Zahlen als Euro-Beträge                                  |
| Bootstrap-Klassen (`table`, `btn`, `text-end`) | Gestalten die Tabelle responsiv und klar strukturiert             |                                                                     |

---

## 📂 Projektstruktur des Features

```text
📁 src/app/features/customer/
├── 📄 customer-index.component.ts
├── 📄 customer.routes.ts
└── 📁 views/
    └── 📁 customer-list/
        ├── 📄 customer-list.component.ts
        ├── 📄 customer-list.component.html
        └── 📄 customer-list.component.scss
```

---

### ✅ Lernziele

- Erstellung einer **Feature-Komponente mit eigener View**
- Nutzung der **neuen Angular-Control-Flow-Syntax** (`@for`)
- Arbeiten mit **Pipes** zur Datenformatierung (`json`, `currency`)
- Darstellung von Daten in **Bootstrap-Tabellen**
- Verständnis der Kombination aus **Feature-Routing** und **View-Komponenten**

---

### 🔗 Nützliche Links

- 📘 **Angular Control Flow Syntax (@for, @if)** → [https://angular.dev/guide/control-flow](https://angular.dev/guide/control-flow)
- 💡 **Angular Pipes – currency & json** → [https://angular.dev/guide/pipes](https://angular.dev/guide/pipes)
- 🧩 **Bootstrap Tables** → [https://getbootstrap.com/docs/5.3/content/tables/](https://getbootstrap.com/docs/5.3/content/tables/)

---

## 📋 Aufbau einer Kundenliste mit Service-Anbindung und Bootstrap-Tabelle

Der Customer-Bereich wurde weiter ausgebaut, um eine **Kundenliste über einen Service** darzustellen.  
Zunächst wurden Dummy-Daten direkt in der Komponente verwendet, anschließend in einen  
**`CustomerService`** ausgelagert, der Observable-basiert Daten liefert.

---

## ⚙️ Anpassung der `CustomerIndexComponent`

```ts
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-customer-index",
  imports: [RouterOutlet],
  template: `
    <h1 class="display-3">Kundenverwaltung</h1>
    <router-outlet></router-outlet>
  `,
})
export class CustomerIndexComponent {}
```

🧠 **Erklärung:**

- Dient als Layout-Komponente für das Customer-Feature.
- Stellt über den `RouterOutlet` den Platzhalter für Unterseiten bereit (z. B. Kundenliste).

---

## ⚙️ `CustomerListComponent` – Mit Service und Lifecycle-Hook

```ts
import { CommonModule, JsonPipe } from "@angular/common";
import { Component } from "@angular/core";
import { Customer } from "../../../model/customer";
import { CustomerService } from "../../../services/customer.service";

@Component({
  selector: "app-customer-list",
  imports: [CommonModule],
  templateUrl: "./customer-list.component.html",
  styleUrl: "./customer-list.component.scss",
})
export class CustomerListComponent {
  public customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  // entspricht connectedCallback
  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getAll().subscribe((customers) => {
      console.log(customers);
      this.customers = customers;
    });
  }
}
```

🧠 **Erklärung:**

- **Dependency Injection:** Der `CustomerService` wird im Konstruktor injiziert.
- **Lifecycle-Hook `ngOnInit`:** Wird beim Initialisieren der Komponente ausgeführt
  (ähnlich wie `connectedCallback()` bei Web Components).
- **Observable-Datenfluss:**
  Der Service liefert ein `Observable<Customer[]>`, das mit `.subscribe()` abonniert wird.
  → Sobald Daten vorliegen, werden sie in `this.customers` gespeichert und im Template angezeigt.

---

## ⚙️ Neuer Service: `CustomerService`

```ts
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Customer } from "../model/customer";

const mock = [
  { id: 3, name: "Tim", credit_limit: 299 },
  { id: 4, name: "Tom", credit_limit: 50 },
];

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  constructor() {}

  getAll(): Observable<Customer[]> {
    return of(mock);
  }
}
```

🧠 **Erklärung:**

- **`@Injectable({ providedIn: 'root' })`**
  → Der Service ist global verfügbar, kein manuelles Registrieren nötig.
- **`Observable` + `of()`**
  → Simuliert einen HTTP-Aufruf durch Rückgabe eines Observables mit Dummy-Daten.
- Später kann hier einfach ein echter HTTP-Request über `HttpClient` eingebaut werden.

---

## 📂 Ergebnisstruktur des Customer-Features

```text
📁 src/app/features/customer/
├── 📄 customer-index.component.ts
├── 📄 customer.routes.ts
├── 📁 services/
│   └── 📄 customer.service.ts
└── 📁 views/
    └── 📁 customer-list/
        ├── 📄 customer-list.component.ts
        ├── 📄 customer-list.component.html
        └── 📄 customer-list.component.scss
```

---

### ✅ Lernziele

- Verwendung von **Services** mit `@Injectable` und **Dependency Injection**
- Arbeiten mit **Observables** (`rxjs`) und `.subscribe()`
- Nutzung von **Lifecycle-Hooks** (`ngOnInit`)
- Kombination von **Service-Datenfluss** und **Template-Anzeige**
- Strukturierung von Features mit **Services** und **Views**

---

### 🔗 Nützliche Links

- 📘 **Angular Services & Dependency Injection** → [https://angular.dev/guide/di](https://angular.dev/guide/di)
- 💡 **RxJS Observables in Angular** → [https://angular.dev/guide/rx-library](https://angular.dev/guide/rx-library)
- 🧩 **Angular Lifecycle Hooks** → [https://angular.dev/guide/lifecycle-hooks](https://angular.dev/guide/lifecycle-hooks)
- ⚙️ **Bootstrap Tables** → [https://getbootstrap.com/docs/5.3/content/tables/](https://getbootstrap.com/docs/5.3/content/tables/)

---

## 🌍 Einführung von Umgebungsvariablen (Environments)

Um die Anwendung flexibel für verschiedene Umgebungen (z. B. **Entwicklung** und **Produktion**) zu konfigurieren,  
wurde ein **`environments`-Ordner** erstellt.  
Dieser enthält zwei Konfigurationsdateien, die über den Build-Prozess automatisch ausgewählt werden.

---

## ⚙️ Erstellung der Environments

Der Ordner wurde mit folgendem Befehl erzeugt:

```bash
ng g environments
```

Dabei wurden zwei Dateien angelegt:

```text
📁 src/environments/
├── 📄 environment.ts
└── 📄 environment.development.ts
```

---

## 💡 Inhalt der Environments

**`environment.ts` – Standard (Produktion):**

```ts
export const environment = {
  development: false,
  // apiUrl: 'api/1.2/',
  apiUrl: "http://localhost:3001",
};
```

**`environment.development.ts` – für lokale Entwicklung:**

```ts
export const environment = {
  development: true,
  apiUrl: "http://localhost:3001",
};
```

---

### 🧠 Erklärung

| Feld          | Beschreibung                                                        |
| ------------- | ------------------------------------------------------------------- |
| `development` | Kennzeichnet, ob es sich um die Entwicklungsumgebung handelt        |
| `apiUrl`      | Zentrale URL für Backend-APIs (z. B. lokal, staging oder produktiv) |

> Diese Variablen können im gesamten Projekt über
>
> ```ts
> import { environment } from "src/environments/environment";
> ```
>
> verwendet werden.

---

## ⚙️ Anpassung der `CustomerService`-Klasse

Der Service wurde so erweitert, dass er nun dynamisch auf den `apiUrl`-Wert aus der Environment-Konfiguration zugreift.

```ts
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Customer } from "../model/customer";
import { environment } from "../../../../environments/environment";

const url = environment.apiUrl + "/customers";

const mock = [
  { id: 3, name: "Tim", credit_limit: 299 },
  { id: 4, name: "Tom", credit_limit: 50 },
];

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  constructor() {}

  getAll(): Observable<Customer[]> {
    console.log(environment);
    console.log(url);
    return of(mock);
  }
}
```

---

### 🧠 Erklärung der Änderungen

- **Import der Environment-Konfiguration:**
  Der aktuelle Environment-Status (`development` oder `production`) wird ausgelesen.

- **Zentrale Definition der API-URL:**
  Durch `const url = environment.apiUrl + '/customers'` wird die Basis-URL dynamisch generiert.

- **Build-Verhalten:**
  Beim Erstellen der App ersetzt Angular automatisch die Datei `environment.ts` durch
  `environment.development.ts`, wenn mit dem Befehl

  ```bash
  npm start ## (was ng serve ausführt)

  ## oder direkt

  ng serve
  ```

  oder

  ```bash
  ng build --configuration development
  ```

  gearbeitet wird.

  Wenn mit

  ```bash
  ng build
  ```

  gearbeitet wird nutzt Angular hierbei die `environment.ts`

---

### ✅ Vorteile

- 🔁 Einheitliche API-Verwaltung über alle Module hinweg
- 🚀 Kein manuelles Anpassen von URLs beim Deployment
- 🧩 Erweiterbar um weitere Parameter wie Logging, Feature-Toggles oder Auth-Endpoints
- 💡 Vorbereitung für echte HTTP-Kommunikation über `HttpClient`

---

### 📂 Projektstruktur (neu)

```text
📁 src/
├── 📁 app/
│   └── 📁 features/
│       └── 📁 customer/
│           ├── 📁 services/
│           │   └── 📄 customer.service.ts
│           └── 📁 views/
│               └── 📁 customer-list/
│                   ├── 📄 customer-list.component.ts
│                   ├── 📄 customer-list.component.html
│                   └── 📄 customer-list.component.scss
└── 📁 environments/
    ├── 📄 environment.ts
    └── 📄 environment.development.ts
```

---

### 🔗 Nützliche Links

- 📘 **Angular Environments – Build Configuration**
  [https://angular.dev/guide/build#configure-environment-files](https://angular.dev/guide/build#configure-environment-files)
- 💡 **Angular Dependency Injection (Services)**
  [https://angular.dev/guide/di](https://angular.dev/guide/di)
- ⚙️ **RxJS Observable Basics**
  [https://rxjs.dev/guide/observable](https://rxjs.dev/guide/observable)

---

### 🧠 Lernziele

- Verständnis der **Angular-Environments**
- Nutzung von **dynamischen API-URLs**
- Verbindung zwischen **Konfiguration** und **Service-Schicht**
- Vorbereitung für **echte HTTP-Requests mit `HttpClient`**

---
