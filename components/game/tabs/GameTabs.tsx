import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { GameResponse } from '@/types/statsAPI';
import Section from '@/components/ui/Section';
import GeneralTabContent from './GeneralTabContent';
import LineupsTabContent from './LineupsTabContent';
import BoxTabContent from './BoxTabContent';

type GameTabsProps = {
  liveGameData: GameResponse;
};

const GameTabs = ({ liveGameData }: GameTabsProps) => {
  return (
    <Section>
      <div className="content-container">
        <h2>Game Details</h2>

        <TabGroup className="space-y-3 md:space-y-5 lg:space-y-6">
          <TabList>
            <Tab className="tab">General</Tab>
            <Tab className="tab">Lineups</Tab>
            <Tab className="tab">Box</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <GeneralTabContent liveGameData={liveGameData} />
            </TabPanel>
            <TabPanel>
              <LineupsTabContent liveGameData={liveGameData} />
            </TabPanel>
            <TabPanel>
              <BoxTabContent />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </Section>
  );
};

export default GameTabs;
