import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import theme from '../components/ui/Theme';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import LandingPage from '../components/LandingPage';

function App() {
  const [value, setValue] = useState(0);    // 控制 header menu 被選擇到的時候的值 (ex: 在 "/" 時，Home顏色會變粗 )
  const [selectedIndex, setSelectedIndex] = useState(0);  // 控制 header menu dropdown 被選擇到的時候的值

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/services" component={() => <div>services</div>} />
          <Route exact path="/customsoftware" component={() => <div>customsoftware</div>} />
          <Route exact path="/mobileapps" component={() => <div>mobileapps</div>} />
          <Route exact path="/websites" component={() => <div>websites</div>} />
          <Route exact path="/revolution" component={() => <div>revolution</div>} />
          <Route exact path="/about" component={() => <div>about</div>} />
          <Route exact path="/contact" component={() => <div>contact</div>} />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
        </Switch>
        <Footer 
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
