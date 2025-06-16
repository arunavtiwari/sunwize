"use client"
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useState } from "react";

const SolarCalculatorPage = () => {
  const [result, setResult] = useState<any | null>(null);

  const calculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const bill = Number((form as any).bill.value);
    const pincode = (form as any).pincode.value;

    const units = bill / 8;
    const systemSize = units / 120;
    const cost = systemSize * 70000;
    const subsidy = Math.min(systemSize * 11000, 78000);
    const netCost = cost - subsidy;
    const monthlySaving = bill;
    const yearlySaving = monthlySaving * 12;
    const lifetimeSaving = yearlySaving * 25;
    const roofArea = systemSize * 60;
    const roi = (yearlySaving / netCost) * 100;

    const emi = (netCost - subsidy) / (5 * 12);

    setResult({
      systemSize,
      roofArea,
      monthlySaving,
      yearlySaving,
      cost,
      subsidy,
      netCost,
      lifetimeSaving,
      roi,
      emi,
      co2: systemSize * 1176,
      trees: Math.floor(systemSize * 39),
      distance: Math.floor(systemSize * 10500),
      pincode,
    });
  };

  return (
    <>
      <Breadcrumb
        pageName="Solar Calculator"
        description="Estimate your solar power system size, cost, and savings using your monthly electricity bill and location in India."
      />

      <section className="py-12">
        <div className="container mx-auto max-w-2xl px-4">
          <form onSubmit={calculate} className="bg-white dark:bg-gray-800 p-6 rounded shadow space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Monthly Electricity Bill (₹)</label>
              <input type="number" name="bill" required className="mt-1 w-full rounded border p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Pincode</label>
              <input type="text" name="pincode" required className="mt-1 w-full rounded border p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
            </div>

            <button type="submit" className="w-full bg-primary text-white font-semibold py-2 rounded hover:opacity-90">Calculate</button>
          </form>

          {result && (
            <div className="mt-8 space-y-6">
              <h3 className="text-xl font-semibold text-center text-black dark:text-white">Your Solar Estimate</h3>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                <Info title="System Size" value={`${result.systemSize.toFixed(2)} kW`} />
                <Info title="Roof Area" value={`${Math.ceil(result.roofArea)} sq. ft.`} />
                <Info title="Monthly Savings" value={`₹${result.monthlySaving.toLocaleString()}`} />
                <Info title="Yearly Savings" value={`₹${result.yearlySaving.toLocaleString()}`} />
                <Info title="Total Cost" value={`₹${result.cost.toLocaleString()}`} />
                <Info title="Central Subsidy" value={`-₹${result.subsidy.toLocaleString()}`} />
                <Info title="Net Cost" value={`₹${result.netCost.toLocaleString()}`} />
                <Info title="Lifetime Savings" value={`₹${result.lifetimeSaving.toLocaleString()}`} />
                <Info title="ROI" value={`${result.roi.toFixed(2)}% p.a.`} />
                <Info title="EMI (5 yrs)" value={`₹${result.emi.toFixed(0)}/mo`} />
                <Info title="CO₂ Mitigated" value={`${result.co2.toLocaleString()} Kg`} />
                <Info title="Trees Planted" value={`${result.trees}`} />
                <Info title="Distance Offset" value={`${result.distance.toLocaleString()} Km`} />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                * Disclaimer: Calculations assume ₹8/unit rate, 120 units/kW/month generation, 1% annual degradation, and 3% inflation. Results are estimates and may vary.
              </p>
              <div className="text-center">
                <button className="mt-4 bg-secondary text-white py-2 px-6 rounded hover:opacity-90">
                  Get in Touch with a Consultant
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

const Info = ({ title, value }: { title: string; value: string }) => (
  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded shadow text-center">
    <h4 className="text-sm text-gray-600 dark:text-gray-300 mb-1">{title}</h4>
    <p className="text-lg font-semibold text-black dark:text-white">{value}</p>
  </div>
);

export default SolarCalculatorPage;
