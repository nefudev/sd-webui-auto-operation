export const config = {
  baseURL: 'http://localhost:7860/',
  headless: false,
  viewport: { width: 1600, height: 1000 },
  t2i: {
    checkpoint: '',
    vae: '',
    clipSkip: 1,
    prompt: 'best quality,1girl,outdoor,cowboy shot,scenery',
    negative: '(low quality:1.2), (worst quality:1.2)',
    params: {
      sampler: 'DDIM',
      steps: 22,
      width: 512,
      height: 576,
      batchCount: 1,
      batchSize: 4,
      cfgScale: 10,
      seed: -1,
    },
    hiresFix: {
      upScaler: 'Latent',
      hiresSteps: 0,
      strength: 0.5,
      upScaleBy: 2,
      width: 848,
      height: 960,
    },
  },
  i2i: {
    checkpoint: '',
    vae: '',
    clipSkip: 1,
    prompt: 'best quality,1girl,outdoor,cowboy shot,scenery',
    negative: '(low quality:1.2), (worst quality:1.2)',
    params: {
      sampler: 'DDIM',
      steps: 22,
      width: 848,
      height: 960,
      batchCount: 1,
      batchSize: 2,
      cfgScale: 10,
      strength: 0.55,
      seed: -1,
    },
  },
  outputsT2iImg: () => config.t2i.params.batchCount * config.t2i.params.batchSize,
};

export type Params = {
  sampler: string;
  steps: number;
  width: number;
  height: number;
  batchCount: number;
  batchSize: number;
  cfgScale: number;
  strength?: number;
  seed: number;
};

export type HiresFix = typeof config.t2i.hiresFix;
