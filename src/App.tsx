import React, {useState, useEffect} from 'react';
import { ReactReader, EpubView } from "react-reader";
import logo from './logo.svg';
import './App.css';
import { database } from './firebase';
//import Aside from './Aside'

function CoolComponent(props: {name: string}) {
  // console.log('props is', props)

  return <div>{props.name} is super cool</div>

}

function App() {
  // TODO: Currently trying to add this function to render a sidebar in preparation for commenting
  // Stuck on working out what object to pass to this function that has the attributes target, children, moveDown
  //Aside({target: null, children: 'blah2', moveDown: 'blah3' });

  const onLocationChanged = (newLocation: string) => {
    console.log('new location', newLocation)
  }

  const [location, setLocation] = useState("")

  // CoolComponent({
  //   name: "asjkdfhaksjdhf"
  // })

  // EpubView({
  //   url: "https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf",
  //   title: "Moby Dick",
  //   // ....
  // })

  const [data, setData] = useState('loading')

  database.ref('/Books/Guru Papers').on('value', (snapshot) => {
    const newVal = snapshot.val().name
    if (data != newVal) setData(newVal)
  });
  console.log(data)

  return (
    <div style={{width:"100%", height:"100%"}}>
      <div style={{
        position:'fixed',
        left: 0,
        top: 0,
        backgroundColor:'hotpink',
        color: 'black',
        width: '300px',
        height:'500px',
        zIndex: -1,
      }}>
        Data is {data}
      </div>

      {/*}* Container needs a height..*/}
      {/* url="https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf" */}
      <ReactReader
        url="https://gerhardsletten.github.io/react-reader/files/alice.epub"
        title="Alice in Wonderland"
        location={location||null}
        locationChanged={(epubcifi: string) => {
          console.log('navigate to', epubcifi)
          setLocation(epubcifi)
        }}
        showToc={true}
        tocChanged={(toc: string) => console.log(toc)}
      />
    </div>
  );
}

export default App;
