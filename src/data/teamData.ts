import type { TeamMember } from "./team/teamTypes";
import { alumni } from "./team/alumni";
import { facultyMembers } from "./team/faculty";
import { mastersStudents } from "./team/mastersStudents";
import { phdStudents } from "./team/phdStudents";
import { researchStaff } from "./team/researchStaff";
import {
  dualDegreeStudents,
  honorsStudents,
} from "./team/undergraduateResearchers";

export type { TeamMember };

export const defaultPhoto = "/team/default.png";

export const teamMembers: TeamMember[] = [
  ...facultyMembers,
  ...phdStudents,
  ...mastersStudents,
  ...dualDegreeStudents,
  ...honorsStudents,
  ...researchStaff,
  ...alumni,
];

export const categories = [
  "All",
  "Faculty",
  "PhD Students",
  "Masters Students",
  "Undergraduate Researchers",
  "Research Staff",
  "Alumni",
] as const;
