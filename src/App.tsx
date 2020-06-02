import React, {useState, useEffect} from 'react';
import { ReactReader, EpubView } from "react-reader";
import logo from './logo.svg';
import './App.css';



function CoolComponent({name}: {name: string}) {
  // console.log('props is', props)

  return <div>{name} is super cool</div>

}


function App() {
  const onLocationChanged = (newLocation: string) => {
    console.log('new location', newLocation)
  }

  // CoolComponent({
  //   name: "asjkdfhaksjdhf"
  // })

  // EpubView({
  //   url: "https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf",
  //   title: "Moby Dick",
  //   // ....
  // })

  return (
    <div style={{ position: "relative", height: "500px", width: "100%" }}>
      Now Reading
      <CoolComponent name="asdfasdf" />
      {/*}* Container needs a height..*/}
      <EpubView
        url="https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf"
        title="Moby Dick"
        location="epubcfi(/6/2[cover]!/6)"
        locationChanged={(epubcifi: string) => {
          console.log('navigate to', epubcifi)
        }}
        tocChanged={(toc: string) => console.log(toc)}
      />
    </div>
  );
}

export default App;
