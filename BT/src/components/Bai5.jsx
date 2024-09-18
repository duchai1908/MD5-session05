import React from "react";

export default function Bai5() {
  return (
    <div>
      <div class="relative w-96 h-64 bg-blue-500 p-4 shadow-lg">
        <div class="absolute bottom-0 left-0 p-2 bg-white bg-opacity-75">
          <p class="text-gray-800">Text ở góc trái dưới cùng</p>
        </div>
      </div>
      <div className="relative w-96 h-64 bg-red-600 p-4 shadow-lg">
        <div className="absolute bottom-0 right-0 bg-white bg-opacity-60 p-2">
            <p>hihi</p>
        </div>
      </div>
    </div>
  );
}
