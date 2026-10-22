import { withBase } from '@rspress/core/runtime';
import { Particles, TiltCard, ScrambleText, CountUp } from './Effects';
import Terminal from './Terminal';
import './bento.css';

const STACK = ['React 19', 'TypeScript', 'Vite', 'Tailwind', 'Vue', 'Svelte', 'Go', 'Node.js', 'Express', 'Python', 'Turborepo', 'pnpm', 'Tauri', 'Rsbuild', 'webpack', 'Git', 'eCharts', 'DataV', 'Rust 🦀'];
const PROJECTS = [
  { name: 'React-ts-webpack', desc: 'React + TS + Webpack 模板（含 Rsbuild 版本）', url: 'https://github.com/mobei12/React-ts-webpack' },
  { name: 'proxychains-rs', desc: 'Rust 实现的 proxychains', url: 'https://github.com/mobei12/proxychains-rs' },
  { name: 'vite-svelte', desc: 'Vite + Svelte playground', url: 'https://github.com/mobei12/vite-svelte' },
];

export default function Home() {
  return (
    <div className="bx-root">
      <Particles />
      <div className="bx-grid">
        <TiltCard className="bx-intro bx-shiny">
          <img src={withBase('/mobei12.png')} alt="MoBei" className="bx-avatar" />
          <p className="bx-kicker">Hi, I'm</p>
          <h1 className="bx-name"><ScrambleText text="MOBEI · 漠北" /></h1>
          <p className="bx-lead">全栈开发工程师 · 现于 <b>Zenflux</b> 做 AI Agent 平台（ZenfluxAIOS）。记录，分享。</p>
          <div className="bx-actions">
            <a className="bx-btn bx-btn-pri" href={withBase('/article/')}>查看文章</a>
            <a className="bx-btn" href={withBase('/cv/')}>关于我</a>
          </div>
        </TiltCard>

        <TiltCard className="bx-work">
          <p className="bx-label">● 当前工作</p>
          <h3>Zenflux · ZenfluxAIOS</h3>
          <ul>
            <li>Ontology 低代码 Interface 配置平台</li>
            <li>Widget 协议、注册与发布流水线、开发者中心</li>
            <li>Agent 驱动 UI：A2UI、iframe 嵌入</li>
            <li>Go 后端 · Python Agent Runtime · Tauri 桌面 AI CLI</li>
          </ul>
        </TiltCard>

        <TiltCard className="bx-stat">
          <p className="bx-label">GitHub</p>
          <div className="bx-nums">
            <div><div className="bx-num"><CountUp to={16} /></div><span>公开仓库</span></div>
            <div><div className="bx-num"><CountUp to={17} /></div><span>Followers</span></div>
            <div><div className="bx-num"><CountUp to={2015} duration={1600} /></div><span>加入 GitHub</span></div>
          </div>
        </TiltCard>

        <TiltCard className="bx-term-card"><Terminal /></TiltCard>

        <TiltCard className="bx-stack">
          <p className="bx-label">技术栈及工具链</p>
          {[0, 1].map((row) => (
            <div key={row} className={`bx-marquee ${row ? 'bx-rev' : ''}`}>
              <div className="bx-track">
                {[...STACK, ...STACK].map((s, i) => <span key={i} className="bx-chip">{s}</span>)}
              </div>
            </div>
          ))}
        </TiltCard>

        <TiltCard className="bx-graph">
          <p className="bx-label">Contributions</p>
          <a href="https://github.com/mobei12" target="_blank" rel="noreferrer">
            <img src="https://ghchart.rshah.org/8b5cf6/mobei12" alt="mobei12 GitHub 贡献图" loading="lazy" />
          </a>
        </TiltCard>

        <TiltCard className="bx-projects">
          <p className="bx-label">项目</p>
          {PROJECTS.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="bx-proj">
              <b>{p.name} ↗</b><span>{p.desc}</span>
            </a>
          ))}
        </TiltCard>

        <TiltCard className="bx-loc">
          <p className="bx-label">坐标 & 联系</p>
          <h3>📍 深圳 · 来自西安</h3>
          <p className="bx-muted">爱好：电影🎬 单车🚲 音乐🎵 做饭👨‍🍳</p>
          <div className="bx-links">
            <a href="https://github.com/mobei12" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://juejin.cn/user/571401775883960" target="_blank" rel="noreferrer">掘金</a>
            <a href="mailto:mobeigege@icloud.com">Email</a>
          </div>
        </TiltCard>
      </div>
    </div>
  );
}
