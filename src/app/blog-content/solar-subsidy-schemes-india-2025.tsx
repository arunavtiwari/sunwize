import BlogKeywords from "@/components/Blog/BlogKeywords";

const keywords = [
  "solar subsidy India 2025", "solar panel subsidy India", "pm surya ghar yojana",
  "rooftop solar subsidy India", "solar subsidy for home", "mnre solar subsidy",
  "solar subsidy uttar pradesh", "solar subsidy up 2025", "solar panel scheme India",
  "government solar scheme 2025", "free solar panel scheme India", "solar subsidy application",
  "solar subsidy eligibility India", "solar incentives India", "solar tax benefit India",
  "solar subsidy state wise India", "up solar subsidy 2025", "pm surya ghar muft bijli yojana",
  "solar subsidy for farmers India", "solar scheme for home India", "residential solar subsidy",
  "central government solar subsidy", "solar net metering India", "discom solar subsidy",
  "solar panel price after subsidy", "solar subsidy lucknow", "solar subsidy amount India",
  "how to get solar subsidy India", "solar subsidy bank transfer", "mnre empanelled installer",
];

const SolarSubsidySchemesIndia = () => {
  return (
    <>
      <p>
        The Indian government offers several subsidy schemes to promote solar adoption in 2025. These schemes make solar energy affordable and accessible for households and businesses across the country.
      </p>

      <h2>PM Surya Ghar Muft Bijli Yojana</h2>
      <p>
        Launched in February 2024 and actively running through 2025, PM Surya Ghar Muft Bijli Yojana is India&apos;s largest residential rooftop solar scheme. It provides:
      </p>
      <ul>
        <li>₹30,000 subsidy for 1 kW systems</li>
        <li>₹60,000 subsidy for 2 kW systems</li>
        <li>₹78,000 subsidy for 3 kW and above</li>
      </ul>
      <p>
        The subsidy is transferred directly to your bank account after DISCOM inspection. Applications are made online at pmsuryaghar.gov.in.
      </p>

      <h2>Residential Solar Subsidies</h2>
      <p>
        Subsidies for rooftop solar installations help homeowners reduce upfront costs by 30–40%. Only MNRE-empanelled vendors using ALMM-listed panels are eligible. In Uttar Pradesh, LESCO coordinates inspections for Lucknow-area applicants.
      </p>

      <h2>Commercial and Industrial Incentives</h2>
      <p>
        Commercial and industrial solar installations do not qualify for the residential subsidy, but benefit from:
      </p>
      <ul>
        <li>Accelerated depreciation (40% in year one under Income Tax Act)</li>
        <li>Priority sector lending rates from banks</li>
        <li>Net metering and net billing for commercial DISCOMs</li>
        <li>RPO (Renewable Purchase Obligation) compliance credits</li>
      </ul>

      <h2>State-Level Initiatives</h2>
      <p>
        Several states provide additional solar incentives beyond the central scheme. Uttar Pradesh has its own solar policy under UPNEDA (UP New and Renewable Energy Development Agency) that supports installation in rural and semi-urban areas.
      </p>

      <h2>How to Apply for Solar Subsidy in India</h2>
      <p>
        The easiest path is to work with an MNRE-empanelled installer like Sunwize who handles the portal registration, documentation, DISCOM coordination, and subsidy follow-up on your behalf — at no extra cost.
      </p>

      <BlogKeywords keywords={keywords} />
    </>
  );
};

export default SolarSubsidySchemesIndia;
