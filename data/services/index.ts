import type { Service } from "@/lib/types";
import { servicesPartA } from "./part-a";
import { servicesPartB } from "./part-b";
import { servicesPartC } from "./part-c";

/** All 13 services, in display order. Look up by slug via lib/lookup.ts. */
export const services: Service[] = [...servicesPartA, ...servicesPartB, ...servicesPartC];
