# CloudWatch Logs Insights URL hash

[![version](https://img.shields.io/npm/v/logs-insights-hash.svg)](https://www.npmjs.com/package/logs-insights-hash)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/logs-insights-hash.svg)](https://www.npmjs.com/package/logs-insights-hash)
[![downloads](https://img.shields.io/npm/dt/logs-insights-hash.svg)](https://www.npmjs.com/package/logs-insights-hash)

The Logs Insights hash class takes log group names as input and outputs a
CloudWatch Logs Insights URL hash.

## Install

- `npm install logs-insights-hash` or
- `yarn add logs-insights-hash`

## Use

```javascript
import LogsInsightsHash from 'logs-insights-hash';

const hash = new LogsInsightsHash();
hash.addLogGroup('/aws/lambda/my-function');
hash.addLogGroup('/aws/lambda/my-other-function');

// #logsV2:logs-insights$3FqueryDetail$3D~(source~(~*2faws*2flambda*2fmy-functio
// n~~*2faws*2flambda*2fmy-other-function))
hash.toString();
```

## API

### `addLogGroup`

Type: `(logGroupName: string) => this`

Adds a log group to the selected log groups.

```javascript
hash.addLogGroup('/aws/lambda/my-function');
```

### `toString`

Type: `() => string`

Returns the Logs Insights hash.

```javascript
hash.toString();
```
