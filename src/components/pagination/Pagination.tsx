
import './pagination.css';

interface PaginationProps {
    page: number,
    totalPages: number
}

const Pagination : React.FC<PaginationProps> = ({ page, totalPages }) => {

    return (
        <div className="pagination-container">
            <div className="pagination">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <a
                        href="#"
                        className={index === page ? 'active' : ''}
                        key={index}
                    >
                        {index + 1}
                    </a>
                ))}
            </div>
        </div>
    )

}

export default Pagination;