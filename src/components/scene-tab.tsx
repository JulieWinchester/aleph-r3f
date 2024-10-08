import { AmbientLightSelector } from './ambient-light-selector';
import { AxesSelector } from './axes-selector';
import { BoundsSelector } from './bounds-selector';
import { GridSelector } from './grid-selector';
import { Tab } from './tab';

function SceneTab() {
  return (
    <Tab>
      <BoundsSelector />
      <GridSelector />
      <AxesSelector />
      <AmbientLightSelector />
    </Tab>
  );
}

export default SceneTab;
