#!/usr/bin/env bash -x

npm install && npm run test
mvn site -Dallure.results_pattern=allure-results
mvn jetty:run -Djetty.port=1234
