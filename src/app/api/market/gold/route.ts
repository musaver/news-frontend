import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type SupportedCurrency = 'USD' | 'PKR' | 'AED' | 'SAR';

const SUPPORTED_CURRENCIES: SupportedCurrency[] = ['USD', 'PKR', 'AED', 'SAR'];

// Mock exchange rates (approximate, for demo purposes)
const MOCK_FX_RATES = {
  USD: 1,
  PKR: 278.5,
  AED: 3.67,
  SAR: 3.75,
};

// Base mock gold price in USD per ounce
const BASE_GOLD_PRICE_USD = 2650;

function parseCurrencies(param: string | null): SupportedCurrency[] {
  if (!param) return SUPPORTED_CURRENCIES;
  const requested = param
    .split(',')
    .map((s) => s.trim().toUpperCase())
    .filter(Boolean);

  const filtered = requested.filter((c): c is SupportedCurrency =>
    (SUPPORTED_CURRENCIES as string[]).includes(c)
  );

  return filtered.length ? filtered : SUPPORTED_CURRENCIES;
}

/**
 * Generate a simulated gold price with small random variation
 * to make the chart look "live" when polling.
 */
function getMockGoldPrice(): number {
  // Add ±0.5% random variation
  const variation = (Math.random() - 0.5) * 2 * 0.005;
  return BASE_GOLD_PRICE_USD * (1 + variation);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const currencies = parseCurrencies(searchParams.get('curr'));

  // Simulate a small delay to mimic real API
  await new Promise((resolve) => setTimeout(resolve, 100));

  const xauusd = getMockGoldPrice();

  const converted: Record<SupportedCurrency, number> = {
    USD: xauusd,
    PKR: xauusd * MOCK_FX_RATES.PKR,
    AED: xauusd * MOCK_FX_RATES.AED,
    SAR: xauusd * MOCK_FX_RATES.SAR,
  };

  // Filter output to requested currencies
  const prices: Partial<Record<SupportedCurrency, number>> = {};
  for (const c of currencies) prices[c] = converted[c];

  return NextResponse.json(
    {
      unit: 'oz',
      metal: 'XAU',
      base: 'USD',
      xauusd,
      prices,
      updatedAt: new Date().toISOString(),
      sources: {
        gold: 'mock-demo',
        fx: 'mock-demo',
      },
    },
    {
      headers: {
        // Short cache for demo; client still polls every 60s
        'Cache-Control': 'public, max-age=0, s-maxage=10, stale-while-revalidate=30',
      },
    }
  );
}
