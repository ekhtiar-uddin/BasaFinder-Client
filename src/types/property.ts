import { PropertyTypeEnum } from "./global";

type Specification = {
  processor: string;
  ram: string;
  storage: string;
  display: string;
};

export interface IProperty {
  _id: string;
  name: string;
  isParkingIncluded: boolean;
  isPetsAllowed: boolean;
  applicationFee: number;
  availableColors: string[];
  slug: string;
  beds: number;
  description: string;
  price: number;
  baths: number;
  bedrooms: number;
  squareFeet: number;
  imageUrls: string[];
  // amenities: Amenity[];
  // highlights: Highlight[];
  securityDeposit?: number;
  amenities: string;
  highlights: string;
  isActive: boolean;
  landlord: string;
  numberOfReviews: number;
  averageRating?: number;
  ratingCount?: number;
  specification: Specification;
  keyFeatures: string[];
  propertyType: PropertyTypeEnum;
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    coordinates: {
      coordinates: [number, number];
    };
  };
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IManager {
  id: number;
  cognitoId?: string;
  name: string;
  email: string;
  phoneNumber: string;
  managedProperties: IProperty[];
}

export interface ITenant {
  id: number;
  cognitoId?: string;
  name: string;
  email: string;
  phoneNumber: string;
  properties: IProperty[];
  favorites: IProperty[];
  applications: IApplication[];
  leases: ILease[];
}

export interface ILocation {
  id: number;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  coordinates: string;
  properties: IProperty[];
}

export interface IApplication {
  id: number;
  applicationDate: Date;
  status: ApplicationStatus;
  property: Record<string, any>;
  landlordContactNumber: string;
  tenant: Record<string, any>;
  name: string;
  email: string;
  phoneNumber: string;
  message?: string;
  leaseId?: number;
  startDate: Date;
  endDate: Date;

  // for solve error

  _id?: string;
  // _id?: string | undefined;
}

export interface ILease {
  id: number;
  startDate: Date;
  endDate: Date;
  rent: number;
  deposit: number;
  propertyId: number;
  tenantCognitoId: string;
  applicationId?: number;
  payments: IPayment[];
}

export interface IPayment {
  id: number;
  amountDue: number;
  amountPaid: number;
  dueDate: Date;
  paymentDate: Date;
  paymentStatus: PaymentStatus;
  leaseId: number;
}

// enum Amenity {
//   WasherDryer,
//   AirConditioning,
//   Dishwasher,
//   HighSpeedInternet,
//   HardwoodFloors,
//   WalkInClosets,
//   Microwave,
//   Refrigerator,
//   Pool,
//   Gym,
//   Parking,
//   PetsAllowed,
//   WiFi,
// }

// enum Highlight {
//   HighSpeedInternetAccess,
//   WasherDryer,
//   AirConditioning,
//   Heating,
//   SmokeFree,
//   CableReady,
//   SatelliteTV,
//   DoubleVanities,
//   TubShower,
//   Intercom,
//   SprinklerSystem,
//   RecentlyRenovated,
//   CloseToTransit,
//   GreatView,
//   QuietNeighborhood,
// }

// enum PropertyType {
//   Rooms,
//   Tinyhouse,
//   Apartment,
//   Villa,
//   Townhouse,
//   Cottage,
// }

enum ApplicationStatus {
  Pending = "Pending",
  Denied = "Denied",
  Approved = "Approved",
}

enum PaymentStatus {
  Pending = "Pending",
  Paid = "Paid",
  Failed = "Failed",
  // PartiallyPaid = "PartiallyPaid",
  // Overdue = "Overdue",
}
