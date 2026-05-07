"use server";

export async function getPatients() {
  // TODO: Connect to database
  return [];
}

export async function createPatient(data: {
  name: string;
  email?: string;
  phone: string;
  dob?: string;
  gender?: string;
  notes?: string;
}) {
  // TODO: Connect to database
  return { success: true, id: `PAT-${Date.now()}` };
}