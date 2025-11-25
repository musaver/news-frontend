export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-[#cc0000] rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
