import { Component } from 'react';
import Tabs from './components/UI/tabs/tabs';

const tabs = [
  {
    id: 'tab-1',
    name: 'introduction',
    subTabs: [
      { id: 'tab-1-subtab-1', name: 'what is react.js', content: 'What is react.js : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
      { id: 'tab-1-subtab-2', name: 'getting started', content: 'Getting started: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' }
    ]
  },
  {
    id: 'tab-2',
    name: 'the instance',
    subTabs: [
      { id: 'tab-2-subtab-1', name: 'creating a instance', content: 'Creating a instance: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
      { id: 'tab-2-subtab-2', name: 'data and methods', content: 'Data and methods: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
      { id: 'tab-2-subtab-3', name: 'instance lifecycle hooks', content: 'Instance lifecycle hooks: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' }
    ]
  },
  {
    id: 'tab-3',
    name: 'list rendering',
    subTabs: [
      { id: 'tab-3-subtab-1', name: 'mapping an array to elements', content: 'Mapping an array to elements: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
    ]
  },
];

let content = {};
tabs.map(tab => {
  return tab.subTabs.map(subTab => {
    return content = { ...content, [subTab.name]: { activeSubTab: subTab.id, value: subTab.content }}
  });
});

class App extends Component {
  render() {
    return <Tabs tabs={tabs} content={content} />;
  }
};

export default App;
