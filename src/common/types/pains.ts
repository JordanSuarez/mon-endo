export type Pain = {
  date: string;
  description: string;
  painType: PainType;
  painTypeIntensity: PainTypeIntensity;
  userId: string;
  id: string;
};

export type PainType = {
  id: string;
  name: string;
};

export type PainTypeIntensity = PainType;
