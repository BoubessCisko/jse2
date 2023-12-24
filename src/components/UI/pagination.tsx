
// create pagination component

import Link from "next/link";


interface PaginationProps {
    currentPage: number;
    totalPages: number;}

function Pagination({ currentPage, totalPages}:  PaginationProps) {

    const maxPage =Math.min(totalPages, Math.min(currentPage + 4, 10))
    const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9))
   
    const numberedPageItems :JSX.Element[] = []

    for (let page = minPage; page <= maxPage; page++) {
        numberedPageItems.push(
            <Link
                key={page}
                href={"?page=" + page}
                className={`join-item btn ${page === currentPage ? "btn-active pointer-events-none" : ""}`}
            >
                <span className="join-item btn">
                    {page}
                </span>
            </Link>
        )   
    }

    return (
        <div  className=" flex flex-row items-center justify-center space-x-4 mt-5 ">
        <div className=" join hidden sm:block">{numberedPageItems}</div>
          <div className="join block sm:hidden"> 
            {currentPage > 1 && (
                <Link href={"?page=" + (currentPage - 1)}   className="join-item btn" > 
                    {"<<"}
                </Link>
            )}
            <button className="join-item btn pointer-events-none">
                Page {currentPage}
            </button>

            {currentPage < totalPages && (
                <Link href={"?page=" + (currentPage + 1)}
                    className="join-item btn"> {">>"}
                </Link>
            )}
        </div>
        </div>
    )

}

export default Pagination
