export interface ChatMessage {
  sender: string;
  message: string;
}

interface Part {
  text: string;
}

interface Content {
  parts: Part[];
  role: string;
}

interface SafetyRating {
  category: string;
  probability: string;
}

interface Candidate {
  content: Content;
  finishReason: string;
  index: number;
  safetyRatings: SafetyRating[];
}

interface UsageMetadata {
  promptTokenCount: number;
  candidatesTokenCount: number;
  totalTokenCount: number;
}

export interface APIResponse {
  candidates: Candidate[];
  usageMetadata: UsageMetadata;
}
