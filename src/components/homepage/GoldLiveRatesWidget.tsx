'use client';

import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, YAxis } from 'recharts';
import SectionHeader from './SectionHeader';

type SupportedCurrency = 'USD' | 'PKR' | 'AED' | 'SAR';

type GoldRatesResponse = {
  unit: 'oz';
  metal: 'XAU';
  base: 'USD';
  xauusd: number;
  prices: Partial<Record<SupportedCurrency, number>>;
  updatedAt: string;
  sources?: {
    gold?: string;
    fx?: string;
  };
};

type ChartPoint = {
  t: number;
  usd: number;
};

function formatMoney(value: number, currency: SupportedCurrency) {
  if (!Number.isFinite(value)) return '—';
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(value);
}

function timeAgo(iso: string) {
  const ts = Date.parse(iso);
  if (!Number.isFinite(ts)) return '';
  const diffSec = Math.max(0, Math.floor((Date.now() - ts) / 1000));
  if (diffSec < 60) return `${diffSec}s ago`;
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHr = Math.floor(diffMin / 60);
  return `${diffHr}h ago`;
}

export default function GoldLiveRatesWidget() {
  const [data, setData] = React.useState<GoldRatesResponse | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [points, setPoints] = React.useState<ChartPoint[]>([]);

  const load = React.useCallback(async () => {
    try {
      setError(null);
      const res = await fetch('/api/market/gold?curr=USD,PKR,AED,SAR', { cache: 'no-store' });
      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`HTTP ${res.status}: ${text.slice(0, 200)}`);
      }
      const json = (await res.json()) as GoldRatesResponse;
      if (!json || typeof json.xauusd !== 'number') throw new Error('Bad response');

      setData(json);
      setPoints((prev) => {
        const next = [...prev, { t: Date.now(), usd: json.xauusd }];
        return next.slice(-60); // ~ last 60 minutes (1 point/minute)
      });
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Failed to load';
      setError(msg);
    }
  }, []);

  React.useEffect(() => {
    let mounted = true;
    void (async () => {
      if (!mounted) return;
      await load();
    })();

    const id = window.setInterval(() => void load(), 60_000);
    return () => {
      mounted = false;
      window.clearInterval(id);
    };
  }, [load]);

  const prices = data?.prices ?? {};
  const updatedText = data?.updatedAt ? timeAgo(data.updatedAt) : '';

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="mb-3">
        <SectionHeader title="Gold Live Rates" showViewAll={false} />
      </div>

      <div className="h-[120px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={points} margin={{ top: 8, right: 8, bottom: 8, left: 8 }}>
            <YAxis
              domain={['dataMin - 1', 'dataMax + 1']}
              hide
            />
            <Tooltip
              contentStyle={{ fontSize: 12 }}
              labelFormatter={() => ''}
              formatter={(value: any) => [`$${Number(value).toFixed(2)} / oz`, 'XAU/USD']}
            />
            <Line
              type="monotone"
              dataKey="usd"
              stroke="#cc0000"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {(['USD', 'PKR', 'AED', 'SAR'] as SupportedCurrency[]).map((c) => (
          <div key={c} className="rounded-md border border-slate-200 p-2">
            <div className="text-xs text-slate-500">{c}</div>
            <div className="text-sm font-semibold text-slate-900">
              {formatMoney(prices[c] ?? NaN, c)}
            </div>
            <div className="text-[11px] text-slate-500">per oz</div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-[11px] text-slate-500">
        {error ? (
          <span className="text-red-600">Failed to update: {error}</span>
        ) : (
          <span>
            Updated {updatedText || '—'}
            {data?.sources?.gold || data?.sources?.fx ? (
              <span>
                {' '}
                · Sources: {data?.sources?.gold ?? '—'} / {data?.sources?.fx ?? '—'}
              </span>
            ) : null}
          </span>
        )}
      </div>
    </div>
  );
}


