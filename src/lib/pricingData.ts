export const pricingPlans = [
  {
    id: "starter",
    title: "Starter",
    tagline:
      "Designed for DIY landlords looking to automate tasks and simplify their portfolios.",
    monthlyPrice: 16.5,
    annualPrice: 198.0,
    billedAnnually: true,
    includesTitle: "inclueds",
    includes: [
      "Online Rent Payments",
      "Maintenance Management",
      "Listings and Applications",
    ],
  },
  {
    id: "growth",
    title: "Growth",
    tagline:
      "Designed for mid-to-large landlords looking for additional organization and tenant tools.",
    monthlyPrice: 32.1,
    annualPrice: 385.0,
    billedAnnually: true,
    includesTitle: "Everything in Starter, plus",
    includes: [
      "Enhanced Reporting",
      "Move In/Out Inspections",
      "Property Message Board",
    ],
  },
  {
    id: "pro",
    title: "Pro",
    tagline:
      "Designed for mid-to-large landlords looking for premium features and efficiency.",
    monthlyPrice: 55.0,
    annualPrice: 660.0,
    billedAnnually: true,
    highlight: "Most popular",
    includesTitle: "Everything in Growth, plus:",
    includes: ["Tax Reports", "Bank Reconciliation", "Separate Owner Portal"],
  },
  {
    id: "business",
    title: "Business",
    tagline:
      "Designed for large companies looking for advanced features tailored to their needs.",
    monthlyPrice: 100.0,
    custom: true,
    highlight: "Custom",
    includesTitle: "Everything in Pro, plus:",
    includes: [
      "Team Management & Tools",
      "Task Management",
      "User-Interface Customization",
    ],
  },
];
