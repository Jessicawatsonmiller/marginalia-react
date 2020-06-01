import React, { Component } from 'react';
import { ReactReader } from "react-reader";
import { EpubView } from "react-reader";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{ position: "relative", height: "500px", width: "100%" }}>
        {"Now Reading"}
        {/*}* Container needs a height..*/}
        <EpubView
          url={"https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf"}
          title={"Moby Dick"}
          location={"epubcfi(/6/2[cover]!/6)"}
          locationChanged={epubcifi => console.log(epubcifi)}
          tocChanged={toc => console.log(toc)}
          zindex={"-10"}
        />
      </div>
    );
  }
}

export default App;
