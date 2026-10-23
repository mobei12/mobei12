import './work.css';

/** 简单的样式化架构图：rows = [[{t, d, hi}], ...]，每行之间自动画箭头 */
export default function Flow({ title, rows, note }) {
  return (
    <figure className="wk-flow">
      {title && <figcaption>{title}</figcaption>}
      {rows.map((row, i) => (
        <div key={i}>
          {i > 0 && <div className="wk-arrow">↓</div>}
          <div className="wk-row">
            {row.map((n) => (
              <div key={n.t} className={`wk-node${n.hi ? ' wk-hi' : ''}`}>
                <b>{n.t}</b>
                {n.d && <span>{n.d}</span>}
              </div>
            ))}
          </div>
        </div>
      ))}
      {note && <p className="wk-note">{note}</p>}
    </figure>
  );
}

export function Draft() {
  return <span className="wk-draft">草稿 · 待作者审阅</span>;
}
