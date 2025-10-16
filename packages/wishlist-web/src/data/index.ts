import iotmData from "./iotm.json";

export type MallPrice = {
  id: number;
  lowestMall: number;
};

export type IOTM = {
  img: string;
  packaged_id: number;
  packaged_name: string;
  opened_ids?: number | number[];
  opened_names?: string | string[];
  familiar_ids?: number | number[];
  familiar_names?: string | string[];
  skill_ids?: number | number[];
  skill_names?: string | string[];
  year: number;
  month: number;
  speed_tier?: number;
  aftercore_tier?: number;
  tradeable: boolean;
  type: string;
  equipment_slot?: string;
  is_ioty?: boolean;
  is_con?: boolean;
};

export const iotms = iotmData as IOTM[];

export type { Price, WishStatus } from "@/types/data";
