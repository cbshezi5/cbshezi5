"use client";

import { useRef, useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";

type Screen = { image: string; title: string; caption: string; width: number; height: number };
type Project = { name: string; slug: string; headline: string; description: string; screens: Screen[] };

export function PassionGallery({ projects }: { projects: Project[] }) {
  return <div className="passion-grid">{projects.map(project => <AppGallery key={project.slug} project={project} />)}</div>;
}

function AppGallery({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const screen = project.screens[index];
  const move = (direction: number) => setIndex(current => (current + direction + project.screens.length) % project.screens.length);
  const path = (image: string) => `./passion/${project.slug}/${image}`;

  return <article className={`passion-project passion-${project.slug}`}>
    <Dialog open={open} onOpenChange={value => { setOpen(value); if (value) setIndex(0); }}>
      <DialogTrigger className="app-preview" aria-label={`Open ${project.name} screenshot story, ${project.screens.length} screens`}>
        {/* oxlint-disable-next-line nextjs/no-img-element */}
        <img src={path(project.screens[0].image)} alt={`${project.name} application preview`} width={project.screens[0].width} height={project.screens[0].height} loading="lazy" />
        <span className="app-preview-copy"><strong>{project.name}</strong><span>{project.headline}</span><span className="app-open mono">View story · {project.screens.length} screens ↗</span></span>
      </DialogTrigger>
      <DialogContent className="app-viewer" onKeyDown={event => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1);
        }
      }}>
        <DialogTitle className="viewer-title">{project.name}</DialogTitle>
        <DialogDescription className="viewer-description">{project.description}</DialogDescription>
        <div className="viewer-stage" onTouchStart={event => {
          const point = event.touches[0]; touch.current = { x: point.clientX, y: point.clientY };
        }} onTouchCancel={() => { touch.current = null; }} onTouchEnd={event => {
          const start = touch.current; touch.current = null;
          if (!start) return;
          const point = event.changedTouches[0];
          const dx = point.clientX - start.x; const dy = point.clientY - start.y;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
        }}>
          {/* oxlint-disable-next-line nextjs/no-img-element */}
          <img key={screen.image} src={path(screen.image)} alt={`${project.name}: ${screen.title}`} width={screen.width} height={screen.height} />
        </div>
        <div className="viewer-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous screenshot">←</button>
          <span className="mono" aria-live="polite" aria-atomic="true">{index + 1} / {project.screens.length} · {screen.title}</span>
          <button type="button" onClick={() => move(1)} aria-label="Next screenshot">→</button>
        </div>
        <p className="viewer-caption">{screen.caption}</p>
        <p className="viewer-help mono">Swipe or use ← → to explore · Esc to close</p>
      </DialogContent>
    </Dialog>
  </article>;
}
