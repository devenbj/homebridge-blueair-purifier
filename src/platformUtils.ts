export type Config = {
  username: string;
  password: string;
  region: Region;
  accountUuid: string;
  verboseLogging: boolean;
  uiDebug: boolean;
  pollingInterval: number;
  devices: DeviceConfig[];
};

export type DeviceConfig = {
  id: string;
  name: string;
  led: boolean;
  airQualitySensor: boolean;
  co2Sensor: boolean;
  temperatureSensor: boolean;
  humiditySensor: boolean;
  germShield: boolean;
  nightMode: boolean;
};

export enum Region {
  EU = 'Default (all other regions)',
  AU = 'Australia',
  CN = 'China',
  RU = 'Russia',
  US = 'USA',
}

export const RegionMap = {
  [Region.US]: 'us',
  [Region.CN]: 'cn',
  [Region.EU]: 'eu',
  [Region.AU]: 'au',
  [Region.RU]: 'ru',
};

export const defaultConfig: Config = {
  uiDebug: false,
  verboseLogging: false,
  username: '',
  password: '',
  accountUuid: '',
  region: Region.EU,
  pollingInterval: 5,
  devices: [],
};

export const defaultDeviceConfig: DeviceConfig = {
  id: '',
  name: '',
  led: false,
  airQualitySensor: false,
  co2Sensor: false,
  temperatureSensor: false,
  humiditySensor: false,
  germShield: false,
  nightMode: false,
};