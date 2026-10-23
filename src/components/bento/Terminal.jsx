import { useEffect, useRef, useState } from 'react';
import { withBase } from '@rspress/core/runtime';

const CMDS = {
  help: () => ['可用命令: help, whoami, zenflux, work, stack, projects, cv, clear'],
  whoami: () => ['MoBei（漠北）· AI Agent 前端架构', '让 Agent 说出可交互界面 · 西安本科 · 深漂'],
  zenflux: () => [
    'Zenflux（ZenfluxAIOS）· AI Agent 前端架构 · 2025.10 至今',
    '› 让 Agent 说出界面：A2UI 协议与生成式 UI 运行时',
    '› 对话流式卡片 / 意图契约 / 嵌入桥 / MCP 管理',
    '› Widget 生态：Manifest · Studio · 发布与版本',
    '› Ontology 对话驱动的页面配置',
    '› Token 合同 · AI 编码治理 · Monorepo 底座',
    "› 输入 'work' 打开工作项目页",
  ],
  work: () => { if (typeof window !== 'undefined') setTimeout(() => { window.location.href = withBase('/work/'); }, 400); return ['正在打开 /work/ ...']; },
  stack: () => ['frontend: React 19, TypeScript, Vite, Tailwind, Vue, Svelte', 'backend : Go (Gin/GORM), Node.js, Express', 'tooling : Turborepo, pnpm, Tauri, Rsbuild, webpack, Git', 'learning: Rust 🦀'],
  projects: () => ['React-ts-webpack  React + TS + Webpack 模板', 'proxychains-rs    Rust 版 proxychains', 'vite-svelte       Vite + Svelte playground'],
};

export default function Terminal() {
  const [lines, setLines] = useState([{ t: 'sys', s: "输入 'help' 查看命令" }]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const body = useRef(null);
  const inp = useRef(null);
  useEffect(() => { if (body.current) body.current.scrollTop = body.current.scrollHeight; }, [lines]);

  const type = async (out) => {
    const fast = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    setBusy(true);
    for (const l of out) {
      if (fast) { setLines((p) => [...p, { t: 'out', s: l }]); continue; }
      setLines((p) => [...p, { t: 'out', s: '' }]);
      for (let i = 1; i <= l.length; i += 2) {
        await new Promise((r) => setTimeout(r, 12));
        setLines((p) => { const c = p.slice(); c[c.length - 1] = { t: 'out', s: l.slice(0, i + 1) }; return c; });
      }
    }
    setBusy(false);
  };
  const run = (e) => {
    e.preventDefault();
    if (busy) return;
    const cmd = input.trim().toLowerCase();
    setInput('');
    if (cmd === 'clear') return setLines([]);
    setLines((p) => [...p, { t: 'in', s: cmd }]);
    if (!cmd) return;
    if (cmd === 'cv') { type(['正在打开简历…']); setTimeout(() => (window.location.href = withBase('/cv/')), 600); return; }
    type(CMDS[cmd] ? CMDS[cmd]() : [`command not found: ${cmd}，试试 help`]);
  };
  return (
    <div className="bx-term" onClick={() => inp.current?.focus({ preventScroll: true })}>
      <div className="bx-term-bar"><i /><i /><i /><span>mobei@zenflux: ~</span></div>
      <div className="bx-term-body" ref={body}>
        {lines.map((l, i) => (
          <div key={i} className={`bx-l-${l.t}`}>{l.t === 'in' && <b>❯ </b>}{l.s}</div>
        ))}
        <form onSubmit={run} className="bx-term-input">
          <b>❯</b>
          <input ref={inp} value={input} onChange={(e) => setInput(e.target.value)} aria-label="终端输入" autoComplete="off" spellCheck="false" />
        </form>
      </div>
    </div>
  );
}
