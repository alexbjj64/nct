# NCT_task

## Requirements

```
nodejs 8.8.1

npm 5.4.2

java 1.8

mvn 3.2.3
 ```

## Tutorial

```bash
# install
npm install

# run tests
npm run tests

# build report
mvn site -Dallure.results_pattern=allure-results

# deploy report via jetty on 1234 port
mvn jetty:run -Djetty.port=1234
```

## Quick start

```bash
source test_and_report.sh
```

