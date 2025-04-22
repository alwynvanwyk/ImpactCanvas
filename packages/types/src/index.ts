/**
 * Project input types
 */
export interface ProjectInput {
  purpose: string;
  vision: string;
  mission: string;
  approach: string;
  activity1?: string;
  activity2?: string;
  activity3?: string;
  humanResources?: string;
  physicalResources?: string;
  financialResources?: string;
  partnerships?: string;
  beneficiaries?: string;
  customers?: string;
  indicator1?: string;
  indicator2?: string;
  indicator3?: string;
}

/**
 * Generated output types
 */
export interface TheoryOfChange {
  purpose: string;
  vision: string;
  mission: string;
  approach: string;
  activities: string[];
  outputs: string[];
  outcomes: string[];
  impact: string;
}

export interface ImpactActivity {
  name: string;
  description: string;
  resources: string[];
  expectedOutcomes: string[];
}

export interface MonitoringIndicator {
  name: string;
  description: string;
  method: string;
  frequency: string;
  target?: string;
}

export interface MonitoringPlan {
  indicators: MonitoringIndicator[];
}

export interface GeneratedOutput {
  theoryOfChange: TheoryOfChange;
  impactActivities: ImpactActivity[];
  monitoringPlan: MonitoringPlan;
  rawContent?: string;
}

/**
 * API Response types
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface GenerateResponse {
  generated_output: string;
} 