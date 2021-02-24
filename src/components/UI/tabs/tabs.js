import { Component } from 'react';
import Tab from './tab';
import TabContent from './tabContent';

class Tabs extends Component {

  state = {
    activeSubTab: 'tab-1-subtab-1',
    activeTab: 'tab-1',
    heading: 'introduction',
  };

  tabClickHandler = (event, tab, subTab) => {
    event.stopPropagation();
    this.setState({ activeTab: tab.id, activeSubTab: subTab.id, heading: tab.name });
  };

  subTabClickHandler = (event, { id }) => {
    event.stopPropagation();
    this.setState({ activeSubTab: id });
  };

  activeTabHandler = (activeTab, tab) => {
    return activeTab === tab.id;
  };

  render() {
    const tabs = this.props.tabs.map(tab => (
      <Tab activeClass={this.activeTabHandler(this.state.activeTab, tab) ? 'active' : null} key={tab.id} tabName={tab.name} clicked={(event) => this.tabClickHandler(event, tab, tab.subTabs[0])}>
        {tab.subTabs.map(subTab => (
          this.activeTabHandler(this.state.activeTab, tab) ? <Tab activeClass={this.activeTabHandler(this.state.activeSubTab, subTab) ? 'active' : null} key={subTab.id} tabName={subTab.name} clicked={(event) => this.subTabClickHandler(event, subTab)}></Tab> : null
        ))}
      </Tab>
    ));

    const tabsContent = Object.keys(this.props.content).map(item => (
      this.state.activeSubTab === this.props.content[item].activeSubTab ? <TabContent key={this.props.content[item].activeSubTab}>{this.props.content[item].value}</TabContent> : null
    ));

    return (
      <>
        <ul className="tabs">
          {tabs}
        </ul>
        <div className="tabs-content">
          <h2 className="heading">{this.state.heading}</h2>
          <p>{tabsContent}</p>
        </div>
      </>
    )
  }
};

export default Tabs;
