export interface OptimizelyWebConfig {
  scriptCdn: string;
}

export interface BaseExperimentationWebPros {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reactHelmet?: React.ComponentType<{script?: Array<any>}>;
}

export interface ExperimentationWebProps extends BaseExperimentationWebPros {
  optimizelyWebConfig: OptimizelyWebConfig;
}
