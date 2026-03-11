import type { Model } from '../interfaces/model.interface';

export const modelsList: Model[] = [
  {
    name: '1234',
    provider: 'Qwen',
    model: 'qwen-coder',
    url: 'string',
    apiKey: 'string',
    temperature: 0.7,
    maxTokens: 4096,
  },
  {
    name: 'chatgpt4',
    provider: 'OpenAI',
    model: 'gpt-4o',
    url: 'string',
    apiKey: 'string',
    temperature: 0.7,
    maxTokens: 4096,
  },
];
