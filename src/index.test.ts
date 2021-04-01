import LogsInsightsHash from '.';

describe('LogsInsightsHash', (): void => {
  it('should generate a valid Logs Insights hash', (): void => {
    const hash: LogsInsightsHash = new LogsInsightsHash();
    hash.addLogGroup('/aws/lambda/a');
    hash.addLogGroup('test-log-group-name');
    expect(hash.toString()).toBe(
      "#logsV2:logs-insights$3FqueryDetail$3D~(source~(~'*2faws*2flambda*2fa~'test-log-group-name))",
    );
  });
});
