export interface Model {
  name: string;
  provider: string;
  model: string;
  url: string;
  apiKey: string;

  temperature?: number;
  maxTokens?: number;
}
