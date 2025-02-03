"use client";

const PagiationSection = ({
  currentPage,
  endPage,
  className,
  setCurrentPage,
}: {
  startPage: number;
  endPage: number;
  className?: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < endPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (endPage >= 1) return null;

  return (
    <div
      className={`h-[36.34px] flex justify-start items-center gap-[2.42px] ${className} `}
    >
      <div
        onClick={handlePrev}
        className="w-[81.15px] h-[36.34px] rounded-lg flex justify-center items-center gap-[12.11px] bg-transparent  cursor-pointer"
      >
        <div className="text-center text-[#d2d2e1] hover:text-[#239d60] text-xs font-semibold font-['Inter'] leading-3">
          Previous
        </div>
      </div>
      {Array.from({ length: endPage }, (_, index) => {
        const pageNumber = index + 1;
        const isActive = pageNumber === currentPage; // Use currentPage for active state
        return (
          <div
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={`w-[36.34px] hover:text-white  hover:bg-[#26ac69] h-[36.34px] rounded-lg flex justify-center items-center ${
              isActive
                ? "bg-[#239d60] text-white"
                : "bg-transparent text-[#7e8299]"
            } cursor-pointer`}
          >
            <div
              className={`text-center text-sm font-semibold font-['Inter'] leading-[14px]`}
            >
              {pageNumber}
            </div>
          </div>
        );
      })}
      <div
        onClick={handleNext}
        className={`  w-[50.87px] h-[36.34px] rounded-lg flex justify-center items-center gap-[12.11px] bg-transparent cursor-pointer`}
      >
        <div className="text-center text-[#fff] hover:text-[#239d60] text-xs font-semibold font-['Inter'] leading-3">
          Next
        </div>
      </div>
    </div>
  );
};

export default PagiationSection;
