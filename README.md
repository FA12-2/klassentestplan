# FA12.2 - Projekt für Lernfeld 6 : Klassentestplan

## Informationen zum Projekt
Wir entwickeln eine Web-Applikation mit der man Klassen organisiert in Testing-Slots einteilen kann. So kann man zum Beispiel Klassen für regelmäßige Corona-Tests eintragen.

- Thema: "Klassentestplan"
- Sprache: TypeScript [(Lernen)](https://www.typescriptlang.org/)
    - Frameworks Frontend:
      - React [(Lernen)](https://reactjs.org/docs/getting-started.html)
    - Frameworks Backend:
      - Node.js [(Lernen)](https://nodejs.dev/learn/nodejs-with-typescript)
      - Nest.js [(Lernen)](https://docs.nestjs.com/first-steps)
      - typeORM [(Lernen)](https://typeorm.io/#/)
- Database: PostgreSQL [(Lernen)](https://www.postgresql.org ) 
- Versionsverwaltung: GitHub [(Hauptseite)](https://github.com) 
- Planning: Trello [(Board)](https://trello.com/b/wpPNkKoF/lf06)

## Setup fürs Entwickeln
Bevor man anfangen kann für dieses Projekt zu entwickeln, müssen bestimmte Programme und Bibliotheken gedownloadet werden, die für den Programmierprozess notwending sind.

### Inhaltsangabe:
**[Node.js/npm](#1-nodejsnpm)**<br>
**[Git](#2-git)**<br>
**[PostgreSQL](#3-postgresql)**<br>
**[Visual Studio Code](#4-visual-studio-code)**<br>
**[Repository klonen](#5-repository-klonen)**<br>
**[npm-Module installieren](#6-npm-module-installieren)**<br>
**[Datenbank und Server starten](#7-datenbank-und-server-starten)**<br>
**[React-Webserver starten](#8-react-webserver-starten)**<br>
**[That's it](#9-thats-it)**<br>


### 1. Node.js/npm
Node ist eine Laufzeitumgebung mit welcher JavaScript auch außerhalb von Browsers angewandt werden kann. Damit kann man zum Beispiel Web-Server zum Laufen bringen. npm ist ein Bibliothek-Manager, mit welchem man verschiedene JavaScript-Bibliotheken downloaden und managen kann. Das erspart viel Arbeit und Zeitaufwand für fundamentale Aufgaben.

#### Node Download
[Download](https://nodejs.org/en/)

Bitte die linke (LTS)-Version downloaden und den Anleitungen folgen.
>LTS bedeutet: Long Term Support

#### npm Download
Im Laufe der Node-Installation wurde npm im Normalfall mitinstalliert.

#### Node.js/npm-Versionen testen
Um zu testen, ob die Installationen erfolgreich erfolgreich waren, kann man die Kommandozeile öffnen und <code>node --version</code> oder/und <code>npm --version</code>

>Kommandozeile öffnen kann man mitunter, indem man 'cmd' in die Windows-Suche eingibt und mit Enter bestätigt (Windows)

Wird eine Versionsnummer ausgegeben, dann war die Installation erfolgreich. Wird jedoch <code>'node' is not recognized as an iternal or external command</code> ausgegeben, dann ist etwas in den vorherigen Schritten schief gelaufen.

### 2. Git

Git ist eine Software zur Versionsverwaltung von Textdateien. Versionsverwaltung bedeutet, dass man eine Textdatei editieren kann und mit jeder Editierung eine neue Version generiert wird. Das erlaubt zwischen Versionen hin und her zu wechseln, sollte man das sollen.

Es gibt verschiedene Programme und Dienste, die 'Git' als Grundlage benutzen. GitHub ist einer dieser vielen Dienste. Für unser Projekt nutzen wir GitHub.

#### Git Download
[Download](https://git-scm.com/downloads)

Bitte die Version downloaden, die für euer Betriebssystem passend ist und der Installationsanleitung folgen.

#### Git-Versionen testen
Um zu schauen, ob euer Download und eure Installation erfolreich war, könnt ihr in die Kommandozeile <code>git --version</code> eingeben.

>Kommandozeile öffnen kann man mitunter, indem man 'cmd' in die Windows-Suche eingibt und mit Enter bestätigt (Windows)

Wird eine Versionsnummer ausgegeben, dann war die Installation erfolgreich. Wird jedoch <code>'git' is not recognized as an iternal or external command</code> ausgegeben, dann ist etwas in den vorherigen Schritten schief gelaufen.

#### GitHub-Account erstellen

Bitte  auf die [GitHub-Login-Seite](https://github.com/) gehen und einen User-Account erstellen.

#### Git User-Konfiguration
Damit man später in seinen Entwicklungsumgebungen mit Git arbeiten kann, muss man eine Nutzer-Konfiguration erstellen. Erst durch diese Nutzer-Konfiguration kann man mit der Entwicklungsumgebung Änderungen an der Code-Base vornehmen.

Eine globale User-Konfiguration kann man erstellen, indem man die Kommandozeile nutzt.

Globalen Benutzernamen festlegen:<br/>
<code>git config --global user.name "beispielname"</code><br/>
Globale E-Mail festlegen:<br/>
<code>git config --global user.email "Beispiel@mail.com"</code>

>Kommandozeile öffnen kann man mitunter, indem man 'cmd' in die Windows-Suche eingibt und mit Enter bestätigt (Windows)

### 3. PostgreSQL
Die Daten werden in einer Datenbank hinterlegt. Wir nutzen PostgreSQL. Eine grafische Oberfläche bietet pgadmin4.

[Download](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

Folgt den Installationsanweisungen und seid sicher, dass auch ein Haken bei "pgadmin4" gesetzt ist im Installationsverlauf. Port kann standardmäßig bleiben und muss nicht geändert werden.

### 4. Visual Studio Code
VSC ist eine Integrated Developer Enviroment (IDE). Sie bietet einen Text-Editor mit Code-Highlighting, verschiedene Plugins und viele Möglichkeiten alles an seine eigene Präferenzen einzustellen.

Natürlich kann man auch andere IDEs benutzen. So zum Beispiel IntelliJ IDEA, WebStorm, Atom und mehr - jedoch wird sich dieses Setup mit VSC außeinandersetzen.

#### VSC Download
[Download](https://code.visualstudio.com/)

Einfach auf der Seite über den Dropdown-Button das zugehörige Betriebssystem auswählen und den Download starten. Danach einfach den Installationsanweisungen folgen.

### 5. Repository klonen
Jetzt wo alle Vorbereitungen getroffen sind, kann man das Projekt in VSC klonen. Klonen bedeutet von dem Git-Hub-Projekt (dem sogenannten Repository) eine lokale Kopie zu erstellen, um daran zu entwickeln.

Jetzt Visual Studio Code  öffnen und <code>Strg</code>+<code>Shift</code>+<code>P</code> drücken, um die Befehlspalette zu öffnen.

Dort dann <code>gitcl</code> eingeben. Dadurch wird <code>Git: Clone</code> vorgeschlagen. Diese Option dann anwählen, woraufhin GitHub eine Authentifizierung im Browser anfordert. Dort anmelden und nach abgeschlossener Authentifizierung einen Ordner auswählen, in dem das lokale Projekt gespeichert werden soll.

### 6. npm-Module installieren
Wir müssen nun für sowohl den Client, als auch den Server alle nötigen npm-Bibliotheken installieren.

In der Projektstruktur befindet sich jeweils ein 'frontend'-Ordner und ein 'backend'-Ordner. Falls noch nicht offen, kann man in Visual Studio Code mit <code>Strg</code>+<code>Ö</code> das Terminal öffnen.

Dort dann <code>cd frontend</code> eingeben, um mit dem Terminal in den Ordner für das Frontend zu navigieren. Wenn das getan ist, dann geben wir <code>npm install</code> ein, um alle Module zu installieren, welche in der package.json hinterlegt sind.

Wenn das getan ist, dann navigieren wir zurück in den Root-Ordner, indem wir <code>cd..</code> im Terminal eingeben.

Zurück im Root-Ordner, navigieren wir nun in den 'backend'-Ordner, indem wir <code>cd backend</code> eingeben. Wenn das getan ist, dann geben wir <code>npm install</code> ein, um alle Module zu installieren, welche im dortigen package.json hinterlegt sind.

### 7. Datenbank und Server starten

#### Für Windows

##### Postgres starten:
Als postgreSQL installiert worden ist, hat es einen Service in Windows angelegt. Um diesen Service zu starten müssen wir <code>Win</code>+<code>R</code> drücken und <code>services.msc</code> eingeben, um die Windows-Dienste zu öffnen.

Wir suchen nach <i>"postgresql-x64-{version}"</i>. Diesen Dienst klicken wir mit Rechtsklick an und wählen "Start" aus. Wenn "Start" ausgegraut ist, dann ist der Dienst schon gestartet und wir können das Fenster wieder schließen.

>Um die Datenbank zu beenden, kann man über den gleichen Weg den Dienst wieder mit "Stop" beenden.

##### pgadmin4 starten (optional):
Optional, wer möchte, kann pgadmin4 öffnen, um eine bessere Übersicht zu haben.
Öffnet dafür <i>pgadmin4.exe</i> unter: <code>{installationsordner}\PostgreSQL\14\pgAdmin 4\bin)</code>

##### ormconfig.json erstellen

Nun müssen wir in unserem Projekt <code>./backend/ormconfig.template.json</code> duplizieren und zu <code>ormconfig.json</code> unbenennen.

In dieser <code>ormconfig.json</code>-Datei müssen wir nun nur bei "password" das Passwort eingeben, welches man in der Installation gesetzt hat. Diese Datei sollte unter keinen Umständen committed werden, deswegen ist sie in der <code>.gitignore</code>-Datei eingetragen.

Alle anderen Werte wie "database", "username", "host", "port" u.s.w können bestehen bleiben, wenn man der Standardinstallation von postgres gefolgt ist.

>Für das Entwickeln wird einfachheitshalber die Standard-Datenbank, welche "postgres" genannt ist, benutzt. Wer das ändern möchte, muss eine weitere/neue Datenbank über zum Beispiel pgadmin4 oder die Kommandozeile erstellen.

#### Nest-Server starten
Nun navigiert man mit dem VSC-Terminal nach <code>cd backend</code> und kann dort <code>npm run start</code> eingeben, um den Nest-Server zu starten, welcher sich dann mit der Datenbank verbindet. (Wenn der Service gestartet worden ist)

Um zu testen, ob es funktioniert kann man in seiner Browser-Adresszeile <code>localhost:3000/schoolclass</code> eingeben, woraufhin eine Seite mit Einträgen oder <code>[]</code> zurückgegeben wird.

### 8. React-Webserver starten
Nun navigiert man zurück in den Root-Ordner (<code>cd..</code>) und geht dann in den frontend-Ordner mit <code>cd frontend</code>. Dort können wir mit <code>npm run start</code> den React-Webserver starten.

Um zu testen, ob es funktioniert, kann man <code>localhost:3001</code> in der Browser-Adresszeile eingeben. Wenn sich eine Webseite öffnet, dann hat es funktioniert.
>Standardmäßig führt React das Öffnen des Browers automatisch aus.

### 9. That's it
Das waren alle Schritte, um die Entwicklungsumgebung zu starten. Bei Fragen oder Problemen einfach melden.