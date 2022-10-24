import React, { FC } from "react";
import ReactPaginate from "react-paginate";
import { PaginationProps } from "./Pagination.types";
import "./Pagination.scss";

const Pagination: FC<PaginationProps> = ({ onClick, page, pages }) => (
  <ReactPaginate
    breakLabel="..."
    nextLabel="Next 🡆"
    onPageChange={({ selected }) => onClick(selected + 1)}
    pageRangeDisplayed={5}
    pageCount={pages}
    previousLabel="🡄 Prev"
    renderOnZeroPageCount={() => onClick(1)}
    className={"pagination"}
    activeClassName={"activePage"}
    initialPage={0}
  />
);

export { Pagination };
