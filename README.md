# 🅰️ Angular Kompakt – Schulungsnotizen

## 📄 Kursinformationen

### Kurszeitraum

`06.10.2025 - 10.10.2025`

### 🎯 Zielgruppe

IT-Entwickler\*innen

### 🧠 Voraussetzungen

Entwickler\*innen von Web- und Clientanwendungen.  
Kenntnisse zumindest einer (objektorientierten) Programmiersprache und Erfahrung mit **JavaScript**, **HTML** und **CSS**,
sowie Kenntnisse im Umgang mit Datentypen und Erstellen von eigenen Funktionen.

### 🎓 Ziele

Die Teilnehmenden kennen die Aspekte für die Umsetzung von Angular-Enterprise-Anwendungen.  
Sie wissen, wie man wiederverwendbaren Code mit Modularisierung erreicht.  
Sie verwenden erweitertes Routing und Zustandsverwaltung mit **NgRx** und implementieren **Unit-Tests** und **E2E-Tests**.

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

  ```ts
  function getData<T>(url: string): Promise<T> {
      return fetch(url).then(response => response.json());
  }

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

---

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

| Feature                                        | Beschreibung                                                        |
| ---------------------------------------------- | ------------------------------------------------------------------- |
| `@for`                                         | Neue Angular-Control-Flow-Syntax für Iterationen (statt `*ngFor`)   |
| `track customer.id`                            | Optimiert Rendering durch Nachverfolgung einzelner Datensätze       |
| `json`                                         | Gibt Rohdaten-Objekte als formatierten JSON-Text aus (zum Debuggen) |
| `currency : 'EUR' : 'symbol'`                  | Formatiert Zahlen als Euro-Beträge                                  |
| Bootstrap-Klassen (`table`, `btn`, `text-end`) | Gestalten die Tabelle responsiv und klar strukturiert               |

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

# 📅 Tag 3 - 08.10.25

### 📂 Projektstruktur (Tag 03 – Beginn)

```
📁 frontend/
│
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 components/
│   │   │   └── ... (z. B. Navigation, Footer)
│   │   │
│   │   ├── 📁 features/
│   │   │   └── 📁 customer/
│   │   │       ├── 📁 model/
│   │   │       │   └── 📄 customer.ts
│   │   │       │
│   │   │       ├── 📁 services/
│   │   │       │   ├── 📄 customer.service.ts
│   │   │       │   └── 📄 customer.service.spec.ts
│   │   │       │
│   │   │       ├── 📁 views/
│   │   │       │   └── 📁 customer-list/
│   │   │       │       ├── 📄 customer-list.component.html
│   │   │       │       ├── 📄 customer-list.component.scss
│   │   │       │       ├── 📄 customer-list.component.ts
│   │   │       │       └── 📄 customer-list.component.spec.ts
│   │   │       │
│   │   │       ├── 📄 customer-index.component.ts
│   │   │       ├── 📄 customer-index.component.spec.ts
│   │   │       └── 📄 customer.routes.ts
│   │   │
│   │   ├── 📁 pages/
│   │   │   ├── 📄 app.component.ts
│   │   │   ├── 📄 app.component.spec.ts
│   │   │   ├── 📄 app.config.ts
│   │   │   └── 📄 app.routes.ts
│   │   │
│   │   └── ...
│   │
│   ├── 📁 environments/
│   │   ├── 📄 environment.ts
│   │   └── 📄 environment.development.ts
│   │
│   ├── 📄 index.html
│   ├── 📄 main.ts
│   └── 📄 styles.scss
│
├── 📄 angular.json
├── 📄 jest.config.js
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 setup-jest.ts
├── 📄 tsconfig.json
├── 📄 tsconfig.app.json
├── 📄 tsconfig.spec.json
├── 📄 .editorconfig
├── 📄 .gitignore
└── 📄 README.md
```

---

## 🧪 Einführung in Unit-Testing mit Jest

Um automatisierte Tests für unsere Angular-Anwendung auszuführen,  
wurde das moderne Testframework **Jest** eingerichtet.  
Jest ersetzt die Standardlösung **Karma + Jasmine** und bietet eine  
schnellere, einfachere und besser integrierte Testumgebung.

---

### ⚙️ Installation der Abhängigkeiten

Im Frontend-Ordner wurde Jest samt Angular-Preset installiert:

```bash
npm install jest jest-preset-angular@14 @types/jest --save-dev
```

➡️ **Erläuterung:**

- `jest` → Testframework
- `jest-preset-angular` → Angular-spezifische Integration (Templates, Decorators, Zonen)
- `@types/jest` → TypeScript-Typdefinitionen für Jest

---

### ⚙️ Konfiguration der `tsconfig.spec.json`

Damit TypeScript weiß, wie Testdateien kompiliert werden, wurde sie so angepasst:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": ["jest"]
  },
  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]
}
```

---

### ⚙️ Erstellung der `jest.config.js`

Diese Datei legt fest, wie Jest mit Angular-Code arbeitet:

```js
module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/app/**/*.ts",
    "!src/main.ts",
    "!src/app/**/*.module.ts",
    "!src/**/*.spec.ts",
  ],
};
```

➡️ **Wichtig:**
`setupFilesAfterEnv` verweist auf die Datei, die Jest für das Zone-Handling benötigt.

---

### ⚙️ Erstellung der Datei `setup-jest.ts`

Diese Datei wurde im `frontend`-Verzeichnis angelegt, um die Angular-Test-Umgebung zu initialisieren:

```ts
import { setupZoneTestEnv } from "jest-preset-angular/setup-env/zone";

setupZoneTestEnv();
```

➡️ **Erklärung:**

- `setupZoneTestEnv()` richtet die Test-Zonen korrekt ein,
  sodass Angular-Features wie Change Detection und `fakeAsync()` funktionieren.
- Diese Datei wird beim Start jedes Tests automatisch ausgeführt.

---

### ⚙️ Anpassung der `package.json`

Die `scripts`-Sektion wurde erweitert:

```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}
```

➡️ Damit stehen nun folgende Testbefehle bereit:

| Befehl                  | Beschreibung                                         |
| ----------------------- | ---------------------------------------------------- |
| `npm run test`          | Führt alle Tests einmalig aus                        |
| `npm run test:watch`    | Beobachtet Änderungen und führt Tests erneut aus     |
| `npm run test:coverage` | Erstellt Code-Coverage-Bericht im Ordner `coverage/` |

---

### 🧩 Beispieltest (Service)

```ts
import { CustomerService } from "./customer.service";
import { Customer } from "../model/customer";

describe("CustomerService", () => {
  let service: CustomerService;

  beforeEach(() => {
    service = new CustomerService();
  });

  it("should return mock customers", (done) => {
    service.getAll().subscribe((customers: Customer[]) => {
      expect(customers.length).toBeGreaterThan(0);
      expect(customers[0].name).toBe("Tim");
      done();
    });
  });
});
```

---

### 🧠 Lernziele

- Einrichtung von Jest als Ersatz für Karma + Jasmine
- Nutzung von `jest-preset-angular` für Angular-Tests
- Verständnis des `setup-jest.ts`-Zone-Setups
- Ausführen von Tests im Watch- und Coverage-Modus
- Schreiben von Unit-Tests für Services und Komponenten

---

### 🔗 Nützliche Links

- 📘 [Jest – Offizielle Dokumentation](https://jestjs.io/docs/getting-started)
- 🧩 [jest-preset-angular](https://github.com/thymikee/jest-preset-angular)
- 🧠 [Angular Testing Guide](https://angular.dev/guide/testing)
- 💡 [TypeScript + Jest Setup](https://kulshekhar.github.io/ts-jest/docs/getting-started/installation/)

---

Perfekt 💪 — das ist super wertvoller Inhalt für deine **README (Tag 03 – Jest-Einführung)**!
Hier ist dein kompletter Abschnitt **im passenden Stil deiner bisherigen Dokumentation**,
sofort einsatzbereit zum Einfügen unter dem Jest-Kapitel oder als eigenständiger Unterabschnitt:

---

## 🧪 Jest – Tests gezielt ausführen

Jest bietet zahlreiche Möglichkeiten, um **spezifische Tests** gezielt auszuführen,
anstatt das gesamte Test-Set laufen zu lassen.
Hier findest du eine Übersicht der wichtigsten Optionen für den Arbeitsalltag mit Angular + Jest.

---

### 1️⃣ Nach Test-Datei filtern

**Direkter Pfad:**

```bash
npm test src/app/my-component.spec.ts
```

**Pattern Matching:**

```bash
npm test -- --testPathPattern=component
npm test -- --testPathPattern="app/services"
```

---

### 2️⃣ Nach Testnamen filtern

**Mit `-t` oder `--testNamePattern`:**

```bash
# Führt nur Tests aus, die "should create" im Namen haben
npm test -- -t "should create"

# Regex-Pattern
npm test -- -t "should (create|render)"

# Mehrere Wörter
npm test -- --testNamePattern="login.*success"
```

---

### 3️⃣ Im Code: `.only` und `.skip`

**Nur bestimmte Tests ausführen:**

```typescript
// Nur dieser Test wird ausgeführt
it.only("should create", () => {
  expect(component).toBeTruthy();
});

// Ganze Suite ausführen
describe.only("MyComponent", () => {
  it("test 1", () => {});
  it("test 2", () => {});
});
```

**Tests überspringen:**

```typescript
it.skip("should do something", () => {
  // Wird übersprungen
});

describe.skip("MyComponent", () => {
  // Alle Tests hier werden übersprungen
});
```

---

### 4️⃣ Weitere nützliche Optionen

**Nur geänderte Tests ausführen:**

```bash
npm test -- -o
# oder
npm test -- --onlyChanged
```

**Nur fehlgeschlagene Tests wiederholen:**

```bash
npm test -- --onlyFailures
```

**Coverage für bestimmte Dateien sammeln:**

```bash
npm test -- --collectCoverageFrom="src/app/services/**/*.ts"
```

**Mehrere Filter kombinieren:**

```bash
npm test -- --testPathPattern=services -t "should fetch"
```

---

### 5️⃣ Eigene Scripts in der `package.json`

Um Tests einfacher auszuführen, können eigene Skripte definiert werden:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:component": "jest --testPathPattern=components",
    "test:services": "jest --testPathPattern=services",
    "test:unit": "jest --testPathPattern='spec.ts$'",
    "test:failed": "jest --onlyFailures"
  }
}
```

Beispiel:

```bash
npm run test:component
npm run test:failed
```

---

### 6️⃣ Watch-Modus – interaktiv filtern

Starte Jest im Watch-Modus:

```bash
npm run test:watch
```

Verfügbare Tastenkürzel:

| Taste | Funktion                              |
| ----- | ------------------------------------- |
| **p** | Filter nach Dateiname-Pattern         |
| **t** | Filter nach Test-Name-Pattern         |
| **a** | Alle Tests ausführen                  |
| **f** | Nur fehlgeschlagene Tests wiederholen |

**Beispiel:**

```bash
npm run test:watch
# Danach "p" drücken und z. B. "login" eingeben
```

---

### 💡 Häufige Use Cases

| Ziel             | Befehl                                           |
| ---------------- | ------------------------------------------------ |
| Einzelne Datei   | `npm test src/app/login/login.component.spec.ts` |
| Testnamen        | `npm test -- -t "should login successfully"`     |
| Schnell debuggen | `.only()` im Testcode verwenden                  |

---

## 🧩 AppComponent Unit-Test mit Jest & Angular Router

Nachdem Jest erfolgreich eingerichtet wurde,
wurde nun die erste Angular-Komponente (`AppComponent`) mit einer echten Testkonfiguration versehen.

---

### 📄 Datei: `app.component.spec.ts`

```typescript
import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { provideRouter } from "@angular/router";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter([]), // Router für die Testumgebung bereitstellen
      ],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'frontend' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("frontend");
  });

  /*
  // Optionaler Test für gerenderten Inhalt
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, frontend');
  });
  */
});
```

---

### 🧠 Erklärung

- `TestBed` erstellt eine isolierte **Testumgebung** für Angular-Komponenten.
- `provideRouter([])` stellt den Angular **Router-Service** bereit,
  damit auch Komponenten mit Routing-Abhängigkeiten getestet werden können.
- `compileComponents()` sorgt dafür, dass Templates und Styles geladen werden.
- `fixture.componentInstance` gibt die konkrete Instanz der Komponente zurück.
- `expect(app).toBeTruthy()` prüft, ob die Komponente erfolgreich erstellt wurde.

---

### ▶️ Test ausführen

Um gezielt nur diese Datei zu testen:

```bash
npm test -- app.component.spec.ts
```

Oder im Watch-Modus:

```bash
npm run test:watch
# Danach "p" drücken und z. B. "app.component" eingeben
```

---

### ✅ Ergebnis

Nach dem erfolgreichen Lauf zeigt Jest z. B.:

```
PASS src/app/pages/app.component.spec.ts
  AppComponent
    ✓ should create the app (xx ms)
    ✓ should have the 'frontend' title (xx ms)
```

Damit wurde erfolgreich bestätigt,
dass der Jest-Test-Stack korrekt mit Angulars `TestBed` und `Router` funktioniert.

---

## 🧩 Component- und Service-Tests mit Jest

Nachdem Jest erfolgreich konfiguriert wurde,
wurden mehrere **Unit-Tests** für Angular-Komponenten und -Services erstellt.
Dabei kamen **Mocks**, **Dependency Injection**, und **HttpClientTesting** zum Einsatz.

---

### 📄 `customer-list.component.spec.ts`

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CustomerListComponent } from "./customer-list.component";
import { CustomerService } from "../../../services/customer.service";
import { of } from "rxjs";

describe("CustomerListComponent", () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerListComponent],
      providers: [
        {
          provide: CustomerService,
          useValue: {
            getAll: () => of([]), // Mock-Datenquelle statt echter HTTP-Request
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
```

✅ **Ergebnis:**

- Test prüft, ob die Komponente erstellt werden kann
- `CustomerService` wird per Mock simuliert
- kein realer API-Aufruf nötig
- verhindert unnötige `console.log()`-Ausgaben im Produktionscode

---

### 📄 `customer-list.component.ts` (angepasst)

```typescript
import { CommonModule } from "@angular/common";
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

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getAll().subscribe((customers) => {
      this.customers = customers;
    });
  }
}
```

🧠 **Änderung:**

- Alle `console.log()` entfernt → Tests übernehmen die Validierung.
- Logik bleibt identisch, aber produktionsreif.

---

### 📄 `customer.service.spec.ts`

```typescript
import { TestBed } from "@angular/core/testing";
import { CustomerService } from "./customer.service";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";

describe("CustomerService", () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(CustomerService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
```

✅ **Ergebnis:**

- `CustomerService` kann korrekt instanziiert werden
- `HttpClientTestingModule` sorgt für sichere Test-Isolation ohne echte API-Aufrufe

---

### 📄 `customer.service.ts` (angepasst)

```typescript
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "../model/customer";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";

const url = environment.apiUrl + "/customers";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  #http = inject(HttpClient);

  getAll(): Observable<Customer[]> {
    return this.#http.get<Customer[]>(url);
  }
}
```

🧠 **Änderung:**

- `inject(HttpClient)` anstelle von Konstruktor-Injection
- Entfernte `console.log()` → saubere Service-Logik

---

### 📄 `navigation.component.spec.ts`

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NavigationComponent } from "./navigation.component";
import { provideRouter } from "@angular/router";

describe("NavigationComponent", () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
```

✅ **Ergebnis:**

- Testet, ob die Navigation korrekt initialisiert werden kann
- Router wird mit `provideRouter([])` bereitgestellt

---

### ▶️ Tests ausführen

Einzelne Testdatei:

```bash
npm test -- customer-list.component.spec.ts

npm test -- customer.service.spec.ts

npm test -- navigation.component.spec.ts
```

Oder Watch-Modus:

```bash
npm run test:watch
# Danach "p" drücken und z. B. "customer" eingeben
#
# Dann wird jedes pattern mit "customer" getestet:
#
PASS  src/app/features/customer/services/customer.service.spec.ts

PASS  src/app/features/customer/views/customer-list/customer-list/customer-list.component.spec.ts

PASS  src/app/features/customer/customer-index.component.spec.ts

# Es verhält sich somit bei allen anderen pattern gleich
# z.B. "navigation, app, page, usw. ..."
```

---

### 💡 Zusammenfassung

| Bereich         | Ziel                                        | Werkzeug                    |
| --------------- | ------------------------------------------- | --------------------------- |
| Komponententest | Prüfung auf Initialisierung & DOM-Verhalten | Jest + Angular TestBed      |
| Servicetest     | Prüfung der API-Integration & HTTP-Aufrufe  | HttpClientTestingModule     |
| Mocking         | Vermeidung echter API-Calls                 | RxJS `of()` + DI `useValue` |
| Router-Test     | Isolierte Navigationstests                  | `provideRouter([])`         |

---

## 🌀 LoadingIndicator Component

Um während des Ladens von Daten eine visuelle Rückmeldung anzuzeigen, wurde ein **LoadingIndicator** erstellt.
Dieser zeigt einen Bootstrap-Spinner, solange die Daten über den Service geladen werden.

---

### 📄 `loading-indicator.component.html`

```html
<div
  class="d-flex justify-content-center align-items-center"
  style="height: 100%;"
>
  <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
```

✅ **Ergebnis:**

- Nutzt den Bootstrap Flex Spinner
- Wird zentriert angezeigt
- Dient als generische Ladeanzeige für verschiedene Komponenten

---

### 📄 `customer-list.component.ts` (angepasst)

```typescript
import { CommonModule } from "@angular/common";
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
  public loading = true;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.loading = true;
    this.customerService.getAll().subscribe((customers) => {
      this.customers = customers;
      this.loading = false;
    });
  }
}
```

🧠 **Änderung:**

- Neues Property `loading` hinzugefügt
- Wird beim Start des Datenladens auf `true` gesetzt
- Nach erfolgreichem Abruf auf `false` gesetzt

---

### 📄 `customer-list.component.html` (angepasst)

```html
<h2>Kundenliste</h2>

<app-loading-indicator *ngIf="loading"></app-loading-indicator>

<div *ngIf="!loading">
  <ul>
    <li *ngFor="let customer of customers">{{ customer.name }}</li>
  </ul>
</div>
```

✅ **Ergebnis:**

- Zeigt den Spinner nur während des Ladens (`loading === true`)
- Nach Abschluss des Ladevorgangs werden die Kundendaten eingeblendet
- Verbesserung der User Experience durch visuelles Feedback

---

### 💡 Zusammenfassung

| Bereich              | Ziel                                 | Werkzeug / Konzept                 |
| -------------------- | ------------------------------------ | ---------------------------------- |
| UI-Feedback          | Anzeige während Datenabfrage         | Bootstrap Spinner                  |
| Zustandshandling     | Steuerung über `loading`-Variable    | Angular Template Binding (`*ngIf`) |
| Wiederverwendbarkeit | Separate Ladeanzeige für alle Module | `LoadingIndicator` Component       |

---

## 🧩 Vergleich: `*ngIf` vs. `@if` (Angular 17+)

| Thema             | `*ngIf` (klassisch)                              | `@if` / `@else` (neu seit Angular 17) |
| ----------------- | ------------------------------------------------ | ------------------------------------- |
| **Status**        | ✅ weiterhin voll unterstützt                    | 🧪 neu, „Block Syntax“                |
| **Import nötig?** | Nein                                             | Nein                                  |
| **Lesbarkeit**    | Gut, aber verschachtelt bei komplexen Strukturen | Besser für verschachtelte Bedingungen |
| **Syntax**        | Template-basierte Structural Directive           | Neue Template Block Syntax            |

---

### 🧱 Beispiel: klassisch mit `*ngIf`

```html
<div *ngIf="loading">Loading...</div>
<div *ngIf="!loading">Content</div>
```

### 🚀 Neues Angular 17+ Syntax mit `@if`

```html
@if (loading) {
<div>Loading...</div>
} @else {
<div>Content</div>
}
```

Beide funktionieren **identisch**, aber `@if` ist etwas moderner und klarer bei komplexeren Strukturen — insbesondere wenn du `@for`, `@switch` oder `@defer` verwendest (alles Teil der neuen Template-Control-Flow-Syntax in Angular 17).

---

### 🧠 Fazit

| Empfehlung                                                                        | Grund                               |
| --------------------------------------------------------------------------------- | ----------------------------------- |
| ✅ Verwende `*ngIf`, wenn du Abwärtskompatibilität oder bestehenden Code pflegst. | 100 % stabil und bekannt            |
| 🚀 Verwende `@if`, wenn du Angular 17+ nutzt und neue Features einführen willst.  | Modernere Syntax, klarere Templates |

---

### 🔗 Nützliche Links

- 🧭 **Angular Structural Directives (klassisch, inkl. `*ngIf`):**
  [https://angular.io/guide/structural-directives](https://angular.io/guide/structural-directives)

- 🚀 **Angular Template Control Flow (`@if`, `@for`, `@switch`, `@defer` – ab Angular 17):**
  [https://angular.dev/guide/template-control-flow](https://angular.dev/guide/template-control-flow)

- 🧱 **Ankündigung / Migration zur neuen Syntax:**
  [https://blog.angular.dev/angular-v17-is-here-43651aef84e7#b9c0](https://blog.angular.dev/angular-v17-is-here-43651aef84e7#b9c0)

- 💅 **Bootstrap Spinner Dokumentation:**
  [https://getbootstrap.com/docs/5.3/components/spinners/](https://getbootstrap.com/docs/5.3/components/spinners/)

- ⚙️ **Angular Komponenten-Erstellung:**
  [https://angular.io/cli/generate#component-command](https://angular.io/cli/generate#component-command)

---

## ⚠️ Error Handling & Modernes Template Control Flow

Um Fehler während des Datenabrufs abzufangen und dem Benutzer anzuzeigen, wurde ein **Error Handling** in der `CustomerListComponent` integriert.
Zudem nutzt die Komponente jetzt die **neue Template Control Flow Syntax** (`@if`, `@for`) aus Angular 17+.

---

### 📄 `customer-list.component.ts` (angepasst)

```typescript
import { CommonModule, JsonPipe } from "@angular/common";
import { Component } from "@angular/core";
import { Customer } from "../../../model/customer";
import { CustomerService } from "../../../services/customer.service";
import { LoadingIndicatorComponent } from "../../../../../components/loading-indicator/loading-indicator.component";

@Component({
  selector: "app-customer-list",
  imports: [CommonModule, LoadingIndicatorComponent],
  templateUrl: "./customer-list.component.html",
  styleUrl: "./customer-list.component.scss",
})
export class CustomerListComponent {
  public customers: Customer[] = [];
  public loading = true;
  public errorMessage: string | null = null;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.loading = true;
    this.errorMessage = null;

    this.customerService.getAll().subscribe({
      next: (customers) => {
        this.customers = customers;
        this.loading = false;
      },
      error: (e: Error) => {
        this.errorMessage = e.message;
        this.loading = false;
      },
    });
  }
}
```

✅ **Ergebnis:**

- Fehler werden abgefangen und in `errorMessage` gespeichert
- `loading` wird bei Fehlern zuverlässig deaktiviert
- UI reagiert dynamisch auf Lade- und Fehlerzustände

---

### 📄 `customer-list.component.html` (angepasst)

```html
<h2>Kundenliste</h2>

<div class="d-flex justify-content-between my-4">
  <button class="btn btn-primary">Neuer Kunde</button>
  <button class="btn btn-outline-secondary" (click)="loadCustomers()">
    Aktualisieren
  </button>
</div>

@if(errorMessage !== null) {
<div class="alert alert-danger" role="alert">{{ errorMessage }}</div>
} @if(loading) {
<app-loading-indicator></app-loading-indicator>
} @else {
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
}
```

✅ **Ergebnis:**

- Anzeige einer roten Fehlermeldung über dem Inhalt
- Spinner wird nur während des Ladens angezeigt
- Kundenliste erscheint nach erfolgreichem Laden
- Nutzung der modernen Angular 17-Syntax mit `@if` und `@for`

---

### 💡 Zusammenfassung

| Bereich                | Ziel                                  | Werkzeug / Konzept               |
| ---------------------- | ------------------------------------- | -------------------------------- |
| Fehlerbehandlung       | Anzeige von Fehlermeldungen im UI     | `errorMessage` + Bootstrap Alert |
| Ladezustand            | Anzeige während Datenabfrage          | `loading` + `LoadingIndicator`   |
| Template-Logik         | Klare Struktur durch neue Syntax      | `@if`, `@for` (Angular 17+)      |
| Benutzerfreundlichkeit | Verständliche Rückmeldung bei Fehlern | UI-Alerts und Spinner            |

---

### 🔗 Nützliche Links

- ⚙️ **Angular Template Control Flow (neu ab v17):**
  [https://angular.dev/guide/template-control-flow](https://angular.dev/guide/template-control-flow)

- 🧱 **Bootstrap Alerts (Fehlermeldungen):**
  [https://getbootstrap.com/docs/5.3/components/alerts/](https://getbootstrap.com/docs/5.3/components/alerts/)

- 🧭 **RxJS Error Handling in Observables:**
  [https://rxjs.dev/guide/operators#error-handling-operators](https://rxjs.dev/guide/operators#error-handling-operators)

---

## 🧱 ErrorBox Component

Zur Vereinheitlichung der Fehlerdarstellung wurde eine eigene **ErrorBox Component** erstellt.
Sie kapselt die Bootstrap-Alert-Darstellung und kann in allen Komponenten wiederverwendet werden.

---

### 📄 `error-box.component.html`

```html
<div class="alert alert-danger">
  <ng-content></ng-content>
</div>
```

✅ **Ergebnis:**

- Nutzt das Bootstrap-Alert-Layout (`alert alert-danger`)
- Übergibt den Fehltext per Content Projection (`<ng-content>`)
- Kann überall eingebunden werden, wo Fehlermeldungen angezeigt werden sollen

---

### 📄 `customer-list.component.ts` (angepasst)

```typescript
import { CommonModule, JsonPipe } from "@angular/common";
import { Component } from "@angular/core";
import { Customer } from "../../../model/customer";
import { CustomerService } from "../../../services/customer.service";
import { LoadingIndicatorComponent } from "../../../../../components/loading-indicator/loading-indicator.component";
import { ErrorBoxComponent } from "../../../../../components/error-box/error-box.component";

@Component({
  selector: "app-customer-list",
  imports: [CommonModule, LoadingIndicatorComponent, ErrorBoxComponent],
  templateUrl: "./customer-list.component.html",
  styleUrl: "./customer-list.component.scss",
})
export class CustomerListComponent {
  public customers: Customer[] = [];
  public loading = true;
  public errorMessage: string | null = null;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.loading = true;
    this.errorMessage = null;

    this.customerService.getAll().subscribe({
      next: (customers) => {
        this.customers = customers;
        this.loading = false;
      },
      error: (e: Error) => {
        this.errorMessage = e.message;
        this.loading = false;
      },
    });
  }
}
```

✅ **Ergebnis:**

- `ErrorBoxComponent` wird als importiertes Modul verwendet
- Kein doppelter Bootstrap-Code in Templates
- Fehler werden über `errorMessage` zentral angezeigt

---

### 📄 `customer-list.component.html` (angepasst)

```html
<h2>Kundenliste</h2>

<div class="d-flex justify-content-between my-4">
  <button class="btn btn-primary">Neuer Kunde</button>
  <button class="btn btn-outline-secondary" (click)="loadCustomers()">
    Aktualisieren
  </button>
</div>

@if(errorMessage !== null) {
<app-error-box>{{ errorMessage }}</app-error-box>
} @if(loading) {
<app-loading-indicator></app-loading-indicator>
} @else {
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
}
```

✅ **Ergebnis:**

- Fehleranzeige über `<app-error-box>`
- Einheitliches Alert-Design in der gesamten App
- Kombinierbar mit dem bestehenden `LoadingIndicator`

---

### 💡 Zusammenfassung

| Bereich               | Ziel                                       | Werkzeug / Konzept           |
| --------------------- | ------------------------------------------ | ---------------------------- |
| Fehlerdarstellung     | Einheitliche Bootstrap-Fehlermeldung       | `ErrorBoxComponent`          |
| Code-Wiederverwendung | Reduziert redundante HTML-Alert-Strukturen | Angular Content Projection   |
| Integration           | Einbindung in `CustomerListComponent`      | `import` + `<app-error-box>` |

---

### 🔗 Nützliche Links

- ⚙️ **Angular Content Projection (`<ng-content>`):**
  [https://angular.io/guide/content-projection](https://angular.io/guide/content-projection)

- 💅 **Bootstrap Alerts:**
  [https://getbootstrap.com/docs/5.3/components/alerts/](https://getbootstrap.com/docs/5.3/components/alerts/)

- 🧭 **Angular Komponenten-Generierung (CLI):**
  [https://angular.io/cli/generate#component-command](https://angular.io/cli/generate#component-command)

---

## 📋 CustomerTable Component mit `@Input()` Decorator

Um den Code der `CustomerListComponent` zu vereinfachen und die Tabelle wiederverwendbar zu machen,
wurde eine eigene **CustomerTableComponent** erstellt.
Die Datenübergabe erfolgt über den Angular **`@Input()` Decorator**.

---

### 📁 Pfad

```
src/app/features/customer/components/customer-table/
```

---

### 📄 `customer-table.component.ts`

```typescript
import { Component, Input } from "@angular/core";
import { Customer } from "../../model/customer";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-customer-table",
  imports: [CommonModule],
  templateUrl: "./customer-table.component.html",
  styleUrl: "./customer-table.component.scss",
})
export class CustomerTableComponent {
  @Input()
  public customers: Customer[] = [];
}
```

✅ **Ergebnis:**

- `@Input()` ermöglicht den Datenempfang von der Elternkomponente
- Tabelle kann mehrfach in unterschiedlichen Kontexten genutzt werden
- Code bleibt übersichtlich und modular

---

### 📄 `customer-table.component.html`

```html
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

✅ **Ergebnis:**

- Tabelle verwendet Bootstrap-Styles (`table table-striped`)
- Darstellung identisch zur ursprünglichen Liste
- Keine zusätzliche Logik nötig – erhält Daten rein über `@Input()`

---

### 📄 `customer-list.component.ts` (angepasst)

```typescript
import { CommonModule, JsonPipe } from "@angular/common";
import { Component } from "@angular/core";
import { Customer } from "../../../model/customer";
import { CustomerService } from "../../../services/customer.service";
import { LoadingIndicatorComponent } from "../../../../../components/loading-indicator/loading-indicator.component";
import { ErrorBoxComponent } from "../../../../../components/error-box/error-box.component";
import { CustomerTableComponent } from "../../components/customer-table/customer-table.component";

@Component({
  selector: "app-customer-list",
  imports: [
    CommonModule,
    LoadingIndicatorComponent,
    ErrorBoxComponent,
    CustomerTableComponent,
  ],
  templateUrl: "./customer-list.component.html",
  styleUrl: "./customer-list.component.scss",
})
export class CustomerListComponent {
  public customers: Customer[] = [];
  public loading = true;
  public errorMessage: string | null = null;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.loading = true;
    this.errorMessage = null;

    this.customerService.getAll().subscribe({
      next: (customers) => {
        this.customers = customers;
        this.loading = false;
      },
      error: (e: Error) => {
        this.errorMessage = e.message;
        this.loading = false;
      },
    });
  }
}
```

✅ **Ergebnis:**

- `CustomerTableComponent` wird eingebunden
- Tabelle ist aus der `CustomerListComponent` entfernt
- Übersichtlicher, wartbarer und besser testbar

---

### 📄 `customer-list.component.html` (angepasst)

```html
<h2>Kundenliste</h2>

<div class="d-flex justify-content-between my-4">
  <button class="btn btn-primary">Neuer Kunde</button>
  <button class="btn btn-outline-secondary" (click)="loadCustomers()">
    Aktualisieren
  </button>
</div>

@if(errorMessage !== null) {
<app-error-box>{{ errorMessage }}</app-error-box>
} @if(loading) {
<app-loading-indicator></app-loading-indicator>
} @else {
<app-customer-table [customers]="customers"></app-customer-table>
}
```

✅ **Ergebnis:**

- Tabelle wird jetzt über `<app-customer-table>` eingebunden
- Datenbindung erfolgt per `[customers]="customers"`
- Sauberes Trennen von Datenlogik (List) und Darstellung (Table)

---

### 💡 Zusammenfassung

| Bereich              | Ziel                                   | Werkzeug / Konzept                   |
| -------------------- | -------------------------------------- | ------------------------------------ |
| Code-Refactoring     | Tabelle aus Kundenliste ausgelagert    | `CustomerTableComponent`             |
| Datenübergabe        | Kommunikation Eltern → Kind            | `@Input()` Decorator                 |
| Modularität          | Wiederverwendbare UI-Komponente        | Angular Standalone Component         |
| Lesbarkeit / Wartung | Sauber getrennte Logik und Darstellung | Strukturierte Komponentenarchitektur |

---

### 🔗 Nützliche Links

- 📘 **Angular Input Decorator (`@Input()`):**
  [https://angular.io/guide/inputs-outputs](https://angular.io/guide/inputs-outputs)

- ⚙️ **Angular Standalone Components:**
  [https://angular.dev/guide/standalone-components](https://angular.dev/guide/standalone-components)

- 💅 **Bootstrap Tabellen:**
  [https://getbootstrap.com/docs/5.3/content/tables/](https://getbootstrap.com/docs/5.3/content/tables/)

---

## 🗑️ Kunden löschen mit `@Output()` EventEmitter

Um Benutzeraktionen (z. B. „Löschen“) aus der Kindkomponente (`CustomerTableComponent`) an die Elternkomponente (`CustomerListComponent`) zu übergeben,
wurde ein **`@Output()` EventEmitter** implementiert.
Damit kann die Elternkomponente auf Klicks im Tabellen-UI reagieren.

---

### 📄 `customer-table.component.ts` (angepasst)

```typescript
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Customer } from "../../model/customer";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-customer-table",
  imports: [CommonModule],
  templateUrl: "./customer-table.component.html",
  styleUrl: "./customer-table.component.scss",
})
export class CustomerTableComponent {
  @Input()
  public customers: Customer[] = [];

  @Output()
  deleteCustomer = new EventEmitter<Customer>();

  deleteHandler(customer: Customer) {
    console.log("Delete customer", customer);
    this.deleteCustomer.emit(customer);
  }
}
```

✅ **Ergebnis:**

- `@Output()` erzeugt ein Event namens `deleteCustomer`
- Die Kindkomponente kann damit Daten (den Kunden) an die Elternkomponente weiterreichen
- `deleteHandler()` wird beim Klick auf den Button ausgelöst

---

### 📄 `customer-table.component.html` (angepasst)

```html
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
        <button class="btn btn-sm btn-danger" (click)="deleteHandler(customer)">
          Löschen
        </button>
      </td>
    </tr>
    }
  </tbody>
</table>
```

✅ **Ergebnis:**

- „Löschen“-Button triggert `deleteHandler()`
- Übergibt den aktuellen Customer an den EventEmitter
- Elternkomponente empfängt das Event über `(deleteCustomer)`

---

### 📄 `customer-list.component.ts` (angepasst)

```typescript
import { CommonModule, JsonPipe } from "@angular/common";
import { Component } from "@angular/core";
import { Customer } from "../../../model/customer";
import { CustomerService } from "../../../services/customer.service";
import { LoadingIndicatorComponent } from "../../../../../components/loading-indicator/loading-indicator.component";
import { ErrorBoxComponent } from "../../../../../components/error-box/error-box.component";
import { CustomerTableComponent } from "../../../components/customer-table/customer-table.component";

@Component({
  selector: "app-customer-list",
  imports: [
    CommonModule,
    LoadingIndicatorComponent,
    ErrorBoxComponent,
    CustomerTableComponent,
  ],
  templateUrl: "./customer-list.component.html",
  styleUrl: "./customer-list.component.scss",
})
export class CustomerListComponent {
  public customers: Customer[] = [];
  public loading = true;
  public errorMessage: string | null = null;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.loading = true;
    this.customerService.getAll().subscribe({
      next: (customers) => {
        this.customers = customers;
        this.loading = false;
      },
      error: (e: Error) => {
        this.errorMessage = e.message;
        this.loading = false;
      },
    });
  }

  deleteCustomer({ id }: Customer) {
    console.log("Delete customer with id", id);
    // Später: Service-Aufruf zum Löschen implementieren
  }
}
```

✅ **Ergebnis:**

- `deleteCustomer()` wird durch das Event der Kindkomponente aufgerufen
- Übergibt den selektierten Customer (Destructuring: `{ id }`)
- Noch ohne Serverlogik → idealer Platz für zukünftige API-Integration

---

### 📄 `customer-list.component.html` (angepasst)

```html
<h2>Kundenliste</h2>

<div class="d-flex justify-content-between my-4">
  <button class="btn btn-primary">Neuer Kunde</button>
  <button class="btn btn-outline-secondary" (click)="loadCustomers()">
    Aktualisieren
  </button>
</div>

@if(errorMessage !== null) {
<app-error-box>{{ errorMessage }}</app-error-box>
} @if(loading) {
<app-loading-indicator></app-loading-indicator>
} @else if (errorMessage === null) {
<app-customer-table
  [customers]="customers"
  (deleteCustomer)="deleteCustomer($event)"
>
</app-customer-table>
}
```

✅ **Ergebnis:**

- Event-Binding `(deleteCustomer)` verbindet Parent und Child
- Saubere Kommunikation über definierte Schnittstelle
- Konsistente Struktur im Template

---

### 💡 Zusammenfassung

| Bereich             | Ziel                             | Werkzeug / Konzept                   |
| ------------------- | -------------------------------- | ------------------------------------ |
| Event-Kommunikation | Kind sendet Aktion an Eltern     | `@Output()` + EventEmitter           |
| UI-Aktion           | Klick auf Löschen löst Event aus | `(click)` → `deleteHandler()`        |
| Parent-Handler      | Reaktion auf Event               | `deleteCustomer($event)`             |
| Erweiterbarkeit     | Basis für Service-Integration    | Platz für `CustomerService.delete()` |

---

### 🔗 Nützliche Links

- ⚙️ **Angular Output Decorator (`@Output()`):**
  [https://angular.io/guide/inputs-outputs#sending-data-to-a-parent-component](https://angular.io/guide/inputs-outputs#sending-data-to-a-parent-component)

- 🧩 **EventEmitter API Referenz:**
  [https://angular.io/api/core/EventEmitter](https://angular.io/api/core/EventEmitter)

- 💅 **Bootstrap Buttons:**
  [https://getbootstrap.com/docs/5.3/components/buttons/](https://getbootstrap.com/docs/5.3/components/buttons/)

---

## 🧹 Kunden löschen über `CustomerService.deleteById()`

Die `CustomerListComponent` unterstützt jetzt das **Löschen von Kunden** über den `CustomerService`.
Dabei werden Ladezustand, Fehlerbehandlung und Datenaktualisierung automatisch gesteuert.

---

### 📄 `customer.service.ts` (angepasst)

```typescript
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "../model/customer";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";

const url = environment.apiUrl + "/customers";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  #http = inject(HttpClient);

  getAll(): Observable<Customer[]> {
    return this.#http.get<Customer[]>(url);
  }

  deleteById(id: number) {
    return this.#http.delete(url + "/" + id);
  }
}
```

✅ **Ergebnis:**

- `deleteById(id)` ruft per HTTP-DELETE den Backend-Endpunkt auf
- Baut direkt auf der bestehenden `HttpClient`-Instanz auf
- Trennt Datenlogik klar von der UI

---

### 📄 `customer-list.component.ts` (angepasst)

```typescript
import { CommonModule, JsonPipe } from "@angular/common";
import { Component } from "@angular/core";
import { Customer } from "../../../model/customer";
import { CustomerService } from "../../../services/customer.service";
import { LoadingIndicatorComponent } from "../../../../../components/loading-indicator/loading-indicator.component";
import { ErrorBoxComponent } from "../../../../../components/error-box/error-box.component";
import { CustomerTableComponent } from "../../../components/customer-table/customer-table.component";

@Component({
  selector: "app-customer-list",
  imports: [
    CommonModule,
    LoadingIndicatorComponent,
    ErrorBoxComponent,
    CustomerTableComponent,
  ],
  templateUrl: "./customer-list.component.html",
  styleUrl: "./customer-list.component.scss",
})
export class CustomerListComponent {
  public customers: Customer[] = [];
  public loading = true;
  public errorMessage: string | null = null;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.loading = true;
    this.errorMessage = null;

    this.customerService.getAll().subscribe({
      next: (customers) => {
        this.customers = customers;
        this.loading = false;
      },
      error: (e: Error) => {
        this.errorMessage = e.message;
        this.loading = false;
      },
    });
  }

  deleteCustomer({ id }: Customer) {
    this.loading = true;
    this.errorMessage = null;

    this.customerService.deleteById(id).subscribe({
      next: () => {
        this.loadCustomers(); // automatische Aktualisierung nach erfolgreichem Delete
      },
      error: (e: Error) => {
        this.errorMessage = e.message;
        this.loading = false;
      },
    });
  }
}
```

✅ **Ergebnis:**

- Ruft `deleteById()` des `CustomerService` auf
- Zeigt währenddessen den LoadingIndicator an
- Lädt nach erfolgreichem Löschen automatisch die aktualisierte Liste
- Fehler werden über `ErrorBoxComponent` angezeigt

---

### 📄 `customer-list.component.html`

```html
<h2>Kundenliste</h2>

<div class="d-flex justify-content-between my-4">
  <button class="btn btn-primary">Neuer Kunde</button>
  <button class="btn btn-outline-secondary" (click)="loadCustomers()">
    Aktualisieren
  </button>
</div>

@if(errorMessage !== null) {
<app-error-box>{{ errorMessage }}</app-error-box>
} @if(loading) {
<app-loading-indicator></app-loading-indicator>
} @else if (errorMessage === null) {
<app-customer-table
  [customers]="customers"
  (deleteCustomer)="deleteCustomer($event)"
>
</app-customer-table>
}
```

✅ **Ergebnis:**

- Gleiche Template-Struktur wie zuvor
- Delete-Button im Child (`CustomerTableComponent`) ruft Parent-Methode auf
- Benutzer erhält direkt Rückmeldung bei Lade- oder Fehlerzuständen

---

### 💡 Zusammenfassung

| Bereich                   | Ziel                                       | Werkzeug / Konzept       |
| ------------------------- | ------------------------------------------ | ------------------------ |
| Datenlöschung             | Kunde über API löschen                     | `HttpClient.delete()`    |
| Eltern-Kind-Kommunikation | EventEmitter vom Child an Parent           | `(deleteCustomer)` Event |
| Status-Handling           | Automatische UI-Aktualisierung nach Delete | `loadCustomers()` Aufruf |
| Fehleranzeige             | Nutzerfreundliche Rückmeldung im UI        | `ErrorBoxComponent`      |

---

### 🔗 Nützliche Links

- ⚙️ **Angular HttpClient DELETE Methode:**
  [https://angular.io/guide/http#deleting-data](https://angular.io/guide/http#deleting-data)

- 🧭 **RxJS Subscribe mit next/error/complete:**
  [https://rxjs.dev/api/index/function/subscribe](https://rxjs.dev/api/index/function/subscribe)

- 💅 **Bootstrap Buttons (Delete-Design):**
  [https://getbootstrap.com/docs/5.3/components/buttons/](https://getbootstrap.com/docs/5.3/components/buttons/)

---

## 🧪 Test: `CustomerTableComponent`

Für die `CustomerTableComponent` wurde ein **Unit-Test mit Jest** erstellt,
um sicherzustellen, dass die Komponente korrekt initialisiert wird
und das **`deleteCustomer`-Event** beim Aufruf von `deleteHandler()` ausgelöst wird.

---

### 📄 `customer-table.component.spec.ts`

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { jest } from "@jest/globals";

import { CustomerTableComponent } from "./customer-table.component";
import { Customer } from "../../model/customer";

describe("CustomerTableComponent", () => {
  let component: CustomerTableComponent;
  let fixture: ComponentFixture<CustomerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("deleteHandler", () => {
    it("should exist", () => {
      expect(component.deleteCustomer).toBeTruthy();

      const emitSpy = jest.spyOn(component.deleteCustomer, "emit");
      component.deleteHandler({} as Customer);
      expect(emitSpy).toHaveBeenCalled();
    });
  });
});
```

✅ **Ergebnis:**

- Test prüft, ob die Komponente erstellt werden kann
- `deleteHandler()` löst das `deleteCustomer`-Event korrekt aus
- `jest.spyOn()` überwacht die `emit()`-Methode
- Keine realen API- oder DOM-Aufrufe notwendig

---

### 💡 Zusammenfassung

| Bereich           | Ziel                                         | Werkzeug / Konzept        |
| ----------------- | -------------------------------------------- | ------------------------- |
| Komponenten-Setup | Sicherstellen, dass Komponente initialisiert | Angular TestBed + Jest    |
| Event-Test        | Prüft EventEmitter-Funktionalität            | `jest.spyOn(..., 'emit')` |
| Test-Isolation    | Keine Abhängigkeiten zu Services oder HTML   | Unit-Test mit Stubs       |

---

### 🔗 Nützliche Links

- 🧭 **Angular Testing (Standalone Components):**
  [https://angular.dev/guide/testing/components-basics](https://angular.dev/guide/testing/components-basics)

- ⚙️ **Jest `spyOn()` Dokumentation:**
  [https://jestjs.io/docs/jest-object#jestspyonobject-methodname](https://jestjs.io/docs/jest-object#jestspyonobject-methodname)

- 🧩 **Angular Output Events testen:**
  [https://angular.io/guide/testing-components-scenarios#triggering-eventemitters](https://angular.io/guide/testing-components-scenarios#triggering-eventemitters)

---

## 🧪 Test: `CustomerListComponent`

Für die `CustomerListComponent` wurde ein Jest-Test erstellt,
um das Zusammenspiel zwischen **Komponente** und dem **CustomerService** zu prüfen.
Dabei werden die Service-Methoden `getAll()` und `deleteById()` **über Mocks simuliert**.

---

### 📄 `customer-list.component.spec.ts`

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CustomerListComponent } from "./customer-list.component";
import { CustomerService } from "../../../services/customer.service";
import { of } from "rxjs";
import { Customer } from "../../../model/customer";

const createCustomerServiceMock = function () {
  const service = {
    getAll: jest.fn(),
    deleteById: jest.fn(),
  };

  service.deleteById.mockReturnValue(of(void 0));
  service.getAll.mockReturnValue(of([]));

  return service;
};

describe("CustomerListComponent", () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
  let customerServiceMock = createCustomerServiceMock();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerListComponent],
      providers: [
        {
          provide: CustomerService,
          useValue: customerServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("loadCustomers", () => {
    it("should exist", () => {
      expect(component.loadCustomers).toBeTruthy();
      expect(customerServiceMock.getAll).toHaveBeenCalled();
    });
  });

  describe("deleteCustomer", () => {
    it("should exist", () => {
      expect(component.deleteCustomer).toBeTruthy();
      component.deleteCustomer({ id: 1 } as Customer);
      expect(customerServiceMock.deleteById).toHaveBeenCalled();
    });
  });
});
```

✅ **Ergebnis:**

- `CustomerService` wird vollständig über ein Mock-Objekt ersetzt
- Keine echten HTTP-Aufrufe (dank `of()` aus RxJS)
- Überprüfung, dass `loadCustomers()` und `deleteCustomer()` aufgerufen werden
- Saubere Isolierung der Logik von der UI

---

### 💡 Zusammenfassung

| Bereich               | Ziel                                            | Werkzeug / Konzept           |
| --------------------- | ----------------------------------------------- | ---------------------------- |
| Komponenten-Setup     | Sicherstellen, dass Komponente erstellt         | Angular TestBed + Jest       |
| Service-Kommunikation | Prüfung der Aufrufe von `getAll` & `deleteById` | Mock-Objekte mit `jest.fn()` |
| Asynchrone Abläufe    | Simuliert mit RxJS `of()`                       | RxJS Observables             |
| Test-Isolation        | Keine echten HTTP- oder UI-Abhängigkeiten       | Dependency Injection         |

---

### 🔗 Nützliche Links

- 🧩 **Angular Unit Testing Guide:**
  [https://angular.dev/guide/testing](https://angular.dev/guide/testing)

- ⚙️ **Mocking Services in Jest:**
  [https://jestjs.io/docs/mock-functions](https://jestjs.io/docs/mock-functions)

- 🧭 **RxJS `of()` Observable:**
  [https://rxjs.dev/api/index/function/of](https://rxjs.dev/api/index/function/of)

---

## 🧪 Finaler Test: `CustomerListComponent`

Der Test der `CustomerListComponent` wurde finalisiert und prüft nun:

- die erfolgreiche Initialisierung der Komponente
- das Laden von Kundendaten
- die Fehlerbehandlung (`errorMessage`)
- und den Löschvorgang (`deleteCustomer()` → `CustomerService.deleteById()`).

---

### 📄 `customer-list.component.spec.ts`

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CustomerListComponent } from "./customer-list.component";
import { CustomerService } from "../../../services/customer.service";
import { of, throwError } from "rxjs";
import { Customer } from "../../../model/customer";

const createCustomerServiceMock = function () {
  const service = {
    getAll: jest.fn(),
    deleteById: jest.fn(),
  };

  service.deleteById.mockReturnValue(of(void 0));
  service.getAll.mockReturnValue(of([]));

  return service;
};

describe("CustomerListComponent", () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
  let customerServiceMock: any;

  beforeEach(async () => {
    customerServiceMock = createCustomerServiceMock();
    await TestBed.configureTestingModule({
      imports: [CustomerListComponent],
      providers: [
        {
          provide: CustomerService,
          useValue: customerServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("loadCustomers", () => {
    it("should exist", () => {
      expect(component.loadCustomers).toBeTruthy();
      expect(customerServiceMock.getAll).toHaveBeenCalled();
    });

    it("should handle Error", () => {
      const errorMessage = "Fehler";
      customerServiceMock.getAll.mockReturnValueOnce(
        throwError(() => {
          return new Error(errorMessage);
        })
      );

      expect(component.errorMessage).toBeNull();
      component.loadCustomers();
      expect(customerServiceMock.getAll).toHaveBeenCalled();
      expect(component.errorMessage).toEqual(errorMessage);
    });
  });

  describe("deleteCustomer", () => {
    it("should exist", () => {
      expect(component.deleteCustomer).toBeTruthy();
      component.deleteCustomer({ id: 1 } as Customer);
      expect(customerServiceMock.deleteById).toHaveBeenCalled();
    });
  });
});
```

✅ **Ergebnis:**

- **`createCustomerServiceMock()`** erzeugt realistische Mock-Funktionalität
- Tests laufen vollständig isoliert ohne HTTP-Aufrufe
- Fehler werden mit `throwError()` simuliert und überprüft
- `deleteCustomer()` löst erwarteten Service-Aufruf aus
- Durch `mockReturnValue(of([]))` werden RxJS-Observables korrekt simuliert

---

### 💡 Zusammenfassung

| Bereich               | Ziel                                   | Werkzeug / Konzept          |
| --------------------- | -------------------------------------- | --------------------------- |
| Komponenten-Setup     | Testet erfolgreiche Erstellung         | Angular TestBed + Jest      |
| Service-Kommunikation | Simuliert API-Aufrufe                  | Mocks mit `jest.fn()`       |
| Fehlerbehandlung      | Überprüft `errorMessage` im Fehlerfall | `throwError()` von RxJS     |
| Datenlöschung         | Prüft `deleteById()`-Aufruf            | Event-Simulation im Test    |
| Test-Isolation        | Kein echter HTTP-Traffic               | Dependency Injection (Mock) |

---

### 🔗 Nützliche Links

- 🧭 **Angular Unit Testing Guide:**
  [https://angular.dev/guide/testing](https://angular.dev/guide/testing)

- ⚙️ **Jest Mock Functions (`jest.fn`):**
  [https://jestjs.io/docs/mock-functions](https://jestjs.io/docs/mock-functions)

- ⚡ **RxJS Error Handling (`throwError`):**
  [https://rxjs.dev/api/index/function/throwError](https://rxjs.dev/api/index/function/throwError)

- 🧩 **Angular Service Testing (Error Handling):**
  [https://angular.io/guide/testing-services#testing-error-handling](https://angular.io/guide/testing-services#testing-error-handling)

---

### 🧠 Was wurde umgesetzt – Error Handling im Test

Im erweiterten Test der `CustomerListComponent` wurde gezielt geprüft,
ob die **Fehlerbehandlung (`errorMessage`)** der Komponente korrekt reagiert,
wenn der Service `CustomerService.getAll()` einen Fehler auslöst.

Ziel war es, sicherzustellen, dass:

- die Komponente **nicht abstürzt**,
- der Fehler im UI über `errorMessage` angezeigt werden kann,
- und der Ladezustand sauber beendet wird (`loading = false`).

---

### 🔍 Funktionsweise des Tests

1. **Mocking des CustomerService:**
   Statt den echten `CustomerService` zu verwenden, wird ein Mock erzeugt:

   ```typescript
   const createCustomerServiceMock = function () {
     const service = {
       getAll: jest.fn(),
       deleteById: jest.fn(),
     };

     service.deleteById.mockReturnValue(of(void 0));
     service.getAll.mockReturnValue(of([]));

     return service;
   };
   ```

   → Dadurch laufen alle Tests **vollständig ohne Backend oder HTTP-Aufrufe**.
   → Der Rückgabewert `of([])` simuliert eine erfolgreiche Antwort (leeres Array).

2. **Simulation eines Fehlers mit `throwError`:**
   Im zweiten Testfall von `loadCustomers` wird `throwError()` aus RxJS genutzt,
   um ein künstliches Fehler-Observable zu erzeugen:

   ```typescript
   customerServiceMock.getAll.mockReturnValueOnce(
     throwError(() => new Error("Fehler"))
   );
   ```

   → Damit verhält sich der Mock so, als hätte der Server oder das Netzwerk einen Fehler gemeldet.

3. **Überprüfung der Fehlerbehandlung:**
   Der Test prüft, ob:

   - `errorMessage` **anfangs `null`** ist,
   - `loadCustomers()` aufgerufen wird,
   - und anschließend **`errorMessage` den erwarteten Text enthält**:

   ```typescript
   expect(component.errorMessage).toBeNull();
   component.loadCustomers();
   expect(component.errorMessage).toEqual("Fehler");
   ```

4. **Sicherstellung der Aufrufe:**
   Zusätzlich wird geprüft, dass `getAll()` wirklich aufgerufen wurde,
   was zeigt, dass der Datenabruf-Vorgang gestartet wurde.

---

### ✅ Ergebnis

Durch diese Tests wird jetzt nicht nur das **Erfolgsverhalten**,
sondern auch das **Fehlerverhalten** eurer `CustomerListComponent` automatisch überprüft.

Damit stellt ihr sicher, dass:

- Fehler im Backend (z. B. Netzwerkprobleme oder Serverfehler) **nicht zu Abstürzen führen**,
- der Benutzer später im UI eine passende Fehlermeldung (`ErrorBox`) sieht,
- und alle Zustände der Komponente (`loading`, `errorMessage`, `customers`)
  im Test korrekt nachvollzogen werden.

---

### 💡 Fazit

Mit dieser Erweiterung habt ihr euer Test-Setup **realitätsnäher und robuster** gemacht:

| Bereich            | Ziel                                        | Ergebnis                           |
| ------------------ | ------------------------------------------- | ---------------------------------- |
| Mocking            | Backend vollständig simulieren              | Keine echten HTTP-Calls            |
| Fehlerhandling     | Verhalten bei Serverfehler testen           | `errorMessage` korrekt gesetzt     |
| Stabilität         | Absturzfreie Fehlerbehandlung sicherstellen | Test schützt zukünftige Änderungen |
| Qualitätssicherung | UI-Logik (Lade- & Fehlerzustand) validiert  | Bessere Testabdeckung              |

---

## 🧪 Test: `CustomerService`

Der `CustomerService` wurde mit dem **Angular HttpTestingController** getestet,
um sicherzustellen, dass HTTP-Requests korrekt abgesetzt werden
und das erwartete Verhalten beim Abruf von Kundendaten (`getAll()`) gewährleistet ist.

---

### 📄 `customer.service.spec.ts` (aktualisiert)

```typescript
import { TestBed } from "@angular/core/testing";

import { CustomerService } from "./customer.service";
import { provideHttpClient } from "@angular/common/http";
import {
  HttpTestingController,
  provideHttpClientTesting,
} from "@angular/common/http/testing";
import { firstValueFrom } from "rxjs";

describe("CustomerService", () => {
  let service: CustomerService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(CustomerService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("getAll", () => {
    it("should exist", () => {
      expect(service.getAll).toBeTruthy();
    });

    it("should call get", async () => {
      // $ = Observable
      const customers$ = service.getAll();
      const customersPromise = firstValueFrom(customers$);

      const url = "http://localhost:3001/customers/";
      const req = httpTesting.expectOne(url);
      req.flush([]); // Mock Response

      expect(await customersPromise).toEqual([]);
      httpTesting.verify();

      expect(req.request.method).toBe("GET");
    });
  });
});
```

✅ **Ergebnis:**

- Der Test nutzt `HttpTestingController`, um HTTP-Aufrufe abzufangen
- `expectOne(url)` prüft, ob genau **ein Request** an den richtigen Endpoint geschickt wurde
- Mit `req.flush([])` wird eine **Mock-Response** gesendet
- `firstValueFrom()` wandelt das Observable in ein Promise um, um auf das Ergebnis zu warten
- Die Anfrage-Methode (`GET`) wird überprüft

---

### 💡 Zusammenfassung

| Bereich                 | Ziel                                            | Werkzeug / Konzept            |
| ----------------------- | ----------------------------------------------- | ----------------------------- |
| HTTP-Testumgebung       | Simuliert Backend-Aufrufe                       | `HttpTestingController`       |
| Service-Methodenprüfung | Überprüfung von URL, Request-Methode & Response | `expectOne()` + `req.flush()` |
| Observable-Handling     | Umwandlung in Promise für asynchrone Prüfung    | `firstValueFrom()` aus RxJS   |
| Test-Isolation          | Kein echter HTTP-Verkehr                        | `provideHttpClientTesting()`  |

---

### 🔗 Nützliche Links

- ⚙️ **Angular HttpClient Testing Guide:**
  [https://angular.io/guide/http#testing-http-requests](https://angular.io/guide/http#testing-http-requests)

- 🧩 **RxJS `firstValueFrom()` Dokumentation:**
  [https://rxjs.dev/api/index/function/firstValueFrom](https://rxjs.dev/api/index/function/firstValueFrom)

- 🧭 **HttpTestingController API:**
  [https://angular.io/api/common/http/testing/HttpTestingController](https://angular.io/api/common/http/testing/HttpTestingController)

---

## 🧪 Test: `CustomerService`

Der `CustomerService` wurde um einen **DELETE-Test** erweitert,
um sicherzustellen, dass Kunden korrekt über die REST-API gelöscht werden.
Damit sind jetzt sowohl das Laden (`getAll()`) als auch das Löschen (`deleteById()`) vollständig abgedeckt.

---

### 📄 `customer.service.spec.ts` (aktualisiert)

```typescript
import { TestBed } from "@angular/core/testing";

import { CustomerService } from "./customer.service";
import { provideHttpClient } from "@angular/common/http";
import {
  HttpTestingController,
  provideHttpClientTesting,
} from "@angular/common/http/testing";
import { firstValueFrom } from "rxjs";

describe("CustomerService", () => {
  let service: CustomerService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(CustomerService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("getAll", () => {
    it("should exist", () => {
      expect(service.getAll).toBeTruthy();
    });

    it("should call get", async () => {
      // $ bedeutet Observable
      const customers$ = service.getAll();
      const customersPromise = firstValueFrom(customers$);

      const url = "http://localhost:3001/customers/";
      const req = httpTesting.expectOne(url);
      req.flush([]); // mock response

      expect(await customersPromise).toEqual([]);
      httpTesting.verify();

      expect(req.request.method).toBe("GET");
    });
  });

  describe("deleteById", () => {
    it("should call delete", async () => {
      // $ bedeutet Observable
      const deleteId = 1;
      service.deleteById(deleteId).subscribe();

      const url = `http://localhost:3001/customers/${deleteId}`;
      const req = httpTesting.expectOne(url);
      req.flush({}); // mock response

      httpTesting.verify();

      expect(req.request.method).toBe("DELETE");
    });
  });
});
```

✅ **Ergebnis:**

- `HttpTestingController` überwacht alle HTTP-Aufrufe
- `expectOne(url)` prüft die exakte API-URL
- `req.flush({})` simuliert eine erfolgreiche leere Response
- Die HTTP-Methode (`DELETE`) wird überprüft
- Kein echter Netzwerkverkehr — vollständige Isolierung im Unit-Test

---

### 💡 Zusammenfassung

| Bereich            | Ziel                             | Werkzeug / Konzept              |
| ------------------ | -------------------------------- | ------------------------------- |
| Laden von Daten    | Sicherstellung des GET-Aufrufs   | `expectOne()` + `req.flush([])` |
| Löschen von Daten  | Prüfung des DELETE-Endpunkts     | `expectOne()` + `req.flush({})` |
| Test-Isolation     | Kein echter HTTP-Traffic         | `HttpTestingController`         |
| Asynchrone Prüfung | Kontrolle der Observable-Ausgabe | RxJS + `firstValueFrom()`       |

---

### 🔗 Nützliche Links

- ⚙️ **Angular HttpClient Testing Guide:**
  [https://angular.io/guide/http#testing-http-requests](https://angular.io/guide/http#testing-http-requests)

- 🧭 **HttpTestingController API Referenz:**
  [https://angular.io/api/common/http/testing/HttpTestingController](https://angular.io/api/common/http/testing/HttpTestingController)

- 🧩 **RxJS `firstValueFrom()` Dokumentation:**
  [https://rxjs.dev/api/index/function/firstValueFrom](https://rxjs.dev/api/index/function/firstValueFrom)

---

Perfekt 👍 — verstanden: **Tag 04** ist also ein komplett neuer Abschnitt im Projekt, nicht die Fortsetzung der Tests vom Vortag.
Dann bekommst du hier den gewohnten neutralen **Startblock für einen neuen Projekttag**, so wie an deinen vorherigen Tagen — sauber strukturiert, als Einstiegspunkt für die kommenden Arbeiten.

---

# 📅 Tag 4 - 09.10.25

Mit **Tag 04** beginnt ein neuer Abschnitt des Projekts.
Die Arbeiten und Tests der vorherigen Tage wurden erfolgreich abgeschlossen,
und das System befindet sich nun auf einem stabilen Stand.

An diesem Tag werden **neue Themen**, **Erweiterungen** oder **Refactorings** vorbereitet und umgesetzt.
Der Fokus liegt darauf, den nächsten Funktionsblock zu entwickeln, bestehende Strukturen zu optimieren
und die Projektbasis weiter auszubauen.

---

✅ **Ziele für Tag 04 (geplant / initial):**

- Analyse und Planung der anstehenden Erweiterungen
- Implementierung neuer Features oder Module
- Überprüfung und ggf. Verbesserung bestehender Komponenten
- Vorbereitung weiterer Tests oder Integration neuer Schnittstellen

---

🧩 **Ausgangsbasis:**

| Bereich                 | Status zum Ende von Tag 03                          |
| ----------------------- | --------------------------------------------------- |
| `CustomerFeature`       | vollständig implementiert & getestet                |
| `CustomerService`       | API-Integration (GET / DELETE) abgeschlossen        |
| `UI-Komponenten`        | modularisiert (Table, ErrorBox, LoadingIndicator)   |
| `Testing-Infrastruktur` | Jest + HttpTestingController erfolgreich im Einsatz |

---

## Routing & neue Edit-/New-Views\*\*

Zum Start von **Tag 04** wurde das Customer-Feature um neue **Ansichts-Komponenten** und **Routen** erweitert.
Damit beginnt die Implementierung der **Detail- und Formularseiten** für Kundenanlage und -bearbeitung.

---

### 🧩 Neue Komponenten

Mit Angular CLI wurden zwei neue Views erstellt:

```bash
ng g c views/CustomerEdit
ng g c views/CustomerNew
```

Diese dienen als Seiten für das **Erstellen** und **Bearbeiten** von Kunden.

---

### 📄 `customer.routes.ts` (aktualisiert)

```typescript
import { Routes } from "@angular/router";
import { CustomerIndexComponent } from "./customer-index.component";
import { CustomerListComponent } from "./views/customer-list/customer-list/customer-list.component";
import { CustomerNewComponent } from "./views/customer-new/customer-new.component";
import { CustomerEditComponent } from "./views/customer-edit/customer-edit.component";

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
      {
        path: "new",
        component: CustomerNewComponent,
      },
      {
        path: "edit/:customerId",
        component: CustomerEditComponent,
      },
    ],
  },
];
```

✅ **Ergebnis:**

- `/customers/dashboard` → Kundenübersicht
- `/customers/new` → Neue Kunden anlegen
- `/customers/edit/:customerId` → Kunden bearbeiten
- Klare Trennung zwischen Index-, Listen- und Formularansichten

---

### 📄 `customer-list.component.html` (angepasst)

```html
<h2>Kundenliste</h2>

<div class="d-flex justify-content-between my-4">
  <button class="btn btn-primary" [routerLink]="['/customers/new']">
    Neuer Kunde
  </button>
  <button class="btn btn-outline-secondary" (click)="loadCustomers()">
    Aktualisieren
  </button>
</div>

@if(errorMessage !== null) {
<app-error-box>{{ errorMessage }}</app-error-box>
} @if(loading) {
<app-loading-indicator></app-loading-indicator>
} @else if (errorMessage === null) {
<app-customer-table
  [customers]="customers"
  (deleteCustomer)="deleteCustomer($event)"
>
</app-customer-table>
}
```

✅ **Ergebnis:**

- „Neuer Kunde“-Button navigiert über `[routerLink]` direkt zur **CustomerNewComponent**
- Navigation erfolgt deklarativ über Angular-Router

---

### 📄 `customer-table.component.ts` (angepasst)

```typescript
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Customer } from "../../model/customer";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-customer-table",
  imports: [CommonModule, RouterLink],
  templateUrl: "./customer-table.component.html",
  styleUrl: "./customer-table.component.scss",
})
export class CustomerTableComponent {
  @Input()
  public customers: Customer[] = [];

  @Output()
  deleteCustomer = new EventEmitter<Customer>();

  deleteHandler(customer: Customer) {
    this.deleteCustomer.emit(customer);
  }
}
```

---

### 📄 `customer-table.component.html` (angepasst)

```html
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
        {{ customer.credit_limit | currency : 'EUR' : 'symbol' }}
      </td>
      <td class="text-end">
        <button
          class="btn btn-sm btn-primary"
          [routerLink]="['/customers', 'edit', customer.id]"
        >
          Bearbeiten
        </button>
        <button class="btn btn-sm btn-danger" (click)="deleteHandler(customer)">
          Löschen
        </button>
      </td>
    </tr>
    }
  </tbody>
</table>
```

✅ **Ergebnis:**

- **Bearbeiten-Button** öffnet `/customers/edit/:id`
- **Löschen-Button** bleibt unverändert mit EventEmitter
- RouterLink sorgt für klare, deklarative Navigation

---

### 💡 Zusammenfassung

| Bereich            | Ziel                                     | Werkzeug / Konzept            |
| ------------------ | ---------------------------------------- | ----------------------------- |
| Routing            | Navigation zwischen Dashboard, New, Edit | Angular Router                |
| Kundenanlage       | Neue View für Kundenerstellung           | `CustomerNewComponent`        |
| Kundenbearbeitung  | Neue View für Bearbeitungsseite          | `CustomerEditComponent`       |
| Navigation Buttons | Benutzerfreundliche Navigation im UI     | `[routerLink]`                |
| Code-Struktur      | Saubere Trennung von Routing & Views     | Child Routes im Feature-Modul |

---

### 🔗 Nützliche Links

- 🧭 **Angular Router Basics:**
  [https://angular.io/guide/router](https://angular.io/guide/router)

- ⚙️ **RouterLink Directive:**
  [https://angular.io/api/router/RouterLink](https://angular.io/api/router/RouterLink)

- 🧩 **Feature Module Routing (Child Routes):**
  [https://angular.io/guide/feature-modules#routing](https://angular.io/guide/feature-modules#routing)

---

## 🧩 Wiederverwendbares Kundenformular (`CustomerFormComponent`)

Zur Vereinheitlichung und besseren Wartbarkeit wurde ein **gemeinsames Formular** für die Kundenerstellung und -bearbeitung erstellt.
Die neue `CustomerFormComponent` kapselt alle Eingabefelder und Schaltflächen und wird von den Views
`CustomerNewComponent` und `CustomerEditComponent` wiederverwendet.

---

### 📄 Erstellung der Komponente

```bash
ng g c features/customer/components/CustomerForm
```

---

### 📄 `customer-form.component.ts`

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-customer-form",
  imports: [],
  templateUrl: "./customer-form.component.html",
  styleUrl: "./customer-form.component.scss",
})
export class CustomerFormComponent {}
```

✅ **Ergebnis:**

- Eigenständige, wiederverwendbare Formular-Komponente
- Kann in unterschiedlichen Views mit individuellen Buttons/Texten verwendet werden
- Keine Logik notwendig — reines Template für Eingaben

---

### 📄 `customer-form.component.html`

```html
<form>
  <div class="mb-3">
    <label for="name" class="form-label">Name:</label>
    <input type="text" name="name" id="name" class="form-control" />
  </div>

  <div class="mb-3">
    <label for="credit_limit" class="form-label">Kreditlimit:</label>
    <input
      type="number"
      step="0.01"
      name="credit_limit"
      id="credit_limit"
      class="form-control"
    />
  </div>

  <div class="mb-3">
    <button class="btn btn-primary">
      <ng-content></ng-content>
    </button>
  </div>
</form>
```

✅ **Ergebnis:**

- Verwendung von Bootstrap-Formular-Styles
- `ng-content` ermöglicht flexible Button-Beschriftungen
- Eingabefelder für **Name** und **Kreditlimit**
- Grundstruktur für spätere Anbindung an Reactive Forms oder Template Forms

---

### 📄 `customer-new.component.ts` / `customer-edit.component.ts` (angepasst)

```typescript
import { Component } from "@angular/core";
import { CustomerFormComponent } from "../../components/customer-form/customer-form.component";

@Component({
  selector: "app-customer-new",
  imports: [CustomerFormComponent],
  templateUrl: "./customer-new.component.html",
  styleUrl: "./customer-new.component.scss",
})
export class CustomerNewComponent {}
```

_(Analog auch für `CustomerEditComponent` implementiert.)_

---

### 📄 `customer-new.component.html`

```html
<h2>Neuer Kunde</h2>
<app-customer-form> Jetzt anlegen </app-customer-form>
```

---

### 📄 `customer-edit.component.html`

```html
<h2>Kunde mit der ID ?? bearbeiten</h2>
<app-customer-form> Jetzt bearbeiten </app-customer-form>
```

✅ **Ergebnis:**

- Beide Views nutzen dieselbe Formularstruktur
- Unterschiedliche Beschriftungen über `<ng-content>`
- Zentrale Stelle für spätere Formularlogik

---

### 💡 Zusammenfassung

| Bereich          | Ziel                                        | Werkzeug / Konzept       |
| ---------------- | ------------------------------------------- | ------------------------ |
| Formularstruktur | Einheitliches Formular für New & Edit Views | `CustomerFormComponent`  |
| Wiederverwendung | Einmalige Definition, mehrfacher Einsatz    | `ng-content` Slot        |
| Layout & Design  | Bootstrap-Formular-Styling                  | `.form-control`, `.mb-3` |
| Erweiterbarkeit  | Vorbereitung für `ReactiveFormsModule`      | Angular Form API         |

---

### 🔗 Nützliche Links

- ⚙️ **Angular Content Projection (`<ng-content>`):**
  [https://angular.io/guide/content-projection](https://angular.io/guide/content-projection)

- 🧭 **Angular Forms Overview:**
  [https://angular.io/guide/forms-overview](https://angular.io/guide/forms-overview)

- 💅 **Bootstrap Form Controls:**
  [https://getbootstrap.com/docs/5.3/forms/overview/](https://getbootstrap.com/docs/5.3/forms/overview/)

---

## ⚙️ Formularlogik mit Reactive Forms (`FormBuilder` & `ReactiveFormsModule`)

Die bisher statische `CustomerFormComponent` wurde um echte Formularlogik erweitert.
Dazu wurde das **Reactive Forms Modul** von Angular eingebunden und mit einem `FormGroup` aus dem `FormBuilder` verbunden.
Über `formHandler()` werden die Formularwerte verarbeitet.

---

### 📄 `customer-form.component.ts` (aktualisiert)

```typescript
import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-customer-form",
  imports: [ReactiveFormsModule],
  templateUrl: "./customer-form.component.html",
  styleUrl: "./customer-form.component.scss",
})
export class CustomerFormComponent {
  formHandler() {
    const customer = this.fields.value;
    console.log(customer);
  }

  fields = inject(FormBuilder).group({
    name: [""],
    credit_limit: [0],
  });
}
```

✅ **Ergebnis:**

- Verwendung von `ReactiveFormsModule` zur Formularsteuerung
- `FormBuilder` erzeugt ein `FormGroup` mit initialen Werten
- `formHandler()` liest die Werte aus `fields.value` aus
- Grundlage für Validierung, Edit-Modus und API-Integration

---

### 📄 `customer-form.component.html` (aktualisiert)

```html
<form (ngSubmit)="formHandler()" [formGroup]="fields">
  <div class="mb-3">
    <label for="name" class="form-label">Name:</label>
    <input
      type="text"
      name="name"
      id="name"
      class="form-control"
      formControlName="name"
    />
  </div>

  <div class="mb-3">
    <label for="credit_limit" class="form-label">Kreditlimit:</label>
    <input
      type="number"
      step="0.01"
      name="credit_limit"
      id="credit_limit"
      class="form-control"
      formControlName="credit_limit"
    />
  </div>

  <div class="mb-3">
    <button type="submit" class="btn btn-primary">
      <ng-content></ng-content>
    </button>
  </div>
</form>
```

✅ **Ergebnis:**

- `formGroup` bindet das gesamte Formular an die `fields`-Definition
- `formControlName` verbindet jedes Feld mit seiner Logik
- `ngSubmit` ruft `formHandler()` beim Absenden auf
- Konsolen-Output zeigt aktuell den Kundenwert als Objekt an

---

### 💡 Zusammenfassung

| Bereich            | Ziel                                         | Werkzeug / Konzept     |
| ------------------ | -------------------------------------------- | ---------------------- |
| Formularsteuerung  | Wechsel von statischem zu reaktivem Formular | `ReactiveFormsModule`  |
| Formularerstellung | Vereinfachte Definition der Felder           | `FormBuilder.group()`  |
| Datenausgabe       | Zugriff auf Benutzerinput                    | `fields.value`         |
| Erweiterbarkeit    | Vorbereitung für Validierung & API-Post      | Reactive Forms Pattern |

---

### 🔗 Nützliche Links

- ⚙️ **Reactive Forms – Angular Docs:**
  [https://angular.io/guide/reactive-forms](https://angular.io/guide/reactive-forms)

- 🧩 **FormBuilder API:**
  [https://angular.io/api/forms/FormBuilder](https://angular.io/api/forms/FormBuilder)

- 🧭 **FormGroup & FormControlName Erklärung:**
  [https://angular.io/api/forms/FormGroup](https://angular.io/api/forms/FormGroup)

---

## ✅ Formularvalidierung mit Angular Validators

Das `CustomerFormComponent` wurde erweitert, um **Eingabevalidierungen** über das Angular-Validator-System zu ermöglichen.
Damit werden unvollständige oder fehlerhafte Eingaben bereits im Frontend erkannt,
bevor die Daten verarbeitet oder an das Backend übergeben werden.

---

### 📄 `customer-form.component.ts` (aktualisiert)

```typescript
import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: "app-customer-form",
  imports: [ReactiveFormsModule],
  templateUrl: "./customer-form.component.html",
  styleUrl: "./customer-form.component.scss",
})
export class CustomerFormComponent {
  formHandler() {
    const customer = this.fields.value;
    console.log(customer);
  }

  fields = inject(FormBuilder).group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    credit_limit: [0, [Validators.required, Validators.min(0)]],
  });
}
```

✅ **Ergebnis:**

- `Validators.required` sorgt dafür, dass kein Feld leer bleibt
- `Validators.minLength(2)` prüft, dass der Name mindestens zwei Zeichen lang ist
- `Validators.min(0)` verhindert negative Kreditlimits
- Alle Prüfungen laufen **reaktiv** beim Tippen – kein manueller Check nötig

---

### 💡 Zusammenfassung

| Feld             | Validierungen              | Beschreibung                                      |
| ---------------- | -------------------------- | ------------------------------------------------- |
| **name**         | `required`, `minLength(2)` | Muss vorhanden sein und mindestens 2 Zeichen lang |
| **credit_limit** | `required`, `min(0)`       | Pflichtfeld, Wert darf nicht negativ sein         |

---

### 🔗 Nützliche Links

- ⚙️ **Angular Validators (Built-in):**
  [https://angular.io/api/forms/Validators](https://angular.io/api/forms/Validators)

- 🧩 **Reactive Forms Validierung:**
  [https://angular.io/guide/reactive-forms#simple-form-validation](https://angular.io/guide/reactive-forms#simple-form-validation)

- 💡 **FormBuilder.group() API:**
  [https://angular.io/api/forms/FormBuilder#group](https://angular.io/api/forms/FormBuilder#group)

---

## ⚠️ Formularvalidierung im Template

Zur besseren Benutzerfreundlichkeit wurden **sichtbare Fehlermeldungen** ergänzt.
Diese erscheinen dynamisch, sobald ein Eingabefeld **ungültig** ist und **bereits bearbeitet (touched)** wurde.

Damit erhält der Benutzer direktes Feedback zu falschen oder unvollständigen Eingaben.

---

### 📄 `customer-form.component.html` (aktualisiert)

```html
<form (ngSubmit)="formHandler()" [formGroup]="fields">
  <div class="mb-3">
    <label for="name" class="form-label">Name:</label>
    <input type="text" id="name" class="form-control" formControlName="name" />

    <!-- Fehlermeldungen für das Feld "name" -->
    @if(fields.get('name')?.touched && fields.get('name')?.invalid) {
    <div class="text-danger mt-1">
      @if(fields.get('name')?.errors?.['required']) { Name ist erforderlich. }
      @if(fields.get('name')?.errors?.['minlength']) { Name muss mindestens 2
      Zeichen lang sein. }
    </div>
    }
  </div>

  <div class="mb-3">
    <label for="credit_limit" class="form-label">Kreditlimit:</label>
    <input
      type="number"
      step="0.01"
      id="credit_limit"
      class="form-control"
      formControlName="credit_limit"
    />

    <!-- Fehlermeldungen für das Feld "credit_limit" -->
    @if(fields.get('credit_limit')?.touched &&
    fields.get('credit_limit')?.invalid) {
    <div class="text-danger mt-1">
      @if(fields.get('credit_limit')?.errors?.['required']) { Kreditlimit ist
      erforderlich. } @if(fields.get('credit_limit')?.errors?.['min']) {
      Kreditlimit darf nicht negativ sein. }
    </div>
    }
  </div>

  <div class="mb-3">
    <button type="submit" class="btn btn-primary" [disabled]="fields.invalid">
      <ng-content></ng-content>
    </button>
  </div>
</form>
```

✅ **Ergebnis:**

- Fehlermeldungen werden **dynamisch** angezeigt (nur wenn Feld „berührt“ und „ungültig“)
- Button bleibt **deaktiviert**, solange das Formular ungültig ist
- Nutzer erhält sofort visuelles Feedback
- Saubere Integration in das Bootstrap-Layout

---

### 💡 Zusammenfassung

| Feld            | Validierung                | Fehlermeldung                                                            |
| --------------- | -------------------------- | ------------------------------------------------------------------------ |
| **Name**        | `required`, `minLength(2)` | „Name ist erforderlich.“ / „Name muss mindestens 2 Zeichen lang sein.“   |
| **Kreditlimit** | `required`, `min(0)`       | „Kreditlimit ist erforderlich.“ / „Kreditlimit darf nicht negativ sein.“ |

---

### 🔗 Nützliche Links

- 🧩 **Template-Driven Error Handling in Reactive Forms:**
  [https://angular.io/guide/reactive-forms#validating-form-input](https://angular.io/guide/reactive-forms#validating-form-input)

- 💅 **Bootstrap Text Utilities (Fehlermeldungen stylen):**
  [https://getbootstrap.com/docs/5.3/utilities/colors/#text](https://getbootstrap.com/docs/5.3/utilities/colors/#text)

---

## 💬 Benutzerfeedback & visuelle Formularvalidierung

Das `CustomerFormComponent` wurde erweitert, um **visuelles Feedback** für valide und invalide Eingaben anzuzeigen.
Dazu wurde das `CommonModule` importiert, um Angular-Direktiven wie `ngClass` und die neuen `@if`-Blöcke zu verwenden.
In Kombination mit Bootstrap-Klassen (`is-valid`, `is-invalid`, `alert-danger`) erhält der Benutzer sofort Rückmeldung über den Eingabestatus.

---

### 📄 `customer-form.component.ts` (aktualisiert)

```typescript
import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: "app-customer-form",
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./customer-form.component.html",
  styleUrl: "./customer-form.component.scss",
})
export class CustomerFormComponent {
  formHandler() {
    const customer = this.fields.value;
    console.log(customer);
  }

  fields = inject(FormBuilder).group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    credit_limit: [0, [Validators.required, Validators.min(0)]],
  });
}
```

✅ **Ergebnis:**

- `CommonModule` für `ngClass` und neue Angular-Control-Flows eingebunden
- Eingabefelder reagieren **live** auf Validierungsstatus
- Fehler werden über `alert-danger` angezeigt
- Optisches Feedback direkt nach Interaktion (`touched`)

---

### 📄 `customer-form.component.html` (aktualisiert)

```html
<form (ngSubmit)="formHandler()" [formGroup]="fields">
  <div class="mb-3">
    <label for="name" class="form-label">Name:</label>
    @if(fields.controls['name'].invalid && fields.touched) {
    <div class="alert alert-danger">
      <p>Mindestens 2 Buchstaben erforderlich.</p>
    </div>
    }
    <input
      type="text"
      name="name"
      id="name"
      class="form-control"
      formControlName="name"
      [ngClass]="{
        'is-invalid': fields.controls['name'].invalid && fields.touched,
        'is-valid': fields.controls['name'].valid
      }"
    />
  </div>

  <div class="mb-3">
    <label for="credit_limit" class="form-label">Kreditlimit:</label>
    @if(fields.controls['credit_limit'].invalid && fields.touched) {
    <div class="alert alert-danger">
      <p>Kreditlimit muss eine positive Zahl sein.</p>
    </div>
    }
    <input
      type="number"
      step="0.01"
      min="0"
      name="credit_limit"
      id="credit_limit"
      class="form-control"
      formControlName="credit_limit"
      [ngClass]="{
        'is-invalid': fields.controls['credit_limit'].invalid && fields.touched,
        'is-valid': fields.controls['credit_limit'].valid && fields.touched
      }"
    />
  </div>

  <div class="mb-3">
    <button type="submit" class="btn btn-primary" [disabled]="fields.invalid">
      <ng-content></ng-content>
    </button>
  </div>
</form>
```

✅ **Ergebnis:**

- Rote **Alerts** bei fehlerhaften Eingaben
- Bootstrap-Klassen (`is-valid`, `is-invalid`) zeigen Feldstatus an
- Button bleibt deaktiviert, bis alle Felder gültig sind
- Sofortiges visuelles Feedback beim Tippen

---

### 💡 Zusammenfassung

| Feature             | Beschreibung                            | Umsetzung                     |
| ------------------- | --------------------------------------- | ----------------------------- |
| **Live-Feedback**   | Dynamische optische Rückmeldung         | `ngClass` + Bootstrap-Klassen |
| **Fehlermeldungen** | Alerts für ungültige Eingaben           | `@if`-Blöcke mit Conditions   |
| **Button-Sperre**   | Kein Submit bei ungültigem Formular     | `[disabled]="fields.invalid"` |
| **Usability**       | Klare visuelle Trennung gültig/ungültig | Bootstrap-Farbcodierung       |

---

### 🔗 Nützliche Links

- 💅 **Bootstrap Form Validation Styles:**
  [https://getbootstrap.com/docs/5.3/forms/validation/](https://getbootstrap.com/docs/5.3/forms/validation/)

- 🧩 **Angular ngClass Directive:**
  [https://angular.io/api/common/NgClass](https://angular.io/api/common/NgClass)

- ⚙️ **Angular Control Flow (if/for/switch):**
  [https://angular.dev/guide/template-control-flow](https://angular.dev/guide/template-control-flow)

---

## 🧩 Formular-Event & Übergabe der Kundendaten

Das `CustomerFormComponent` wurde so erweitert, dass es die eingegebenen Daten beim Absenden
über ein **Custom Event** (`customerSubmit`) an die übergeordnete Komponente weitergibt.
Die `CustomerNewComponent` empfängt dieses Event und übernimmt die Erstellung des neuen Kunden.

---

### 📄 `customer-new.component.ts` (aktualisiert)

```typescript
import { Component } from "@angular/core";
import { CustomerFormComponent } from "../../components/customer-form/customer-form.component";
import { Customer } from "../../model/customer";

@Component({
  selector: "app-customer-new",
  imports: [CustomerFormComponent],
  templateUrl: "./customer-new.component.html",
  styleUrl: "./customer-new.component.scss",
})
export class CustomerNewComponent {
  createCustomer(customer: Partial<Customer>) {
    console.log("Creating customer", customer);
  }
}
```

✅ **Ergebnis:**

- Die Methode `createCustomer()` empfängt die Formulardaten vom Kind-Element
- Daten werden aktuell im Log ausgegeben (Platzhalter für spätere POST-Anbindung)
- Typisierung über `Partial<Customer>` ermöglicht optionale Felder beim Erstellen

---

### 📄 `customer-new.component.html` (angepasst)

```html
<h2>Neuer Kunde</h2>
<app-customer-form (customerSubmit)="createCustomer($event)">
  Jetzt anlegen
</app-customer-form>
```

✅ **Ergebnis:**

- `customerSubmit` wird bei erfolgreicher Formularabgabe getriggert
- Übergibt die erfassten Daten an `createCustomer()`
- Flexible Wiederverwendung der Form-Komponente für verschiedene Szenarien (New/Edit)

---

### 📄 (Ergänzend) `customer-form.component.ts` (EventEmitter hinzufügen)

Damit das Event funktioniert, muss die Formular-Komponente ein eigenes Event bereitstellen:

```typescript
import { Component, EventEmitter, Output, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: "app-customer-form",
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./customer-form.component.html",
  styleUrl: "./customer-form.component.scss",
})
export class CustomerFormComponent {
  @Output() customerSubmit = new EventEmitter<Partial<Customer>>();

  fields = inject(FormBuilder).group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    credit_limit: [0, [Validators.required, Validators.min(0)]],
  });

  formHandler() {
    if (this.fields.valid) {
      this.customerSubmit.emit(this.fields.value);
    }
  }
}
```

✅ **Ergebnis:**

- Neues Event `customerSubmit` sendet das Formularobjekt an den Parent
- Nur bei gültigen Eingaben (`fields.valid`) wird das Event ausgelöst
- Parent-Komponenten können beliebige Aktionen ausführen (z. B. HTTP POST)

---

### 💡 Zusammenfassung

| Bereich                  | Ziel                                                       | Umsetzung                  |
| ------------------------ | ---------------------------------------------------------- | -------------------------- |
| **EventEmitter**         | Übergabe der Formulardaten an Parent-Komponenten           | `@Output() customerSubmit` |
| **Parent-Komponente**    | Reagiert auf `customerSubmit` und erstellt neuen Datensatz | Methode `createCustomer()` |
| **Formularprüfung**      | Nur gültige Daten werden gesendet                          | `if (fields.valid)`        |
| **Wiederverwendbarkeit** | Gleiche Form-Komponente nutzbar für Create & Edit          | Input/Output-Architektur   |

---

### 🔗 Nützliche Links

- 🧩 **Angular EventEmitter Doku:**
  [https://angular.io/api/core/EventEmitter](https://angular.io/api/core/EventEmitter)

- ⚙️ **Component Interaction (Parent ↔ Child):**
  [https://angular.io/guide/inputs-outputs](https://angular.io/guide/inputs-outputs)

- 💅 **Bootstrap Alerts & Buttons:**
  [https://getbootstrap.com/docs/5.3/components/alerts/](https://getbootstrap.com/docs/5.3/components/alerts/)

---

Sehr schön 👏 — das war ein richtig professioneller Schritt in Richtung **testgetriebene Entwicklung** mit realistischen Mockdaten.
Ihr habt damit eure Tests nicht nur robuster, sondern auch **aussagekräftiger und reproduzierbar** gemacht.
Hier ist der komplette README-Abschnitt im gewohnten Format 👇

---

## 🧪 Unit-Tests mit Mockdaten (CustomerService & CustomerListComponent)

Um die Testabdeckung weiter zu verbessern, wurden **Mockdaten** in separaten Testdateien ausgelagert
und die bestehenden Tests auf deren Basis erweitert.
Dadurch können API-Aufrufe und Service-Logik **realitätsnah simuliert** werden,
ohne eine echte Verbindung zum Backend herzustellen.

---

### 📁 Testdaten-Struktur

```bash
📁 frontend/
└── 📁 testdata/
    └── 📁 mocks/
        └── 📁 api/
            └── 📁 customers/
                └── 📄 index.ts
```

---

### 📄 `testdata/mocks/api/customers/index.ts`

```typescript
import { Customer } from "../../../../src/app/features/customer/model/customer";

export const customersMock: Customer[] = [
  {
    id: 1,
    name: "Testname 1",
    credit_limit: 999.991,
  },
];
```

✅ **Ergebnis:**

- Einheitliche Quelle für Testdaten
- Vermeidung redundanter Inline-Mocks in mehreren Tests
- Typensicherheit dank direkter `Customer`-Importe

---

## ⚙️ Service-Test: `customer.service.spec.ts`

Die Tests des `CustomerService` wurden überarbeitet,
um echte API-Interaktionen mit Hilfe von `HttpTestingController` zu simulieren.
Zusätzlich werden nun **Mockdaten** (`customersMock`) verwendet,
um realistische Antworten zu testen.

---

### 📄 `customer.service.spec.ts` (aktualisiert)

```typescript
import { TestBed } from "@angular/core/testing";
import { CustomerService } from "./customer.service";
import { provideHttpClient } from "@angular/common/http";
import {
  HttpTestingController,
  provideHttpClientTesting,
} from "@angular/common/http/testing";
import { firstValueFrom } from "rxjs";
import { customersMock } from "../../../../../testdata/mocks/api/customers";

describe("CustomerService", () => {
  let service: CustomerService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(CustomerService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("getAll", () => {
    it("should exist", () => {
      expect(service.getAll).toBeTruthy();
    });

    it("should call GET and return customers", async () => {
      const customers$ = service.getAll();
      const customersPromise = firstValueFrom(customers$);

      const url = "http://localhost:3001/customers/";
      const req = httpTesting.expectOne(url);
      expect(req.request.method).toBe("GET");

      // Mock-Daten zurückgeben
      req.flush(customersMock);

      httpTesting.verify();

      expect(await customersPromise).toEqual(customersMock);
    });
  });

  describe("deleteById", () => {
    it("should call DELETE", async () => {
      const deleteId = customersMock[0].id;
      service.deleteById(deleteId).subscribe();

      const url = `http://localhost:3001/customers/${deleteId}`;
      const req = httpTesting.expectOne(url);
      expect(req.request.method).toBe("DELETE");

      req.flush({});
      httpTesting.verify();
    });
  });
});
```

✅ **Ergebnis:**

- Realistisches Testverhalten dank `HttpTestingController`
- Mockdaten simulieren Backend-Antworten
- Test überprüft korrekte HTTP-Methoden (`GET`, `DELETE`) und Endpunkte

---

## 🧩 Komponenten-Test: `customer-list.component.spec.ts`

Die `CustomerListComponent` wurde mit erweiterten Tests versehen,
um auch Fehlerszenarien (`throwError`) und Mock-Serviceaufrufe realitätsnah zu prüfen.
Der `CustomerService` wird dabei vollständig gemockt.

---

### 📄 `customer-list.component.spec.ts` (aktualisiert)

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CustomerListComponent } from "./customer-list.component";
import { CustomerService } from "../../../services/customer.service";
import { of, throwError } from "rxjs";
import { Customer } from "../../../model/customer";
import { provideRouter } from "@angular/router";

const createCustomerServiceMock = function () {
  const service = {
    getAll: jest.fn(),
    deleteById: jest.fn(),
  };

  service.deleteById.mockReturnValue(of(void 0));
  service.getAll.mockReturnValue(of([]));

  return service;
};

describe("CustomerListComponent", () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
  let customerServiceMock: any;

  beforeEach(async () => {
    customerServiceMock = createCustomerServiceMock();

    await TestBed.configureTestingModule({
      imports: [CustomerListComponent],
      providers: [
        provideRouter([]),
        {
          provide: CustomerService,
          useValue: customerServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("loadCustomers", () => {
    it("should exist and work", () => {
      expect(component.loadCustomers).toBeTruthy();
      expect(customerServiceMock.getAll).toHaveBeenCalled();
    });

    it("should handle Error", () => {
      const errorMessage = "Fehler";
      customerServiceMock.getAll.mockReturnValueOnce(
        throwError(() => new Error(errorMessage))
      );

      expect(component.errorMessage).toBeNull();
      component.loadCustomers();
      expect(customerServiceMock.getAll).toHaveBeenCalled();
      expect(component.errorMessage).toEqual(errorMessage);
    });
  });

  describe("deleteCustomer", () => {
    it("should exist", () => {
      expect(component.deleteCustomer).toBeTruthy();
      component.deleteCustomer({ id: 1 } as Customer);
      expect(customerServiceMock.deleteById).toHaveBeenCalled();
    });

    it("should handle Error", () => {
      const errorMessage = "Fehler";
      customerServiceMock.deleteById.mockReturnValueOnce(
        throwError(() => new Error(errorMessage))
      );

      expect(component.errorMessage).toBeNull();
      component.deleteCustomer({ id: 1 } as Customer);
      expect(customerServiceMock.deleteById).toHaveBeenCalled();
      expect(component.errorMessage).toEqual(errorMessage);
    });
  });
});
```

✅ **Ergebnis:**

- Service wird vollständig gemockt (`jest.fn()`)
- Fehlerbehandlung (`throwError`) realistisch getestet
- Erwartetes Verhalten bei `getAll()` und `deleteById()` wird überprüft
- Router wird über `provideRouter([])` bereitgestellt

---

### 💡 Zusammenfassung

| Bereich                   | Ziel                                   | Technik                        |
| ------------------------- | -------------------------------------- | ------------------------------ |
| **Mockdaten**             | Einheitliche Testbasis für Services    | `testdata/mocks/api/customers` |
| **CustomerService**       | HTTP-Requests & Responses testen       | `HttpTestingController`        |
| **CustomerListComponent** | Serviceaufrufe & Error Handling prüfen | `jest.fn()`, `throwError()`    |
| **Fehlerbehandlung**      | Verlässliche Tests für Edge Cases      | Mock-Fehler via RxJS           |
| **Trennung von Logik**    | API, Komponenten und Tests isoliert    | Dependency Injection + Mocks   |

---

### 🔗 Nützliche Links

- 🧪 **Angular HttpTestingController:**
  [https://angular.io/guide/http#testing-http-requests](https://angular.io/guide/http#testing-http-requests)

- ⚙️ **RxJS throwError:**
  [https://rxjs.dev/api/index/function/throwError](https://rxjs.dev/api/index/function/throwError)

- 🧩 **Jest Function Mocks:**
  [https://jestjs.io/docs/mock-functions](https://jestjs.io/docs/mock-functions)

---

## 📤 POST-Request & Test für `CustomerService`

Der `CustomerService` wurde um eine neue Methode **`postOne()`** erweitert,
um neue Kunden per HTTP-POST an das Backend zu senden.
Parallel dazu wurden entsprechende Tests in `customer.service.spec.ts` ergänzt,
die das Verhalten und die Integration des Endpunkts absichern.

---

### 📄 `customer.service.ts` (aktualisiert)

```typescript
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "../model/customer";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";

const url = environment.apiUrl + "/customers";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  #http = inject(HttpClient);

  getAll(): Observable<Customer[]> {
    return this.#http.get<Customer[]>(url);
  }

  deleteById(id: number): Observable<void> {
    return this.#http.delete<void>(url + "/" + id);
  }

  postOne(customer: Partial<Customer>): Observable<Customer> {
    return this.#http.post<Customer>(url, customer);
  }
}
```

✅ **Ergebnis:**

- Neue Methode `postOne()` sendet einen neuen Kunden an das Backend
- Rückgabewert ist ein `Observable<Customer>`
- Einheitliche URL-Verwendung über `environment.apiUrl`
- Typisierung durch `Partial<Customer>` für unvollständige Formulardaten

---

## 🧪 Tests für `CustomerService` (aktualisiert)

Die Testdatei wurde um eine neue Test-Suite für **POST-Anfragen** erweitert.
Dabei wird geprüft, ob:

1. Die Methode existiert
2. Ein korrekter `POST`-Request ausgeführt wird
3. Das erwartete Kundenobjekt als Antwort zurückgegeben wird

---

### 📄 `customer.service.spec.ts` (aktualisiert)

```typescript
import { TestBed } from "@angular/core/testing";
import { CustomerService } from "./customer.service";
import { provideHttpClient } from "@angular/common/http";
import {
  HttpTestingController,
  provideHttpClientTesting,
} from "@angular/common/http/testing";
import { firstValueFrom } from "rxjs";
import { customersMock } from "../../../../../testdata/mocks/api/customers";

describe("CustomerService", () => {
  let service: CustomerService;
  let httpTesting: HttpTestingController;
  const url = "http://localhost:3001/customers/";

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(CustomerService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("getAll", () => {
    it("should call GET and return customers", async () => {
      const customers$ = service.getAll();
      const customersPromise = firstValueFrom(customers$);

      const req = httpTesting.expectOne(url);
      expect(req.request.method).toBe("GET");
      req.flush(customersMock);

      expect(await customersPromise).toEqual(customersMock);
      httpTesting.verify();
    });
  });

  describe("deleteById", () => {
    it("should call DELETE", async () => {
      const deleteId = customersMock[0].id;
      service.deleteById(deleteId).subscribe();

      const req = httpTesting.expectOne(`${url}${deleteId}`);
      expect(req.request.method).toBe("DELETE");

      req.flush({});
      httpTesting.verify();
    });
  });

  describe("postOne", () => {
    it("should exist", () => {
      expect(service.postOne).toBeTruthy();
    });

    it("should POST one customer", async () => {
      const customerToPost = customersMock[0];
      const customerResponse = customerToPost;

      const customer$ = service.postOne(customerToPost);
      const customerPromise = firstValueFrom(customer$);

      const req = httpTesting.expectOne(url);
      expect(req.request.method).toBe("POST");

      req.flush(customerResponse);
      expect(await customerPromise).toEqual(customerResponse);

      httpTesting.verify();
    });
  });
});
```

✅ **Ergebnis:**

- `postOne()` wird korrekt erkannt und ausgeführt
- `HttpTestingController` prüft, dass ein `POST`-Request gesendet wird
- Der Rückgabewert entspricht exakt den Mockdaten
- Alle Requests werden nach jedem Test sauber mit `verify()` abgeschlossen

---

### 💡 Zusammenfassung

| Bereich           | Ziel                                    | Technik                 |
| ----------------- | --------------------------------------- | ----------------------- |
| **Neue Methode**  | Kunde anlegen via POST                  | `postOne(customer)`     |
| **Testabdeckung** | HTTP-POST prüfen                        | `HttpTestingController` |
| **Mockdaten**     | Realistische Testantwort                | `customersMock`         |
| **Typisierung**   | Teilobjekte möglich                     | `Partial<Customer>`     |
| **Codequalität**  | Einheitliche API-URL & Testverifikation | `httpTesting.verify()`  |

---

### 🔗 Nützliche Links

- 🧪 **Angular HttpClient Testing:**
  [https://angular.io/guide/http#testing-http-requests](https://angular.io/guide/http#testing-http-requests)

- ⚙️ **RxJS firstValueFrom():**
  [https://rxjs.dev/api/index/function/firstValueFrom](https://rxjs.dev/api/index/function/firstValueFrom)

- 🧩 **Jest Expect Matchers:**
  [https://jestjs.io/docs/expect](https://jestjs.io/docs/expect)

---

## 🧪 Unit-Test für `CustomerFormComponent`

Das `CustomerFormComponent` wurde durch gezielte **Formular- und Event-Tests** abgesichert.
Diese Tests prüfen die Validierungen (`Validators`), die Formularstruktur (`FormGroup`)
sowie die **korrekte Auslösung des Events** `customerSubmit`.

---

### 📄 `customer-form.component.spec.ts` (neu / erweitert)

```typescript
describe("formHandler()", () => {
  const mockCustomer = customersMock[0];

  it("should be invalid when empty", () => {
    expect(component.fields.valid).toBeFalsy();
  });

  it("should be valid when filled with correct values", () => {
    component.fields.setValue({
      name: mockCustomer.name,
      credit_limit: mockCustomer.credit_limit,
    });
    expect(component.fields.valid).toBeTruthy();
  });

  it("should exist and trigger customerSubmit", () => {
    const emitSpy = jest.spyOn(component.customerSubmit, "emit");
    component.formHandler();

    expect(emitSpy).toHaveBeenCalled();
  });

  it("should mark credit_limit invalid when negative", () => {
    const invalidCustomer = { ...mockCustomer, credit_limit: -5 };

    component.fields.setValue({
      name: invalidCustomer.name,
      credit_limit: invalidCustomer.credit_limit,
    });
    expect(component.fields.valid).toBeFalsy();

    const errors = (component.fields.controls as any).credit_limit.errors;
    expect(errors).toBeTruthy();
    expect(errors.min).toBeTruthy();
  });
});
```

✅ **Ergebnis:**

- **Formularvalidität:** Wird geprüft, wenn Felder leer oder korrekt befüllt sind
- **Event-Emitter:** Testet, ob `customerSubmit.emit()` korrekt ausgelöst wird
- **Validierungen:** Überprüfen von `Validators.min()` bei negativen Kreditlimits
- **Strukturtest:** `FormGroup`-Logik wird realistisch simuliert

---

### 💡 Zusammenfassung

| Testziel                 | Beschreibung                       | Erwartetes Ergebnis                      |
| ------------------------ | ---------------------------------- | ---------------------------------------- |
| **Leeres Formular**      | Keine Eingaben gesetzt             | `fields.valid` → `false`                 |
| **Gültige Eingaben**     | Felder korrekt ausgefüllt          | `fields.valid` → `true`                  |
| **EventEmitter**         | `formHandler()` wird aufgerufen    | `customerSubmit.emit()` wurde getriggert |
| **Negativer Kreditwert** | Ungültiger Wert für `credit_limit` | `errors.min` vorhanden                   |

---

### 🔗 Nützliche Links

- 🧪 **Angular Testing Reactive Forms:**
  [https://angular.io/guide/testing-components-scenarios#testing-reactive-forms](https://angular.io/guide/testing-components-scenarios#testing-reactive-forms)

- ⚙️ **Angular FormGroup API:**
  [https://angular.io/api/forms/FormGroup](https://angular.io/api/forms/FormGroup)

- 🧩 **Jest Mock Functions & Spies:**
  [https://jestjs.io/docs/mock-functions](https://jestjs.io/docs/mock-functions)

---

## ➕ Kunden anlegen mit Ladezustand & Fehlerbehandlung

Die `CustomerNewComponent` wurde erweitert, um das Formular mit dem `CustomerService` zu verknüpfen.
Dabei werden nun asynchrone **HTTP-POST-Anfragen** ausgeführt, inklusive visuellem **Loading Indicator**,
**Error Handling** und **automatischer Weiterleitung** nach erfolgreicher Erstellung.

---

### 📄 `customer-new.component.ts` (aktualisiert)

```typescript
import { Component, inject } from "@angular/core";
import { CustomerFormComponent } from "../../components/customer-form/customer-form.component";
import { Customer } from "../../model/customer";
import { CustomerService } from "../../services/customer.service";
import { LoadingIndicatorComponent } from "../../../../components/loading-indicator/loading-indicator.component";
import { ErrorBoxComponent } from "../../../../components/error-box/error-box.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-customer-new",
  imports: [
    CustomerFormComponent,
    LoadingIndicatorComponent,
    ErrorBoxComponent,
  ],
  templateUrl: "./customer-new.component.html",
  styleUrl: "./customer-new.component.scss",
})
export class CustomerNewComponent {
  public loading = false;
  public errorMessage: string | null = null;

  #router = inject(Router);

  constructor(private customerService: CustomerService) {}

  createCustomer(customer: Partial<Customer>) {
    this.loading = true;
    this.errorMessage = null;

    this.customerService.postOne(customer).subscribe({
      next: (customer) => {
        console.log("Created customer", customer);
        this.loading = false;
        this.#router.navigate(["/customers"]);
      },
      error: (e: Error) => {
        this.errorMessage = e.message;
        this.loading = false;
      },
    });
  }
}
```

✅ **Ergebnis:**

- Neue Kunden werden über `CustomerService.postOne()` erstellt
- Während des POST-Vorgangs wird ein Ladeindikator angezeigt
- Fehler werden über `ErrorBoxComponent` visuell dargestellt
- Nach erfolgreicher Erstellung erfolgt automatische Navigation zu `/customers`

---

### 📄 `customer-new.component.html` (aktualisiert)

```html
<h2>Neuer Kunde</h2>

@if(errorMessage !== null) {
<app-error-box>{{ errorMessage }}</app-error-box>
} @if(loading) {
<app-loading-indicator></app-loading-indicator>
} @else {
<app-customer-form (customerSubmit)="createCustomer($event)">
  Jetzt anlegen
</app-customer-form>
}
```

✅ **Ergebnis:**

- Zeigt Fehler mit roter `ErrorBox` an
- Zeigt Spinner, wenn `loading = true`
- Bindet das Formular-Event `customerSubmit` an `createCustomer()`
- Saubere Trennung von Anzeige, Logik und Service-Kommunikation

---

### 💡 Zusammenfassung

| Bereich                      | Ziel                                   | Umsetzung                                        |
| ---------------------------- | -------------------------------------- | ------------------------------------------------ |
| **Asynchrone Kommunikation** | Neue Kunden per API anlegen            | `CustomerService.postOne()`                      |
| **Visuelles Feedback**       | Anzeige von Lade- & Fehlermeldungen    | `LoadingIndicatorComponent`, `ErrorBoxComponent` |
| **Navigation**               | Automatische Weiterleitung nach Erfolg | `Router.navigate(['/customers'])`                |
| **Error Handling**           | Fehler abfangen & anzeigen             | `errorMessage` Property + Template-Check         |
| **State Management**         | Saubere UI-Zustände                    | `loading` + `errorMessage` Flags                 |

---

### 🔗 Nützliche Links

- ⚙️ **Angular HttpClient POST:**
  [https://angular.io/guide/http#making-a-post-request](https://angular.io/guide/http#making-a-post-request)

- 🧭 **Router Navigation API:**
  [https://angular.io/api/router/Router#navigate](https://angular.io/api/router/Router#navigate)

- 🧩 **Angular Async Patterns (Subscribe):**
  [https://angular.io/guide/observables-in-angular#subscribing-to-observables](https://angular.io/guide/observables-in-angular#subscribing-to-observables)

---

## ✏️ Kundenbearbeitung mit `CustomerEditComponent`

Die `CustomerEditComponent` ermöglicht das **Bearbeiten bestehender Kundendaten**.
Beim Aufruf der Route `/customers/edit/:customerId` werden die Kundendaten geladen,
im Formular (`CustomerFormComponent`) angezeigt und können anschließend aktualisiert werden.

---

### 📄 `customer-edit.component.ts` (neu / erweitert)

```typescript
import { Component, inject, OnInit, ViewChild } from "@angular/core";
import { CustomerFormComponent } from "../../components/customer-form/customer-form.component";
import { ActivatedRoute, Router } from "@angular/router";
import { CustomerService } from "../../services/customer.service";
import { LoadingIndicatorComponent } from "../../../../components/loading-indicator/loading-indicator.component";
import { ErrorBoxComponent } from "../../../../components/error-box/error-box.component";
import { Customer } from "../../model/customer";

@Component({
  selector: "app-customer-edit",
  imports: [
    CustomerFormComponent,
    LoadingIndicatorComponent,
    ErrorBoxComponent,
  ],
  templateUrl: "./customer-edit.component.html",
  styleUrl: "./customer-edit.component.scss",
})
export class CustomerEditComponent implements OnInit {
  public loading = false;
  public errorMessage: string | null = null;

  #router = inject(Router);
  id = +(inject(ActivatedRoute).snapshot.paramMap.get("customerId") as string);
  @ViewChild(CustomerFormComponent) form?: CustomerFormComponent;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadOneCustomer();
  }

  loadOneCustomer() {
    this.loading = true;
    this.errorMessage = null;
    this.customerService.getOne(this.id).subscribe({
      next: (customer) => {
        this.loading = false;
        // Formulardaten im Child setzen
        if (this.form) {
          this.form.initial = customer as any;
        }
      },
      error: (e: Error) => {
        this.errorMessage = e.message;
        this.loading = false;
      },
    });
  }

  editCustomer(customer: Partial<Customer>) {
    this.loading = true;
    this.errorMessage = null;

    // Sicherstellen, dass die ID vorhanden ist
    if (!customer.id) {
      (customer as any).id = this.id;
    }

    this.customerService.updateCustomer(customer).subscribe({
      next: (customer) => {
        console.log("Updated customer", customer);
        this.loading = false;
        this.#router.navigate(["/customers"]);
      },
      error: (e: Error) => {
        this.errorMessage = e.message;
        this.loading = false;
      },
    });
  }
}
```

✅ **Ergebnis:**

- Liest die `customerId` direkt aus der URL (`ActivatedRoute`)
- Lädt Kundendaten via `CustomerService.getOne()`
- Übergibt Daten an das Formular-Child über `@ViewChild`
- Führt Updates mit `updateCustomer()` durch
- Zeigt Ladezustände und Fehler über die bekannten UI-Komponenten an

---

### 📄 `customer-edit.component.html` (aktualisiert)

```html
<h2>Kunde mit der ID {{ id }} bearbeiten</h2>

@if(errorMessage !== null) {
<app-error-box>{{ errorMessage }}</app-error-box>
} @if(loading) {
<app-loading-indicator></app-loading-indicator>
} @else {
<app-customer-form (customerSubmit)="editCustomer($event)">
  Jetzt bearbeiten
</app-customer-form>
}
```

✅ **Ergebnis:**

- Dynamische Anzeige der ID im Titel
- Reaktive Anzeige von Lade- und Fehlermeldungen
- Wiederverwendung des generischen `CustomerFormComponent`
- Übergabe der `editCustomer()`-Funktion über Event-Binding

---

## ⚙️ Service-Erweiterung: `CustomerService`

Zur Unterstützung der Edit-Funktion wurden zwei neue Methoden ergänzt:
`getOne(id)` zum Laden eines Kunden und `updateCustomer(customer)` zum Aktualisieren der Daten.

---

### 📄 `customer.service.ts` (aktualisiert)

```typescript
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "../model/customer";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";

const url = environment.apiUrl + "customers/";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  #http = inject(HttpClient);

  getAll(): Observable<Customer[]> {
    return this.#http.get<Customer[]>(url);
  }

  getOne(id: number): Observable<Customer> {
    return this.#http.get<Customer>(url + id);
  }

  postOne(customer: Partial<Customer>): Observable<Customer> {
    return this.#http.post<Customer>(url, customer);
  }

  updateCustomer(customer: Partial<Customer>): Observable<Customer> {
    return this.#http.put<Customer>(url + customer.id, customer);
  }

  deleteById(id: number) {
    return this.#http.delete(url + id);
  }
}
```

✅ **Ergebnis:**

- `getOne(id)` holt einzelne Kundendaten aus der API
- `updateCustomer(customer)` sendet aktualisierte Daten mit `PUT`
- Einheitliches URL-Muster über alle CRUD-Operationen
- Vollständige CRUD-Unterstützung im `CustomerService`

---

### 💡 Zusammenfassung

| Bereich                 | Ziel                                  | Umsetzung                                        |
| ----------------------- | ------------------------------------- | ------------------------------------------------ |
| **Routing**             | Kunden-ID aus URL lesen               | `ActivatedRoute.snapshot.paramMap.get()`         |
| **Formularbindung**     | Formular in Child-Komponente befüllen | `@ViewChild(CustomerFormComponent)`              |
| **Service-Erweiterung** | API-Endpunkte für GET/PUT             | `getOne()` & `updateCustomer()`                  |
| **Error & Loading**     | Einheitliche UI-Komponenten           | `ErrorBoxComponent`, `LoadingIndicatorComponent` |
| **Navigation**          | Automatische Rückkehr zur Liste       | `Router.navigate(['/customers'])`                |

---

### 🔗 Nützliche Links

- 🧩 **ActivatedRoute Dokumentation:**
  [https://angular.io/api/router/ActivatedRoute](https://angular.io/api/router/ActivatedRoute)

- ⚙️ **Angular PUT-Request:**
  [https://angular.io/guide/http#making-a-put-request](https://angular.io/guide/http#making-a-put-request)

- 🧭 **ViewChild-Dekorator:**
  [https://angular.io/api/core/ViewChild](https://angular.io/api/core/ViewChild)

---

## 🧹 Codequalität mit ESLint

Zur Verbesserung der **Codequalität**, **Konsistenz** und **Fehlerprävention** wurde das Projekt um **ESLint** erweitert.
ESLint überprüft den Quellcode auf potenzielle Probleme,
setzt saubere Codekonventionen durch und ersetzt das frühere `tslint`.

---

### ⚙️ Installation über Angular CLI

Im Terminal wurde der folgende Befehl ausgeführt:

```bash
ng lint
```

Da noch kein Linter konfiguriert war, bot Angular automatisch die Installation von **angular-eslint** an:

```
Cannot find "lint" target for the specified project.
You can add a package that implements these capabilities.
For example:
  ESLint: ng add angular-eslint
```

Nach der Bestätigung (`Yes`) wurde die Einrichtung automatisch vorgenommen:

```
Would you like to add ESLint now? Yes
All angular-eslint dependencies have been successfully installed 🎉
```

✅ **Ergebnis:**

- `eslint.config.js` wurde automatisch erstellt
- `package.json` & `angular.json` wurden aktualisiert
- Alle benötigten Abhängigkeiten installiert
- ESLint ist nun als Linter für das Projekt aktiv

---

### 📄 Generierte Dateien & Änderungen

```bash
CREATE eslint.config.js
UPDATE package.json
UPDATE angular.json
```

Beispielinhalt der ESLint-Konfiguration:

```js
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import angular from "angular-eslint";

export default [
  js.configs.recommended,
  ...angular.configs.recommended,
  {
    rules: {
      "no-console": "warn",
      quotes: ["error", "single"],
      semi: ["error", "always"],
    },
  },
];
```

---

### ▶️ Linter ausführen

Nach der Einrichtung kann der Code mit folgendem Befehl überprüft werden:

```bash
npm run lint
```

oder direkt über die Angular CLI:

```bash
ng lint
```

Beispielausgabe:

```
✔ All files pass linting.
```

oder bei Problemen:

```
src/app/features/customer/customer.service.ts
  12:1  warning  Unexpected console statement  no-console
```

---

### 💡 Zusammenfassung

| Bereich                  | Ziel                                    | Umsetzung             |
| ------------------------ | --------------------------------------- | --------------------- |
| **Codequalität**         | Einheitliche Codekonventionen           | ESLint                |
| **Automatische Analyse** | Fehler und Warnungen im Code erkennen   | `ng lint`             |
| **Projektintegration**   | Automatisch via `ng add angular-eslint` | CLI                   |
| **Konfigurierbarkeit**   | Anpassbar über `eslint.config.js`       | z. B. eigene Regeln   |
| **Empfohlene Regeln**    | Angular ESLint Recommended Set          | Standardkonfiguration |

---

### 🔗 Nützliche Links

- 🧩 **Angular ESLint GitHub:**
  [https://github.com/angular-eslint/angular-eslint](https://github.com/angular-eslint/angular-eslint)

- ⚙️ **ESLint Offizielle Website:**
  [https://eslint.org/](https://eslint.org/)

- 💡 **Angular Lint Command Doku:**
  [https://angular.io/cli/lint](https://angular.io/cli/lint)

---

# 📅 Tag 5 - 10.10.25

## 🚀 Build & lokaler Live-Server

Zum Start des Tages wurde das Frontend-Projekt erstmals **produktiv gebaut**
und anschließend über einen einfachen **lokalen HTTP-Server** bereitgestellt.
Dadurch kann das fertige Angular-Bundle direkt im Browser getestet werden –
ohne dass der Angular-Entwicklungsserver (`ng serve`) laufen muss.

---

### ⚙️ Build-Erstellung

Im Terminal wurde der Build-Prozess mit folgendem Befehl gestartet:

```bash
npm run build
```

oder alternativ direkt über Angular CLI:

```bash
ng build
```

✅ **Ergebnis:**

- Das optimierte Produktions-Bundle wurde unter

  ```
  /dist/frontend/
  ```

  erstellt

- Assets, CSS und JavaScript wurden minifiziert
- Die Build-Ausgabe ist bereit für die Auslieferung via Webserver

---

### 🌐 Installation des lokalen Servers

Um den Build einfach lokal auszuführen, wurde der `http-server` als Dev-Abhängigkeit installiert:

```bash
npm i -D http-server
```

✅ **Ergebnis:**

- Paket wird im `node_modules`-Ordner installiert
- Kein globales Setup erforderlich
- Ermöglicht schnelles Testen der statischen Angular-Dateien

---

### 📄 `package.json` (erweitert)

In der Datei `package.json` wurde unter **scripts** ein neuer Eintrag ergänzt,
um den Server bequem per Befehl zu starten:

```json
{
  "scripts": {
    "build": "ng build",
    "live": "http-server ./dist/frontend -p 8080"
  }
}
```

✅ **Ergebnis:**

- Der Build kann über `npm run build` erstellt werden
- Der Live-Server startet mit

  ```bash
  npm run live
  ```

- Standardport: **8080**

---

### ▶️ Projekt starten

Nach erfolgreichem Build:

```bash
npm run live
```

Ausgabe im Terminal:

```
Starting up http-server, serving ./dist/frontend
Available on:
  http://127.0.0.1:8080
  http://192.168.x.x:8080
Hit CTRL-C to stop the server
```

💡 Das Frontend ist jetzt über `http://localhost:8080` erreichbar.

---

### 💡 Zusammenfassung

| Bereich             | Ziel                                | Umsetzung       |
| ------------------- | ----------------------------------- | --------------- |
| **Build**           | Produktionsversion erzeugen         | `npm run build` |
| **Server**          | Lokale Bereitstellung               | `http-server`   |
| **Automatisierung** | Einfacher Startbefehl               | `npm run live`  |
| **Ausgabepfad**     | Bereitstellung aus `/dist/frontend` | Build-Output    |

---

### 🔗 Nützliche Links

- ⚙️ **Angular Build-Kommando:**
  [https://angular.io/cli/build](https://angular.io/cli/build)

- 🌐 **http-server (NPM-Paket):**
  [https://www.npmjs.com/package/http-server](https://www.npmjs.com/package/http-server)

---

## 🧠 State Management mit NgRx

Um komplexe Zustände (z. B. Kundendaten, Ladezustände, Fehlermeldungen) zentral zu verwalten,
wurde das **NgRx-Framework** in das Projekt integriert.
NgRx basiert auf dem **Redux-Pattern** und sorgt für vorhersagbare, nachvollziehbare Zustandsänderungen im gesamten Angular-Projekt.

---

### ⚙️ Installation von NgRx Store

Der Store stellt den **zentralen globalen Zustand** der Anwendung bereit.
Er ersetzt die rein komponentenbasierte Datenhaltung durch ein strukturiertes, reaktives Modell.

Im Terminal wurde ausgeführt:

```bash
ng add @ngrx/store@19
```

🧩 **Ergebnis:**

- Installation der Pakete und Abhängigkeiten
- Automatische Aktualisierung der Projektkonfiguration
- Anpassung von:

  - `src/app/app.config.ts`
  - `package.json`

Auszug aus der Terminalausgabe:

```
✔ Packages installed successfully.
UPDATE src/app/app.config.ts (476 bytes)
UPDATE package.json (1532 bytes)
```

✅ Der Store ist jetzt als Modul integriert und bereit für die Konfiguration.

---

### ⚙️ Installation von NgRx Effects

Um **asynchrone Logik** (wie HTTP-Requests, API-Aufrufe oder Router-Navigationen)
vom Store zu entkoppeln, wurden zusätzlich die **NgRx Effects** installiert.

```bash
ng add @ngrx/effects@19
```

🧩 **Ergebnis:**

- Installation der `@ngrx/effects`-Bibliothek
- Automatische Ergänzung der Angular-Konfiguration
- Bereit für die Implementierung von Side-Effects (z. B. `loadCustomers$`, `deleteCustomer$`, `createCustomer$`)

✅ **Status:**
Die Grundstruktur für Store und Effects ist erfolgreich eingerichtet und im Projekt registriert.

---

### 💡 Zusammenfassung

| Bereich                  | Ziel                                         | Paket              |
| ------------------------ | -------------------------------------------- | ------------------ |
| **State-Verwaltung**     | Zentrale Verwaltung aller Anwendungsdaten    | `@ngrx/store`      |
| **Side Effects**         | Asynchrone Prozesse & API-Aufrufe trennen    | `@ngrx/effects`    |
| **Projektkonfiguration** | Automatische Einbindung via CLI              | `ng add @ngrx/...` |
| **Version**              | Aktuell NgRx v19 (kompatibel mit Angular 19) | ✅                 |

---

### 🔗 Nützliche Links

- 🧩 **NgRx Store Dokumentation:**
  [https://ngrx.io/guide/store](https://ngrx.io/guide/store)

- ⚙️ **NgRx Effects Dokumentation:**
  [https://ngrx.io/guide/effects](https://ngrx.io/guide/effects)

- 💡 **Redux Pattern (NgRx Konzept):**
  [https://ngrx.io/guide/store/concepts](https://ngrx.io/guide/store/concepts)

---

## 🧩 Komplettes NgRx-Setup mit Store, Effects & DevTools

Das Projekt wurde um ein vollständiges **NgRx State-Management-System** erweitert.
Neben dem zentralen Store und den Effects wurden auch die **Schematics** für automatisierte Codegenerierung
und die **Store DevTools** für visuelle State-Analyse integriert.

---

### ⚙️ Installation der NgRx-Pakete

#### 1️⃣ Store (Zentraler State)

```bash
ng add @ngrx/store@19
```

Verwaltet den globalen Applikationszustand (State) über ein reaktives Datenmodell.

#### 2️⃣ Effects (Asynchrone Logik)

```bash
ng add @ngrx/effects@19
```

Ermöglicht die Trennung von **Daten-Logik** (API-Aufrufe, HTTP-Requests)
vom eigentlichen State (z. B. Laden, Speichern, Löschen von Daten).

#### 3️⃣ Schematics (Codegeneratoren)

```bash
ng add @ngrx/schematics@19
```

Ermöglicht das Erstellen von NgRx-Strukturen (Actions, Reducer, Effects, Selectors)
über einfache CLI-Befehle wie:

```bash
ng generate feature customers/store --creators
```

✅ **Ergebnis:**

- Automatisierte Strukturierung nach NgRx-Standard
- Spart Boilerplate-Code
- Einheitliche Architektur über alle Features hinweg

---

### 🧠 Integration der Store DevTools

Zur Laufzeit-Analyse und Fehlerdiagnose wurde zusätzlich folgendes Paket installiert:

```bash
ng add @ngrx/store-devtools@19
```

🧩 **Ergebnis:**

- Erweiterung `StoreDevtoolsModule` in `app.config.ts` eingetragen
- Ermöglicht das **Live-Debugging** des NgRx-States im Browser
- Unterstützt **Time-Travel-Debugging** (Vor-/Zurückspringen zwischen States)

---

### 🧭 Browser-Erweiterung: Redux DevTools

Zur Visualisierung des globalen States wurde im Browser die Erweiterung
**Redux DevTools** installiert:

🔗 [https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

✅ **Ergebnis:**

- Alle NgRx-Actions sind in Echtzeit sichtbar
- State-Änderungen werden Schritt für Schritt protokolliert
- Ideal zum Debuggen und Performance-Monitoring

---

### ⚙️ Beispielkonfiguration in `app.config.ts`

```typescript
import { provideStore } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { provideStoreDevtools } from "@ngrx/store-devtools";

export const appConfig = {
  providers: [
    provideStore({}),
    provideEffects([]),
    provideStoreDevtools({
      maxAge: 25, // speichert die letzten 25 States
      logOnly: false, // ermöglicht Debugging im Entwicklungsmodus
    }),
  ],
};
```

✅ **Ergebnis:**

- Der Store ist im gesamten Projekt verfügbar
- Effekte sind integriert und erweiterbar
- DevTools aktivieren State-Überwachung in der Redux-Erweiterung

---

### 💡 Zusammenfassung

| Paket                        | Zweck                                  | CLI-Befehl                       |
| ---------------------------- | -------------------------------------- | -------------------------------- |
| `@ngrx/store`                | Zentrale State-Verwaltung              | `ng add @ngrx/store@19`          |
| `@ngrx/effects`              | Asynchrone Nebenläufigkeit (HTTP etc.) | `ng add @ngrx/effects@19`        |
| `@ngrx/schematics`           | Automatische Codegenerierung           | `ng add @ngrx/schematics@19`     |
| `@ngrx/store-devtools`       | Debugging & Time Travel                | `ng add @ngrx/store-devtools@19` |
| **Redux DevTools (Browser)** | Live-State-Visualisierung              | Chrome Extension                 |

---

### 🔗 Nützliche Links

- 🧩 **NgRx Store Docs:**
  [https://ngrx.io/guide/store](https://ngrx.io/guide/store)

- ⚙️ **NgRx Effects:**
  [https://ngrx.io/guide/effects](https://ngrx.io/guide/effects)

- ⚡ **NgRx Schematics:**
  [https://ngrx.io/guide/schematics](https://ngrx.io/guide/schematics)

- 🧭 **NgRx Store DevTools:**
  [https://ngrx.io/guide/store-devtools](https://ngrx.io/guide/store-devtools)

- 🧠 **Redux DevTools (Chrome):**
  [https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

---

## 🔐 Authentifizierungsmodul (Login-Feature)

Zur Vorbereitung der Benutzeranmeldung wurde ein neues **Auth-Feature** im Projekt angelegt.
Dieses Modul wird zukünftig alle Login-, Logout- und Token-bezogenen Prozesse kapseln
und ist über eine eigene Route erreichbar.

---

### 📁 Ordnerstruktur

```bash
📁 src/
 └── 📁 app/
      └── 📁 features/
           └── 📁 auth/
                ├── 📄 auth.routes.ts
                └── 📁 pages/
                     └── 📁 login-page/
                          ├── 📄 login-page.component.ts
                          ├── 📄 login-page.component.html
                          ├── 📄 login-page.component.scss
                          └── 📄 login-page.component.spec.ts
```

✅ **Ergebnis:**

- Neues Feature-Modul `auth` unter `features/`
- Enthält eigene Routing-Konfiguration (`auth.routes.ts`)
- Erste Seite: **LoginPageComponent**

---

### ⚙️ Routing-Konfiguration (`auth.routes.ts`)

Die Datei definiert die Login-Route des Authentifizierungsmoduls.

```typescript
import { Routes } from "@angular/router";
import { LoginPageComponent } from "./pages/login-page/login-page.component";

export const authRoutes: Routes = [
  {
    path: "login",
    component: LoginPageComponent,
  },
];
```

✅ **Ergebnis:**

- `/login` als Einstiegspunkt für Authentifizierung
- Lädt `LoginPageComponent` beim Aufruf der Route
- Bereit für zukünftige Guards, Redirects und State-Anbindung (NgRx)

---

### 🧩 LoginPageComponent

Die Komponente wurde über Angular CLI generiert:

```bash
ng g c features/auth/pages/LoginPage
```

Erstellt folgende Dateien:

```bash
CREATE src/app/features/auth/pages/login-page/login-page.component.ts
CREATE src/app/features/auth/pages/login-page/login-page.component.html
CREATE src/app/features/auth/pages/login-page/login-page.component.scss
CREATE src/app/features/auth/pages/login-page/login-page.component.spec.ts
```

Beispielgrundstruktur (automatisch generiert):

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrl: "./login-page.component.scss",
})
export class LoginPageComponent {}
```

✅ **Ergebnis:**

- Erste Seite des Authentifizierungsmoduls
- Bereit für Formular-Integration (Username/Password)
- Wird über `authRoutes` direkt angesprochen

---

### 💡 Zusammenfassung

| Bereich             | Ziel                                  | Umsetzung                |
| ------------------- | ------------------------------------- | ------------------------ |
| **Auth-Modul**      | Separates Feature für Login & Tokens  | `src/app/features/auth/` |
| **Routing**         | Login-Seite erreichbar über `/login`  | `auth.routes.ts`         |
| **Login-Seite**     | UI-Komponente für Anmeldung           | `LoginPageComponent`     |
| **CLI-Integration** | Automatische Generierung via `ng g c` | Schnell und konsistent   |

---

### 🔗 Nützliche Links

- 🧩 **Angular Router Guide:**
  [https://angular.io/guide/router](https://angular.io/guide/router)

- ⚙️ **Feature-Routing Best Practices:**
  [https://angular.io/guide/feature-modules](https://angular.io/guide/feature-modules)

- 🔐 **NgRx Auth Patterns (Vorschau):**
  [https://ngrx.io/guide/store/authentication](https://ngrx.io/guide/store/authentication)

---

## 🔐 Aufbau des Auth-Features mit Model, Service & NgRx Store

Das **Auth-Modul** wurde weiter ausgebaut und um klar getrennte Verantwortlichkeiten ergänzt.
Ziel ist eine skalierbare, wartbare Struktur für Login, Logout, Benutzerzustand und Token-Management.

---

### 📁 Neue Ordnerstruktur

```bash
📁 src/
 └── 📁 app/
      └── 📁 features/
           └── 📁 auth/
                ├── 📄 auth.routes.ts
                ├── 📁 model/
                │    ├── 📄 user.ts
                │    └── 📄 login-data.ts
                │
                ├── 📁 services/
                │    └── 📄 auth.service.ts
                │
                └── 📁 store/
                     ├── 📄 auth.actions.ts
                     ├── 📄 auth.reducer.ts
                     ├── 📄 auth.selectors.ts
                     ├── 📄 auth.effects.ts
                     └── 📄 index.ts
```

✅ **Ergebnis:**

- **`model/`**: Typisierte Datenstrukturen für User & Login
- **`services/`**: Zentrale Logik für Authentifizierung & Tokenverarbeitung
- **`store/`**: NgRx-basierte State-Verwaltung für Auth-Zustände
- **`auth.routes.ts`**: Einstiegspunkt für das Login-Feature

---

### ⚙️ Model-Interfaces

#### 📄 `model/user.ts`

```typescript
export interface User {
  id: number;
  username: string;
  email: string;
  token?: string;
}
```

#### 📄 `model/login-data.ts`

```typescript
export interface LoginData {
  username: string;
  password: string;
}
```

✅ **Ergebnis:**

- Klare Typisierung für Authentifizierungsdaten
- Verhindert Tippfehler und sorgt für Typ-Sicherheit in Services und Store

---

### 🧩 AuthService

#### 📄 `services/auth.service.ts`

```typescript
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginData } from "../model/login-data";
import { User } from "../model/user";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  #http = inject(HttpClient);
  #apiUrl = environment.apiUrl + "auth/";

  login(data: LoginData): Observable<User> {
    return this.#http.post<User>(this.#apiUrl + "login", data);
  }

  logout(): void {
    localStorage.removeItem("auth_token");
  }

  saveToken(token: string): void {
    localStorage.setItem("auth_token", token);
  }

  getToken(): string | null {
    return localStorage.getItem("auth_token");
  }
}
```

✅ **Ergebnis:**

- Verantwortlich für API-Aufrufe (`/auth/login`)
- Tokenverwaltung über `localStorage`
- Schlanker Service für spätere Integration in NgRx Effects

---

### 🧠 NgRx Feature Store

Mit dem Befehl:

```bash
ng g feature auth --group
```

wurde ein vollständiges NgRx-Feature-Set für Auth erstellt.
Dies beinhaltet automatisch generierte Dateien für Actions, Reducer, Selectors und Effects.

📄 **Beispielhafte Struktur nach Generierung:**

```bash
📁 store/
 ├── auth.actions.ts
 ├── auth.reducer.ts
 ├── auth.selectors.ts
 ├── auth.effects.ts
 └── index.ts
```

---

#### Beispielhafte Actions (`auth.actions.ts`)

```typescript
import { createActionGroup, props } from "@ngrx/store";
import { LoginData } from "../model/login-data";
import { User } from "../model/user";

export const AuthActions = createActionGroup({
  source: "Auth",
  events: {
    "Login Start": props<{ data: LoginData }>(),
    "Login Success": props<{ user: User }>(),
    "Login Failure": props<{ error: string }>(),
    Logout: emptyProps(),
  },
});
```

---

#### Beispiel-Reducer (`auth.reducer.ts`)

```typescript
import { createReducer, on } from "@ngrx/store";
import { AuthActions } from "./auth.actions";
import { User } from "../model/user";

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginStart, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(AuthActions.logout, () => initialState)
);
```

✅ **Ergebnis:**

- State-Management für Login-/Logout-Prozesse
- Automatische State-Updates über Actions
- Erweiterbar für Registrierung, Token-Refresh etc.

---

### 💡 Zusammenfassung

| Bereich      | Ziel                                 | Umsetzung                            |
| ------------ | ------------------------------------ | ------------------------------------ |
| **Models**   | Typisierte Daten für User & Login    | `user.ts`, `login-data.ts`           |
| **Service**  | HTTP-Kommunikation & Tokenverwaltung | `AuthService`                        |
| **Store**    | State-Management für Auth-Status     | `auth.actions.ts`, `auth.reducer.ts` |
| **Routing**  | Einstiegspunkt `/login`              | `auth.routes.ts`                     |
| **NgRx CLI** | Automatisierte Store-Erstellung      | `ng g feature auth --group`          |

---

### 🔗 Nützliche Links

- 🔐 **NgRx Auth Patterns:**
  [https://ngrx.io/guide/store/authentication](https://ngrx.io/guide/store/authentication)

- ⚙️ **NgRx CLI Features:**
  [https://ngrx.io/guide/schematics/feature](https://ngrx.io/guide/schematics/feature)

- 🧩 **Angular HttpClient Doku:**
  [https://angular.io/guide/http](https://angular.io/guide/http)

---

## 🔐 NgRx Authentifizierungssystem mit Login Flow

Das Authentifizierungsmodul wurde vollständig mit **NgRx Store**, **Effects**, **Selectors** und einer reaktiven Login-Seite aufgebaut.
Damit kann der Login-Prozess sauber über den Store gesteuert und der Zustand (Laden, Erfolg, Fehler) global verwaltet werden.

---

### 📁 Modulstruktur

```bash
📁 src/
 └── 📁 app/
      └── 📁 features/
           └── 📁 auth/
                ├── 📁 model/
                │   ├── 📄 login-data.ts
                │   └── 📄 user.ts
                │
                ├── 📁 services/
                │   └── 📄 auth.service.ts
                │
                ├── 📁 store/
                │   ├── 📁 actions/
                │   │   └── 📄 auth.actions.ts
                │   ├── 📁 reducers/
                │   │   └── 📄 auth.reducer.ts
                │   ├── 📁 selectors/
                │   │   └── 📄 auth.selectors.ts
                │   └── 📁 effects/
                │       └── 📄 auth.effects.ts
                │
                ├── 📁 pages/
                │   └── 📁 login-page/
                │       ├── 📄 login-page.component.ts
                │       ├── 📄 login-page.component.html
                │       └── 📄 login-page.component.scss
                │
                └── 📄 auth.routes.ts
```

✅ **Ergebnis:**

- Vollständiger NgRx-Datenfluss von `Action` → `Effect` → `Reducer` → `Selector`
- Getrennter, klar typisierter Auth-Feature-State
- Asynchroner Login-Prozess über den Store steuerbar
- Reaktives Formular mit Live-Feedback über den globalen State

---

### ⚙️ Actions – `auth.actions.ts`

Definiert alle Auth-bezogenen Zustandsänderungen:
`Login`, `Login Success`, `Login Failure`.

```typescript
import { createActionGroup, props } from "@ngrx/store";
import { LoginData } from "../../model/login-data";
import { User } from "../../model/user";

export const AuthActions = createActionGroup({
  source: "Auth",
  events: {
    Login: props<{ data: LoginData }>(),
    "Login Success": props<{ user: User }>(),
    "Login Failure": props<{ error: unknown }>(),
  },
});
```

✅ **Ergebnis:**

- Typisierte Aktionen mit Payload
- Basis für alle Effekte und Reducer-Übergänge

---

### ⚙️ Reducer – `auth.reducer.ts`

Verwaltet den Zustand für Login, User und Ladezustände.

```typescript
import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthActions } from "../actions/auth.actions";
import { User } from "../../model/user";

export const authFeatureKey = "auth";

export interface State {
  loading: boolean;
  user: User | null;
  error: string | null;
}

export const initialState: State = {
  loading: false,
  user: null,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(
    AuthActions.login,
    (state): State => ({
      ...state,
      loading: true,
    })
  ),
  on(
    AuthActions.loginSuccess,
    (state, { user }): State => ({
      ...state,
      loading: false,
      user,
    })
  )
);

export const authFeature = createFeature({
  name: authFeatureKey,
  reducer,
});
```

✅ **Ergebnis:**

- Zentrale State-Verwaltung für Login-Prozess
- Reaktive UI-Updates über `loading` und `user`

---

### ⚙️ Selectors – `auth.selectors.ts`

Erlauben gezielten Zugriff auf Teilbereiche des Auth-States.

```typescript
import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromAuth from "../reducers/auth.reducer";

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export const selectLoading = createSelector(
  selectAuthState,
  (auth) => auth.loading
);

export const selectUserName = createSelector(selectAuthState, (auth) =>
  auth.user ? auth.user.name : null
);
```

✅ **Ergebnis:**

- `selectLoading` → zeigt Ladezustand
- `selectUserName` → liefert aktuellen Benutzername oder `null`

---

### ⚙️ Effects – `auth.effects.ts`

Behandelt asynchrone Vorgänge, wie den Login-Vorgang über den Service.

```typescript
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, concatMap } from "rxjs/operators";
import { of } from "rxjs";
import { AuthActions } from "../actions/auth.actions";
import { AuthService } from "../../services/auth.service";

@Injectable()
export class AuthEffects {
  actions$ = inject(Actions);
  authService = inject(AuthService);

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      concatMap(({ data }) =>
        this.authService.login(data).pipe(
          map((user) => AuthActions.loginSuccess({ user })),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    );
  });
}
```

✅ **Ergebnis:**

- Beobachtet `AuthActions.login`
- Führt asynchronen Login aus
- Sendet `loginSuccess` oder `loginFailure` je nach Ergebnis

---

### ⚙️ AuthService – `auth.service.ts`

Simuliert aktuell den Login-Vorgang mit einer verzögerten RxJS-Antwort (später API-Integration).

```typescript
import { Injectable } from "@angular/core";
import { LoginData } from "../model/login-data";
import { delay, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  login(data: LoginData) {
    console.log(data);
    return of({
      id: 34,
      name: "Tim",
    }).pipe(delay(1000));
  }
}
```

✅ **Ergebnis:**

- Mock-Backend mit RxJS `of()` + `delay()`
- Rückgabe eines simulierten Benutzers

---

### 🧩 Login-Seite – `login-page.component.ts`

Zentrale UI für den Login-Prozess mit **Reactive Forms** und **NgRx Store-Anbindung**.

```typescript
import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AuthActions } from "../store/actions/auth.actions";
import { LoginData } from "../model/login-data";
import {
  selectLoading,
  selectUserName,
} from "../store/selectors/auth.selectors";
import { AsyncPipe } from "@angular/common";
import { LoadingIndicatorComponent } from "../../../components/loading-indicator/loading-indicator.component";

@Component({
  selector: "app-login-page",
  imports: [ReactiveFormsModule, AsyncPipe, LoadingIndicatorComponent],
  templateUrl: "./login-page.component.html",
  styleUrl: "./login-page.component.scss",
})
export class LoginPageComponent {
  store = inject(Store);

  loading$ = this.store.select(selectLoading);
  userName$ = this.store.select(selectUserName);

  fields = inject(FormBuilder).nonNullable.group({
    email: ["tim@example.com"],
    password: ["20q934wtaefijo"],
  });

  submitHandler() {
    console.log(this.fields.value);
    this.store.dispatch(
      AuthActions.login({
        data: this.fields.value as LoginData,
      })
    );
  }
}
```

✅ **Ergebnis:**

- Formulareingaben reaktiv über `FormBuilder`
- Dispatch von `AuthActions.login` an den Store
- Ausgabe des Ladezustands & Benutzernamens über Selektoren

---

### 💡 Template – `login-page.component.html`

Zeigt wahlweise:

- Ladeindikator während des Logins
- Formular bei noch nicht eingeloggtem Nutzer
- Begrüßung nach erfolgreichem Login

```html
@let loading = loading$ | async; @let userName = userName$ | async;

<h1 class="display-3">Login</h1>

@if(loading) {
<app-loading-indicator></app-loading-indicator>
} @else if (userName === null) {

<form [formGroup]="fields" (ngSubmit)="submitHandler()">
  <div class="mb-3">
    <label for="email" class="form-label">Email:</label>
    <input
      type="email"
      id="email"
      class="form-control"
      formControlName="email"
    />
  </div>

  <div class="mb-3">
    <label for="password" class="form-label">Passwort:</label>
    <input
      type="password"
      id="password"
      class="form-control"
      formControlName="password"
    />
  </div>

  <button class="btn btn-primary">Login</button>
</form>

} @else {
<h2>Willkommen {{ userName }}</h2>
}
```

✅ **Ergebnis:**

- Dynamische Anzeige abhängig vom Auth-Zustand
- Reaktives Formular mit Store-Verknüpfung

---

### ⚙️ Routing – `auth.routes.ts`

```typescript
import { Routes } from "@angular/router";
import { LoginPageComponent } from "./login-page/login-page.component";

export const authRoutes: Routes = [
  {
    path: "login",
    component: LoginPageComponent,
  },
];
```

✅ **Ergebnis:**

- Route `/login` lädt das Auth-Feature
- Einstiegspunkt für den gesamten Login-Flow

---

### 🧠 Zusammenfassung

| Bereich       | Ziel                                      | Umsetzung                 |
| ------------- | ----------------------------------------- | ------------------------- |
| **Actions**   | Definieren Login-Events                   | `auth.actions.ts`         |
| **Reducer**   | Aktualisiert State basierend auf Aktionen | `auth.reducer.ts`         |
| **Selectors** | Zugriff auf Ladezustand & User            | `auth.selectors.ts`       |
| **Effects**   | Asynchrone Kommunikation mit Service      | `auth.effects.ts`         |
| **Service**   | Simulierter Backend-Login                 | `auth.service.ts`         |
| **Component** | Reaktive UI + Store-Anbindung             | `login-page.component.ts` |
| **Routing**   | Route `/login` verfügbar                  | `auth.routes.ts`          |

---

### 🔗 Nützliche Links

- 🧩 **NgRx Store Doku:**
  [https://ngrx.io/guide/store](https://ngrx.io/guide/store)

- ⚙️ **NgRx Effects Doku:**
  [https://ngrx.io/guide/effects](https://ngrx.io/guide/effects)

- 🔐 **NgRx Auth Patterns:**
  [https://ngrx.io/guide/store/authentication](https://ngrx.io/guide/store/authentication)

- 🧠 **Angular Reactive Forms:**
  [https://angular.io/guide/reactive-forms](https://angular.io/guide/reactive-forms)

---

## 🔐 Authentifizierungs-Flow mit Login, Logout & Navigation (NgRx + Router)

Der Authentifizierungsprozess wurde vollständig umgesetzt und an die globale Anwendung angebunden.
Login, Logout und der aktuelle Benutzerstatus werden über den **NgRx Store** gesteuert.
Die **Navigation** reagiert dynamisch auf den Authentifizierungsstatus des Benutzers.

---

### ⚙️ `app.config.ts` – Integration des Auth Stores und Effects

Der Auth-Store und die zugehörigen Effects wurden zentral in der Angular-Applikationskonfiguration registriert.

```typescript
import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideHttpClient } from "@angular/common/http";
import { provideStore } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { authFeature } from "./features/auth/store/reducers/auth.reducer";
import { AuthEffects } from "./features/auth/store/effects/auth.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      [authFeature.name]: authFeature.reducer,
    }),
    provideEffects(AuthEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
```

✅ **Ergebnis:**

- Auth-Feature ist im globalen Store registriert
- Effekte werden automatisch initialisiert
- DevTools sind aktiviert (Time Travel Debugging über Redux-Extension)

---

### ⚡ `auth.actions.ts` – Erweiterung um Logout

Der `AuthActions`-Satz wurde um eine `Logout`-Action ergänzt.

```typescript
import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { LoginData } from "../../model/login-data";
import { User } from "../../model/user";

export const AuthActions = createActionGroup({
  source: "Auth",
  events: {
    Login: props<{ data: LoginData }>(),
    "Login Success": props<{ user: User }>(),
    "Login Failure": props<{ error: unknown }>(),
    Logout: emptyProps(),
  },
});
```

✅ **Ergebnis:**

- `Logout` kann jetzt aus beliebigen Komponenten (z. B. Navigation) ausgelöst werden

---

### 🧩 `auth.reducer.ts` – State-Reset beim Logout

Der Reducer wurde um die Logout-Logik erweitert, um den User im State zu löschen.

```typescript
import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthActions } from "../actions/auth.actions";
import { User } from "../../model/user";

export const authFeatureKey = "auth";

export interface State {
  loading: boolean;
  user: null | User;
  error: string | null;
}

export const initialState: State = {
  loading: false,
  user: null,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(
    AuthActions.login,
    (state): State => ({
      ...state,
      loading: true,
    })
  ),
  on(
    AuthActions.loginSuccess,
    (state, { user }): State => ({
      ...state,
      loading: false,
      user,
    })
  ),
  on(
    AuthActions.logout,
    (state): State => ({
      ...state,
      user: null,
    })
  )
);

export const authFeature = createFeature({
  name: authFeatureKey,
  reducer,
});
```

✅ **Ergebnis:**

- Der Benutzer wird nach Logout aus dem State entfernt
- UI-Selektoren reagieren sofort auf die Statusänderung

---

### ⚙️ `auth.effects.ts` – Login & Logout mit Navigation

Der Effect verwaltet jetzt sowohl den Login-Vorgang als auch die Navigation nach dem Logout.

```typescript
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, concatMap, tap } from "rxjs/operators";
import { of } from "rxjs";
import { AuthActions } from "../actions/auth.actions";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
  actions$ = inject(Actions);
  authService = inject(AuthService);
  router = inject(Router);

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      concatMap(({ data }) =>
        this.authService.login(data).pipe(
          map((user) => AuthActions.loginSuccess({ user })),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    );
  });

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          console.log("Logout effect triggered");
          this.router.navigate(["/start"]);
        })
      ),
    { dispatch: false }
  );
}
```

✅ **Ergebnis:**

- Nach Logout → automatische Weiterleitung auf `/start`
- Kein Dispatch nötig (`dispatch: false`)
- Klare Trennung zwischen Business- und Navigationslogik

---

### 🧭 Dynamische Navigation – `navigation.component.html`

Die Navigationsleiste wurde angepasst, um Login/Logout dynamisch anzuzeigen
und die **Kundenverwaltung nur bei aktivem Login** einzublenden.

```html
@let loggedIn = loggedIn$ | async;

<nav class="navbar navbar-expand-lg navbar-dark fancy-navbar">
  <div class="container-fluid">
    <a
      class="navbar-brand fw-bold d-flex align-items-center gap-2"
      routerLink="/"
    >
      <i class="bi bi-gem text-accent"></i> CRM
    </a>

    <button
      class="navbar-toggler border-0"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarFancy"
      aria-controls="navbarFancy"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarFancy">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
        <li class="nav-item">
          <a class="nav-link" routerLink="/start" routerLinkActive="active"
            >Start</a
          >
        </li>

        @if (loggedIn) {
        <li class="nav-item">
          <a class="nav-link" routerLink="/customers" routerLinkActive="active"
            >Kundenverwaltung</a
          >
        </li>
        }

        <li class="nav-item">
          <a class="nav-link" routerLink="/about" routerLinkActive="active"
            >Über uns</a
          >
        </li>
      </ul>

      @if (loggedIn) {
      <button class="btn btn-outline-light ms-lg-3" (click)="logout()">
        Logout
      </button>
      } @else {
      <button class="btn btn-warning" routerLink="/login">Login</button>
      }
    </div>
  </div>
</nav>
```

✅ **Ergebnis:**

- Kundenverwaltung nur sichtbar, wenn `loggedIn$` true ist
- Logout-Button dispatcht `AuthActions.logout()`
- Bei Logout → State wird geleert und Router navigiert

---

### 💡 Zusammenfassung

| Bereich                         | Ziel                                     | Ergebnis                              |
| ------------------------------- | ---------------------------------------- | ------------------------------------- |
| **`app.config.ts`**             | NgRx Store & Effects global registrieren | Auth-Feature integriert               |
| **`auth.actions.ts`**           | Logout-Action hinzufügen                 | Einheitlicher Action-Flow             |
| **`auth.reducer.ts`**           | User aus State entfernen                 | Nach Logout kein Benutzer aktiv       |
| **`auth.effects.ts`**           | Navigation bei Logout                    | Automatischer Redirect auf `/start`   |
| **`navigation.component.html`** | Dynamisches UI                           | Menü abhängig vom Login-State         |
| **NgRx DevTools**               | Live-State-Debugging                     | Login/Logout im Redux-Stream sichtbar |

---

### 🔗 Nützliche Links

- 🧩 **NgRx Store Doku:**
  [https://ngrx.io/guide/store](https://ngrx.io/guide/store)

- ⚙️ **NgRx Effects (Navigation & Side-Effects):**
  [https://ngrx.io/guide/effects](https://ngrx.io/guide/effects)

- 🧠 **Angular Router Navigation im Effect:**
  [https://angular.io/guide/router](https://angular.io/guide/router)

- 🧰 **NgRx Debugging mit Store DevTools:**
  [https://ngrx.io/guide/store-devtools](https://ngrx.io/guide/store-devtools)

---

### 🧭 `navigation.component.ts` – Store-Anbindung & Logout-Dispatch

Die `NavigationComponent` wurde erweitert, um den Authentifizierungsstatus direkt aus dem NgRx Store zu lesen
und Logout-Ereignisse an den Store zu senden.

```typescript
import { Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Store } from "@ngrx/store";
import { selectLoggedIn } from "../../features/auth/store/selectors/auth.selectors";
import { AuthActions } from "../../features/auth/store/actions/auth.actions";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-navigation",
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent {
  store = inject(Store);
  loggedIn$ = this.store.select(selectLoggedIn);

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
```

✅ **Ergebnis:**

- `loggedIn$` beobachtet den aktuellen Authentifizierungsstatus
- Template rendert Login/Logout-Buttons abhängig vom Zustand
- `logout()` löst `AuthActions.logout()` aus
- Durch `AuthEffects.logout$` erfolgt anschließend automatische Navigation nach `/start`

---

### 🧠 Zusammenspiel der Komponenten

| Ebene         | Aufgabe                       | Umsetzung              |
| ------------- | ----------------------------- | ---------------------- |
| **Component** | UI-Interaktion (Button, Menü) | `NavigationComponent`  |
| **Selector**  | Login-Status ermitteln        | `selectLoggedIn`       |
| **Action**    | Logout-Ereignis               | `AuthActions.logout()` |
| **Effect**    | Navigation nach Logout        | `AuthEffects.logout$`  |
| **Reducer**   | Entfernt User aus State       | `auth.reducer.ts`      |

Damit ist der **komplette Auth-Zyklus** geschlossen:

```
UI → Action → Effect → Reducer → Store → UI
```

---

### 🧩 Beispiel-Selector `selectLoggedIn`

Zur Vollständigkeit (da dieser in der Navigation verwendet wird),
so sieht der typische `selectLoggedIn`-Selector aus:

```typescript
import { createSelector } from "@ngrx/store";
import { selectAuthState } from "./auth.selectors";

export const selectLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);
```

✅ **Ergebnis:**

- Gibt `true` zurück, wenn ein Benutzer im Store vorhanden ist
- Ideal für UI-Steuerung (Buttons, Menü, Guards, etc.)

---

### 💡 Zusammenfassung

| Bereich                       | Ziel                                           | Umsetzung              |
| ----------------------------- | ---------------------------------------------- | ---------------------- |
| **NavigationComponent**       | Steuert Login-/Logout-Buttons                  | Store-gebundene UI     |
| **Selector `selectLoggedIn`** | Prüft Authentifizierungsstatus                 | Rückgabe `true/false`  |
| **Logout-Action**             | Entfernt Benutzer und navigiert zur Startseite | NgRx-Effect mit Router |
| **Gesamtfluss**               | UI ↔ Store ↔ Router integriert                 | Reaktiver Auth-Flow    |

---

### 🔗 Nützliche Links

- 🧠 **NgRx Selectors (Best Practices):**
  [https://ngrx.io/guide/store/selectors](https://ngrx.io/guide/store/selectors)

- ⚙️ **NgRx Component Integration:**
  [https://ngrx.io/guide/store/using-selectors](https://ngrx.io/guide/store/using-selectors)

- 🧩 **Reactive Navigation mit NgRx:**
  [https://ngrx.io/guide/effects/lifecycle](https://ngrx.io/guide/effects/lifecycle)

---

## 🛡️ Zugriffsschutz mit `authGuard` (NgRx + Angular Router)

Um sicherzustellen, dass **nur angemeldete Benutzer** Zugriff auf geschützte Bereiche wie die Kundenverwaltung haben,
wurde ein **Angular Route Guard** implementiert.
Dieser prüft über den NgRx Store, ob der Benutzer eingeloggt ist, und leitet bei Bedarf automatisch zur Login-Seite weiter.

---

### ⚙️ Erstellung des Guards

Der Guard wurde über das Angular CLI generiert:

```bash
ng g guard features/auth/guards/auth
```

🧩 Ergebnis:

```bash
CREATE src/app/features/auth/guards/auth.guard.ts
```

---

### 📄 `auth.guard.ts`

Der Guard nutzt den **NgRx Store**, um den Login-Status (`selectLoggedIn`) zu prüfen.
Falls kein Benutzer angemeldet ist, erfolgt eine automatische Weiterleitung zu `/login`.

```typescript
import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { selectLoggedIn } from "../store/selectors/auth.selectors";
import { tap } from "rxjs";

export const authGuard: CanActivateFn = () => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(selectLoggedIn).pipe(
    tap((loggedIn) => {
      if (!loggedIn) {
        router.navigate(["/login"]);
      }
    })
  );
};
```

✅ **Ergebnis:**

- Prüft beim Routing, ob ein Benutzer eingeloggt ist
- Wenn nicht → Weiterleitung zu `/login`
- Nutzt den NgRx-Selector `selectLoggedIn` → kein separater AuthService nötig

---

### 🔐 Anwendung des Guards auf Kundenrouten

Um die Kundenverwaltung abzusichern, wurde der Guard in der Routen-Definition der Customer-Features eingebunden.

#### 📄 `customer.routes.ts`

```typescript
import { Routes } from "@angular/router";
import { CustomerIndexComponent } from "./customer-index.component";
import { CustomerListComponent } from "./views/customer-list/customer-list/customer-list.component";
import { CustomerNewComponent } from "./views/customer-new/customer-new.component";
import { CustomerEditComponent } from "./views/customer-edit/customer-edit.component";
import { authGuard } from "../auth/guards/auth.guard";

export const customerRoutes: Routes = [
  {
    path: "customers",
    component: CustomerIndexComponent,
    canActivate: [authGuard],
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
      {
        path: "new",
        component: CustomerNewComponent,
      },
      {
        path: "edit/:customerId",
        component: CustomerEditComponent,
      },
    ],
  },
];
```

✅ **Ergebnis:**

- Der gesamte Kundenbereich ist geschützt
- Bei unautorisierter Navigation (z. B. direkte URL-Eingabe `/customers/...`)
  → automatischer Redirect zur Login-Seite
- Funktioniert komplett reaktiv über den Store

---

### 🧠 Datenfluss beim Routing

```
User klickt auf "Kundenverwaltung"
          ↓
Router prüft canActivate → authGuard
          ↓
authGuard → Store → selectLoggedIn
          ↓
✅ True → Route erlaubt
❌ False → Redirect /login
```

---

### 📁 Projektstruktur-Erweiterung

```bash
📁 src/
 └── 📁 app/
      └── 📁 features/
           └── 📁 auth/
                ├── 📁 guards/
                │   └── 📄 auth.guard.ts
                ├── 📁 model/
                ├── 📁 services/
                ├── 📁 store/
                └── 📁 pages/
```

✅ **Ergebnis:**

- Authentifizierungslogik sauber gekapselt
- Guards sind direkt im Auth-Feature untergebracht
- Wiederverwendbar für andere Module (z. B. Admin-Bereich)

---

### 💡 Zusammenfassung

| Bereich                | Ziel                                           | Umsetzung                     |
| ---------------------- | ---------------------------------------------- | ----------------------------- |
| **Auth Guard**         | Schützt Routen vor unbefugtem Zugriff          | `auth.guard.ts`               |
| **NgRx Store**         | Prüft Login-Status (`selectLoggedIn`)          | Reaktiver Zugriff über Store  |
| **Router Integration** | Weiterleitung bei nicht authentifiziertem User | `router.navigate(['/login'])` |
| **Kundenrouten**       | Nur mit Login erreichbar                       | `canActivate: [authGuard]`    |

---

### 🔗 Nützliche Links

- 🛡️ **Angular Router Guards:**
  [https://angular.io/guide/router#milestone-5-route-guards](https://angular.io/guide/router#milestone-5-route-guards)

- ⚙️ **NgRx Selectors:**
  [https://ngrx.io/guide/store/selectors](https://ngrx.io/guide/store/selectors)

- 🔐 **Auth & Guards Patterns (NgRx):**
  [https://ngrx.io/guide/store/authentication](https://ngrx.io/guide/store/authentication)

---

## 🙋 Benutzername im UI anzeigen (NgRx Selector)

Nach erfolgreichem Login soll der aktuell eingeloggte Benutzer im UI angezeigt werden —
z. B. als Begrüßung oder neben dem Logout-Button.

Dazu verwenden wir einen **NgRx Selector (`selectUserName`)**,
der aus dem Auth-State den Benutzernamen zurückgibt.

---

### ⚙️ `auth.selectors.ts` – Erweiterung um `selectUserName`

Falls noch nicht vorhanden, wird in den Selectors der Benutzername aus dem State abgeleitet:

```typescript
import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromAuth from "../reducers/auth.reducer";

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export const selectLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);

export const selectUserName = createSelector(selectAuthState, (auth) =>
  auth.user ? auth.user.name : null
);
```

✅ **Ergebnis:**

- `selectUserName` liefert den Namen des aktuell eingeloggten Users
- Gibt `null` zurück, falls kein User vorhanden ist

---

### 🧭 Anpassung der `navigation.component.ts`

In der Navigation soll der Name des Benutzers angezeigt werden,
sobald dieser eingeloggt ist.

```typescript
import { Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Store } from "@ngrx/store";
import {
  selectLoggedIn,
  selectUserName,
} from "../../features/auth/store/selectors/auth.selectors";
import { AuthActions } from "../../features/auth/store/actions/auth.actions";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-navigation",
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent {
  store = inject(Store);
  loggedIn$ = this.store.select(selectLoggedIn);
  userName$ = this.store.select(selectUserName);

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
```

✅ **Ergebnis:**

- `userName$` ist ein Observable, das automatisch aktualisiert wird
- Kann direkt im Template angezeigt werden

---

### 🖼️ Anpassung der `navigation.component.html`

In der Navbar wird der Benutzername rechts neben dem Logout-Button angezeigt,
sobald ein Benutzer angemeldet ist.

```html
@let loggedIn = loggedIn$ | async; @let userName = userName$ | async;

<nav class="navbar navbar-expand-lg navbar-dark fancy-navbar">
  <div class="container-fluid">
    <a
      class="navbar-brand fw-bold d-flex align-items-center gap-2"
      routerLink="/"
    >
      <i class="bi bi-gem text-accent"></i> CRM
    </a>

    <button
      class="navbar-toggler border-0"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarFancy"
      aria-controls="navbarFancy"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarFancy">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
        <li class="nav-item">
          <a class="nav-link" routerLink="/start" routerLinkActive="active"
            >Start</a
          >
        </li>

        @if (loggedIn) {
        <li class="nav-item">
          <a class="nav-link" routerLink="/customers" routerLinkActive="active"
            >Kundenverwaltung</a
          >
        </li>
        }

        <li class="nav-item">
          <a class="nav-link" routerLink="/about" routerLinkActive="active"
            >Über uns</a
          >
        </li>
      </ul>

      @if (loggedIn) {
      <span class="navbar-text text-light me-3">
        👋 Hallo, <strong>{{ userName }}</strong>
      </span>
      <button class="btn btn-outline-light ms-lg-2" (click)="logout()">
        Logout
      </button>
      } @else {
      <button class="btn btn-warning" routerLink="/login">Login</button>
      }
    </div>
  </div>
</nav>
```

✅ **Ergebnis:**

- Benutzername erscheint nach erfolgreichem Login
- Automatische Aktualisierung durch NgRx Store
- Logout blendet den Namen sofort aus

---

### 💡 Zusammenfassung

| Bereich                 | Ziel                                | Umsetzung                          |
| ----------------------- | ----------------------------------- | ---------------------------------- |
| **Selector**            | Liefert aktuellen Benutzernamen     | `selectUserName`                   |
| **NavigationComponent** | Abonniert `userName$` & `loggedIn$` | NgRx Store                         |
| **Template**            | Zeigt Namen im Navbar-Header        | Dynamische Anzeige per `AsyncPipe` |
| **Reaktivität**         | Änderungen im State sofort sichtbar | Store → Selector → Template        |

---

### 🔗 Nützliche Links

- 🧠 **NgRx Selectors Guide:**
  [https://ngrx.io/guide/store/selectors](https://ngrx.io/guide/store/selectors)

- 🧩 **AsyncPipe (Angular Doku):**
  [https://angular.io/api/common/AsyncPipe](https://angular.io/api/common/AsyncPipe)

- ⚙️ **NgRx Store State & UI Binding:**
  [https://ngrx.io/guide/store/using-selectors](https://ngrx.io/guide/store/using-selectors)

---

✨ **Ergebnis in der Anwendung:**

Nach erfolgreichem Login zeigt die Navbar nun:

```
👋 Hallo, Tim        [Logout]
```

## ⚡ Was sind Angular Signals?

**Signals** sind ein neues Reaktivitätssystem in Angular.
Sie ersetzen in vielen Fällen die bisherige Kombination aus
`RxJS + Observables + Change Detection`.

Man kann sich ein Signal vorstellen wie eine **reaktive Variable** —
sie speichert einen Wert und **benachrichtigt automatisch** alle Abhängigkeiten,
wenn sich dieser Wert ändert.

---

### 🧩 Beispiel: Der einfachste Signal-Case

```typescript
import { signal, computed, effect } from "@angular/core";

export class CounterComponent {
  // 🧠 Signal-Variable (reaktiver Wert)
  count = signal(0);

  // 💡 Abgeleitetes Signal
  doubleCount = computed(() => this.count() * 2);

  constructor() {
    // 👀 Effekt (reagiert auf Änderungen)
    effect(() => {
      console.log("Count geändert:", this.count());
    });
  }

  increment() {
    this.count.update((v) => v + 1);
  }
}
```

✅ **Ergebnis:**

- `count()` ist der aktuelle Wert
- Änderungen über `update()` oder `set()` lösen automatisch Reaktionen aus
- `computed()` erstellt automatisch abgeleitete Werte (wie „getters“ in Vue)
- `effect()` funktioniert wie ein „reaktiver Listener“

---

### 🔍 Unterschiede zu Observables

| Thema                   | Observable                           | Signal                           |
| ----------------------- | ------------------------------------ | -------------------------------- |
| Quelle                  | RxJS (Streams)                       | Angular Core                     |
| Zugriff                 | `.subscribe()`                       | Funktionsaufruf `mySignal()`     |
| Push/Next               | `next(value)`                        | `set(value)` oder `update()`     |
| Lazy/Eager              | Lazy (wird erst aktiv bei Subscribe) | Eager (reagiert sofort)          |
| Speicher                | Kein State – streambasiert           | Enthält immer den aktuellen Wert |
| Integration in Template | `async` Pipe                         | Direkt: `{{ mySignal() }}`       |

---

### 🧠 Wann man Signals statt Observables nutzt

| Anwendungsfall                                                         | Empfehlung                       |
| ---------------------------------------------------------------------- | -------------------------------- |
| **Lokale UI-Zustände** (z. B. Spinner, Tabs, Filter, Input-Werte)      | ✅ Signals (einfach, performant) |
| **Server-Daten oder asynchrone Streams** (z. B. HTTP, WebSocket, NgRx) | ✅ Observables                   |
| **App-weit geteilte States / Stores**                                  | ✅ NgRx oder `signalStore`       |
| **Performance-kritische Komponenten**                                  | ✅ Signals (keine Zone nötig)    |

---

### 🧩 Beispiel im Angular-Template

```typescript
@Component({
  selector: "app-counter",
  template: `
    <h2>Zähler: {{ count() }}</h2>
    <p>Doppelt: {{ doubleCount() }}</p>
    <button (click)="increment()">+1</button>
  `,
})
export class CounterComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.update((v) => v + 1);
  }
}
```

✅ Keine `async` Pipe nötig
✅ Kein manuelles `ChangeDetectionRef.detectChanges()`
✅ Immer aktuell

---

### 🧠 Kombination Signals + NgRx

NgRx bietet seit Version 17 das **SignalStore** und **Signal Selectors**,
mit denen man den Store reaktiv über Signals anbinden kann.

#### Beispiel: Signal-Selector in eurer Auth-Feature

```typescript
import { selectSignal } from "@ngrx/signals";
import { selectUserName } from "./store/selectors/auth.selectors";

@Component({
  selector: "app-header",
  template: ` <h2 *ngIf="userName()">👋 Hallo, {{ userName() }}</h2> `,
})
export class HeaderComponent {
  userName = selectSignal(selectUserName);
}
```

✅ **Ergebnis:**

- Der Store liefert den Namen direkt als Signal
- Keine `AsyncPipe` nötig
- Kein `subscribe()` mehr
- Template reagiert sofort auf Änderungen

---

### 🧩 Beispiel: SignalStore

```typescript
import { signalStore, withState, withMethods } from "@ngrx/signals";

interface AuthState {
  user: string | null;
}

export const AuthStore = signalStore(
  { providedIn: "root" },
  withState<AuthState>({ user: null }),
  withMethods((store) => ({
    login(name: string) {
      store.user.set(name);
    },
    logout() {
      store.user.set(null);
    },
  }))
);
```

✅ Jetzt habt ihr eine **NgRx-ähnliche Store-Struktur**, aber komplett auf **Signals-Basis**
→ kein `Actions`/`Reducers`-Overhead, aber volle Reaktivität

---

### 💡 Fazit

| Vorteil               | Beschreibung                                                        |
| --------------------- | ------------------------------------------------------------------- |
| ⚡ **Schneller**      | Keine Zone-Trigger, Change Detection minimal                        |
| 💬 **Einfacher**      | Kein Subscribing/Unsubscribing                                      |
| 🔄 **Reaktiv**        | Template reagiert automatisch                                       |
| 🧱 **Kompatibel**     | Funktioniert mit RxJS, NgRx, und reinem Angular                     |
| 🧩 **Zukunftssicher** | Angular-Team selbst nutzt Signals als Standard für State Management |

---

### 🔗 Nützliche Links

- 📘 **Offizielle Angular Signals-Doku:**
  [https://angular.dev/guide/signals](https://angular.dev/guide/signals)

- ⚙️ **NgRx SignalStore:**
  [https://ngrx.io/guide/signals](https://ngrx.io/guide/signals)

- 🧠 **Deep Dive Blog:**
  [https://blog.angular.io/angular-signals-reactivity-model](https://blog.angular.io/angular-signals-reactivity-model)

---

### 🚀 TL;DR

**Signals = Reaktive Variablen für Angular.**
Sie sind:

- einfacher als Observables
- performanter als klassische Change Detection
- kompatibel mit NgRx über `selectSignal`
- der neue Standard für lokale Zustände

👉 In eurem Projekt könnt ihr sie z. B. einsetzen für:

- UI-Zustände (Loading, Filter, Pagination)
- lokale Cache-Werte
- sofort reaktive Formular- oder Detailanzeigen
