import ace from 'ace-builds';


/* MODES */

//JSON
import modeJsonUrl from 'ace-builds/src-noconflict/mode-json?url';
ace.config.setModuleUrl('ace/mode/json', modeJsonUrl);

//JAVASCRIPT
import modeJavascriptUrl from 'ace-builds/src-noconflict/mode-javascript?url';
ace.config.setModuleUrl('ace/mode/javascript', modeJavascriptUrl);

//HTML
import modeHtmlUrl from 'ace-builds/src-noconflict/mode-html?url';
ace.config.setModuleUrl('ace/mode/html', modeHtmlUrl);

//YAML
import modeYamlUrl from 'ace-builds/src-noconflict/mode-yaml?url';
ace.config.setModuleUrl('ace/mode/yaml', modeYamlUrl);

//PYTHON
import modePythonUrl from 'ace-builds/src-noconflict/mode-python?url';
ace.config.setModuleUrl('ace/mode/python', modePythonUrl);

//JAVA
import modeJavaUrl from 'ace-builds/src-noconflict/mode-java?url';
ace.config.setModuleUrl('ace/mode/java', modeJavaUrl);

//KOTLIN
import modeKotlinUrl from 'ace-builds/src-noconflict/mode-kotlin?url';
ace.config.setModuleUrl('ace/mode/kotlin', modeKotlinUrl);

//C++
import modeCppUrl from 'ace-builds/src-noconflict/mode-c_cpp?url';
ace.config.setModuleUrl('ace/mode/c_cpp', modeCppUrl);




/* THEMES */

import themeGithubUrl from 'ace-builds/src-noconflict/theme-github?url';
ace.config.setModuleUrl('ace/theme/github', themeGithubUrl);

import themeChromeUrl from 'ace-builds/src-noconflict/theme-chrome?url';
ace.config.setModuleUrl('ace/theme/chrome', themeChromeUrl);

import themeMonokaiUrl from 'ace-builds/src-noconflict/theme-monokai?url';
ace.config.setModuleUrl('ace/theme/monokai', themeMonokaiUrl);

import themeDraculaUrl from 'ace-builds/src-noconflict/theme-dracula?url';
ace.config.setModuleUrl('ace/theme/dracula', themeDraculaUrl);


import themeTwilightUrl from 'ace-builds/src-noconflict/theme-twilight?url';
ace.config.setModuleUrl('ace/theme/twilight', themeTwilightUrl);

import themeTomorrowNightUrl from 'ace-builds/src-noconflict/theme-tomorrow_night?url';
ace.config.setModuleUrl('ace/theme/tomorrow_night', themeTomorrowNightUrl);




/* WORKERS */

// WORKER BASE
import workerBaseUrl from 'ace-builds/src-noconflict/worker-base?url';
ace.config.setModuleUrl('ace/mode/base', workerBaseUrl);

// WORKER JSON
import workerJsonUrl from 'ace-builds/src-noconflict/worker-json?url';
ace.config.setModuleUrl('ace/mode/json_worker', workerJsonUrl);

// WORKER JAVASCRIPT
import workerJavascriptUrl from 'ace-builds/src-noconflict/worker-javascript?url';
ace.config.setModuleUrl('ace/mode/javascript_worker', workerJavascriptUrl);

// WORKER HTML
import workerHtmlUrl from 'ace-builds/src-noconflict/worker-html?url';
ace.config.setModuleUrl('ace/mode/html_worker', workerHtmlUrl);

// WORKER YAML
import workerYamlUrl from 'ace-builds/src-noconflict/worker-yaml?url';
ace.config.setModuleUrl('ace/mode/yaml_worker', workerYamlUrl);



/* SNIPPETS */

// HTML
import snippetsHtmlUrl from 'ace-builds/src-noconflict/snippets/html?url';
ace.config.setModuleUrl('ace/snippets/html', snippetsHtmlUrl);

// JAVASCRIPT
import snippetsJsUrl from 'ace-builds/src-noconflict/snippets/javascript?url';
ace.config.setModuleUrl('ace/snippets/javascript', snippetsJsUrl);

// YAML
import snippetsYamlUrl from 'ace-builds/src-noconflict/snippets/yaml?url';
ace.config.setModuleUrl('ace/snippets/javascript', snippetsYamlUrl);

// JSON
import snippetsJsonUrl from 'ace-builds/src-noconflict/snippets/json?url';
ace.config.setModuleUrl('ace/snippets/json', snippetsJsonUrl);

// PYTHON
import snippetsPythonUrl from 'ace-builds/src-noconflict/snippets/python?url';
ace.config.setModuleUrl('ace/snippets/python', snippetsPythonUrl);

//JAVA
import snippetsJavaUrl from 'ace-builds/src-noconflict/snippets/java?url';
ace.config.setModuleUrl('ace/snippets/java', snippetsJavaUrl);

//KOTLIN
import snippetsKotlinUrl from 'ace-builds/src-noconflict/snippets/kotlin?url';
ace.config.setModuleUrl('ace/snippets/kotlin', snippetsKotlinUrl);

//C++
import snippetsCppUrl from 'ace-builds/src-noconflict/snippets/c_cpp?url';
ace.config.setModuleUrl('ace/snippets/c_cpp', snippetsCppUrl);



import 'ace-builds/src-noconflict/ext-language_tools';
ace.require("ace/ext/language_tools");
