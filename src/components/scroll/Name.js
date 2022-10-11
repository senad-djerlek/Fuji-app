// import React, { useEffect, useState } from "react";

// import { getImages } from "./helpers/api";
// //style

// const GlobalStyle = createGlobalStyle`
// *{
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }
// body{
//   font-family: sans-serif;
// }
// `;

// const WrapperImage = styled.section`
//   max-width: 70rem;
//   margin: 4rem auto;
//   display: grid;
//   grid-gap: 5em 3em;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   grid-auto-rows: 300px;
// `;

// function App() {
//   const [offset, setOffset] = useState(0);
//   const [data, setData] = useState([]);

//   const fetchData = async (page) => {
//     const data = await getImages(page);
//     setData((prevValue) => [...prevValue, ...data.data]);
//   };

//   useEffect(() => {
//     fetchData(offset);
//   }, []);

//   useEffect(() => {
//     setOffset(offset + 12);
//   }, [data]);

//   return (
//     <div className="App">
//       <Heading />
//       <GlobalStyle />

//       <InfiniteScroll
//         dataLength={data.length}
//         next={() => fetchData(offset)}
//         hasMore={true}
//         loader={<Loader />}
//       >
//         <WrapperImage>
//           {data.map((item, index) => (
//             <Card item={item} key={index} />
//           ))}
//         </WrapperImage>
//       </InfiniteScroll>
//     </div>
//   );
// }

// export default App;
