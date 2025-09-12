import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { GameResponse } from '@/types/statsAPI';
import Section from '@/components/ui/Section';
import GeneralTabContent from './GeneralTabContent';
import LineupsTabContent from './LineupsTabContent';
import BoxTabContent from './BoxTabContent';

type GameTabsProps = {
  liveGameData: GameResponse;
  tabIndex: number;
  onTabChange: (index: number) => void;
  gameState: string | undefined;
};

const GameTabs = ({
  liveGameData,
  tabIndex,
  onTabChange,
  gameState,
}: GameTabsProps) => {
  return (
    <Section>
      <div className="content-container">
        <h2>Game Details</h2>

        <TabGroup
          selectedIndex={tabIndex}
          onChange={onTabChange}
          className="space-y-3 md:space-y-5 lg:space-y-6"
        >
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
              <BoxTabContent
                liveGameData={liveGameData}
                gameState={gameState}
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </Section>
  );
};

export default GameTabs;
