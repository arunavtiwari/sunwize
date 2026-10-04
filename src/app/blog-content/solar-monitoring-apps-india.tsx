import BlogKeywords from "@/components/Blog/BlogKeywords";

const keywords = [
  "solar monitoring app India",
  "solar inverter app UP",
  "Huawei FusionSolar India",
  "solar performance tracking India",
  "solar app Lucknow",
  "solar system monitoring 2026",
  "solar inverter fault codes India",
  "solar generation tracking UP",
  "solar daily output check India",
  "solar performance ratio India",
  "Solis Cloud India",
  "Goodwe SEMS India",
  "solar export self consumption UP",
  "solar system underperformance India",
  "solar alert app India",
  "solar monitoring UP homeowner",
  "solar app for panels India",
  "solar kWh tracking India",
  "solar midday output check UP",
  "solar app guide India 2026",
  "solar inverter Wi-Fi dongle India",
  "solar string performance India",
  "solar fault code UPPCL India",
  "solar AMC data India",
  "solar panel degradation tracking UP",
];

export default function SolarMonitoringAppsIndia() {
  return (
    <>
      <p>
        One of the least-discussed aspects of owning a rooftop solar system in UP is what happens after
        installation day. The panels go on the roof, the inverter starts producing, and most owners
        assume everything is running fine. The reality is that an unmonitored solar system can
        underperform for weeks or months before the owner notices - a dusty string here, a fault code
        there, or gradual panel degradation that quietly erodes your savings. Your inverter&apos;s mobile
        app is your first line of defence, and most owners in Lucknow, Kanpur, and Raebareli never
        use it beyond the initial setup screen.
      </p>

      <h2>Major Inverter Apps and How to Set Them Up</h2>
      <p>
        Most inverters sold in India come with a companion cloud platform accessible through a smartphone
        app. The specific app depends on your inverter brand.
      </p>

      <h3>Huawei FusionSolar</h3>
      <p>
        The most commonly installed inverter brand in India. The FusionSolar app shows real-time power
        output in kW, daily and monthly generation in kWh, a breakdown of export versus self-consumption,
        and a fault log. Setup requires adding your inverter&apos;s serial number to the app and ensuring
        the inverter&apos;s built-in Wi-Fi or optional data logger dongle is connected to your home network.
        The app&apos;s dashboard is well-organised and suitable for daily checking without much technical
        knowledge.
      </p>

      <h3>Solis Cloud (Ginlong Solis Inverters)</h3>
      <p>
        Solis inverters use the Solis Cloud platform, which has a clean dashboard and a particularly
        useful feature: string-level performance data. If your system has two strings of panels and one
        string is producing significantly less than the other, Solis Cloud will show the discrepancy
        clearly. This makes it much easier to diagnose whether underperformance is coming from a
        specific group of panels - useful for identifying dust accumulation on one section of the roof
        or a failing panel connection.
      </p>

      <h3>Goodwe SEMS Portal</h3>
      <p>
        Goodwe&apos;s SEMS platform is available both as a mobile app and a full web dashboard. A standout
        feature is the weather overlay that shows expected generation based on local irradiance data
        alongside your actual generation. When actual output falls below expected output on a clear day,
        the gap tells you exactly how much performance is being lost - whether from dust, partial shade,
        or a component issue.
      </p>

      <h3>SolarEdge mySolarEdge</h3>
      <p>
        For systems using SolarEdge inverters with power optimizers fitted to individual panels,
        mySolarEdge provides panel-level monitoring - the most detailed view available in residential
        solar. You can see the output of each individual panel, which makes shade analysis precise.
        If a panel near your water tank is being shaded for two hours each afternoon, it shows up as
        a consistent dip in that one panel&apos;s contribution rather than a vague system underperformance.
      </p>

      <h3>Other Brands and Generic Data Loggers</h3>
      <p>
        If your inverter brand is not listed above, most modern grid-tied inverters support a Wi-Fi
        data logger dongle that connects to a cloud platform. Common platforms include Solar.web
        (Fronius), iSolarCloud (SMA), and various proprietary portals. If your inverter was installed
        without a data logger and you have no monitoring, ask your installer about adding one - most
        cost Rs 3,000-6,000 and retrofit easily.
      </p>

      <h2>Key Metrics to Check Every Day</h2>
      <p>
        You don&apos;t need to spend more than 2-3 minutes on your monitoring app each morning. These are
        the numbers that matter.
      </p>

      <h3>Today&apos;s Generation in kWh</h3>
      <p>
        Compare yesterday&apos;s figure against the same weekday from last week and, if available, the
        same period last month. A drop of more than 10% without an obvious weather explanation warrants
        a closer look. Seasonal variation is normal - expect lower output in June-July versus
        November-February - but sudden unexplained drops signal a problem.
      </p>

      <h3>Instantaneous Power During Peak Hours</h3>
      <p>
        Between 11 am and 2 pm on a clear day in Lucknow, a well-functioning 5 kW system should be
        producing between 3.5 and 4.5 kW. Significantly lower readings on a clear midday are the
        clearest signal that something is wrong - dust buildup, a disconnected string, or an inverter
        running in a reduced power mode. This is the single most useful quick-check metric.
      </p>

      <h3>Export Versus Self-Consumption Split</h3>
      <p>
        If you are consistently exporting more than 70-80% of your generation, it may indicate the
        system is slightly oversized for your consumption pattern, or that high-consumption appliances
        have been shifted to evening hours. This is not necessarily a problem - you are earning net
        metering credits - but understanding your split helps you decide whether shifting daytime loads
        like washing machines or water heaters would increase self-consumption and reduce bills further.
      </p>

      <h3>Performance Ratio</h3>
      <p>
        Some apps, including Goodwe SEMS and FusionSolar, display a performance ratio: the percentage
        of theoretical maximum generation given today&apos;s irradiance that your system actually achieved.
        A well-functioning system should show above 75-80%. Consistent readings below 75% on clear days
        indicate a system-level issue that needs investigation, not just a dusty panel.
      </p>

      <h2>Setting Alerts and Reading Fault Codes</h2>

      <h3>Minimum Daily Generation Alerts</h3>
      <p>
        Most apps allow you to set an alert that notifies you if daily generation falls below a threshold.
        For a 5 kW system in UP, a reasonable alert threshold for clear-season months is 15 kWh per day.
        In monsoon months, lower this to 8-10 kWh to avoid false alarms. An alert means you check the
        app more carefully and, if needed, contact your installer rather than letting an issue run silently
        for a full billing cycle.
      </p>

      <h3>Common Fault Codes and What They Mean</h3>
      <p>
        Grid voltage fault codes (often labeled E018 or similar depending on brand) indicate that UPPCL
        supply voltage is outside the inverter&apos;s acceptable range. This is usually a grid issue, not
        your system, and typically self-resolves within minutes to hours when supply normalises. If it
        repeats frequently, report it to UPPCL.
      </p>
      <p>
        ISO fault or insulation resistance fault codes indicate an earthing problem in your solar wiring.
        This needs an immediate call to your installer - do not ignore it. Over-temperature faults mean
        the inverter is running too hot, often because the ventilation around it is blocked. Ensure
        the inverter has clear airspace on all sides, especially in summer months in Sitapur, Hardoi,
        and other areas with extended heat.
      </p>

      <h3>Monthly Cross-Check Against Your UPPCL Bill</h3>
      <p>
        Each month, compare the cumulative export figure from your inverter app against the exported
        units recorded on your UPPCL net metering bill. A discrepancy of more than 5% over a full
        billing cycle suggests either the smart meter is not recording correctly or there is a
        communication issue between the meter and UPPCL&apos;s system. Document and report this to the
        UPPCL section office promptly - billing corrections are easier to address in the same cycle
        than months later.
      </p>

      <p>
        At Sunwize, monitoring app setup and configuration is part of every installation. We walk
        through the app with the customer on handover day, set appropriate alert thresholds for their
        system size, and ensure the Wi-Fi data logger is properly connected before we leave. Bringing
        three months of performance data from your app to your annual maintenance visit also helps our
        technicians spot degradation trends that a single-day inspection cannot reveal.
      </p>
      <BlogKeywords keywords={keywords} />
    </>
  );
}
