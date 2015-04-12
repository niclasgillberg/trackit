System.config({
  "paths": {
    "*": "dist/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "aurelia-skeleton-navigation/*": "dist/*.js"
  }
});

System.config({
  "map": {
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.11.0",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.6.0",
    "aurelia-framework": "github:aurelia/framework@0.10.0",
    "aurelia-http-client": "github:aurelia/http-client@0.7.0",
    "aurelia-router": "github:aurelia/router@0.7.2",
    "font-awesome": "npm:font-awesome@4.3.0",
    "moment": "github:moment/moment@2.9.0",
    "traceur": "github:jmcriffey/bower-traceur@0.0.87",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.87",
    "github:aurelia/binding@0.4.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.5.0",
      "aurelia-metadata": "github:aurelia/metadata@0.3.4",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.5"
    },
    "github:aurelia/binding@0.5.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.6.0",
      "aurelia-metadata": "github:aurelia/metadata@0.4.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.3.0",
      "core-js": "github:zloirock/core-js@0.8.1"
    },
    "github:aurelia/bootstrapper@0.10.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.2.4",
      "aurelia-framework": "github:aurelia/framework@0.9.0",
      "aurelia-history": "github:aurelia/history@0.2.4",
      "aurelia-history-browser": "github:aurelia/history-browser@0.2.5",
      "aurelia-loader-default": "github:aurelia/loader-default@0.5.0",
      "aurelia-logging-console": "github:aurelia/logging-console@0.2.4",
      "aurelia-router": "github:aurelia/router@0.6.0",
      "aurelia-templating": "github:aurelia/templating@0.9.0",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.9.0",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.9.1",
      "aurelia-templating-router": "github:aurelia/templating-router@0.10.0"
    },
    "github:aurelia/bootstrapper@0.11.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.3.0",
      "aurelia-framework": "github:aurelia/framework@0.10.0",
      "aurelia-history": "github:aurelia/history@0.3.0",
      "aurelia-history-browser": "github:aurelia/history-browser@0.3.0",
      "aurelia-loader-default": "github:aurelia/loader-default@0.6.0",
      "aurelia-logging-console": "github:aurelia/logging-console@0.3.0",
      "aurelia-router": "github:aurelia/router@0.7.2",
      "aurelia-templating": "github:aurelia/templating@0.10.2",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.10.0",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.10.0",
      "aurelia-templating-router": "github:aurelia/templating-router@0.11.0",
      "core-js": "github:zloirock/core-js@0.8.1"
    },
    "github:aurelia/dependency-injection@0.5.0": {
      "aurelia-logging": "github:aurelia/logging@0.2.6",
      "aurelia-metadata": "github:aurelia/metadata@0.3.4",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/dependency-injection@0.6.0": {
      "aurelia-logging": "github:aurelia/logging@0.3.0",
      "aurelia-metadata": "github:aurelia/metadata@0.4.0",
      "core-js": "github:zloirock/core-js@0.8.1"
    },
    "github:aurelia/framework@0.10.0": {
      "aurelia-binding": "github:aurelia/binding@0.5.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.6.0",
      "aurelia-loader": "github:aurelia/loader@0.5.0",
      "aurelia-logging": "github:aurelia/logging@0.3.0",
      "aurelia-metadata": "github:aurelia/metadata@0.4.0",
      "aurelia-path": "github:aurelia/path@0.5.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.3.0",
      "aurelia-templating": "github:aurelia/templating@0.10.2",
      "core-js": "github:zloirock/core-js@0.8.1"
    },
    "github:aurelia/framework@0.9.0": {
      "aurelia-binding": "github:aurelia/binding@0.4.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.5.0",
      "aurelia-loader": "github:aurelia/loader@0.4.0",
      "aurelia-logging": "github:aurelia/logging@0.2.6",
      "aurelia-metadata": "github:aurelia/metadata@0.3.4",
      "aurelia-path": "github:aurelia/path@0.4.6",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.5",
      "aurelia-templating": "github:aurelia/templating@0.9.0"
    },
    "github:aurelia/history-browser@0.2.5": {
      "aurelia-history": "github:aurelia/history@0.2.4",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/history-browser@0.3.0": {
      "aurelia-history": "github:aurelia/history@0.3.0",
      "core-js": "github:zloirock/core-js@0.8.1"
    },
    "github:aurelia/http-client@0.6.0": {
      "aurelia-path": "github:aurelia/path@0.4.6",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/http-client@0.7.0": {
      "aurelia-path": "github:aurelia/path@0.5.0",
      "core-js": "github:zloirock/core-js@0.8.1"
    },
    "github:aurelia/loader-default@0.5.0": {
      "aurelia-loader": "github:aurelia/loader@0.4.0",
      "aurelia-metadata": "github:aurelia/metadata@0.3.4"
    },
    "github:aurelia/loader-default@0.6.0": {
      "aurelia-loader": "github:aurelia/loader@0.5.0",
      "aurelia-metadata": "github:aurelia/metadata@0.4.0"
    },
    "github:aurelia/loader@0.4.0": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.3",
      "aurelia-path": "github:aurelia/path@0.4.6",
      "core-js": "npm:core-js@0.4.10",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.5.5"
    },
    "github:aurelia/loader@0.5.0": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-path": "github:aurelia/path@0.5.0",
      "core-js": "github:zloirock/core-js@0.8.1",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.5.5"
    },
    "github:aurelia/metadata@0.4.0": {
      "core-js": "github:zloirock/core-js@0.8.1"
    },
    "github:aurelia/route-recognizer@0.3.0": {
      "core-js": "github:zloirock/core-js@0.8.1"
    },
    "github:aurelia/router@0.6.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.5.0",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.2.4",
      "aurelia-history": "github:aurelia/history@0.2.4",
      "aurelia-path": "github:aurelia/path@0.4.6",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.2.4",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/router@0.7.2": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.6.0",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.3.0",
      "aurelia-history": "github:aurelia/history@0.3.0",
      "aurelia-path": "github:aurelia/path@0.5.0",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.3.0",
      "core-js": "github:zloirock/core-js@0.8.1"
    },
    "github:aurelia/templating-binding@0.10.0": {
      "aurelia-binding": "github:aurelia/binding@0.5.0",
      "aurelia-logging": "github:aurelia/logging@0.3.0",
      "aurelia-templating": "github:aurelia/templating@0.10.2"
    },
    "github:aurelia/templating-binding@0.9.0": {
      "aurelia-binding": "github:aurelia/binding@0.4.0",
      "aurelia-logging": "github:aurelia/logging@0.2.6",
      "aurelia-templating": "github:aurelia/templating@0.9.0"
    },
    "github:aurelia/templating-resources@0.10.0": {
      "aurelia-binding": "github:aurelia/binding@0.5.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.6.0",
      "aurelia-logging": "github:aurelia/logging@0.3.0",
      "aurelia-templating": "github:aurelia/templating@0.10.2",
      "core-js": "github:zloirock/core-js@0.8.1"
    },
    "github:aurelia/templating-resources@0.9.1": {
      "aurelia-binding": "github:aurelia/binding@0.4.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.5.0",
      "aurelia-logging": "github:aurelia/logging@0.2.6",
      "aurelia-templating": "github:aurelia/templating@0.9.0",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/templating-router@0.10.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.5.0",
      "aurelia-metadata": "github:aurelia/metadata@0.3.4",
      "aurelia-path": "github:aurelia/path@0.4.6",
      "aurelia-router": "github:aurelia/router@0.6.0",
      "aurelia-templating": "github:aurelia/templating@0.9.0"
    },
    "github:aurelia/templating-router@0.11.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.6.0",
      "aurelia-metadata": "github:aurelia/metadata@0.4.0",
      "aurelia-path": "github:aurelia/path@0.5.0",
      "aurelia-router": "github:aurelia/router@0.7.2",
      "aurelia-templating": "github:aurelia/templating@0.10.2"
    },
    "github:aurelia/templating@0.10.2": {
      "aurelia-binding": "github:aurelia/binding@0.5.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.6.0",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-loader": "github:aurelia/loader@0.5.0",
      "aurelia-logging": "github:aurelia/logging@0.3.0",
      "aurelia-metadata": "github:aurelia/metadata@0.4.0",
      "aurelia-path": "github:aurelia/path@0.5.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.3.0",
      "core-js": "github:zloirock/core-js@0.8.1"
    },
    "github:aurelia/templating@0.9.0": {
      "aurelia-binding": "github:aurelia/binding@0.4.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.5.0",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.3",
      "aurelia-loader": "github:aurelia/loader@0.4.0",
      "aurelia-logging": "github:aurelia/logging@0.2.6",
      "aurelia-metadata": "github:aurelia/metadata@0.3.4",
      "aurelia-path": "github:aurelia/path@0.4.6",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.5",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:core-js@0.4.10": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

