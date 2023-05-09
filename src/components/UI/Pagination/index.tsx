import React, { memo } from 'react'
import ReactPaginate from 'react-paginate';
import './index.scss'

interface PaginationProps {
    onPageChange: (selectedItem: { selected: number; }) => void;
    pageCount: number;
    className?: string;
}

function Pagination(props: PaginationProps) {
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={props.onPageChange}
            pageRangeDisplayed={3}
            className={props.className}
            pageCount={props.pageCount}
            renderOnZeroPageCount={null}
            pageClassName={"pagination-item"}
            pageLinkClassName={"pagination-link"}
            previousClassName={"pagination-item"}
            previousLinkClassName={"pagination-link"}
            nextClassName={"pagination-item"}
            nextLinkClassName={"pagination-link"}
            breakClassName={"pagination-item"}
            breakLinkClassName={"pagination-link"}
            containerClassName={"pagination"}
            activeClassName={"active"}
        />
    )
}

export default memo(Pagination)