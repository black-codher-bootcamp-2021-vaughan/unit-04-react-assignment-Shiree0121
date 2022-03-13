// import React from "react";

// const pagination = useRef();

// console.log(pagination);

//   const perPage = 25;

//   const setPage = ({ selected }) =>
//     console.log(selected === 0 ? 1 : selected * perPage);

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2 onClick={e => pagination.current.setState({ selected: 10 - 1 })}>
//         Start editing to see some magic happen!
//       </h2>
//       <ReactPaginate
//         ref={pagination}
//         pageCount={Math.ceil(613 / 25)}
//         pageRangeDisplayed={4}
//         marginPagesDisplayed={1}
//         onPageChange={setPage}
//         containerClassName="pagination"
//         activeClassName="active"
//         pageLinkClassName="page-link"
//         breakLinkClassName="page-link"
//         nextLinkClassName="page-link"
//         previousLinkClassName="page-link"
//         pageClassName="page-item"
//         breakClassName="page-item"
//         nextClassName="page-item"
//         previousClassName="page-item"
//         previousLabel={<>&laquo;</>}
//         nextLabel={<>&raquo;</>}
//       />
//     </div>
//   );
// }

// const Pagination = (props) => {
//   function handleNumPage(e) {
//     props.setItemsPerPage(e.target.value);
//   }
//   return (
//     <>
//       <div className="Pages">
//         <form>
//           <form.Label>Items per page</form.Label>
//           <form.Control
//             as="select"
//             value={props.itemsCoutPerPage}
//             onChange={(e) => handleNumPage(e)}
//           >
//             <option value="select">Select</option>
//             <option value="3">3</option>
//             <option value="5">5</option>
//             <option value="10">10</option>
//             <option value="15">15</option>
//           </form.Control>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Pagination;