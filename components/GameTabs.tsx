import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import GeneralTabContent from './GeneralTabContent';
import LineupsTabContent from './LineupsTabContent';
import BoxTabContent from './BoxTabContent';

const GameTabs = () => {
  return (
    <section className="px-content py-content">
      <div className="content-container">
        <h2>Game Details</h2>

        <TabGroup className="space-y-4">
          <TabList className="space-x-4">
            <Tab className="tab">General</Tab>
            <Tab className="tab">Lineups</Tab>
            <Tab className="tab">Box</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <GeneralTabContent />
            </TabPanel>
            <TabPanel>
              <LineupsTabContent />
            </TabPanel>
            <TabPanel>
              <BoxTabContent />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  );
};

export default GameTabs;
