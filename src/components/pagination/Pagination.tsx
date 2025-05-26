
import './pagination.css';

interface PaginationProps {
    page: number,
    totalPages: number,
    onPageChange: (newPage: number) => void;
}

const Pagination : React.FC<PaginationProps> = ({ page, totalPages, onPageChange }) => {

    return (
        <div className="pagination-container">
            <div className="pagination">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <a
                        className={index === page ? 'active' : ''}
                        key={index}
                        onClick={(e) => {
                            e.preventDefault();
                            onPageChange(index);
                            }}
                    >
                        {index + 1}
                    </a>
                ))}
            </div>
        </div>
    )

}

export default Pagination;