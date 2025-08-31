import { SettingsFormData } from "@/lib/schemas";
import { MotionProps as OriginalMotionProps } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { IApplication, IProperty } from "./property";
import { IUser } from "./user";

declare module "framer-motion" {
  interface MotionProps extends OriginalMotionProps {
    className?: string;
  }
}

export interface HeaderProps {
  title: string;
  subtitle: string;
}

export enum AmenityEnum {
  WasherDryer = "WasherDryer",
  AirConditioning = "AirConditioning",
  Dishwasher = "Dishwasher",
  HighSpeedInternet = "HighSpeedInternet",
  HardwoodFloors = "HardwoodFloors",
  WalkInClosets = "WalkInClosets",
  Microwave = "Microwave",
  Refrigerator = "Refrigerator",
  Pool = "Pool",
  Gym = "Gym",
  Parking = "Parking",
  PetsAllowed = "PetsAllowed",
  WiFi = "WiFi",
}

export enum HighlightEnum {
  HighSpeedInternetAccess = "HighSpeedInternetAccess",
  WasherDryer = "WasherDryer",
  AirConditioning = "AirConditioning",
  Heating = "Heating",
  SmokeFree = "SmokeFree",
  CableReady = "CableReady",
  SatelliteTV = "SatelliteTV",
  DoubleVanities = "DoubleVanities",
  TubShower = "TubShower",
  Intercom = "Intercom",
  SprinklerSystem = "SprinklerSystem",
  RecentlyRenovated = "RecentlyRenovated",
  CloseToTransit = "CloseToTransit",
  GreatView = "GreatView",
  QuietNeighborhood = "QuietNeighborhood",
}

export enum PropertyTypeEnum {
  Rooms = "Rooms",
  Tinyhouse = "Tinyhouse",
  Apartment = "Apartment",
  Villa = "Villa",
  Townhouse = "Townhouse",
  Cottage = "Cottage",
}

export interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export interface PropertyOverviewProps {
  propertyId: string;
}

export interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedApplication?: IApplication;
  propertyId?: string;
}

export interface ContactWidgetProps {
  onOpenModal: () => void;
}

export interface ImagePreviewsProps {
  images: string[];
}

export interface PropertyDetailsProps {
  propertyId: string;
}

export interface PropertyLocationProps {
  propertyId: string;
}

export interface ApplicationCardProps {
  application: Record<string, any>;
  children: React.ReactNode;
}

export interface CardProps {
  property: IProperty;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  showFavoriteButton?: boolean;
  propertyLink?: string;
}

export interface CardCompactProps {
  property: IProperty;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  showFavoriteButton?: boolean;
  propertyLink?: string;
}

export interface HeaderProps {
  title: string;
  subtitle: string;
}

export interface NavbarProps {
  isDashboard: boolean;
}

// export interface
// Props {
//   userType: "manager" | "tenant";
// }

export interface SettingsFormProps {
  onSubmit: (data: SettingsFormData, imageFiles: File[]) => Promise<void>;
  userType: "tenant" | "admin" | "landlord" | undefined;
}

export interface User {
  userInfo: IUser;
  userRole: "tenant" | "admin" | "landlord";
}
