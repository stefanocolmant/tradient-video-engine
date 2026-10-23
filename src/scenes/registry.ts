import React from 'react';
import {Title, Statement} from './Title';
import {NumberScene} from './Number';
import {List, Compare} from './List';
import {Chart} from './Chart';
import {Flow, Timeline} from './Flow';
import {Quote, ImageScene, Hero, Grid, Split, CTA} from './Media';
import {Globe} from './Globe';
import {Phone} from './Phone';
import {CUSTOM} from './custom';
import {audit} from '../ui/audit';
import type {SceneProps} from './common';

const Custom: React.FC<SceneProps> = (props) => {
  const name = props.scene.props?.component;
  const C = name ? CUSTOM[name] : undefined;
  if (!C) { audit('unknown-custom-scene', props.scene.id, {component: name}); return null; }
  return React.createElement(C, props);
};

// Scene type -> component. The catalog of props for each lives in src/core/catalog.mjs.
export const SCENES: Record<string, React.FC<SceneProps>> = {
  title: Title,
  statement: Statement,
  number: NumberScene,
  list: List,
  compare: Compare,
  chart: Chart,
  flow: Flow,
  timeline: Timeline,
  quote: Quote,
  image: ImageScene,
  hero: Hero,
  grid: Grid,
  split: Split,
  cta: CTA,
  globe: Globe,
  phone: Phone,
  custom: Custom,
};
