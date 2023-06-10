import { TagNames } from "../constants/TagNames";

export type PartialTagNames = Partial<Record<keyof typeof TagNames, () => void>>;
