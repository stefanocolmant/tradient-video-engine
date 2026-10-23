import React from 'react';
import {Composition, type CalculateMetadataFunction} from 'remotion';
import {Reel} from './reel/Reel';
import {Sheet, sheetSize, type SheetProps} from './Sheet';
import {StyleCard} from './StyleCard';
import type {ReelProps} from './reel/context';
import {normalizeStyle} from './core/style.mjs';
import {resolveStoryboard} from './core/timeline.mjs';

// Shown when Studio opens without a video: three held scenes, no voice.
const demoStoryboard = {
  style: 'demo',
  scenes: [
    {type: 'title', hold: 2.4, props: {text: 'Pick a *style*', kicker: 'Tradient Video Engine'}},
    {type: 'number', hold: 2.4, props: {value: 3, label: 'ways to style every video'}},
    {type: 'list', hold: 3, props: {items: [{text: 'House style', icon: 'sparkles'}, {text: 'Your own style', icon: 'palette'}, {text: 'Train from examples', icon: 'wand-sparkles'}]}},
  ],
};
const demoStyle = normalizeStyle({id: 'demo', palette: {bg: '#040A20', bg2: '#0B1A44', accent: '#F2C14E', accent2: '#7FD8FF'}, background: {kind: 'luminous'}, finish: {bloom: 0.8, grain: 0.075, vignette: 0.45}});
const demo: ReelProps = {style: demoStyle as any, timeline: resolveStoryboard(demoStoryboard, [], demoStyle) as any, words: [], audit: false};

const sheetMeta: CalculateMetadataFunction<SheetProps> = ({props}) => ({...sheetSize(props.images.length, props.cols, props.cellW, props.cellH, props.title), durationInFrames: 1, fps: 30});
const sheetDemo: SheetProps = {images: [], labels: [], cols: 4, cellW: 300, cellH: 580};

const calculateMetadata: CalculateMetadataFunction<ReelProps> = ({props}) => ({
  durationInFrames: props.timeline.durationInFrames,
  fps: props.timeline.fps,
  width: props.timeline.width,
  height: props.timeline.height,
});

export const Root: React.FC = () => (
  <>
    <Composition id="Reel" component={Reel as any} defaultProps={demo as any} calculateMetadata={calculateMetadata as any} durationInFrames={demo.timeline.durationInFrames} fps={30} width={1080} height={1920} />
    <Composition id="Sheet" component={Sheet as any} defaultProps={sheetDemo as any} calculateMetadata={sheetMeta as any} durationInFrames={1} fps={30} width={1200} height={600} />
    <Composition id="StyleCard" component={StyleCard as any} defaultProps={{style: demoStyle, refs: [], why: {}} as any} durationInFrames={1} fps={30} width={1600} height={1000} />
  </>
);
