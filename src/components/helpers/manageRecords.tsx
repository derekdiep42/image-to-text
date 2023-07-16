import results from "../../results/results.json";
import { apiResponse } from "../Recognition/Recognition";

export interface records {
  image: string;
  data: string;
}

export async function saveRecords(image: string, data: apiResponse[]) {
  if (!image || image === "") return;
  const records = getRecords();
  records.push({ image: image, data: JSON.stringify(data) });
}

export function getRecords(): records[] {
  return results as records[];
}
