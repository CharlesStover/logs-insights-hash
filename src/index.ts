const POSTFIX = '))';
const PREFIX = '#logsV2:logs-insights$3FqueryDetail$3D~(source~(';

export default class LogsInsightsHash {
  private _logGroupNames: string[] = [];

  public constructor() {
    this._mapLogGroupNameToHash = this._mapLogGroupNameToHash.bind(this);
  }

  private _mapLogGroupNameToHash(logGroupName: string): string {
    return `~'${logGroupName.replace(/\//g, '*2f')}`;
  }

  public addLogGroup(logGroupName: string): this {
    this._logGroupNames.push(logGroupName);
    return this;
  }

  public toString(): string {
    return `${PREFIX}${this._logGroupNames
      .map(this._mapLogGroupNameToHash)
      .join('')}${POSTFIX}`;
  }
}
