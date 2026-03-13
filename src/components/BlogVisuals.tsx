import React from 'react';

// ── Stat Row ─────────────────────────────────────────────────────────────────
export interface Stat { value: string; label: string; sub?: string; }
export const StatRow: React.FC<{ stats: Stat[] }> = ({ stats }) => (
  <div className="bv-stat-row">
    {stats.map((s, i) => (
      <div key={i} className="bv-stat-card">
        <div className="bv-stat-value">{s.value}</div>
        <div className="bv-stat-label">{s.label}</div>
        {s.sub && <div className="bv-stat-sub">{s.sub}</div>}
      </div>
    ))}
  </div>
);

// ── Horizontal Bar Chart ──────────────────────────────────────────────────────
export interface Bar { label: string; pct: number; note?: string; color?: string; }
export const HBarChart: React.FC<{ bars: Bar[]; title?: string }> = ({ bars, title }) => (
  <div className="bv-chart" role="img" aria-label={title ?? 'chart'}>
    {title && <div className="bv-chart-title">{title}</div>}
    {bars.map((b, i) => (
      <div key={i} className="bv-bar-row">
        <div className="bv-bar-label">{b.label}</div>
        <div className="bv-bar-track">
          <div className="bv-bar-fill" style={{ width: `${b.pct}%`, background: b.color ?? '#a855f7' }} />
        </div>
        <div className="bv-bar-value">{b.note ?? `${b.pct}%`}</div>
      </div>
    ))}
  </div>
);

// ── Flow Steps ────────────────────────────────────────────────────────────────
export interface FlowStep { label: string; icon?: string; }
export const FlowSteps: React.FC<{ steps: FlowStep[]; title?: string }> = ({ steps, title }) => (
  <div className="bv-flow">
    {title && <div className="bv-chart-title">{title}</div>}
    <div className="bv-flow-row">
      {steps.map((s, i) => (
        <React.Fragment key={i}>
          <div className="bv-flow-step">
            {s.icon && <div className="bv-flow-icon">{s.icon}</div>}
            <div className="bv-flow-label">{s.label}</div>
          </div>
          {i < steps.length - 1 && <div className="bv-flow-arrow" aria-hidden="true">→</div>}
        </React.Fragment>
      ))}
    </div>
  </div>
);

// ── Compare Table ─────────────────────────────────────────────────────────────
export interface CompareRow { feature: string; a: string | boolean; b: string | boolean; }

const RenderCell: React.FC<{ v: string | boolean }> = ({ v }) => {
  if (v === true) return <span className="bv-icon-yes" aria-label="yes">✓</span>;
  if (v === false) return <span className="bv-icon-no" aria-label="no">✗</span>;
  return <>{v as string}</>;
};

export const CompareTable: React.FC<{ rows: CompareRow[]; colA: string; colB: string; title?: string }> = ({ rows, colA, colB, title }) => (
  <div className="bv-compare" role="table" aria-label={title ?? 'comparison'}>
    <div className="bv-compare-header" role="row">
      <div className="bv-compare-hcell">{title ?? ''}</div>
      <div className="bv-compare-hcell">{colA}</div>
      <div className="bv-compare-hcell bv-col-b">{colB}</div>
    </div>
    {rows.map((r, i) => (
      <div key={i} className="bv-compare-row" role="row">
        <div className="bv-compare-cell bv-compare-feat">{r.feature}</div>
        <div className="bv-compare-cell"><RenderCell v={r.a} /></div>
        <div className="bv-compare-cell bv-compare-b"><RenderCell v={r.b} /></div>
      </div>
    ))}
  </div>
);

// ── Week Grid ─────────────────────────────────────────────────────────────────
export interface DayMeal { day: string; meal: string; type?: 'planned' | 'leftovers' | 'flex'; }
export const WeekGrid: React.FC<{ days: DayMeal[]; title?: string }> = ({ days, title }) => (
  <div className="bv-week-wrap">
    {title && <div className="bv-chart-title">{title}</div>}
    <div className="bv-week-grid" role="region" aria-label="Weekly meal plan example">
      {days.map((d, i) => (
        <div key={i} className={`bv-week-day${d.type ? ` is-${d.type}` : ''}`}>
          <div className="bv-week-dn">{d.day}</div>
          <div className="bv-week-meal">{d.meal}</div>
        </div>
      ))}
    </div>
    <div className="bv-week-legend">
      <span><span className="bv-dot is-planned" />Planned</span>
      <span><span className="bv-dot is-leftovers" />Leftovers</span>
      <span><span className="bv-dot is-flex" />Flexible</span>
    </div>
  </div>
);
