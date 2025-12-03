// src/components/CategoryFilter.tsx (Aynı Kaldı)

import React from 'react';
import { Category } from '@/constants/types';

interface CategoryFilterProps {
    categories: Category[];
    selectedCategories: string[];
    onCategoryChange: (name: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategories, onCategoryChange }) => {
  return (
    <>
      <h2 className="text-lg font-semibold mb-3 border-b pb-2">Product Categories</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <label 
            key={category.id} 
            className="flex items-center text-sm cursor-pointer font-medium text-gray-800"
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(category.name)}
              onChange={() => onCategoryChange(category.name)}
              className="mr-2 text-orange-600 focus:ring-orange-500"
            />
            {category.name}
          </label>
        ))}
      </div>
    </>
  );
};

export default CategoryFilter;